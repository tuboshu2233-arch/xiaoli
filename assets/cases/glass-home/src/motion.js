export const slides=[
  {lines:['Website','Home','Style'],last:'websites.'},
  {lines:['Create','Your','World'],last:'possibilities.'},
  {lines:['Make','Ideas','Move'],last:'experiences.'}
];
export const wrap=(value,total)=>((value%total)+total)%total;
export function pose({time,pointerX=0,pointerY=0,dragX=0,dragY=0,playing=true}){
  const t=playing?time:0;
  return {x:.22+Math.sin(t*.23)*.1+pointerY*.24+dragY,y:.64+Math.sin(t*.17)*.27+pointerX*.42+dragX,z:.54+Math.sin(t*.19)*.08,float:Math.sin(t*.65)*.045};
}
export function typography(width,height){
  return {size:Math.min(height*.164,width*.135),centerX:width*.5,baselines:[height*.345,height*.522,height*.697]};
}
