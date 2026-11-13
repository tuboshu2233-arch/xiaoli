import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {slides,wrap,pose,typography} from './motion.js';
import {glassOpticsGLSL,glassShape} from './glass-optics.js';

const root=document.querySelector('#homepage'),stage=document.querySelector('#scene');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const headline=document.querySelector('#headline'),status=document.querySelector('#status');
const toggle=document.querySelector('#motion-toggle');
let current=0,playing=!reduced.matches,drag=null,dragX=0,dragY=0;
let pointerX=0,pointerY=0,targetX=0,targetY=0,width=960,height=707;
let renderer,scene,camera,glass,textPlane,texture,environment,pmrem,geometry,edges,frame=0;
let clock=0,lastTime=0,disposed=false,contextLost=false,textureWidth=0,textureHeight=0;
const glassUniforms={
  glassHalfSize:{value:glassShape.size/2},glassCornerRadius:{value:glassShape.radius},
  glassWorldMatrix:{value:new THREE.Matrix4()},glassInverseMatrix:{value:new THREE.Matrix4()},
  glassTitleTexture:{value:null},glassTitleSize:{value:new THREE.Vector2()},glassViewport:{value:new THREE.Vector2(960,707)},glassTitleZ:{value:-2.65}
};
const typeCanvas=document.createElement('canvas');
const typeContext=typeCanvas.getContext('2d');

function drawTypography(){
  if(!typeContext)return;
  const dpr=Math.min(window.devicePixelRatio||1,2);
  typeCanvas.width=Math.round(width*dpr);typeCanvas.height=Math.round(height*dpr);
  typeContext.setTransform(dpr,0,0,dpr,0,0);
  typeContext.fillStyle='#000';typeContext.fillRect(0,0,width,height);
  const type=typography(width,height);
  typeContext.font=`900 ${type.size}px Arial, Helvetica, sans-serif`;
  typeContext.textAlign='center';typeContext.textBaseline='alphabetic';
  typeContext.fillStyle='#ededed';
  slides[current].lines.forEach((line,i)=>typeContext.fillText(line,type.centerX,type.baselines[i]));
  if(texture){
    if(textureWidth!==typeCanvas.width||textureHeight!==typeCanvas.height){
      texture.dispose();texture=new THREE.CanvasTexture(typeCanvas);
      texture.colorSpace=THREE.SRGBColorSpace;texture.minFilter=THREE.LinearFilter;
      texture.magFilter=THREE.LinearFilter;texture.generateMipmaps=false;
      textureWidth=typeCanvas.width;textureHeight=typeCanvas.height;
      if(textPlane){textPlane.material.map=texture;textPlane.material.needsUpdate=true}
    }
    glassUniforms.glassTitleTexture.value=texture;
    texture.needsUpdate=true;
  }
}
function setSlide(index,announce=true){
  current=wrap(index,slides.length);root.dataset.slide=String(current);
  const text=slides[current].lines.join(' ');headline.textContent=text;
  stage.setAttribute('aria-label',`可拖动旋转的折射玻璃，背景文字为 ${text}`);
  document.querySelector('#manifesto-last').textContent=slides[current].last;
  document.querySelector('#page-number').textContent=String(current+1).padStart(2,'0');
  document.querySelectorAll('[data-slide]').forEach(button=>{
    if(button===root)return;
    const active=Number(button.dataset.slide)===current;
    if(button.parentElement.classList.contains('slide-dots'))button.setAttribute('aria-pressed',String(active));
    else if(button.closest('nav')){if(active)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current')}
  });
  drawTypography();if(announce)status.textContent=text;
}
document.querySelectorAll('button[data-slide]').forEach(button=>button.addEventListener('click',()=>setSlide(Number(button.dataset.slide))));
document.querySelector('#previous').addEventListener('click',()=>setSlide(current-1));
document.querySelector('#next').addEventListener('click',()=>setSlide(current+1));
document.querySelector('#explore').addEventListener('click',()=>setSlide(current+1));
function updateMotionButton(){toggle.setAttribute('aria-pressed',String(playing));toggle.setAttribute('aria-label',playing?'暂停自动转动':'开始自动转动');toggle.textContent=playing?'Pause motion':'Play motion'}
toggle.addEventListener('click',()=>{playing=!playing;updateMotionButton()});
reduced.addEventListener('change',()=>{if(reduced.matches)playing=false;updateMotionButton()});
document.addEventListener('keydown',event=>{
  if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName))return;
  if(event.key==='ArrowLeft'){event.preventDefault();setSlide(current-1)}
  if(event.key==='ArrowRight'){event.preventDefault();setSlide(current+1)}
});
stage.setAttribute('tabindex','0');
stage.addEventListener('pointermove',event=>{
  const rect=stage.getBoundingClientRect();
  targetX=(event.clientX-rect.left)/rect.width*2-1;targetY=(event.clientY-rect.top)/rect.height*2-1;
  if(drag){dragX=drag.rx+(event.clientX-drag.x)*.006;dragY=Math.max(-1.1,Math.min(1.1,drag.ry+(event.clientY-drag.y)*.006))}
});
stage.addEventListener('pointerdown',event=>{
  if(event.button!==0)return;
  drag={x:event.clientX,y:event.clientY,rx:dragX,ry:dragY};
  stage.setPointerCapture(event.pointerId);stage.classList.add('dragging');
});
function release(event){drag=null;stage.classList.remove('dragging');if(stage.hasPointerCapture(event.pointerId))stage.releasePointerCapture(event.pointerId)}
stage.addEventListener('pointerup',release);stage.addEventListener('pointercancel',release);
stage.addEventListener('pointerleave',()=>{if(!drag){targetX=0;targetY=0}});
stage.addEventListener('dblclick',()=>{dragX=0;dragY=0;targetX=0;targetY=0;status.textContent='已重置玻璃视角'});
stage.addEventListener('keydown',event=>{
  if(event.key===' '){event.preventDefault();playing=!playing;updateMotionButton()}
  if(event.key==='Home'){dragX=0;dragY=0;targetX=0;targetY=0}
});

function resize(){
  if(!renderer||disposed)return;
  const rect=stage.getBoundingClientRect();width=Math.max(1,rect.width);height=Math.max(1,rect.height);
  renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();
  const planeZ=-2.65,viewHeight=2*Math.tan(THREE.MathUtils.degToRad(camera.fov)/2)*(camera.position.z-planeZ);
  textPlane.scale.set(viewHeight*camera.aspect,viewHeight,1);
  glassUniforms.glassTitleSize.value.set(textPlane.scale.x,textPlane.scale.y);
  glassUniforms.glassViewport.value.set(width,height);
  drawTypography();
  const scale=.92*Math.min(1,width/height/1.358); glass.scale.setScalar(scale);edges.scale.copy(glass.scale);
}
function animate(now){
  frame=0;if(disposed||document.hidden||contextLost)return;
  const dt=lastTime?Math.min((now-lastTime)/1000,.05):0;lastTime=now;
  if(playing)clock+=dt;
  const damping=1-Math.exp(-dt*6);
  pointerX+=(targetX-pointerX)*damping;pointerY+=(targetY-pointerY)*damping;
  const p=pose({time:clock,pointerX,pointerY,dragX,dragY,playing:true});
  glass.rotation.set(p.x,p.y,p.z);glass.position.y=p.float-.02;
  edges.rotation.copy(glass.rotation);edges.position.copy(glass.position);
  glass.updateMatrixWorld();
  glassUniforms.glassWorldMatrix.value.copy(glass.matrixWorld);
  glassUniforms.glassInverseMatrix.value.copy(glass.matrixWorld).invert();
  renderer.render(scene,camera);
  frame=requestAnimationFrame(animate);
}
function resume(){if(renderer&&!frame&&!disposed&&!document.hidden&&!contextLost){lastTime=0;frame=requestAnimationFrame(animate)}}
document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;lastTime=0}else resume()});
const observer=new ResizeObserver(resize);
function initialize(){
  try{
    if(!typeContext)throw Error('Canvas 2D is unavailable');
    renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
    renderer.outputColorSpace=THREE.SRGBColorSpace;
    renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1;
    renderer.setClearColor(0x000000,1);renderer.transmissionResolutionScale=1;
    renderer.domElement.setAttribute('aria-hidden','true');stage.append(renderer.domElement);
    scene=new THREE.Scene();camera=new THREE.PerspectiveCamera(36,1,.1,40);camera.position.z=10;
    texture=new THREE.CanvasTexture(typeCanvas);texture.colorSpace=THREE.SRGBColorSpace;
    texture.minFilter=THREE.LinearFilter;texture.magFilter=THREE.LinearFilter;texture.generateMipmaps=false;
    textPlane=new THREE.Mesh(new THREE.PlaneGeometry(1,1),new THREE.MeshBasicMaterial({map:texture,toneMapped:false}));
    textPlane.position.z=-2.65;scene.add(textPlane);
    pmrem=new THREE.PMREMGenerator(renderer);const room=new RoomEnvironment();
    environment=pmrem.fromScene(room,.035);scene.environment=environment.texture;room.dispose();
    geometry=new RoundedBoxGeometry(glassShape.size,glassShape.size,glassShape.size,glassShape.segments,glassShape.radius);
    const material=new THREE.MeshPhysicalMaterial({color:0xe0e5ee,metalness:0,roughness:.065,transmission:.97,thickness:2.65,ior:1.43,dispersion:1.6,clearcoat:.22,clearcoatRoughness:.035,envMapIntensity:.25,attenuationColor:0xffffff,attenuationDistance:50,specularIntensity:.65,toneMapped:false});
    material.onBeforeCompile=shader=>{
      Object.assign(shader.uniforms,glassUniforms);
      shader.fragmentShader=shader.fragmentShader.replace('#include <transmission_pars_fragment>',glassOpticsGLSL);
    };
    material.customProgramCacheKey=()=> 'volume-optical-blur-v2';
    glass=new THREE.Mesh(geometry,material);scene.add(glass);
    edges=new THREE.LineSegments(new THREE.EdgesGeometry(geometry,30),new THREE.LineBasicMaterial({color:0xc3ccda,transparent:true,opacity:.13}));scene.add(edges);
    scene.add(new THREE.HemisphereLight(0xffffff,0x151525,.45));
    const key=new THREE.DirectionalLight(0xffffff,2);key.position.set(-3,5,6);scene.add(key);
    const rim=new THREE.DirectionalLight(0xadcaff,.8);rim.position.set(4,-1,-3);scene.add(rim);
    renderer.domElement.addEventListener('webglcontextlost',event=>{event.preventDefault();contextLost=true;cancelAnimationFrame(frame);frame=0;status.textContent='3D 渲染已暂停'});
    renderer.domElement.addEventListener('webglcontextrestored',()=>{contextLost=false;resize();resume()});
    observer.observe(stage);resize();resume();root.dataset.renderer='webgl';
  }catch(error){
    console.error('Glass homepage renderer:',error);root.dataset.renderer='unavailable';
    document.querySelector('#render-error').hidden=false;
    renderer?.dispose();
  }
}
window.addEventListener('pagehide',()=>{
  disposed=true;cancelAnimationFrame(frame);observer.disconnect();
  geometry?.dispose();glass?.material.dispose();edges?.geometry.dispose();edges?.material.dispose();
  textPlane?.geometry.dispose();textPlane?.material.dispose();texture?.dispose();environment?.dispose();pmrem?.dispose();renderer?.dispose();
},{once:true});
setSlide(0,false);updateMotionButton();initialize();
