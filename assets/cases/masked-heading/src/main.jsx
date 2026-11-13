import React, {useEffect,useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import MaskedHeading from './MaskedHeading';
import './page.css';

function App(){
  const holder=useRef(null);
  const [version,setVersion]=useState(0);
  const [playing,setPlaying]=useState(false);
  const [failed,setFailed]=useState(false);
  const [message,setMessage]=useState('');
  useEffect(()=>{
    const video=holder.current?.querySelector('video');
    if(!video)return;
    const update=()=>setPlaying(!video.paused);
    const error=()=>{setFailed(true);setMessage('视频暂时无法播放，当前显示封面。')};
    video.addEventListener('play',update);video.addEventListener('pause',update);video.addEventListener('error',error);
    update();
    return()=>{video.removeEventListener('play',update);video.removeEventListener('pause',update);video.removeEventListener('error',error)};
  },[version]);
  async function toggleVideo(){
    const video=holder.current?.querySelector('video');
    if(!video)return;
    if(video.paused){try{await video.play();setMessage('视频已播放')}catch{setMessage('视频未能播放，请重试。')}}
    else {video.pause();setMessage('视频已暂停')}
  }
  return <main className="masked-case">
    <header className="case-header"><span className="case-name">MASKED HEADING</span><span className="case-credit">REACT BITS</span></header>
    <section className="hero" aria-label="视频遮罩标题效果">
      <p className="eyebrow">A SCENE INSIDE EVERY LETTER</p>
      <div className="heading-holder" ref={holder}>
        <MaskedHeading key={version}
          text="Website Home Style"
          mediaType="video"
          src="./reel.mp4"
          poster="./reel-poster.jpg"
          fillScale={1.3}
          parallax={34}
          reveal="scale"
          trigger="view"
          spotlight
          spotlightRadius={180}
          outline
        />
      </div>
      <div className="hero-caption"><span>Move your cursor.<br/>Find a different perspective.</span><span className="scene-number">VIDEO — 01</span></div>
    </section>
    <footer className="case-footer"><span className="interaction-tip">视频填充 · 鼠标视差 · 聚光灯</span><div className="controls"><button type="button" onClick={()=>{setVersion(v=>v+1);setMessage('已重播标题入场')}}>重播入场 <span aria-hidden="true">↻</span></button><button type="button" disabled={failed} onClick={toggleVideo} aria-pressed={!playing}>{playing?'暂停视频':'播放视频'}</button></div></footer>
    <p className="sr-only" role="status" aria-live="polite">{message}</p>
  </main>;
}

createRoot(document.querySelector('#root')).render(<App/>);
