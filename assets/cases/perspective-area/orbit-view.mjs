import { Vector3 } from 'three';

export function contentViewport(width,height){
  const left=width<500?36:47,right=width<500?15:25,top=32,bottom=31;
  return {left,top,width:width-left-right,height:height-top-bottom};
}

// Fit the starting view only on load/resize. Dragging never changes the lens
// distance or refits the current silhouette, so the model does not pump in size.
export function fitCameraDistance(world,aspect,elevation,fov=35){
  const tanV=Math.tan(fov*Math.PI/360),tanH=tanV*aspect;
  const sin=Math.sin(elevation),cos=Math.cos(elevation);
  let distance=0;
  for(const x of [-world.width/2,world.width/2])
    for(const y of [-world.height/2,world.height/2])
      for(const z of [-world.depth/2,world.depth/2]){
        const up=y*cos-z*sin,near=y*sin+z*cos;
        distance=Math.max(distance,near+Math.abs(x)/tanH,near+Math.abs(up)/tanV);
      }
  return distance*1.12;
}

export function createViewProjection(camera,width,height){
  const viewport=contentViewport(width,height),point=new Vector3();
  camera.updateMatrixWorld();
  return {
    eyeX:camera.position.x,
    projectWorld(x,y,z){
      point.set(x,y,-z).project(camera);
      return {x:+(viewport.left+(point.x+1)*viewport.width/2).toFixed(2),y:+(viewport.top+(1-point.y)*viewport.height/2).toFixed(2)};
    },
    depthWorld(x,y,z){return point.set(x,y,-z).applyMatrix4(camera.matrixWorldInverse).z;}
  };
}
