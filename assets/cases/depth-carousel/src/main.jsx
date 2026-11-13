import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import DepthCarousel from '../../../../components/react-bits/DepthCarousel/DepthCarousel';
import DemoFrame from '../../../../components/react-bits/DemoFrame';
const items=[{image:'./images/a.jpg',alt:'One'},{image:'./images/b.jpg',alt:'Two'},{image:'./images/c.jpg',alt:'Three'},{image:'./images/d.jpg',alt:'Four'},{image:'./images/e.jpg',alt:'Five'}];
function App(){const [active,setActive]=useState(0);return <DemoFrame title="Depth Carousel · 纵深轮播" footer={<><span>拖动、滚轮或方向键切换 · 悬停暂停自动轮播</span><span>{String(active+1).padStart(2,'0')} / 05</span></>}><div className="depth-stage"><DepthCarousel items={items} depth={220} spread={90} tilt={22} tiltDirection="right" perspective={1400} visibleCards={4} falloff={0.2} blur={6} autoplay loop onChange={index=>setActive(index)}/></div></DemoFrame>}
createRoot(document.querySelector('#root')).render(<App/>);
