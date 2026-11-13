import React from 'react';
import {createRoot} from 'react-dom/client';
import ScrollStack,{ScrollStackItem} from '../../../../components/react-bits/ScrollStack/ScrollStack';
import '../../../../components/react-bits/demo.css';
import './images.css';
const photos=[{"image": "../depth-carousel/images/a.jpg", "title": "山野之间", "sub": "Mountain Light"}, {"image": "../depth-carousel/images/c.jpg", "title": "森林漫游", "sub": "Into the Forest"}, {"image": "../depth-carousel/images/e.jpg", "title": "湖光山色", "sub": "Quiet Reflections"}, {"image": "../depth-carousel/images/d.jpg", "title": "原野微风", "sub": "Open Fields"}, {"image": "../depth-carousel/images/b.jpg", "title": "自然来信", "sub": "Wild Encounters"}];
function App(){return <main className="stack-demo"><header><span>REACT BITS</span><span>Scroll Stack · 图片滚动堆叠</span></header><div className="stack-viewport"><ScrollStack>{photos.map((photo,i)=><ScrollStackItem key={photo.image} itemClassName="photo-stack-card"><img src={photo.image} alt={photo.title} draggable="false"/><div className="photo-stack-caption"><span>{String(i+1).padStart(2,'0')} / 05</span><h2>{photo.title}</h2><p>{photo.sub}</p></div></ScrollStackItem>)}</ScrollStack></div><footer>向下滚动，浏览 5 张图片的缩放与堆叠。</footer></main>}
createRoot(document.querySelector('#root')).render(<App/>);
