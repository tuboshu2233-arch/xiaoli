export function pointOnRoundedPlate(x,y,plate){
  const determinant=plate.ex*plate.fy-plate.ey*plate.fx;
  if(Math.abs(determinant)<0.4)return false;
  const dx=x-plate.x,dy=y-plate.y;
  const u=Math.abs((dx*plate.fy-dy*plate.fx)/determinant);
  const v=Math.abs((dy*plate.ex-dx*plate.ey)/determinant);
  const padding=plate.padding||0;
  const radius=2*plate.aspect*plate.radius;
  const qx=u-(1-radius),qy=v-(plate.aspect-radius);
  return Math.hypot(Math.max(qx,0),Math.max(qy,0))+Math.min(Math.max(qx,qy),0)<=radius+padding;
}

export function projectedOrbitAngle(x,y,cx,cy,radius,ux,uy,vx,vy){
  const dx=(x-cx)/radius,dy=(y-cy)/radius;
  const determinant=ux*vy-uy*vx;
  const u=(dx*vy-dy*vx)/determinant;
  const v=(dy*ux-dx*uy)/determinant;
  return Math.hypot(u,v)<0.15?null:Math.atan2(v,u);
}

export function wrappedAngleDelta(previous,next){
  return Math.atan2(Math.sin(next-previous),Math.cos(next-previous));
}

export function galleryTargetRate(hovering,onCard,direction){
  if(!hovering)return 0;
  return (onCard?0.24:1)*direction;
}

const INPUT_EXTENSION = `
var galleryPX=0,galleryPY=0,galleryPointerActive=false,galleryDragging=false,galleryCardIndex=-1;
var galleryLastAngle=null,galleryLastY=0,galleryLastDragAt=0,galleryDragVelocity=0,galleryDirection=1,galleryCoasting=false;
var galleryFeedbackAt=0,galleryFeedbackKey='';
window.addEventListener('message',function(event){
  if(event.source!==window.parent)return;
  var input=event.data&&event.data.galleryInteraction;
  if(!input)return;
  var wasDragging=galleryDragging,now=performance.now();
  if(typeof input.x==='number')galleryPX=input.x;
  if(typeof input.y==='number')galleryPY=input.y;
  if(typeof input.pointer==='boolean')galleryPointerActive=input.pointer;
  if(typeof input.dragging==='boolean')galleryDragging=input.dragging;
  if(galleryDragging){
    var angle=projectedOrbitAngle(galleryPX*W,galleryPY*H,d2sx(RING.cx),d2sy(RING.cy),RING.a*K,U[0],U[1],V[0],V[1]);
    if(!wasDragging){galleryLastAngle=angle;galleryLastY=galleryPY;galleryDragVelocity=0;rate=0;vel=0;}
    else{
      // Unwrap the pointer angle rather than multiplying a speed: the orbit
      // advances by exactly the pointer's arc, in either direction.
      var delta=angle!==null&&galleryLastAngle!==null?wrappedAngleDelta(galleryLastAngle,angle):-(galleryPY-galleryLastY)*Math.PI*2;
      var advance=delta*DUR/(Math.PI*2);
      tNow=((tNow+advance)%DUR+DUR)%DUR;
      var dt=Math.max(0.008,(now-galleryLastDragAt)/1000);
      galleryDragVelocity=galleryDragVelocity*0.45+Math.max(-3.2,Math.min(3.2,advance/dt))*0.55;
      if(Math.abs(delta)>0.001)galleryDirection=delta<0?-1:1;
      galleryLastAngle=angle;galleryLastY=galleryPY;
    }
    galleryLastDragAt=now;galleryCoasting=false;settled=false;render(tNow);
  }else if(wasDragging){
    rate=galleryDragVelocity;vel=0;galleryCoasting=true;settled=false;
  }
  if(input.clear){galleryDragging=false;galleryPointerActive=false;galleryCardIndex=-1;galleryDragVelocity=0;galleryCoasting=false;rate=0;vel=0;}
  if(typeof input.inside==='boolean')setHover(input.inside);
});
function galleryCardAtPointer(){
  if(!galleryPointerActive||!hovering)return -1;
  var spin=(tNow/DUR)*Math.PI*2;
  var px=galleryPX*W,py=galleryPY*H;
  for(var index=0;index<RING.n;index++){
    var psi=RING.phase*Math.PI/180-index*2*Math.PI/RING.n+spin;
    var c=Math.cos(psi),s=Math.sin(psi);
    var C=[c*U[0]+s*V[0],c*U[1]+s*V[1],c*U[2]+s*V[2]];
    var T=[-s*U[0]+c*V[0],-s*U[1]+c*V[1],-s*U[2]+c*V[2]];
    var half=RING.tile/(2*RING.a),centre=project(C);
    var pT=project([C[0]+T[0]*half,C[1]+T[1]*half,C[2]+T[2]*half]);
    var pA=project([C[0]+AXIS[0]*half,C[1]+AXIS[1]*half,C[2]+AXIS[2]*half]);
    if(pointOnRoundedPlate(px,py,{x:centre[0],y:centre[1],ex:pT[0]-centre[0],ey:pT[1]-centre[1],fx:pA[0]-centre[0],fy:pA[1]-centre[1],aspect:RING.aspect,radius:RING.radius,padding:index===galleryCardIndex?0.055:0}))return index;
  }
  return -1;
}
function galleryReport(now){
  var speed=Math.round(Math.abs(rate)*100)/100;
  var mode=!hovering?(speed>0.03?'settling':'idle'):galleryDragging?'drag':galleryCoasting?'coast':galleryCardIndex>=0?'card':'normal';
  var key=mode+':'+speed;
  if(now-galleryFeedbackAt>120&&key!==galleryFeedbackKey){
    galleryFeedbackAt=now;galleryFeedbackKey=key;
    window.parent.postMessage({galleryFeedback:{mode:mode,speed:speed}},'*');
  }
}
`;

// Keep the registered files untouched. Add only the requested input and speed
// policy to the generated clock, retaining the authored spring and drawing code.
export function extendGalleryModule(source){
  const startMark='const GALLERY_HEADING_CLOCK = `';
  const endMark='`;\n\nfunction transformGalleryHeadingSource';
  const start=source.indexOf(startMark),end=source.indexOf(endMark,start);
  if(start<0||end<0)throw new Error('Gallery clock source revision is incompatible.');
  let clock=source.slice(start+startMark.length,end);
  const anchors=[
    '  if (playing){\n    if (SPRING){',
    '((hovering ? 1 : 0) - rate)',
    '  requestAnimationFrame(frame);\n}'
  ];
  for(const anchor of anchors)if(!clock.includes(anchor))throw new Error('Gallery clock anchor missing: '+anchor);
  clock=clock.replace(anchors[0],
    '  if (playing){\n    if(galleryDragging){rate=0;vel=0;galleryDragVelocity*=Math.exp(-dt/0.18);galleryReport(now);requestAnimationFrame(frame);return;}\n    galleryCardIndex=galleryCardAtPointer();\n    var desiredRate=galleryTargetRate(hovering,galleryCardIndex>=0,galleryDirection);\n    if(galleryCoasting&&Math.abs(rate-desiredRate)<0.08)galleryCoasting=false;\n    if (SPRING){');
  clock=clock.replaceAll(anchors[1],'(desiredRate - rate)');
  clock=clock.replace(anchors[2],'  galleryReport(now);\n  requestAnimationFrame(frame);\n}');
  clock=[pointOnRoundedPlate.toString(),projectedOrbitAngle.toString(),wrappedAngleDelta.toString(),galleryTargetRate.toString(),INPUT_EXTENSION,clock].join('\n');
  return source.slice(0,start)+'const GALLERY_HEADING_CLOCK = '+JSON.stringify(clock)+';'+source.slice(end+2);
}
