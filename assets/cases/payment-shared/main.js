import gsap from 'gsap';
import icons from './icons.json';
import './style.css';
const variant=document.body.dataset.variant,soft=variant==='pop',motion=matchMedia('(prefers-reduced-motion: reduce)');
let rate=1,loop=false;
const ns='http://www.w3.org/2000/svg';
function svgNode(tag,attrs={}){const node=document.createElementNS(ns,tag);for(const [key,value] of Object.entries(attrs))node.setAttribute(key,String(value));return node;}
const styles={success:soft?'#16b978':'#00c950',failure:'#ee6269'};
function makeCard(result){
 const success=result==='success',color=styles[result],title=success?'支付成功':'支付失败';
 const article=document.createElement('article');article.className='payment-card';article.dataset.result=result;article.style.setProperty('--accent',color);article.style.setProperty('--glow',soft?'rgba(22,185,120,0)':success?'rgba(0,201,80,.2)':'rgba(238,98,105,.18)');
 const head=document.createElement('header');const label=document.createElement('span');label.className='card-number';label.textContent=success?'01 / SUCCESS':'02 / FAILURE';const phase=document.createElement('span');phase.className='phase';phase.textContent='处理中';head.append(label,phase);
 const stage=document.createElement('div');stage.className='symbol-stage';
 const svg=svgNode('svg',{viewBox:'0 0 240 240',class:'payment-symbol',role:'img','aria-label':title+'动画'});
 const particleGroup=svgNode('g',{'aria-hidden':'true'}),core=svgNode('g',{class:'symbol-core'});
 const ring=svgNode('circle',{cx:120,cy:120,r:50,fill:'none',stroke:color,'stroke-width':7,'stroke-linecap':'round',opacity:0});
 const disc=svgNode('circle',{cx:120,cy:120,r:soft?40:58,fill:color,opacity:0});
 const scale=soft?2.8:3.4,offset=120-12*scale;
 const mark=svgNode('g',{transform:`translate(${offset} ${offset}) scale(${scale})`,fill:'none',stroke:'#fff','stroke-width':soft?2.8:2.4,'stroke-linecap':'round','stroke-linejoin':'round'});
 const paths=[];for(const [tag,attrs] of (success?icons.tick:icons.cancel)){const clean={};for(const [key,value] of Object.entries(attrs)){if(['key','stroke','strokeWidth'].includes(key))continue;clean[key.replace(/[A-Z]/g,c=>'-'+c.toLowerCase())]=value;}const path=svgNode(tag,clean);mark.append(path);paths.push(path);}
 core.append(ring,disc,mark);svg.append(particleGroup,core);stage.append(svg);
 const particles=[];if(soft){for(let i=0;i<12;i++){const angle=i/12*Math.PI*2;const shape=i%3===0?svgNode('rect',{x:-2.4,y:-2.4,width:4.8,height:4.8,rx:.6,fill:color}):svgNode('circle',{cx:0,cy:0,r:i%2?2:3,fill:color});particleGroup.append(shape);particles.push({shape,angle});}}
 const h2=document.createElement('h2');h2.textContent=title;const description=document.createElement('p');description.className='result-description';description.setAttribute('role','status');description.setAttribute('aria-live','polite');
 const replay=document.createElement('button');replay.type='button';replay.className='replay-card';replay.textContent='重播';replay.setAttribute('aria-label','重播'+title);
 article.append(head,stage,h2,description,replay);
 const widget={result,article,phase,description,svg,core,ring,disc,mark,paths,particles,timeline:null,timer:null};replay.addEventListener('click',()=>play(widget));return widget;
}
const widgets=[makeCard('success'),makeCard('failure')];document.querySelector('#payment-grid').replaceChildren(...widgets.map(widget=>widget.article));
function pending(widget){widget.article.dataset.phase='processing';widget.phase.textContent='处理中';widget.description.textContent='正在处理支付结果…';}
function done(widget){widget.article.dataset.phase='complete';widget.phase.textContent='已完成';widget.description.textContent=widget.result==='success'?'支付已完成':'支付未完成，请重试';}
function pathReset(widget,finished=false){for(const path of widget.paths){const length=path.getTotalLength();path.style.strokeDasharray=String(length);path.style.strokeDashoffset=finished?'0':String(length);path.style.opacity='1';}}
function setFinal(widget){gsap.set(widget.core,{scale:1,x:0,y:0,svgOrigin:'120 120'});gsap.set(widget.ring,{opacity:0});gsap.set(widget.disc,{opacity:1});gsap.set(widget.mark,{opacity:1});widget.particles.forEach(({shape})=>gsap.set(shape,{opacity:0}));pathReset(widget,true);done(widget);}
function play(widget){
 clearTimeout(widget.timer);widget.timeline?.kill();pathReset(widget);pending(widget);
 if(motion.matches){setFinal(widget);return;}
 gsap.set(widget.core,{x:0,y:0,scale:soft?0:.4,svgOrigin:'120 120'});gsap.set(widget.disc,{opacity:soft?1:0});gsap.set(widget.mark,{opacity:0});gsap.set(widget.ring,{opacity:soft?0:1,rotation:-90,svgOrigin:'120 120',attr:{r:50,'stroke-width':7},strokeDasharray:Math.PI*100,strokeDashoffset:Math.PI*100*.98});
 widget.particles.forEach(({shape,angle})=>gsap.set(shape,{x:120+Math.cos(angle)*25,y:120+Math.sin(angle)*25,scale:.15,rotation:angle*180/Math.PI+45,svgOrigin:'0 0',opacity:0}));
 const timeline=gsap.timeline({onComplete:()=>{done(widget);if(loop&&!motion.matches)widget.timer=setTimeout(()=>play(widget),1400);}});widget.timeline=timeline;timeline.timeScale(rate);
 if(soft){
  timeline.to(widget.core,{scale:.17,duration:.18,ease:'power1.out'},.08).to(widget.core,{scale:1.72,duration:.25,ease:'power2.out'},.26).to(widget.core,{scale:.76,duration:.18,ease:'power2.inOut'},.51).to(widget.core,{scale:1,duration:.29,ease:'back.out(1.5)'},.69);
  timeline.set(widget.mark,{opacity:1},.57).to(widget.paths,{strokeDashoffset:0,duration:.3,stagger:.055,ease:'power1.out'},.57);
  widget.particles.forEach(({shape,angle},i)=>{const radius=i%2?87:101;timeline.to(shape,{x:120+Math.cos(angle)*radius,y:120+Math.sin(angle)*radius,scale:1,opacity:1,duration:.34,ease:'power2.out'},.55).to(shape,{opacity:0,scale:.2,duration:.25,ease:'power1.in'},.84);});
  if(widget.result==='failure')timeline.to(widget.core,{x:2.6,duration:.055,repeat:3,yoyo:true,ease:'sine.inOut'},.98);
 }else{
  timeline.to(widget.core,{scale:1.12,duration:.95,ease:'power2.out'},0).to(widget.ring,{strokeDashoffset:0,duration:.95,ease:'power2.inOut'},0).to(widget.ring,{attr:{r:29,'stroke-width':58},duration:.36,ease:'power2.in'},.95).to(widget.core,{scale:.91,duration:.3,ease:'power2.inOut'},1.04);
  timeline.set(widget.disc,{opacity:1},1.31).set(widget.ring,{opacity:0},1.31).set(widget.mark,{opacity:1},1.32).to(widget.paths,{strokeDashoffset:0,duration:.4,stagger:.075,ease:'power2.out'},1.32).to(widget.core,{scale:1,duration:.38,ease:'back.out(1.6)'},1.32);
  if(widget.result==='failure')timeline.to(widget.core,{x:3,duration:.06,repeat:3,yoyo:true,ease:'sine.inOut'},1.74);
 }
}
function playAll(){widgets.forEach(play);}
document.querySelector('#replay-all').addEventListener('click',playAll);
document.querySelector('#loop').addEventListener('click',event=>{loop=!loop;event.currentTarget.setAttribute('aria-pressed',String(loop));event.currentTarget.textContent=loop?'循环中':'循环播放';widgets.forEach(widget=>clearTimeout(widget.timer));if(loop)playAll();});
document.querySelector('#speed').addEventListener('change',event=>{rate=Number(event.target.value);widgets.forEach(widget=>widget.timeline?.timeScale(rate));});
motion.addEventListener('change',event=>{if(event.matches){loop=false;document.querySelector('#loop').setAttribute('aria-pressed','false');document.querySelector('#loop').textContent='循环播放';widgets.forEach(widget=>{clearTimeout(widget.timer);widget.timeline?.kill();setFinal(widget)})}});
playAll();
