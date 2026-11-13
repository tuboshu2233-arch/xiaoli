import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import AnimatedList from '../../../../components/react-bits/AnimatedList/AnimatedList';
import DemoFrame from '../../../../components/react-bits/DemoFrame';
const items=[{title:'Brand assets',description:'24 files',meta:'2m'},{title:'Launch hero.png',description:'2.4 MB',meta:'18m'},{title:'Product tour.mp4',description:'148 MB',meta:'1h'},{title:'Pricing notes',description:'1,240 words',meta:'3h'}];
function App(){const [selected,setSelected]=useState('点击条目，或用上下方向键选择'),[version,setVersion]=useState(0);return <DemoFrame title="Animated List · 弹性列表" footer={<><span role="status">{selected}</span><button onClick={()=>setVersion(v=>v+1)}>重播入场</button></>}><div className="list-stage"><AnimatedList key={version} items={items} onItemSelect={(item,index)=>{console.log(item,index);setSelected('已选择：'+item.title)}} animation="pop" theme="dark"/></div></DemoFrame>}
createRoot(document.querySelector('#root')).render(<App/>);
