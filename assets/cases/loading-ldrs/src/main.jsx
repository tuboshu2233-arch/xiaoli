import * as loaders from 'ldrs';
import './style.css';
const order=['ring','ring2','tailspin','lineSpinner','squircle','square','reuleaux','tailChase','dotSpinner','spiral','bouncy','treadmill','bouncyArc','waveform','hatch','hourglass','zoomies','lineWobble','infinity','trefoil','cardio','helix','grid','quantum','wobble','orbit','chaoticOrbit','superballs','trio','momentum','dotWave','leapfrog','newtonsCradle','dotStream','dotPulse','metronome','jelly','jellyTriangle','mirage','ping','pulsar','ripples','miyagi','pinwheel'];
const names={ring:'圆环',ring2:'轨迹圆环',tailspin:'旋转尾迹',lineSpinner:'线条旋转',squircle:'圆角方环',square:'方形',reuleaux:'弧形三角',tailChase:'追逐',dotSpinner:'圆点旋转',spiral:'螺旋',bouncy:'弹跳',treadmill:'跑步机',bouncyArc:'弹跳弧线',waveform:'波形',hatch:'交错线条',hourglass:'沙漏',zoomies:'疾驰',lineWobble:'摇摆线条',infinity:'无限',trefoil:'三叶环',cardio:'心形',helix:'双螺旋',grid:'网格',quantum:'量子',wobble:'摇摆',orbit:'轨道',chaoticOrbit:'交错轨道',superballs:'弹力球',trio:'三重',momentum:'动量',dotWave:'圆点波浪',leapfrog:'跳跃',newtonsCradle:'牛顿摆',dotStream:'圆点流',dotPulse:'圆点脉冲',metronome:'节拍器',jelly:'果冻',jellyTriangle:'三角果冻',mirage:'幻影',ping:'轻跳',pulsar:'脉冲',ripples:'涟漪',miyagi:'旋转交织',pinwheel:'风车'};
const english=key=>key==='ring2'?'Ring 2':key==='newtonsCradle'?"Newton’s Cradle":key.replace(/([A-Z])/g,' $1').replace(/^./,c=>c.toUpperCase());
const motion=matchMedia('(prefers-reduced-motion: reduce)');let paused=motion.matches,rate=1;
const grid=document.querySelector('#loaders-grid'),records=[];
for(const key of order){
 if(!loaders[key])continue;const tag='l-'+key.replace(/[A-Z]/g,c=>'-'+c.toLowerCase());loaders[key].register(tag);
 const article=document.createElement('article');article.className='loader-card';article.dataset.search=[names[key],english(key),key].join(' ').toLowerCase();
 const stage=document.createElement('div');stage.className='loader-stage';stage.setAttribute('aria-hidden','true');
 const element=document.createElement(tag);element.setAttribute('size','42');element.setAttribute('color','#202024');stage.append(element);
 const title=document.createElement('h2');title.textContent=names[key];const label=document.createElement('p');label.textContent=english(key);article.append(stage,title,label);grid.append(article);records.push({article,element,key});
}
document.querySelector('#total-count').textContent=records.length+' 种';
function sync(){requestAnimationFrame(()=>{for(const {element,article} of records){if(article.hidden)continue;const shadow=element.shadowRoot;if(!shadow)continue;const animations=new Set(Array.from(shadow.querySelectorAll('*')).flatMap(el=>el.getAnimations()));for(const animation of animations){if(!('animationName' in animation))continue;animation.playbackRate=rate;if(paused)animation.pause();else animation.play();}}});const button=document.querySelector('#pause');button.textContent=paused?'继续播放':'暂停动画';button.setAttribute('aria-pressed',String(paused));}
function filter(){const text=document.querySelector('#search').value.trim().toLowerCase();let shown=0;for(const {article} of records){article.hidden=!article.dataset.search.includes(text);if(!article.hidden)shown++}document.querySelector('#match-count').textContent=shown+' / '+records.length+' 种加载动画';let empty=document.querySelector('.loaders-empty');if(!shown&&!empty){empty=document.createElement('p');empty.className='loaders-empty';empty.textContent='没有找到匹配的动画';grid.append(empty)}if(empty)empty.hidden=shown>0;sync();}
document.querySelector('#pause').addEventListener('click',()=>{paused=!paused;sync()});
document.querySelector('#search').addEventListener('input',filter);
document.querySelector('#color').addEventListener('input',event=>{for(const {element} of records)element.setAttribute('color',event.target.value);sync()});
document.querySelector('#size').addEventListener('input',event=>{document.querySelector('#size-value').textContent=event.target.value;for(const {element} of records)element.setAttribute('size',event.target.value);sync()});
document.querySelector('#speed').addEventListener('change',event=>{rate=Number(event.target.value);sync()});
motion.addEventListener('change',event=>{if(event.matches){paused=true;sync()}});filter();
