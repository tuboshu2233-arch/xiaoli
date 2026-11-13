const BANNERS = [
  {
    "title": "山野之间",
    "sub": "Mountain Light",
    "image": "../depth-carousel/images/a.jpg"
  },
  {
    "title": "森林漫游",
    "sub": "Into the Forest",
    "image": "../depth-carousel/images/c.jpg"
  },
  {
    "title": "湖光山色",
    "sub": "Quiet Reflections",
    "image": "../depth-carousel/images/e.jpg"
  },
  {
    "title": "原野微风",
    "sub": "Open Fields",
    "image": "../depth-carousel/images/d.jpg"
  },
  {
    "title": "自然来信",
    "sub": "Wild Encounters",
    "image": "../depth-carousel/images/b.jpg"
  }
];
const slides=document.getElementById('bannerSlides'),title=document.getElementById('bannerTitle'),sub=document.getElementById('bannerSub'),dots=document.getElementById('bannerDots'),banner=document.getElementById('banner');
let current=0,timer=null;
slides.innerHTML=BANNERS.map((item,i)=>`<img src="${item.image}" alt="${item.title}" class="${i===0?'active':''}" draggable="false">`).join('');
function render(){slides.querySelectorAll('img').forEach((img,i)=>{img.classList.toggle('active',i===current);img.setAttribute('aria-hidden',i!==current)});title.textContent=BANNERS[current].title;sub.textContent=BANNERS[current].sub;dots.innerHTML=BANNERS.map((item,i)=>`<button type="button" data-dot="${i}" aria-pressed="${i===current}" aria-label="${item.title}"></button>`).join('')}
function stop(){clearInterval(timer)}
function start(){stop();if(!matchMedia('(prefers-reduced-motion: reduce)').matches)timer=setInterval(()=>{current=(current+1)%BANNERS.length;render()},3000)}
dots.addEventListener('click',e=>{const dot=e.target.closest('[data-dot]');if(!dot)return;current=Number(dot.dataset.dot);render();start()});
banner.addEventListener('pointerenter',stop);banner.addEventListener('pointerleave',start);banner.addEventListener('focusin',stop);banner.addEventListener('focusout',start);
banner.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight'].includes(e.key))return;e.preventDefault();current=(current+(e.key==='ArrowRight'?1:-1)+BANNERS.length)%BANNERS.length;render()});
render();start();
