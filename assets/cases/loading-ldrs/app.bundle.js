"use strict";(()=>{var Rt=Object.defineProperty;var Gt=(e,t)=>{for(var i in t)Rt(e,i,{get:t[i],enumerable:!0})};var ae={};Gt(ae,{bouncy:()=>ne,bouncyArc:()=>le,cardio:()=>de,chaoticOrbit:()=>ue,dotPulse:()=>be,dotSpinner:()=>me,dotStream:()=>ge,dotWave:()=>ze,grid:()=>xe,hatch:()=>we,helix:()=>Se,hourglass:()=>Pe,infinity:()=>Xe,jelly:()=>Me,jellyTriangle:()=>je,leapfrog:()=>He,lineSpinner:()=>Ye,lineWobble:()=>De,metronome:()=>Fe,mirage:()=>Be,miyagi:()=>Ge,momentum:()=>We,newtonsCradle:()=>Je,orbit:()=>Qe,ping:()=>et,pinwheel:()=>it,pulsar:()=>at,quantum:()=>nt,reuleaux:()=>lt,ring:()=>dt,ring2:()=>ut,ripples:()=>bt,spiral:()=>mt,square:()=>gt,squircle:()=>zt,superballs:()=>xt,tailChase:()=>wt,tailspin:()=>St,treadmill:()=>Pt,trefoil:()=>Xt,trio:()=>Mt,waveform:()=>jt,wobble:()=>Ht,zoomies:()=>Yt});var s=class extends HTMLElement{_propsToUpgrade={};shadow;template;defaultProps;isAttached=!1;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.template=document.createElement("template")}storePropsToUpgrade(t){t.forEach((i=>{this.hasOwnProperty(i)&&this[i]!==void 0&&(this._propsToUpgrade[i]=this[i],delete this[i])}))}upgradeStoredProps(){Object.entries(this._propsToUpgrade).forEach((([t,i])=>{this.setAttribute(t,i)}))}reflect(t){t.forEach((i=>{Object.defineProperty(this,i,{set(a){"string,number".includes(typeof a)?this.setAttribute(i,a.toString()):this.removeAttribute(i)},get(){return this.getAttribute(i)}})}))}applyDefaultProps(t){this.defaultProps=t,Object.entries(t).forEach((([i,a])=>{this[i]=this[i]||a.toString()}))}};var re=":host{align-items:center;display:inline-flex;flex-shrink:0;height:calc(var(--uib-size)*.6);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:flex-end;display:flex;height:calc(var(--uib-size)*.6);justify-content:space-between;padding-bottom:20%;width:var(--uib-size)}.cube{animation:jump var(--uib-speed) ease-in-out infinite;flex-shrink:0;height:calc(var(--uib-size)*.2);width:calc(var(--uib-size)*.2)}.cube__inner{animation:morph var(--uib-speed) ease-in-out infinite;background-color:var(--uib-color);border-radius:25%;display:block;height:100%;transform-origin:center bottom;transition:background-color .3s ease;width:100%}.cube:nth-child(2),.cube:nth-child(2) .cube__inner{animation-delay:calc(var(--uib-speed)*-.36)}.cube:nth-child(3),.cube:nth-child(3) .cube__inner{animation-delay:calc(var(--uib-speed)*-.2)}@keyframes jump{0%{transform:translateY(0)}28%{animation-timing-function:ease-out;transform:translateY(0)}50%{animation-timing-function:ease-in;transform:translateY(-200%)}74%{animation-timing-function:ease-in;transform:translateY(0)}}@keyframes morph{0%{transform:scaleY(1)}10%{transform:scaleY(1)}20%,25%{animation-timing-function:ease-in-out;transform:scaleY(.6) scaleX(1.3)}30%{animation-timing-function:ease-in-out;transform:scaleY(1.15) scaleX(.9)}40%{transform:scaleY(1)}72%,87%,to{transform:scaleY(1)}77%{transform:scaleY(.8) scaleX(1.2)}}",b=class extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:45,color:"black",speed:1.75}),this.template.innerHTML=`
      <div class="container">
        <div class="cube"><div class="cube__inner"></div></div>
        <div class="cube"><div class="cube__inner"></div></div>
        <div class="cube"><div class="cube__inner"></div></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${re}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${re}
    `)}},ne={register:(e="l-bouncy")=>{customElements.get(e)||customElements.define(e,class extends b{})},element:b};var oe=':host{align-items:center;display:inline-flex;flex-shrink:0;height:calc(var(--uib-size)*.51);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{--uib-cube-size:calc(var(--uib-size)/5.5);--uib-arc-1:-80deg;--uib-arc-2:80deg;align-items:flex-start;display:flex;height:100%;justify-content:center;width:100%}.cube{animation:metronome var(--uib-speed) linear infinite;height:calc(var(--uib-size)*.5);transform:rotate(var(--uib-arc-1));transform-origin:center bottom}.cube,.cube:after{width:var(--uib-cube-size)}.cube:after{animation:morph var(--uib-speed) linear infinite;background-color:var(--uib-color);border-radius:25%;content:"";display:block;height:var(--uib-cube-size);transition:background-color .3s ease}@keyframes metronome{0%{transform:rotate(var(--uib-arc-1))}10%{animation-timing-function:ease-out;transform:rotate(var(--uib-arc-1))}50%{transform:rotate(var(--uib-arc-2))}60%{animation-timing-function:ease-out;transform:rotate(var(--uib-arc-2))}to{transform:rotate(var(--uib-arc-1))}}@keyframes morph{0%,5%{transform:scaleX(.75) scaleY(1.25);transform-origin:center left}12.5%{transform:scaleX(1.5);transform-origin:center left}27.5%{transform:scaleX(1);transform-origin:center left}27.5001%,42.5%{transform:scaleX(1);transform-origin:center right}47.5%{animation-timing-function:ease-in;transform:scaleX(.75) scaleY(1.25);transform-origin:center right}65%{transform:scaleX(1.5);transform-origin:center right}77.5%{transform:scaleX(1);transform-origin:center right}77.5001%,95%{transform:scaleX(1);transform-origin:center left}to{transform:scaleX(.75) scaleY(1.25);transform-origin:center left}}',f=class extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:70,color:"black",speed:1.65}),this.template.innerHTML=`
      <div class="container"><div class="cube"></div></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${oe}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${oe}
    `)}},le={register:(e="l-bouncy-arc")=>{customElements.get(e)||customElements.define(e,class extends f{})},element:f};function l(e,t){return t.replace(/([-A-y])/g,",$1").split(",").filter((i=>i!=="")).map((i=>{let a=i.match(/(\d+\.?\d*)/g)?.[0],r=parseFloat(a)*e;return i.replace(a,r.toString())})).join(" ")}var ce=":host{align-items:center;display:inline-flex;flex-shrink:0;height:calc(var(--uib-size)*.625);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:calc(var(--uib-size)*.625);overflow:visible;transform-origin:center;width:var(--uib-size)}.car{stroke:var(--uib-color);stroke-dasharray:100;stroke-dashoffset:0;animation:travel var(--uib-speed) ease-in-out infinite,fade var(--uib-speed) ease-out infinite;transition:stroke .5s ease;will-change:stroke-dasharray,stroke-dashoffset}.car,.track{stroke-linecap:round;stroke-linejoin:round}.track{stroke:var(--uib-color);opacity:var(--uib-bg-opacity)}@keyframes travel{0%{stroke-dashoffset:100}75%{stroke-dashoffset:0}}@keyframes fade{0%{opacity:0}20%,55%{opacity:1}to{opacity:0}}",m=class extends s{_attributes=["size","color","speed","stroke","bg-opacity"];size;color;speed;stroke;"bg-opacity";d;static get observedAttributes(){return["size","color","speed","stroke","bg-opacity"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes),this.d="M0.5,17.2h8.2l3-4.7l5.9,12l7.8-24l5.9,16.7v0h8.2"}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:50,color:"black",speed:1.5,stroke:4,"bg-opacity":.1});let t=parseInt(this.size),i=l(t/40,this.d);this.template.innerHTML=`
      <svg
        class="container" 
        x="0px" 
        y="0px"
        viewBox="0 0 ${this.size} ${.625*t}"
        height="${.625*t}"
        width="${this.size}"
        preserveAspectRatio='xMidYMid meet'
      >
        <path 
          class="track"
          stroke-width="${this.stroke}" 
          fill="none" 
          pathlength="100"
          d="${i}"
        />
        <path 
          class="car"
          stroke-width="${this.stroke}" 
          fill="none" 
          pathlength="100"
          d="${i}"
        />
      </svg>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-bg-opacity: ${this["bg-opacity"]};
        }
        ${ce}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=parseInt(this.size),i=this.shadow.querySelector("style"),a=this.shadow.querySelector("svg"),r=this.shadow.querySelectorAll("path");i&&(a.setAttribute("height",String(.625*t)),a.setAttribute("width",this.size),a.setAttribute("viewBox",`0 0 ${this.size} ${.625*t}`),r.forEach((n=>{n.setAttribute("stroke-width",this.stroke),n.setAttribute("d",l(t/40,this.d))})),i.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-bg-opacity: ${this["bg-opacity"]};
      }
      ${ce}
    `)}},de={register:(e="l-cardio")=>{customElements.get(e)||customElements.define(e,class extends m{})},element:m};var he=':host{--uib-dot-size:calc(var(--uib-size)*0.4);align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;animation:rotate calc(var(--uib-speed)*1.667) infinite linear;display:flex;height:var(--uib-size);justify-content:center;position:relative;width:var(--uib-size)}.container:after,.container:before{background-color:var(--uib-color);border-radius:50%;content:"";flex-shrink:0;height:var(--uib-dot-size);position:absolute;transition:background-color .3s ease;width:var(--uib-dot-size)}.container:before{animation:orbit var(--uib-speed) linear infinite}.container:after{animation:orbit var(--uib-speed) linear calc(var(--uib-speed)/-2) infinite}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes orbit{0%{opacity:.65;transform:translateX(calc(var(--uib-size)*.25)) scale(.73684)}5%{opacity:.58;transform:translateX(calc(var(--uib-size)*.235)) scale(.684208)}10%{opacity:.51;transform:translateX(calc(var(--uib-size)*.182)) scale(.631576)}15%{opacity:.44;transform:translateX(calc(var(--uib-size)*.129)) scale(.578944)}20%{opacity:.37;transform:translateX(calc(var(--uib-size)*.076)) scale(.526312)}25%{opacity:.3;transform:translateX(0) scale(.47368)}30%{opacity:.37;transform:translateX(calc(var(--uib-size)*-.076)) scale(.526312)}35%{opacity:.44;transform:translateX(calc(var(--uib-size)*-.129)) scale(.578944)}40%{opacity:.51;transform:translateX(calc(var(--uib-size)*-.182)) scale(.631576)}45%{opacity:.58;transform:translateX(calc(var(--uib-size)*-.235)) scale(.684208)}50%{opacity:.65;transform:translateX(calc(var(--uib-size)*-.25)) scale(.73684)}55%{opacity:.72;transform:translateX(calc(var(--uib-size)*-.235)) scale(.789472)}60%{opacity:.79;transform:translateX(calc(var(--uib-size)*-.182)) scale(.842104)}65%{opacity:.86;transform:translateX(calc(var(--uib-size)*-.129)) scale(.894736)}70%{opacity:.93;transform:translateX(calc(var(--uib-size)*-.076)) scale(.947368)}75%{opacity:1;transform:translateX(0) scale(1)}80%{opacity:.93;transform:translateX(calc(var(--uib-size)*.076)) scale(.947368)}85%{opacity:.86;transform:translateX(calc(var(--uib-size)*.129)) scale(.894736)}90%{opacity:.79;transform:translateX(calc(var(--uib-size)*.182)) scale(.842104)}95%{opacity:.72;transform:translateX(calc(var(--uib-size)*.235)) scale(.789472)}to{opacity:.65;transform:translateX(calc(var(--uib-size)*.25)) scale(.73684)}}',v=class extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:35,color:"black",speed:1.5}),this.template.innerHTML=`
      <div class="container"></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${he}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${he}
    `)}},ue={register:(e="l-chaotic-orbit")=>{customElements.get(e)||customElements.define(e,class extends v{})},element:v};var pe=':host{--uib-dot-size:calc(var(--uib-size)*0.24);align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-dot-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;display:flex;height:100%;justify-content:space-between;position:relative;width:100%}.container:after,.container:before,.dot{background-color:var(--uib-color);border-radius:50%;content:"";display:block;height:var(--uib-dot-size);transform:scale(0);transition:background-color .3s ease;width:var(--uib-dot-size)}.container:before{animation:pulse var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.375) infinite}.dot{animation:pulse var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.25) infinite both}.container:after{animation:pulse var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.125) infinite}@keyframes pulse{0%,to{transform:scale(0)}50%{transform:scale(1)}}',g=class extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:43,color:"black",speed:1.3}),this.template.innerHTML=`
      <div class="container"><div class="dot" /></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${pe}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${pe}
    `)}},be={register:(e="l-dot-pulse")=>{customElements.get(e)||customElements.define(e,class extends g{})},element:g};var fe=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:var(--uib-size);position:relative;width:var(--uib-size)}.container,.dot{align-items:center;display:flex;justify-content:flex-start}.dot{height:100%;left:0;position:absolute;top:0;width:100%}.dot:before{animation:pulse calc(var(--uib-speed)*1.111) ease-in-out infinite;background-color:var(--uib-color);border-radius:50%;content:"";height:20%;opacity:.5;transform:scale(0);transition:background-color .3s ease;width:20%}.dot:nth-child(2){transform:rotate(45deg)}.dot:nth-child(2):before{animation-delay:calc(var(--uib-speed)*-.875)}.dot:nth-child(3){transform:rotate(90deg)}.dot:nth-child(3):before{animation-delay:calc(var(--uib-speed)*-.75)}.dot:nth-child(4){transform:rotate(135deg)}.dot:nth-child(4):before{animation-delay:calc(var(--uib-speed)*-.625)}.dot:nth-child(5){transform:rotate(180deg)}.dot:nth-child(5):before{animation-delay:calc(var(--uib-speed)*-.5)}.dot:nth-child(6){transform:rotate(225deg)}.dot:nth-child(6):before{animation-delay:calc(var(--uib-speed)*-.375)}.dot:nth-child(7){transform:rotate(270deg)}.dot:nth-child(7):before{animation-delay:calc(var(--uib-speed)*-.25)}.dot:nth-child(8){transform:rotate(315deg)}.dot:nth-child(8):before{animation-delay:calc(var(--uib-speed)*-.125)}@keyframes pulse{0%,to{opacity:.5;transform:scale(0)}50%{opacity:1;transform:scale(1)}}',y=class extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:.9}),this.template.innerHTML=`
      <div class="container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${fe}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${fe}
    `)}},me={register:(e="l-dot-spinner")=>{customElements.get(e)||customElements.define(e,class extends y{})},element:y};var ve=":host{align-items:center;display:inline-flex;flex-shrink:0;height:calc(var(--uib-size)*.18);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{--uib-dot-size:calc(var(--uib-size)*0.18);align-items:center;display:flex;justify-content:space-between;position:relative;width:var(--uib-size)}.container,.dot{height:var(--uib-dot-size)}.dot{animation:stream var(--uib-speed) linear infinite both;background-color:var(--uib-color);border-radius:50%;display:block;left:calc(0px - var(--uib-dot-size)/2);position:absolute;top:calc(50% - var(--uib-dot-size)/2);transition:background-color .3s ease;width:var(--uib-dot-size)}.dot:nth-child(2){animation-delay:calc(var(--uib-speed)*-.2)}.dot:nth-child(3){animation-delay:calc(var(--uib-speed)*-.4)}.dot:nth-child(4){animation-delay:calc(var(--uib-speed)*-.6)}.dot:nth-child(5){animation-delay:calc(var(--uib-speed)*-.8)}@keyframes stream{0%,to{transform:translateX(0) scale(0)}50%{transform:translateX(calc(var(--uib-size)*.5)) scale(1)}99.999%{transform:translateX(calc(var(--uib-size))) scale(0)}}",z=class extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:60,color:"black",speed:2.5}),this.template.innerHTML=`
      <div class="container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${ve}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${ve}
    `)}},ge={register:(e="l-dot-stream")=>{customElements.get(e)||customElements.define(e,class extends z{})},element:z};var ye=":host{align-items:center;display:inline-flex;flex-shrink:0;height:calc(var(--uib-size)*.5);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:flex-end;display:flex;height:100%;justify-content:space-between;width:100%}.dot{background-color:var(--uib-color);border-radius:50%;flex-shrink:0;height:calc(var(--uib-size)*.17);transition:background-color .3s ease;width:calc(var(--uib-size)*.17)}.dot:first-child{animation:jump var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.45) infinite}.dot:nth-child(2){animation:jump var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.3) infinite}.dot:nth-child(3){animation:jump var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.15) infinite}.dot:nth-child(4){animation:jump var(--uib-speed) ease-in-out infinite}@keyframes jump{0%,to{transform:translateY(0)}50%{transform:translateY(-200%)}}",k=class extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:47,color:"black",speed:1}),this.template.innerHTML=`
      <div class="container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${ye}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${ye}
    `)}},ze={register:(e="l-dot-wave")=>{customElements.get(e)||customElements.define(e,class extends k{})},element:k};var ke=':host{align-items:center;display:inline-flex;flex-shrink:0;height:calc(var(--uib-size)*.8);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{--uib-dot-size:calc(var(--uib-size)*0.1);height:calc(var(--uib-size)*.64);position:relative;width:calc(var(--uib-size)*.64)}.container,.dot{align-items:center;display:flex;justify-content:flex-start}.dot{--uib-d1:-0.48;--uib-d2:-0.4;--uib-d3:-0.32;--uib-d4:-0.24;--uib-d5:-0.16;--uib-d6:-0.08;--uib-d7:-0;animation:jump var(--uib-speed) ease-in-out infinite;backface-visibility:hidden;bottom:calc(var(--uib-bottom) + var(--uib-dot-size)/2);height:var(--uib-dot-size);opacity:var(--uib-scale);position:absolute;right:calc(var(--uib-right) + var(--uib-dot-size)/2);width:var(--uib-dot-size);will-change:transform}.dot:before{background-color:var(--uib-color);border-radius:50%;content:"";height:100%;transform:scale(var(--uib-scale));transition:background-color .3s ease;width:100%}.dot:first-child{--uib-bottom:24%;--uib-right:-35%;animation-delay:calc(var(--uib-speed)*var(--uib-d1))}.dot:nth-child(2){--uib-bottom:16%;--uib-right:-6%;animation-delay:calc(var(--uib-speed)*var(--uib-d2))}.dot:nth-child(3){--uib-bottom:8%;--uib-right:23%;animation-delay:calc(var(--uib-speed)*var(--uib-d3))}.dot:nth-child(4){--uib-bottom:-1%;--uib-right:51%;animation-delay:calc(var(--uib-speed)*var(--uib-d4))}.dot:nth-child(5){--uib-bottom:38%;--uib-right:-17.5%;animation-delay:calc(var(--uib-speed)*var(--uib-d2))}.dot:nth-child(6){--uib-bottom:30%;--uib-right:10%;animation-delay:calc(var(--uib-speed)*var(--uib-d3))}.dot:nth-child(7){--uib-bottom:22%;--uib-right:39%;animation-delay:calc(var(--uib-speed)*var(--uib-d4))}.dot:nth-child(8){--uib-bottom:14%;--uib-right:67%;animation-delay:calc(var(--uib-speed)*var(--uib-d5))}.dot:nth-child(9){--uib-bottom:53%;--uib-right:-0.8%;animation-delay:calc(var(--uib-speed)*var(--uib-d3))}.dot:nth-child(10){--uib-bottom:44.5%;--uib-right:27%;animation-delay:calc(var(--uib-speed)*var(--uib-d4))}.dot:nth-child(11){--uib-bottom:36%;--uib-right:55.7%;animation-delay:calc(var(--uib-speed)*var(--uib-d5))}.dot:nth-child(12){--uib-bottom:28.7%;--uib-right:84.3%;animation-delay:calc(var(--uib-speed)*var(--uib-d6))}.dot:nth-child(13){--uib-bottom:66.8%;--uib-right:15%;animation-delay:calc(var(--uib-speed)*var(--uib-d4))}.dot:nth-child(14){--uib-bottom:58.8%;--uib-right:43%;animation-delay:calc(var(--uib-speed)*var(--uib-d5))}.dot:nth-child(15){--uib-bottom:50%;--uib-right:72%;animation-delay:calc(var(--uib-speed)*var(--uib-d6))}.dot:nth-child(16){--uib-bottom:42%;--uib-right:100%;animation-delay:calc(var(--uib-speed)*var(--uib-d7))}.dot:nth-child(3){--uib-scale:0.98}.dot:nth-child(2),.dot:nth-child(8){--uib-scale:0.96}.dot:first-child,.dot:nth-child(7){--uib-scale:0.94}.dot:nth-child(12),.dot:nth-child(6){--uib-scale:0.92}.dot:nth-child(11),.dot:nth-child(5){--uib-scale:0.9}.dot:nth-child(10),.dot:nth-child(16){--uib-scale:0.88}.dot:nth-child(15),.dot:nth-child(9){--uib-scale:0.86}.dot:nth-child(14){--uib-scale:0.84}.dot:nth-child(13){--uib-scale:0.82}@keyframes jump{0%,to{transform:translateY(120%)}50%{transform:translateY(-120%)}}',x=class extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:60,color:"black",speed:1.5}),this.template.innerHTML=`
      <div class="container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${ke}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${ke}
    `)}},xe={register:(e="l-grid")=>{customElements.get(e)||customElements.define(e,class extends x{})},element:x};var $e=':host{--uib-mult:calc(var(--uib-size)/var(--uib-stroke));--uib-stroke-px:calc(var(--uib-stroke)*1px);--uib-size-px:calc(var(--uib-size)*1px);align-items:flex-start;display:inline-flex;flex-shrink:0;height:var(--uib-size-px);justify-content:flex-start;position:relative;width:var(--uib-size-px)}:host([hidden]){display:none}.container{height:100%;position:relative;width:100%}.line{animation:center-line var(--uib-speed) ease infinite;left:calc(50% - var(--uib-stroke-px)/2);top:calc(50% - var(--uib-stroke-px)/2)}.container:after,.container:before,.line{background-color:var(--uib-color);height:var(--uib-stroke-px);position:absolute;transition:background-color .3s ease;width:var(--uib-stroke-px)}.container:after,.container:before{animation:explore var(--uib-speed) ease infinite;content:""}.container:after{animation-delay:calc(var(--uib-speed)*-.5)}@keyframes center-line{0%,25%,50%,75%,to{transform:scaleX(1) scaleY(1)}12.5%,62.5%{transform:scaleX(var(--uib-mult)) scaleY(1)}37.5%,87.5%{transform:scaleX(1) scaleY(var(--uib-mult))}}@keyframes explore{0%,to{left:0;top:0;transform:scaleX(1) scaleY(1) translate(0);transform-origin:top left}12.5%{left:0;top:0;transform:scaleX(var(--uib-mult)) scaleY(1) translate(0);transform-origin:top left}12.50001%{left:auto;right:0;top:0;transform:scaleX(var(--uib-mult)) scaleY(1) translate(0);transform-origin:top right}25%{left:auto;right:0;top:0;transform:scaleX(1) scaleY(1) translate(0);transform-origin:top right}37.5%{left:auto;right:0;top:0;transform:scaleX(1) scaleY(var(--uib-mult)) translate(0);transform-origin:top right}37.5001%{bottom:0;left:auto;right:0;top:auto;transform:scaleX(1) scaleY(var(--uib-mult)) translate(0);transform-origin:bottom right}50%{bottom:0;left:auto;right:0;top:auto;transform:scaleX(1) scaleY(1) translate(0);transform-origin:bottom right}62.5%{bottom:0;left:auto;right:0;top:auto;transform:scaleX(var(--uib-mult)) scaleY(1) translate(0);transform-origin:bottom right}62.5001%{bottom:0;left:0;top:auto;transform:scaleX(var(--uib-mult)) scaleY(1) translate(0);transform-origin:bottom left}75%{bottom:0;left:0;top:auto;transform:scaleX(1) scaleY(1) translate(0);transform-origin:bottom left}87.5%{bottom:0;left:0;top:auto;transform:scaleX(1) scaleY(var(--uib-mult)) translate(0);transform-origin:bottom left}87.5001%{left:0;top:0;transform:scaleX(1) scaleY(var(--uib-mult)) translate(0);transform-origin:top left}}',$=class extends s{_attributes=["size","color","speed","stroke"];size;color;speed;stroke;static get observedAttributes(){return["size","color","speed","stroke"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:28,color:"black",speed:3.5,stroke:4}),this.template.innerHTML=`
      <div class="container"><div class="line"></div></div>
      <style>
        :host{
          --uib-size: ${this.size};
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-stroke: ${this.stroke};
        }
        ${$e}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size};
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-stroke: ${this.stroke};
      }
      ${$e}
    `)}},we={register:(e="l-hatch")=>{customElements.get(e)||customElements.define(e,class extends ${})},element:$};var Ce=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center;width:100%}.slice{height:calc(var(--uib-size)/6);position:relative;width:100%}.slice:after,.slice:before{--uib-a:calc(var(--uib-speed)/-2);--uib-b:calc(var(--uib-speed)/-6);animation:orbit var(--uib-speed) linear infinite;background-color:var(--uib-color);border-radius:50%;content:"";flex-shrink:0;height:100%;left:calc(50% - var(--uib-size)/12);position:absolute;top:0;transition:background-color .3s ease;width:16.6666666667%}.slice:first-child:after{animation-delay:var(--uib-a)}.slice:nth-child(2):before{animation-delay:var(--uib-b)}.slice:nth-child(2):after{animation-delay:calc(var(--uib-a) + var(--uib-b))}.slice:nth-child(3):before{animation-delay:calc(var(--uib-b)*2)}.slice:nth-child(3):after{animation-delay:calc(var(--uib-a) + var(--uib-b)*2)}.slice:nth-child(4):before{animation-delay:calc(var(--uib-b)*3)}.slice:nth-child(4):after{animation-delay:calc(var(--uib-a) + var(--uib-b)*3)}.slice:nth-child(5):before{animation-delay:calc(var(--uib-b)*4)}.slice:nth-child(5):after{animation-delay:calc(var(--uib-a) + var(--uib-b)*4)}.slice:nth-child(6):before{animation-delay:calc(var(--uib-b)*5)}.slice:nth-child(6):after{animation-delay:calc(var(--uib-a) + var(--uib-b)*5)}@keyframes orbit{0%{opacity:.65;transform:translateX(calc(var(--uib-size)*.25)) scale(.73684)}5%{opacity:.58;transform:translateX(calc(var(--uib-size)*.235)) scale(.684208)}10%{opacity:.51;transform:translateX(calc(var(--uib-size)*.182)) scale(.631576)}15%{opacity:.44;transform:translateX(calc(var(--uib-size)*.129)) scale(.578944)}20%{opacity:.37;transform:translateX(calc(var(--uib-size)*.076)) scale(.526312)}25%{opacity:.3;transform:translateX(0) scale(.47368)}30%{opacity:.37;transform:translateX(calc(var(--uib-size)*-.076)) scale(.526312)}35%{opacity:.44;transform:translateX(calc(var(--uib-size)*-.129)) scale(.578944)}40%{opacity:.51;transform:translateX(calc(var(--uib-size)*-.182)) scale(.631576)}45%{opacity:.58;transform:translateX(calc(var(--uib-size)*-.235)) scale(.684208)}50%{opacity:.65;transform:translateX(calc(var(--uib-size)*-.25)) scale(.73684)}55%{opacity:.72;transform:translateX(calc(var(--uib-size)*-.235)) scale(.789472)}60%{opacity:.79;transform:translateX(calc(var(--uib-size)*-.182)) scale(.842104)}65%{opacity:.86;transform:translateX(calc(var(--uib-size)*-.129)) scale(.894736)}70%{opacity:.93;transform:translateX(calc(var(--uib-size)*-.076)) scale(.947368)}75%{opacity:1;transform:translateX(0) scale(1)}80%{opacity:.93;transform:translateX(calc(var(--uib-size)*.076)) scale(.947368)}85%{opacity:.86;transform:translateX(calc(var(--uib-size)*.129)) scale(.894736)}90%{opacity:.79;transform:translateX(calc(var(--uib-size)*.182)) scale(.842104)}95%{opacity:.72;transform:translateX(calc(var(--uib-size)*.235)) scale(.789472)}to{opacity:.65;transform:translateX(calc(var(--uib-size)*.25)) scale(.73684)}}',w=class extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:45,color:"black",speed:2.5}),this.template.innerHTML=`
      <div class="container">
        <div class="slice"></div>
        <div class="slice"></div>
        <div class="slice"></div>
        <div class="slice"></div>
        <div class="slice"></div>
        <div class="slice"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${Ce}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector(".container"),i=this.shadow.querySelector("style");t&&(t.className="container",i.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${Ce}
    `)}},Se={register:(e="l-helix")=>{customElements.get(e)||customElements.define(e,class extends w{})},element:w};var _e=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{animation:rotate calc(var(--uib-speed)*2) ease-in-out infinite;display:flex;flex-direction:column;height:100%;position:relative;transform:rotate(45deg);width:100%}.half{--uib-half-size:calc(var(--uib-size)*0.435);align-items:center;display:flex;height:var(--uib-half-size);isolation:isolate;justify-content:center;overflow:hidden;position:absolute;width:var(--uib-half-size)}.half:first-child{left:8.25%;top:8.25%}.half:first-child,.half:last-child{border-radius:50% 50% calc(var(--uib-size)/15)}.half:last-child{align-self:flex-end;bottom:8.25%;right:8.25%;transform:rotate(180deg)}.half:last-child:after{animation-delay:calc(var(--uib-speed)*-1)}.half:before{left:0;opacity:var(--uib-bg-opacity);position:absolute;top:0}.half:after,.half:before{background-color:var(--uib-color);content:"";height:110%;transition:background-color .3s ease;width:110%}.half:after{animation:flow calc(var(--uib-speed)*2) linear infinite both;border-radius:0 0 calc(var(--uib-size)/20) 0;display:block;position:relative;transform:rotate(45deg) translate(-3%,50%) scaleX(1.2);transform-origin:bottom right;z-index:1}@keyframes flow{0%{transform:rotate(45deg) translate(-3%,50%) scaleX(1.2)}30%{transform:rotate(45deg) translate(115%,50%) scaleX(1.2)}30.001%,50%{transform:rotate(0deg) translate(-85%,-85%) scaleX(1)}80%,to{transform:rotate(0deg) translate(0) scaleX(1)}}@keyframes rotate{0%,30%{transform:rotate(45deg)}50%,80%{transform:rotate(225deg)}to{transform:rotate(405deg)}}',C=class extends s{_attributes=["size","color","speed","bg-opacity"];size;color;speed;"bg-opacity";static get observedAttributes(){return["size","color","speed","bg-opacity"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:1.75,"bg-opacity":.1}),this.template.innerHTML=`
      <div class="container">
        <div class="half"></div>
        <div class="half"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-bg-opacity: ${this["bg-opacity"]};
        }
        ${_e}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-bg-opacity: ${this["bg-opacity"]};
      }
      ${_e}
    `)}},Pe={register:(e="l-hourglass")=>{customElements.get(e)||customElements.define(e,class extends C{})},element:C};var Te=":host{align-items:center;display:inline-flex;flex-shrink:0;height:calc(var(--uib-size)*.42);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:calc(var(--uib-size)*.42);overflow:visible;transform-origin:center;width:var(--uib-size)}.car{fill:none;stroke:var(--uib-color);stroke-dasharray:var(--uib-dash),var(--uib-gap);stroke-dashoffset:0;stroke-linecap:round;animation:travel var(--uib-speed) linear infinite;transition:stroke .5s ease;will-change:stroke-dasharray,stroke-dashoffset}.track{stroke:var(--uib-color);opacity:var(--uib-bg-opacity)}@keyframes travel{0%{stroke-dashoffset:0}to{stroke-dashoffset:100}}",S=class extends s{_attributes=["size","color","speed","stroke","stroke-length","bg-opacity"];size;color;speed;stroke;"stroke-length";"bg-opacity";d;static get observedAttributes(){return["size","color","speed","stroke","stroke-length","bg-opacity"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes),this.d="M26.7,12.2c3.5,3.4,7.4,7.8,12.7,7.8c5.5,0,9.6-4.4,9.6-9.5C49,5,45.1,1,39.8,1c-5.5,0-9.5,4.2-13.1,7.8l-3.4,3.3c-3.6,3.6-7.6,7.8-13.1,7.8C4.9,20,1,16,1,10.5C1,5.4,5.1,1,10.6,1c5.3,0,9.2,4.5,12.7,7.8L26.7,12.2z"}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:55,color:"black",speed:1.3,stroke:4,"stroke-length":.15,"bg-opacity":.1});let t=parseInt(this.size),i=l(t/50,this.d);this.template.innerHTML=`
      <svg
        class="container" 
        x="0px" 
        y="0px"
        viewBox="0 0 ${this.size} ${t*(2.1/5)}"
        height="${t*(2.1/5)}"
        width="${this.size}"
        preserveAspectRatio='xMidYMid meet'
      >
        <path
          class="track" 
          fill="none" 
          stroke-width="${this.stroke}" 
          pathlength="100"
          d="${i}"
        />

        <path
          class="car" 
          fill="none" 
          stroke-width="${this.stroke}" 
          pathlength="100"
          d="${i}"
        />
      </svg>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-dash: ${100*parseFloat(this["stroke-length"])};
          --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
          --uib-bg-opacity: ${this["bg-opacity"]};
        }
        ${Te}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style"),i=this.shadow.querySelector("svg"),a=this.shadow.querySelectorAll("path"),r=parseInt(this.size);t&&(i.setAttribute("height",String(r*(2.1/5))),i.setAttribute("width",this.size),i.setAttribute("viewBox",`0 0 ${this.size} ${r*(2.1/5)}`),a.forEach((n=>{n.setAttribute("stroke-width",this.stroke),n.setAttribute("d",l(r/50,this.d))})),t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-dash: ${100*parseFloat(this["stroke-length"])};
        --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
        --uib-bg-opacity: ${this["bg-opacity"]};
      }
      ${Te}
    `)}},Xe={register:(e="l-infinity")=>{customElements.get(e)||customElements.define(e,class extends S{})},element:S};var Ae=":host{--uib-dot-size:calc(var(--uib-size)/2);align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;animation:rotate calc(var(--uib-speed)*2) linear infinite;display:flex;height:calc(var(--uib-size)/2);justify-content:space-between;position:relative;width:var(--uib-size);will-change:transform}.svg{filter:url(#uib-jelly-ooze);overflow:visible}.dot{cy:50%;cx:50%;r:calc(var(--uib-dot-size)/2);fill:var(--uib-color);display:block;transform-box:fill-box;transform-origin:center;transition:fill .3s ease;will-change:transform}.dot:first-child{animation:shift-left var(--uib-speed) ease infinite}.dot:nth-child(2){animation:shift-right var(--uib-speed) ease infinite}@keyframes rotate{0%,49.999%,to{transform:none}50%,99.999%{transform:rotate(90deg)}}@keyframes shift-left{0%,to{transform:scale(1) translateX(0)}50%{transform:scale(.65) translateX(-75%)}}@keyframes shift-right{0%,to{transform:scale(1) translateX(0)}50%{transform:scale(.65) translateX(75%)}}",_=class extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:.9});let t=parseInt(this.size)/2;this.template.innerHTML=`
      <div
        class="container"
      >
        <svg 
          class="svg"         
          x="0px" 
          y="0px"
          viewBox="0 0 ${this.size} ${t}"
          height="${t}"
          width="${this.size}"
          preserveAspectRatio='xMidYMid meet'
        >
          <circle class="dot" />
          <circle class="dot" />
          <defs>
            <filter id="uib-jelly-ooze">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation=${parseInt(this.size)/8}
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="ooze"
              />
              <feBlend in="SourceGraphic" in2="ooze" />
            </filter>
          </defs>
        </svg>  
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${Ae}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${Ae}
    `)}},Me={register:(e="l-jelly")=>{customElements.get(e)||customElements.define(e,class extends _{})},element:_};var Ee=":host{--uib-dot-size:calc(var(--uib-size)/3);align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;display:flex;height:var(--uib-size);justify-content:space-between;position:relative;width:var(--uib-size)}.svg{filter:url(#uib-jelly-triangle-ooze);overflow:visible}.dot,.traveler{fill:var(--uib-color);r:calc(var(--uib-dot-size)/2);display:block;transform-box:fill-box;transform-origin:center;transition:fill .3s ease;will-change:transform}.dot:first-child{cy:calc(var(--uib-dot-size)/2);cx:50%;animation:grow var(--uib-speed) ease infinite}.dot:nth-child(2){cx:calc(var(--uib-size) - var(--uib-dot-size)/2);animation:grow var(--uib-speed) ease calc(var(--uib-speed)*-.666) infinite}.dot:nth-child(2),.dot:nth-child(3){cy:calc(var(--uib-size) - var(--uib-dot-size)/2)}.dot:nth-child(3){cx:calc(var(--uib-dot-size)/2);animation:grow var(--uib-speed) ease calc(var(--uib-speed)*-.333) infinite}.traveler{cy:calc(var(--uib-dot-size)/2);cx:50%;animation:triangulate var(--uib-speed) ease infinite}@keyframes triangulate{0%,to{transform:none}33.333%{transform:translate(100%,200%)}66.666%{transform:translate(-100%,200%)}}@keyframes grow{0%,85%,to{transform:scale(1.5)}50%,60%{transform:scale(0)}}",P=class extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:30,color:"black",speed:1.75}),this.template.innerHTML=`
      <div
        class="container"
      >
        <svg 
          class="svg"         
          x="0px" 
          y="0px"
          viewBox="0 0 ${this.size} ${this.size}"
          height="${this.size}"
          width="${this.size}"
          preserveAspectRatio='xMidYMid meet'
        >
          <circle class="dot"/>
          <circle class="dot"/>
          <circle class="dot"/>
          <circle class="traveler"/>
          <defs>
            <filter id="uib-jelly-triangle-ooze">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation=${parseInt(this.size)/9}
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="ooze"
              />
              <feBlend in="SourceGraphic" in2="ooze" />
            </filter>
          </defs>
        </svg>  
      </div>

      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${Ee}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${Ee}
    `)}},je={register:(e="l-jelly-triangle")=>{customElements.get(e)||customElements.define(e,class extends P{})},element:P};var Le=':host{align-items:center;display:inline-flex;flex-shrink:0;height:calc(var(--uib-size)*.62);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:var(--uib-size);justify-content:space-between;position:relative;top:15%;width:var(--uib-size)}.container,.dot{align-items:center;display:flex;left:0}.dot{height:100%;justify-content:flex-start;position:absolute;top:0;width:100%}.dot:before{background-color:var(--uib-color);border-radius:50%;content:"";display:block;height:calc(var(--uib-size)*.22);transition:background-color .3s ease;width:calc(var(--uib-size)*.22)}.dot:first-child{animation:leapFrog var(--uib-speed) ease infinite}.dot:nth-child(2){animation:leapFrog var(--uib-speed) ease calc(var(--uib-speed)/-1.5) infinite;transform:translateX(calc(var(--uib-size)*.4))}.dot:nth-child(3){animation:leapFrog var(--uib-speed) ease calc(var(--uib-speed)/-3) infinite;transform:translateX(calc(var(--uib-size)*.8)) rotate(0deg)}@keyframes leapFrog{0%{transform:translateX(0) rotate(0deg)}33.333%{transform:translateX(0) rotate(180deg)}66.666%{transform:translateX(calc(var(--uib-size)*-.38)) rotate(180deg)}99.999%{transform:translateX(calc(var(--uib-size)*-.78)) rotate(180deg)}to{transform:translateX(0) rotate(0deg)}}',T=class extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:2.5}),this.template.innerHTML=`
      <div class="container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${Le}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${Le}
    `)}},He={register:(e="l-leapfrog")=>{customElements.get(e)||customElements.define(e,class extends T{})},element:T};var qe=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;display:flex;height:var(--uib-size);justify-content:flex-start;position:relative;width:var(--uib-size)}.line{align-items:flex-start;display:flex;height:100%;left:calc(50% - var(--uib-stroke)/2);position:absolute;top:0;width:var(--uib-stroke)}.line:before{animation:pulse calc(var(--uib-speed)) ease-in-out infinite;background-color:var(--uib-color);border-radius:calc(var(--uib-stroke)/2);content:"";height:22%;transform-origin:center bottom;transition:background-color .3s ease;width:100%}.line:first-child{transform:rotate(-30deg)}.line:first-child:before{animation-delay:calc(var(--uib-speed)/-12*1)}.line:nth-child(2){transform:rotate(-60deg)}.line:nth-child(2):before{animation-delay:calc(var(--uib-speed)/-12*2)}.line:nth-child(3){transform:rotate(-90deg)}.line:nth-child(3):before{animation-delay:calc(var(--uib-speed)/-12*3)}.line:nth-child(4){transform:rotate(-120deg)}.line:nth-child(4):before{animation-delay:calc(var(--uib-speed)/-12*4)}.line:nth-child(5){transform:rotate(-150deg)}.line:nth-child(5):before{animation-delay:calc(var(--uib-speed)/-12*5)}.line:nth-child(6){transform:rotate(-180deg)}.line:nth-child(6):before{animation-delay:calc(var(--uib-speed)/-12*6)}.line:nth-child(7){transform:rotate(-210deg)}.line:nth-child(7):before{animation-delay:calc(var(--uib-speed)/-12*7)}.line:nth-child(8){transform:rotate(-240deg)}.line:nth-child(8):before{animation-delay:calc(var(--uib-speed)/-12*8)}.line:nth-child(9){transform:rotate(-270deg)}.line:nth-child(9):before{animation-delay:calc(var(--uib-speed)/-12*9)}.line:nth-child(10){transform:rotate(-300deg)}.line:nth-child(10):before{animation-delay:calc(var(--uib-speed)/-12*10)}.line:nth-child(11){transform:rotate(-330deg)}.line:nth-child(11):before{animation-delay:calc(var(--uib-speed)/-12*11)}@keyframes pulse{0%,80%,to{opacity:0;transform:scaleY(.75)}20%{opacity:1;transform:scaleY(1)}}',X=class extends s{_attributes=["size","color","speed","stroke"];size;color;speed;stroke;static get observedAttributes(){return["size","color","speed","stroke"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:1,stroke:3}),this.template.innerHTML=`
      <div class="container">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-stroke: ${this.stroke}px;
        }
        ${qe}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-stroke: ${this.stroke}px;
      }
      ${qe}
    `)}},Ye={register:(e="l-line-spinner")=>{customElements.get(e)||customElements.define(e,class extends X{})},element:X};var Ne=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-stroke);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;border-radius:calc(var(--uib-stroke)/2);display:flex;height:var(--uib-stroke);justify-content:center;overflow:hidden;position:relative;transform:translateZ(0);width:var(--uib-size)}.container:before{left:0;opacity:var(--uib-bg-opacity);position:absolute;top:0}.container:after,.container:before{background-color:var(--uib-color);content:"";height:100%;transition:background-color .3s ease;width:100%}.container:after{animation:wobble var(--uib-speed) ease-in-out infinite;border-radius:calc(var(--uib-stroke)/2);transform:translateX(-95%)}@keyframes wobble{0%,to{transform:translateX(-95%)}50%{transform:translateX(95%)}}',A=class extends s{_attributes=["size","color","speed","stroke","bg-opacity"];size;color;speed;stroke;"bg-opacity";static get observedAttributes(){return["size","color","speed","stroke","bg-opacity"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:80,color:"black",speed:1.75,stroke:5,"bg-opacity":.1}),this.template.innerHTML=`
      <div class="container"></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-stroke: ${this.stroke}px;
          --uib-bg-opacity: ${this["bg-opacity"]};
        }
        ${Ne}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-stroke: ${this.stroke}px;
        --uib-bg-opacity: ${this["bg-opacity"]};
      }
      ${Ne}
    `)}},De={register:(e="l-line-wobble")=>{customElements.get(e)||customElements.define(e,class extends A{})},element:A};var Ue=':host{align-items:center;display:inline-flex;flex-shrink:0;height:calc(var(--uib-size)*.63);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:var(--uib-size);position:relative;top:8%;width:var(--uib-size)}.container,.dot{align-items:center;display:flex;justify-content:flex-start}.dot{animation:swing var(--uib-speed) linear infinite;height:100%;left:0;position:absolute;top:13.5%;width:100%}.dot:before{background-color:var(--uib-color);border-radius:50%;content:"";height:25%;transition:background-color .3s ease;width:25%}.dot:first-child{animation-delay:calc(var(--uib-speed)*-.36)}.dot:nth-child(2){animation-delay:calc(var(--uib-speed)*-.27);opacity:.8}.dot:nth-child(2):before{transform:scale(.9)}.dot:nth-child(3){animation-delay:calc(var(--uib-speed)*-.18);opacity:.6}.dot:nth-child(3):before{transform:scale(.8)}.dot:nth-child(4){animation-delay:calc(var(--uib-speed)*-.09);opacity:.4}.dot:nth-child(4):before{transform:scale(.7)}@keyframes swing{0%{transform:rotate(0deg)}15%{transform:rotate(0deg)}50%{transform:rotate(180deg)}65%{transform:rotate(180deg)}to{transform:rotate(0deg)}}',M=class extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:1.6}),this.template.innerHTML=`
      <div class="container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${Ue}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${Ue}
    `)}},Fe={register:(e="l-metronome")=>{customElements.get(e)||customElements.define(e,class extends M{})},element:M};var Ie=":host{--uib-dot-size:calc(var(--uib-size)*0.23);align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-dot-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;display:flex;height:var(--uib-dot-size);justify-content:space-between;position:relative;width:var(--uib-size)}.svg{filter:url(#uib-jelly-ooze);overflow:visible}.dot{cy:50%;cx:0;r:calc(var(--uib-dot-size)/2);fill:var(--uib-color);animation:stream var(--uib-speed) linear infinite both;display:block;height:var(--uib-dot-size);transform-box:fill-box;transform-origin:center;transition:fill .3s ease;width:var(--uib-dot-size)}.dot:nth-child(2){animation-delay:calc(var(--uib-speed)*-.2)}.dot:nth-child(3){animation-delay:calc(var(--uib-speed)*-.4)}.dot:nth-child(4){animation-delay:calc(var(--uib-speed)*-.6)}.dot:nth-child(5){animation-delay:calc(var(--uib-speed)*-.8)}@keyframes stream{0%,to{transform:translateX(0) scale(0)}50%{transform:translateX(calc(var(--uib-size)*.5)) scale(1)}99.999%{transform:translateX(calc(var(--uib-size))) scale(0)}}",E=class extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:60,color:"black",speed:2.5});let t=.23*parseInt(this.size);this.template.innerHTML=`
      <div class="container">
        <svg 
          class="svg"         
          x="0px" 
          y="0px"
          viewBox="0 0 ${this.size} ${t}"
          height="${t}"
          width="${this.size}"
          preserveAspectRatio='xMidYMid meet'
        >
          <circle class="dot" />
          <circle class="dot" />
          <circle class="dot" />
          <circle class="dot" />
          <circle class="dot" />
          <defs>
            <filter id="uib-jelly-ooze">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation=${parseInt(this.size)/20}
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="ooze"
              />
              <feBlend in="SourceGraphic" in2="ooze" />
            </filter>
          </defs>
        </svg>
      </div>

      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${Ie}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style"),i=this.shadow.querySelector("svg");if(i){let a=i.querySelector("feGaussianBlur"),r=parseInt(this.size),n=.23*r;a.setAttribute("stdDeviation",String(r/20)),i.setAttribute("height",String(n)),i.setAttribute("width",this.size),i.setAttribute("viewBox",`0 0 ${this.size} ${n}`)}t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${Ie}
    `)}},Be={register:(e="l-mirage")=>{customElements.get(e)||customElements.define(e,class extends E{})},element:E};var Re=":host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;display:flex;height:var(--uib-size);justify-content:center;position:relative;width:var(--uib-size)}.line{animation:rotate var(--uib-speed) ease-in-out infinite alternate;background-color:var(--uib-color);border-radius:calc(var(--uib-stroke)/2);height:var(--uib-stroke);left:0;position:absolute;top:calc(50% - var(--uib-stroke)/2);transition:background-color .3s ease;width:100%}.line:first-child,.line:nth-child(2){animation-delay:calc(var(--uib-speed)*-.375)}.line:nth-child(2){opacity:.8}.line:nth-child(3){animation-delay:calc(var(--uib-speed)*-.3);opacity:.6}.line:nth-child(4){animation-delay:calc(var(--uib-speed)*-.225);opacity:.4}.line:nth-child(5){animation-delay:calc(var(--uib-speed)*-.15);opacity:.2}.line:nth-child(6){animation-delay:calc(var(--uib-speed)*-.075);opacity:.1}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(180deg)}}",j=class extends s{_attributes=["size","color","speed","stroke"];size;color;speed;stroke;static get observedAttributes(){return["size","color","speed","stroke"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:35,color:"black",speed:.9,stroke:3.5}),this.template.innerHTML=`
      <div class="container">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-stroke: ${this.stroke}px;
        }
        ${Re}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-stroke: ${this.stroke}px;
      }
      ${Re}
    `)}},Ge={register:(e="l-miyagi")=>{customElements.get(e)||customElements.define(e,class extends j{})},element:j};var Oe=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;animation:rotate var(--uib-speed) linear infinite;display:flex;height:var(--uib-size);justify-content:center;position:relative;width:var(--uib-size)}.container:after,.container:before{background-color:var(--uib-color);border-radius:50%;content:"";height:25%;transition:background-color .3s ease;width:25%}.container:before{animation:wobble2 calc(var(--uib-speed)*1.25) ease-in-out infinite}.container:after{animation:wobble calc(var(--uib-speed)*1.25) ease-in-out infinite}.container:before{margin-right:10%}@keyframes wobble{0%,to{transform:translateX(0)}50%{transform:translateX(calc(var(--uib-size)*.2)) scale(1.1)}}@keyframes wobble2{0%,to{transform:translateX(0)}50%{transform:translateX(calc(var(--uib-size)*-.2)) scale(1.1)}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',L=class extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:1.1}),this.template.innerHTML=`
      <div class="container"></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${Oe}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${Oe}
    `)}},We={register:(e="l-momentum")=>{customElements.get(e)||customElements.define(e,class extends L{})},element:L};var Ze=':host{align-items:center;display:inline-flex;flex-shrink:0;height:calc(var(--uib-size)*.3);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:calc(var(--uib-size)*.51);justify-content:center;top:28%;width:51%}.container,.dot{align-items:center;display:flex;position:relative}.dot{flex-shrink:0;height:100%;transform-origin:center top;width:25%}.dot:after{background-color:var(--uib-color);border-radius:50%;content:"";display:block;height:25%;transition:background-color .3s ease;width:100%}.dot:first-child{animation:swing var(--uib-speed) linear infinite}.dot:last-child{animation:swing2 var(--uib-speed) linear infinite}@keyframes swing{0%{animation-timing-function:ease-out;transform:rotate(0deg)}25%{animation-timing-function:ease-in;transform:rotate(70deg)}50%{animation-timing-function:linear;transform:rotate(0deg)}}@keyframes swing2{0%{animation-timing-function:linear;transform:rotate(0deg)}50%{animation-timing-function:ease-out;transform:rotate(0deg)}75%{animation-timing-function:ease-in;transform:rotate(-70deg)}}',H=class extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:78,color:"black",speed:1.4}),this.template.innerHTML=`
      <div class="container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${Ze}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${Ze}
    `)}},Je={register:(e="l-newtons-cradle")=>{customElements.get(e)||customElements.define(e,class extends H{})},element:H};var Ke=':host{--uib-dot-size:calc(var(--uib-size)*0.4);align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-dot-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;display:flex;height:100%;justify-content:center;position:relative;width:100%}.container:after,.container:before{background-color:var(--uib-color);border-radius:50%;content:"";flex-shrink:0;height:var(--uib-dot-size);position:absolute;transition:background-color .3s ease;width:var(--uib-dot-size)}.container:before{animation:orbit var(--uib-speed) linear infinite}.container:after{animation:orbit var(--uib-speed) linear calc(var(--uib-speed)/-2) infinite}@keyframes orbit{0%{opacity:.65;transform:translateX(calc(var(--uib-size)*.25)) scale(.73684)}5%{opacity:.58;transform:translateX(calc(var(--uib-size)*.235)) scale(.684208)}10%{opacity:.51;transform:translateX(calc(var(--uib-size)*.182)) scale(.631576)}15%{opacity:.44;transform:translateX(calc(var(--uib-size)*.129)) scale(.578944)}20%{opacity:.37;transform:translateX(calc(var(--uib-size)*.076)) scale(.526312)}25%{opacity:.3;transform:translateX(0) scale(.47368)}30%{opacity:.37;transform:translateX(calc(var(--uib-size)*-.076)) scale(.526312)}35%{opacity:.44;transform:translateX(calc(var(--uib-size)*-.129)) scale(.578944)}40%{opacity:.51;transform:translateX(calc(var(--uib-size)*-.182)) scale(.631576)}45%{opacity:.58;transform:translateX(calc(var(--uib-size)*-.235)) scale(.684208)}50%{opacity:.65;transform:translateX(calc(var(--uib-size)*-.25)) scale(.73684)}55%{opacity:.72;transform:translateX(calc(var(--uib-size)*-.235)) scale(.789472)}60%{opacity:.79;transform:translateX(calc(var(--uib-size)*-.182)) scale(.842104)}65%{opacity:.86;transform:translateX(calc(var(--uib-size)*-.129)) scale(.894736)}70%{opacity:.93;transform:translateX(calc(var(--uib-size)*-.076)) scale(.947368)}75%{opacity:1;transform:translateX(0) scale(1)}80%{opacity:.93;transform:translateX(calc(var(--uib-size)*.076)) scale(.947368)}85%{opacity:.86;transform:translateX(calc(var(--uib-size)*.129)) scale(.894736)}90%{opacity:.79;transform:translateX(calc(var(--uib-size)*.182)) scale(.842104)}95%{opacity:.72;transform:translateX(calc(var(--uib-size)*.235)) scale(.789472)}to{opacity:.65;transform:translateX(calc(var(--uib-size)*.25)) scale(.73684)}}',q=class extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:35,color:"black",speed:1.5}),this.template.innerHTML=`
      <div class="container"></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${Ke}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${Ke}
    `)}},Qe={register:(e="l-orbit")=>{customElements.get(e)||customElements.define(e,class extends q{})},element:q};var Ve=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:var(--uib-size);position:relative;width:var(--uib-size)}.container:after,.container:before{animation:pulse var(--uib-speed) linear infinite;background-color:var(--uib-color);border-radius:50%;content:"";height:100%;left:0;opacity:0;position:absolute;top:0;transform:scale(0);transition:background-color .3s ease;width:100%}.container:after{animation-delay:calc(var(--uib-speed)/-2)}@keyframes pulse{0%{opacity:1;transform:scale(0)}to{opacity:0;transform:scale(1)}}',Y=class extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:45,color:"black",speed:2}),this.template.innerHTML=`
      <div class="container"></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${Ve}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${Ve}
    `)}},et={register:(e="l-ping")=>{customElements.get(e)||customElements.define(e,class extends Y{})},element:Y};var tt=":host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;display:flex;height:var(--uib-size);justify-content:center;position:relative;width:var(--uib-size)}.line{animation:rotate var(--uib-speed) ease-in-out infinite;background-color:var(--uib-color);border-radius:calc(var(--uib-stroke)/2);height:var(--uib-stroke);left:0;position:absolute;top:calc(50% - var(--uib-stroke)/2);transition:background-color .3s ease;width:100%}.line:first-child,.line:nth-child(2){animation-delay:calc(var(--uib-speed)*-.375)}.line:nth-child(2){opacity:.8}.line:nth-child(3){animation-delay:calc(var(--uib-speed)*-.3);opacity:.6}.line:nth-child(4){animation-delay:calc(var(--uib-speed)*-.225);opacity:.4}.line:nth-child(5){animation-delay:calc(var(--uib-speed)*-.15);opacity:.2}.line:nth-child(6){animation-delay:calc(var(--uib-speed)*-.075);opacity:.1}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(180deg)}}",N=class extends s{_attributes=["size","color","speed","stroke"];size;color;speed;stroke;static get observedAttributes(){return["size","color","speed","stroke"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:35,color:"black",speed:.9,stroke:3.5}),this.template.innerHTML=`
      <div class="container">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-stroke: ${this.stroke}px;
        }
        ${tt}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-stroke: ${this.stroke}px;
      }
      ${tt}
    `)}},it={register:(e="l-pinwheel")=>{customElements.get(e)||customElements.define(e,class extends N{})},element:N};var st=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:var(--uib-size);position:relative;width:var(--uib-size)}.container:after,.container:before{animation:pulse var(--uib-speed) ease-in-out infinite;background-color:var(--uib-color);border-radius:50%;content:"";height:100%;left:0;position:absolute;top:0;transform:scale(0);transition:background-color .3s ease;width:100%}.container:after{animation-delay:calc(var(--uib-speed)/-2)}@keyframes pulse{0%,to{opacity:1;transform:scale(0)}50%{opacity:.25;transform:scale(1)}}',D=class extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:1.75}),this.template.innerHTML=`
      <div class="container"></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${st}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${st}
    `)}},at={register:(e="l-pulsar")=>{customElements.get(e)||customElements.define(e,class extends D{})},element:D};var rt=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{animation:rotate calc(var(--uib-speed)*4) linear infinite;height:var(--uib-size);position:relative;width:var(--uib-size)}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.particle{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.particle:first-child{--uib-delay:0;transform:rotate(8deg)}.particle:nth-child(2){--uib-delay:-0.4;transform:rotate(36deg)}.particle:nth-child(3){--uib-delay:-0.9;transform:rotate(72deg)}.particle:nth-child(4){--uib-delay:-0.5;transform:rotate(90deg)}.particle:nth-child(5){--uib-delay:-0.3;transform:rotate(144deg)}.particle:nth-child(6){--uib-delay:-0.2;transform:rotate(180deg)}.particle:nth-child(7){--uib-delay:-0.6;transform:rotate(216deg)}.particle:nth-child(8){--uib-delay:-0.7;transform:rotate(252deg)}.particle:nth-child(9){--uib-delay:-0.1;transform:rotate(300deg)}.particle:nth-child(10){--uib-delay:-0.8;transform:rotate(324deg)}.particle:nth-child(11){--uib-delay:-1.2;transform:rotate(335deg)}.particle:nth-child(12){--uib-delay:-0.5;transform:rotate(290deg)}.particle:nth-child(13){--uib-delay:-0.2;transform:rotate(240deg)}.particle:before{--uib-d:calc(var(--uib-delay)*var(--uib-speed));animation:orbit var(--uib-speed) linear var(--uib-d) infinite;background-color:var(--uib-color);border-radius:50%;content:"";flex-shrink:0;height:17.5%;position:absolute;transition:background-color .3s ease;width:17.5%}@keyframes orbit{0%{opacity:.65;transform:translate(calc(var(--uib-size)*.5)) scale(.73684)}5%{opacity:.58;transform:translate(calc(var(--uib-size)*.4)) scale(.684208)}10%{opacity:.51;transform:translate(calc(var(--uib-size)*.3)) scale(.631576)}15%{opacity:.44;transform:translate(calc(var(--uib-size)*.2)) scale(.578944)}20%{opacity:.37;transform:translate(calc(var(--uib-size)*.1)) scale(.526312)}25%{opacity:.3;transform:translate(0) scale(.47368)}30%{opacity:.37;transform:translate(calc(var(--uib-size)*-.1)) scale(.526312)}35%{opacity:.44;transform:translate(calc(var(--uib-size)*-.2)) scale(.578944)}40%{opacity:.51;transform:translate(calc(var(--uib-size)*-.3)) scale(.631576)}45%{opacity:.58;transform:translate(calc(var(--uib-size)*-.4)) scale(.684208)}50%{opacity:.65;transform:translate(calc(var(--uib-size)*-.5)) scale(.73684)}55%{opacity:.72;transform:translate(calc(var(--uib-size)*-.4)) scale(.789472)}60%{opacity:.79;transform:translate(calc(var(--uib-size)*-.3)) scale(.842104)}65%{opacity:.86;transform:translate(calc(var(--uib-size)*-.2)) scale(.894736)}70%{opacity:.93;transform:translate(calc(var(--uib-size)*-.1)) scale(.947368)}75%{opacity:1;transform:translate(0) scale(1)}80%{opacity:.93;transform:translate(calc(var(--uib-size)*.1)) scale(.947368)}85%{opacity:.86;transform:translate(calc(var(--uib-size)*.2)) scale(.894736)}90%{opacity:.79;transform:translate(calc(var(--uib-size)*.3)) scale(.842104)}95%{opacity:.72;transform:translate(calc(var(--uib-size)*.4)) scale(.789472)}to{opacity:.65;transform:translate(calc(var(--uib-size)*.5)) scale(.73684)}}',U=class extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:45,color:"black",speed:1.75}),this.template.innerHTML=`
      <div class="container">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${rt}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${rt}
    `)}},nt={register:(e="l-quantum")=>{customElements.get(e)||customElements.define(e,class extends U{})},element:U};var ot=":host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:var(--uib-size);overflow:visible;transform-origin:center;width:var(--uib-size)}.car{fill:none;stroke:var(--uib-color);stroke-dasharray:var(--uib-dash),var(--uib-gap);stroke-dashoffset:0;stroke-linecap:round;animation:travel var(--uib-speed) linear infinite;will-change:stroke-dasharray,stroke-dashoffset}.car,.track{transition:stroke .5s ease}.track{stroke:var(--uib-color);opacity:var(--uib-bg-opacity)}@keyframes travel{0%{stroke-dashoffset:0}to{stroke-dashoffset:100}}",F=class extends s{_attributes=["size","color","speed","stroke","stroke-length","bg-opacity"];size;color;speed;stroke;"stroke-length";"bg-opacity";d;static get observedAttributes(){return["size","color","speed","stroke","stroke-length","bg-opacity"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes),this.d="M49.5,42.9c0-18.1-9.9-34-24.5-42.4C10.4,9,0.5,24.8,0.5,42.9c7.2,4.2,15.6,6.6,24.5,6.6S42.3,47.1,49.5,42.9z"}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:37,color:"black",stroke:5,speed:.9,"stroke-length":.15,"bg-opacity":.1});let t=l(parseInt(this.size)/50,this.d);this.template.innerHTML=`
      <svg
        class="container" 
        x="0px" 
        y="0px"
        viewBox="0 0 ${this.size} ${this.size}"
        height="${this.size}"
        width="${this.size}"
        preserveAspectRatio='xMidYMid meet'
      >
        <path
          class="track" 
          fill="none" 
          stroke-width="${this.stroke}" 
          pathlength="100"
          d="${t}"
        />

        <path
          class="car" 
          fill="none" 
          stroke-width="${this.stroke}" 
          pathlength="100"
          d="${t}"
        />
      </svg>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-dash: ${100*parseFloat(this["stroke-length"])};
          --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
          --uib-bg-opacity: ${this["bg-opacity"]};
        }
        ${ot}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style"),i=this.shadow.querySelector("svg"),a=this.shadow.querySelectorAll("path");t&&(i.setAttribute("height",this.size),i.setAttribute("width",this.size),i.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),a.forEach((r=>{r.setAttribute("stroke-width",this.stroke),r.setAttribute("d",l(parseInt(this.size)/50,this.d))})),t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-dash: ${100*parseFloat(this["stroke-length"])};
        --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
        --uib-bg-opacity: ${this["bg-opacity"]};
      }
      ${ot}
    `)}},lt={register:(e="l-reuleaux")=>{customElements.get(e)||customElements.define(e,class extends F{})},element:F};var ct=":host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{animation:rotate var(--uib-speed) linear infinite;height:var(--uib-size);overflow:visible;transform-origin:center;width:var(--uib-size);will-change:transform}.car{stroke:var(--uib-color);stroke-dasharray:1,200;stroke-dashoffset:0;stroke-linecap:round;animation:stretch calc(var(--uib-speed)*.75) ease-in-out infinite;will-change:stroke-dasharray,stroke-dashoffset}.car,.track{fill:none;transition:stroke .5s ease}.track{stroke:var(--uib-color);opacity:var(--uib-bg-opacity)}@keyframes rotate{to{transform:rotate(1turn)}}@keyframes stretch{0%{stroke-dasharray:0,150;stroke-dashoffset:0}50%{stroke-dasharray:75,150;stroke-dashoffset:-25}to{stroke-dashoffset:-99}}",I=class extends s{_attributes=["size","color","speed","stroke","bg-opacity"];size;color;speed;stroke;"bg-opacity";static get observedAttributes(){return["size","color","stroke","speed","bg-opacity"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",stroke:5,speed:2,"bg-opacity":0});let t=parseInt(this.size),i=parseInt(this.stroke),a=t/2,r=Math.max(0,t/2-i/2);this.template.innerHTML=`
      <svg
        class="container"
        viewBox="0 0 ${this.size} ${this.size}"
        height="${this.size}"
        width="${this.size}"
      >
        <circle 
          class="track"
          cx="${a}" 
          cy="${a}" 
          r="${r}" 
          pathlength="100" 
          stroke-width="${this.stroke}px" 
          fill="none" 
        />
        <circle 
          class="car"
          cx="${a}" 
          cy="${a}" 
          r="${r}" 
          pathlength="100" 
          stroke-width="${this.stroke}px" 
          fill="none" 
        />
      </svg>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-bg-opacity: ${this["bg-opacity"]};
        }
        ${ct}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style"),i=this.shadow.querySelector("svg"),a=this.shadow.querySelectorAll("circle");if(!t)return;let r=parseInt(this.size),n=parseInt(this.stroke),c=String(r/2),d=String(Math.max(0,r/2-n/2));i.setAttribute("height",this.stroke),i.setAttribute("width",this.stroke),i.setAttribute("viewBox",`0 0 ${r} ${r}`),a.forEach((o=>{o.setAttribute("cx",c),o.setAttribute("cy",c),o.setAttribute("r",d),o.setAttribute("stroke-width",this.stroke)})),t.innerHTML=`
      :host{
        --uib-size: ${r}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-bg-opacity: ${this["bg-opacity"]};
      }
      ${ct}
    `}},dt={register:(e="l-ring")=>{customElements.get(e)||customElements.define(e,class extends I{})},element:I};var ht=":host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{animation:rotate var(--uib-speed) linear infinite;height:var(--uib-size);overflow:visible;transform-origin:center;width:var(--uib-size);will-change:transform}.car{stroke:var(--uib-color);stroke-dasharray:var(--uib-dash),var(--uib-gap);stroke-dashoffset:0;stroke-linecap:round}.car,.track{fill:none;transition:stroke .5s ease}.track{stroke:var(--uib-color);opacity:var(--uib-bg-opacity)}@keyframes rotate{to{transform:rotate(1turn)}}",B=class extends s{_attributes=["size","color","speed","stroke","stroke-length","bg-opacity"];size;color;speed;stroke;"stroke-length";"bg-opacity";static get observedAttributes(){return["size","color","stroke","stroke-length","speed","bg-opacity"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",stroke:5,"stroke-length":.25,speed:.8,"bg-opacity":.1});let t=parseInt(this.size),i=parseInt(this.stroke),a=t/2,r=Math.max(0,t/2-i/2);this.template.innerHTML=`
      <svg
        class="container"
        viewBox="${a} ${a} ${this.size} ${this.size}"
        height="${this.size}"
        width="${this.size}"
      >
        <circle 
          class="track"
          cx="${this.size}" 
          cy="${this.size}" 
          r="${r}" 
          stroke-width="${this.stroke}px" 
          fill="none" 
        />
        <circle 
          class="car"
          cx="${this.size}" 
          cy="${this.size}" 
          r="${r}" 
          pathlength="100" 
          stroke-width="${this.stroke}px" 
          fill="none" 
        />
      </svg>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-dash: ${100*parseFloat(this["stroke-length"])};
          --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
          --uib-bg-opacity: ${this["bg-opacity"]};
        }
        ${ht}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style"),i=this.shadow.querySelector("svg"),a=this.shadow.querySelectorAll("circle");if(!t)return;let r=parseInt(this.size),n=parseInt(this.stroke),c=r/2,d=String(Math.max(0,r/2-n/2));i.setAttribute("height",this.size),i.setAttribute("width",this.size),i.setAttribute("viewBox",`${c} ${c} ${this.size} ${this.size}`),a.forEach((o=>{o.setAttribute("cx",this.size),o.setAttribute("cy",this.size),o.setAttribute("r",d),o.setAttribute("stroke-width",this.stroke)})),t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-dash: ${100*parseFloat(this["stroke-length"])};
        --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
        --uib-bg-opacity: ${this["bg-opacity"]};
      }
      ${ht}
    `}},ut={register:(e="l-ring-2")=>{customElements.get(e)||customElements.define(e,class extends B{})},element:B};var pt=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:var(--uib-size);position:relative;width:var(--uib-size)}.container:after,.container:before,.dot:after,.dot:before{animation:pulse var(--uib-speed) linear infinite;background-color:var(--uib-color);border-radius:50%;content:"";height:100%;left:0;opacity:0;position:absolute;top:0;transform:scale(0);transition:background-color .3s ease;width:100%}.container:after{animation-delay:calc(var(--uib-speed)/-4)}.dot:before{animation-delay:calc(var(--uib-speed)*-.5)}.dot:after{animation-delay:calc(var(--uib-speed)*-.75)}@keyframes pulse{0%{opacity:1;transform:scale(0)}to{opacity:0;transform:scale(1)}}',R=class extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:45,color:"black",speed:2}),this.template.innerHTML=`
      <div class="container">
        <div class="dot"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${pt}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${pt}
    `)}},bt={register:(e="l-ripples")=>{customElements.get(e)||customElements.define(e,class extends R{})},element:R};var ft=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{--uib-center:calc(var(--uib-size)/2 - var(--uib-size)/5/2);animation:rotate calc(var(--uib-speed)*3) linear infinite;height:var(--uib-size);position:relative;width:var(--uib-size)}.container,.dot{align-items:center;display:flex;justify-content:flex-start}.dot{height:100%;left:0;position:absolute;top:0;width:100%}.dot:before{animation:oscillate var(--uib-speed) ease-in-out infinite alternate;background-color:var(--uib-color);border-radius:50%;content:"";height:20%;transition:background-color .3s ease;width:20%}.dot:first-child:before{transform:translateX(var(--uib-center))}.dot:nth-child(2){transform:rotate(45deg)}.dot:nth-child(2):before{animation-delay:calc(var(--uib-speed)*-.125);transform:translateX(var(--uib-center))}.dot:nth-child(3){transform:rotate(90deg)}.dot:nth-child(3):before{animation-delay:calc(var(--uib-speed)*-.25);transform:translateX(var(--uib-center))}.dot:nth-child(4){transform:rotate(135deg)}.dot:nth-child(4):before{animation-delay:calc(var(--uib-speed)*-.375);transform:translateX(var(--uib-center))}.dot:nth-child(5){transform:rotate(180deg)}.dot:nth-child(5):before{animation-delay:calc(var(--uib-speed)*-.5);transform:translateX(var(--uib-center))}.dot:nth-child(6){transform:rotate(225deg)}.dot:nth-child(6):before{animation-delay:calc(var(--uib-speed)*-.625);transform:translateX(var(--uib-center))}.dot:nth-child(7){transform:rotate(270deg)}.dot:nth-child(7):before{animation-delay:calc(var(--uib-speed)*-.75);transform:translateX(var(--uib-center))}.dot:nth-child(8){transform:rotate(315deg)}.dot:nth-child(8):before{animation-delay:calc(var(--uib-speed)*-.875);transform:translateX(var(--uib-center))}@keyframes oscillate{0%{opacity:.25;transform:translateX(var(--uib-center)) scale(0)}to{opacity:1;transform:translateX(0) scale(1)}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',G=class extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:.9}),this.template.innerHTML=`
      <div class="container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${ft}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${ft}
    `)}},mt={register:(e="l-spiral")=>{customElements.get(e)||customElements.define(e,class extends G{})},element:G};var vt=":host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:var(--uib-size);overflow:visible;transform-origin:center;width:var(--uib-size);will-change:transform}.car{stroke:var(--uib-color);stroke-dasharray:var(--uib-dash),var(--uib-gap);stroke-dashoffset:0;animation:travel var(--uib-speed) linear infinite;will-change:stroke-dasharray,stroke-dashoffset}.car,.track{fill:none;transition:stroke .5s ease}.track{stroke:var(--uib-color);opacity:var(--uib-bg-opacity)}@keyframes travel{0%{stroke-dashoffset:0}to{stroke-dashoffset:-100}}",O=class extends s{_attributes=["size","color","speed","stroke","stroke-length","bg-opacity"];size;color;speed;stroke;"stroke-length";"bg-opacity";static get observedAttributes(){return["size","color","stroke","stroke-length","speed","bg-opacity"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:35,color:"black",stroke:5,"stroke-length":.25,speed:1.2,"bg-opacity":.1});let t=parseInt(this.size),i=parseInt(this.stroke),a=i/2,r=Math.max(t-i/2,0);this.template.innerHTML=`
      <svg
        class="container"
        viewBox="0 0 ${this.size} ${this.size}"
        height="${this.size}"
        width="${this.size}"
      >
        <rect 
          class="track"
          x="${a}" 
          y="${a}" 
          fill="none" 
          stroke-width="${this.stroke}px" 
          width="${r}" 
          height="${r}"
        />
        <rect 
          class="car"
          x="${a}" 
          y="${a}" 
          fill="none" 
          stroke-width="${this.stroke}px" 
          width="${r}" 
          height="${r}"
          pathlength="100"
        />
      </svg>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-dash: ${100*parseFloat(this["stroke-length"])};
          --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
          --uib-bg-opacity: ${this["bg-opacity"]};
        }
        ${vt}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style"),i=this.shadow.querySelector("svg"),a=this.shadow.querySelectorAll("rect");if(!t)return;let r=parseInt(this.size),n=parseInt(this.stroke),c=String(n/2),d=String(Math.max(r-n/2,0));i.setAttribute("height",this.size),i.setAttribute("width",this.size),i.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),a.forEach((o=>{o.setAttribute("stroke-width",this.stroke),o.setAttribute("width",d),o.setAttribute("height",d),o.setAttribute("x",c),o.setAttribute("y",c)})),t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-dash: ${100*parseFloat(this["stroke-length"])};
        --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
        --uib-bg-opacity: ${this["bg-opacity"]};
      }
      ${vt}
    `}},gt={register:(e="l-square")=>{customElements.get(e)||customElements.define(e,class extends O{})},element:O};var yt=":host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:var(--uib-size);overflow:visible;transform-origin:center;width:var(--uib-size)}.car{fill:none;stroke:var(--uib-color);stroke-dasharray:var(--uib-dash),var(--uib-gap);stroke-dashoffset:0;stroke-linecap:round;animation:travel var(--uib-speed) linear infinite;will-change:stroke-dasharray,stroke-dashoffset}.car,.track{transition:stroke .5s ease}.track{stroke:var(--uib-color);opacity:var(--uib-bg-opacity)}@keyframes travel{0%{stroke-dashoffset:0}to{stroke-dashoffset:-100}}",W=class extends s{_attributes=["size","color","speed","stroke","stroke-length","bg-opacity"];size;color;speed;stroke;"stroke-length";"bg-opacity";d;static get observedAttributes(){return["size","color","speed","stroke","stroke-length","bg-opacity"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes),this.d="M0.5,25C0.5,7.8,7.8,0.5,25,0.5S49.5,7.8,49.5,25S42.2,49.5,25,49.5S0.5,42.2,0.5,25"}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:37,color:"black",stroke:5,"stroke-length":.15,speed:.9,"bg-opacity":.1});let t=l(parseInt(this.size)/50,this.d);this.template.innerHTML=`
      <svg
        class="container" 
        x="0px" 
        y="0px"
        viewBox="0 0 ${this.size} ${this.size}"
        height="${this.size}"
        width="${this.size}"
        preserveAspectRatio='xMidYMid meet'
      >
        <path
          class="track" 
          fill="none" 
          stroke-width="${this.stroke}" 
          pathlength="100"
          d="${t}"
        />
        <path
          class="car" 
          fill="none" 
          stroke-width="${this.stroke}" 
          pathlength="100"
          d="${t}"
        />
      </svg>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-dash: ${100*parseFloat(this["stroke-length"])};
          --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
          --uib-bg-opacity: ${this["bg-opacity"]};
        }
        ${yt}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style"),i=this.shadow.querySelector("svg"),a=this.shadow.querySelectorAll("path");t&&(i.setAttribute("height",this.size),i.setAttribute("width",this.size),i.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),a.forEach((r=>{r.setAttribute("stroke-width",this.stroke),r.setAttribute("d",l(parseInt(this.size)/50,this.d))})),t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-dash: ${100*parseFloat(this["stroke-length"])};
        --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
        --uib-bg-opacity: ${this["bg-opacity"]};
      }
      ${yt}
    `)}},zt={register:(e="l-squircle")=>{customElements.get(e)||customElements.define(e,class extends W{})},element:W};var kt=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:var(--uib-size);position:relative;width:var(--uib-size)}.container,.electron{align-items:center;display:flex;justify-content:center}.electron{height:100%;left:0;position:absolute;top:0;width:100%}.electron:before{background-color:var(--uib-color);border-radius:50%;content:"";flex-shrink:0;height:35%;transition:background-color .3s ease;width:35%}.electron:first-child{transform:rotate(45deg)}.electron:first-child:before{animation:orbit var(--uib-speed) linear calc(var(--uib-speed)*-.143) infinite}.electron:nth-child(2){transform:rotate(-45deg)}.electron:nth-child(2):before{animation:orbit var(--uib-speed) linear calc(var(--uib-speed)/-2) infinite}@keyframes orbit{0%{opacity:.65;transform:translate(calc(var(--uib-size)*.5)) scale(.73684)}5%{opacity:.58;transform:translate(calc(var(--uib-size)*.4)) scale(.684208)}10%{opacity:.51;transform:translate(calc(var(--uib-size)*.3)) scale(.631576)}15%{opacity:.44;transform:translate(calc(var(--uib-size)*.2)) scale(.578944)}20%{opacity:.37;transform:translate(calc(var(--uib-size)*.1)) scale(.526312)}25%{opacity:.3;transform:translate(0) scale(.47368)}30%{opacity:.37;transform:translate(calc(var(--uib-size)*-.1)) scale(.526312)}35%{opacity:.44;transform:translate(calc(var(--uib-size)*-.2)) scale(.578944)}40%{opacity:.51;transform:translate(calc(var(--uib-size)*-.3)) scale(.631576)}45%{opacity:.58;transform:translate(calc(var(--uib-size)*-.4)) scale(.684208)}50%{opacity:.65;transform:translate(calc(var(--uib-size)*-.5)) scale(.73684)}55%{opacity:.72;transform:translate(calc(var(--uib-size)*-.4)) scale(.789472)}60%{opacity:.79;transform:translate(calc(var(--uib-size)*-.3)) scale(.842104)}65%{opacity:.86;transform:translate(calc(var(--uib-size)*-.2)) scale(.894736)}70%{opacity:.93;transform:translate(calc(var(--uib-size)*-.1)) scale(.947368)}75%{opacity:1;transform:translate(0) scale(1)}80%{opacity:.93;transform:translate(calc(var(--uib-size)*.1)) scale(.947368)}85%{opacity:.86;transform:translate(calc(var(--uib-size)*.2)) scale(.894736)}90%{opacity:.79;transform:translate(calc(var(--uib-size)*.3)) scale(.842104)}95%{opacity:.72;transform:translate(calc(var(--uib-size)*.4)) scale(.789472)}to{opacity:.65;transform:translate(calc(var(--uib-size)*.5)) scale(.73684)}}',Z=class extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:1.4}),this.template.innerHTML=`
      <div class="container">
        <div class="electron"></div>
        <div class="electron"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${kt}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${kt}
    `)}},xt={register:(e="l-superballs")=>{customElements.get(e)||customElements.define(e,class extends Z{})},element:Z};var $t=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{--dot-size:calc(var(--uib-size)*0.17);align-items:center;animation:smoothRotate calc(var(--uib-speed)*1.8) linear infinite;display:flex;height:var(--uib-size);justify-content:flex-start;position:relative;width:var(--uib-size)}.dot{align-items:flex-start;animation:rotate var(--uib-speed) ease-in-out infinite;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.dot:before{background-color:var(--uib-color);border-radius:50%;content:"";height:var(--dot-size);transition:background-color .3s ease;width:var(--dot-size)}.dot:nth-child(2),.dot:nth-child(2):before{animation-delay:calc(var(--uib-speed)*-.835*.5)}.dot:nth-child(3),.dot:nth-child(3):before{animation-delay:calc(var(--uib-speed)*-.668*.5)}.dot:nth-child(4),.dot:nth-child(4):before{animation-delay:calc(var(--uib-speed)*-.501*.5)}.dot:nth-child(5),.dot:nth-child(5):before{animation-delay:calc(var(--uib-speed)*-.334*.5)}.dot:nth-child(6),.dot:nth-child(6):before{animation-delay:calc(var(--uib-speed)*-.167*.5)}@keyframes rotate{0%{transform:rotate(0deg)}65%,to{transform:rotate(1turn)}}@keyframes smoothRotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',J=class extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:1.5}),this.template.innerHTML=`
      <div class="container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${$t}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${$t}
    `)}},wt={register:(e="l-tail-chase")=>{customElements.get(e)||customElements.define(e,class extends J{})},element:J};var Ct=":host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{--mask-size:calc(var(--uib-size)/2 - var(--uib-stroke));align-items:center;animation:spin calc(var(--uib-speed)) linear infinite;background-image:conic-gradient(transparent 25%,var(--uib-color));border-radius:50%;display:flex;height:var(--uib-size);justify-content:flex-start;-webkit-mask:radial-gradient(circle var(--mask-size),transparent 99%,#000 100%);mask:radial-gradient(circle var(--mask-size),transparent 99%,#000 100%);position:relative;width:var(--uib-size)}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",K=class extends s{_attributes=["size","color","speed","stroke"];size;color;speed;stroke;static get observedAttributes(){return["size","color","speed","stroke"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:.9,stroke:5}),this.template.innerHTML=`
      <div class="container"></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-stroke: ${this.stroke}px;
        }
        ${Ct}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-stroke: ${this.stroke}px;
      }
      ${Ct}
    `)}},St={register:(e="l-tailspin")=>{customElements.get(e)||customElements.define(e,class extends K{})},element:K};var _t=':host{align-items:center;display:inline-flex;flex-shrink:0;height:calc(var(--uib-size)*.59);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{--uib-cube-size:calc(var(--uib-size)*0.2);--uib-arc-1:-90deg;--uib-arc-2:90deg;align-items:flex-end;display:flex;height:calc(100% - var(--uib-cube-size)/2);justify-content:center;padding-bottom:calc(var(--uib-cube-size)/2);width:100%}.cube{--cube-container-height:calc(var(--uib-size)*0.8);align-items:center;animation:metronome var(--uib-speed) linear infinite;display:flex;height:var(--cube-container-height);transform:rotate(var(--uib-arc-1));transform-origin:center bottom}.cube,.cube:after{width:var(--uib-cube-size)}.cube:after{animation:morph var(--uib-speed) linear infinite;background-color:var(--uib-color);border-radius:25%;content:"";display:block;height:var(--uib-cube-size);transform-origin:center left;transition:background-color .3s ease}@keyframes metronome{0%{transform:rotate(var(--uib-arc-1))}50%{transform:rotate(var(--uib-arc-2))}50.001%{transform:translateX(var(--cube-container-height)) rotate(var(--uib-arc-1))}to{transform:rotate(var(--uib-arc-1))}}@keyframes morph{15%{transform:scaleX(1.2) scaleY(.8)}30%,50%{transform:scaleX(1)}55%{transform:scaleX(.8) scaleY(1.2)}65%,80%{transform:scaleX(1)}90%,95%{transform:scaleX(.65) scaleY(1.3)}}',Q=class extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:70,color:"black",speed:1.25}),this.template.innerHTML=`
    <div class="container"><div class="cube"></div></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${_t}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${_t}
    `)}},Pt={register:(e="l-treadmill")=>{customElements.get(e)||customElements.define(e,class extends Q{})},element:Q};var Tt=":host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{height:var(--uib-size);overflow:visible;transform-origin:center;width:var(--uib-size)}.car{fill:none;stroke:var(--uib-color);stroke-dasharray:var(--uib-dash),var(--uib-gap);stroke-dashoffset:0;stroke-linecap:round;animation:travel var(--uib-speed) linear infinite;will-change:stroke-dasharray,stroke-dashoffset}.car,.track{transition:stroke .5s ease}.track{stroke:var(--uib-color);opacity:var(--uib-bg-opacity)}@keyframes travel{0%{stroke-dashoffset:0}to{stroke-dashoffset:-100}}",V=class extends s{_attributes=["size","color","speed","stroke","stroke-length","bg-opacity"];size;color;speed;stroke;"stroke-length";"bg-opacity";d;static get observedAttributes(){return["size","color","speed","stroke","stroke-length","bg-opacity"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes),this.d="M37.2,23.4c0,9.1-4.9,17-12.3,21.2c-3.6,2.1-7.8,3.3-12.3,3.3c-4.5,0-8.6-1.2-12.2-3.3c0-9.1,4.9-16.9,12.3-21.2c3.6-2.1,7.8-3.3,12.2-3.3S33.6,21.3,37.2,23.4c7.3,4.2,12.2,12.1,12.3,21.2c-3.6,2.1-7.8,3.3-12.2,3.3c-4.5,0-8.6-1.2-12.3-3.3c-7.3-4.2-12.2-12.1-12.2-21.2c0-9.1,4.9-17,12.2-21.2C32.3,6.4,37.2,14.3,37.2,23.4z"}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",stroke:4,"stroke-length":.15,speed:1.4,"bg-opacity":.1});let t=l(parseInt(this.size)/50,this.d);this.template.innerHTML=`
      <svg
        class="container" 
        x="0px" 
        y="0px"
        viewBox="0 0 ${this.size} ${this.size}"
        height="${this.size}"
        width="${this.size}"
        preserveAspectRatio='xMidYMid meet'
      >
        <path
          class="track" 
          fill="none" 
          stroke-width="${this.stroke}" 
          pathlength="100"
          d="${t}"
        />

        <path
          class="car" 
          fill="none" 
          stroke-width="${this.stroke}" 
          pathlength="100"
          d="${t}"
        />
      </svg>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-dash: ${100*parseFloat(this["stroke-length"])};
          --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
          --uib-bg-opacity: ${this["bg-opacity"]};
        }
        ${Tt}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style"),i=this.shadow.querySelector("svg"),a=this.shadow.querySelectorAll("path");t&&(i.setAttribute("height",this.size),i.setAttribute("width",this.size),i.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),a.forEach((r=>{r.setAttribute("stroke-width",this.stroke),r.setAttribute("d",l(parseInt(this.size)/50,this.d))})),t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-dash: ${100*parseFloat(this["stroke-length"])};
        --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
        --uib-bg-opacity: ${this["bg-opacity"]};
      }
      ${Tt}
    `)}},Xt={register:(e="l-trefoil")=>{customElements.get(e)||customElements.define(e,class extends V{})},element:V};var At=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{--uib-dot-size:25%;animation:spin var(--uib-speed) infinite linear;display:inline-block;height:var(--uib-size);position:relative;width:var(--uib-size)}.dot{height:100%;left:calc(50% - var(--uib-dot-size)/2);width:var(--uib-dot-size)}.dot,.dot:after{position:absolute}.dot:after{background-color:var(--uib-color);border-radius:50%;content:"";height:0;left:0;padding-bottom:100%;top:0;transition:background-color .3s ease;width:100%}.dot:first-child{transform:rotate(120deg)}.dot:first-child:after{animation:wobble var(--uib-speed) infinite ease-in-out}.dot:nth-child(2){transform:rotate(-120deg)}.dot:nth-child(2):after,.dot:nth-child(3):after{animation:wobble var(--uib-speed) infinite ease-in-out}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes wobble{0%,to{transform:translateY(0)}50%{transform:translateY(65%)}}',ee=class extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:1.3}),this.template.innerHTML=`
      <div class="container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${At}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${At}
    `)}},Mt={register:(e="l-trio")=>{customElements.get(e)||customElements.define(e,class extends ee{})},element:ee};var Et=":host{align-items:center;display:inline-flex;flex-shrink:0;height:calc(var(--uib-size)*.9);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;display:flex;height:calc(var(--uib-size)*.9);justify-content:space-between;width:var(--uib-size)}.bar{background-color:var(--uib-color);height:100%;transition:background-color .3s ease;width:var(--uib-stroke)}.bar:first-child{animation:grow var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.45) infinite}.bar:nth-child(2){animation:grow var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.3) infinite}.bar:nth-child(3){animation:grow var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.15) infinite}.bar:nth-child(4){animation:grow var(--uib-speed) ease-in-out infinite}@keyframes grow{0%,to{transform:scaleY(.3)}50%{transform:scaleY(1)}}",te=class extends s{_attributes=["size","color","speed","stroke"];size;color;speed;stroke;static get observedAttributes(){return["size","color","speed","stroke"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:35,color:"black",speed:1,stroke:3.5}),this.template.innerHTML=`
      <div class="container">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-stroke: ${this.stroke}px;
        }
        ${Et}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-stroke: ${this.stroke}px;
      }
      ${Et}
    `)}},jt={register:(e="l-waveform")=>{customElements.get(e)||customElements.define(e,class extends te{})},element:te};var Lt=':host{align-items:center;display:inline-flex;flex-shrink:0;height:calc(var(--uib-size)*.25);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;display:flex;height:100%;justify-content:flex-start;position:relative;width:100%}.container:before{animation:wobble var(--uib-speed) calc(var(--uib-speed)*-.1) ease-in-out infinite;background-color:var(--uib-color);border-radius:50%;content:"";height:calc(var(--uib-size)*.25);transform:translateY(calc(var(--uib-size)*-.4));transition:background-color .3s ease;width:25%}@keyframes wobble{0%,to{transform:translateX(0)}50%{transform:translateX(calc(var(--uib-size)*.75))}}',ie=class extends s{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:45,color:"black",speed:.9}),this.template.innerHTML=`
      <div class="container"></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${Lt}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${Lt}
    `)}},Ht={register:(e="l-wobble")=>{customElements.get(e)||customElements.define(e,class extends ie{})},element:ie};var qt=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-stroke);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;border-radius:calc(var(--uib-stroke)/2);display:flex;height:var(--uib-stroke);justify-content:center;overflow:hidden;position:relative;transform:translateZ(0);width:var(--uib-size)}.container:before{left:0;opacity:var(--uib-bg-opacity);position:absolute;top:0}.container:after,.container:before{background-color:var(--uib-color);content:"";height:100%;transition:background-color .3s ease;width:100%}.container:after{animation:zoom var(--uib-speed) ease-in-out infinite;border-radius:calc(var(--uib-stroke)/2);transform:translateX(-100%)}@keyframes zoom{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}',se=class extends s{_attributes=["size","color","speed","stroke","bg-opacity"];size;color;speed;stroke;"bg-opacity";static get observedAttributes(){return["size","color","speed","stroke","bg-opacity"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:80,color:"black",speed:1.4,stroke:5,"bg-opacity":.1}),this.template.innerHTML=`
      <div class="container"></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-stroke: ${this.stroke}px;
          --uib-bg-opacity: ${this["bg-opacity"]};
        }
        ${qt}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let t=this.shadow.querySelector("style");t&&(t.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-stroke: ${this.stroke}px;
        --uib-bg-opacity: ${this["bg-opacity"]};
      }
      ${qt}
    `)}},Yt={register:(e="l-zoomies")=>{customElements.get(e)||customElements.define(e,class extends se{})},element:se};var Ot=["ring","ring2","tailspin","lineSpinner","squircle","square","reuleaux","tailChase","dotSpinner","spiral","bouncy","treadmill","bouncyArc","waveform","hatch","hourglass","zoomies","lineWobble","infinity","trefoil","cardio","helix","grid","quantum","wobble","orbit","chaoticOrbit","superballs","trio","momentum","dotWave","leapfrog","newtonsCradle","dotStream","dotPulse","metronome","jelly","jellyTriangle","mirage","ping","pulsar","ripples","miyagi","pinwheel"],Nt={ring:"\u5706\u73AF",ring2:"\u8F68\u8FF9\u5706\u73AF",tailspin:"\u65CB\u8F6C\u5C3E\u8FF9",lineSpinner:"\u7EBF\u6761\u65CB\u8F6C",squircle:"\u5706\u89D2\u65B9\u73AF",square:"\u65B9\u5F62",reuleaux:"\u5F27\u5F62\u4E09\u89D2",tailChase:"\u8FFD\u9010",dotSpinner:"\u5706\u70B9\u65CB\u8F6C",spiral:"\u87BA\u65CB",bouncy:"\u5F39\u8DF3",treadmill:"\u8DD1\u6B65\u673A",bouncyArc:"\u5F39\u8DF3\u5F27\u7EBF",waveform:"\u6CE2\u5F62",hatch:"\u4EA4\u9519\u7EBF\u6761",hourglass:"\u6C99\u6F0F",zoomies:"\u75BE\u9A70",lineWobble:"\u6447\u6446\u7EBF\u6761",infinity:"\u65E0\u9650",trefoil:"\u4E09\u53F6\u73AF",cardio:"\u5FC3\u5F62",helix:"\u53CC\u87BA\u65CB",grid:"\u7F51\u683C",quantum:"\u91CF\u5B50",wobble:"\u6447\u6446",orbit:"\u8F68\u9053",chaoticOrbit:"\u4EA4\u9519\u8F68\u9053",superballs:"\u5F39\u529B\u7403",trio:"\u4E09\u91CD",momentum:"\u52A8\u91CF",dotWave:"\u5706\u70B9\u6CE2\u6D6A",leapfrog:"\u8DF3\u8DC3",newtonsCradle:"\u725B\u987F\u6446",dotStream:"\u5706\u70B9\u6D41",dotPulse:"\u5706\u70B9\u8109\u51B2",metronome:"\u8282\u62CD\u5668",jelly:"\u679C\u51BB",jellyTriangle:"\u4E09\u89D2\u679C\u51BB",mirage:"\u5E7B\u5F71",ping:"\u8F7B\u8DF3",pulsar:"\u8109\u51B2",ripples:"\u6D9F\u6F2A",miyagi:"\u65CB\u8F6C\u4EA4\u7EC7",pinwheel:"\u98CE\u8F66"},Dt=e=>e==="ring2"?"Ring 2":e==="newtonsCradle"?"Newton\u2019s Cradle":e.replace(/([A-Z])/g," $1").replace(/^./,t=>t.toUpperCase()),Ut=matchMedia("(prefers-reduced-motion: reduce)"),u=Ut.matches,Ft=1,It=document.querySelector("#loaders-grid"),h=[];for(let e of Ot){if(!ae[e])continue;let t="l-"+e.replace(/[A-Z]/g,d=>"-"+d.toLowerCase());ae[e].register(t);let i=document.createElement("article");i.className="loader-card",i.dataset.search=[Nt[e],Dt(e),e].join(" ").toLowerCase();let a=document.createElement("div");a.className="loader-stage",a.setAttribute("aria-hidden","true");let r=document.createElement(t);r.setAttribute("size","42"),r.setAttribute("color","#202024"),a.append(r);let n=document.createElement("h2");n.textContent=Nt[e];let c=document.createElement("p");c.textContent=Dt(e),i.append(a,n,c),It.append(i),h.push({article:i,element:r,key:e})}document.querySelector("#total-count").textContent=h.length+" \u79CD";function p(){requestAnimationFrame(()=>{for(let{element:t,article:i}of h){if(i.hidden)continue;let a=t.shadowRoot;if(!a)continue;let r=new Set(Array.from(a.querySelectorAll("*")).flatMap(n=>n.getAnimations()));for(let n of r)"animationName"in n&&(n.playbackRate=Ft,u?n.pause():n.play())}});let e=document.querySelector("#pause");e.textContent=u?"\u7EE7\u7EED\u64AD\u653E":"\u6682\u505C\u52A8\u753B",e.setAttribute("aria-pressed",String(u))}function Bt(){let e=document.querySelector("#search").value.trim().toLowerCase(),t=0;for(let{article:a}of h)a.hidden=!a.dataset.search.includes(e),a.hidden||t++;document.querySelector("#match-count").textContent=t+" / "+h.length+" \u79CD\u52A0\u8F7D\u52A8\u753B";let i=document.querySelector(".loaders-empty");!t&&!i&&(i=document.createElement("p"),i.className="loaders-empty",i.textContent="\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u52A8\u753B",It.append(i)),i&&(i.hidden=t>0),p()}document.querySelector("#pause").addEventListener("click",()=>{u=!u,p()});document.querySelector("#search").addEventListener("input",Bt);document.querySelector("#color").addEventListener("input",e=>{for(let{element:t}of h)t.setAttribute("color",e.target.value);p()});document.querySelector("#size").addEventListener("input",e=>{document.querySelector("#size-value").textContent=e.target.value;for(let{element:t}of h)t.setAttribute("size",e.target.value);p()});document.querySelector("#speed").addEventListener("change",e=>{Ft=Number(e.target.value),p()});Ut.addEventListener("change",e=>{e.matches&&(u=!0,p())});Bt();})();
