import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const rise = document.body.dataset.variant === 'rise';
// Match the authored gradient stops in double-ring-carousel/src/chart.js.
const PALETTE = [
  ['#bd4c00','#ffb521'],
  ['#12bdc9','#23efed'],
  ['#2750d9','#3b70ff'],
  ['#7bcdf5','#bcecff'],
  ['#8a4a12','#e09a3c']
];
const DATA = (rise ? [
  { name:'北京', value:120 },
  { name:'上海', value:100 },
  { name:'广州', value:60 },
  { name:'深圳', value:40 }
] : [
  { name:'智能手机', value:320 },
  { name:'笔记本', value:240 },
  { name:'平板', value:180 },
  { name:'穿戴设备', value:150 },
  { name:'配件', value:110 }
]).map((item,index)=>({...item,colors:PALETTE[index]}));
const total=DATA.reduce((sum,d)=>sum+d.value,0), baseHeight=.48;
let selected=-1, hovered=-1, pointerDown=null, frameId=0, animationStart=0;
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
const cycleInterval=2500;
let autoplay=!reducedMotion.matches,cycleTimer=0,hoverScene=false,hoverLegend=false,keyboardFocus=false,draggingControls=false;
const app=document.querySelector('#app');
app.innerHTML=`<header class="head"><div><span class="eyebrow">3D CHART / ${rise?'CLICK TO RISE':'INTERACTIVE PIE'}</span><h1>${rise?'区域营收 · 点击增高':'产品结构 · 立体饼图'}</h1><p>自动轮播增高 · 点击选择 · 拖拽调整视角</p></div><div class="head-actions"><button class="autoplay" type="button" aria-pressed="${autoplay}">${autoplay?'暂停轮播':'开始轮播'}</button><button class="reset" type="button">重置图表</button></div></header>
<div class="scene">${rise?'<div class="ring-readout" role="status" aria-live="off"><span class="ring-name">总营收</span><div class="ring-number"><strong>320</strong><span>万元</span></div></div>':''}<div class="tip" role="status" aria-live="polite" hidden><button class="tip-close" type="button" aria-label="关闭数据弹窗">×</button><strong class="tip-name"></strong><dl><dt>${rise?'营收':'销售额'}</dt><dd class="value"></dd><dt>占比</dt><dd class="percent"></dd></dl></div></div>
<ul class="legend" aria-label="图例：点击选择扇区"></ul>
<footer class="footer"><span class="status" aria-live="off">${rise?'所有扇区高度一致':'未选择扇区'}</span><span>每 2.5 秒切换 · 悬停 / 拖拽暂停 · 示例数据 / 万元</span></footer>`;
const container=app.querySelector('.scene'), tip=app.querySelector('.tip'), legend=app.querySelector('.legend'),status=app.querySelector('.status');
const ringReadout=app.querySelector('.ring-readout');
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(35,1,.1,100);
camera.position.set(0,7.8,10.8);
const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,2));
renderer.setClearColor(0,0);
renderer.outputColorSpace=THREE.SRGBColorSpace;
renderer.toneMapping=THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure=.95;
renderer.domElement.setAttribute('role','img');
renderer.domElement.setAttribute('aria-label',rise?'交互式立体环形图，默认等高。可通过下方图例选择扇区增高。':'交互式实心立体饼图，可拖拽视角或通过下方图例选择扇区。');
container.prepend(renderer.domElement);
scene.add(new THREE.HemisphereLight(0xffffff,rise?0xa0b4c0:0x24415d,1.2));
const key=new THREE.DirectionalLight(0xffffff,2);key.position.set(-3,8,5);scene.add(key);
const fill=new THREE.DirectionalLight(rise?0xffffff:0x74c9ff,.8);fill.position.set(5,4,-5);scene.add(fill);
const controls=new OrbitControls(camera,renderer.domElement);
controls.target.set(0,.35,0);controls.enableDamping=false;controls.autoRotate=false;controls.enablePan=false;controls.enableZoom=false;
controls.minPolarAngle=.35;controls.maxPolarAngle=1.25;controls.rotateSpeed=.55;controls.update();controls.saveState();
const radius=3.15,inner=rise?1.85:0,gap=.065;
const surfaceVertex=`
varying vec3 vTint;
varying float vHeight;
void main(){
  vTint=color;
  vHeight=clamp(position.y,0.0,1.0);
  gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);
}`;
const surfaceFragment=`
uniform float uCap;
uniform float uEmphasis;
uniform float uStrength;
varying vec3 vTint;
varying float vHeight;
void main(){
  float topFace=step(0.5,vHeight);
  float alpha=uStrength;
  vec3 tint=vTint*(uCap>0.5?mix(0.82,1.1,topFace):0.95);
  tint*=1.0+uEmphasis*0.16;
  gl_FragColor=vec4(tint,alpha);
  #include <colorspace_fragment>
}`;
function surfaceMaterial(cap){
  return new THREE.ShaderMaterial({vertexColors:true,transparent:true,depthWrite:true,side:THREE.DoubleSide,toneMapped:false,
    uniforms:{uCap:{value:cap?1:0},uEmphasis:{value:0},uStrength:{value:.9}},vertexShader:surfaceVertex,fragmentShader:surfaceFragment});
}
function addContours(mesh,geometry,shape,color){
  const edgeMaterial=new THREE.ShaderMaterial({transparent:true,depthWrite:false,toneMapped:false,
    uniforms:{uColor:{value:new THREE.Color(color)}},
    vertexShader:`varying float vHeight;void main(){vHeight=clamp(position.y,0.0,1.0);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
    fragmentShader:`uniform vec3 uColor;varying float vHeight;void main(){gl_FragColor=vec4(uColor,0.68);\n#include <colorspace_fragment>\n}`});
  mesh.add(new THREE.LineSegments(new THREE.EdgesGeometry(geometry,25),edgeMaterial));
  for(const height of [0,1]){
    const points=shape.getPoints(96).map(p=>new THREE.Vector3(p.x,height,-p.y));
    const curve=new THREE.CurvePath();
    for(let i=1;i<points.length;i++)curve.add(new THREE.LineCurve3(points[i-1],points[i]));
    if(points[0].distanceTo(points.at(-1))>1e-6)curve.add(new THREE.LineCurve3(points.at(-1),points[0]));
    for(const [width,alpha] of height?[[.045,.1],[.014,.96]]:[[.035,.05],[.012,.65]]){
      const rim=new THREE.Mesh(new THREE.TubeGeometry(curve,Math.max(160,points.length*2),width,4,false),
        new THREE.MeshBasicMaterial({color,transparent:true,opacity:alpha,depthWrite:false,toneMapped:false,blending:THREE.AdditiveBlending}));
      mesh.add(rim);
    }
  }
}
let cursor=-Math.PI*.45;
const meshes=DATA.map((d,index)=>{
  const sweep=d.value/total*Math.PI*2,start=cursor,end=cursor+sweep,mid=cursor+sweep/2;cursor+=sweep;
  const outerPad=Math.asin(gap/2/radius);
  const shape=new THREE.Shape();
  shape.moveTo(radius*Math.cos(start+outerPad),radius*Math.sin(start+outerPad));
  shape.absarc(0,0,radius,start+outerPad,end-outerPad,false);
  if(inner>0){
    const innerPad=Math.asin(gap/2/inner);
    shape.lineTo(inner*Math.cos(end-innerPad),inner*Math.sin(end-innerPad));
    shape.absarc(0,0,inner,end-innerPad,start+innerPad,true);
  }else{
    // Solid pie: meet the two parallel offset cuts near the shared center.
    const tipRadius=gap/2/Math.sin(sweep/2);
    shape.lineTo(tipRadius*Math.cos(mid),tipRadius*Math.sin(mid));
  }
  shape.closePath();
  const geometry=new THREE.ExtrudeGeometry(shape,{depth:1,bevelEnabled:false,curveSegments:96,steps:1});
  geometry.rotateX(-Math.PI/2);
  geometry.computeBoundingBox();
  const positions=geometry.getAttribute('position'),colors=new Float32Array(positions.count*3);
  const low=new THREE.Color(d.colors[0]),high=new THREE.Color(d.colors[1]),color=new THREE.Color();
  const minX=geometry.boundingBox.min.x,spanX=geometry.boundingBox.max.x-minX;
  for(let vertex=0;vertex<positions.count;vertex++){
    color.copy(low).lerp(high,(positions.getX(vertex)-minX)/spanX);
    color.toArray(colors,vertex*3);
  }
  geometry.setAttribute('color',new THREE.BufferAttribute(colors,3));
  const top=surfaceMaterial(true),side=surfaceMaterial(false);
  const mesh=new THREE.Mesh(geometry,[top,side]);mesh.scale.y=baseHeight;
  addContours(mesh,geometry,shape,d.colors[1]);
  mesh.userData={index,mid,height:baseHeight,offset:0,fromHeight:baseHeight,fromOffset:0,targetHeight:baseHeight,targetOffset:0};scene.add(mesh);return mesh;
});
legend.innerHTML=DATA.map((d,i)=>`<li data-index="${i}" style="--swatch:linear-gradient(90deg,${d.colors.join(',')})"><button type="button" aria-pressed="false" aria-label="选择${d.name}"><span class="swatch" aria-hidden="true"></span>${d.name}<strong>${Math.round(d.value/total*1000)/10}%</strong></button></li>`).join('');
const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();
function hit(event){
  const rect=renderer.domElement.getBoundingClientRect();
  pointer.set((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1);
  raycaster.setFromCamera(pointer,camera);
  return raycaster.intersectObjects(meshes.filter(mesh=>mesh.visible),false)[0]?.object.userData.index??-1;
}
function popupIndex(){return selected>=0?selected:hovered;}
function updateTip(){
  const index=popupIndex();
  if(rise){
    tip.hidden=true;
    const d=index>=0?DATA[index]:null;
    ringReadout.querySelector('.ring-name').textContent=d?d.name:'总营收';
    ringReadout.querySelector('strong').textContent=(d?d.value:total).toLocaleString();
    ringReadout.style.setProperty('--readout-accent',d?d.colors[1]:'#ddecf6');
    // Project only the hole's center. The HTML text stays flat in screen space.
    const anchor=new THREE.Vector3(0,baseHeight*.65,0).project(camera);
    ringReadout.style.left=`${(anchor.x+1)/2*container.clientWidth}px`;
    ringReadout.style.top=`${(1-anchor.y)/2*container.clientHeight}px`;
    return;
  }
  if(index<0||!meshes[index].visible){tip.hidden=true;return;}
  const d=DATA[index],mesh=meshes[index],mid=mesh.userData.mid;
  tip.hidden=false;tip.querySelector('.tip-name').textContent=d.name;
  tip.querySelector('.value').textContent=`${d.value.toLocaleString()} 万元`;
  tip.querySelector('.percent').textContent=`${(d.value/total*100).toFixed(1)}%`;
  // Anchor to the selected solid's top surface and keep the popup inside the scene.
  const r=(radius+inner)/2;
  const anchor=new THREE.Vector3(Math.cos(mid)*r+mesh.position.x,mesh.scale.y+.12,-Math.sin(mid)*r+mesh.position.z).project(camera);
  const width=container.clientWidth,height=container.clientHeight,tw=tip.offsetWidth,th=tip.offsetHeight;
  const x=(anchor.x+1)/2*width,y=(1-anchor.y)/2*height;
  const left=x<width/2?x+20:x-tw-20;
  tip.style.left=`${Math.max(8,Math.min(width-tw-8,left))}px`;
  tip.style.top=`${Math.max(8,Math.min(height-th-8,y-th-18))}px`;
  tip.querySelector('.tip-close').hidden=selected<0;
}
function render(){scene.updateMatrixWorld();renderer.render(scene,camera);updateTip();}
function refresh(){
  meshes.forEach((mesh,i)=>mesh.material.forEach(mat=>{mat.uniforms.uEmphasis.value=i===selected?1:i===hovered?.4:0;}));
  legend.querySelectorAll('li').forEach((li,i)=>{li.classList.toggle('selected',i===selected);li.querySelector('button').setAttribute('aria-pressed',String(i===selected));});
  const stateText=selected<0?(rise?'所有扇区高度一致':'未选择扇区'):`${DATA[selected].name} · 扇区已增高`;
  status.textContent=`${autoplay?(cycleBlocked()?'轮播暂缓':'自动轮播'):'轮播已暂停'} · ${stateText}`;
  app.querySelector('.autoplay').textContent=autoplay?'暂停轮播':'开始轮播';
  app.querySelector('.autoplay').setAttribute('aria-pressed',String(autoplay));
  tip.setAttribute('aria-live',autoplay?'off':'polite');
  ringReadout?.setAttribute('aria-live',autoplay?'off':'polite');
}
function cycleBlocked(){return document.hidden||hoverScene||hoverLegend||keyboardFocus||draggingControls||pointerDown!==null;}
function scheduleCycle(){
  clearTimeout(cycleTimer);cycleTimer=0;
  if(autoplay&&!cycleBlocked())cycleTimer=setTimeout(()=>select((selected+1)%DATA.length),cycleInterval);
  refresh();
}
function animate(now){
  const t=Math.min(1,(now-animationStart)/420),ease=1-Math.pow(1-t,3);
  meshes.forEach(mesh=>{const u=mesh.userData;u.height=u.fromHeight+(u.targetHeight-u.fromHeight)*ease;u.offset=u.fromOffset+(u.targetOffset-u.fromOffset)*ease;mesh.scale.y=u.height;mesh.position.set(Math.cos(u.mid)*u.offset,0,-Math.sin(u.mid)*u.offset);});
  render();frameId=t<1?requestAnimationFrame(animate):0;
}
function select(index){
  selected=index;hovered=-1;cancelAnimationFrame(frameId);
  meshes.forEach((mesh,i)=>{const u=mesh.userData;u.fromHeight=u.height;u.fromOffset=u.offset;u.targetHeight=i===selected?(rise?1.05:.85):baseHeight;u.targetOffset=i===selected&&!rise?.22:0;});
  refresh();animationStart=performance.now();
  if(reducedMotion.matches)animate(animationStart+420);else frameId=requestAnimationFrame(animate);
  scheduleCycle();
}
legend.querySelectorAll('li').forEach((li,i)=>li.querySelector('button').addEventListener('click',()=>select(i)));
renderer.domElement.addEventListener('pointerdown',event=>{pointerDown={x:event.clientX,y:event.clientY,id:event.pointerId,moved:false};hovered=-1;container.classList.add('dragging');render();});
renderer.domElement.addEventListener('pointermove',event=>{
  if(pointerDown){if(Math.hypot(event.clientX-pointerDown.x,event.clientY-pointerDown.y)>6)pointerDown.moved=true;return;}
  const next=hit(event);if(next!==hovered){hovered=next;renderer.domElement.classList.toggle('over-slice',hovered>=0);refresh();render();}
});
renderer.domElement.addEventListener('pointerup',event=>{const down=pointerDown;pointerDown=null;container.classList.remove('dragging');if(down&&!down.moved&&down.id===event.pointerId)select(hit(event));scheduleCycle();});
function cancelPointer(){pointerDown=null;container.classList.remove('dragging');hovered=-1;refresh();render();scheduleCycle();}
renderer.domElement.addEventListener('pointercancel',cancelPointer);
renderer.domElement.addEventListener('pointerleave',()=>{if(!pointerDown){hovered=-1;refresh();render();}});
controls.addEventListener('change',render);
controls.addEventListener('start',()=>{draggingControls=true;scheduleCycle();});
controls.addEventListener('end',()=>{draggingControls=false;container.classList.remove('dragging');scheduleCycle();});
container.addEventListener('pointerenter',()=>{hoverScene=true;scheduleCycle();});
container.addEventListener('pointerleave',()=>{hoverScene=false;scheduleCycle();});
legend.addEventListener('pointerenter',()=>{hoverLegend=true;scheduleCycle();});
legend.addEventListener('pointerleave',()=>{hoverLegend=false;scheduleCycle();});
app.addEventListener('focusin',event=>{keyboardFocus=!!event.target.closest('.legend,.tip')&&event.target.matches(':focus-visible');scheduleCycle();});
app.addEventListener('focusout',()=>{keyboardFocus=false;scheduleCycle();});
document.addEventListener('visibilitychange',scheduleCycle);
reducedMotion.addEventListener('change',event=>{if(event.matches)autoplay=false;scheduleCycle();});
app.querySelector('.autoplay').addEventListener('click',()=>{autoplay=!autoplay;scheduleCycle();});
tip.querySelector('.tip-close').addEventListener('click',()=>select(-1));
document.addEventListener('keydown',event=>{if(event.key==='Escape')select(-1);});
app.querySelector('.reset').addEventListener('click',()=>{controls.reset();select(-1);});
const observer=new ResizeObserver(()=>{const w=container.clientWidth,h=container.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.zoom=w<480?.95:1;camera.updateProjectionMatrix();render();});observer.observe(container);
renderer.domElement.addEventListener('webglcontextlost',event=>{event.preventDefault();status.textContent='图形上下文已暂停，请刷新页面恢复';});
window.addEventListener('pagehide',()=>{clearTimeout(cycleTimer);cancelAnimationFrame(frameId);observer.disconnect();controls.dispose();meshes.forEach(mesh=>mesh.traverse(part=>{part.geometry?.dispose();const materials=Array.isArray(part.material)?part.material:[part.material];materials.forEach(mat=>mat?.dispose());}));renderer.dispose();});
refresh();render();scheduleCycle();
