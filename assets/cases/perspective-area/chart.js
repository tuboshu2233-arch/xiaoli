(() => {
  'use strict';
  const {DEFAULT_CAMERA,clamp,createScene,selectionMarkup,pickIndex}=AreaScene;
  const svg=document.querySelector('#chart'),plot=document.querySelector('#plot');
  const tooltip=document.querySelector('#tooltip'),dateLabel=document.querySelector('#tooltip-date');
  const tooltipValues=document.querySelector('#tooltip-values'),pinIndicator=document.querySelector('#pin-indicator');
  const tourButton=document.querySelector('#tour'),announcement=document.querySelector('#announcement');
  const mode=document.body.dataset.chart==='bar'?'bar':'area';
  const dates=Array.from({length:10},(_,i)=>`5.${i+1}`);
  const datasets=mode==='bar'?[
    [[2.4,5,5.5,5.5,10.2,12.1,17.3,18,22.8,23.2],[1.9,4.2,4.6,5,15.5,7.3,9.8,12.2,12.8,13.8]],
    [[3.1,6.8,7.2,9.3,14.8,17.2,15.9,22.5,24.7,27.3],[2.5,3.9,5.8,7.6,9.5,12.4,10.5,14.8,17.1,18.6]]
  ]:[
    [[1.6,6.3,7.4,7.3,11.4,13.2,16,19.7,22.7,22],[1,3.8,4.6,4.8,5.4,7.3,8.9,11.2,11.9,12.8]],
    [[2.4,5.5,8.3,10.1,9.2,15.8,18.6,17.4,24.3,26.2],[1.5,2.9,5.8,6.3,8.2,9.4,11.7,10.8,14.2,16.3]]
  ];
  const series=[
    {id:0,key:'blue',name:'系列一',color:'#3b70ff',z:1.05,thickness:.65,values:[...datasets[0][0]],visible:true},
    {id:1,key:'green',name:'系列二',color:'#23efed',z:.12,thickness:.58,values:[...datasets[0][1]],visible:true}
  ];
  const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
  const defaultIndex=mode==='bar'?3:6;
  const initialCamera=mode==='bar'?{yaw:0,pitch:.32}:DEFAULT_CAMERA;
  let camera={...initialCamera},scene=null,selected=defaultIndex,pinned=false,hoverPosition=null;
  let datasetIndex=0,touring=false,timer=null,drag=null,renderFrame=0,animationFrame=0;
  function render(){
    const rect=plot.getBoundingClientRect();
    scene=createScene({width:Math.max(rect.width,260),height:Math.max(rect.height,260),series,dates,camera,mode});
    svg.setAttribute('viewBox',`0 0 ${scene.width} ${scene.height}`);
    svg.innerHTML=scene.markup;
    updateSelection();
  }
  function requestRender(){if(renderFrame)return;renderFrame=requestAnimationFrame(()=>{renderFrame=0;render()})}
  function updateSelection(){
    const overlay=svg.querySelector('#selection');
    if(!scene||!overlay)return;
    if(selected===null||drag?.moved){overlay.innerHTML='';tooltip.hidden=true;return}
    overlay.innerHTML=selectionMarkup(scene,selected,series,dates.length);
    dateLabel.textContent=`05-${String(selected+1).padStart(2,'0')}`;
    pinIndicator.hidden=!pinned;
    tooltipValues.replaceChildren();
    series.filter(s=>s.visible).forEach(s=>{
      const row=document.createElement('div');row.className='tooltip-row';
      const swatch=document.createElement('span');swatch.className='swatch';swatch.style.background=s.color;
      const label=document.createElement('span');label.textContent=s.name;
      const value=document.createElement('span');value.className='value';value.textContent=s.values[selected].toFixed(1);
      row.append(swatch,label,value);tooltipValues.append(row);
    });
    tooltip.hidden=false;
    const anchor=scene.anchors.find(p=>p.index===selected)||{x:scene.width/2,y:scene.height/2};
    const point=hoverPosition||anchor;
    const w=tooltip.offsetWidth,h=tooltip.offsetHeight;
    let left=point.x+20;if(left+w>scene.width-8)left=point.x-w-16;
    tooltip.style.left=`${clamp(left,8,Math.max(8,scene.width-w-8))}px`;
    tooltip.style.top=`${clamp(point.y-66,8,Math.max(8,scene.height-h-8))}px`;
  }
  function speak(){if(selected!==null)announcement.textContent=`5月${selected+1}日，${series.filter(s=>s.visible).map(s=>`${s.name} ${s.values[selected].toFixed(1)}`).join('，')}${pinned?'，已锁定':''}`}
  function localPoint(event){const rect=plot.getBoundingClientRect();return {x:event.clientX-rect.left,y:event.clientY-rect.top}}
  function nearest(point){
    return scene?pickIndex(scene,point,dates.length):0;
  }
  function scheduleTour(){
    clearInterval(timer);timer=null;
    tourButton.setAttribute('aria-pressed',String(touring));tourButton.textContent=touring?'停止巡览':'自动巡览';
    if(touring&&!document.hidden)timer=setInterval(()=>{selected=((selected??-1)+1)%dates.length;hoverPosition=null;updateSelection()},1800);
  }
  function stopTour(){if(touring){touring=false;scheduleTour()}}
  svg.addEventListener('pointermove',event=>{
    const point=localPoint(event);
    if(drag){
      if(Math.hypot(event.clientX-drag.x,event.clientY-drag.y)>4)drag.moved=true;
      if(drag.moved){
        camera.yaw=clamp(drag.yaw+(event.clientX-drag.x)/420,-.5,.5);
        camera.pitch=clamp(drag.pitch-(event.clientY-drag.y)/440,.12,.75);
        svg.classList.add('dragging');requestRender();return;
      }
    }
    if(pinned||touring)return;
    selected=nearest(point);hoverPosition=point;updateSelection();
  });
  svg.addEventListener('pointerdown',event=>{
    if(event.button!==0)return;
    stopTour();drag={x:event.clientX,y:event.clientY,yaw:camera.yaw,pitch:camera.pitch,moved:false};
    svg.setPointerCapture(event.pointerId);
  });
  svg.addEventListener('pointerup',event=>{
    if(!drag)return;
    const moved=drag.moved;drag=null;svg.classList.remove('dragging');
    if(svg.hasPointerCapture(event.pointerId))svg.releasePointerCapture(event.pointerId);
    if(!moved){const point=localPoint(event);const next=nearest(point);pinned=!(pinned&&selected===next);selected=next;hoverPosition=point;speak();}
    updateSelection();
  });
  svg.addEventListener('pointercancel',()=>{drag=null;svg.classList.remove('dragging');updateSelection()});
  svg.addEventListener('pointerleave',()=>{if(!pinned&&!touring&&!drag){selected=null;hoverPosition=null;updateSelection()}});
  svg.addEventListener('focus',()=>{if(selected===null){selected=defaultIndex;hoverPosition=null;updateSelection()}});
  svg.addEventListener('keydown',event=>{
    if(!['ArrowLeft','ArrowRight','Home','End','Enter','Escape'].includes(event.key))return;
    event.preventDefault();stopTour();hoverPosition=null;
    if(event.key==='Escape'){selected=null;pinned=false;updateSelection();return}
    if(event.key==='Home')selected=0;
    else if(event.key==='End')selected=dates.length-1;
    else if(event.key==='Enter'){selected??=0;pinned=!pinned;}
    else{selected=clamp((selected??0)+(event.key==='ArrowRight'?1:-1),0,dates.length-1);pinned=true;}
    updateSelection();speak();
  });
  document.querySelectorAll('[data-series]').forEach(button=>button.addEventListener('click',()=>{
    const target=series[Number(button.dataset.series)];
    if(target.visible&&series.filter(s=>s.visible).length===1){announcement.textContent='至少保留一个系列';return}
    target.visible=!target.visible;button.setAttribute('aria-pressed',String(target.visible));render();speak();
  }));
  tourButton.addEventListener('click',()=>{touring=!touring;pinned=false;hoverPosition=null;if(selected===null)selected=0;scheduleTour();updateSelection()});
  document.querySelector('#reset').addEventListener('click',()=>{
    camera={...initialCamera};pinned=false;hoverPosition=null;drag=null;selected=defaultIndex;stopTour();render();
    announcement.textContent='已恢复参考视角';
  });
  function updateTable(){
    const rows=document.querySelector('#data-rows');rows.replaceChildren();
    dates.forEach((date,i)=>{const tr=document.createElement('tr');[date,...datasets[datasetIndex].map(values=>values[i].toFixed(1))].forEach(value=>{const td=document.createElement('td');td.textContent=value;tr.append(td)});rows.append(tr)});
  }
  document.querySelector('#refresh').addEventListener('click',()=>{
    cancelAnimationFrame(animationFrame);datasetIndex=1-datasetIndex;
    const from=series.map(s=>[...s.values]),target=datasets[datasetIndex],start=performance.now();
    const duration=reducedMotion.matches?0:850;
    const tick=now=>{
      const t=duration?Math.min(1,(now-start)/duration):1,k=1-(1-t)**3;
      series.forEach((s,j)=>{s.values=target[j].map((value,i)=>from[j][i]+(value-from[j][i])*k)});
      render();if(t<1)animationFrame=requestAnimationFrame(tick);
    };
    tick(start);updateTable();announcement.textContent=`已切换为第${datasetIndex+1}组示例数据`;
  });
  document.addEventListener('visibilitychange',scheduleTour);
  reducedMotion.addEventListener('change',()=>{if(reducedMotion.matches){cancelAnimationFrame(animationFrame);series.forEach((s,i)=>s.values=[...datasets[datasetIndex][i]]);render()}});
  const observer=new ResizeObserver(requestRender);observer.observe(plot);
  window.addEventListener('pagehide',()=>{clearInterval(timer);cancelAnimationFrame(animationFrame);cancelAnimationFrame(renderFrame);observer.disconnect()},{once:true});
  updateTable();render();
})();
