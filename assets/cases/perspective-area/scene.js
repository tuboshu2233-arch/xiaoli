/* Geometry and SVG rendering are independent of the DOM. */
((root,factory)=>{const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.AreaScene=api})(typeof globalThis!=='undefined'?globalThis:this,()=>{
  const WORLD={width:9,height:5.8,depth:2.1,max:30};
  const BAR_THICKNESS=.28,BAR_DEPTH=(WORLD.depth-BAR_THICKNESS)/2;
  const BAR_WIDTH=.13,BAR_GAP=.05,BAR_OFFSET=(BAR_WIDTH+BAR_GAP)/2;
  const DEFAULT_CAMERA={yaw:-.10,pitch:.32};
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const f=v=>Number(v.toFixed(2));
  function sampleCurve(values,steps=16){
    if(values.length<2)return values.map((y,x)=>({x,y}));
    const deltas=values.slice(1).map((v,i)=>v-values[i]);
    const slopes=values.map((_,i)=>i===0?deltas[0]:i===values.length-1?deltas.at(-1):deltas[i-1]*deltas[i]<=0?0:2*deltas[i-1]*deltas[i]/(deltas[i-1]+deltas[i]));
    const points=[];
    for(let i=0;i<values.length-1;i++)for(let step=0;step<steps;step++){
      const t=step/steps,t2=t*t,t3=t2*t;
      points.push({x:i+t,y:(2*t3-3*t2+1)*values[i]+(t3-2*t2+t)*slopes[i]+(-2*t3+3*t2)*values[i+1]+(t3-t2)*slopes[i+1]});
    }
    points.push({x:values.length-1,y:values.at(-1)});return points;
  }
  function makeProjector(width,height,camera=DEFAULT_CAMERA,baselineDepth=null){
    const cy=Math.cos(camera.yaw),sy=Math.sin(camera.yaw),cp=Math.cos(camera.pitch),sp=Math.sin(camera.pitch);
    function cameraRaw(x,y,z){
      const xx=x-WORLD.width/2,zz=z-WORLD.depth/2;
      const rx=xx*cy+zz*sy,depth=-xx*sy+zz*cy;
      const ry=y*cp+depth*sp,rz=y*sp-depth*cp,k=19/(19-rz);
      return {x:rx*k,y:-ry*k};
    }
    // Level the baseline at the actual bar depth without flattening the scene.
    const start=cameraRaw(0,0,baselineDepth??0),end=cameraRaw(WORLD.width,0,baselineDepth??0);
    const roll=baselineDepth!==null?Math.atan2(end.y-start.y,end.x-start.x):0;
    const cr=Math.cos(roll),sr=Math.sin(roll);
    function raw(x,y,z){const q=cameraRaw(x,y,z);return {x:q.x*cr+q.y*sr,y:-q.x*sr+q.y*cr}}
    const corners=[];
    for(const x of [0,WORLD.width])for(const y of [0,WORLD.height])for(const z of [0,WORLD.depth])corners.push(raw(x,y,z));
    const minX=Math.min(...corners.map(p=>p.x)),maxX=Math.max(...corners.map(p=>p.x)),minY=Math.min(...corners.map(p=>p.y)),maxY=Math.max(...corners.map(p=>p.y));
    const margin={left:width<500?36:47,right:width<500?15:25,top:32,bottom:31};
    const scale=Math.min((width-margin.left-margin.right)/(maxX-minX),(height-margin.top-margin.bottom)/(maxY-minY));
    const ox=margin.left+(width-margin.left-margin.right-(maxX-minX)*scale)/2-minX*scale;
    const oy=margin.top+(height-margin.top-margin.bottom-(maxY-minY)*scale)/2-minY*scale;
    return (x,value,z)=>{const p=raw(x,value/WORLD.max*WORLD.height,z);return {x:f(p.x*scale+ox),y:f(p.y*scale+oy)}};
  }
  const line=points=>points.map((p,i)=>`${i?'L':'M'}${f(p.x)},${f(p.y)}`).join('');
  const polygon=(points,attrs)=>`<path d="${line(points)}Z" ${attrs}/>`;
  function createScene({width,height,series,dates,camera=DEFAULT_CAMERA,mode='area'}){
    const project=makeProjector(width,height,camera,mode==='bar'?BAR_DEPTH:null),W=WORLD.width,D=WORLD.depth,M=WORLD.max;
    const p=(x,y,z)=>project(x,y,z),segments=dates.length-1;
    const xAt=index=>mode==='bar'?(index+.5)/dates.length*W:index/segments*W;
    const path=(points,attrs)=>`<path d="${line(points)}" ${attrs}/>`;
    const ticks=[0,7.5,15,22.5,30];
    let markup=`<defs>
      <linearGradient id="blue-front" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b70ff" stop-opacity=".5"/><stop offset="1" stop-color="#2750d9" stop-opacity=".06"/></linearGradient>
      <linearGradient id="green-front" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#23efed" stop-opacity=".49"/><stop offset="1" stop-color="#12bdc9" stop-opacity=".04"/></linearGradient>
      <linearGradient id="blue-top"><stop stop-color="#2750d9" stop-opacity=".54"/><stop offset="1" stop-color="#3b70ff" stop-opacity=".86"/></linearGradient>
      <linearGradient id="green-top"><stop stop-color="#12bdc9" stop-opacity=".48"/><stop offset="1" stop-color="#23efed" stop-opacity=".73"/></linearGradient>
      <linearGradient id="floor" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#143a50" stop-opacity=".22"/><stop offset="1" stop-color="#0c192b" stop-opacity=".5"/></linearGradient>
    </defs><desc>双系列立体${mode==='bar'?'柱状':'面积'}图</desc><g aria-hidden="true">`;
    markup+=polygon([p(0,0,0),p(W,0,0),p(W,0,D),p(0,0,D)],'fill="url(#floor)"');
    markup+=polygon([p(0,0,D),p(W,0,D),p(W,M,D),p(0,M,D)],'fill="#243b4f" fill-opacity=".14"');
    markup+=polygon([p(0,0,0),p(0,0,D),p(0,M,D),p(0,M,0)],'fill="#344d62" fill-opacity=".15" stroke="#718b9d" stroke-opacity=".18"');
    const grid='fill="none" stroke="#91a9ba" stroke-opacity=".25" stroke-width="1" stroke-dasharray="5 8"';
    ticks.forEach(v=>{
      markup+=path([p(0,v,0),p(0,v,D),p(W,v,D)],grid);
      const label=p(0,v,0);markup+=`<text x="${label.x-13}" y="${label.y+4}" text-anchor="end" fill="#b2c1cd" font-size="${width<500?10:12}">${Math.round(v)}</text>`;
    });
    dates.forEach((date,i)=>{
      const x=xAt(i);
      markup+=path([p(x,0,0),p(x,0,D)],'fill="none" stroke="#68879b" stroke-opacity=".2" stroke-width="1"');
      if(i%2===0)markup+=path([p(x,0,D),p(x,M,D)],'fill="none" stroke="#648499" stroke-opacity=".1" stroke-width="1"');
      const label=p(x,0,0);
      if(width>=490||i%2===0||i===segments)markup+=`<text x="${label.x}" y="${label.y+22}" text-anchor="middle" fill="#b2c2cd" font-size="${width<500?9:11}">${esc(date)}</text>`;
    });
    markup+=`<text x="12" y="20" fill="#9cabb8" font-size="11">单位</text>`;
    const anchors=[];
    [...series].sort((a,b)=>b.z-a.z).filter(s=>s.visible).forEach(s=>{
      if(mode==='bar'){
        s.values.forEach((value,i)=>{
          const x=xAt(i)+(s.id===0?-BAR_OFFSET:BAR_OFFSET),half=BAR_WIDTH/2,z=BAR_DEPTH,back=z+BAR_THICKNESS;
          const a=p(x-half,0,z),b=p(x+half,0,z),c=p(x+half,value,z),d=p(x-half,value,z);
          const bb=p(x+half,0,back),cc=p(x+half,value,back),dd=p(x-half,value,back);
          const cap=s.id===0?'#3b70ff':'#23efed';
          markup+=polygon([a,b,c,d],`fill="url(#${s.key}-front)" stroke="${s.color}" stroke-opacity=".65" stroke-width=".7"`);
          markup+=polygon([b,bb,cc,c],`fill="${cap}" fill-opacity=".4" stroke="${s.color}" stroke-opacity=".5" stroke-width=".6"`);
          markup+=polygon([d,c,cc,dd],`fill="${cap}" fill-opacity=".96"`);
          const q=p(x,value,z+BAR_THICKNESS/2);anchors.push({...q,index:i,series:s.id,value,color:s.color,base:p(x,0,z)});
        });
        return;
      }
      const curve=sampleCurve(s.values),z=s.z,back=z+s.thickness;
      const front=curve.map(q=>p(q.x/segments*W,q.y,z));
      const rear=curve.map(q=>p(q.x/segments*W,q.y,back));
      const frontBase=[p(W,0,z),p(0,0,z)];
      markup+=polygon([...rear,p(W,0,back),p(0,0,back)],`fill="url(#${s.key}-front)" opacity=".45"`);
      markup+=polygon([...front,...frontBase],`fill="url(#${s.key}-front)"`);
      markup+=polygon([...front,...[...rear].reverse()],`fill="url(#${s.key}-top)"`);
      markup+=polygon([front.at(-1),rear.at(-1),p(W,0,back),p(W,0,z)],`fill="${s.color}" fill-opacity=".15"`);
      markup+=path(rear,`fill="none" stroke="${s.color}" stroke-width="2.2" stroke-opacity=".9" stroke-linejoin="round"`);
      markup+=path(front,`fill="none" stroke="${s.color}" stroke-width="2.7" stroke-opacity=".96" stroke-linejoin="round"`);
      s.values.forEach((v,i)=>{
        const q=p(i/segments*W,v,z);anchors.push({...q,index:i,series:s.id,value:v,color:s.color});
        if(width>620)markup+=`<text x="${q.x}" y="${q.y+15}" text-anchor="middle" fill="#b1d2e7" fill-opacity=".4" font-size="8">${Number(v.toFixed(1))}</text>`;
      });
    });
    markup+=path([p(0,M,0),p(0,0,0),p(W,0,0),p(W,0,D),p(W,M,D)],'fill="none" stroke="#7d96a6" stroke-opacity=".22" stroke-width="1"');
    markup+='</g><g id="selection" aria-hidden="true"></g>';
    return {markup,project,anchors,width,height,mode,interactionDepth:mode==='bar'?BAR_DEPTH+BAR_THICKNESS/2:0};
  }
  function selectionBounds(mode,index,count){
    const step=WORLD.width/(mode==='bar'?count:count-1);
    const center=mode==='bar'?(index+.5)*step:index*step;
    return {center,left:Math.max(0,center-step/2),right:Math.min(WORLD.width,center+step/2)};
  }
  function pickIndex(scene,point,count){
    // Use date regions at the series depth, not distances to bar tops.
    // Otherwise tall neighboring bars can steal a short bar's hover selection.
    function boundaryX(x){
      const bottom=scene.project(x,0,scene.interactionDepth),top=scene.project(x,WORLD.max,scene.interactionDepth);
      const t=clamp((point.y-bottom.y)/(top.y-bottom.y),0,1);
      return bottom.x+(top.x-bottom.x)*t;
    }
    for(let i=0;i<count-1;i++)if(point.x<boundaryX(selectionBounds(scene.mode,i,count).right))return i;
    return count-1;
  }
  function selectionMarkup(scene,index,series,count){
    const bounds=selectionBounds(scene.mode,index,count),x=bounds.center,p=scene.project;
    const left=bounds.left,right=bounds.right,D=WORLD.depth,M=WORLD.max;
    const a=p(left,0,0),b=p(right,0,0),c=p(right,M,0),d=p(left,M,0);
    const aa=p(left,0,D),bb=p(right,0,D),cc=p(right,M,D),dd=p(left,M,D);
    let out=`<g data-selection-volume="true" data-index="${index}">`;
    const face=(points,name,opacity)=>polygon(points,`data-face="${name}" fill="#d5eafc" fill-opacity="${opacity}" stroke="#b6d2e6" stroke-opacity=".15" stroke-width=".65"`);
    out+=face([aa,bb,cc,dd],'back',.022);
    out+=face([a,aa,dd,d],'left',.045);
    out+=face([b,bb,cc,c],'right',.045);
    out+=face([a,b,bb,aa],'bottom',.025);
    out+=face([d,c,cc,dd],'top',.065);
    out+=face([a,b,c,d],'front',.027);
    out+='</g>';
    series.filter(s=>s.visible).forEach(s=>{
      const markerX=scene.mode==='bar'?x+(s.id===0?-BAR_OFFSET:BAR_OFFSET):x;
      const markerZ=scene.mode==='bar'?BAR_DEPTH+BAR_THICKNESS/2:s.z;
      const q=p(markerX,s.values[index],markerZ);
      out+=pathSelection([p(markerX,0,markerZ),q],s.color);
      out+=`<circle cx="${q.x}" cy="${q.y}" r="5.5" fill="${s.color}" fill-opacity=".15"/><circle cx="${q.x}" cy="${q.y}" r="3" fill="#d2f2ff" stroke="${s.color}" stroke-width="1.5"/>`;
    });
    return out;
  }
  function pathSelection(points,color){return `<path d="${line(points)}" fill="none" stroke="${color}" stroke-opacity=".42" stroke-width="1" stroke-dasharray="3 5"/>`}
  return {WORLD,BAR_DEPTH,BAR_THICKNESS,BAR_WIDTH,BAR_GAP,BAR_OFFSET,DEFAULT_CAMERA,clamp,sampleCurve,makeProjector,createScene,selectionBounds,pickIndex,selectionMarkup};
});
