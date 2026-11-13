import React,{useRef,useState,useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import {GalleryHeading,GALLERY_HEADING_VARIANTS,GALLERY_HEADING_FONTS} from '@designcodeio/threeui';
import '@designcodeio/threeui/style.css';
import './page.css';

// Copy changes are an integration concern; the registered files stay exact.
// Keep the authored font proportions when shorter words replace the original.
const variant=GALLERY_HEADING_VARIANTS['rising-diagonal'];
const headline=['Website','Home Style'];
const measure=document.createElement('canvas').getContext('2d');
if(!measure)throw new Error('Gallery Heading requires Canvas 2D.');
measure.font='400 100px '+GALLERY_HEADING_FONTS.sans;
const capUnit=(measure.measureText('H').actualBoundingBoxAscent||71)/100;
measure.font='400 '+(142/capUnit)+'px '+GALLERY_HEADING_FONTS.sans;
measure.letterSpacing=(variant.type.tracking*142)+'px';
function inkWidth(text:string){
  const metrics=measure!.measureText(text);
  return (metrics.actualBoundingBoxRight||metrics.width)+(metrics.actualBoundingBoxLeft||0);
}
const headlineWidths=headline.map((text,index)=>variant.headlineWidths[index]*inkWidth(text)/inkWidth(variant.headline[index]));
Object.assign(variant,{title:'Website Home Style',headline,headlineWidths});

export function Scene(){
  const holder=useRef<HTMLDivElement>(null);
  const activeRef=useRef(false);
  const drag=useRef<{id:number}|null>(null);
  const [active,setActive]=useState(false);
  const [dragging,setDragging]=useState(false);
  const [feedback,setFeedback]=useState({mode:'idle',speed:0});
  const labels:Record<string,string>={idle:'移入预览',settling:'平滑停转',normal:'正常旋转',card:'卡片减速',drag:'跟随拖动',coast:'惯性回落'};
  function post(input:Record<string,number|boolean>){
    holder.current?.querySelector('iframe')?.contentWindow?.postMessage({galleryInteraction:input},'*');
  }
  function setHover(value:boolean){
    if(activeRef.current===value)return;
    activeRef.current=value;setActive(value);
    holder.current?.querySelector('iframe')?.contentWindow?.postMessage({threeuiRuntime:{hover:value?1:0}},'*');
  }
  function coordinates(event:{clientX:number,clientY:number}){
    const bounds=holder.current!.getBoundingClientRect();
    return {x:(event.clientX-bounds.left)/bounds.width,y:(event.clientY-bounds.top)/bounds.height};
  }
  function move(event:React.PointerEvent<HTMLButtonElement>){
    const point=coordinates(event),gesture=drag.current;
    if(gesture&&gesture.id===event.pointerId){
      post({...point,pointer:true,inside:true,dragging:true});
    }else post({...point,pointer:true,inside:true});
    setHover(true);
  }
  function beginDrag(event:React.PointerEvent<HTMLButtonElement>){
    if(event.button!==0)return;
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current={id:event.pointerId};
    setDragging(true);setHover(true);
    post({...coordinates(event),pointer:true,inside:true,dragging:true});
  }
  function endDrag(event:React.PointerEvent<HTMLButtonElement>,cancel=false){
    if(!drag.current||drag.current.id!==event.pointerId)return;
    drag.current=null;setDragging(false);
    if(event.currentTarget.hasPointerCapture(event.pointerId))event.currentTarget.releasePointerCapture(event.pointerId);
    const point=coordinates(event),inside=!cancel&&point.x>=0&&point.x<=1&&point.y>=0&&point.y<=1;
    setHover(inside);post({...point,pointer:inside,inside,dragging:false,...(cancel?{clear:true}:{})});
  }
  function leave(){if(!drag.current){setHover(false);post({pointer:false,inside:false,dragging:false})}}
  function reset(){drag.current=null;setDragging(false);setHover(false);post({clear:true,inside:false})}
  useEffect(()=>{
    const frame=holder.current?.querySelector('iframe');
    const sync=()=>frame?.contentWindow?.postMessage({threeuiRuntime:{hover:activeRef.current?1:0}},'*');
    const report=(event:MessageEvent)=>{
      const value=event.data?.galleryFeedback;
      if(event.source===frame?.contentWindow&&value&&Object.hasOwn(labels,value.mode)&&Number.isFinite(value.speed))setFeedback({mode:value.mode,speed:Math.max(0,Math.min(10,value.speed))});
    };
    const hidden=()=>{if(document.hidden)reset()};
    frame?.addEventListener('load',sync);
    window.addEventListener('message',report);window.addEventListener('blur',reset);document.addEventListener('visibilitychange',hidden);
    return()=>{frame?.removeEventListener('load',sync);window.removeEventListener('message',report);window.removeEventListener('blur',reset);document.removeEventListener('visibilitychange',hidden)};
  },[]);
  return <main className="gallery-case">
    <h1 className="sr-only">Website Home Style</h1>
    <div className="shader-frame" ref={holder}>
      <GalleryHeading
        variant="rising-diagonal"
        mode="dark"
        font="sans"
        weight="400"
        headlineSize={1.15}
        hue={0}
        saturation={1.00}
        brightness={1.00}
      />
      <button className={'pointer-surface'+(dragging?' is-dragging':'')} type="button" aria-label="画廊交互：悬停卡片减速，拖动跟随鼠标方向，空格切换，Esc停止" aria-pressed={active}
        onPointerEnter={move} onPointerMove={move} onPointerLeave={leave}
        onPointerDown={beginDrag} onPointerUp={event=>endDrag(event)} onPointerCancel={event=>endDrag(event,true)} onLostPointerCapture={event=>endDrag(event,true)}
        onMouseEnter={()=>setHover(true)} onMouseLeave={leave}
        onMouseMove={event=>{if(!drag.current){setHover(true);post({...coordinates(event),pointer:true,inside:true})}}}
        onClick={event=>{setHover(true);if(event.detail)post({...coordinates(event),pointer:true,inside:true})}} onBlur={reset}
        onKeyDown={event=>{if(event.key===' '||event.key==='Enter'){event.preventDefault();post({pointer:false,dragging:false});setHover(!activeRef.current)}if(event.key==='Escape')reset()}}
      />
      <div className="gallery-feedback" aria-hidden="true"><span>悬停卡片减速 · 拖动旋转</span><span>{labels[feedback.mode]}{feedback.mode!=='drag'&&feedback.speed>0.01?' · '+feedback.speed.toFixed(2)+'×':''}</span></div>
    </div>
  </main>;
}

createRoot(document.querySelector('#root')!).render(<Scene/>);
