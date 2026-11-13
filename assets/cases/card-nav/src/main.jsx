import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import CardNav from '../../../../components/react-bits/CardNav/CardNav';
import DemoFrame from '../../../../components/react-bits/DemoFrame';
const items=[{label:'About',description:'The people and the story behind the studio.',links:[{label:'Company',href:'/company'},{label:'Careers',href:'/careers'}]},{label:'Projects',description:'Selected work from the last few years.',links:[{label:'Featured',href:'/featured'},{label:'Case studies',href:'/case-studies'}]},{label:'Contact',description:'Say hello, we read everything.',links:[{label:'Email',href:'mailto:hello@example.com'},{label:'LinkedIn',href:'https://linkedin.com'}]}];
function App(){const [selected,setSelected]=useState('点击 Menu，查看图标与卡片的联动展开');return <DemoFrame title="Card Nav · 菜单联动卡片" footer={<span role="status">{selected}</span>}><div className="nav-scene"><div className="nav-hero"><h2>Website<br/>Home Style</h2><p>A place for ideas to unfold.</p></div><CardNav logo="./logo.svg" logoAlt="Company" items={items} cta={{label:'Get started',href:'/signup',onClick:event=>{event.preventDefault();setSelected('Get started')}}} cardEffect="rise" openOn="click" onLinkClick={(link,item,event)=>{event.preventDefault();setSelected(link.label+' · '+link.href)}}/></div></DemoFrame>}
createRoot(document.querySelector('#root')).render(<App/>);
