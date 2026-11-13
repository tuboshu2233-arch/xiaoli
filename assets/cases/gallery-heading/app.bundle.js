"use strict";(()=>{var Sf=Object.create;var Ws=Object.defineProperty;var _f=Object.getOwnPropertyDescriptor;var Tf=Object.getOwnPropertyNames;var Ef=Object.getPrototypeOf,Af=Object.prototype.hasOwnProperty;var Ke=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}};var Mf=(e,t,a,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Tf(t))!Af.call(e,n)&&n!==a&&Ws(e,n,{get:()=>t[n],enumerable:!(i=_f(t,n))||i.enumerable});return e};var aa=(e,t,a)=>(a=e!=null?Sf(Ef(e)):{},Mf(t||!e||!e.__esModule?Ws(a,"default",{value:e,enumerable:!0}):a,e));var ac=Ke(T=>{"use strict";var oo=Symbol.for("react.transitional.element"),Cf=Symbol.for("react.portal"),zf=Symbol.for("react.fragment"),Rf=Symbol.for("react.strict_mode"),Lf=Symbol.for("react.profiler"),Df=Symbol.for("react.consumer"),Of=Symbol.for("react.context"),Bf=Symbol.for("react.forward_ref"),Hf=Symbol.for("react.suspense"),qf=Symbol.for("react.memo"),Qs=Symbol.for("react.lazy"),Nf=Symbol.for("react.activity"),Xs=Symbol.iterator;function Uf(e){return e===null||typeof e!="object"?null:(e=Xs&&e[Xs]||e["@@iterator"],typeof e=="function"?e:null)}var Ks={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Js=Object.assign,$s={};function Ta(e,t,a){this.props=e,this.context=t,this.refs=$s,this.updater=a||Ks}Ta.prototype.isReactComponent={};Ta.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ta.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ec(){}ec.prototype=Ta.prototype;function lo(e,t,a){this.props=e,this.context=t,this.refs=$s,this.updater=a||Ks}var so=lo.prototype=new ec;so.constructor=lo;Js(so,Ta.prototype);so.isPureReactComponent=!0;var Ps=Array.isArray;function ro(){}var W={H:null,A:null,T:null,S:null},tc=Object.prototype.hasOwnProperty;function co(e,t,a){var i=a.ref;return{$$typeof:oo,type:e,key:t,ref:i!==void 0?i:null,props:a}}function Gf(e,t){return co(e.type,t,e.props)}function uo(e){return typeof e=="object"&&e!==null&&e.$$typeof===oo}function jf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var Is=/\/+/g;function no(e,t){return typeof e=="object"&&e!==null&&e.key!=null?jf(""+e.key):t.toString(36)}function Ff(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(ro,ro):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function _a(e,t,a,i,n){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(r){case"bigint":case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case oo:case Cf:o=!0;break;case Qs:return o=e._init,_a(o(e._payload),t,a,i,n)}}if(o)return n=n(e),o=i===""?"."+no(e,0):i,Ps(n)?(a="",o!=null&&(a=o.replace(Is,"$&/")+"/"),_a(n,t,a,"",function(p){return p})):n!=null&&(uo(n)&&(n=Gf(n,a+(n.key==null||e&&e.key===n.key?"":(""+n.key).replace(Is,"$&/")+"/")+o)),t.push(n)),1;o=0;var l=i===""?".":i+":";if(Ps(e))for(var s=0;s<e.length;s++)i=e[s],r=l+no(i,s),o+=_a(i,t,a,r,n);else if(s=Uf(e),typeof s=="function")for(e=s.call(e),s=0;!(i=e.next()).done;)i=i.value,r=l+no(i,s++),o+=_a(i,t,a,r,n);else if(r==="object"){if(typeof e.then=="function")return _a(Ff(e),t,a,i,n);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return o}function _n(e,t,a){if(e==null)return e;var i=[],n=0;return _a(e,i,"","",function(r){return t.call(a,r,n++)}),i}function Yf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Zs=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Vf={map:_n,forEach:function(e,t,a){_n(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return _n(e,function(){t++}),t},toArray:function(e){return _n(e,function(t){return t})||[]},only:function(e){if(!uo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Activity=Nf;T.Children=Vf;T.Component=Ta;T.Fragment=zf;T.Profiler=Lf;T.PureComponent=lo;T.StrictMode=Rf;T.Suspense=Hf;T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W;T.__COMPILER_RUNTIME={__proto__:null,c:function(e){return W.H.useMemoCache(e)}};T.cache=function(e){return function(){return e.apply(null,arguments)}};T.cacheSignal=function(){return null};T.cloneElement=function(e,t,a){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Js({},e.props),n=e.key;if(t!=null)for(r in t.key!==void 0&&(n=""+t.key),t)!tc.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(i[r]=t[r]);var r=arguments.length-2;if(r===1)i.children=a;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];i.children=o}return co(e.type,n,i)};T.createContext=function(e){return e={$$typeof:Of,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Df,_context:e},e};T.createElement=function(e,t,a){var i,n={},r=null;if(t!=null)for(i in t.key!==void 0&&(r=""+t.key),t)tc.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(n[i]=t[i]);var o=arguments.length-2;if(o===1)n.children=a;else if(1<o){for(var l=Array(o),s=0;s<o;s++)l[s]=arguments[s+2];n.children=l}if(e&&e.defaultProps)for(i in o=e.defaultProps,o)n[i]===void 0&&(n[i]=o[i]);return co(e,r,n)};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:Bf,render:e}};T.isValidElement=uo;T.lazy=function(e){return{$$typeof:Qs,_payload:{_status:-1,_result:e},_init:Yf}};T.memo=function(e,t){return{$$typeof:qf,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=W.T,a={};W.T=a;try{var i=e(),n=W.S;n!==null&&n(a,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(ro,Zs)}catch(r){Zs(r)}finally{t!==null&&a.types!==null&&(t.types=a.types),W.T=t}};T.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()};T.use=function(e){return W.H.use(e)};T.useActionState=function(e,t,a){return W.H.useActionState(e,t,a)};T.useCallback=function(e,t){return W.H.useCallback(e,t)};T.useContext=function(e){return W.H.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e,t){return W.H.useDeferredValue(e,t)};T.useEffect=function(e,t){return W.H.useEffect(e,t)};T.useEffectEvent=function(e){return W.H.useEffectEvent(e)};T.useId=function(){return W.H.useId()};T.useImperativeHandle=function(e,t,a){return W.H.useImperativeHandle(e,t,a)};T.useInsertionEffect=function(e,t){return W.H.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return W.H.useLayoutEffect(e,t)};T.useMemo=function(e,t){return W.H.useMemo(e,t)};T.useOptimistic=function(e,t){return W.H.useOptimistic(e,t)};T.useReducer=function(e,t,a){return W.H.useReducer(e,t,a)};T.useRef=function(e){return W.H.useRef(e)};T.useState=function(e){return W.H.useState(e)};T.useSyncExternalStore=function(e,t,a){return W.H.useSyncExternalStore(e,t,a)};T.useTransition=function(){return W.H.useTransition()};T.version="19.2.6"});var bi=Ke((Pm,ic)=>{"use strict";ic.exports=ac()});var fc=Ke(Z=>{"use strict";function go(e,t){var a=e.length;e.push(t);e:for(;0<a;){var i=a-1>>>1,n=e[i];if(0<Tn(n,t))e[i]=t,e[a]=n,a=i;else break e}}function Je(e){return e.length===0?null:e[0]}function An(e){if(e.length===0)return null;var t=e[0],a=e.pop();if(a!==t){e[0]=a;e:for(var i=0,n=e.length,r=n>>>1;i<r;){var o=2*(i+1)-1,l=e[o],s=o+1,p=e[s];if(0>Tn(l,a))s<n&&0>Tn(p,l)?(e[i]=p,e[s]=a,i=s):(e[i]=l,e[o]=a,i=o);else if(s<n&&0>Tn(p,a))e[i]=p,e[s]=a,i=s;else break e}}return t}function Tn(e,t){var a=e.sortIndex-t.sortIndex;return a!==0?a:e.id-t.id}Z.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(nc=performance,Z.unstable_now=function(){return nc.now()}):(po=Date,rc=po.now(),Z.unstable_now=function(){return po.now()-rc});var nc,po,rc,ot=[],Mt=[],Wf=1,He=null,ge=3,mo=!1,xi=!1,yi=!1,vo=!1,sc=typeof setTimeout=="function"?setTimeout:null,cc=typeof clearTimeout=="function"?clearTimeout:null,oc=typeof setImmediate<"u"?setImmediate:null;function En(e){for(var t=Je(Mt);t!==null;){if(t.callback===null)An(Mt);else if(t.startTime<=e)An(Mt),t.sortIndex=t.expirationTime,go(ot,t);else break;t=Je(Mt)}}function bo(e){if(yi=!1,En(e),!xi)if(Je(ot)!==null)xi=!0,Aa||(Aa=!0,Ea());else{var t=Je(Mt);t!==null&&xo(bo,t.startTime-e)}}var Aa=!1,wi=-1,dc=5,uc=-1;function pc(){return vo?!0:!(Z.unstable_now()-uc<dc)}function fo(){if(vo=!1,Aa){var e=Z.unstable_now();uc=e;var t=!0;try{e:{xi=!1,yi&&(yi=!1,cc(wi),wi=-1),mo=!0;var a=ge;try{t:{for(En(e),He=Je(ot);He!==null&&!(He.expirationTime>e&&pc());){var i=He.callback;if(typeof i=="function"){He.callback=null,ge=He.priorityLevel;var n=i(He.expirationTime<=e);if(e=Z.unstable_now(),typeof n=="function"){He.callback=n,En(e),t=!0;break t}He===Je(ot)&&An(ot),En(e)}else An(ot);He=Je(ot)}if(He!==null)t=!0;else{var r=Je(Mt);r!==null&&xo(bo,r.startTime-e),t=!1}}break e}finally{He=null,ge=a,mo=!1}t=void 0}}finally{t?Ea():Aa=!1}}}var Ea;typeof oc=="function"?Ea=function(){oc(fo)}:typeof MessageChannel<"u"?(ho=new MessageChannel,lc=ho.port2,ho.port1.onmessage=fo,Ea=function(){lc.postMessage(null)}):Ea=function(){sc(fo,0)};var ho,lc;function xo(e,t){wi=sc(function(){e(Z.unstable_now())},t)}Z.unstable_IdlePriority=5;Z.unstable_ImmediatePriority=1;Z.unstable_LowPriority=4;Z.unstable_NormalPriority=3;Z.unstable_Profiling=null;Z.unstable_UserBlockingPriority=2;Z.unstable_cancelCallback=function(e){e.callback=null};Z.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):dc=0<e?Math.floor(1e3/e):5};Z.unstable_getCurrentPriorityLevel=function(){return ge};Z.unstable_next=function(e){switch(ge){case 1:case 2:case 3:var t=3;break;default:t=ge}var a=ge;ge=t;try{return e()}finally{ge=a}};Z.unstable_requestPaint=function(){vo=!0};Z.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=ge;ge=e;try{return t()}finally{ge=a}};Z.unstable_scheduleCallback=function(e,t,a){var i=Z.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?i+a:i):a=i,e){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=a+n,e={id:Wf++,callback:t,priorityLevel:e,startTime:a,expirationTime:n,sortIndex:-1},a>i?(e.sortIndex=a,go(Mt,e),Je(ot)===null&&e===Je(Mt)&&(yi?(cc(wi),wi=-1):yi=!0,xo(bo,a-i))):(e.sortIndex=n,go(ot,e),xi||mo||(xi=!0,Aa||(Aa=!0,Ea()))),e};Z.unstable_shouldYield=pc;Z.unstable_wrapCallback=function(e){var t=ge;return function(){var a=ge;ge=t;try{return e.apply(this,arguments)}finally{ge=a}}}});var gc=Ke((Zm,hc)=>{"use strict";hc.exports=fc()});var vc=Ke(ve=>{"use strict";var Xf=bi();function mc(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ct(){}var me={d:{f:Ct,r:function(){throw Error(mc(522))},D:Ct,C:Ct,L:Ct,m:Ct,X:Ct,S:Ct,M:Ct},p:0,findDOMNode:null},Pf=Symbol.for("react.portal");function If(e,t,a){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pf,key:i==null?null:""+i,children:e,containerInfo:t,implementation:a}}var ki=Xf.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Mn(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}ve.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=me;ve.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(mc(299));return If(e,t,null,a)};ve.flushSync=function(e){var t=ki.T,a=me.p;try{if(ki.T=null,me.p=2,e)return e()}finally{ki.T=t,me.p=a,me.d.f()}};ve.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,me.d.C(e,t))};ve.prefetchDNS=function(e){typeof e=="string"&&me.d.D(e)};ve.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var a=t.as,i=Mn(a,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;a==="style"?me.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:n,fetchPriority:r}):a==="script"&&me.d.X(e,{crossOrigin:i,integrity:n,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};ve.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var a=Mn(t.as,t.crossOrigin);me.d.M(e,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&me.d.M(e)};ve.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var a=t.as,i=Mn(a,t.crossOrigin);me.d.L(e,a,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};ve.preloadModule=function(e,t){if(typeof e=="string")if(t){var a=Mn(t.as,t.crossOrigin);me.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else me.d.m(e)};ve.requestFormReset=function(e){me.d.r(e)};ve.unstable_batchedUpdates=function(e,t){return e(t)};ve.useFormState=function(e,t,a){return ki.H.useFormState(e,t,a)};ve.useFormStatus=function(){return ki.H.useHostTransitionStatus()};ve.version="19.2.6"});var yc=Ke((Km,xc)=>{"use strict";function bc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bc)}catch(e){console.error(e)}}bc(),xc.exports=vc()});var Lp=Ke($r=>{"use strict";var oe=gc(),X0=bi(),Zf=yc();function b(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function P0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function cn(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function I0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Z0(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wc(e){if(cn(e)!==e)throw Error(b(188))}function Qf(e){var t=e.alternate;if(!t){if(t=cn(e),t===null)throw Error(b(188));return t!==e?null:e}for(var a=e,i=t;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(i=n.return,i!==null){a=i;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return wc(n),e;if(r===i)return wc(n),t;r=r.sibling}throw Error(b(188))}if(a.return!==i.return)a=n,i=r;else{for(var o=!1,l=n.child;l;){if(l===a){o=!0,a=n,i=r;break}if(l===i){o=!0,i=n,a=r;break}l=l.sibling}if(!o){for(l=r.child;l;){if(l===a){o=!0,a=r,i=n;break}if(l===i){o=!0,i=r,a=n;break}l=l.sibling}if(!o)throw Error(b(189))}}if(a.alternate!==i)throw Error(b(190))}if(a.tag!==3)throw Error(b(188));return a.stateNode.current===a?e:t}function Q0(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Q0(e),t!==null)return t;e=e.sibling}return null}var I=Object.assign,Kf=Symbol.for("react.element"),Cn=Symbol.for("react.transitional.element"),zi=Symbol.for("react.portal"),Da=Symbol.for("react.fragment"),K0=Symbol.for("react.strict_mode"),$o=Symbol.for("react.profiler"),J0=Symbol.for("react.consumer"),ht=Symbol.for("react.context"),Il=Symbol.for("react.forward_ref"),el=Symbol.for("react.suspense"),tl=Symbol.for("react.suspense_list"),Zl=Symbol.for("react.memo"),zt=Symbol.for("react.lazy"),al=Symbol.for("react.activity"),Jf=Symbol.for("react.memo_cache_sentinel"),kc=Symbol.iterator;function Si(e){return e===null||typeof e!="object"?null:(e=kc&&e[kc]||e["@@iterator"],typeof e=="function"?e:null)}var $f=Symbol.for("react.client.reference");function il(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$f?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Da:return"Fragment";case $o:return"Profiler";case K0:return"StrictMode";case el:return"Suspense";case tl:return"SuspenseList";case al:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case zi:return"Portal";case ht:return e.displayName||"Context";case J0:return(e._context.displayName||"Context")+".Consumer";case Il:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zl:return t=e.displayName||null,t!==null?t:il(e.type)||"Memo";case zt:t=e._payload,e=e._init;try{return il(e(t))}catch{}}return null}var Ri=Array.isArray,S=X0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=Zf.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,sa={pending:!1,data:null,method:null,action:null},nl=[],Oa=-1;function it(e){return{current:e}}function ce(e){0>Oa||(e.current=nl[Oa],nl[Oa]=null,Oa--)}function V(e,t){Oa++,nl[Oa]=e.current,e.current=t}var at=it(null),Ii=it(null),jt=it(null),sr=it(null);function cr(e,t){switch(V(jt,t),V(Ii,e),V(at,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?C0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=C0(t),e=bp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ce(at),V(at,e)}function Ja(){ce(at),ce(Ii),ce(jt)}function rl(e){e.memoizedState!==null&&V(sr,e);var t=at.current,a=bp(t,e.type);t!==a&&(V(Ii,e),V(at,a))}function dr(e){Ii.current===e&&(ce(at),ce(Ii)),sr.current===e&&(ce(sr),on._currentValue=sa)}var yo,Sc;function na(e){if(yo===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);yo=t&&t[1]||"",Sc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yo+e+Sc}var wo=!1;function ko(e,t){if(!e||wo)return"";wo=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var v=function(){throw Error()};if(Object.defineProperty(v.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(v,[])}catch(h){var f=h}Reflect.construct(e,[],v)}else{try{v.call()}catch(h){f=h}e.call(v.prototype)}}else{try{throw Error()}catch(h){f=h}(v=e())&&typeof v.catch=="function"&&v.catch(function(){})}}catch(h){if(h&&f&&typeof h.stack=="string")return[h.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),o=r[0],l=r[1];if(o&&l){var s=o.split(`
`),p=l.split(`
`);for(n=i=0;i<s.length&&!s[i].includes("DetermineComponentFrameRoot");)i++;for(;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;if(i===s.length||n===p.length)for(i=s.length-1,n=p.length-1;1<=i&&0<=n&&s[i]!==p[n];)n--;for(;1<=i&&0<=n;i--,n--)if(s[i]!==p[n]){if(i!==1||n!==1)do if(i--,n--,0>n||s[i]!==p[n]){var g=`
`+s[i].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=i&&0<=n);break}}}finally{wo=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?na(a):""}function eh(e,t){switch(e.tag){case 26:case 27:case 5:return na(e.type);case 16:return na("Lazy");case 13:return e.child!==t&&t!==null?na("Suspense Fallback"):na("Suspense");case 19:return na("SuspenseList");case 0:case 15:return ko(e.type,!1);case 11:return ko(e.type.render,!1);case 1:return ko(e.type,!0);case 31:return na("Activity");default:return""}}function _c(e){try{var t="",a=null;do t+=eh(e,a),a=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var ol=Object.prototype.hasOwnProperty,Ql=oe.unstable_scheduleCallback,So=oe.unstable_cancelCallback,th=oe.unstable_shouldYield,ah=oe.unstable_requestPaint,ze=oe.unstable_now,ih=oe.unstable_getCurrentPriorityLevel,$0=oe.unstable_ImmediatePriority,ed=oe.unstable_UserBlockingPriority,ur=oe.unstable_NormalPriority,nh=oe.unstable_LowPriority,td=oe.unstable_IdlePriority,rh=oe.log,oh=oe.unstable_setDisableYieldValue,dn=null,Re=null;function Ht(e){if(typeof rh=="function"&&oh(e),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(dn,e)}catch{}}var Le=Math.clz32?Math.clz32:ch,lh=Math.log,sh=Math.LN2;function ch(e){return e>>>=0,e===0?32:31-(lh(e)/sh|0)|0}var zn=256,Rn=262144,Ln=4194304;function ra(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qr(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var n=0,r=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var l=i&134217727;return l!==0?(i=l&~r,i!==0?n=ra(i):(o&=l,o!==0?n=ra(o):a||(a=l&~e,a!==0&&(n=ra(a))))):(l=i&~r,l!==0?n=ra(l):o!==0?n=ra(o):a||(a=i&~e,a!==0&&(n=ra(a)))),n===0?0:t!==0&&t!==n&&(t&r)===0&&(r=n&-n,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:n}function un(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function dh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ad(){var e=Ln;return Ln<<=1,(Ln&62914560)===0&&(Ln=4194304),e}function _o(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function pn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function uh(e,t,a,i,n,r){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,p=e.hiddenUpdates;for(a=o&~a;0<a;){var g=31-Le(a),v=1<<g;l[g]=0,s[g]=-1;var f=p[g];if(f!==null)for(p[g]=null,g=0;g<f.length;g++){var h=f[g];h!==null&&(h.lane&=-536870913)}a&=~v}i!==0&&id(e,i,0),r!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=r&~(o&~t))}function id(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Le(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function nd(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-Le(a),n=1<<i;n&t|e[i]&t&&(e[i]|=t),a&=~n}}function rd(e,t){var a=t&-t;return a=(a&42)!==0?1:Kl(a),(a&(e.suspendedLanes|t))!==0?0:a}function Kl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Jl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function od(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Cp(e.type))}function Tc(e,t){var a=q.p;try{return q.p=e,t()}finally{q.p=a}}var ea=Math.random().toString(36).slice(2),ue="__reactFiber$"+ea,_e="__reactProps$"+ea,ci="__reactContainer$"+ea,ll="__reactEvents$"+ea,ph="__reactListeners$"+ea,fh="__reactHandles$"+ea,Ec="__reactResources$"+ea,fn="__reactMarker$"+ea;function $l(e){delete e[ue],delete e[_e],delete e[ll],delete e[ph],delete e[fh]}function Ba(e){var t=e[ue];if(t)return t;for(var a=e.parentNode;a;){if(t=a[ci]||a[ue]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=O0(e);e!==null;){if(a=e[ue])return a;e=O0(e)}return t}e=a,a=e.parentNode}return null}function di(e){if(e=e[ue]||e[ci]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Li(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(b(33))}function Wa(e){var t=e[Ec];return t||(t=e[Ec]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function se(e){e[fn]=!0}var ld=new Set,sd={};function ba(e,t){$a(e,t),$a(e+"Capture",t)}function $a(e,t){for(sd[e]=t,e=0;e<t.length;e++)ld.add(t[e])}var hh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ac={},Mc={};function gh(e){return ol.call(Mc,e)?!0:ol.call(Ac,e)?!1:hh.test(e)?Mc[e]=!0:(Ac[e]=!0,!1)}function Pn(e,t,a){if(gh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Dn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function lt(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}function Ne(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mh(e,t,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var n=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(o){a=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function sl(e){if(!e._valueTracker){var t=cd(e)?"checked":"value";e._valueTracker=mh(e,t,""+e[t])}}function dd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=cd(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function pr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var vh=/[\n"\\]/g;function je(e){return e.replace(vh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function cl(e,t,a,i,n,r,o,l){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ne(t)):e.value!==""+Ne(t)&&(e.value=""+Ne(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?dl(e,o,Ne(t)):a!=null?dl(e,o,Ne(a)):i!=null&&e.removeAttribute("value"),n==null&&r!=null&&(e.defaultChecked=!!r),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.name=""+Ne(l):e.removeAttribute("name")}function ud(e,t,a,i,n,r,o,l){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){sl(e);return}a=a!=null?""+Ne(a):"",t=t!=null?""+Ne(t):a,l||t===e.value||(e.value=t),e.defaultValue=t}i=i??n,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=l?e.checked:!!i,e.defaultChecked=!!i,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),sl(e)}function dl(e,t,a){t==="number"&&pr(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Xa(e,t,a,i){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Ne(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,i&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function pd(e,t,a){if(t!=null&&(t=""+Ne(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Ne(a):""}function fd(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(b(92));if(Ri(i)){if(1<i.length)throw Error(b(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=Ne(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),sl(e)}function ei(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var bh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cc(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||bh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function hd(e,t,a){if(t!=null&&typeof t!="object")throw Error(b(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var n in t)i=t[n],t.hasOwnProperty(n)&&a[n]!==i&&Cc(e,n,i)}else for(var r in t)t.hasOwnProperty(r)&&Cc(e,r,t[r])}function es(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function In(e){return yh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function gt(){}var ul=null;function ts(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ha=null,Pa=null;function zc(e){var t=di(e);if(t&&(e=t.stateNode)){var a=e[_e]||null;e:switch(e=t.stateNode,t.type){case"input":if(cl(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+je(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var n=i[_e]||null;if(!n)throw Error(b(90));cl(i,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&dd(i)}break e;case"textarea":pd(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Xa(e,!!a.multiple,t,!1)}}}var To=!1;function gd(e,t,a){if(To)return e(t,a);To=!0;try{var i=e(t);return i}finally{if(To=!1,(Ha!==null||Pa!==null)&&(Zr(),Ha&&(t=Ha,e=Pa,Pa=Ha=null,zc(t),e)))for(t=0;t<e.length;t++)zc(e[t])}}function Zi(e,t){var a=e.stateNode;if(a===null)return null;var i=a[_e]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(b(231,t,typeof a));return a}var yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pl=!1;if(yt)try{Ma={},Object.defineProperty(Ma,"passive",{get:function(){pl=!0}}),window.addEventListener("test",Ma,Ma),window.removeEventListener("test",Ma,Ma)}catch{pl=!1}var Ma,qt=null,as=null,Zn=null;function md(){if(Zn)return Zn;var e,t=as,a=t.length,i,n="value"in qt?qt.value:qt.textContent,r=n.length;for(e=0;e<a&&t[e]===n[e];e++);var o=a-e;for(i=1;i<=o&&t[a-i]===n[r-i];i++);return Zn=n.slice(e,1<i?1-i:void 0)}function Qn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function On(){return!0}function Rc(){return!1}function Te(e){function t(a,i,n,r,o){this._reactName=a,this._targetInst=n,this.type=i,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(a=e[l],this[l]=a?a(r):r[l]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?On:Rc,this.isPropagationStopped=Rc,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=On)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=On)},persist:function(){},isPersistent:On}),t}var xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nr=Te(xa),hn=I({},xa,{view:0,detail:0}),wh=Te(hn),Eo,Ao,_i,Ur=I({},hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_i&&(_i&&e.type==="mousemove"?(Eo=e.screenX-_i.screenX,Ao=e.screenY-_i.screenY):Ao=Eo=0,_i=e),Eo)},movementY:function(e){return"movementY"in e?e.movementY:Ao}}),Lc=Te(Ur),kh=I({},Ur,{dataTransfer:0}),Sh=Te(kh),_h=I({},hn,{relatedTarget:0}),Mo=Te(_h),Th=I({},xa,{animationName:0,elapsedTime:0,pseudoElement:0}),Eh=Te(Th),Ah=I({},xa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mh=Te(Ah),Ch=I({},xa,{data:0}),Dc=Te(Ch),zh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lh[e])?!!t[e]:!1}function is(){return Dh}var Oh=I({},hn,{key:function(e){if(e.key){var t=zh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:is,charCode:function(e){return e.type==="keypress"?Qn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bh=Te(Oh),Hh=I({},Ur,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oc=Te(Hh),qh=I({},hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:is}),Nh=Te(qh),Uh=I({},xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gh=Te(Uh),jh=I({},Ur,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fh=Te(jh),Yh=I({},xa,{newState:0,oldState:0}),Vh=Te(Yh),Wh=[9,13,27,32],ns=yt&&"CompositionEvent"in window,Bi=null;yt&&"documentMode"in document&&(Bi=document.documentMode);var Xh=yt&&"TextEvent"in window&&!Bi,vd=yt&&(!ns||Bi&&8<Bi&&11>=Bi),Bc=" ",Hc=!1;function bd(e,t){switch(e){case"keyup":return Wh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qa=!1;function Ph(e,t){switch(e){case"compositionend":return xd(t);case"keypress":return t.which!==32?null:(Hc=!0,Bc);case"textInput":return e=t.data,e===Bc&&Hc?null:e;default:return null}}function Ih(e,t){if(qa)return e==="compositionend"||!ns&&bd(e,t)?(e=md(),Zn=as=qt=null,qa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vd&&t.locale!=="ko"?null:t.data;default:return null}}var Zh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Zh[e.type]:t==="textarea"}function yd(e,t,a,i){Ha?Pa?Pa.push(i):Pa=[i]:Ha=i,t=zr(t,"onChange"),0<t.length&&(a=new Nr("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var Hi=null,Qi=null;function Qh(e){gp(e,0)}function Gr(e){var t=Li(e);if(dd(t))return e}function Nc(e,t){if(e==="change")return t}var wd=!1;yt&&(yt?(Hn="oninput"in document,Hn||(Co=document.createElement("div"),Co.setAttribute("oninput","return;"),Hn=typeof Co.oninput=="function"),Bn=Hn):Bn=!1,wd=Bn&&(!document.documentMode||9<document.documentMode));var Bn,Hn,Co;function Uc(){Hi&&(Hi.detachEvent("onpropertychange",kd),Qi=Hi=null)}function kd(e){if(e.propertyName==="value"&&Gr(Qi)){var t=[];yd(t,Qi,e,ts(e)),gd(Qh,t)}}function Kh(e,t,a){e==="focusin"?(Uc(),Hi=t,Qi=a,Hi.attachEvent("onpropertychange",kd)):e==="focusout"&&Uc()}function Jh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gr(Qi)}function $h(e,t){if(e==="click")return Gr(t)}function eg(e,t){if(e==="input"||e==="change")return Gr(t)}function tg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:tg;function Ki(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var n=a[i];if(!ol.call(t,n)||!Oe(e[n],t[n]))return!1}return!0}function Gc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jc(e,t){var a=Gc(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Gc(a)}}function Sd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _d(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=pr(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=pr(e.document)}return t}function rs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ag=yt&&"documentMode"in document&&11>=document.documentMode,Na=null,fl=null,qi=null,hl=!1;function Fc(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hl||Na==null||Na!==pr(i)||(i=Na,"selectionStart"in i&&rs(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),qi&&Ki(qi,i)||(qi=i,i=zr(fl,"onSelect"),0<i.length&&(t=new Nr("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=Na)))}function ia(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Ua={animationend:ia("Animation","AnimationEnd"),animationiteration:ia("Animation","AnimationIteration"),animationstart:ia("Animation","AnimationStart"),transitionrun:ia("Transition","TransitionRun"),transitionstart:ia("Transition","TransitionStart"),transitioncancel:ia("Transition","TransitionCancel"),transitionend:ia("Transition","TransitionEnd")},zo={},Td={};yt&&(Td=document.createElement("div").style,"AnimationEvent"in window||(delete Ua.animationend.animation,delete Ua.animationiteration.animation,delete Ua.animationstart.animation),"TransitionEvent"in window||delete Ua.transitionend.transition);function ya(e){if(zo[e])return zo[e];if(!Ua[e])return e;var t=Ua[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Td)return zo[e]=t[a];return e}var Ed=ya("animationend"),Ad=ya("animationiteration"),Md=ya("animationstart"),ig=ya("transitionrun"),ng=ya("transitionstart"),rg=ya("transitioncancel"),Cd=ya("transitionend"),zd=new Map,gl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gl.push("scrollEnd");function Ze(e,t){zd.set(e,t),ba(t,[e])}var fr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},qe=[],Ga=0,os=0;function jr(){for(var e=Ga,t=os=Ga=0;t<e;){var a=qe[t];qe[t++]=null;var i=qe[t];qe[t++]=null;var n=qe[t];qe[t++]=null;var r=qe[t];if(qe[t++]=null,i!==null&&n!==null){var o=i.pending;o===null?n.next=n:(n.next=o.next,o.next=n),i.pending=n}r!==0&&Rd(a,n,r)}}function Fr(e,t,a,i){qe[Ga++]=e,qe[Ga++]=t,qe[Ga++]=a,qe[Ga++]=i,os|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function ls(e,t,a,i){return Fr(e,t,a,i),hr(e)}function wa(e,t){return Fr(e,null,null,t),hr(e)}function Rd(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var n=!1,r=e.return;r!==null;)r.childLanes|=a,i=r.alternate,i!==null&&(i.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(n=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,n&&t!==null&&(n=31-Le(a),e=r.hiddenUpdates,i=e[n],i===null?e[n]=[t]:i.push(t),t.lane=a|536870912),r):null}function hr(e){if(50<Xi)throw Xi=0,Hl=null,Error(b(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ja={};function og(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,a,i){return new og(e,t,a,i)}function ss(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vt(e,t){var a=e.alternate;return a===null?(a=Me(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ld(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Kn(e,t,a,i,n,r){var o=0;if(i=e,typeof e=="function")ss(e)&&(o=1);else if(typeof e=="string")o=cm(e,a,at.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case al:return e=Me(31,a,t,n),e.elementType=al,e.lanes=r,e;case Da:return ca(a.children,n,r,t);case K0:o=8,n|=24;break;case $o:return e=Me(12,a,t,n|2),e.elementType=$o,e.lanes=r,e;case el:return e=Me(13,a,t,n),e.elementType=el,e.lanes=r,e;case tl:return e=Me(19,a,t,n),e.elementType=tl,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ht:o=10;break e;case J0:o=9;break e;case Il:o=11;break e;case Zl:o=14;break e;case zt:o=16,i=null;break e}o=29,a=Error(b(130,e===null?"null":typeof e,"")),i=null}return t=Me(o,a,t,n),t.elementType=e,t.type=i,t.lanes=r,t}function ca(e,t,a,i){return e=Me(7,e,i,t),e.lanes=a,e}function Ro(e,t,a){return e=Me(6,e,null,t),e.lanes=a,e}function Dd(e){var t=Me(18,null,null,0);return t.stateNode=e,t}function Lo(e,t,a){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Yc=new WeakMap;function Fe(e,t){if(typeof e=="object"&&e!==null){var a=Yc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:_c(t)},Yc.set(e,t),t)}return{value:e,source:t,stack:_c(t)}}var Fa=[],Ya=0,gr=null,Ji=0,Ue=[],Ge=0,Qt=null,$e=1,et="";function pt(e,t){Fa[Ya++]=Ji,Fa[Ya++]=gr,gr=e,Ji=t}function Od(e,t,a){Ue[Ge++]=$e,Ue[Ge++]=et,Ue[Ge++]=Qt,Qt=e;var i=$e;e=et;var n=32-Le(i)-1;i&=~(1<<n),a+=1;var r=32-Le(t)+n;if(30<r){var o=n-n%5;r=(i&(1<<o)-1).toString(32),i>>=o,n-=o,$e=1<<32-Le(t)+n|a<<n|i,et=r+e}else $e=1<<r|a<<n|i,et=e}function cs(e){e.return!==null&&(pt(e,1),Od(e,1,0))}function ds(e){for(;e===gr;)gr=Fa[--Ya],Fa[Ya]=null,Ji=Fa[--Ya],Fa[Ya]=null;for(;e===Qt;)Qt=Ue[--Ge],Ue[Ge]=null,et=Ue[--Ge],Ue[Ge]=null,$e=Ue[--Ge],Ue[Ge]=null}function Bd(e,t){Ue[Ge++]=$e,Ue[Ge++]=et,Ue[Ge++]=Qt,$e=t.id,et=t.overflow,Qt=e}var pe=null,P=null,L=!1,Ft=null,Ye=!1,ml=Error(b(519));function Kt(e){var t=Error(b(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $i(Fe(t,e)),ml}function Vc(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[ue]=e,t[_e]=i,a){case"dialog":C("cancel",t),C("close",t);break;case"iframe":case"object":case"embed":C("load",t);break;case"video":case"audio":for(a=0;a<nn.length;a++)C(nn[a],t);break;case"source":C("error",t);break;case"img":case"image":case"link":C("error",t),C("load",t);break;case"details":C("toggle",t);break;case"input":C("invalid",t),ud(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":C("invalid",t);break;case"textarea":C("invalid",t),fd(t,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||vp(t.textContent,a)?(i.popover!=null&&(C("beforetoggle",t),C("toggle",t)),i.onScroll!=null&&C("scroll",t),i.onScrollEnd!=null&&C("scrollend",t),i.onClick!=null&&(t.onclick=gt),t=!0):t=!1,t||Kt(e,!0)}function Wc(e){for(pe=e.return;pe;)switch(pe.tag){case 5:case 31:case 13:Ye=!1;return;case 27:case 3:Ye=!0;return;default:pe=pe.return}}function Ca(e){if(e!==pe)return!1;if(!L)return Wc(e),L=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||jl(e.type,e.memoizedProps)),a=!a),a&&P&&Kt(e),Wc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));P=D0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));P=D0(e)}else t===27?(t=P,ta(e.type)?(e=Wl,Wl=null,P=e):P=t):P=pe?We(e.stateNode.nextSibling):null;return!0}function fa(){P=pe=null,L=!1}function Do(){var e=Ft;return e!==null&&(ke===null?ke=e:ke.push.apply(ke,e),Ft=null),e}function $i(e){Ft===null?Ft=[e]:Ft.push(e)}var vl=it(null),ka=null,mt=null;function Lt(e,t,a){V(vl,t._currentValue),t._currentValue=a}function bt(e){e._currentValue=vl.current,ce(vl)}function bl(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function xl(e,t,a,i){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var r=n.dependencies;if(r!==null){var o=n.child;r=r.firstContext;e:for(;r!==null;){var l=r;r=n;for(var s=0;s<t.length;s++)if(l.context===t[s]){r.lanes|=a,l=r.alternate,l!==null&&(l.lanes|=a),bl(r.return,a,e),i||(o=null);break e}r=l.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(b(341));o.lanes|=a,r=o.alternate,r!==null&&(r.lanes|=a),bl(o,a,e),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===e){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function ui(e,t,a,i){e=null;for(var n=t,r=!1;n!==null;){if(!r){if((n.flags&524288)!==0)r=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(b(387));if(o=o.memoizedProps,o!==null){var l=n.type;Oe(n.pendingProps.value,o.value)||(e!==null?e.push(l):e=[l])}}else if(n===sr.current){if(o=n.alternate,o===null)throw Error(b(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(on):e=[on])}n=n.return}e!==null&&xl(t,e,a,i),t.flags|=262144}function mr(e){for(e=e.firstContext;e!==null;){if(!Oe(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ha(e){ka=e,mt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function fe(e){return Hd(ka,e)}function qn(e,t){return ka===null&&ha(e),Hd(e,t)}function Hd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},mt===null){if(e===null)throw Error(b(308));mt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else mt=mt.next=t;return a}var lg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},sg=oe.unstable_scheduleCallback,cg=oe.unstable_NormalPriority,ie={$$typeof:ht,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function us(){return{controller:new lg,data:new Map,refCount:0}}function gn(e){e.refCount--,e.refCount===0&&sg(cg,function(){e.controller.abort()})}var Ni=null,yl=0,ti=0,Ia=null;function dg(e,t){if(Ni===null){var a=Ni=[];yl=0,ti=Hs(),Ia={status:"pending",value:void 0,then:function(i){a.push(i)}}}return yl++,t.then(Xc,Xc),t}function Xc(){if(--yl===0&&Ni!==null){Ia!==null&&(Ia.status="fulfilled");var e=Ni;Ni=null,ti=0,Ia=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ug(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(i.status="rejected",i.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),i}var Pc=S.S;S.S=function(e,t){Qu=ze(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&dg(e,t),Pc!==null&&Pc(e,t)};var da=it(null);function ps(){var e=da.current;return e!==null?e:F.pooledCache}function Jn(e,t){t===null?V(da,da.current):V(da,t.pool)}function qd(){var e=ps();return e===null?null:{parent:ie._currentValue,pool:e}}var pi=Error(b(460)),fs=Error(b(474)),Yr=Error(b(542)),vr={then:function(){}};function Ic(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Nd(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(gt,gt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Qc(e),e;default:if(typeof t.status=="string")t.then(gt,gt);else{if(e=F,e!==null&&100<e.shellSuspendCounter)throw Error(b(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=i}},function(i){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Qc(e),e}throw ua=t,pi}}function oa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ua=a,pi):a}}var ua=null;function Zc(){if(ua===null)throw Error(b(459));var e=ua;return ua=null,e}function Qc(e){if(e===pi||e===Yr)throw Error(b(483))}var Za=null,en=0;function Nn(e){var t=en;return en+=1,Za===null&&(Za=[]),Nd(Za,e,t)}function Ti(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Un(e,t){throw t.$$typeof===Kf?Error(b(525)):(e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ud(e){function t(d,c){if(e){var u=d.deletions;u===null?(d.deletions=[c],d.flags|=16):u.push(c)}}function a(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function i(d){for(var c=new Map;d!==null;)d.key!==null?c.set(d.key,d):c.set(d.index,d),d=d.sibling;return c}function n(d,c){return d=vt(d,c),d.index=0,d.sibling=null,d}function r(d,c,u){return d.index=u,e?(u=d.alternate,u!==null?(u=u.index,u<c?(d.flags|=67108866,c):u):(d.flags|=67108866,c)):(d.flags|=1048576,c)}function o(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function l(d,c,u,m){return c===null||c.tag!==6?(c=Ro(u,d.mode,m),c.return=d,c):(c=n(c,u),c.return=d,c)}function s(d,c,u,m){var w=u.type;return w===Da?g(d,c,u.props.children,m,u.key):c!==null&&(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===zt&&oa(w)===c.type)?(c=n(c,u.props),Ti(c,u),c.return=d,c):(c=Kn(u.type,u.key,u.props,null,d.mode,m),Ti(c,u),c.return=d,c)}function p(d,c,u,m){return c===null||c.tag!==4||c.stateNode.containerInfo!==u.containerInfo||c.stateNode.implementation!==u.implementation?(c=Lo(u,d.mode,m),c.return=d,c):(c=n(c,u.children||[]),c.return=d,c)}function g(d,c,u,m,w){return c===null||c.tag!==7?(c=ca(u,d.mode,m,w),c.return=d,c):(c=n(c,u),c.return=d,c)}function v(d,c,u){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=Ro(""+c,d.mode,u),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Cn:return u=Kn(c.type,c.key,c.props,null,d.mode,u),Ti(u,c),u.return=d,u;case zi:return c=Lo(c,d.mode,u),c.return=d,c;case zt:return c=oa(c),v(d,c,u)}if(Ri(c)||Si(c))return c=ca(c,d.mode,u,null),c.return=d,c;if(typeof c.then=="function")return v(d,Nn(c),u);if(c.$$typeof===ht)return v(d,qn(d,c),u);Un(d,c)}return null}function f(d,c,u,m){var w=c!==null?c.key:null;if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return w!==null?null:l(d,c,""+u,m);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Cn:return u.key===w?s(d,c,u,m):null;case zi:return u.key===w?p(d,c,u,m):null;case zt:return u=oa(u),f(d,c,u,m)}if(Ri(u)||Si(u))return w!==null?null:g(d,c,u,m,null);if(typeof u.then=="function")return f(d,c,Nn(u),m);if(u.$$typeof===ht)return f(d,c,qn(d,u),m);Un(d,u)}return null}function h(d,c,u,m,w){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return d=d.get(u)||null,l(c,d,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Cn:return d=d.get(m.key===null?u:m.key)||null,s(c,d,m,w);case zi:return d=d.get(m.key===null?u:m.key)||null,p(c,d,m,w);case zt:return m=oa(m),h(d,c,u,m,w)}if(Ri(m)||Si(m))return d=d.get(u)||null,g(c,d,m,w,null);if(typeof m.then=="function")return h(d,c,u,Nn(m),w);if(m.$$typeof===ht)return h(d,c,u,qn(c,m),w);Un(c,m)}return null}function y(d,c,u,m){for(var w=null,A=null,x=c,_=c=0,M=null;x!==null&&_<u.length;_++){x.index>_?(M=x,x=null):M=x.sibling;var O=f(d,x,u[_],m);if(O===null){x===null&&(x=M);break}e&&x&&O.alternate===null&&t(d,x),c=r(O,c,_),A===null?w=O:A.sibling=O,A=O,x=M}if(_===u.length)return a(d,x),L&&pt(d,_),w;if(x===null){for(;_<u.length;_++)x=v(d,u[_],m),x!==null&&(c=r(x,c,_),A===null?w=x:A.sibling=x,A=x);return L&&pt(d,_),w}for(x=i(x);_<u.length;_++)M=h(x,d,_,u[_],m),M!==null&&(e&&M.alternate!==null&&x.delete(M.key===null?_:M.key),c=r(M,c,_),A===null?w=M:A.sibling=M,A=M);return e&&x.forEach(function(At){return t(d,At)}),L&&pt(d,_),w}function k(d,c,u,m){if(u==null)throw Error(b(151));for(var w=null,A=null,x=c,_=c=0,M=null,O=u.next();x!==null&&!O.done;_++,O=u.next()){x.index>_?(M=x,x=null):M=x.sibling;var At=f(d,x,O.value,m);if(At===null){x===null&&(x=M);break}e&&x&&At.alternate===null&&t(d,x),c=r(At,c,_),A===null?w=At:A.sibling=At,A=At,x=M}if(O.done)return a(d,x),L&&pt(d,_),w;if(x===null){for(;!O.done;_++,O=u.next())O=v(d,O.value,m),O!==null&&(c=r(O,c,_),A===null?w=O:A.sibling=O,A=O);return L&&pt(d,_),w}for(x=i(x);!O.done;_++,O=u.next())O=h(x,d,_,O.value,m),O!==null&&(e&&O.alternate!==null&&x.delete(O.key===null?_:O.key),c=r(O,c,_),A===null?w=O:A.sibling=O,A=O);return e&&x.forEach(function(kf){return t(d,kf)}),L&&pt(d,_),w}function D(d,c,u,m){if(typeof u=="object"&&u!==null&&u.type===Da&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case Cn:e:{for(var w=u.key;c!==null;){if(c.key===w){if(w=u.type,w===Da){if(c.tag===7){a(d,c.sibling),m=n(c,u.props.children),m.return=d,d=m;break e}}else if(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===zt&&oa(w)===c.type){a(d,c.sibling),m=n(c,u.props),Ti(m,u),m.return=d,d=m;break e}a(d,c);break}else t(d,c);c=c.sibling}u.type===Da?(m=ca(u.props.children,d.mode,m,u.key),m.return=d,d=m):(m=Kn(u.type,u.key,u.props,null,d.mode,m),Ti(m,u),m.return=d,d=m)}return o(d);case zi:e:{for(w=u.key;c!==null;){if(c.key===w)if(c.tag===4&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){a(d,c.sibling),m=n(c,u.children||[]),m.return=d,d=m;break e}else{a(d,c);break}else t(d,c);c=c.sibling}m=Lo(u,d.mode,m),m.return=d,d=m}return o(d);case zt:return u=oa(u),D(d,c,u,m)}if(Ri(u))return y(d,c,u,m);if(Si(u)){if(w=Si(u),typeof w!="function")throw Error(b(150));return u=w.call(u),k(d,c,u,m)}if(typeof u.then=="function")return D(d,c,Nn(u),m);if(u.$$typeof===ht)return D(d,c,qn(d,u),m);Un(d,u)}return typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint"?(u=""+u,c!==null&&c.tag===6?(a(d,c.sibling),m=n(c,u),m.return=d,d=m):(a(d,c),m=Ro(u,d.mode,m),m.return=d,d=m),o(d)):a(d,c)}return function(d,c,u,m){try{en=0;var w=D(d,c,u,m);return Za=null,w}catch(x){if(x===pi||x===Yr)throw x;var A=Me(29,x,null,d.mode);return A.lanes=m,A.return=d,A}}}var ga=Ud(!0),Gd=Ud(!1),Rt=!1;function hs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Yt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Vt(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(H&2)!==0){var n=i.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),i.pending=t,t=hr(e),Rd(e,null,a),t}return Fr(e,i,t,a),hr(e)}function Ui(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,nd(e,a)}}function Oo(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=o:r=r.next=o,a=a.next}while(a!==null);r===null?n=r=t:r=r.next=t}else n=r=t;a={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var kl=!1;function Gi(){if(kl){var e=Ia;if(e!==null)throw e}}function ji(e,t,a,i){kl=!1;var n=e.updateQueue;Rt=!1;var r=n.firstBaseUpdate,o=n.lastBaseUpdate,l=n.shared.pending;if(l!==null){n.shared.pending=null;var s=l,p=s.next;s.next=null,o===null?r=p:o.next=p,o=s;var g=e.alternate;g!==null&&(g=g.updateQueue,l=g.lastBaseUpdate,l!==o&&(l===null?g.firstBaseUpdate=p:l.next=p,g.lastBaseUpdate=s))}if(r!==null){var v=n.baseState;o=0,g=p=s=null,l=r;do{var f=l.lane&-536870913,h=f!==l.lane;if(h?(R&f)===f:(i&f)===f){f!==0&&f===ti&&(kl=!0),g!==null&&(g=g.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var y=e,k=l;f=t;var D=a;switch(k.tag){case 1:if(y=k.payload,typeof y=="function"){v=y.call(D,v,f);break e}v=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=k.payload,f=typeof y=="function"?y.call(D,v,f):y,f==null)break e;v=I({},v,f);break e;case 2:Rt=!0}}f=l.callback,f!==null&&(e.flags|=64,h&&(e.flags|=8192),h=n.callbacks,h===null?n.callbacks=[f]:h.push(f))}else h={lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},g===null?(p=g=h,s=v):g=g.next=h,o|=f;if(l=l.next,l===null){if(l=n.shared.pending,l===null)break;h=l,l=h.next,h.next=null,n.lastBaseUpdate=h,n.shared.pending=null}}while(!0);g===null&&(s=v),n.baseState=s,n.firstBaseUpdate=p,n.lastBaseUpdate=g,r===null&&(n.shared.lanes=0),$t|=o,e.lanes=o,e.memoizedState=v}}function jd(e,t){if(typeof e!="function")throw Error(b(191,e));e.call(t)}function Fd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)jd(a[e],t)}var ai=it(null),br=it(0);function Kc(e,t){e=_t,V(br,e),V(ai,t),_t=e|t.baseLanes}function Sl(){V(br,_t),V(ai,ai.current)}function gs(){_t=br.current,ce(ai),ce(br)}var Be=it(null),Ve=null;function Dt(e){var t=e.alternate;V($,$.current&1),V(Be,e),Ve===null&&(t===null||ai.current!==null||t.memoizedState!==null)&&(Ve=e)}function _l(e){V($,$.current),V(Be,e),Ve===null&&(Ve=e)}function Yd(e){e.tag===22?(V($,$.current),V(Be,e),Ve===null&&(Ve=e)):Ot(e)}function Ot(){V($,$.current),V(Be,Be.current)}function Ae(e){ce(Be),Ve===e&&(Ve=null),ce($)}var $=it(0);function xr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Yl(a)||Vl(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wt=0,E=null,j=null,te=null,yr=!1,Qa=!1,ma=!1,wr=0,tn=0,Ka=null,pg=0;function K(){throw Error(b(321))}function ms(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Oe(e[a],t[a]))return!1;return!0}function vs(e,t,a,i,n,r){return wt=r,E=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,S.H=e===null||e.memoizedState===null?yu:Ms,ma=!1,r=a(i,n),ma=!1,Qa&&(r=Wd(t,a,i,n)),Vd(e),r}function Vd(e){S.H=an;var t=j!==null&&j.next!==null;if(wt=0,te=j=E=null,yr=!1,tn=0,Ka=null,t)throw Error(b(300));e===null||ne||(e=e.dependencies,e!==null&&mr(e)&&(ne=!0))}function Wd(e,t,a,i){E=e;var n=0;do{if(Qa&&(Ka=null),tn=0,Qa=!1,25<=n)throw Error(b(301));if(n+=1,te=j=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}S.H=wu,r=t(a,i)}while(Qa);return r}function fg(){var e=S.H,t=e.useState()[0];return t=typeof t.then=="function"?mn(t):t,e=e.useState()[0],(j!==null?j.memoizedState:null)!==e&&(E.flags|=1024),t}function bs(){var e=wr!==0;return wr=0,e}function xs(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ys(e){if(yr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yr=!1}wt=0,te=j=E=null,Qa=!1,tn=wr=0,Ka=null}function be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?E.memoizedState=te=e:te=te.next=e,te}function ee(){if(j===null){var e=E.alternate;e=e!==null?e.memoizedState:null}else e=j.next;var t=te===null?E.memoizedState:te.next;if(t!==null)te=t,j=e;else{if(e===null)throw E.alternate===null?Error(b(467)):Error(b(310));j=e,e={memoizedState:j.memoizedState,baseState:j.baseState,baseQueue:j.baseQueue,queue:j.queue,next:null},te===null?E.memoizedState=te=e:te=te.next=e}return te}function Vr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mn(e){var t=tn;return tn+=1,Ka===null&&(Ka=[]),e=Nd(Ka,e,t),t=E,(te===null?t.memoizedState:te.next)===null&&(t=t.alternate,S.H=t===null||t.memoizedState===null?yu:Ms),e}function Wr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return mn(e);if(e.$$typeof===ht)return fe(e)}throw Error(b(438,String(e)))}function ws(e){var t=null,a=E.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=E.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Vr(),E.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=Jf;return t.index++,a}function kt(e,t){return typeof t=="function"?t(e):t}function $n(e){var t=ee();return ks(t,j,e)}function ks(e,t,a){var i=e.queue;if(i===null)throw Error(b(311));i.lastRenderedReducer=a;var n=e.baseQueue,r=i.pending;if(r!==null){if(n!==null){var o=n.next;n.next=r.next,r.next=o}t.baseQueue=n=r,i.pending=null}if(r=e.baseState,n===null)e.memoizedState=r;else{t=n.next;var l=o=null,s=null,p=t,g=!1;do{var v=p.lane&-536870913;if(v!==p.lane?(R&v)===v:(wt&v)===v){var f=p.revertLane;if(f===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),v===ti&&(g=!0);else if((wt&f)===f){p=p.next,f===ti&&(g=!0);continue}else v={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},s===null?(l=s=v,o=r):s=s.next=v,E.lanes|=f,$t|=f;v=p.action,ma&&a(r,v),r=p.hasEagerState?p.eagerState:a(r,v)}else f={lane:v,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},s===null?(l=s=f,o=r):s=s.next=f,E.lanes|=v,$t|=v;p=p.next}while(p!==null&&p!==t);if(s===null?o=r:s.next=l,!Oe(r,e.memoizedState)&&(ne=!0,g&&(a=Ia,a!==null)))throw a;e.memoizedState=r,e.baseState=o,e.baseQueue=s,i.lastRenderedState=r}return n===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Bo(e){var t=ee(),a=t.queue;if(a===null)throw Error(b(311));a.lastRenderedReducer=e;var i=a.dispatch,n=a.pending,r=t.memoizedState;if(n!==null){a.pending=null;var o=n=n.next;do r=e(r,o.action),o=o.next;while(o!==n);Oe(r,t.memoizedState)||(ne=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,i]}function Xd(e,t,a){var i=E,n=ee(),r=L;if(r){if(a===void 0)throw Error(b(407));a=a()}else a=t();var o=!Oe((j||n).memoizedState,a);if(o&&(n.memoizedState=a,ne=!0),n=n.queue,Ss(Zd.bind(null,i,n,e),[e]),n.getSnapshot!==t||o||te!==null&&te.memoizedState.tag&1){if(i.flags|=2048,ii(9,{destroy:void 0},Id.bind(null,i,n,a,t),null),F===null)throw Error(b(349));r||(wt&127)!==0||Pd(i,t,a)}return a}function Pd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=E.updateQueue,t===null?(t=Vr(),E.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Id(e,t,a,i){t.value=a,t.getSnapshot=i,Qd(t)&&Kd(e)}function Zd(e,t,a){return a(function(){Qd(t)&&Kd(e)})}function Qd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Oe(e,a)}catch{return!0}}function Kd(e){var t=wa(e,2);t!==null&&Se(t,e,2)}function Tl(e){var t=be();if(typeof e=="function"){var a=e;if(e=a(),ma){Ht(!0);try{a()}finally{Ht(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:e},t}function Jd(e,t,a,i){return e.baseState=a,ks(e,j,typeof i=="function"?i:kt)}function hg(e,t,a,i,n){if(Pr(e))throw Error(b(485));if(e=t.action,e!==null){var r={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};S.T!==null?a(!0):r.isTransition=!1,i(r),a=t.pending,a===null?(r.next=t.pending=r,$d(t,r)):(r.next=a.next,t.pending=a.next=r)}}function $d(e,t){var a=t.action,i=t.payload,n=e.state;if(t.isTransition){var r=S.T,o={};S.T=o;try{var l=a(n,i),s=S.S;s!==null&&s(o,l),Jc(e,t,l)}catch(p){El(e,t,p)}finally{r!==null&&o.types!==null&&(r.types=o.types),S.T=r}}else try{r=a(n,i),Jc(e,t,r)}catch(p){El(e,t,p)}}function Jc(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){$c(e,t,i)},function(i){return El(e,t,i)}):$c(e,t,a)}function $c(e,t,a){t.status="fulfilled",t.value=a,eu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,$d(e,a)))}function El(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,eu(t),t=t.next;while(t!==i)}e.action=null}function eu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function tu(e,t){return t}function e0(e,t){if(L){var a=F.formState;if(a!==null){e:{var i=E;if(L){if(P){t:{for(var n=P,r=Ye;n.nodeType!==8;){if(!r){n=null;break t}if(n=We(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){P=We(n.nextSibling),i=n.data==="F!";break e}}Kt(i)}i=!1}i&&(t=a[0])}}return a=be(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tu,lastRenderedState:t},a.queue=i,a=vu.bind(null,E,i),i.dispatch=a,i=Tl(!1),r=As.bind(null,E,!1,i.queue),i=be(),n={state:t,dispatch:null,action:e,pending:null},i.queue=n,a=hg.bind(null,E,n,r,a),n.dispatch=a,i.memoizedState=e,[t,a,!1]}function t0(e){var t=ee();return au(t,j,e)}function au(e,t,a){if(t=ks(e,t,tu)[0],e=$n(kt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=mn(t)}catch(o){throw o===pi?Yr:o}else i=t;t=ee();var n=t.queue,r=n.dispatch;return a!==t.memoizedState&&(E.flags|=2048,ii(9,{destroy:void 0},gg.bind(null,n,a),null)),[i,r,e]}function gg(e,t){e.action=t}function a0(e){var t=ee(),a=j;if(a!==null)return au(t,a,e);ee(),t=t.memoizedState,a=ee();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function ii(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=E.updateQueue,t===null&&(t=Vr(),E.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function iu(){return ee().memoizedState}function er(e,t,a,i){var n=be();E.flags|=e,n.memoizedState=ii(1|t,{destroy:void 0},a,i===void 0?null:i)}function Xr(e,t,a,i){var n=ee();i=i===void 0?null:i;var r=n.memoizedState.inst;j!==null&&i!==null&&ms(i,j.memoizedState.deps)?n.memoizedState=ii(t,r,a,i):(E.flags|=e,n.memoizedState=ii(1|t,r,a,i))}function i0(e,t){er(8390656,8,e,t)}function Ss(e,t){Xr(2048,8,e,t)}function mg(e){E.flags|=4;var t=E.updateQueue;if(t===null)t=Vr(),E.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function nu(e){var t=ee().memoizedState;return mg({ref:t,nextImpl:e}),function(){if((H&2)!==0)throw Error(b(440));return t.impl.apply(void 0,arguments)}}function ru(e,t){return Xr(4,2,e,t)}function ou(e,t){return Xr(4,4,e,t)}function lu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function su(e,t,a){a=a!=null?a.concat([e]):null,Xr(4,4,lu.bind(null,t,e),a)}function _s(){}function cu(e,t){var a=ee();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&ms(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function du(e,t){var a=ee();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&ms(t,i[1]))return i[0];if(i=e(),ma){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[i,t],i}function Ts(e,t,a){return a===void 0||(wt&1073741824)!==0&&(R&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Ju(),E.lanes|=e,$t|=e,a)}function uu(e,t,a,i){return Oe(a,t)?a:ai.current!==null?(e=Ts(e,a,i),Oe(e,t)||(ne=!0),e):(wt&42)===0||(wt&1073741824)!==0&&(R&261930)===0?(ne=!0,e.memoizedState=a):(e=Ju(),E.lanes|=e,$t|=e,t)}function pu(e,t,a,i,n){var r=q.p;q.p=r!==0&&8>r?r:8;var o=S.T,l={};S.T=l,As(e,!1,t,a);try{var s=n(),p=S.S;if(p!==null&&p(l,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var g=ug(s,i);Fi(e,t,g,De(e))}else Fi(e,t,i,De(e))}catch(v){Fi(e,t,{then:function(){},status:"rejected",reason:v},De())}finally{q.p=r,o!==null&&l.types!==null&&(o.types=l.types),S.T=o}}function vg(){}function Al(e,t,a,i){if(e.tag!==5)throw Error(b(476));var n=fu(e).queue;pu(e,n,t,sa,a===null?vg:function(){return hu(e),a(i)})}function fu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:sa,baseState:sa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:sa},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function hu(e){var t=fu(e);t.next===null&&(t=e.alternate.memoizedState),Fi(e,t.next.queue,{},De())}function Es(){return fe(on)}function gu(){return ee().memoizedState}function mu(){return ee().memoizedState}function bg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=De();e=Yt(a);var i=Vt(t,e,a);i!==null&&(Se(i,t,a),Ui(i,t,a)),t={cache:us()},e.payload=t;return}t=t.return}}function xg(e,t,a){var i=De();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Pr(e)?bu(t,a):(a=ls(e,t,a,i),a!==null&&(Se(a,e,i),xu(a,t,i)))}function vu(e,t,a){var i=De();Fi(e,t,a,i)}function Fi(e,t,a,i){var n={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pr(e))bu(t,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,l=r(o,a);if(n.hasEagerState=!0,n.eagerState=l,Oe(l,o))return Fr(e,t,n,0),F===null&&jr(),!1}catch{}if(a=ls(e,t,n,i),a!==null)return Se(a,e,i),xu(a,t,i),!0}return!1}function As(e,t,a,i){if(i={lane:2,revertLane:Hs(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Pr(e)){if(t)throw Error(b(479))}else t=ls(e,a,i,2),t!==null&&Se(t,e,2)}function Pr(e){var t=e.alternate;return e===E||t!==null&&t===E}function bu(e,t){Qa=yr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function xu(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,nd(e,a)}}var an={readContext:fe,use:Wr,useCallback:K,useContext:K,useEffect:K,useImperativeHandle:K,useLayoutEffect:K,useInsertionEffect:K,useMemo:K,useReducer:K,useRef:K,useState:K,useDebugValue:K,useDeferredValue:K,useTransition:K,useSyncExternalStore:K,useId:K,useHostTransitionStatus:K,useFormState:K,useActionState:K,useOptimistic:K,useMemoCache:K,useCacheRefresh:K};an.useEffectEvent=K;var yu={readContext:fe,use:Wr,useCallback:function(e,t){return be().memoizedState=[e,t===void 0?null:t],e},useContext:fe,useEffect:i0,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,er(4194308,4,lu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return er(4194308,4,e,t)},useInsertionEffect:function(e,t){er(4,2,e,t)},useMemo:function(e,t){var a=be();t=t===void 0?null:t;var i=e();if(ma){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=be();if(a!==void 0){var n=a(t);if(ma){Ht(!0);try{a(t)}finally{Ht(!1)}}}else n=t;return i.memoizedState=i.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=xg.bind(null,E,e),[i.memoizedState,e]},useRef:function(e){var t=be();return e={current:e},t.memoizedState=e},useState:function(e){e=Tl(e);var t=e.queue,a=vu.bind(null,E,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:_s,useDeferredValue:function(e,t){var a=be();return Ts(a,e,t)},useTransition:function(){var e=Tl(!1);return e=pu.bind(null,E,e.queue,!0,!1),be().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=E,n=be();if(L){if(a===void 0)throw Error(b(407));a=a()}else{if(a=t(),F===null)throw Error(b(349));(R&127)!==0||Pd(i,t,a)}n.memoizedState=a;var r={value:a,getSnapshot:t};return n.queue=r,i0(Zd.bind(null,i,r,e),[e]),i.flags|=2048,ii(9,{destroy:void 0},Id.bind(null,i,r,a,t),null),a},useId:function(){var e=be(),t=F.identifierPrefix;if(L){var a=et,i=$e;a=(i&~(1<<32-Le(i)-1)).toString(32)+a,t="_"+t+"R_"+a,a=wr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=pg++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Es,useFormState:e0,useActionState:e0,useOptimistic:function(e){var t=be();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=As.bind(null,E,!0,a),a.dispatch=t,[e,t]},useMemoCache:ws,useCacheRefresh:function(){return be().memoizedState=bg.bind(null,E)},useEffectEvent:function(e){var t=be(),a={impl:e};return t.memoizedState=a,function(){if((H&2)!==0)throw Error(b(440));return a.impl.apply(void 0,arguments)}}},Ms={readContext:fe,use:Wr,useCallback:cu,useContext:fe,useEffect:Ss,useImperativeHandle:su,useInsertionEffect:ru,useLayoutEffect:ou,useMemo:du,useReducer:$n,useRef:iu,useState:function(){return $n(kt)},useDebugValue:_s,useDeferredValue:function(e,t){var a=ee();return uu(a,j.memoizedState,e,t)},useTransition:function(){var e=$n(kt)[0],t=ee().memoizedState;return[typeof e=="boolean"?e:mn(e),t]},useSyncExternalStore:Xd,useId:gu,useHostTransitionStatus:Es,useFormState:t0,useActionState:t0,useOptimistic:function(e,t){var a=ee();return Jd(a,j,e,t)},useMemoCache:ws,useCacheRefresh:mu};Ms.useEffectEvent=nu;var wu={readContext:fe,use:Wr,useCallback:cu,useContext:fe,useEffect:Ss,useImperativeHandle:su,useInsertionEffect:ru,useLayoutEffect:ou,useMemo:du,useReducer:Bo,useRef:iu,useState:function(){return Bo(kt)},useDebugValue:_s,useDeferredValue:function(e,t){var a=ee();return j===null?Ts(a,e,t):uu(a,j.memoizedState,e,t)},useTransition:function(){var e=Bo(kt)[0],t=ee().memoizedState;return[typeof e=="boolean"?e:mn(e),t]},useSyncExternalStore:Xd,useId:gu,useHostTransitionStatus:Es,useFormState:a0,useActionState:a0,useOptimistic:function(e,t){var a=ee();return j!==null?Jd(a,j,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ws,useCacheRefresh:mu};wu.useEffectEvent=nu;function Ho(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:I({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ml={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=De(),n=Yt(i);n.payload=t,a!=null&&(n.callback=a),t=Vt(e,n,i),t!==null&&(Se(t,e,i),Ui(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=De(),n=Yt(i);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Vt(e,n,i),t!==null&&(Se(t,e,i),Ui(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=De(),i=Yt(a);i.tag=2,t!=null&&(i.callback=t),t=Vt(e,i,a),t!==null&&(Se(t,e,a),Ui(t,e,a))}};function n0(e,t,a,i,n,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,o):t.prototype&&t.prototype.isPureReactComponent?!Ki(a,i)||!Ki(n,r):!0}function r0(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&Ml.enqueueReplaceState(t,t.state,null)}function va(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=I({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function ku(e){fr(e)}function Su(e){console.error(e)}function _u(e){fr(e)}function kr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function o0(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Cl(e,t,a){return a=Yt(a),a.tag=3,a.payload={element:null},a.callback=function(){kr(e,t)},a}function Tu(e){return e=Yt(e),e.tag=3,e}function Eu(e,t,a,i){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=i.value;e.payload=function(){return n(r)},e.callback=function(){o0(t,a,i)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){o0(t,a,i),typeof n!="function"&&(Wt===null?Wt=new Set([this]):Wt.add(this));var l=i.stack;this.componentDidCatch(i.value,{componentStack:l!==null?l:""})})}function yg(e,t,a,i,n){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&ui(t,a,n,!0),a=Be.current,a!==null){switch(a.tag){case 31:case 13:return Ve===null?Ar():a.alternate===null&&J===0&&(J=3),a.flags&=-257,a.flags|=65536,a.lanes=n,i===vr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),Po(e,i,n)),!1;case 22:return a.flags|=65536,i===vr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),Po(e,i,n)),!1}throw Error(b(435,a.tag))}return Po(e,i,n),Ar(),!1}if(L)return t=Be.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,i!==ml&&(e=Error(b(422),{cause:i}),$i(Fe(e,a)))):(i!==ml&&(t=Error(b(423),{cause:i}),$i(Fe(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,i=Fe(i,a),n=Cl(e.stateNode,i,n),Oo(e,n),J!==4&&(J=2)),!1;var r=Error(b(520),{cause:i});if(r=Fe(r,a),Wi===null?Wi=[r]:Wi.push(r),J!==4&&(J=2),t===null)return!0;i=Fe(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Cl(a.stateNode,i,e),Oo(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Wt===null||!Wt.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Tu(n),Eu(n,e,a,i),Oo(a,n),!1}a=a.return}while(a!==null);return!1}var Cs=Error(b(461)),ne=!1;function de(e,t,a,i){t.child=e===null?Gd(t,null,a,i):ga(t,e.child,a,i)}function l0(e,t,a,i,n){a=a.render;var r=t.ref;if("ref"in i){var o={};for(var l in i)l!=="ref"&&(o[l]=i[l])}else o=i;return ha(t),i=vs(e,t,a,o,r,n),l=bs(),e!==null&&!ne?(xs(e,t,n),St(e,t,n)):(L&&l&&cs(t),t.flags|=1,de(e,t,i,n),t.child)}function s0(e,t,a,i,n){if(e===null){var r=a.type;return typeof r=="function"&&!ss(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Au(e,t,r,i,n)):(e=Kn(a.type,null,i,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!zs(e,n)){var o=r.memoizedProps;if(a=a.compare,a=a!==null?a:Ki,a(o,i)&&e.ref===t.ref)return St(e,t,n)}return t.flags|=1,e=vt(r,i),e.ref=t.ref,e.return=t,t.child=e}function Au(e,t,a,i,n){if(e!==null){var r=e.memoizedProps;if(Ki(r,i)&&e.ref===t.ref)if(ne=!1,t.pendingProps=i=r,zs(e,n))(e.flags&131072)!==0&&(ne=!0);else return t.lanes=e.lanes,St(e,t,n)}return zl(e,t,a,i,n)}function Mu(e,t,a,i){var n=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(i=t.child=e.child,n=0;i!==null;)n=n|i.lanes|i.childLanes,i=i.sibling;i=n&~r}else i=0,t.child=null;return c0(e,t,r,a,i)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Jn(t,r!==null?r.cachePool:null),r!==null?Kc(t,r):Sl(),Yd(t);else return i=t.lanes=536870912,c0(e,t,r!==null?r.baseLanes|a:a,a,i)}else r!==null?(Jn(t,r.cachePool),Kc(t,r),Ot(t),t.memoizedState=null):(e!==null&&Jn(t,null),Sl(),Ot(t));return de(e,t,n,a),t.child}function Di(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function c0(e,t,a,i,n){var r=ps();return r=r===null?null:{parent:ie._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&Jn(t,null),Sl(),Yd(t),e!==null&&ui(e,t,i,!0),t.childLanes=n,null}function tr(e,t){return t=Sr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function d0(e,t,a){return ga(t,e.child,null,a),e=tr(t,t.pendingProps),e.flags|=2,Ae(t),t.memoizedState=null,e}function wg(e,t,a){var i=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(L){if(i.mode==="hidden")return e=tr(t,i),t.lanes=536870912,Di(null,e);if(_l(t),(e=P)?(e=yp(e,Ye),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Qt!==null?{id:$e,overflow:et}:null,retryLane:536870912,hydrationErrors:null},a=Dd(e),a.return=t,t.child=a,pe=t,P=null)):e=null,e===null)throw Kt(t);return t.lanes=536870912,null}return tr(t,i)}var r=e.memoizedState;if(r!==null){var o=r.dehydrated;if(_l(t),n)if(t.flags&256)t.flags&=-257,t=d0(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(b(558));else if(ne||ui(e,t,a,!1),n=(a&e.childLanes)!==0,ne||n){if(i=F,i!==null&&(o=rd(i,a),o!==0&&o!==r.retryLane))throw r.retryLane=o,wa(e,o),Se(i,e,o),Cs;Ar(),t=d0(e,t,a)}else e=r.treeContext,P=We(o.nextSibling),pe=t,L=!0,Ft=null,Ye=!1,e!==null&&Bd(t,e),t=tr(t,i),t.flags|=4096;return t}return e=vt(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ar(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(b(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function zl(e,t,a,i,n){return ha(t),a=vs(e,t,a,i,void 0,n),i=bs(),e!==null&&!ne?(xs(e,t,n),St(e,t,n)):(L&&i&&cs(t),t.flags|=1,de(e,t,a,n),t.child)}function u0(e,t,a,i,n,r){return ha(t),t.updateQueue=null,a=Wd(t,i,a,n),Vd(e),i=bs(),e!==null&&!ne?(xs(e,t,r),St(e,t,r)):(L&&i&&cs(t),t.flags|=1,de(e,t,a,r),t.child)}function p0(e,t,a,i,n){if(ha(t),t.stateNode===null){var r=ja,o=a.contextType;typeof o=="object"&&o!==null&&(r=fe(o)),r=new a(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ml,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},hs(t),o=a.contextType,r.context=typeof o=="object"&&o!==null?fe(o):ja,r.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Ho(t,a,o,i),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&Ml.enqueueReplaceState(r,r.state,null),ji(t,i,r,n),Gi(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var l=t.memoizedProps,s=va(a,l);r.props=s;var p=r.context,g=a.contextType;o=ja,typeof g=="object"&&g!==null&&(o=fe(g));var v=a.getDerivedStateFromProps;g=typeof v=="function"||typeof r.getSnapshotBeforeUpdate=="function",l=t.pendingProps!==l,g||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l||p!==o)&&r0(t,r,i,o),Rt=!1;var f=t.memoizedState;r.state=f,ji(t,i,r,n),Gi(),p=t.memoizedState,l||f!==p||Rt?(typeof v=="function"&&(Ho(t,a,v,i),p=t.memoizedState),(s=Rt||n0(t,a,s,i,f,p,o))?(g||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=p),r.props=i,r.state=p,r.context=o,i=s):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,wl(e,t),o=t.memoizedProps,g=va(a,o),r.props=g,v=t.pendingProps,f=r.context,p=a.contextType,s=ja,typeof p=="object"&&p!==null&&(s=fe(p)),l=a.getDerivedStateFromProps,(p=typeof l=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==v||f!==s)&&r0(t,r,i,s),Rt=!1,f=t.memoizedState,r.state=f,ji(t,i,r,n),Gi();var h=t.memoizedState;o!==v||f!==h||Rt||e!==null&&e.dependencies!==null&&mr(e.dependencies)?(typeof l=="function"&&(Ho(t,a,l,i),h=t.memoizedState),(g=Rt||n0(t,a,g,i,f,h,s)||e!==null&&e.dependencies!==null&&mr(e.dependencies))?(p||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,h,s),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,h,s)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=h),r.props=i,r.state=h,r.context=s,i=g):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,ar(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=ga(t,e.child,null,n),t.child=ga(t,null,a,n)):de(e,t,a,n),t.memoizedState=r.state,e=t.child):e=St(e,t,n),e}function f0(e,t,a,i){return fa(),t.flags|=256,de(e,t,a,i),t.child}var qo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function No(e){return{baseLanes:e,cachePool:qd()}}function Uo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ce),e}function Cu(e,t,a){var i=t.pendingProps,n=!1,r=(t.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:($.current&2)!==0),o&&(n=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(L){if(n?Dt(t):Ot(t),(e=P)?(e=yp(e,Ye),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Qt!==null?{id:$e,overflow:et}:null,retryLane:536870912,hydrationErrors:null},a=Dd(e),a.return=t,t.child=a,pe=t,P=null)):e=null,e===null)throw Kt(t);return Vl(e)?t.lanes=32:t.lanes=536870912,null}var l=i.children;return i=i.fallback,n?(Ot(t),n=t.mode,l=Sr({mode:"hidden",children:l},n),i=ca(i,n,a,null),l.return=t,i.return=t,l.sibling=i,t.child=l,i=t.child,i.memoizedState=No(a),i.childLanes=Uo(e,o,a),t.memoizedState=qo,Di(null,i)):(Dt(t),Rl(t,l))}var s=e.memoizedState;if(s!==null&&(l=s.dehydrated,l!==null)){if(r)t.flags&256?(Dt(t),t.flags&=-257,t=Go(e,t,a)):t.memoizedState!==null?(Ot(t),t.child=e.child,t.flags|=128,t=null):(Ot(t),l=i.fallback,n=t.mode,i=Sr({mode:"visible",children:i.children},n),l=ca(l,n,a,null),l.flags|=2,i.return=t,l.return=t,i.sibling=l,t.child=i,ga(t,e.child,null,a),i=t.child,i.memoizedState=No(a),i.childLanes=Uo(e,o,a),t.memoizedState=qo,t=Di(null,i));else if(Dt(t),Vl(l)){if(o=l.nextSibling&&l.nextSibling.dataset,o)var p=o.dgst;o=p,i=Error(b(419)),i.stack="",i.digest=o,$i({value:i,source:null,stack:null}),t=Go(e,t,a)}else if(ne||ui(e,t,a,!1),o=(a&e.childLanes)!==0,ne||o){if(o=F,o!==null&&(i=rd(o,a),i!==0&&i!==s.retryLane))throw s.retryLane=i,wa(e,i),Se(o,e,i),Cs;Yl(l)||Ar(),t=Go(e,t,a)}else Yl(l)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,P=We(l.nextSibling),pe=t,L=!0,Ft=null,Ye=!1,e!==null&&Bd(t,e),t=Rl(t,i.children),t.flags|=4096);return t}return n?(Ot(t),l=i.fallback,n=t.mode,s=e.child,p=s.sibling,i=vt(s,{mode:"hidden",children:i.children}),i.subtreeFlags=s.subtreeFlags&65011712,p!==null?l=vt(p,l):(l=ca(l,n,a,null),l.flags|=2),l.return=t,i.return=t,i.sibling=l,t.child=i,Di(null,i),i=t.child,l=e.child.memoizedState,l===null?l=No(a):(n=l.cachePool,n!==null?(s=ie._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=qd(),l={baseLanes:l.baseLanes|a,cachePool:n}),i.memoizedState=l,i.childLanes=Uo(e,o,a),t.memoizedState=qo,Di(e.child,i)):(Dt(t),a=e.child,e=a.sibling,a=vt(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Rl(e,t){return t=Sr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Sr(e,t){return e=Me(22,e,null,t),e.lanes=0,e}function Go(e,t,a){return ga(t,e.child,null,a),e=Rl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function h0(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),bl(e.return,t,a)}function jo(e,t,a,i,n,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:n,treeForkCount:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=a,o.tailMode=n,o.treeForkCount=r)}function zu(e,t,a){var i=t.pendingProps,n=i.revealOrder,r=i.tail;i=i.children;var o=$.current,l=(o&2)!==0;if(l?(o=o&1|2,t.flags|=128):o&=1,V($,o),de(e,t,i,a),i=L?Ji:0,!l&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&h0(e,a,t);else if(e.tag===19)h0(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&xr(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),jo(t,!1,n,a,r,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&xr(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}jo(t,!0,a,null,r,i);break;case"together":jo(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function St(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),$t|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ui(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,a=vt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=vt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function zs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&mr(e)))}function kg(e,t,a){switch(t.tag){case 3:cr(t,t.stateNode.containerInfo),Lt(t,ie,e.memoizedState.cache),fa();break;case 27:case 5:rl(t);break;case 4:cr(t,t.stateNode.containerInfo);break;case 10:Lt(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,_l(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Dt(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Cu(e,t,a):(Dt(t),e=St(e,t,a),e!==null?e.sibling:null);Dt(t);break;case 19:var n=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(ui(e,t,a,!1),i=(a&t.childLanes)!==0),n){if(i)return zu(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),V($,$.current),i)break;return null;case 22:return t.lanes=0,Mu(e,t,a,t.pendingProps);case 24:Lt(t,ie,e.memoizedState.cache)}return St(e,t,a)}function Ru(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)ne=!0;else{if(!zs(e,a)&&(t.flags&128)===0)return ne=!1,kg(e,t,a);ne=(e.flags&131072)!==0}else ne=!1,L&&(t.flags&1048576)!==0&&Od(t,Ji,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=oa(t.elementType),t.type=e,typeof e=="function")ss(e)?(i=va(e,i),t.tag=1,t=p0(null,t,e,i,a)):(t.tag=0,t=zl(null,t,e,i,a));else{if(e!=null){var n=e.$$typeof;if(n===Il){t.tag=11,t=l0(null,t,e,i,a);break e}else if(n===Zl){t.tag=14,t=s0(null,t,e,i,a);break e}}throw t=il(e)||e,Error(b(306,t,""))}}return t;case 0:return zl(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,n=va(i,t.pendingProps),p0(e,t,i,n,a);case 3:e:{if(cr(t,t.stateNode.containerInfo),e===null)throw Error(b(387));i=t.pendingProps;var r=t.memoizedState;n=r.element,wl(e,t),ji(t,i,null,a);var o=t.memoizedState;if(i=o.cache,Lt(t,ie,i),i!==r.cache&&xl(t,[ie],a,!0),Gi(),i=o.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=f0(e,t,i,a);break e}else if(i!==n){n=Fe(Error(b(424)),t),$i(n),t=f0(e,t,i,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,P=We(e.firstChild),pe=t,L=!0,Ft=null,Ye=!0,a=Gd(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(fa(),i===n){t=St(e,t,a);break e}de(e,t,i,a)}t=t.child}return t;case 26:return ar(e,t),e===null?(a=H0(t.type,null,t.pendingProps,null))?t.memoizedState=a:L||(a=t.type,e=t.pendingProps,i=Rr(jt.current).createElement(a),i[ue]=t,i[_e]=e,he(i,a,e),se(i),t.stateNode=i):t.memoizedState=H0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return rl(t),e===null&&L&&(i=t.stateNode=wp(t.type,t.pendingProps,jt.current),pe=t,Ye=!0,n=P,ta(t.type)?(Wl=n,P=We(i.firstChild)):P=n),de(e,t,t.pendingProps.children,a),ar(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&L&&((n=i=P)&&(i=Qg(i,t.type,t.pendingProps,Ye),i!==null?(t.stateNode=i,pe=t,P=We(i.firstChild),Ye=!1,n=!0):n=!1),n||Kt(t)),rl(t),n=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,i=r.children,jl(n,r)?i=null:o!==null&&jl(n,o)&&(t.flags|=32),t.memoizedState!==null&&(n=vs(e,t,fg,null,null,a),on._currentValue=n),ar(e,t),de(e,t,i,a),t.child;case 6:return e===null&&L&&((e=a=P)&&(a=Kg(a,t.pendingProps,Ye),a!==null?(t.stateNode=a,pe=t,P=null,e=!0):e=!1),e||Kt(t)),null;case 13:return Cu(e,t,a);case 4:return cr(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ga(t,null,i,a):de(e,t,i,a),t.child;case 11:return l0(e,t,t.type,t.pendingProps,a);case 7:return de(e,t,t.pendingProps,a),t.child;case 8:return de(e,t,t.pendingProps.children,a),t.child;case 12:return de(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,Lt(t,t.type,i.value),de(e,t,i.children,a),t.child;case 9:return n=t.type._context,i=t.pendingProps.children,ha(t),n=fe(n),i=i(n),t.flags|=1,de(e,t,i,a),t.child;case 14:return s0(e,t,t.type,t.pendingProps,a);case 15:return Au(e,t,t.type,t.pendingProps,a);case 19:return zu(e,t,a);case 31:return wg(e,t,a);case 22:return Mu(e,t,a,t.pendingProps);case 24:return ha(t),i=fe(ie),e===null?(n=ps(),n===null&&(n=F,r=us(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),t.memoizedState={parent:i,cache:n},hs(t),Lt(t,ie,n)):((e.lanes&a)!==0&&(wl(e,t),ji(t,null,null,a),Gi()),n=e.memoizedState,r=t.memoizedState,n.parent!==i?(n={parent:i,cache:i},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Lt(t,ie,i)):(i=r.cache,Lt(t,ie,i),i!==n.cache&&xl(t,[ie],a,!0))),de(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(b(156,t.tag))}function st(e){e.flags|=4}function Fo(e,t,a,i,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(tp())e.flags|=8192;else throw ua=vr,fs}else e.flags&=-16777217}function g0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!_p(t))if(tp())e.flags|=8192;else throw ua=vr,fs}function Gn(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ad():536870912,e.lanes|=t,ni|=t)}function Ei(e,t){if(!L)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function X(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags&65011712,i|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function Sg(e,t,a){var i=t.pendingProps;switch(ds(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return X(t),null;case 1:return X(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),bt(ie),Ja(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ca(t)?st(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Do())),X(t),null;case 26:var n=t.type,r=t.memoizedState;return e===null?(st(t),r!==null?(X(t),g0(t,r)):(X(t),Fo(t,n,null,i,a))):r?r!==e.memoizedState?(st(t),X(t),g0(t,r)):(X(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&st(t),X(t),Fo(t,n,e,i,a)),null;case 27:if(dr(t),a=jt.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&st(t);else{if(!i){if(t.stateNode===null)throw Error(b(166));return X(t),null}e=at.current,Ca(t)?Vc(t,e):(e=wp(n,i,a),t.stateNode=e,st(t))}return X(t),null;case 5:if(dr(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&st(t);else{if(!i){if(t.stateNode===null)throw Error(b(166));return X(t),null}if(r=at.current,Ca(t))Vc(t,r);else{var o=Rr(jt.current);switch(r){case 1:r=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=o.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?o.createElement("select",{is:i.is}):o.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?o.createElement(n,{is:i.is}):o.createElement(n)}}r[ue]=t,r[_e]=i;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)r.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=r;e:switch(he(r,n,i),n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&st(t)}}return X(t),Fo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&st(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(b(166));if(e=jt.current,Ca(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,n=pe,n!==null)switch(n.tag){case 27:case 5:i=n.memoizedProps}e[ue]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||vp(e.nodeValue,a)),e||Kt(t,!0)}else e=Rr(e).createTextNode(i),e[ue]=t,t.stateNode=e}return X(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ca(t),a!==null){if(e===null){if(!i)throw Error(b(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(557));e[ue]=t}else fa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;X(t),e=!1}else a=Do(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Ae(t),t):(Ae(t),null);if((t.flags&128)!==0)throw Error(b(558))}return X(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Ca(t),i!==null&&i.dehydrated!==null){if(e===null){if(!n)throw Error(b(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(b(317));n[ue]=t}else fa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;X(t),n=!1}else n=Do(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Ae(t),t):(Ae(t),null)}return Ae(t),(t.flags&128)!==0?(t.lanes=a,t):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=t.child,n=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(n=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==n&&(i.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Gn(t,t.updateQueue),X(t),null);case 4:return Ja(),e===null&&qs(t.stateNode.containerInfo),X(t),null;case 10:return bt(t.type),X(t),null;case 19:if(ce($),i=t.memoizedState,i===null)return X(t),null;if(n=(t.flags&128)!==0,r=i.rendering,r===null)if(n)Ei(i,!1);else{if(J!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=xr(e),r!==null){for(t.flags|=128,Ei(i,!1),e=r.updateQueue,t.updateQueue=e,Gn(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Ld(a,e),a=a.sibling;return V($,$.current&1|2),L&&pt(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&ze()>Tr&&(t.flags|=128,n=!0,Ei(i,!1),t.lanes=4194304)}else{if(!n)if(e=xr(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Gn(t,e),Ei(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!L)return X(t),null}else 2*ze()-i.renderingStartTime>Tr&&a!==536870912&&(t.flags|=128,n=!0,Ei(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ze(),e.sibling=null,a=$.current,V($,n?a&1|2:a&1),L&&pt(t,i.treeForkCount),e):(X(t),null);case 22:case 23:return Ae(t),gs(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(X(t),t.subtreeFlags&6&&(t.flags|=8192)):X(t),a=t.updateQueue,a!==null&&Gn(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&ce(da),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),bt(ie),X(t),null;case 25:return null;case 30:return null}throw Error(b(156,t.tag))}function _g(e,t){switch(ds(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bt(ie),Ja(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return dr(t),null;case 31:if(t.memoizedState!==null){if(Ae(t),t.alternate===null)throw Error(b(340));fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ae(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce($),null;case 4:return Ja(),null;case 10:return bt(t.type),null;case 22:case 23:return Ae(t),gs(),e!==null&&ce(da),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return bt(ie),null;case 25:return null;default:return null}}function Lu(e,t){switch(ds(t),t.tag){case 3:bt(ie),Ja();break;case 26:case 27:case 5:dr(t);break;case 4:Ja();break;case 31:t.memoizedState!==null&&Ae(t);break;case 13:Ae(t);break;case 19:ce($);break;case 10:bt(t.type);break;case 22:case 23:Ae(t),gs(),e!==null&&ce(da);break;case 24:bt(ie)}}function vn(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var n=i.next;a=n;do{if((a.tag&e)===e){i=void 0;var r=a.create,o=a.inst;i=r(),o.destroy=i}a=a.next}while(a!==n)}}catch(l){U(t,t.return,l)}}function Jt(e,t,a){try{var i=t.updateQueue,n=i!==null?i.lastEffect:null;if(n!==null){var r=n.next;i=r;do{if((i.tag&e)===e){var o=i.inst,l=o.destroy;if(l!==void 0){o.destroy=void 0,n=t;var s=a,p=l;try{p()}catch(g){U(n,s,g)}}}i=i.next}while(i!==r)}}catch(g){U(t,t.return,g)}}function Du(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Fd(t,a)}catch(i){U(e,e.return,i)}}}function Ou(e,t,a){a.props=va(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){U(e,t,i)}}function Yi(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(n){U(e,t,n)}}function tt(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(n){U(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){U(e,t,n)}else a.current=null}function Bu(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(n){U(e,e.return,n)}}function Yo(e,t,a){try{var i=e.stateNode;Vg(i,e.type,a,t),i[_e]=t}catch(n){U(e,e.return,n)}}function Hu(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ta(e.type)||e.tag===4}function Vo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ta(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ll(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=gt));else if(i!==4&&(i===27&&ta(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Ll(e,t,a),e=e.sibling;e!==null;)Ll(e,t,a),e=e.sibling}function _r(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&ta(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(_r(e,t,a),e=e.sibling;e!==null;)_r(e,t,a),e=e.sibling}function qu(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);he(t,i,a),t[ue]=e,t[_e]=a}catch(r){U(e,e.return,r)}}var ft=!1,ae=!1,Wo=!1,m0=typeof WeakSet=="function"?WeakSet:Set,le=null;function Tg(e,t){if(e=e.containerInfo,Ul=Br,e=_d(e),rs(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var n=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var o=0,l=-1,s=-1,p=0,g=0,v=e,f=null;t:for(;;){for(var h;v!==a||n!==0&&v.nodeType!==3||(l=o+n),v!==r||i!==0&&v.nodeType!==3||(s=o+i),v.nodeType===3&&(o+=v.nodeValue.length),(h=v.firstChild)!==null;)f=v,v=h;for(;;){if(v===e)break t;if(f===a&&++p===n&&(l=o),f===r&&++g===i&&(s=o),(h=v.nextSibling)!==null)break;v=f,f=v.parentNode}v=h}a=l===-1||s===-1?null:{start:l,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gl={focusedElem:e,selectionRange:a},Br=!1,le=t;le!==null;)if(t=le,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,le=e;else for(;le!==null;){switch(t=le,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,n=r.memoizedProps,r=r.memoizedState,i=a.stateNode;try{var y=va(a.type,n);e=i.getSnapshotBeforeUpdate(y,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(k){U(a,a.return,k)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Fl(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Fl(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(b(163))}if(e=t.sibling,e!==null){e.return=t.return,le=e;break}le=t.return}}function Nu(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:dt(e,a),i&4&&vn(5,a);break;case 1:if(dt(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){U(a,a.return,o)}else{var n=va(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){U(a,a.return,o)}}i&64&&Du(a),i&512&&Yi(a,a.return);break;case 3:if(dt(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Fd(e,t)}catch(o){U(a,a.return,o)}}break;case 27:t===null&&i&4&&qu(a);case 26:case 5:dt(e,a),t===null&&i&4&&Bu(a),i&512&&Yi(a,a.return);break;case 12:dt(e,a);break;case 31:dt(e,a),i&4&&ju(e,a);break;case 13:dt(e,a),i&4&&Fu(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Og.bind(null,a),Jg(e,a))));break;case 22:if(i=a.memoizedState!==null||ft,!i){t=t!==null&&t.memoizedState!==null||ae,n=ft;var r=ae;ft=i,(ae=t)&&!r?ut(e,a,(a.subtreeFlags&8772)!==0):dt(e,a),ft=n,ae=r}break;case 30:break;default:dt(e,a)}}function Uu(e){var t=e.alternate;t!==null&&(e.alternate=null,Uu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&$l(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Q=null,we=!1;function ct(e,t,a){for(a=a.child;a!==null;)Gu(e,t,a),a=a.sibling}function Gu(e,t,a){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(dn,a)}catch{}switch(a.tag){case 26:ae||tt(a,t),ct(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ae||tt(a,t);var i=Q,n=we;ta(a.type)&&(Q=a.stateNode,we=!1),ct(e,t,a),Pi(a.stateNode),Q=i,we=n;break;case 5:ae||tt(a,t);case 6:if(i=Q,n=we,Q=null,ct(e,t,a),Q=i,we=n,Q!==null)if(we)try{(Q.nodeType===9?Q.body:Q.nodeName==="HTML"?Q.ownerDocument.body:Q).removeChild(a.stateNode)}catch(r){U(a,t,r)}else try{Q.removeChild(a.stateNode)}catch(r){U(a,t,r)}break;case 18:Q!==null&&(we?(e=Q,R0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),si(e)):R0(Q,a.stateNode));break;case 4:i=Q,n=we,Q=a.stateNode.containerInfo,we=!0,ct(e,t,a),Q=i,we=n;break;case 0:case 11:case 14:case 15:Jt(2,a,t),ae||Jt(4,a,t),ct(e,t,a);break;case 1:ae||(tt(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Ou(a,t,i)),ct(e,t,a);break;case 21:ct(e,t,a);break;case 22:ae=(i=ae)||a.memoizedState!==null,ct(e,t,a),ae=i;break;default:ct(e,t,a)}}function ju(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{si(e)}catch(a){U(t,t.return,a)}}}function Fu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{si(e)}catch(a){U(t,t.return,a)}}function Eg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new m0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new m0),t;default:throw Error(b(435,e.tag))}}function jn(e,t){var a=Eg(e);t.forEach(function(i){if(!a.has(i)){a.add(i);var n=Bg.bind(null,e,i);i.then(n,n)}})}function xe(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var n=a[i],r=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 27:if(ta(l.type)){Q=l.stateNode,we=!1;break e}break;case 5:Q=l.stateNode,we=!1;break e;case 3:case 4:Q=l.stateNode.containerInfo,we=!0;break e}l=l.return}if(Q===null)throw Error(b(160));Gu(r,o,n),Q=null,we=!1,r=n.alternate,r!==null&&(r.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Yu(t,e),t=t.sibling}var Ie=null;function Yu(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xe(t,e),ye(e),i&4&&(Jt(3,e,e.return),vn(3,e),Jt(5,e,e.return));break;case 1:xe(t,e),ye(e),i&512&&(ae||a===null||tt(a,a.return)),i&64&&ft&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var n=Ie;if(xe(t,e),ye(e),i&512&&(ae||a===null||tt(a,a.return)),i&4){var r=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(i){case"title":r=n.getElementsByTagName("title")[0],(!r||r[fn]||r[ue]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=n.createElement(i),n.head.insertBefore(r,n.querySelector("head > title"))),he(r,i,a),r[ue]=e,se(r),i=r;break e;case"link":var o=N0("link","href",n).get(i+(a.href||""));if(o){for(var l=0;l<o.length;l++)if(r=o[l],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(l,1);break t}}r=n.createElement(i),he(r,i,a),n.head.appendChild(r);break;case"meta":if(o=N0("meta","content",n).get(i+(a.content||""))){for(l=0;l<o.length;l++)if(r=o[l],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(l,1);break t}}r=n.createElement(i),he(r,i,a),n.head.appendChild(r);break;default:throw Error(b(468,i))}r[ue]=e,se(r),i=r}e.stateNode=i}else U0(n,e.type,e.stateNode);else e.stateNode=q0(n,i,e.memoizedProps);else r!==i?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,i===null?U0(n,e.type,e.stateNode):q0(n,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Yo(e,e.memoizedProps,a.memoizedProps)}break;case 27:xe(t,e),ye(e),i&512&&(ae||a===null||tt(a,a.return)),a!==null&&i&4&&Yo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(xe(t,e),ye(e),i&512&&(ae||a===null||tt(a,a.return)),e.flags&32){n=e.stateNode;try{ei(n,"")}catch(y){U(e,e.return,y)}}i&4&&e.stateNode!=null&&(n=e.memoizedProps,Yo(e,n,a!==null?a.memoizedProps:n)),i&1024&&(Wo=!0);break;case 6:if(xe(t,e),ye(e),i&4){if(e.stateNode===null)throw Error(b(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(y){U(e,e.return,y)}}break;case 3:if(rr=null,n=Ie,Ie=Lr(t.containerInfo),xe(t,e),Ie=n,ye(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{si(t.containerInfo)}catch(y){U(e,e.return,y)}Wo&&(Wo=!1,Vu(e));break;case 4:i=Ie,Ie=Lr(e.stateNode.containerInfo),xe(t,e),ye(e),Ie=i;break;case 12:xe(t,e),ye(e);break;case 31:xe(t,e),ye(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,jn(e,i)));break;case 13:xe(t,e),ye(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ir=ze()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,jn(e,i)));break;case 22:n=e.memoizedState!==null;var s=a!==null&&a.memoizedState!==null,p=ft,g=ae;if(ft=p||n,ae=g||s,xe(t,e),ae=g,ft=p,ye(e),i&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||s||ft||ae||la(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){s=a=t;try{if(r=s.stateNode,n)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{l=s.stateNode;var v=s.memoizedProps.style,f=v!=null&&v.hasOwnProperty("display")?v.display:null;l.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(y){U(s,s.return,y)}}}else if(t.tag===6){if(a===null){s=t;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(y){U(s,s.return,y)}}}else if(t.tag===18){if(a===null){s=t;try{var h=s.stateNode;n?L0(h,!0):L0(s.stateNode,!1)}catch(y){U(s,s.return,y)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,jn(e,a))));break;case 19:xe(t,e),ye(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,jn(e,i)));break;case 30:break;case 21:break;default:xe(t,e),ye(e)}}function ye(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(Hu(i)){a=i;break}i=i.return}if(a==null)throw Error(b(160));switch(a.tag){case 27:var n=a.stateNode,r=Vo(e);_r(e,r,n);break;case 5:var o=a.stateNode;a.flags&32&&(ei(o,""),a.flags&=-33);var l=Vo(e);_r(e,l,o);break;case 3:case 4:var s=a.stateNode.containerInfo,p=Vo(e);Ll(e,p,s);break;default:throw Error(b(161))}}catch(g){U(e,e.return,g)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Vu(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function dt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Nu(e,t.alternate,t),t=t.sibling}function la(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Jt(4,t,t.return),la(t);break;case 1:tt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Ou(t,t.return,a),la(t);break;case 27:Pi(t.stateNode);case 26:case 5:tt(t,t.return),la(t);break;case 22:t.memoizedState===null&&la(t);break;case 30:la(t);break;default:la(t)}e=e.sibling}}function ut(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,n=e,r=t,o=r.flags;switch(r.tag){case 0:case 11:case 15:ut(n,r,a),vn(4,r);break;case 1:if(ut(n,r,a),i=r,n=i.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(p){U(i,i.return,p)}if(i=r,n=i.updateQueue,n!==null){var l=i.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)jd(s[n],l)}catch(p){U(i,i.return,p)}}a&&o&64&&Du(r),Yi(r,r.return);break;case 27:qu(r);case 26:case 5:ut(n,r,a),a&&i===null&&o&4&&Bu(r),Yi(r,r.return);break;case 12:ut(n,r,a);break;case 31:ut(n,r,a),a&&o&4&&ju(n,r);break;case 13:ut(n,r,a),a&&o&4&&Fu(n,r);break;case 22:r.memoizedState===null&&ut(n,r,a),Yi(r,r.return);break;case 30:break;default:ut(n,r,a)}t=t.sibling}}function Rs(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&gn(a))}function Ls(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&gn(e))}function Pe(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Wu(e,t,a,i),t=t.sibling}function Wu(e,t,a,i){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Pe(e,t,a,i),n&2048&&vn(9,t);break;case 1:Pe(e,t,a,i);break;case 3:Pe(e,t,a,i),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&gn(e)));break;case 12:if(n&2048){Pe(e,t,a,i),e=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){U(t,t.return,s)}}else Pe(e,t,a,i);break;case 31:Pe(e,t,a,i);break;case 13:Pe(e,t,a,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?r._visibility&2?Pe(e,t,a,i):Vi(e,t):r._visibility&2?Pe(e,t,a,i):(r._visibility|=2,Ra(e,t,a,i,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Rs(o,t);break;case 24:Pe(e,t,a,i),n&2048&&Ls(t.alternate,t);break;default:Pe(e,t,a,i)}}function Ra(e,t,a,i,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,o=t,l=a,s=i,p=o.flags;switch(o.tag){case 0:case 11:case 15:Ra(r,o,l,s,n),vn(8,o);break;case 23:break;case 22:var g=o.stateNode;o.memoizedState!==null?g._visibility&2?Ra(r,o,l,s,n):Vi(r,o):(g._visibility|=2,Ra(r,o,l,s,n)),n&&p&2048&&Rs(o.alternate,o);break;case 24:Ra(r,o,l,s,n),n&&p&2048&&Ls(o.alternate,o);break;default:Ra(r,o,l,s,n)}t=t.sibling}}function Vi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,n=i.flags;switch(i.tag){case 22:Vi(a,i),n&2048&&Rs(i.alternate,i);break;case 24:Vi(a,i),n&2048&&Ls(i.alternate,i);break;default:Vi(a,i)}t=t.sibling}}var Oi=8192;function za(e,t,a){if(e.subtreeFlags&Oi)for(e=e.child;e!==null;)Xu(e,t,a),e=e.sibling}function Xu(e,t,a){switch(e.tag){case 26:za(e,t,a),e.flags&Oi&&e.memoizedState!==null&&dm(a,Ie,e.memoizedState,e.memoizedProps);break;case 5:za(e,t,a);break;case 3:case 4:var i=Ie;Ie=Lr(e.stateNode.containerInfo),za(e,t,a),Ie=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Oi,Oi=16777216,za(e,t,a),Oi=i):za(e,t,a));break;default:za(e,t,a)}}function Pu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ai(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];le=i,Zu(i,e)}Pu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Iu(e),e=e.sibling}function Iu(e){switch(e.tag){case 0:case 11:case 15:Ai(e),e.flags&2048&&Jt(9,e,e.return);break;case 3:Ai(e);break;case 12:Ai(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ir(e)):Ai(e);break;default:Ai(e)}}function ir(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];le=i,Zu(i,e)}Pu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Jt(8,t,t.return),ir(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ir(t));break;default:ir(t)}e=e.sibling}}function Zu(e,t){for(;le!==null;){var a=le;switch(a.tag){case 0:case 11:case 15:Jt(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:gn(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,le=i;else e:for(a=e;le!==null;){i=le;var n=i.sibling,r=i.return;if(Uu(i),i===a){le=null;break e}if(n!==null){n.return=r,le=n;break e}le=r}}}var Ag={getCacheForType:function(e){var t=fe(ie),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return fe(ie).controller.signal}},Mg=typeof WeakMap=="function"?WeakMap:Map,H=0,F=null,z=null,R=0,N=0,Ee=null,Nt=!1,fi=!1,Ds=!1,_t=0,J=0,$t=0,pa=0,Os=0,Ce=0,ni=0,Wi=null,ke=null,Dl=!1,Ir=0,Qu=0,Tr=1/0,Er=null,Wt=null,re=0,Xt=null,ri=null,xt=0,Ol=0,Bl=null,Ku=null,Xi=0,Hl=null;function De(){return(H&2)!==0&&R!==0?R&-R:S.T!==null?Hs():od()}function Ju(){if(Ce===0)if((R&536870912)===0||L){var e=Rn;Rn<<=1,(Rn&3932160)===0&&(Rn=262144),Ce=e}else Ce=536870912;return e=Be.current,e!==null&&(e.flags|=32),Ce}function Se(e,t,a){(e===F&&(N===2||N===9)||e.cancelPendingCommit!==null)&&(oi(e,0),Ut(e,R,Ce,!1)),pn(e,a),((H&2)===0||e!==F)&&(e===F&&((H&2)===0&&(pa|=a),J===4&&Ut(e,R,Ce,!1)),nt(e))}function $u(e,t,a){if((H&6)!==0)throw Error(b(327));var i=!a&&(t&127)===0&&(t&e.expiredLanes)===0||un(e,t),n=i?Rg(e,t):Xo(e,t,!0),r=i;do{if(n===0){fi&&!i&&Ut(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!Cg(a)){n=Xo(e,t,!1),r=!1;continue}if(n===2){if(r=t,e.errorRecoveryDisabledLanes&r)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var l=e;n=Wi;var s=l.current.memoizedState.isDehydrated;if(s&&(oi(l,o).flags|=256),o=Xo(l,o,!1),o!==2){if(Ds&&!s){l.errorRecoveryDisabledLanes|=r,pa|=r,n=4;break e}r=ke,ke=n,r!==null&&(ke===null?ke=r:ke.push.apply(ke,r))}n=o}if(r=!1,n!==2)continue}}if(n===1){oi(e,0),Ut(e,t,0,!0);break}e:{switch(i=e,r=n,r){case 0:case 1:throw Error(b(345));case 4:if((t&4194048)!==t)break;case 6:Ut(i,t,Ce,!Nt);break e;case 2:ke=null;break;case 3:case 5:break;default:throw Error(b(329))}if((t&62914560)===t&&(n=Ir+300-ze(),10<n)){if(Ut(i,t,Ce,!Nt),qr(i,0,!0)!==0)break e;xt=t,i.timeoutHandle=xp(v0.bind(null,i,a,ke,Er,Dl,t,Ce,pa,ni,Nt,r,"Throttled",-0,0),n);break e}v0(i,a,ke,Er,Dl,t,Ce,pa,ni,Nt,r,null,-0,0)}}break}while(!0);nt(e)}function v0(e,t,a,i,n,r,o,l,s,p,g,v,f,h){if(e.timeoutHandle=-1,v=t.subtreeFlags,v&8192||(v&16785408)===16785408){v={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:gt},Xu(t,r,v);var y=(r&62914560)===r?Ir-ze():(r&4194048)===r?Qu-ze():0;if(y=um(v,y),y!==null){xt=r,e.cancelPendingCommit=y(x0.bind(null,e,t,r,a,i,n,o,l,s,g,v,null,f,h)),Ut(e,r,o,!p);return}}x0(e,t,r,a,i,n,o,l,s)}function Cg(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var n=a[i],r=n.getSnapshot;n=n.value;try{if(!Oe(r(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ut(e,t,a,i){t&=~Os,t&=~pa,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var n=t;0<n;){var r=31-Le(n),o=1<<r;i[r]=-1,n&=~o}a!==0&&id(e,a,t)}function Zr(){return(H&6)===0?(bn(0,!1),!1):!0}function Bs(){if(z!==null){if(N===0)var e=z.return;else e=z,mt=ka=null,ys(e),Za=null,en=0,e=z;for(;e!==null;)Lu(e.alternate,e),e=e.return;z=null}}function oi(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Pg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),xt=0,Bs(),F=e,z=a=vt(e.current,null),R=t,N=0,Ee=null,Nt=!1,fi=un(e,t),Ds=!1,ni=Ce=Os=pa=$t=J=0,ke=Wi=null,Dl=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var n=31-Le(i),r=1<<n;t|=e[n],i&=~r}return _t=t,jr(),a}function ep(e,t){E=null,S.H=an,t===pi||t===Yr?(t=Zc(),N=3):t===fs?(t=Zc(),N=4):N=t===Cs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ee=t,z===null&&(J=1,kr(e,Fe(t,e.current)))}function tp(){var e=Be.current;return e===null?!0:(R&4194048)===R?Ve===null:(R&62914560)===R||(R&536870912)!==0?e===Ve:!1}function ap(){var e=S.H;return S.H=an,e===null?an:e}function ip(){var e=S.A;return S.A=Ag,e}function Ar(){J=4,Nt||(R&4194048)!==R&&Be.current!==null||(fi=!0),($t&134217727)===0&&(pa&134217727)===0||F===null||Ut(F,R,Ce,!1)}function Xo(e,t,a){var i=H;H|=2;var n=ap(),r=ip();(F!==e||R!==t)&&(Er=null,oi(e,t)),t=!1;var o=J;e:do try{if(N!==0&&z!==null){var l=z,s=Ee;switch(N){case 8:Bs(),o=6;break e;case 3:case 2:case 9:case 6:Be.current===null&&(t=!0);var p=N;if(N=0,Ee=null,Va(e,l,s,p),a&&fi){o=0;break e}break;default:p=N,N=0,Ee=null,Va(e,l,s,p)}}zg(),o=J;break}catch(g){ep(e,g)}while(!0);return t&&e.shellSuspendCounter++,mt=ka=null,H=i,S.H=n,S.A=r,z===null&&(F=null,R=0,jr()),o}function zg(){for(;z!==null;)np(z)}function Rg(e,t){var a=H;H|=2;var i=ap(),n=ip();F!==e||R!==t?(Er=null,Tr=ze()+500,oi(e,t)):fi=un(e,t);e:do try{if(N!==0&&z!==null){t=z;var r=Ee;t:switch(N){case 1:N=0,Ee=null,Va(e,t,r,1);break;case 2:case 9:if(Ic(r)){N=0,Ee=null,b0(t);break}t=function(){N!==2&&N!==9||F!==e||(N=7),nt(e)},r.then(t,t);break e;case 3:N=7;break e;case 4:N=5;break e;case 7:Ic(r)?(N=0,Ee=null,b0(t)):(N=0,Ee=null,Va(e,t,r,7));break;case 5:var o=null;switch(z.tag){case 26:o=z.memoizedState;case 5:case 27:var l=z;if(o?_p(o):l.stateNode.complete){N=0,Ee=null;var s=l.sibling;if(s!==null)z=s;else{var p=l.return;p!==null?(z=p,Qr(p)):z=null}break t}}N=0,Ee=null,Va(e,t,r,5);break;case 6:N=0,Ee=null,Va(e,t,r,6);break;case 8:Bs(),J=6;break e;default:throw Error(b(462))}}Lg();break}catch(g){ep(e,g)}while(!0);return mt=ka=null,S.H=i,S.A=n,H=a,z!==null?0:(F=null,R=0,jr(),J)}function Lg(){for(;z!==null&&!th();)np(z)}function np(e){var t=Ru(e.alternate,e,_t);e.memoizedProps=e.pendingProps,t===null?Qr(e):z=t}function b0(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=u0(a,t,t.pendingProps,t.type,void 0,R);break;case 11:t=u0(a,t,t.pendingProps,t.type.render,t.ref,R);break;case 5:ys(t);default:Lu(a,t),t=z=Ld(t,_t),t=Ru(a,t,_t)}e.memoizedProps=e.pendingProps,t===null?Qr(e):z=t}function Va(e,t,a,i){mt=ka=null,ys(t),Za=null,en=0;var n=t.return;try{if(yg(e,n,t,a,R)){J=1,kr(e,Fe(a,e.current)),z=null;return}}catch(r){if(n!==null)throw z=n,r;J=1,kr(e,Fe(a,e.current)),z=null;return}t.flags&32768?(L||i===1?e=!0:fi||(R&536870912)!==0?e=!1:(Nt=e=!0,(i===2||i===9||i===3||i===6)&&(i=Be.current,i!==null&&i.tag===13&&(i.flags|=16384))),rp(t,e)):Qr(t)}function Qr(e){var t=e;do{if((t.flags&32768)!==0){rp(t,Nt);return}e=t.return;var a=Sg(t.alternate,t,_t);if(a!==null){z=a;return}if(t=t.sibling,t!==null){z=t;return}z=t=e}while(t!==null);J===0&&(J=5)}function rp(e,t){do{var a=_g(e.alternate,e);if(a!==null){a.flags&=32767,z=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){z=e;return}z=e=a}while(e!==null);J=6,z=null}function x0(e,t,a,i,n,r,o,l,s){e.cancelPendingCommit=null;do Kr();while(re!==0);if((H&6)!==0)throw Error(b(327));if(t!==null){if(t===e.current)throw Error(b(177));if(r=t.lanes|t.childLanes,r|=os,uh(e,a,r,o,l,s),e===F&&(z=F=null,R=0),ri=t,Xt=e,xt=a,Ol=r,Bl=n,Ku=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Hg(ur,function(){return dp(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=S.T,S.T=null,n=q.p,q.p=2,o=H,H|=4;try{Tg(e,t,a)}finally{H=o,q.p=n,S.T=i}}re=1,op(),lp(),sp()}}function op(){if(re===1){re=0;var e=Xt,t=ri,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=S.T,S.T=null;var i=q.p;q.p=2;var n=H;H|=4;try{Yu(t,e);var r=Gl,o=_d(e.containerInfo),l=r.focusedElem,s=r.selectionRange;if(o!==l&&l&&l.ownerDocument&&Sd(l.ownerDocument.documentElement,l)){if(s!==null&&rs(l)){var p=s.start,g=s.end;if(g===void 0&&(g=p),"selectionStart"in l)l.selectionStart=p,l.selectionEnd=Math.min(g,l.value.length);else{var v=l.ownerDocument||document,f=v&&v.defaultView||window;if(f.getSelection){var h=f.getSelection(),y=l.textContent.length,k=Math.min(s.start,y),D=s.end===void 0?k:Math.min(s.end,y);!h.extend&&k>D&&(o=D,D=k,k=o);var d=jc(l,k),c=jc(l,D);if(d&&c&&(h.rangeCount!==1||h.anchorNode!==d.node||h.anchorOffset!==d.offset||h.focusNode!==c.node||h.focusOffset!==c.offset)){var u=v.createRange();u.setStart(d.node,d.offset),h.removeAllRanges(),k>D?(h.addRange(u),h.extend(c.node,c.offset)):(u.setEnd(c.node,c.offset),h.addRange(u))}}}}for(v=[],h=l;h=h.parentNode;)h.nodeType===1&&v.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<v.length;l++){var m=v[l];m.element.scrollLeft=m.left,m.element.scrollTop=m.top}}Br=!!Ul,Gl=Ul=null}finally{H=n,q.p=i,S.T=a}}e.current=t,re=2}}function lp(){if(re===2){re=0;var e=Xt,t=ri,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=S.T,S.T=null;var i=q.p;q.p=2;var n=H;H|=4;try{Nu(e,t.alternate,t)}finally{H=n,q.p=i,S.T=a}}re=3}}function sp(){if(re===4||re===3){re=0,ah();var e=Xt,t=ri,a=xt,i=Ku;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?re=5:(re=0,ri=Xt=null,cp(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Wt=null),Jl(a),t=t.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(dn,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=S.T,n=q.p,q.p=2,S.T=null;try{for(var r=e.onRecoverableError,o=0;o<i.length;o++){var l=i[o];r(l.value,{componentStack:l.stack})}}finally{S.T=t,q.p=n}}(xt&3)!==0&&Kr(),nt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Hl?Xi++:(Xi=0,Hl=e):Xi=0,bn(0,!1)}}function cp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,gn(t)))}function Kr(){return op(),lp(),sp(),dp()}function dp(){if(re!==5)return!1;var e=Xt,t=Ol;Ol=0;var a=Jl(xt),i=S.T,n=q.p;try{q.p=32>a?32:a,S.T=null,a=Bl,Bl=null;var r=Xt,o=xt;if(re=0,ri=Xt=null,xt=0,(H&6)!==0)throw Error(b(331));var l=H;if(H|=4,Iu(r.current),Wu(r,r.current,o,a),H=l,bn(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(dn,r)}catch{}return!0}finally{q.p=n,S.T=i,cp(e,t)}}function y0(e,t,a){t=Fe(a,t),t=Cl(e.stateNode,t,2),e=Vt(e,t,2),e!==null&&(pn(e,2),nt(e))}function U(e,t,a){if(e.tag===3)y0(e,e,a);else for(;t!==null;){if(t.tag===3){y0(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Wt===null||!Wt.has(i))){e=Fe(a,e),a=Tu(2),i=Vt(t,a,2),i!==null&&(Eu(a,i,t,e),pn(i,2),nt(i));break}}t=t.return}}function Po(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new Mg;var n=new Set;i.set(t,n)}else n=i.get(t),n===void 0&&(n=new Set,i.set(t,n));n.has(a)||(Ds=!0,n.add(a),e=Dg.bind(null,e,t,a),t.then(e,e))}function Dg(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,F===e&&(R&a)===a&&(J===4||J===3&&(R&62914560)===R&&300>ze()-Ir?(H&2)===0&&oi(e,0):Os|=a,ni===R&&(ni=0)),nt(e)}function up(e,t){t===0&&(t=ad()),e=wa(e,t),e!==null&&(pn(e,t),nt(e))}function Og(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),up(e,a)}function Bg(e,t){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(b(314))}i!==null&&i.delete(t),up(e,a)}function Hg(e,t){return Ql(e,t)}var Mr=null,La=null,ql=!1,Cr=!1,Io=!1,Gt=0;function nt(e){e!==La&&e.next===null&&(La===null?Mr=La=e:La=La.next=e),Cr=!0,ql||(ql=!0,Ng())}function bn(e,t){if(!Io&&Cr){Io=!0;do for(var a=!1,i=Mr;i!==null;){if(!t)if(e!==0){var n=i.pendingLanes;if(n===0)var r=0;else{var o=i.suspendedLanes,l=i.pingedLanes;r=(1<<31-Le(42|e)+1)-1,r&=n&~(o&~l),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,w0(i,r))}else r=R,r=qr(i,i===F?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||un(i,r)||(a=!0,w0(i,r));i=i.next}while(a);Io=!1}}function qg(){pp()}function pp(){Cr=ql=!1;var e=0;Gt!==0&&Xg()&&(e=Gt);for(var t=ze(),a=null,i=Mr;i!==null;){var n=i.next,r=fp(i,t);r===0?(i.next=null,a===null?Mr=n:a.next=n,n===null&&(La=a)):(a=i,(e!==0||(r&3)!==0)&&(Cr=!0)),i=n}re!==0&&re!==5||bn(e,!1),Gt!==0&&(Gt=0)}function fp(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var o=31-Le(r),l=1<<o,s=n[o];s===-1?((l&a)===0||(l&i)!==0)&&(n[o]=dh(l,t)):s<=t&&(e.expiredLanes|=l),r&=~l}if(t=F,a=R,a=qr(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(N===2||N===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&So(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||un(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&So(i),Jl(a)){case 2:case 8:a=ed;break;case 32:a=ur;break;case 268435456:a=td;break;default:a=ur}return i=hp.bind(null,e),a=Ql(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&So(i),e.callbackPriority=2,e.callbackNode=null,2}function hp(e,t){if(re!==0&&re!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Kr()&&e.callbackNode!==a)return null;var i=R;return i=qr(e,e===F?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:($u(e,i,t),fp(e,ze()),e.callbackNode!=null&&e.callbackNode===a?hp.bind(null,e):null)}function w0(e,t){if(Kr())return null;$u(e,t,!0)}function Ng(){Ig(function(){(H&6)!==0?Ql($0,qg):pp()})}function Hs(){if(Gt===0){var e=ti;e===0&&(e=zn,zn<<=1,(zn&261888)===0&&(zn=256)),Gt=e}return Gt}function k0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:In(""+e)}function S0(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Ug(e,t,a,i,n){if(t==="submit"&&a&&a.stateNode===n){var r=k0((n[_e]||null).action),o=i.submitter;o&&(t=(t=o[_e]||null)?k0(t.formAction):o.getAttribute("formAction"),t!==null&&(r=t,o=null));var l=new Nr("action","action",null,i,n);e.push({event:l,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Gt!==0){var s=o?S0(n,o):new FormData(n);Al(a,{pending:!0,data:s,method:n.method,action:r},null,s)}}else typeof r=="function"&&(l.preventDefault(),s=o?S0(n,o):new FormData(n),Al(a,{pending:!0,data:s,method:n.method,action:r},r,s))},currentTarget:n}]})}}for(Fn=0;Fn<gl.length;Fn++)Yn=gl[Fn],_0=Yn.toLowerCase(),T0=Yn[0].toUpperCase()+Yn.slice(1),Ze(_0,"on"+T0);var Yn,_0,T0,Fn;Ze(Ed,"onAnimationEnd");Ze(Ad,"onAnimationIteration");Ze(Md,"onAnimationStart");Ze("dblclick","onDoubleClick");Ze("focusin","onFocus");Ze("focusout","onBlur");Ze(ig,"onTransitionRun");Ze(ng,"onTransitionStart");Ze(rg,"onTransitionCancel");Ze(Cd,"onTransitionEnd");$a("onMouseEnter",["mouseout","mouseover"]);$a("onMouseLeave",["mouseout","mouseover"]);$a("onPointerEnter",["pointerout","pointerover"]);$a("onPointerLeave",["pointerout","pointerover"]);ba("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ba("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ba("onBeforeInput",["compositionend","keypress","textInput","paste"]);ba("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ba("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ba("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nn));function gp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],n=i.event;i=i.listeners;e:{var r=void 0;if(t)for(var o=i.length-1;0<=o;o--){var l=i[o],s=l.instance,p=l.currentTarget;if(l=l.listener,s!==r&&n.isPropagationStopped())break e;r=l,n.currentTarget=p;try{r(n)}catch(g){fr(g)}n.currentTarget=null,r=s}else for(o=0;o<i.length;o++){if(l=i[o],s=l.instance,p=l.currentTarget,l=l.listener,s!==r&&n.isPropagationStopped())break e;r=l,n.currentTarget=p;try{r(n)}catch(g){fr(g)}n.currentTarget=null,r=s}}}}function C(e,t){var a=t[ll];a===void 0&&(a=t[ll]=new Set);var i=e+"__bubble";a.has(i)||(mp(t,e,2,!1),a.add(i))}function Zo(e,t,a){var i=0;t&&(i|=4),mp(a,e,i,t)}var Vn="_reactListening"+Math.random().toString(36).slice(2);function qs(e){if(!e[Vn]){e[Vn]=!0,ld.forEach(function(a){a!=="selectionchange"&&(Gg.has(a)||Zo(a,!1,e),Zo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vn]||(t[Vn]=!0,Zo("selectionchange",!1,t))}}function mp(e,t,a,i){switch(Cp(t)){case 2:var n=hm;break;case 8:n=gm;break;default:n=js}a=n.bind(null,t,a,e),n=void 0,!pl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),i?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Qo(e,t,a,i,n){var r=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var l=i.stateNode.containerInfo;if(l===n)break;if(o===4)for(o=i.return;o!==null;){var s=o.tag;if((s===3||s===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;l!==null;){if(o=Ba(l),o===null)return;if(s=o.tag,s===5||s===6||s===26||s===27){i=r=o;continue e}l=l.parentNode}}i=i.return}gd(function(){var p=r,g=ts(a),v=[];e:{var f=zd.get(e);if(f!==void 0){var h=Nr,y=e;switch(e){case"keypress":if(Qn(a)===0)break e;case"keydown":case"keyup":h=Bh;break;case"focusin":y="focus",h=Mo;break;case"focusout":y="blur",h=Mo;break;case"beforeblur":case"afterblur":h=Mo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Lc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Sh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Nh;break;case Ed:case Ad:case Md:h=Eh;break;case Cd:h=Gh;break;case"scroll":case"scrollend":h=wh;break;case"wheel":h=Fh;break;case"copy":case"cut":case"paste":h=Mh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Oc;break;case"toggle":case"beforetoggle":h=Vh}var k=(t&4)!==0,D=!k&&(e==="scroll"||e==="scrollend"),d=k?f!==null?f+"Capture":null:f;k=[];for(var c=p,u;c!==null;){var m=c;if(u=m.stateNode,m=m.tag,m!==5&&m!==26&&m!==27||u===null||d===null||(m=Zi(c,d),m!=null&&k.push(rn(c,m,u))),D)break;c=c.return}0<k.length&&(f=new h(f,y,null,a,g),v.push({event:f,listeners:k}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&a!==ul&&(y=a.relatedTarget||a.fromElement)&&(Ba(y)||y[ci]))break e;if((h||f)&&(f=g.window===g?g:(f=g.ownerDocument)?f.defaultView||f.parentWindow:window,h?(y=a.relatedTarget||a.toElement,h=p,y=y?Ba(y):null,y!==null&&(D=cn(y),k=y.tag,y!==D||k!==5&&k!==27&&k!==6)&&(y=null)):(h=null,y=p),h!==y)){if(k=Lc,m="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=Oc,m="onPointerLeave",d="onPointerEnter",c="pointer"),D=h==null?f:Li(h),u=y==null?f:Li(y),f=new k(m,c+"leave",h,a,g),f.target=D,f.relatedTarget=u,m=null,Ba(g)===p&&(k=new k(d,c+"enter",y,a,g),k.target=u,k.relatedTarget=D,m=k),D=m,h&&y)t:{for(k=jg,d=h,c=y,u=0,m=d;m;m=k(m))u++;m=0;for(var w=c;w;w=k(w))m++;for(;0<u-m;)d=k(d),u--;for(;0<m-u;)c=k(c),m--;for(;u--;){if(d===c||c!==null&&d===c.alternate){k=d;break t}d=k(d),c=k(c)}k=null}else k=null;h!==null&&E0(v,f,h,k,!1),y!==null&&D!==null&&E0(v,D,y,k,!0)}}e:{if(f=p?Li(p):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var A=Nc;else if(qc(f))if(wd)A=eg;else{A=Jh;var x=Kh}else h=f.nodeName,!h||h.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?p&&es(p.elementType)&&(A=Nc):A=$h;if(A&&(A=A(e,p))){yd(v,A,a,g);break e}x&&x(e,f,p),e==="focusout"&&p&&f.type==="number"&&p.memoizedProps.value!=null&&dl(f,"number",f.value)}switch(x=p?Li(p):window,e){case"focusin":(qc(x)||x.contentEditable==="true")&&(Na=x,fl=p,qi=null);break;case"focusout":qi=fl=Na=null;break;case"mousedown":hl=!0;break;case"contextmenu":case"mouseup":case"dragend":hl=!1,Fc(v,a,g);break;case"selectionchange":if(ag)break;case"keydown":case"keyup":Fc(v,a,g)}var _;if(ns)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else qa?bd(e,a)&&(M="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(M="onCompositionStart");M&&(vd&&a.locale!=="ko"&&(qa||M!=="onCompositionStart"?M==="onCompositionEnd"&&qa&&(_=md()):(qt=g,as="value"in qt?qt.value:qt.textContent,qa=!0)),x=zr(p,M),0<x.length&&(M=new Dc(M,e,null,a,g),v.push({event:M,listeners:x}),_?M.data=_:(_=xd(a),_!==null&&(M.data=_)))),(_=Xh?Ph(e,a):Ih(e,a))&&(M=zr(p,"onBeforeInput"),0<M.length&&(x=new Dc("onBeforeInput","beforeinput",null,a,g),v.push({event:x,listeners:M}),x.data=_)),Ug(v,e,p,a,g)}gp(v,t)})}function rn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function zr(e,t){for(var a=t+"Capture",i=[];e!==null;){var n=e,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=Zi(e,a),n!=null&&i.unshift(rn(e,n,r)),n=Zi(e,t),n!=null&&i.push(rn(e,n,r))),e.tag===3)return i;e=e.return}return[]}function jg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function E0(e,t,a,i,n){for(var r=t._reactName,o=[];a!==null&&a!==i;){var l=a,s=l.alternate,p=l.stateNode;if(l=l.tag,s!==null&&s===i)break;l!==5&&l!==26&&l!==27||p===null||(s=p,n?(p=Zi(a,r),p!=null&&o.unshift(rn(a,p,s))):n||(p=Zi(a,r),p!=null&&o.push(rn(a,p,s)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var Fg=/\r\n?/g,Yg=/\u0000|\uFFFD/g;function A0(e){return(typeof e=="string"?e:""+e).replace(Fg,`
`).replace(Yg,"")}function vp(e,t){return t=A0(t),A0(e)===t}function G(e,t,a,i,n,r){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||ei(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&ei(e,""+i);break;case"className":Dn(e,"class",i);break;case"tabIndex":Dn(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Dn(e,a,i);break;case"style":hd(e,i,r);break;case"data":if(t!=="object"){Dn(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=In(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&G(e,t,"name",n.name,n,null),G(e,t,"formEncType",n.formEncType,n,null),G(e,t,"formMethod",n.formMethod,n,null),G(e,t,"formTarget",n.formTarget,n,null)):(G(e,t,"encType",n.encType,n,null),G(e,t,"method",n.method,n,null),G(e,t,"target",n.target,n,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=In(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=gt);break;case"onScroll":i!=null&&C("scroll",e);break;case"onScrollEnd":i!=null&&C("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(b(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(b(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=In(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":C("beforetoggle",e),C("toggle",e),Pn(e,"popover",i);break;case"xlinkActuate":lt(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":lt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":lt(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":lt(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":lt(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":lt(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":lt(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":lt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":lt(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Pn(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=xh.get(a)||a,Pn(e,a,i))}}function Nl(e,t,a,i,n,r){switch(a){case"style":hd(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(b(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(b(60));e.innerHTML=a}}break;case"children":typeof i=="string"?ei(e,i):(typeof i=="number"||typeof i=="bigint")&&ei(e,""+i);break;case"onScroll":i!=null&&C("scroll",e);break;case"onScrollEnd":i!=null&&C("scrollend",e);break;case"onClick":i!=null&&(e.onclick=gt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!sd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),r=e[_e]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,n),typeof i=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,n);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):Pn(e,a,i)}}}function he(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":C("error",e),C("load",e);var i=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var o=a[r];if(o!=null)switch(r){case"src":i=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(b(137,t));default:G(e,t,r,o,a,null)}}n&&G(e,t,"srcSet",a.srcSet,a,null),i&&G(e,t,"src",a.src,a,null);return;case"input":C("invalid",e);var l=r=o=n=null,s=null,p=null;for(i in a)if(a.hasOwnProperty(i)){var g=a[i];if(g!=null)switch(i){case"name":n=g;break;case"type":o=g;break;case"checked":s=g;break;case"defaultChecked":p=g;break;case"value":r=g;break;case"defaultValue":l=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(b(137,t));break;default:G(e,t,i,g,a,null)}}ud(e,r,l,s,p,o,n,!1);return;case"select":C("invalid",e),i=o=r=null;for(n in a)if(a.hasOwnProperty(n)&&(l=a[n],l!=null))switch(n){case"value":r=l;break;case"defaultValue":o=l;break;case"multiple":i=l;default:G(e,t,n,l,a,null)}t=r,a=o,e.multiple=!!i,t!=null?Xa(e,!!i,t,!1):a!=null&&Xa(e,!!i,a,!0);return;case"textarea":C("invalid",e),r=n=i=null;for(o in a)if(a.hasOwnProperty(o)&&(l=a[o],l!=null))switch(o){case"value":i=l;break;case"defaultValue":n=l;break;case"children":r=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(b(91));break;default:G(e,t,o,l,a,null)}fd(e,i,n,r);return;case"option":for(s in a)a.hasOwnProperty(s)&&(i=a[s],i!=null)&&(s==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":G(e,t,s,i,a,null));return;case"dialog":C("beforetoggle",e),C("toggle",e),C("cancel",e),C("close",e);break;case"iframe":case"object":C("load",e);break;case"video":case"audio":for(i=0;i<nn.length;i++)C(nn[i],e);break;case"image":C("error",e),C("load",e);break;case"details":C("toggle",e);break;case"embed":case"source":case"link":C("error",e),C("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in a)if(a.hasOwnProperty(p)&&(i=a[p],i!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(b(137,t));default:G(e,t,p,i,a,null)}return;default:if(es(t)){for(g in a)a.hasOwnProperty(g)&&(i=a[g],i!==void 0&&Nl(e,t,g,i,a,void 0));return}}for(l in a)a.hasOwnProperty(l)&&(i=a[l],i!=null&&G(e,t,l,i,a,null))}function Vg(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,o=null,l=null,s=null,p=null,g=null;for(h in a){var v=a[h];if(a.hasOwnProperty(h)&&v!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":s=v;default:i.hasOwnProperty(h)||G(e,t,h,null,i,v)}}for(var f in i){var h=i[f];if(v=a[f],i.hasOwnProperty(f)&&(h!=null||v!=null))switch(f){case"type":r=h;break;case"name":n=h;break;case"checked":p=h;break;case"defaultChecked":g=h;break;case"value":o=h;break;case"defaultValue":l=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(b(137,t));break;default:h!==v&&G(e,t,f,h,i,v)}}cl(e,o,l,s,p,g,r,n);return;case"select":h=o=l=f=null;for(r in a)if(s=a[r],a.hasOwnProperty(r)&&s!=null)switch(r){case"value":break;case"multiple":h=s;default:i.hasOwnProperty(r)||G(e,t,r,null,i,s)}for(n in i)if(r=i[n],s=a[n],i.hasOwnProperty(n)&&(r!=null||s!=null))switch(n){case"value":f=r;break;case"defaultValue":l=r;break;case"multiple":o=r;default:r!==s&&G(e,t,n,r,i,s)}t=l,a=o,i=h,f!=null?Xa(e,!!a,f,!1):!!i!=!!a&&(t!=null?Xa(e,!!a,t,!0):Xa(e,!!a,a?[]:"",!1));return;case"textarea":h=f=null;for(l in a)if(n=a[l],a.hasOwnProperty(l)&&n!=null&&!i.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:G(e,t,l,null,i,n)}for(o in i)if(n=i[o],r=a[o],i.hasOwnProperty(o)&&(n!=null||r!=null))switch(o){case"value":f=n;break;case"defaultValue":h=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(b(91));break;default:n!==r&&G(e,t,o,n,i,r)}pd(e,f,h);return;case"option":for(var y in a)f=a[y],a.hasOwnProperty(y)&&f!=null&&!i.hasOwnProperty(y)&&(y==="selected"?e.selected=!1:G(e,t,y,null,i,f));for(s in i)f=i[s],h=a[s],i.hasOwnProperty(s)&&f!==h&&(f!=null||h!=null)&&(s==="selected"?e.selected=f&&typeof f!="function"&&typeof f!="symbol":G(e,t,s,f,i,h));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var k in a)f=a[k],a.hasOwnProperty(k)&&f!=null&&!i.hasOwnProperty(k)&&G(e,t,k,null,i,f);for(p in i)if(f=i[p],h=a[p],i.hasOwnProperty(p)&&f!==h&&(f!=null||h!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(b(137,t));break;default:G(e,t,p,f,i,h)}return;default:if(es(t)){for(var D in a)f=a[D],a.hasOwnProperty(D)&&f!==void 0&&!i.hasOwnProperty(D)&&Nl(e,t,D,void 0,i,f);for(g in i)f=i[g],h=a[g],!i.hasOwnProperty(g)||f===h||f===void 0&&h===void 0||Nl(e,t,g,f,i,h);return}}for(var d in a)f=a[d],a.hasOwnProperty(d)&&f!=null&&!i.hasOwnProperty(d)&&G(e,t,d,null,i,f);for(v in i)f=i[v],h=a[v],!i.hasOwnProperty(v)||f===h||f==null&&h==null||G(e,t,v,f,i,h)}function M0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Wg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var n=a[i],r=n.transferSize,o=n.initiatorType,l=n.duration;if(r&&l&&M0(o)){for(o=0,l=n.responseEnd,i+=1;i<a.length;i++){var s=a[i],p=s.startTime;if(p>l)break;var g=s.transferSize,v=s.initiatorType;g&&M0(v)&&(s=s.responseEnd,o+=g*(s<l?1:(l-p)/(s-p)))}if(--i,t+=8*(r+o)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ul=null,Gl=null;function Rr(e){return e.nodeType===9?e:e.ownerDocument}function C0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function jl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ko=null;function Xg(){var e=window.event;return e&&e.type==="popstate"?e===Ko?!1:(Ko=e,!0):(Ko=null,!1)}var xp=typeof setTimeout=="function"?setTimeout:void 0,Pg=typeof clearTimeout=="function"?clearTimeout:void 0,z0=typeof Promise=="function"?Promise:void 0,Ig=typeof queueMicrotask=="function"?queueMicrotask:typeof z0<"u"?function(e){return z0.resolve(null).then(e).catch(Zg)}:xp;function Zg(e){setTimeout(function(){throw e})}function ta(e){return e==="head"}function R0(e,t){var a=t,i=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(n),si(t);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")Pi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Pi(a);for(var r=a.firstChild;r;){var o=r.nextSibling,l=r.nodeName;r[fn]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=o}}else a==="body"&&Pi(e.ownerDocument.body);a=n}while(a);si(t)}function L0(e,t){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function Fl(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Fl(a),$l(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Qg(e,t,a,i){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[fn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=We(e.nextSibling),e===null)break}return null}function Kg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=We(e.nextSibling),e===null))return null;return e}function yp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=We(e.nextSibling),e===null))return null;return e}function Yl(e){return e.data==="$?"||e.data==="$~"}function Vl(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Jg(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function We(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Wl=null;function D0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return We(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function O0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function wp(e,t,a){switch(t=Rr(a),e){case"html":if(e=t.documentElement,!e)throw Error(b(452));return e;case"head":if(e=t.head,!e)throw Error(b(453));return e;case"body":if(e=t.body,!e)throw Error(b(454));return e;default:throw Error(b(451))}}function Pi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);$l(e)}var Xe=new Map,B0=new Set;function Lr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Tt=q.d;q.d={f:$g,r:em,D:tm,C:am,L:im,m:nm,X:om,S:rm,M:lm};function $g(){var e=Tt.f(),t=Zr();return e||t}function em(e){var t=di(e);t!==null&&t.tag===5&&t.type==="form"?hu(t):Tt.r(e)}var hi=typeof document>"u"?null:document;function kp(e,t,a){var i=hi;if(i&&typeof t=="string"&&t){var n=je(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),B0.has(n)||(B0.add(n),e={rel:e,crossOrigin:a,href:t},i.querySelector(n)===null&&(t=i.createElement("link"),he(t,"link",e),se(t),i.head.appendChild(t)))}}function tm(e){Tt.D(e),kp("dns-prefetch",e,null)}function am(e,t){Tt.C(e,t),kp("preconnect",e,t)}function im(e,t,a){Tt.L(e,t,a);var i=hi;if(i&&e&&t){var n='link[rel="preload"][as="'+je(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+je(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+je(a.imageSizes)+'"]')):n+='[href="'+je(e)+'"]';var r=n;switch(t){case"style":r=li(e);break;case"script":r=gi(e)}Xe.has(r)||(e=I({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Xe.set(r,e),i.querySelector(n)!==null||t==="style"&&i.querySelector(xn(r))||t==="script"&&i.querySelector(yn(r))||(t=i.createElement("link"),he(t,"link",e),se(t),i.head.appendChild(t)))}}function nm(e,t){Tt.m(e,t);var a=hi;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+je(i)+'"][href="'+je(e)+'"]',r=n;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=gi(e)}if(!Xe.has(r)&&(e=I({rel:"modulepreload",href:e},t),Xe.set(r,e),a.querySelector(n)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yn(r)))return}i=a.createElement("link"),he(i,"link",e),se(i),a.head.appendChild(i)}}}function rm(e,t,a){Tt.S(e,t,a);var i=hi;if(i&&e){var n=Wa(i).hoistableStyles,r=li(e);t=t||"default";var o=n.get(r);if(!o){var l={loading:0,preload:null};if(o=i.querySelector(xn(r)))l.loading=5;else{e=I({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Xe.get(r))&&Ns(e,a);var s=o=i.createElement("link");se(s),he(s,"link",e),s._p=new Promise(function(p,g){s.onload=p,s.onerror=g}),s.addEventListener("load",function(){l.loading|=1}),s.addEventListener("error",function(){l.loading|=2}),l.loading|=4,nr(o,t,i)}o={type:"stylesheet",instance:o,count:1,state:l},n.set(r,o)}}}function om(e,t){Tt.X(e,t);var a=hi;if(a&&e){var i=Wa(a).hoistableScripts,n=gi(e),r=i.get(n);r||(r=a.querySelector(yn(n)),r||(e=I({src:e,async:!0},t),(t=Xe.get(n))&&Us(e,t),r=a.createElement("script"),se(r),he(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(n,r))}}function lm(e,t){Tt.M(e,t);var a=hi;if(a&&e){var i=Wa(a).hoistableScripts,n=gi(e),r=i.get(n);r||(r=a.querySelector(yn(n)),r||(e=I({src:e,async:!0,type:"module"},t),(t=Xe.get(n))&&Us(e,t),r=a.createElement("script"),se(r),he(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(n,r))}}function H0(e,t,a,i){var n=(n=jt.current)?Lr(n):null;if(!n)throw Error(b(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=li(a.href),a=Wa(n).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=li(a.href);var r=Wa(n).hoistableStyles,o=r.get(e);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,o),(r=n.querySelector(xn(e)))&&!r._p&&(o.instance=r,o.state.loading=5),Xe.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Xe.set(e,a),r||sm(n,e,a,o.state))),t&&i===null)throw Error(b(528,""));return o}if(t&&i!==null)throw Error(b(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=gi(a),a=Wa(n).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(b(444,e))}}function li(e){return'href="'+je(e)+'"'}function xn(e){return'link[rel="stylesheet"]['+e+"]"}function Sp(e){return I({},e,{"data-precedence":e.precedence,precedence:null})}function sm(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),he(t,"link",a),se(t),e.head.appendChild(t))}function gi(e){return'[src="'+je(e)+'"]'}function yn(e){return"script[async]"+e}function q0(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+je(a.href)+'"]');if(i)return t.instance=i,se(i),i;var n=I({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),se(i),he(i,"style",n),nr(i,a.precedence,e),t.instance=i;case"stylesheet":n=li(a.href);var r=e.querySelector(xn(n));if(r)return t.state.loading|=4,t.instance=r,se(r),r;i=Sp(a),(n=Xe.get(n))&&Ns(i,n),r=(e.ownerDocument||e).createElement("link"),se(r);var o=r;return o._p=new Promise(function(l,s){o.onload=l,o.onerror=s}),he(r,"link",i),t.state.loading|=4,nr(r,a.precedence,e),t.instance=r;case"script":return r=gi(a.src),(n=e.querySelector(yn(r)))?(t.instance=n,se(n),n):(i=a,(n=Xe.get(r))&&(i=I({},a),Us(i,n)),e=e.ownerDocument||e,n=e.createElement("script"),se(n),he(n,"link",i),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(b(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,nr(i,a.precedence,e));return t.instance}function nr(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=i.length?i[i.length-1]:null,r=n,o=0;o<i.length;o++){var l=i[o];if(l.dataset.precedence===t)r=l;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Ns(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Us(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var rr=null;function N0(e,t,a){if(rr===null){var i=new Map,n=rr=new Map;n.set(a,i)}else n=rr,i=n.get(a),i||(i=new Map,n.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var r=a[n];if(!(r[fn]||r[ue]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(t)||"";o=e+o;var l=i.get(o);l?l.push(r):i.set(o,[r])}}return i}function U0(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function cm(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function _p(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function dm(e,t,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=li(i.href),r=t.querySelector(xn(n));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Dr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,se(r);return}r=t.ownerDocument||t,i=Sp(i),(n=Xe.get(n))&&Ns(i,n),r=r.createElement("link"),se(r);var o=r;o._p=new Promise(function(l,s){o.onload=l,o.onerror=s}),he(r,"link",i),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Dr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Jo=0;function um(e,t){return e.stylesheets&&e.count===0&&or(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&or(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Jo===0&&(Jo=62500*Wg());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&or(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Jo?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(n)}}:null}function Dr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)or(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Or=null;function or(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Or=new Map,t.forEach(pm,e),Or=null,Dr.call(e))}function pm(e,t){if(!(t.state.loading&4)){var a=Or.get(e);if(a)var i=a.get(null);else{a=new Map,Or.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var o=n[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),i=o)}i&&a.set(null,i)}n=t.instance,o=n.getAttribute("data-precedence"),r=a.get(o)||i,r===i&&a.set(null,n),a.set(o,n),this.count++,i=Dr.bind(this),n.addEventListener("load",i),n.addEventListener("error",i),r?r.parentNode.insertBefore(n,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var on={$$typeof:ht,Provider:null,Consumer:null,_currentValue:sa,_currentValue2:sa,_threadCount:0};function fm(e,t,a,i,n,r,o,l,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_o(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_o(0),this.hiddenUpdates=_o(null),this.identifierPrefix=i,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Tp(e,t,a,i,n,r,o,l,s,p,g,v){return e=new fm(e,t,a,o,s,p,g,v,l),t=1,r===!0&&(t|=24),r=Me(3,null,null,t),e.current=r,r.stateNode=e,t=us(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:a,cache:t},hs(r),e}function Ep(e){return e?(e=ja,e):ja}function Ap(e,t,a,i,n,r){n=Ep(n),i.context===null?i.context=n:i.pendingContext=n,i=Yt(t),i.payload={element:a},r=r===void 0?null:r,r!==null&&(i.callback=r),a=Vt(e,i,t),a!==null&&(Se(a,e,t),Ui(a,e,t))}function G0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Gs(e,t){G0(e,t),(e=e.alternate)&&G0(e,t)}function Mp(e){if(e.tag===13||e.tag===31){var t=wa(e,67108864);t!==null&&Se(t,e,67108864),Gs(e,67108864)}}function j0(e){if(e.tag===13||e.tag===31){var t=De();t=Kl(t);var a=wa(e,t);a!==null&&Se(a,e,t),Gs(e,t)}}var Br=!0;function hm(e,t,a,i){var n=S.T;S.T=null;var r=q.p;try{q.p=2,js(e,t,a,i)}finally{q.p=r,S.T=n}}function gm(e,t,a,i){var n=S.T;S.T=null;var r=q.p;try{q.p=8,js(e,t,a,i)}finally{q.p=r,S.T=n}}function js(e,t,a,i){if(Br){var n=Xl(i);if(n===null)Qo(e,t,i,Hr,a),F0(e,i);else if(vm(n,e,t,a,i))i.stopPropagation();else if(F0(e,i),t&4&&-1<mm.indexOf(e)){for(;n!==null;){var r=di(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=ra(r.pendingLanes);if(o!==0){var l=r;for(l.pendingLanes|=2,l.entangledLanes|=2;o;){var s=1<<31-Le(o);l.entanglements[1]|=s,o&=~s}nt(r),(H&6)===0&&(Tr=ze()+500,bn(0,!1))}}break;case 31:case 13:l=wa(r,2),l!==null&&Se(l,r,2),Zr(),Gs(r,2)}if(r=Xl(i),r===null&&Qo(e,t,i,Hr,a),r===n)break;n=r}n!==null&&i.stopPropagation()}else Qo(e,t,i,null,a)}}function Xl(e){return e=ts(e),Fs(e)}var Hr=null;function Fs(e){if(Hr=null,e=Ba(e),e!==null){var t=cn(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=I0(t),e!==null)return e;e=null}else if(a===31){if(e=Z0(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Hr=e,null}function Cp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ih()){case $0:return 2;case ed:return 8;case ur:case nh:return 32;case td:return 268435456;default:return 32}default:return 32}}var Pl=!1,Pt=null,It=null,Zt=null,ln=new Map,sn=new Map,Bt=[],mm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function F0(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":ln.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":sn.delete(t.pointerId)}}function Mi(e,t,a,i,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:r,targetContainers:[n]},t!==null&&(t=di(t),t!==null&&Mp(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function vm(e,t,a,i,n){switch(t){case"focusin":return Pt=Mi(Pt,e,t,a,i,n),!0;case"dragenter":return It=Mi(It,e,t,a,i,n),!0;case"mouseover":return Zt=Mi(Zt,e,t,a,i,n),!0;case"pointerover":var r=n.pointerId;return ln.set(r,Mi(ln.get(r)||null,e,t,a,i,n)),!0;case"gotpointercapture":return r=n.pointerId,sn.set(r,Mi(sn.get(r)||null,e,t,a,i,n)),!0}return!1}function zp(e){var t=Ba(e.target);if(t!==null){var a=cn(t);if(a!==null){if(t=a.tag,t===13){if(t=I0(a),t!==null){e.blockedOn=t,Tc(e.priority,function(){j0(a)});return}}else if(t===31){if(t=Z0(a),t!==null){e.blockedOn=t,Tc(e.priority,function(){j0(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Xl(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);ul=i,a.target.dispatchEvent(i),ul=null}else return t=di(a),t!==null&&Mp(t),e.blockedOn=a,!1;t.shift()}return!0}function Y0(e,t,a){lr(e)&&a.delete(t)}function bm(){Pl=!1,Pt!==null&&lr(Pt)&&(Pt=null),It!==null&&lr(It)&&(It=null),Zt!==null&&lr(Zt)&&(Zt=null),ln.forEach(Y0),sn.forEach(Y0)}function Wn(e,t){e.blockedOn===t&&(e.blockedOn=null,Pl||(Pl=!0,oe.unstable_scheduleCallback(oe.unstable_NormalPriority,bm)))}var Xn=null;function V0(e){Xn!==e&&(Xn=e,oe.unstable_scheduleCallback(oe.unstable_NormalPriority,function(){Xn===e&&(Xn=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],n=e[t+2];if(typeof i!="function"){if(Fs(i||a)===null)continue;break}var r=di(a);r!==null&&(e.splice(t,3),t-=3,Al(r,{pending:!0,data:n,method:a.method,action:i},i,n))}}))}function si(e){function t(s){return Wn(s,e)}Pt!==null&&Wn(Pt,e),It!==null&&Wn(It,e),Zt!==null&&Wn(Zt,e),ln.forEach(t),sn.forEach(t);for(var a=0;a<Bt.length;a++){var i=Bt[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Bt.length&&(a=Bt[0],a.blockedOn===null);)zp(a),a.blockedOn===null&&Bt.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var n=a[i],r=a[i+1],o=n[_e]||null;if(typeof r=="function")o||V0(a);else if(o){var l=null;if(r&&r.hasAttribute("formAction")){if(n=r,o=r[_e]||null)l=o.formAction;else if(Fs(n)!==null)continue}else l=o.action;typeof l=="function"?a[i+1]=l:(a.splice(i,3),i-=3),V0(a)}}}function Rp(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Ys(e){this._internalRoot=e}Jr.prototype.render=Ys.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));var a=t.current,i=De();Ap(a,i,e,t,null,null)};Jr.prototype.unmount=Ys.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ap(e.current,2,null,e,null,null),Zr(),t[ci]=null}};function Jr(e){this._internalRoot=e}Jr.prototype.unstable_scheduleHydration=function(e){if(e){var t=od();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Bt.length&&t!==0&&t<Bt[a].priority;a++);Bt.splice(a,0,e),a===0&&zp(e)}};var W0=X0.version;if(W0!=="19.2.6")throw Error(b(527,W0,"19.2.6"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=Qf(t),e=e!==null?Q0(e):null,e=e===null?null:e.stateNode,e};var xm={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ci=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ci.isDisabled&&Ci.supportsFiber))try{dn=Ci.inject(xm),Re=Ci}catch{}var Ci;$r.createRoot=function(e,t){if(!P0(e))throw Error(b(299));var a=!1,i="",n=ku,r=Su,o=_u;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Tp(e,1,!1,null,null,a,i,null,n,r,o,Rp),e[ci]=t.current,qs(e),new Ys(t)};$r.hydrateRoot=function(e,t,a){if(!P0(e))throw Error(b(299));var i=!1,n="",r=ku,o=Su,l=_u,s=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(l=a.onRecoverableError),a.formState!==void 0&&(s=a.formState)),t=Tp(e,1,!0,t,a??null,i,n,s,r,o,l,Rp),t.context=Ep(null),a=t.current,i=De(),i=Kl(i),n=Yt(i),n.callback=null,Vt(a,n,i),a=i,t.current.lanes=a,pn(t,a),nt(t),e[ci]=t.current,qs(e),new Jr(t)};$r.version="19.2.6"});var Bp=Ke(($m,Op)=>{"use strict";function Dp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dp)}catch(e){console.error(e)}}Dp(),Op.exports=Lp()});var ff=Ke(eo=>{"use strict";var Sm=Symbol.for("react.transitional.element"),_m=Symbol.for("react.fragment");function pf(e,t,a){var i=null;if(a!==void 0&&(i=""+a),t.key!==void 0&&(i=""+t.key),"key"in t){a={};for(var n in t)n!=="key"&&(a[n]=t[n])}else a=t;return t=a.ref,{$$typeof:Sm,type:e,key:i,ref:t!==void 0?t:null,props:a}}eo.Fragment=_m;eo.jsx=pf;eo.jsxs=pf});var kn=Ke((R1,hf)=>{"use strict";hf.exports=ff()});var rt=aa(bi(),1),yf=aa(Bp(),1);var Et=aa(bi(),1);var Hp=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Aetheris Labs</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
</head>
<body class="bg-[#020208] text-white h-[100dvh] w-screen overflow-hidden font-['Inter'] relative flex flex-col justify-between selection:bg-[#00d2ff]/30 select-none antialiased" style="font-family: 'Inter', sans-serif;">
    
    <!-- Ambient Background WebGL -->
    <canvas id="bg-gl" class="absolute inset-0 w-full h-full z-0 opacity-0 transition-opacity duration-1000 ease-in" aria-hidden="true"></canvas>
    
    <!-- Vignette / Gradient Overlay -->
    <div class="absolute inset-0 z-0 pointer-events-none" style="background: radial-gradient(circle at 50% 50%, transparent 0%, #020208 100%); mix-blend-mode: multiply;"></div>

    <!-- Navigation -->
    <nav class="relative z-10 w-full px-8 py-6 flex justify-between items-center gs-fade">
        <div class="font-['Playfair_Display'] italic text-xl tracking-tight text-[#e2f1ff]">Aetheris.</div>
        
        <!-- Premium Gradient Border Pill -->
        <div style="padding: 1px; background: linear-gradient(180deg, rgba(226,241,255,0.15) 0%, rgba(226,241,255,0) 100%); border-radius: 9999px;">
            <div class="bg-[#080a14]/80 backdrop-blur-md rounded-full px-4 py-1.5 flex items-center gap-2" style="box-shadow: inset 0 1px 0 0 rgba(255,255,255,0.05);">
                <div class="w-1.5 h-1.5 rounded-full bg-[#00d2ff]" style="animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;"></div>
                <span class="text-xs font-normal text-[#e2f1ff]/60 tracking-widest uppercase">Drive Engaged</span>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
        
        <div class="gs-fade font-mono text-xs tracking-[0.3em] text-[#00d2ff] uppercase mb-8" style="font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;">
            SYS 09 / Cosmic Void
        </div>

        <!-- Masked Reveal Title -->
        <h1 class="text-5xl md:text-7xl font-medium tracking-tighter text-[#e2f1ff] mb-14 flex flex-col items-center gap-1 md:gap-3 drop-shadow-2xl">
            <div class="overflow-hidden pb-2"><span class="block translate-y-full gs-word">Access</span></div>
            <div class="overflow-hidden pb-2"><span class="block translate-y-full gs-word text-white/90">The Cosmos.</span></div>
        </h1>

        <div class="gs-scale-up">
            <!-- Quantum Aether Button -->
            <button id="btn" type="button" class="group relative flex items-center justify-center w-[250px] h-[70px] border-0 p-0 rounded-2xl overflow-hidden cursor-pointer bg-[#050b1a] outline-none transition-all duration-[220ms] ease-[cubic-bezier(0.34,1.4,0.5,1)] hover:-translate-y-[2px] active:translate-y-[1px] active:scale-[0.985] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00d2ff] focus-visible:outline-offset-[5px]" style="box-shadow: 0 24px 48px rgba(4, 98, 126, 0.2), 0 3px 10px rgba(2, 6, 20, 0.35);">
                <canvas id="gl" class="absolute inset-0 w-full h-full block group-[.nogl]:hidden" aria-hidden="true"></canvas>
                <div class="absolute inset-0 hidden group-[.nogl]:block" style="background: radial-gradient(130% 170% at 50% 118%, #61d3ff 0%, #33a7ff 24%, #084c8e 56%, #050a19 88%);"></div>
                <span class="relative z-10 pointer-events-none font-semibold text-sm tracking-[.26em] indent-[.26em] text-[#e2f1ff]" style="text-shadow: 0 1px 12px rgba(0, 16, 40, .85);">AETHER DRIVE</span>
            </button>
        </div>

        <p class="gs-fade text-sm text-[#e2f1ff]/40 tracking-wide mt-10 max-w-sm" style="line-height: 1.6;">
            Hover to accelerate the drive, press to initiate hyper jump.
        </p>
    </main>

    <!-- Footer -->
    <footer class="relative z-10 w-full px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 gs-fade text-xs text-[#e2f1ff]/30 tracking-wider">
        <span>\xA9 2025 Aetheris Labs</span>
        <div class="flex items-center gap-6">
            <a href="#" class="hover:text-[#e2f1ff]/70 transition-colors flex items-center gap-1.5">
                <iconify-icon icon="solar:document-text-linear" stroke-width="1.5" class="text-sm"></iconify-icon>
                Terms
            </a>
            <a href="#" class="hover:text-[#e2f1ff]/70 transition-colors flex items-center gap-1.5">
                <iconify-icon icon="solar:lock-keyhole-linear" stroke-width="1.5" class="text-sm"></iconify-icon>
                Privacy
            </a>
        </div>
    </footer>

    <!-- GSAP Animations -->
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            gsap.set(".gs-word", { y: "100%" });
            gsap.set(".gs-fade", { opacity: 0, y: 15 });
            gsap.set(".gs-scale-up", { opacity: 0, scale: 0.85, y: 20 });

            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            // Reveal words
            tl.to(".gs-word", {
                y: "0%",
                duration: 1.2,
                stagger: 0.15,
                delay: 0.2
            })
            // Fade in nav and tag
            .to(".gs-fade", {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.1
            }, "-=0.8")
            // Pop in the button
            .to(".gs-scale-up", {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1.2,
                ease: "back.out(1.2)"
            }, "-=0.6");

            // Fade in ambient background
            document.getElementById('bg-gl').style.opacity = '0.45';
        });
    <\/script>

    <!-- WebGL Ambient Cosmic Background -->
    <script>
    (function () {
        var canvas = document.getElementById('bg-gl');
        var gl = canvas.getContext('webgl');
        if (!gl) return;

        var VS = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
        var FS = [
            'precision highp float;',
            'uniform vec2 u_res;',
            'uniform float u_time;',
            'float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}',
            'float noise(vec2 p){',
            '  vec2 i=floor(p), f=fract(p);',
            '  vec2 u=f*f*(3.0-2.0*f);',
            '  return mix(mix(hash(i),hash(i+vec2(1.,0.)),u.x),',
            '             mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),u.x),u.y);',
            '}',
            'float fbm(vec2 p){',
            '  float v=0.0; float a=0.5;',
            '  for(int i=0;i<5;i++){ v+=a*noise(p); p=p*2.02+vec2(17.3,9.1); a*=0.5; }',
            '  return v;',
            '}',
            'void main(){',
            '  vec2 uv = gl_FragCoord.xy / u_res;',
            '  vec2 p = uv * vec2(u_res.x/u_res.y, 1.0) * 1.5;',
            '  float t = u_time * 0.12;',
            '  vec2 q = vec2(fbm(p + vec2(0.0, t*0.28)), fbm(p + vec2(4.1, t*0.23)));',
            '  vec2 r = vec2(fbm(p + 1.5*q + vec2(2.1, 7.2) + t*0.1),',
            '                fbm(p + 1.4*q + vec2(5.3, 3.1) + t*0.07));',
            '  float v = fbm(p + 1.9*r);',
            '  float m = v*1.3;',
            '  vec3 c1 = vec3(0.002, 0.004, 0.015);',
            '  vec3 c2 = vec3(0.006, 0.018, 0.05);',
            '  vec3 c3 = vec3(0.02, 0.07, 0.18);',
            '  vec3 col = mix(c1, c2, smoothstep(0.1, 0.6, m));',
            '  col = mix(col, c3, smoothstep(0.6, 1.0, m));',
            '  float vein = exp(-abs(q.x - q.y) * 5.0);',
            '  col += c3 * vein * 0.12;',
            '  gl_FragColor = vec4(col, 1.0);',
            '}'
        ].join('\\n');

        function compile(type, src) {
            var s = gl.createShader(type);
            gl.shaderSource(s, src);
            gl.compileShader(s);
            return s;
        }
        var prog = gl.createProgram();
        gl.attachShader(prog, compile(gl.VERTEX_SHADER, VS));
        gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FS));
        gl.linkProgram(prog);
        gl.useProgram(prog);

        var buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
        var locP = gl.getAttribLocation(prog, 'p');
        gl.enableVertexAttribArray(locP);
        gl.vertexAttribPointer(locP, 2, gl.FLOAT, false, 0, 0);

        var uRes = gl.getUniformLocation(prog, 'u_res');
        var uTime = gl.getUniformLocation(prog, 'u_time');

        function resize() {
            var w = canvas.clientWidth;
            var h = canvas.clientHeight;
            if (canvas.width !== w || canvas.height !== h) {
                canvas.width = w;
                canvas.height = h;
                gl.viewport(0, 0, w, h);
            }
        }
        window.addEventListener('resize', resize);
        resize();

        function frame(now) {
            resize();
            gl.uniform2f(uRes, canvas.width, canvas.height);
            gl.uniform1f(uTime, now / 1000);
            gl.drawArrays(gl.TRIANGLES, 0, 3);
            requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
    })();
    <\/script>

    <!-- WebGL Aether Engine Button -->
    <script>
    (function () {
        var btn = document.getElementById('btn');
        var canvas = document.getElementById('gl');
        var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        var gl = canvas.getContext('webgl');
        if (!gl) { btn.classList.add('nogl'); return; }

        var hoverStyles = "0 30px 60px rgba(0, 150, 220, 0.35), 0 4px 12px rgba(2, 6, 20, 0.4)";
        var defaultStyles = "0 24px 48px rgba(4, 98, 126, 0.2), 0 3px 10px rgba(2, 6, 20, 0.35)";
        
        btn.addEventListener('mouseenter', () => { if(!reduced) btn.style.boxShadow = hoverStyles; });
        btn.addEventListener('mouseleave', () => { if(!reduced) btn.style.boxShadow = defaultStyles; });
        btn.addEventListener('focus', () => { if(!reduced) btn.style.boxShadow = hoverStyles; });
        btn.addEventListener('blur', () => { if(!reduced) btn.style.boxShadow = defaultStyles; });

        var VS = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
        var FS = [
            'precision highp float;',
            'uniform vec2 u_res;',
            'uniform float u_time;',
            'uniform float u_heat;',
            'uniform float u_flash;',
            'float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}',
            'float noise(vec2 p){',
            '  vec2 i=floor(p), f=fract(p);',
            '  vec2 u=f*f*(3.0-2.0*f);',
            '  return mix(mix(hash(i),hash(i+vec2(1.,0.)),u.x),',
            '             mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),u.x),u.y);',
            '}',
            'float fbm(vec2 p){',
            '  float v=0.0; float a=0.5;',
            '  for(int i=0;i<5;i++){ v+=a*noise(p); p=p*2.02+vec2(17.3,9.1); a*=0.5; }',
            '  return v;',
            '}',
            'void main(){',
            '  vec2 uv = gl_FragCoord.xy / u_res;',
            '  vec2 p = uv * vec2(u_res.x/u_res.y, 1.0) * 2.1;',
            '  float t = u_time;',
            '  float heat = u_heat + u_flash * 1.3;',
            '  vec2 q = vec2(fbm(p + vec2(0.0, t*0.32)), fbm(p + vec2(5.2, t*0.27)));',
            '  vec2 r = vec2(fbm(p + 1.7*q + vec2(1.7, 9.2) + t*0.12),',
            '                fbm(p + 1.6*q + vec2(8.3, 2.8) + t*0.09));',
            '  float v = fbm(p + 2.1*r);',
            '  float m = v*1.4 + heat*0.22;',
            '  vec3 c1 = vec3(0.004, 0.008, 0.035);',
            '  vec3 c2 = vec3(0.04, 0.08, 0.35);',
            '  vec3 c3 = vec3(0.0, 0.6, 1.0);',
            '  vec3 c4 = vec3(0.7, 0.9, 1.0);',
            '  vec3 col = mix(c1, c2, smoothstep(0.2, 0.52, m));',
            '  col = mix(col, c3, smoothstep(0.52, 0.8, m));',
            '  col = mix(col, c4, smoothstep(0.82, 1.02, m));',
            '  float vein = exp(-abs(q.x - q.y) * 9.0);',
            '  col += c3 * vein * (0.12 + heat * 0.25);',
            '  vec2 e = uv * (1.0 - uv);',
            '  float vig = pow(e.x * e.y * 16.0, 0.28);',
            '  col *= mix(0.5, 1.0, vig);',
            '  col *= 0.78 + heat * 0.5;',
            '  col += vec3(0.82, 0.94, 1.0) * u_flash * 0.4 * (0.3 + v);',
            '  gl_FragColor = vec4(col, 1.0);',
            '}'
        ].join('\\n');

        function compile(type, src) {
            var s = gl.createShader(type);
            gl.shaderSource(s, src);
            gl.compileShader(s);
            return s;
        }
        var prog = gl.createProgram();
        gl.attachShader(prog, compile(gl.VERTEX_SHADER, VS));
        gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FS));
        gl.linkProgram(prog);
        gl.useProgram(prog);

        var buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
        var locP = gl.getAttribLocation(prog, 'p');
        gl.enableVertexAttribArray(locP);
        gl.vertexAttribPointer(locP, 2, gl.FLOAT, false, 0, 0);

        var uRes = gl.getUniformLocation(prog, 'u_res');
        var uTime = gl.getUniformLocation(prog, 'u_time');
        var uHeat = gl.getUniformLocation(prog, 'u_heat');
        var uFlash = gl.getUniformLocation(prog, 'u_flash');

        function resize() {
            var dpr = Math.min(window.devicePixelRatio || 1, 2);
            var w = Math.max(1, Math.round(canvas.clientWidth * dpr));
            var h = Math.max(1, Math.round(canvas.clientHeight * dpr));
            if (canvas.width !== w || canvas.height !== h) {
                canvas.width = w;
                canvas.height = h;
                gl.viewport(0, 0, w, h);
            }
        }
        window.addEventListener('resize', resize);
        resize();

        var heat = 0, heatTarget = 0, erupt = 0;
        var churn = 0;
        var last = performance.now();

        btn.addEventListener('mouseenter', function () { heatTarget = 1; });
        btn.addEventListener('mouseleave', function () { heatTarget = 0; });
        btn.addEventListener('focus', function () { heatTarget = 1; });
        btn.addEventListener('blur', function () { heatTarget = 0; });
        btn.addEventListener('mousedown', function () { erupt = 1; });
        btn.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') erupt = 1;
        });

        function frame(now) {
            var dt = Math.min(0.05, (now - last) / 1000);
            last = now;
            heat += (heatTarget - heat) * Math.min(1, dt * 6);
            erupt *= Math.exp(-3.2 * dt);
            churn += dt * (0.35 + heat * 1.1 + erupt * 2.2);
            resize();
            gl.uniform2f(uRes, canvas.width, canvas.height);
            gl.uniform1f(uTime, reduced ? 6.0 : churn);
            gl.uniform1f(uHeat, heat);
            gl.uniform1f(uFlash, erupt);
            gl.drawArrays(gl.TRIANGLES, 0, 3);
            requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
    })();
    <\/script>
</body>
</html>`;var qp=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Supreme Radio \u2014 Graphic Identity</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{height:100%;background:#000;overflow:hidden}
  body{font-family:"Helvetica Neue",Helvetica,Arial,"Hiragino Sans","Hiragino Kaku Gothic ProN","Yu Gothic",sans-serif;-webkit-font-smoothing:antialiased}
  #stage{
    position:fixed;left:50%;top:50%;width:1080px;height:1350px;
    transform:translate(-50%,-50%);transform-origin:center;
    background:#000;overflow:hidden;color:#E8EEE9;
  }
  .scene{position:absolute;inset:0;opacity:0;pointer-events:none;will-change:opacity}
  .scene.on{pointer-events:auto}
  canvas#viz{position:absolute;inset:0}
  .overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:2}
  .sr{
    font-weight:800;font-size:54px;letter-spacing:-.045em;line-height:1;
    display:flex;align-items:center;gap:14px;white-space:nowrap;
  }
  .sr .word{display:flex;align-items:baseline;gap:12px}
  .icons{display:flex;align-items:center;gap:10px;margin-left:4px}
  .icons svg{display:block}

  #reelWrap{position:absolute;left:50%;top:50%;width:860px;height:860px;margin:-430px 0 0 -430px}
  #reel{width:860px;height:860px;transform-origin:430px 430px;will-change:transform}

  .lock{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0}
  .lock .top-icons{display:flex;gap:18px;margin-bottom:36px}
  .cat{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:15px;letter-spacing:.18em;margin-bottom:18px;font-weight:500}
  .bpm{
    font-weight:900;font-size:210px;letter-spacing:-.06em;line-height:.82;
    transform:scaleX(.78);font-stretch:condensed;position:relative;
    color:#E3EDE5;
  }
  .bpm sup{font-size:28px;position:absolute;right:-28px;top:18px;transform:scaleX(1.28);font-weight:700}
  .meta{
    margin-top:28px;text-align:center;
    font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;
    font-size:15px;letter-spacing:.12em;line-height:1.7;font-weight:500;
  }
  .marks{display:flex;align-items:flex-end;justify-content:center;gap:54px;margin-top:64px}
  .jp{margin-top:48px;font-size:18px;letter-spacing:.12em;font-weight:500}

  .venn-wrap{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
  .venn{position:relative;width:560px;height:340px;margin:8px 0 28px}
  .ring{
    position:absolute;top:10px;width:320px;height:320px;border-radius:50%;
    border:7px solid #EA3927;box-sizing:border-box;
  }
  .ring.l{left:0}
  .ring.r{right:0}
  .letters{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:0;pointer-events:none}
  .letters span{
    width:186px;text-align:center;font-weight:800;font-size:92px;letter-spacing:-.04em;color:#E8EEE9;
  }
  .foot{text-align:center}
  .foot .sr2{font-weight:800;font-size:52px;letter-spacing:-.045em;margin-bottom:18px}
  .foot .sub{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:13px;letter-spacing:.22em;color:#c9d4cc;line-height:1.7}
  .ww{margin-top:36px}

  .grain{
    position:absolute;inset:0;pointer-events:none;z-index:8;opacity:.045;mix-blend-mode:overlay;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
  }
</style>
</head>
<body>
<div id="stage">
  <svg width="0" height="0" style="position:absolute">
    <defs>
      <g id="i3">
        <path d="M3 3.2h18.5a1.6 1.6 0 0 1 0 3.2H6.4v4.2h13.2a1.6 1.6 0 0 1 0 3.2H6.4v4.2h15.1a1.6 1.6 0 0 1 0 3.2H3.2A1.6 1.6 0 0 1 1.6 19V4.8A1.6 1.6 0 0 1 3.2 3.2Z" fill="currentColor"/>
      </g>
      <g id="iP">
        <circle cx="12" cy="12" r="10.2" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <text x="12" y="16.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" fill="currentColor">P</text>
      </g>
      <g id="iG">
        <circle cx="12" cy="12" r="10.2" fill="none" stroke="currentColor" stroke-width="1.5"/>
        <ellipse cx="12" cy="12" rx="4.2" ry="10.2" fill="none" stroke="currentColor" stroke-width="1.3"/>
        <path d="M2 12h20M4.2 7.2h15.6M4.2 16.8h15.6" fill="none" stroke="currentColor" stroke-width="1.2"/>
      </g>
      <g id="i1">
        <circle cx="12" cy="12" r="10.4" fill="currentColor"/>
        <text x="12" y="16.4" text-anchor="middle" font-size="12" font-weight="800" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" fill="#000">1</text>
      </g>
    </defs>
  </svg>

  <section class="scene" id="s1">
    <canvas id="viz" width="1080" height="1350"></canvas>
    <div class="overlay">
      <div class="sr" id="sr1">
        <span class="word">supreme radio</span>
        <span class="icons">
          <svg width="22" height="22" viewBox="0 0 24 24"><use href="#i3"/></svg>
          <svg width="22" height="22" viewBox="0 0 24 24"><use href="#iP"/></svg>
          <svg width="22" height="22" viewBox="0 0 24 24"><use href="#iG"/></svg>
          <svg width="22" height="22" viewBox="0 0 24 24"><use href="#i1"/></svg>
        </span>
      </div>
    </div>
  </section>

  <section class="scene" id="s2">
    <div id="reelWrap">
      <svg id="reel" viewBox="-430 -430 860 860">
        <defs>
          <mask id="rmask">
            <circle r="418" fill="#fff"/>
            <circle r="82" fill="#000"/>
            <g id="win">
              <path fill="#000" d="M-48 -148
                C -48 -168 -28 -176 0 -176
                C 28 -176 48 -168 48 -148
                L 70 -312
                C 70 -342 38 -358 0 -358
                C -38 -358 -70 -342 -70 -312 Z"/>
            </g>
            <use href="#win" transform="rotate(120)"/>
            <use href="#win" transform="rotate(240)"/>
            <circle cx="0" cy="-178" r="10" fill="#000"/>
            <circle cx="154" cy="89" r="10" fill="#000"/>
            <circle cx="-154" cy="89" r="10" fill="#000"/>
          </mask>
        </defs>
        <circle r="418" fill="#E3EDE5" mask="url(#rmask)"/>
        <g fill="#000">
          <rect x="-9" y="-98" width="18" height="16" rx="3"/>
          <rect x="-9" y="-98" width="18" height="16" rx="3" transform="rotate(120)"/>
          <rect x="-9" y="-98" width="18" height="16" rx="3" transform="rotate(240)"/>
        </g>
        <g fill="#000" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" text-anchor="middle">
          <g transform="translate(0,-250)">
            <g fill="none" stroke="#000" stroke-width="1.6">
              <circle r="22"/>
              <circle cx="16" r="22"/>
            </g>
            <text y="5" font-size="9" font-weight="800" fill="#000">BPM</text>
            <text y="38" font-size="8" font-weight="700" letter-spacing="1.6">WORLDWIDE</text>
            <text y="78" font-size="28" font-weight="800" letter-spacing="-1.2">supreme radio</text>
            <text y="102" font-size="9" font-weight="500">\xA92023 bpm supreme</text>
            <text y="124" font-size="13" font-weight="700" fill="#EA3927" font-family="Hiragino Sans, Yu Gothic, sans-serif">\u6BCE\u9031\u306E\u97F3\u697D</text>
          </g>
          <g transform="translate(-210,210)" text-anchor="start">
            <text font-size="11" font-weight="500">Catalogue No.</text>
            <text y="22" font-size="15" font-weight="800">\u2117BPM154\u2014LP2023</text>
            <g transform="translate(0,42)" fill="#EA3927">
              <use href="#i3" transform="scale(.9)"/>
              <use href="#iP" transform="translate(28,0) scale(.9)"/>
              <use href="#iG" transform="translate(56,0) scale(.9)"/>
              <use href="#i1" transform="translate(84,0) scale(.9)"/>
            </g>
          </g>
          <g transform="translate(168,188)" text-anchor="start">
            <g fill="#000" transform="scale(1.35)"><use href="#i3"/></g>
            <text y="48" font-size="12" font-weight="500">Episode No.</text>
            <text y="108" font-size="72" font-weight="800" letter-spacing="-2">154</text>
          </g>
        </g>
      </svg>
    </div>
  </section>

  <section class="scene" id="s3">
    <div class="lock" id="lock">
      <div class="top-icons">
        <svg width="26" height="26" viewBox="0 0 24 24"><use href="#i3"/></svg>
        <svg width="26" height="26" viewBox="0 0 24 24"><use href="#iP"/></svg>
        <svg width="26" height="26" viewBox="0 0 24 24"><use href="#iG"/></svg>
        <svg width="26" height="26" viewBox="0 0 24 24"><use href="#i1"/></svg>
      </div>
      <div class="cat">CATALOGUE SR/1.0</div>
      <div class="bpm">BPM<sup>\xAE</sup></div>
      <div class="meta">HERE FOR THE MUSIC.<br>LOS ANGELES, CALIFORNIA<br>WWW.BPMMUSIC.IO<br>WORLDWIDE \xA9 2023<br>MADE IN USA</div>
      <div class="marks">
        <svg width="120" height="78" viewBox="0 0 120 78">
          <g fill="none" stroke="#E3EDE5" stroke-width="1.7">
            <circle cx="48" cy="28" r="26"/>
            <circle cx="72" cy="28" r="26"/>
            <ellipse cx="60" cy="28" rx="10" ry="26"/>
          </g>
          <text x="60" y="32" text-anchor="middle" fill="#E3EDE5" font-size="11" font-weight="800" font-family="Helvetica Neue, Helvetica, Arial, sans-serif">BPM</text>
          <text x="60" y="72" text-anchor="middle" fill="#E3EDE5" font-size="9" font-weight="700" letter-spacing="2.2" font-family="ui-monospace, Menlo, monospace">WORLDWIDE</text>
        </svg>
        <svg width="44" height="44" viewBox="0 0 24 24"><use href="#i3"/></svg>
        <svg width="148" height="64" viewBox="0 0 148 64">
          <rect x="1" y="1" width="146" height="50" rx="6" fill="none" stroke="#E3EDE5" stroke-width="1.6"/>
          <g transform="translate(10,8)" fill="#E3EDE5"><use href="#i3"/></g>
          <g transform="translate(38,8)" fill="#E3EDE5"><use href="#iP"/></g>
          <g transform="translate(108,6)" fill="#E3EDE5" stroke="#E3EDE5"><use href="#iG"/></g>
          <rect x="10" y="34" width="72" height="14" rx="2" fill="#E3EDE5"/>
          <text x="46" y="45" text-anchor="middle" font-size="9" font-weight="700" fill="#000" font-family="Helvetica Neue, Helvetica, Arial, sans-serif">bpm radio</text>
          <text x="142" y="12" font-size="10" fill="#E3EDE5">\xAE</text>
        </svg>
      </div>
      <div class="jp">\u6BCE\u9031\u306E\u97F3\u697D</div>
    </div>
  </section>

  <section class="scene" id="s4">
    <div class="venn-wrap">
      <div class="top-icons" style="display:flex;gap:18px;margin-bottom:28px">
        <svg width="24" height="24" viewBox="0 0 24 24"><use href="#i3"/></svg>
        <svg width="24" height="24" viewBox="0 0 24 24"><use href="#iP"/></svg>
        <svg width="24" height="24" viewBox="0 0 24 24"><use href="#iG"/></svg>
        <svg width="24" height="24" viewBox="0 0 24 24"><use href="#i1"/></svg>
      </div>
      <div class="venn">
        <div class="ring l" id="ringL"></div>
        <div class="ring r" id="ringR"></div>
        <div class="letters" id="bpmLetters"><span>B</span><span>P</span><span>M</span></div>
      </div>
      <div class="foot">
        <div class="sr2" id="sr2">supreme radio</div>
        <div class="sub">ANALOGOUS SOUNDS<br>SR/1.0</div>
        <svg class="ww" width="110" height="70" viewBox="0 0 120 78">
          <g fill="none" stroke="#E3EDE5" stroke-width="1.7">
            <circle cx="48" cy="28" r="26"/>
            <circle cx="72" cy="28" r="26"/>
            <ellipse cx="60" cy="28" rx="10" ry="26"/>
          </g>
          <text x="60" y="32" text-anchor="middle" fill="#E3EDE5" font-size="11" font-weight="800" font-family="Helvetica Neue, Helvetica, Arial, sans-serif">BPM</text>
          <text x="60" y="72" text-anchor="middle" fill="#E3EDE5" font-size="9" font-weight="700" letter-spacing="2.2" font-family="ui-monospace, Menlo, monospace">WORLDWIDE</text>
        </svg>
      </div>
    </div>
  </section>
  <div class="grain"></div>
</div>
<script>
(function(){
  var DUR = 20;
  var HOLD = 4.7;
  var FADE = 0.3;
  var stage = document.getElementById("stage");
  var scenes = [document.getElementById("s1"), document.getElementById("s2"), document.getElementById("s3"), document.getElementById("s4")];
  var canvas = document.getElementById("viz");
  var ctx = canvas.getContext("2d");
  var reel = document.getElementById("reel");
  var lock = document.getElementById("lock");
  var ringL = document.getElementById("ringL");
  var ringR = document.getElementById("ringR");
  var letters = document.getElementById("bpmLetters");
  var sr1 = document.getElementById("sr1");
  var sr2 = document.getElementById("sr2");

  function sat(x){ return x<0?0:x>1?1:x; }
  function lerp(a,b,t){ return a+(b-a)*t; }
  function easeOut(t){ t=sat(t); return 1-Math.pow(1-t,3); }
  function easeInOut(t){ t=sat(t); return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2; }
  function backOut(t){ t=sat(t); var c1=1.70158,c3=c1+1; return 1+c3*Math.pow(t-1,3)+c1*Math.pow(t-1,2); }

  function fit(){
    var s = Math.min(innerWidth/1080, innerHeight/1350);
    stage.style.transform = "translate(-50%,-50%) scale("+s+")";
  }

  function drawViz(t){
    var w=1080,h=1350;
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle="#000";
    ctx.fillRect(0,0,w,h);
    var cx=540, cy=675, r=156, gap=148;
    drawBars(cx-gap, cy, r, t, false);
    drawBars(cx+gap, cy, r, t+1.7, true);
  }

  function drawBars(cx, cy, r, t, inverse){
    var n = inverse ? 16 : 22;
    var pitch = (r*2) / n;
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI*2);
    ctx.clip();
    if (inverse){
      ctx.fillStyle="#EA3927";
      ctx.fill();
      ctx.globalCompositeOperation="destination-out";
      ctx.fillStyle="#000";
    } else {
      ctx.fillStyle="#EA3927";
    }
    for (var i=0;i<n;i++){
      var x = -r + (i+0.5)*pitch;
      var maxH = Math.sqrt(Math.max(0, r*r - x*x)) * 2;
      if (maxH < 6) continue;
      var pulse = 0.78 + 0.22*Math.sin(t*6.4 + i*0.62)*Math.sin(t*2.4 + i*0.17);
      var hh = inverse ? maxH : maxH;
      var bw = (inverse ? pitch*0.38 : pitch*0.62) * (inverse ? 1 : pulse);
      var px = cx + x - bw/2;
      var py = cy - hh/2;
      roundRect(px, py, Math.max(2,bw), hh, Math.min(bw, hh)*0.45);
      ctx.fill();
    }
    ctx.restore();
    ctx.globalCompositeOperation="source-over";
  }

  function roundRect(x,y,w,h,r){
    r=Math.min(r,w/2,h/2);
    ctx.beginPath();
    ctx.moveTo(x+r,y);
    ctx.arcTo(x+w,y,x+w,y+h,r);
    ctx.arcTo(x+w,y+h,x,y+h,r);
    ctx.arcTo(x,y+h,x,y,r);
    ctx.arcTo(x,y,x+w,y,r);
    ctx.closePath();
  }

  function sceneAt(t){
    var slot = HOLD + FADE;
    var i = Math.floor(t / slot) % 4;
    var local = t - i*slot;
    var fadeOut = sat((local - HOLD)/FADE);
    var fadeIn = local < FADE ? sat(local/FADE) : 1;
    return {i:i, local:local, fadeIn:fadeIn, fadeOut:fadeOut, op: fadeIn*(1-fadeOut)};
  }

  function apply(t){
    t = ((t % DUR)+DUR)%DUR;
    var s = sceneAt(t);
    for (var k=0;k<4;k++){
      scenes[k].style.opacity = k===s.i ? String(s.op) : "0";
      scenes[k].classList.toggle("on", k===s.i && s.op>0.02);
    }
    var lt = s.local;

    if (s.i===0){
      drawViz(t);
      var p = easeOut(sat(lt/0.7));
      sr1.style.opacity = String(p);
      sr1.style.letterSpacing = lerp(0.18, -0.045, p) + "em";
    }
    if (s.i===1){
      reel.style.transform = "rotate(" + (lt*36) + "deg)";
    }
    if (s.i===2){
      var kids = lock.children;
      for (var k=0;k<kids.length;k++){
        var u = easeOut(sat((lt - k*0.09)/0.45));
        kids[k].style.opacity = String(u);
        kids[k].style.transform = "translateY(" + ((1-u)*14) + "px)";
      }
    }
    if (s.i===3){
      var u = easeInOut(sat(lt/0.9));
      ringL.style.transform = "translateX(" + lerp(-70,0,u) + "px)";
      ringR.style.transform = "translateX(" + lerp(70,0,u) + "px)";
      var lp = backOut(sat((lt-0.45)/0.5));
      letters.style.opacity = String(lp);
      letters.style.transform = "scale(" + lerp(0.72,1,lp) + ")";
      var tp = easeOut(sat((lt-0.7)/0.5));
      sr2.style.opacity = String(tp);
      sr2.style.letterSpacing = lerp(0.22, -0.045, tp) + "em";
    }
  }

  var tNow=0, playing=true, t0=performance.now();
  var params=new URLSearchParams(location.search);
  if (params.has("t")){ tNow=parseFloat(params.get("t"))||0; playing=false; }
  if (matchMedia("(prefers-reduced-motion: reduce)").matches){ playing=false; tNow=16.2; }

  function frame(now){
    if (playing && !document.hidden){
      tNow = ((now-t0)/1000) % DUR;
      apply(tNow);
    }
    requestAnimationFrame(frame);
  }
  window.addEventListener("resize", fit);
  document.addEventListener("visibilitychange", function(){
    if (!document.hidden && playing) t0=performance.now()-tNow*1000;
  });
  fit(); apply(tNow); requestAnimationFrame(frame);

  window.__DUR = DUR;
  window.__seek = function(t){ tNow=((t%DUR)+DUR)%DUR; playing=false; apply(tNow); };
  window.__play = function(){ t0=performance.now()-tNow*1000; playing=true; };
  window.__pause = function(){ playing=false; };
  window.__time = function(){ return tNow; };
})();
<\/script>
</body>
</html>
`;var Np=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Preview</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <style>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    body {
      height: 100%;
      overflow: auto;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #000000;
      color: #ffffff;
    }
    .component-wrapper {
      width: 100%;
      height: 100%;
      padding: 0;
      box-sizing: border-box;
      overflow: auto;
    }
  </style>
</head>
<body>
  <div class="component-wrapper">
    <html><head></head><body><div style="
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000; /* optional, just for visibility */
"><a href="#" class="btn-wrapper" style="--dot-size: 8px; --line-weight: 1px; --line-distance: 0.8rem 1rem; --animation-speed: 0.35s; --dot-color: #fffa; --line-color: #fffa; --grid-color: #fff3; position: relative; display: inline-flex; justify-content: center; align-items: center; width: auto; height: auto; padding: var(--line-distance); background-color: rgba(0, 0, 0, 0); user-select: none">
  <style>
    .btn-wrapper::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      pointer-events: none;
      background-color: #0000;
      background-image: repeating-linear-gradient(45deg, var(--grid-color) 0 1px, transparent 2px 5px);
      opacity: 0;
      z-index: -1;
    }

    .btn-wrapper:has(.btn:hover)::after {
      animation: opacity-anim calc(var(--animation-speed) * 4) ease-in-out forwards;
    }

    @keyframes opacity-anim {
      80% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    .btn-wrapper .btn {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.8rem 1.25rem;
      background-color: #fff0;
      border: 1px solid var(--grid-color);
      color: #fffd;
      font-family: "Inter", sans-serif;
      letter-spacing: -0.01em;
      font-size: 1rem;
      font-weight: 600;
      text-transform: capitalize;
      border-radius: 6px;
      cursor: pointer;
      transition: transform .2s ease-in-out, letter-spacing .2s ease-in-out;
    }

    .btn-wrapper .btn:hover {
      background-color: #25358b;
      color: #fff;
      transform: scale(1.05);
      letter-spacing: .06em;
    }

    .btn-wrapper .btn:active {
      background-color: #25358b;
      transform: scale(.98);
      letter-spacing: .02em;
    }

    .btn-wrapper .btn-svg {
      margin-left: .5rem;
      height: 24px;
      stroke-width: 1;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke: #fff4;
      fill: #fff2;
      transition: all .2s ease-in-out;
    }

    .btn-wrapper .btn:hover .btn-svg {
      stroke: #fffa;
      fill: #fff3;
    }

    .btn-wrapper .dot {
      position: absolute;
      width: var(--dot-size);
      aspect-ratio: 1;
      border-radius: 2px;
      background-color: var(--dot-color);
      transition: all .3s ease-in-out;
      opacity: 0;
    }

    .btn-wrapper:has(.btn:hover) .dot.top.left {
      top: 50%;
      left: 20%;
      animation: move-top-left var(--animation-speed) ease-in-out forwards;
    }

    @keyframes move-top-left {
      90% {
        opacity: .6;
      }

      100% {
        top: calc(var(--dot-size) * -0.5);
        left: calc(var(--dot-size) * -0.5);
        opacity: 1;
      }
    }

    .btn-wrapper:has(.btn:hover) .dot.top.right {
      top: 50%;
      right: 20%;
      animation: move-top-right var(--animation-speed) ease-in-out forwards;
      animation-delay: calc(var(--animation-speed)*.6);
    }

    @keyframes move-top-right {
      80% {
        opacity: .6;
      }

      100% {
        top: calc(var(--dot-size) * -0.5);
        right: calc(var(--dot-size) * -0.5);
        opacity: 1;
      }
    }

    .btn-wrapper:has(.btn:hover) .dot.bottom.right {
      bottom: 50%;
      right: 20%;
      animation: move-bottom-right var(--animation-speed) ease-in-out forwards;
      animation-delay: calc(var(--animation-speed)*1.2);
    }

    @keyframes move-bottom-right {
      80% {
        opacity: .6;
      }

      100% {
        bottom: calc(var(--dot-size) * -0.5);
        right: calc(var(--dot-size) * -0.5);
        opacity: 1;
      }
    }

    .btn-wrapper:has(.btn:hover) .dot.bottom.left {
      bottom: 50%;
      left: 20%;
      animation: move-bottom-left var(--animation-speed) ease-in-out forwards;
      animation-delay: calc(var(--animation-speed)*1.8);
    }

    @keyframes move-bottom-left {
      80% {
        opacity: .6;
      }

      100% {
        bottom: calc(var(--dot-size) * -0.5);
        left: calc(var(--dot-size) * -0.5);
        opacity: 1;
      }
    }

    .btn-wrapper .line {
      position: absolute;
      transition: all .3s ease-in-out;
    }

    .btn-wrapper .line.horizontal {
      height: var(--line-weight);
      width: 100%;
      background-image: repeating-linear-gradient(90deg, #0000 0 calc(var(--line-weight)*2), var(--line-color) calc(var(--line-weight)*2) calc(var(--line-weight)*4));
    }

    .btn-wrapper .line.top {
      top: calc(var(--line-weight)*-0.5);
      transform-origin: top left;
      transform: rotate(5deg) scaleX(0);
    }

    .btn-wrapper:has(.btn:hover) .line.top {
      animation: draw-top var(--animation-speed) ease-in-out forwards;
      animation-delay: calc(var(--animation-speed)*.8);
    }

    @keyframes draw-top {
      100% {
        transform: rotate(0deg) scaleX(1);
      }
    }

    .btn-wrapper .line.bottom {
      bottom: calc(var(--line-weight)*-0.5);
      transform-origin: bottom right;
      transform: rotate(5deg) scaleX(0);
    }

    .btn-wrapper:has(.btn:hover) .line.bottom {
      animation: draw-bottom var(--animation-speed) ease-in-out forwards;
      animation-delay: calc(var(--animation-speed)*2);
    }

    @keyframes draw-bottom {
      100% {
        transform: rotate(0deg) scaleX(1);
      }
    }

    .btn-wrapper .line.vertical {
      width: var(--line-weight);
      height: 100%;
      background-image: repeating-linear-gradient(0deg, #0000 0 calc(var(--line-weight)*2), var(--line-color) calc(var(--line-weight)*2) calc(var(--line-weight)*4));
    }

    .btn-wrapper .line.left {
      left: calc(var(--line-weight)*-0.5);
      transform-origin: bottom left;
      transform: rotate(0deg) scaleY(0);
    }

    .btn-wrapper:has(.btn:hover) .line.left {
      animation: draw-left var(--animation-speed) ease-in-out forwards;
      animation-delay: calc(var(--animation-speed)*2.4);
    }

    @keyframes draw-left {
      100% {
        transform: rotate(0deg) scaleY(1);
      }
    }

    .btn-wrapper .line.right {
      right: calc(var(--line-weight)*-0.5);
      transform-origin: top right;
      transform: rotate(5deg) scaleY(0);
    }

    .btn-wrapper:has(.btn:hover) .line.right {
      animation: draw-right var(--animation-speed) ease-in-out forwards;
      animation-delay: calc(var(--animation-speed)*1.4);
    }

    @keyframes draw-right {
      100% {
        transform: rotate(0deg) scaleY(1);
      }
    }
  </style>

  <div class="line horizontal top"></div>
  <div class="line vertical right"></div>
  <div class="line horizontal bottom"></div>
  <div class="line vertical left"></div>

  <div class="dot top left"></div>
  <div class="dot top right"></div>
  <div class="dot bottom right"></div>
  <div class="dot bottom left"></div>

  <button class="btn bg-[#ffffff]">
            <span class="btn-text">Start Creating</span>
            <svg class="btn-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.6744 11.4075L15.7691 17.1233C15.7072 17.309 15.5586 17.4529 15.3709 17.5087L3.69348 20.9803C3.22819 21.1186 2.79978 20.676 2.95328 20.2155L6.74467 8.84131C6.79981 8.67588 6.92419 8.54263 7.08543 8.47624L12.472 6.25822C12.696 6.166 12.9535 6.21749 13.1248 6.38876L17.5294 10.7935C17.6901 10.9542 17.7463 11.1919 17.6744 11.4075Z" class=""></path>
              <path d="M3.2959 20.6016L9.65986 14.2376" class=""></path>
              <path d="M17.7917 11.0557L20.6202 8.22724C21.4012 7.44619 21.4012 6.17986 20.6202 5.39881L18.4989 3.27749C17.7178 2.49645 16.4515 2.49645 15.6704 3.27749L12.842 6.10592" class=""></path>
              <path d="M11.7814 12.1163C11.1956 11.5305 10.2458 11.5305 9.66004 12.1163C9.07426 12.7021 9.07426 13.6519 9.66004 14.2376C10.2458 14.8234 11.1956 14.8234 11.7814 14.2376C12.3671 13.6519 12.3671 12.7021 11.7814 12.1163Z" class=""></path>
            </svg>
          </button>
</a></div></body></html>
  </div>
  
    <script>
      (function() {
        function checkAndCenter() {
          // Use double requestAnimationFrame to ensure DOM is fully painted and layout is stable
          requestAnimationFrame(function() {
            requestAnimationFrame(function() {
              const wrapper = document.querySelector('.component-wrapper');
              if (!wrapper) return;
              
              // Get all child elements
              const children = Array.from(wrapper.children);
              if (children.length === 0) return;
              
              // Temporarily override wrapper styles to shrink-wrap for measurement
              // Set inline styles to shrink-wrap (inline styles override CSS)
              wrapper.style.display = 'inline-block';
              wrapper.style.width = 'auto';
              wrapper.style.height = 'auto';
              wrapper.style.overflow = 'visible';
              wrapper.style.boxSizing = 'content-box';
              
              // Force multiple reflows to ensure styles are fully applied
              void wrapper.offsetHeight;
              void wrapper.offsetWidth;
              void wrapper.offsetHeight;
              
              // Measure the wrapper's content size
              const contentWidth = wrapper.offsetWidth;
              const contentHeight = wrapper.offsetHeight;
              
              // Restore original styles by removing inline styles we added
              wrapper.style.removeProperty('display');
              wrapper.style.removeProperty('width');
              wrapper.style.removeProperty('height');
              wrapper.style.removeProperty('overflow');
              wrapper.style.removeProperty('box-sizing');
              
              // If content is less than 500x500, center it
              if (contentWidth > 0 && contentHeight > 0 && contentWidth < 500 && contentHeight < 500) {
                wrapper.style.display = 'flex';
                wrapper.style.alignItems = 'center';
                wrapper.style.justifyContent = 'center';
              }
            });
          });
        }
        
        // Check immediately and after delays to ensure content is rendered and styled
        function runChecks() {
          checkAndCenter();
          setTimeout(checkAndCenter, 50);
          setTimeout(checkAndCenter, 150);
          setTimeout(checkAndCenter, 300);
          setTimeout(checkAndCenter, 500);
          setTimeout(checkAndCenter, 1000);
        }
        
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', runChecks);
        } else {
          runChecks();
        }
        
        // Also check when images or other resources load
        window.addEventListener('load', () => {
          setTimeout(checkAndCenter, 100);
          setTimeout(checkAndCenter, 300);
        });
        
        // Use ResizeObserver to detect size changes
        if (window.ResizeObserver) {
          setTimeout(() => {
            const wrapper = document.querySelector('.component-wrapper');
            if (wrapper) {
              const observer = new ResizeObserver(() => {
                setTimeout(checkAndCenter, 50);
              });
              observer.observe(wrapper);
            }
          }, 500);
        }
      })();
    <\/script>
  
</body>
</html>
`;var Up=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Creator Studio \u2014 Keynote Motion Study</title>
<meta name="description" content="Self-contained 30-second keynote-style motion study: twenty-one beats of kinetic type, device mockups and app props on black.">
<style>
  :root{
    --ink:#f5f5f7;
    --font:-apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text","Helvetica Neue",Helvetica,Arial,sans-serif;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{height:100%;overflow:hidden;background:#000}
  body{display:grid;place-items:center;font-family:var(--font);color:var(--ink)}
  .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
  #stage{position:relative;width:min(100vw,177.78vh);aspect-ratio:16/9;overflow:hidden;background:#000}
  #comp{position:absolute;left:50%;top:50%;width:1280px;height:720px;margin:-360px 0 0 -640px;transform-origin:50% 50%}
  .scene{position:absolute;inset:0;display:none}
  .scene.on{display:block}

  /* ---------- type ---------- */
  .line{position:absolute;inset:0;pointer-events:none}
  .tx{position:absolute;left:0;right:0;top:50%;text-align:center;white-space:nowrap;
      font-weight:600;letter-spacing:-.012em;line-height:1;transform:translateY(-50%);
      will-change:transform,opacity,filter}
  .tx span{display:inline-block;will-change:transform,opacity,filter}
  #ruler{position:absolute;left:-9999px;top:0;visibility:hidden;white-space:pre;
         font-weight:600;letter-spacing:-.012em;line-height:1;font-size:100px}

  .mark{display:inline-block;vertical-align:-.07em;margin-right:.14em}
  .mark svg{display:block;width:.8em;height:.8em}

  /* ---------- window wall ---------- */
  .win{position:absolute;border-radius:10px;overflow:hidden;background:#0b0b0f;
       box-shadow:0 22px 54px rgba(0,0,0,.72);will-change:transform,opacity}
  .win:after{content:"";position:absolute;inset:0;background:rgba(0,0,0,.34);pointer-events:none}
  .win .pane{position:absolute;left:7%;right:7%;top:14%;bottom:12%;border-radius:4px;overflow:hidden}
  .win .bar{height:15px;background:#26262b;display:flex;align-items:center;gap:4px;padding:0 6px}
  .win .bar i{width:5px;height:5px;border-radius:50%;background:#4a4a52;display:block}
  .win .body{position:absolute;left:0;right:0;top:15px;bottom:0}
  .win .side{position:absolute;left:0;top:0;bottom:0;width:21%;background:#1b1b20}
  .win .side u{display:block;height:6px;margin:6px 5px;border-radius:2px;background:#31313a}
  .win .strip{position:absolute;left:0;right:0;bottom:0;background:#131318}
  .win .strip u{position:absolute;bottom:5px;border-radius:2px}
  .win .bars{position:absolute;left:26%;right:7%;bottom:13%;top:18%;display:flex;align-items:flex-end;gap:6%}
  .win .bars u{flex:1;border-radius:1px}
  .win .txt{position:absolute;left:8%;right:8%;top:12%}
  .win .txt u{display:block;height:5px;border-radius:2px;background:#3c3c46;margin-bottom:7px}
  .win .tiles{position:absolute;inset:6%;display:grid;grid-template-columns:repeat(4,1fr);gap:4px}
  .win .tiles u{border-radius:2px}

  /* ---------- dock ---------- */
  #dockBar{position:absolute;left:125px;top:306px;width:1025px;height:106px;border-radius:26px;
           background:rgba(36,36,42,.74);border:1px solid rgba(255,255,255,.07);
           transform-origin:50% 50%;will-change:transform,opacity}
  .ico{position:absolute;width:65px;height:65px;border-radius:16px;
       background:linear-gradient(180deg,#3a3a43,#1d1d24);border:1px solid rgba(255,255,255,.13);
       box-shadow:inset 0 1px 0 rgba(255,255,255,.14);
       display:grid;place-items:center;will-change:transform,opacity}
  .ico svg{width:58px;height:58px;display:block;filter:saturate(1.15)}

  /* ---------- audio tracks ---------- */
  .track{position:absolute;left:340px;width:600px;border-radius:11px;overflow:hidden;
         transform-origin:50% 100%;will-change:transform,opacity}
  .track b{position:absolute;left:9px;top:5px;font-size:11px;font-weight:500;letter-spacing:.02em;color:rgba(255,255,255,.95)}
  .track .art{position:absolute;left:0;right:0;top:19px;bottom:0}
  .track .art u{position:absolute;background:rgba(255,255,255,.9);border-radius:1px}

  /* ---------- devices ---------- */
  .mac{position:absolute;left:50%;top:123px;width:648px;margin-left:-324px;will-change:transform,opacity}
  .mac .lid{position:relative;border:10px solid #1b1b1f;border-radius:20px;background:#000;
            box-shadow:0 0 0 1px #3d3d44,0 34px 70px rgba(0,0,0,.75)}
  .mac .scr{position:relative;width:100%;padding-top:64%;overflow:hidden;border-radius:9px;background:#000}
  .mac .notch{position:absolute;left:50%;top:-8px;width:78px;height:8px;margin-left:-39px;background:#1b1b1f;border-radius:0 0 6px 6px}
  .mac .base{position:relative;left:50%;width:746px;height:15px;margin-left:-373px;border-radius:0 0 14px 14px;
             background:linear-gradient(180deg,#2c2c33,#0d0d10);box-shadow:0 8px 22px rgba(0,0,0,.75)}
  .mac .base:after{content:"";position:absolute;left:50%;bottom:0;width:96px;height:5px;margin-left:-48px;
                   border-radius:0 0 5px 5px;background:#3a3a42}
  .pad{position:absolute;left:50%;top:157px;width:557px;margin-left:-278.5px;padding:12px;border-radius:26px;
       background:linear-gradient(160deg,#63676f,#2b2d33);box-shadow:0 30px 70px rgba(0,0,0,.75);
       transform-origin:50% 46%;will-change:transform,opacity}
  .pad .scr{position:relative;width:100%;padding-top:73.5%;overflow:hidden;border-radius:15px;background:#000}
  .scrIn{position:absolute;inset:0}

  .grad{position:absolute;inset:0}
  .grad b{position:absolute;border-radius:50%;display:block}
  .canvasType{position:absolute;inset:0;font-weight:600;letter-spacing:-.022em;line-height:.94}
  .canvasType div{position:absolute;white-space:nowrap;will-change:transform,opacity}

  .tbox{position:absolute;border:1px solid rgba(255,255,255,.55);will-change:transform,opacity}
  .tbox i{position:absolute;width:6px;height:6px;background:#fff;border:1px solid #75757c}
  .tbox i:nth-child(1){left:-3px;top:-3px}.tbox i:nth-child(2){right:-3px;top:-3px}
  .tbox i:nth-child(3){left:-3px;bottom:-3px}.tbox i:nth-child(4){right:-3px;bottom:-3px}
  .tbox span{position:absolute;left:10px;top:50%;transform:translateY(-52%);font-weight:600;white-space:nowrap;letter-spacing:-.02em}

  .palette{position:absolute;right:9px;top:9px;bottom:9px;width:28px;border-radius:14px;
           background:rgba(42,42,48,.9);display:flex;flex-direction:column;align-items:center;gap:9px;padding:9px 0}
  .palette u{display:block;width:11px;height:11px;border-radius:3px;background:#71717b}
  .guide{position:absolute;left:0;right:0;height:1px;background:#3ad462;opacity:.75}
  .hand{position:absolute;will-change:transform,opacity}

  /* ---------- edit clip ---------- */
  #clip{position:absolute;border-radius:5px;overflow:hidden;background:#0e1430;
        border:2px solid #6a3af0;box-shadow:0 0 34px rgba(120,60,255,.75),inset 0 0 0 1px rgba(180,150,255,.4);
        will-change:transform,opacity}
  #clip .thumbs{position:absolute;left:0;right:0;top:0;height:74%;display:flex}
  #clip .thumbs u{flex:1;border-right:1px solid rgba(0,0,0,.4);position:relative;overflow:hidden;
                  background:linear-gradient(180deg,#8e9aa8 0%,#c3c9cf 42%,#6d757f 43%,#3c4249 100%)}
  #clip .thumbs u:after{content:"";position:absolute;left:34%;top:26%;width:32%;height:62%;border-radius:44% 44% 12% 12%;background:#14161c}
  #clip .wave{position:absolute;left:0;right:0;bottom:0;height:26%;background:#232a55;display:flex;align-items:flex-end;gap:1px;padding:0 2px}
  #clip .wave u{flex:1;background:rgba(190,200,255,.55);border-radius:1px 1px 0 0}

  /* ---------- prompt ---------- */
  #daisyC{position:absolute;left:0;top:0}
  #liquid{filter:url(#goo);position:absolute;inset:0}
  #liquid .drop{position:absolute;border-radius:50%;background:#8ecfee}
  .gloss{position:absolute;left:0;right:0;top:50%;text-align:center;white-space:nowrap;
         font-weight:700;letter-spacing:-.02em;line-height:1;transform:translateY(-50%);
         color:transparent;background:linear-gradient(180deg,#ffffff 4%,#c8ebfb 32%,#5aa6cf 76%);
         -webkit-background-clip:text;background-clip:text;mix-blend-mode:screen}

  /* ---------- props ---------- */
  .keys{position:absolute;left:351px;top:421px;width:580px;height:123px;display:flex;gap:6px;will-change:opacity}
  .keys u{flex:1;border-radius:9px;background:linear-gradient(180deg,#3c3c43,#26262c);
          box-shadow:inset 0 1px 0 rgba(255,255,255,.1)}
  .bin{position:absolute;left:531px;top:444px;width:219px;height:219px;will-change:transform,opacity}
  .bin .cup{position:absolute;left:0;right:0;top:12px;bottom:0;
    clip-path:polygon(5% 0,95% 0,83% 100%,17% 100%);
    background:linear-gradient(180deg,rgba(206,210,216,.9),rgba(228,232,238,.94) 34%,rgba(244,246,249,.98));
    border-radius:10px 10px 30px 30px}
  .bin .rim{position:absolute;left:0;right:0;top:0;height:36px;border-radius:16px/18px;
    background:linear-gradient(180deg,rgba(250,251,253,.98),rgba(198,203,212,.8));
    box-shadow:inset 0 -7px 12px rgba(255,255,255,.5)}
  .bin .hole{position:absolute;left:16px;right:16px;top:6px;height:22px;border-radius:14px/11px;
    background:linear-gradient(180deg,rgba(90,96,106,.9),rgba(150,156,166,.7))}
  .wad{position:absolute;width:46px;height:46px;will-change:transform,opacity}
  .frag{position:absolute;left:0;right:0;top:50%;text-align:center;white-space:nowrap;font-weight:600;
         letter-spacing:-.012em;line-height:1;color:#9b22f0;transform:translateY(-50%);
         text-shadow:0 0 34px rgba(150,40,255,.95),0 0 70px rgba(150,40,255,.5);will-change:transform,opacity}
  .cursor{position:absolute;width:34px;height:34px;border-radius:50%;border:1px solid rgba(255,255,255,.9);
          background:radial-gradient(circle at 34% 28%,rgba(255,255,255,.55),rgba(0,0,0,.5));will-change:transform,opacity}
  .glowdot{position:absolute;width:16px;height:16px;border-radius:50%;
           background:radial-gradient(circle,#ffe27a,#f0a020 55%,rgba(240,160,32,0) 72%);
           box-shadow:0 0 18px rgba(255,200,80,.9);will-change:transform,opacity}
  .appRow{position:absolute;left:0;right:0;text-align:center;white-space:nowrap;font-weight:600;
          letter-spacing:-.015em;line-height:1;will-change:transform,opacity}
  .appRow em{font-style:normal;display:inline-block;width:.92em;height:.92em;border-radius:.2em;
             vertical-align:-.16em;margin-right:.22em;box-shadow:inset 0 0 0 1px rgba(255,255,255,.12)}
</style>
</head>
<body>
<p class="sr">A thirty-second keynote-style motion study on black. A chromatic wordmark assembles, a wall of creative app windows drifts past, then twenty short type beats follow \u2014 one subscription, endless creativity, a dock of apps, a three-track beat, editing a video, taking your design anywhere, and quick verbs from Prompt it to Share it \u2014 closing on a price, a scrolling list of app names, and the Creator Studio wordmark.</p>
<div id="stage">
  <div id="comp"></div>
  <svg width="0" height="0" style="position:absolute" aria-hidden="true">
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b"/>
      <feColorMatrix in="b" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10" result="g"/>
      <feComposite in="SourceGraphic" in2="g" operator="atop"/>
    </filter>
  </svg>
</div>
<span id="ruler" aria-hidden="true"></span>
<script>
(function(){
  "use strict";
  var DUR=30.122, W=1280, H=720;
  var comp=document.getElementById('comp'), stage=document.getElementById('stage'), ruler=document.getElementById('ruler');

  /* ---------- math ---------- */
  var clamp=function(v,a,b){return v<a?a:(v>b?b:v)};
  var lerp=function(a,b,t){return a+(b-a)*t};
  var seg=function(t,a,b){return clamp((t-a)/(b-a||1e-6),0,1)};
  var smooth=function(t){return t*t*(3-2*t)};
  var eOut=function(t){return 1-Math.pow(1-t,3)};
  var eIn=function(t){return t*t*t};
  var back=function(t){var c=1.6;return 1+(c+1)*Math.pow(t-1,3)+c*Math.pow(t-1,2)};
  function rng(s){var a=s>>>0;return function(){a+=0x6D2B79F5;var t=a;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296}}

  /* ---------- dom ---------- */
  function el(tag,cls,parent,html){
    var n=document.createElement(tag);
    if(cls)n.className=cls;
    if(html!=null)n.innerHTML=html;
    (parent||comp).appendChild(n);
    return n;
  }
  function setT(n,v){if(n._t!==v){n._t=v;n.style.transform=v}}
  function setO(n,v){var r=clamp(v,0,1).toFixed(3);if(n._o!==r){n._o=r;n.style.opacity=r}}
  function setF(n,v){if(n._f!==v){n._f=v;n.style.filter=v}}
  function setC(n,v){if(n._c!==v){n._c=v;n.style.color=v}}
  var TXY='translateY(-50%) ';

  /* fit a string to a pixel width so every beat matches the reference measurements */
  function fitPx(str,target,weight){
    ruler.style.fontWeight=weight||600;
    ruler.style.fontSize='100px';
    ruler.textContent=str;
    return 100*target/ruler.getBoundingClientRect().width;
  }
  function advances(str,fs,weight){
    ruler.style.fontWeight=weight||600;
    ruler.style.fontSize=fs+'px';
    var out=[];
    for(var i=0;i<str.length;i++){
      ruler.textContent=str[i];
      out.push(ruler.getBoundingClientRect().width);
    }
    return out;
  }
  function letters(node,str){
    node.textContent='';
    var out=[];
    for(var i=0;i<str.length;i++){
      var s=document.createElement('span');
      s.textContent=str[i]===' '?'\\u00a0':str[i];
      node.appendChild(s); out.push(s);
    }
    return out;
  }
  /* one centred line, auto-sized to a reference width */
  function textLine(scene,str,targetW){
    var wrap=el('div','line',scene);
    var tx=el('div','tx',wrap);
    var fs=fitPx(str,targetW);
    tx.style.fontSize=fs.toFixed(2)+'px';
    return {wrap:wrap, tx:tx, chars:letters(tx,str), fs:fs};
  }

  var APPLE='<svg viewBox="0 0 24 24" aria-hidden="true">'+
    '<path fill="currentColor" d="M17.1 12.7c0-2.6 2.1-3.9 2.2-4-1.2-1.8-3.1-2-3.7-2.1-1.7-.1-3.3 1-4.1 1-.8 0-2.1-1-3.5-1-1.8 0-3.6 1.1-4.5 2.8-1.9 3.4-.5 8.4 1.4 11.2 1 1.3 2.1 2.8 3.6 2.7 1.4 0 1.9-.9 3.6-.9s2.1.9 3.6.9c1.5 0 2.4-1.3 3.3-2.7 1.1-1.5 1.5-3 1.5-3.1-.1 0-3.4-1.3-3.4-4.8z"/>'+
    '<path fill="currentColor" d="M14.6 4.9c.8-.9 1.3-2.2 1.1-3.5-1.1.1-2.5.8-3.3 1.7-.7.9-1.3 2.2-1.1 3.4 1.2.1 2.5-.6 3.3-1.6z"/></svg>';

  /* =====================================================================
     1 + 21 \xB7 wordmark, chromatic assemble
     ===================================================================== */
  function makeWordmark(){
    var s=el('div','scene');
    var wrap=el('div','line',s);
    var tx=el('div','tx',wrap);
    var fs=fitPx('Creator Studio',678);
    tx.style.fontSize=fs.toFixed(2)+'px';
    var mk=el('span','mark',tx,APPLE);
    var chars=[], str='Creator Studio';
    for(var i=0;i<str.length;i++){
      var sp=document.createElement('span');
      sp.textContent=str[i]===' '?'\\u00a0':str[i];
      tx.appendChild(sp); chars.push(sp);
    }
    var R=rng(7719), jit=chars.map(function(){return [R()*2-1,R()*2-1,R()]});
    return {node:s, update:function(t,p){
      setO(mk,smooth(seg(p,.26,.5)));
      setT(mk,'scale('+lerp(.55,1,eOut(seg(p,.26,.56))).toFixed(3)+')');
      for(var i=0;i<chars.length;i++){
        var j=jit[i];
        var a=eOut(clamp(seg(p,.02,.5)*1.5-j[2]*.5,0,1));
        setT(chars[i],'translate('+(j[0]*62*(1-a)).toFixed(1)+'px,'+(j[1]*34*(1-a)).toFixed(1)+'px) scale('+lerp(1.24,1,a).toFixed(3)+')');
        setO(chars[i],Math.min(1,a*1.6));
        var sep=(1-a)*11;
        chars[i].style.textShadow=sep>.4
          ? (-sep).toFixed(1)+'px 0 rgba(255,64,72,.85),'+sep.toFixed(1)+'px 0 rgba(64,255,190,.8),0 '+(sep*.55).toFixed(1)+'px rgba(96,124,255,.8)'
          : 'none';
        setF(chars[i],sep>.7?'blur('+(sep*.3).toFixed(2)+'px)':'none');
      }
    }};
  }

  /* =====================================================================
     2 \xB7 wall of creative app windows
     ===================================================================== */
  var WALLPAL=[
    ['#1c6b47','#93d46b'],['#8a1d3c','#f05a6d'],['#123c70','#4aa8f0'],
    ['#572a86','#c07af0'],['#7d4a12','#f0b45a'],['#0e4f54','#4fd6c8'],
    ['#6b1050','#f05ac0'],['#24406b','#7aa8f0'],['#3a5f10','#b0e05a'],
    ['#6b2a10','#f08a5a'],['#28286b','#8a8af0'],['#0d5a2c','#5ad68a']
  ];
  function makeWall(){
    var s=el('div','scene'), R=rng(4242), wins=[];
    for(var i=0;i<34;i++){
      var w=el('div','win',s);
      var pal=WALLPAL[Math.floor(R()*WALLPAL.length)];
      var variant=i%6;
      var bw=lerp(160,330,R()), bh=bw*lerp(.6,.68,R());
      w.style.width=bw.toFixed(0)+'px'; w.style.height=bh.toFixed(0)+'px';
      el('div','bar',w,'<i></i><i></i><i></i>');
      var body=el('div','body',w);
      body.style.background='#0d0d12';
      var pane=el('div','pane',body);
      pane.style.background='linear-gradient(150deg,'+pal[0]+','+pal[1]+')';
      pane.style.opacity='.82';
      var k;
      if(variant===0){
        el('div','side',body,'<u></u><u></u><u></u><u></u><u></u>');
        var st=el('div','strip',body); st.style.height='26%';
        for(k=0;k<5;k++){var u=el('u','',st);u.style.left=(6+k*18)+'%';u.style.width='15%';u.style.height='11px';u.style.background=k%2?pal[1]:'#3f4a6a'}
      } else if(variant===1){
        pane.style.display='none';
        var st2=el('div','strip',body); st2.style.height='56%';
        for(k=0;k<7;k++){var u2=el('u','',st2);u2.style.left=(3+k*13.6)+'%';u2.style.width='12%';
          u2.style.height=(10+(k%3)*8)+'px';u2.style.bottom=(7+(k%3)*15)+'px';u2.style.background=k%2?pal[1]:pal[0]}
        var th=el('div','',body);
        th.style.cssText='position:absolute;left:6%;top:6%;width:54%;height:34%;border-radius:5px;background:linear-gradient(140deg,'+pal[0]+','+pal[1]+')';
      } else if(variant===2){
        pane.style.display='none';
        body.style.background='#e9e9ee';
        var bars=el('div','bars',body);
        for(k=0;k<6;k++){var b=el('u','',bars);b.style.height=(24+((k*37)%70))+'%';b.style.background=k%2?pal[1]:pal[0]}
        var tx2=el('div','txt',body);
        for(k=0;k<3;k++){var l3=el('u','',tx2);l3.style.background='#cbcbd2';l3.style.width=(80-k*18)+'%'}
      } else if(variant===3){
        pane.style.display='none';
        var ti=el('div','tiles',body);
        for(k=0;k<12;k++){var t4=el('u','',ti);t4.style.background='linear-gradient('+(k*30)+'deg,'+pal[0]+','+pal[1]+')'}
      } else if(variant===4){
        pane.style.display='none';
        for(k=0;k<3;k++){
          var tr=el('div','',body);
          tr.style.cssText='position:absolute;left:6%;right:6%;top:'+(11+k*29)+'%;height:21%;border-radius:4px;background:'+
            (k===0?pal[1]:k===1?pal[0]:'#7a3ad6')+';opacity:.92';
        }
      } else {
        var sh=el('div','',body);
        sh.style.cssText='position:absolute;left:20%;top:16%;width:60%;height:76%;border-radius:42% 42% 28% 28%;background:rgba(0,0,0,.4);filter:blur(7px)';
      }
      wins.push({n:w,rot:(R()*2-1)*2.6,ph:R()*6.283,w:bw,h:bh,d:R()});
      void i;
    }
    return {node:s, update:function(t,p){
      var phase=t<.5?0:(t<1.06?1:2);
      var pp=phase===0?seg(t,0,.5):phase===1?seg(t,.5,1.06):seg(t,1.06,1.92);
      var zoom=lerp(.9,1.16,pp)*(1+phase*.08);
      for(var i=0;i<wins.length;i++){
        var o=wins[i], k=(i+phase*11)%wins.length;
        var gx=((k*137)%13)/12, gy=((k*71)%9)/8;
        var depth=.62+((k*53)%100)/100*.6;
        var x=lerp(-120,1400,gx)+Math.sin(t*.7+o.ph)*18;
        var y=lerp(-80,800,gy)+Math.cos(t*.55+o.ph)*15;
        var sc=depth*zoom;
        var cx=(x-W/2)*lerp(1,1.16,pp)+W/2, cy=(y-H/2)*lerp(1,1.16,pp)+H/2;
        o.n.style.left=(cx-o.w/2).toFixed(1)+'px';
        o.n.style.top=(cy-o.h/2).toFixed(1)+'px';
        setT(o.n,'scale('+sc.toFixed(3)+') rotate('+o.rot.toFixed(2)+'deg)');
        setO(o.n,Math.min(1,smooth(seg(t,0,.24))*1.2)*(1-seg(t,1.8,1.92))*clamp(.5+depth*.5,.4,1));
      }
    }};
  }

  /* =====================================================================
     3 \xB7 one subscription / endless creativity
     ===================================================================== */
  function makeLines(){
    var s=el('div','scene');
    function build(str,target){
      var wrap=el('div','line',s), tx=el('div','tx',wrap);
      tx.style.fontSize=fitPx(str,target).toFixed(2)+'px';
      var out=[];
      str.split(' ').forEach(function(word,i){
        var sp=document.createElement('span');
        sp.textContent=(i?'\\u00a0':'')+word;
        tx.appendChild(sp); out.push(sp);
      });
      return {tx:tx,words:out};
    }
    var A=build('One subscription.',705), B=build('Endless creativity.',702);
    function play(o,p,a0,out0){
      var vis=1-smooth(seg(p,out0,out0+.07));
      setO(o.tx,vis);
      for(var i=0;i<o.words.length;i++){
        var q=eOut(clamp(seg(p,a0+i*.135,a0+.2+i*.135),0,1));
        setO(o.words[i],q*vis);
        setT(o.words[i],'translateY('+((1-q)*24).toFixed(1)+'px)');
        setF(o.words[i],q<.97?'blur('+((1-q)*6).toFixed(2)+'px)':'none');
      }
    }
    return {node:s, update:function(t,p){ play(A,p,.02,.44); play(B,p,.5,.94) }};
  }

  /* =====================================================================
     4 \xB7 dock
     ===================================================================== */
  var ICONS=[
    '<svg viewBox="0 0 32 32"><rect x="7" y="16" width="4.4" height="10" rx="1" fill="#7fd44a"/><rect x="13.8" y="9" width="4.4" height="17" rx="1" fill="#a6e86a"/><rect x="20.6" y="13" width="4.4" height="13" rx="1" fill="#5fbe32"/><rect x="6" y="27" width="20" height="1.8" fill="#c9f2a0"/></svg>',
    '<svg viewBox="0 0 32 32"><path d="M6 20h20l-4-9H10z" fill="#6fb6f0"/><rect x="15" y="20" width="2" height="7" fill="#8fd0f7"/><rect x="10" y="26" width="12" height="2" rx="1" fill="#4a90d0"/></svg>',
    '<svg viewBox="0 0 32 32"><path d="M8 25c0-10 3-14 6-14s3 7 5 7 3-4 5-4" stroke="#f05ad0" stroke-width="3.2" fill="none" stroke-linecap="round"/><circle cx="23.4" cy="14.6" r="2.6" fill="#f7a0e4"/></svg>',
    '<svg viewBox="0 0 32 32"><rect x="5" y="12" width="22" height="13" rx="3" fill="#a15ff0"/><path d="M5 12l6-4 16 2-4 3z" fill="#c79af7"/></svg>',
    '<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12.5" fill="#dce1e9"/><circle cx="16" cy="16" r="7" fill="#9aa3b0"/><circle cx="16" cy="16" r="2" fill="#33373f"/></svg>',
    '<svg viewBox="0 0 32 32"><path d="M16 8l9.5 5-9.5 5-9.5-5z" fill="#e0324a"/><path d="M16 18l9.5 5-9.5 5-9.5-5z" fill="#a81d2c" opacity=".9"/></svg>',
    '<svg viewBox="0 0 32 32"><path d="M8 25l16-17 2.4 3.4-14.4 15z" fill="#f0863a"/><path d="M8 25.6h18.4" stroke="#f0b45a" stroke-width="2.2"/></svg>',
    '<svg viewBox="0 0 32 32"><path d="M16 6v20" stroke="#4fd6b8" stroke-width="2"/><circle cx="16" cy="9.5" r="3.2" fill="#4fd6b8"/><circle cx="21.5" cy="18" r="3.2" fill="#4fd6b8"/><circle cx="10.5" cy="22.5" r="3.2" fill="#4fd6b8"/></svg>',
    '<svg viewBox="0 0 32 32"><path d="M8 9h16l-8 7 8 7H8l8-7z" fill="none" stroke="#f0d05a" stroke-width="2.6"/></svg>',
    '<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="11.5" fill="#2f7fb8"/><path d="M7.5 17c2-4.4 3 4.4 5 0s3 4.4 5 0 3 3.4 5-1" stroke="#c8eafa" stroke-width="2.2" fill="none" stroke-linecap="round"/></svg>'
  ];
  function makeDock(){
    var s=el('div','scene');
    var bar=el('div','',s); bar.id='dockBar';
    var icos=[];
    for(var i=0;i<ICONS.length;i++){
      var n=el('div','ico',s,ICONS[i]);
      n.style.left=(148+i*101)+'px'; n.style.top='326px';
      icos.push(n);
    }
    return {node:s, update:function(t,p){
      var q0=eOut(seg(p,0,.24));
      setO(bar,q0);
      setT(bar,'scaleX('+lerp(.7,1,q0).toFixed(3)+')');
      for(var i=0;i<icos.length;i++){
        var q=clamp(seg(p,.08+i*.03,.36+i*.03),0,1);
        var lift=(i===4)?eOut(seg(p,.5,.76)):0;
        setO(icos[i],Math.min(1,q*1.7));
        setT(icos[i],'translateY('+((1-back(q))*30-lift*52).toFixed(1)+'px) scale('+(lerp(.6,1,back(q))*(1+lift*.58)).toFixed(3)+')');
        icos[i].style.boxShadow=lift>.02
          ? '0 0 '+(46*lift).toFixed(0)+'px rgba(216,234,255,'+(.85*lift).toFixed(2)+'),inset 0 1px 0 rgba(255,255,255,.2)'
          : 'inset 0 1px 0 rgba(255,255,255,.14)';
        icos[i].style.zIndex=i===4?5:1;
      }
    }};
  }

  /* =====================================================================
     5 \xB7 make a beat
     ===================================================================== */
  function makeBeatText(){
    var s=el('div','scene');
    var L=textLine(s,'Make a beat.',469);
    var R=rng(551), jit=L.chars.map(function(){return [R()*2-1,R()*2-1]});
    return {node:s, update:function(t,p){
      setO(L.tx,smooth(seg(p,.02,.14))*(1-smooth(seg(p,.88,1))));
      for(var i=0;i<L.chars.length;i++){
        var q=eOut(clamp(seg(p,.04+i*.028,.34+i*.028),0,1));
        setT(L.chars[i],'translate('+(jit[i][0]*34*(1-q)).toFixed(1)+'px,'+
          (jit[i][1]*18*(1-q)+Math.sin(t*5.4+i)*(1-q)*5).toFixed(1)+'px)');
        setO(L.chars[i],Math.min(1,q*1.5));
      }
    }};
  }

  /* =====================================================================
     6 \xB7 three-track beat
     ===================================================================== */
  function makeTracks(){
    var s=el('div','scene'), R=rng(9051);
    var specs=[
      {name:'DRUMS_137BPM', top:112,h:138,g:'linear-gradient(180deg,#84e44e,#5cc832)',glow:'#7fe04a',kind:'roll'},
      {name:'BASS_137BPM',  top:259,h:132,g:'linear-gradient(180deg,#a850f0,#8b2ce0)',glow:'#a24ef0',kind:'ticks'},
      {name:'HARMONY_137BPM',top:400,h:140,g:'linear-gradient(180deg,#d431c2,#6f0d58)',glow:'#d02fc0',kind:'wave'}
    ];
    var tr=specs.map(function(sp){
      var n=el('div','track',s);
      n.style.top=sp.top+'px'; n.style.height=sp.h+'px'; n.style.background=sp.g;
      n.style.boxShadow='0 0 30px '+sp.glow+'70,0 0 5px '+sp.glow+'bb';
      el('b','',n).textContent=sp.name;
      var art=el('div','art',n), i, j;
      if(sp.kind==='roll'){
        for(i=0;i<52;i++){
          var u=el('u','',art);
          u.style.left=(8+i*11.4)+'px'; u.style.width='6px';
          u.style.height=(R()<.3?15:9)+'px'; u.style.top=(34+R()*58)+'px';
        }
      } else if(sp.kind==='ticks'){
        for(i=0;i<28;i++){
          var y=24+R()*54;
          var g=el('u','',art); g.style.left=(16+i*20.4)+'px'; g.style.width='15px'; g.style.height='2px'; g.style.top=y+'px';
          var v=el('u','',art); v.style.left=(16+i*20.4)+'px'; v.style.width='2px'; v.style.height='11px'; v.style.top=(y-4)+'px';
        }
      } else {
        for(i=0;i<2;i++){
          for(j=0;j<126;j++){
            var amp=(Math.sin(j*.2)*.4+Math.sin(j*.06)*.4+.62)*16;
            var wv=el('u','',art);
            wv.style.left=(7+j*4.7)+'px'; wv.style.width='2px';
            wv.style.height=Math.max(2,amp*(.5+R()*.7)).toFixed(1)+'px';
            wv.style.top=(16+i*40+(20-amp/2)).toFixed(1)+'px';
            wv.style.background='rgba(255,255,255,.6)';
          }
        }
      }
      return n;
    });
    var head=el('div','',s);
    head.style.cssText='position:absolute;top:75px;width:6px;height:30px;background:#fff;border-radius:1px';
    return {node:s, update:function(t,p){
      for(var i=0;i<tr.length;i++){
        var q=eOut(clamp(seg(p,.06+i*.2,.32+i*.2),0,1));
        setO(tr[i],q);
        setT(tr[i],'translateY('+((1-q)*30).toFixed(1)+'px) scaleY('+lerp(.68,1,q).toFixed(3)+')');
      }
      setO(head,smooth(seg(p,.02,.12)));
      head.style.left=(516+Math.sin(t*2.4)*7).toFixed(1)+'px';
    }};
  }

  /* =====================================================================
     7 \xB7 edit a video
     ===================================================================== */
  function makeEditVideo(){
    var s=el('div','scene');
    var fs=fitPx('Edit a',237);
    // staggered intro pair
    var pre=el('div','line',s);
    var p1=el('div','tx',pre), p2=el('div','tx',pre);
    p1.style.fontSize=p2.style.fontSize=fs.toFixed(2)+'px';
    p1.textContent='Edit a'; p2.textContent='video.';
    p1.style.color='#c98ff5'; p1.style.textShadow='0 0 30px rgba(160,80,255,.8)';
    p2.style.color='#6e6e75';
    // resolved single line with the clip in the middle
    var main=el('div','line',s);
    var mt=el('div','tx',main); mt.style.fontSize=fs.toFixed(2)+'px';
    var a=el('span','',mt); a.textContent='Edit\\u00a0a\\u00a0';
    var gap=el('span','',mt); gap.style.display='inline-block';
    var b=el('span','',mt); b.textContent='\\u00a0video.';
    var clip=el('div','',s); clip.id='clip';
    var th=el('div','thumbs',clip);
    for(var i=0;i<3;i++)el('u','',th);
    var wv=el('div','wave',clip);
    for(i=0;i<64;i++){
      var u=el('u','',wv);
      u.style.height=(22+Math.abs(Math.sin(i*.7))*58+((i*37)%20))+'%';
    }
    return {node:s, update:function(t,p){
      var swap=seg(p,.58,.7);
      // intro pair
      var pv=1-smooth(swap);
      setO(pre,pv);
      var q1=eOut(seg(p,.02,.24)), q2=eOut(seg(p,.14,.42));
      setT(p1,TXY+'translate('+lerp(-40,-118,q1).toFixed(0)+'px,'+lerp(-30,-46,q1).toFixed(0)+'px)');
      setO(p1,q1);
      setT(p2,TXY+'translate('+lerp(160,118,q2).toFixed(0)+'px,'+lerp(58,42,q2).toFixed(0)+'px)');
      setO(p2,q2);
      // resolved line + clip
      var mv=smooth(swap);
      setO(main,mv);
      var open=eOut(seg(p,.66,.84));
      var gw=lerp(0,575,open);
      gap.style.width=gw.toFixed(0)+'px';
      clip.style.width=Math.max(2,gw-6).toFixed(0)+'px';
      clip.style.height='200px';
      clip.style.left=(W/2-gw/2+3).toFixed(0)+'px';
      clip.style.top='262px';
      setO(clip,mv*Math.min(1,open*2.4)*(1-seg(p,.93,1)));
      setT(clip,'scaleY('+lerp(.5,1,eOut(seg(p,.64,.82))).toFixed(3)+')');
    }};
  }

  /* =====================================================================
     8 \xB7 macbook, text boxes
     ===================================================================== */
  function macFrame(parent){
    var m=el('div','mac',parent);
    var lid=el('div','lid',m);
    var scr=el('div','scr',lid);
    el('div','notch',lid);
    var inn=el('div','scrIn',scr);
    el('div','base',m);
    return {root:m, screen:inn};
  }
  function makeMac(){
    var s=el('div','scene');
    var mac=macFrame(s);
    var clip=el('div','',mac.screen);
    clip.style.cssText='position:absolute;inset:0;background:linear-gradient(150deg,#2f2118,#c08a5a)';
    var subj=el('div','',clip);
    subj.style.cssText='position:absolute;left:24%;top:26%;width:52%;height:62%;border-radius:44% 44% 28% 28%;background:rgba(18,10,6,.55);filter:blur(4px)';
    var pal=el('div','palette',mac.screen);
    for(var i=0;i<11;i++)el('u','',pal);
    var guide=el('div','guide',mac.screen);
    var b1=el('div','tbox',mac.screen,'<i></i><i></i><i></i><i></i><span>Take</span>');
    var b2=el('div','tbox',mac.screen,'<i></i><i></i><i></i><i></i><span>your</span>');
    b1.querySelector('span').style.fontSize='132px';
    b2.querySelector('span').style.fontSize='86px';
    return {node:s, update:function(t,p){
      setO(mac.root,smooth(seg(p,0,.09)));
      setT(mac.root,'scale('+lerp(.95,1,eOut(seg(p,0,.3))).toFixed(3)+')');
      setO(clip,1-seg(p,.18,.32));
      setO(pal,smooth(seg(p,.22,.4)));
      guide.style.top='64%';
      setO(guide,smooth(seg(p,.34,.48))*(1-seg(p,.92,1)));
      var i1=seg(p,.28,.44);
      b1.style.left='16%'; b1.style.top='30%'; b1.style.width='52%'; b1.style.height='34%';
      setO(b1,smooth(i1));
      setT(b1,'scale('+lerp(.9,1,eOut(i1)).toFixed(3)+')');
      var i2=seg(p,.64,.8);
      b2.style.left='54%'; b2.style.top='36%'; b2.style.width='30%'; b2.style.height='24%';
      setO(b2,smooth(i2));
      setT(b2,'translateX('+((1-eOut(i2))*26).toFixed(1)+'px)');
    }};
  }

  /* =====================================================================
     9 \xB7 take your design anywhere
     ===================================================================== */
  var GRADS=[
    {bg:'#3c0a1a', blobs:['#8e1436','#cc1f4c','#f2567c']},
    {bg:'#2a0742', blobs:['#6d1baa','#a92ee2','#da6af2']},
    {bg:'#0f3a10', blobs:['#3f7a18','#82c62c','#dcf24c']}
  ];
  function gradientCanvas(parent){
    var g=el('div','grad',parent), blobs=[];
    for(var i=0;i<3;i++)blobs.push(el('b','',g));
    return {set:function(idx,t){
      var sp=GRADS[idx];
      g.style.background=sp.bg;
      for(var i=0;i<blobs.length;i++){
        var b=blobs[i], sz=lerp(152,112,i/2);
        b.style.width=sz+'%'; b.style.height=(sz*1.35)+'%';
        b.style.left=lerp(-26,6,i/2)+'%';
        b.style.top=(lerp(-8,26,i/2)+Math.sin(t*.7+i)*2)+'%';
        b.style.background='radial-gradient(circle at 42% 36%,'+sp.blobs[i]+',rgba(0,0,0,0) 70%)';
        b.style.opacity=(.96-i*.08).toFixed(2);
      }
    }};
  }
  function makeCanvasScene(){
    var s=el('div','scene');
    var mac=macFrame(s);
    var pad=el('div','pad',s);
    var padIn=el('div','scrIn',el('div','scr',pad));
    var gMac=gradientCanvas(mac.screen), gPad=gradientCanvas(padIn);
    function typeBlock(parent,unit){
      var w=el('div','canvasType',parent);
      var rows=[
        {txt:'Take',     x:'5%',  y:'3%',  s:1.0},
        {txt:'your',     x:'43%', y:'25%', s:1.0},
        {txt:'design',   x:'4%',  y:'47%', s:1.0},
        {txt:'anywhere.',x:'2%',  y:'69%', s:1.0}
      ];
      return {root:w, rows:rows.map(function(r){
        var d=el('div','',w);
        d.textContent=r.txt;
        d.style.left=r.x; d.style.top=r.y;
        d.style.fontSize=(unit*r.s)+'px';
        d.style.color='rgba(255,255,255,.94)';
        return d;
      })};
    }
    var tMac=typeBlock(mac.screen,114), tPad=typeBlock(padIn,110);
    var pencil=el('div','',s);
    pencil.style.cssText='position:absolute;height:8px;border-radius:4px;background:linear-gradient(90deg,#8f939b,#d6dae0);will-change:transform,opacity';
    var hand=el('div','hand',s);
    hand.innerHTML='<svg viewBox="0 0 260 340" aria-hidden="true"><path fill="#b07f5e" d="M124 340V206c0-17-11-30-11-45 0-10 8-14 15-9 8 6 13 19 15 32l4 24 7-95c1-13 6-19 14-18 9 1 12 9 12 20l1 79 9-69c2-12 9-17 16-15 8 2 11 10 10 21l-9 71 15-47c4-12 12-15 19-12 7 4 9 12 5 23l-19 67c-7 24-11 42-11 59v54z"/></svg>';
    return {node:s, update:function(t,p){
      var onPad=p>.42;
      mac.root.style.display=onPad?'none':'block';
      pad.style.display=onPad?'block':'none';
      var idx=p<.18?0:(p<.38?1:2);
      var g=onPad?gPad:gMac, tb=onPad?tPad:tMac;
      g.set(idx,t);
      var host=onPad?pad:mac.root;
      setO(host,smooth(seg(p,0,.08)));
      var grow=eOut(seg(p,.42,1));
      setT(host,onPad
        ? 'scale('+lerp(1,1.44,grow).toFixed(3)+') translate('+lerp(0,-16,grow).toFixed(0)+'px,'+lerp(0,26,grow).toFixed(0)+'px)'
        : 'scale('+lerp(.96,1,eOut(seg(p,0,.3))).toFixed(3)+')');
      setF(host,onPad&&grow>.5?'blur('+((grow-.5)*5.2).toFixed(2)+'px)':'none');
      for(var i=0;i<tb.rows.length;i++){
        var q=eOut(clamp(seg(p,.01+i*.045,.11+i*.045),0,1));
        setO(tb.rows[i],q);
        setT(tb.rows[i],'translateY('+((1-q)*20).toFixed(1)+'px)');
      }
      var pen=smooth(seg(p,.56,.72));
      pencil.style.left='430px'; pencil.style.top='104px'; pencil.style.width='420px';
      setO(pencil,pen*(1-seg(p,.94,1)));
      var hi=seg(p,.72,.98);
      hand.style.left='700px'; hand.style.top='300px';
      setO(hand,Math.min(1,hi*2.4));
      setT(hand,'translate('+lerp(230,26,eOut(hi)).toFixed(0)+'px,'+lerp(120,30,eOut(hi)).toFixed(0)+'px) rotate('+lerp(20,6,eOut(hi)).toFixed(1)+'deg)');
    }};
  }

  /* =====================================================================
     10 \xB7 prompt it \u2014 clean, daisies, liquid
     ===================================================================== */
  function makePrompt(){
    var s=el('div','scene');
    var L=textLine(s,'Prompt it.',600);
    var cv=document.createElement('canvas');
    cv.id='daisyC'; cv.width=W; cv.height=H; s.appendChild(cv);
    var g2=cv.getContext('2d');
    var liquid=el('div','',s); liquid.id='liquid';
    var lt=el('div','tx',liquid);
    lt.style.fontSize=L.fs.toFixed(2)+'px'; lt.style.fontWeight='700'; lt.style.color='#8ecfee';
    lt.textContent='Prompt it.';
    var gl=el('div','gloss',s); gl.style.fontSize=L.fs.toFixed(2)+'px'; gl.textContent='Prompt it.';
    var R=rng(3131), drops=[];
    for(var i=0;i<28;i++){
      var d=el('div','drop',liquid);
      var sz=lerp(8,26,R());
      d.style.width=sz+'px'; d.style.height=sz+'px';
      drops.push({n:d,x:lerp(340,940,R()),y:lerp(240,470,R()),sz:sz,ph:R()*6.283,sp:.4+R()*.9});
    }
    var pts=null;
    function samplePts(){
      var m=document.createElement('canvas'), mc=m.getContext('2d');
      m.width=W; m.height=200;
      mc.font='700 '+L.fs.toFixed(0)+'px -apple-system,"SF Pro Display",Helvetica,Arial,sans-serif';
      mc.textAlign='center'; mc.textBaseline='middle';
      mc.fillText('Prompt it.',W/2,100);
      var data=mc.getImageData(0,0,W,200).data, out=[];
      for(var y=0;y<200;y+=13){
        for(var x=0;x<W;x+=13){
          if(data[(y*W+x)*4+3]>110) out.push([x,y]);
        }
      }
      return out;
    }
    function daisy(x,y,r,rot,a){
      g2.save(); g2.translate(x,y); g2.rotate(rot); g2.globalAlpha=a;
      g2.fillStyle='#f4f3ef';
      for(var i=0;i<9;i++){
        g2.save(); g2.rotate(i/9*6.2832);
        g2.beginPath(); g2.ellipse(0,-r*.6,r*.25,r*.6,0,0,6.2832); g2.fill();
        g2.restore();
      }
      g2.fillStyle='#e6b229';
      g2.beginPath(); g2.arc(0,0,r*.3,0,6.2832); g2.fill();
      g2.restore();
    }
    return {node:s, update:function(t,p){
      var cq=smooth(seg(p,.01,.07))*(1-smooth(seg(p,.13,.19)));
      var gq=smooth(seg(p,.68,.76))*(1-smooth(seg(p,.92,1)));
      setO(L.tx,Math.max(cq,gq*.6));
      setT(L.tx,TXY+'scale('+lerp(1.04,1,eOut(seg(p,.02,.24))).toFixed(3)+')');
      if(gq>.01){ setC(L.tx,'rgba(198,126,112,1)'); setF(L.tx,'blur('+(3+gq*5).toFixed(1)+'px)') }
      else { setC(L.tx,'#f5f5f7'); setF(L.tx,'none') }

      var dq=smooth(seg(p,.15,.23))*(1-smooth(seg(p,.40,.46)));
      cv.style.opacity=dq.toFixed(3);
      if(dq>.004){
        if(!pts) pts=samplePts();
        g2.clearRect(0,0,W,H);
        var grow=eOut(seg(p,.15,.38));
        for(var i=0;i<pts.length;i++){
          var q=clamp(grow*1.4-((i*37)%100)/100*.4,0,1);
          if(q<=.02) continue;
          daisy(pts[i][0],pts[i][1]+260,lerp(4,15,q)+Math.sin(t*2+i)*.8,(i*1.7)%6.283,q);
        }
      }
      var lq=smooth(seg(p,.4,.48))*(1-smooth(seg(p,.6,.68)));
      setO(liquid,lq); setO(gl,lq*.9);
      var wob=Math.sin(t*2.2)*2.4;
      setT(lt,TXY+'translateY('+wob.toFixed(2)+'px)');
      setT(gl,TXY+'translateY('+wob.toFixed(2)+'px)');
      var burst=eOut(seg(p,.46,.74));
      for(i=0;i<drops.length;i++){
        var d=drops[i];
        d.n.style.left=(d.x+Math.cos(d.ph)*burst*lerp(30,170,d.sp*.7)-d.sz/2).toFixed(1)+'px';
        d.n.style.top=(d.y+Math.sin(d.ph)*burst*lerp(20,120,d.sp*.7)+Math.sin(t*1.6+d.ph)*3-d.sz/2).toFixed(1)+'px';
      }
    }};
  }

  /* =====================================================================
     11 \xB7 perform it
     ===================================================================== */
  function makePerform(){
    var s=el('div','scene');
    var keys=el('div','keys',s);
    for(var i=0;i<4;i++)el('u','',keys);
    var L=textLine(s,'Perform it.',575);
    var TINT=['#ffffff','#ffffff','#d8f0ff','#bfe6fb','#cfe8fb','#c46ff5','#a83af0','#ffffff','#f7d79a','#f2c37a','#f0bb6a'];
    var hands=el('div','',s);
    hands.innerHTML='<svg viewBox="0 0 1280 340" aria-hidden="true">'+
      '<g fill="#6f4a32">'+
      '<path d="M196 340V186c0-22 15-38 34-38 18 0 30 16 30 38v78l52-12c22-5 38 6 38 24 0 40-44 64-92 64z"/>'+
      '<path d="M262 340v-96c0-14 9-24 20-24s20 10 20 24v96z" fill="#7d5237"/>'+
      '<path d="M604 340V162c0-24 17-42 37-42 20 0 33 18 33 42v88l58-14c24-5 41 7 41 27 0 44-48 70-100 70z"/>'+
      '<path d="M676 340v-104c0-15 10-26 22-26s22 11 22 26v104z" fill="#7d5237"/>'+
      '</g></svg>';
    hands.style.cssText='position:absolute;left:0;right:0;bottom:0;height:340px;will-change:opacity,transform';
    return {node:s, update:function(t,p){
      var env=smooth(seg(p,.02,.16))*(1-smooth(seg(p,.84,1)));
      setO(L.tx,env);
      L.tx.style.textShadow='0 0 34px rgba(255,255,255,.45)';
      for(var i=0;i<L.chars.length;i++){
        setC(L.chars[i],TINT[i]||'#ffffff');
        setO(L.chars[i],1);
        setT(L.chars[i],'translateY('+(Math.sin(t*9+i*.7)*1.4).toFixed(2)+'px)');
      }
      setO(keys,env*smooth(seg(p,.06,.28)));
      setO(hands,env*smooth(seg(p,.1,.4)));
      setT(hands,'translateY('+((1-eOut(seg(p,.1,.5)))*60).toFixed(0)+'px)');
    }};
  }

  /* =====================================================================
     12 \xB7 loop it
     ===================================================================== */
  function makeLoop(){
    var s=el('div','scene');
    var L=textLine(s,'Loop it.',375);
    return {node:s, update:function(t,p){
      setO(L.tx,smooth(seg(p,.02,.14))*(1-smooth(seg(p,.9,1))));
      for(var i=0;i<L.chars.length;i++){
        var q=eOut(clamp(seg(p,.03+i*.03,.3+i*.03),0,1));
        var spin=(i===1||i===2)?Math.sin(t*4.6+i*.7)*140*(1-seg(p,.1,.34)):0;
        setT(L.chars[i],'translateY('+((1-q)*20).toFixed(1)+'px) rotateY('+spin.toFixed(0)+'deg)');
        setO(L.chars[i],q);
      }
    }};
  }

  /* =====================================================================
     13 \xB7 select it
     ===================================================================== */
  function makeSelect(){
    var s=el('div','scene');
    var L=textLine(s,'Select it.',499);
    L.chars.forEach(function(c){setC(c,'#48484d')});
    var lime=el('div','line',s);
    var lt=el('div','tx',lime);
    lt.style.fontSize=L.fs.toFixed(2)+'px'; lt.style.color='#a6f024';
    lt.style.textShadow='0 0 34px rgba(160,240,40,.6)';
    lt.innerHTML='<span>S</span><span style="opacity:0">elect it.</span>';
    var first=lt.firstChild;
    var cur=el('div','cursor',s);
    return {node:s, update:function(t,p){
      var env=smooth(seg(p,.02,.14))*(1-smooth(seg(p,.88,1)));
      setO(L.tx,env); setO(lt,env);
      var trace=eOut(seg(p,.08,.44));
      first.style.clipPath='inset('+((1-trace)*100).toFixed(1)+'% 0 0 0)';
      cur.style.left=(400+Math.sin(trace*3.4)*22).toFixed(1)+'px';
      cur.style.top=lerp(300,382,trace).toFixed(1)+'px';
      setO(cur,env*smooth(seg(p,.04,.14))*(1-seg(p,.5,.66)));
    }};
  }

  /* =====================================================================
     14 \xB7 write it \u2014 letters riding an s-curve
     ===================================================================== */
  function makeWrite(){
    var s=el('div','scene');
    var str='Write it.', fs=fitPx(str,620);
    var adv=advances(str,fs), total=adv.reduce(function(a,b){return a+b},0);
    var wrap=el('div','line',s);
    var svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('viewBox','0 0 1280 720');
    svg.setAttribute('width','1280'); svg.setAttribute('height','720');
    svg.style.cssText='position:absolute;left:0;top:0;overflow:visible';
    var path=document.createElementNS('http://www.w3.org/2000/svg','path');
    /* steep, flat, steep \u2014 the reference baseline is a stepped S */
    function P(u){
      var y=468+(378-468)*smooth(seg(u,0,.32))+(276-378)*smooth(seg(u,.6,1));
      return [336+700*u, y];
    }
    /* arc-length table so letters space evenly along the curve, not along x */
    var N=240, LUT=[0], prev=P(0), arc=0;
    for(var i=1;i<=N;i++){
      var pt=P(i/N);
      arc+=Math.hypot(pt[0]-prev[0],pt[1]-prev[1]);
      LUT.push(arc); prev=pt;
    }
    function uAt(dist){
      var d=clamp(dist,0,arc), lo=0, hi=N;
      while(hi-lo>1){var mid=(lo+hi)>>1; if(LUT[mid]<d)lo=mid; else hi=mid}
      var span=LUT[hi]-LUT[lo]||1;
      return (lo+(d-LUT[lo])/span)/N;
    }
    var dstr='M';
    for(i=0;i<=60;i++){ var q=P(i/60); dstr+=(i?' L':'')+q[0].toFixed(1)+' '+q[1].toFixed(1) }
    path.setAttribute('d',dstr);
    path.setAttribute('fill','none');
    path.setAttribute('stroke','#e0872a');
    path.setAttribute('stroke-width','2.4');
    path.setAttribute('stroke-linecap','round');
    svg.appendChild(path); wrap.appendChild(svg);
    var len=0;
    var glyphs=[];
    for(i=0;i<str.length;i++){
      var g=document.createElement('span');
      g.textContent=str[i]===' '?'\\u00a0':str[i];
      g.style.cssText='position:absolute;font-weight:600;letter-spacing:-.012em;line-height:1;white-space:pre;'+
        'font-size:'+fs.toFixed(2)+'px;transform-origin:0% 100%;will-change:transform,opacity';
      wrap.appendChild(g);
      glyphs.push({n:g, run:len});
      len+=adv[i];
    }
    var pad=(arc-total)/2;
    var dot=el('div','glowdot',s);
    return {node:s, update:function(t,p){
      var env=1-smooth(seg(p,.86,1));
      var draw=eOut(seg(p,.04,.72));
      var pl=path.getTotalLength?path.getTotalLength():1400;
      path.style.strokeDasharray=pl.toFixed(0);
      path.style.strokeDashoffset=(pl*(1-draw)).toFixed(0);
      path.style.opacity=(env*.95).toFixed(2);
      for(var i=0;i<glyphs.length;i++){
        var g=glyphs[i];
        var u=uAt(pad+g.run);
        var a=P(u), b=P(Math.min(1,u+.012));
        var ang=Math.atan2(b[1]-a[1],b[0]-a[0])*180/Math.PI;
        var q=clamp(seg(p,.06+i*.055,.2+i*.055),0,1);
        g.n.style.left=a[0].toFixed(1)+'px';
        g.n.style.top=a[1].toFixed(1)+'px';
        setT(g.n,'rotate('+ang.toFixed(2)+'deg) translate(0,-'+(fs*.78).toFixed(1)+'px) scale('+lerp(.86,1,eOut(q)).toFixed(3)+')');
        setO(g.n,q*env);
      }
      var hp=P(clamp(draw,0,1));
      dot.style.left=(hp[0]-8).toFixed(1)+'px';
      dot.style.top=(hp[1]-8).toFixed(1)+'px';
      setO(dot,env*smooth(seg(p,.04,.14))*(1-seg(p,.78,.9)));
    }};
  }

  /* =====================================================================
     15 \xB7 scrap it
     ===================================================================== */
  function makeScrap(){
    var s=el('div','scene');
    var L=textLine(s,'Scrap it.',469);
    var bin=el('div','bin',s);
    el('div','cup',bin); el('div','rim',bin); el('div','hole',bin);
    var bits=el('div','',bin);
    bits.style.cssText='position:absolute;left:22px;right:22px;top:2px;height:18px;overflow:hidden';
    ['#e8e9ec','#f0d24a','#4fb8e0','#e05a8a'].forEach(function(c,i){
      var q=el('div','',bits);
      q.style.cssText='position:absolute;left:'+(i*26+4)+'px;top:'+(3+(i%2)*4)+'px;width:22px;height:14px;'+
        'border-radius:4px;background:'+c+';opacity:.9';
    });
    var wad=el('div','wad',s);
    wad.innerHTML='<svg viewBox="0 0 46 46" aria-hidden="true"><path fill="#eceef2" d="M7 16l10-11 15 4 7 11-5 14-15 7-11-7z"/>'+
      '<path fill="#c8ccd4" d="M17 5l6 15-16-4zM39 20l-5 14-11-14z"/></svg>';
    return {node:s, update:function(t,p){
      var env=smooth(seg(p,.01,.06))*(1-smooth(seg(p,.5,.62)));
      setO(L.tx,env);
      for(var i=0;i<L.chars.length;i++){
        var q=eOut(clamp(seg(p,.01+i*.008,.07+i*.008),0,1));
        setO(L.chars[i],q);
        setT(L.chars[i],'translateY('+((1-q)*16).toFixed(1)+'px)');
      }
      setO(bin,smooth(seg(p,.04,.16))*(1-smooth(seg(p,.92,1))));
      setT(bin,'scale('+lerp(.9,1,eOut(seg(p,.04,.26))).toFixed(3)+')');
      setO(bits,smooth(seg(p,.56,.68)));
      var drop=seg(p,.28,.56);
      wad.style.left=lerp(760,614,drop).toFixed(0)+'px';
      wad.style.top=lerp(300,444,eIn(drop)+drop*.25).toFixed(0)+'px';
      setO(wad,drop>0&&drop<.95?1:0);
      setT(wad,'rotate('+(drop*540).toFixed(0)+'deg) scale('+lerp(1.15,.72,drop).toFixed(2)+')');
    }};
  }

  /* =====================================================================
     16 \xB7 move it
     ===================================================================== */
  function makeMove(){
    var s=el('div','scene');
    var L=textLine(s,'Move it.',462);
    return {node:s, update:function(t,p){
      setO(L.tx,smooth(seg(p,.02,.14))*(1-smooth(seg(p,.9,1))));
      for(var i=0;i<L.chars.length;i++){
        var q=eOut(clamp(seg(p,.06+i*.06,.5+i*.06),0,1));
        var dir=i%2?1:-1;
        setT(L.chars[i],'translate('+(dir*86*(1-q)).toFixed(1)+'px,'+(dir*-14*(1-q)).toFixed(1)+'px)');
        setO(L.chars[i],Math.min(1,q*1.6));
      }
    }};
  }

  /* =====================================================================
     17 \xB7 upscale it \u2014 sharp lime left, pixellated right
     ===================================================================== */
  function makeUpscale(){
    var s=el('div','scene');
    var L=textLine(s,'Upscale it.',598);
    var lime=el('div','line',s);
    var lt=el('div','tx',lime);
    lt.style.fontSize=L.fs.toFixed(2)+'px';
    lt.style.color='#a6f024';
    lt.style.textShadow='0 0 40px rgba(150,240,40,.55)';
    lt.textContent='Upscale it.';
    var cv=document.createElement('canvas');
    cv.width=W; cv.height=H;
    cv.style.cssText='position:absolute;left:0;top:0;image-rendering:pixelated';
    s.appendChild(cv);
    var g2=cv.getContext('2d');
    var lo=document.createElement('canvas');
    var SC=12;
    lo.width=Math.ceil(W/SC); lo.height=Math.ceil(H/SC);
    var lg=lo.getContext('2d');
    lg.font='600 '+(L.fs/SC).toFixed(2)+'px -apple-system,"SF Pro Display",Helvetica,Arial,sans-serif';
    lg.textAlign='center'; lg.textBaseline='middle';
    lg.fillStyle='#f5f5f7';
    lg.fillText('Upscale it.',W/2/SC,H/2/SC);
    var divider=el('div','',s);
    divider.style.cssText='position:absolute;top:177px;width:1.5px;height:365px;background:rgba(255,255,255,.85)';
    return {node:s, update:function(t,p){
      var env=smooth(seg(p,.02,.14))*(1-smooth(seg(p,.86,1)));
      var sweep=seg(p,.04,.96);
      var x=lerp(320,920,sweep*sweep*.6+sweep*.4);
      setO(L.tx,0);
      setO(lt,env);
      lt.style.clipPath='inset(0 '+(W-x).toFixed(0)+'px 0 0)';
      g2.clearRect(0,0,W,H);
      g2.save();
      g2.beginPath(); g2.rect(x,0,W-x,H); g2.clip();
      g2.imageSmoothingEnabled=false;
      g2.globalAlpha=env;
      g2.drawImage(lo,0,0,lo.width,lo.height,0,0,W,H);
      g2.restore();
      divider.style.left=x.toFixed(1)+'px';
      setO(divider,env*(1-seg(p,.8,.94)));
    }};
  }

  /* =====================================================================
     18 \xB7 share it \u2014 shatters into glowing shards
     ===================================================================== */
  function makeShare(){
    var s=el('div','scene');
    var L=textLine(s,'Share it.',421);
    var TINT=['#eaf4ff','#eaf4ff','#4da6f0','#4da6f0','#4da6f0','#ffffff','#ffffff','#ffffff','#ffffff'];
    /* slice inside the word's own bounds so each shard reads as a fragment */
    var R=rng(8123), frags=[], TW=421, x00=(W-TW)/2;
    for(var i=0;i<9;i++){
      var f=el('div','frag',s);
      f.style.fontSize=L.fs.toFixed(2)+'px';
      f.textContent='Share it.';
      var xa=(x00+i*TW/9)/W*100, xb=(x00+(i+1)*TW/9)/W*100, sk=R()*16-8;
      f.style.clipPath='polygon('+xa.toFixed(2)+'% '+(R()*22).toFixed(0)+'%,'+xb.toFixed(2)+'% 0%,'+
        xb.toFixed(2)+'% '+(78+R()*22).toFixed(0)+'%,'+xa.toFixed(2)+'% 100%)';
      frags.push({n:f,a:(i/8-.5)*2.2+(R()*.5-.25),sp:.5+R()*.9,rot:(R()*2-1)*70,sk:sk});
    }
    return {node:s, update:function(t,p){
      var shat=seg(p,.62,1);
      setO(L.tx,smooth(seg(p,.02,.14))*(1-smooth(seg(p,.6,.7))));
      L.tx.style.textShadow='0 0 46px rgba(190,225,255,.5)';
      for(var i=0;i<L.chars.length;i++){
        var q=eOut(clamp(seg(p,.03+i*.03,.3+i*.03),0,1));
        setC(L.chars[i],TINT[i]||'#ffffff');
        setO(L.chars[i],q);
        setT(L.chars[i],'translateY('+((1-q)*18).toFixed(1)+'px)');
      }
      for(i=0;i<frags.length;i++){
        var f=frags[i], e=eOut(shat);
        setO(f.n,shat>0?smooth(seg(p,.62,.67))*(1-seg(p,.94,1)):0);
        setT(f.n,TXY+'translate('+(f.a*430*e).toFixed(0)+'px,'+((f.sp-.9)*470*e).toFixed(0)+'px) '+
          'rotate('+(f.rot*1.5*e).toFixed(1)+'deg) skewY('+(f.sk*e).toFixed(1)+'deg) scale('+lerp(1,1.9,e).toFixed(2)+')');
      }
    }};
  }

  /* =====================================================================
     19 \xB7 price
     ===================================================================== */
  function makePrice(){
    var s=el('div','scene');
    var str='Get it for $12.99/mo.';
    var wrap=el('div','line',s), tx=el('div','tx',wrap);
    tx.style.fontSize=fitPx(str,811).toFixed(2)+'px';
    var chars=letters(tx,str);
    for(var i=11;i<chars.length;i++) chars[i].style.textShadow='0 0 30px rgba(255,255,255,.6)';
    return {node:s, update:function(t,p){
      setO(tx,smooth(seg(p,.02,.14))*(1-smooth(seg(p,.9,1))));
      for(var i=0;i<chars.length;i++){
        var q=i<11?eOut(seg(p,.04,.2)):clamp(seg(p,.16+(i-11)*.028,.24+(i-11)*.028),0,1);
        setO(chars[i],q);
        setT(chars[i],'translateY('+((1-eOut(q))*12).toFixed(1)+'px)');
      }
    }};
  }

  /* =====================================================================
     20 \xB7 scrolling app picker
     ===================================================================== */
  function makeApps(){
    var s=el('div','scene');
    var APPS=[
      ['Final Cut Pro','#a24ef0','linear-gradient(160deg,#5b2ba8,#2a1050)'],
      ['Motion','#f04ad0','linear-gradient(160deg,#f07ad8,#7a1060)'],
      ['Pixelmator Pro','#e0324a','linear-gradient(160deg,#c02038,#4a0a14)'],
      ['Compressor','#f0d05a','linear-gradient(160deg,#f0c24a,#5a4210)'],
      ['Numbers','#7fd44a','linear-gradient(160deg,#7fd44a,#1f5a14)'],
      ['Keynote','#5ab4f0','linear-gradient(160deg,#5ab4f0,#12456b)'],
      ['Logic Pro','#d8dde6','linear-gradient(160deg,#d8dde6,#5a5f68)'],
      ['GarageBand','#f0863a','linear-gradient(160deg,#f0a04a,#6b3a10)']
    ];
    var rows=APPS.map(function(a){
      var d=el('div','appRow',s);
      d.innerHTML='<em style="background:'+a[2]+'"></em>'+a[0];
      d.style.color=a[1];
      d.style.fontSize='80px';
      return d;
    });
    return {node:s, update:function(t,p){
      var pos=.2+6*Math.pow(p,2.2);
      var fade=1-smooth(seg(p,.96,1));
      for(var i=0;i<rows.length;i++){
        var d=i-pos;
        var near=clamp(1-Math.abs(d),0,1);
        var sc=lerp(.86,1.42,Math.pow(near,1.5));
        rows[i].style.top='0px';
        rows[i].style.transform='translateY('+(360+d*132-48).toFixed(1)+'px) scale('+sc.toFixed(3)+')';
        setO(rows[i],clamp(1.3-Math.abs(d)*.92,0,1)*fade);
        setF(rows[i],near<.6?'brightness(.6)':'none');
      }
    }};
  }

  /* =====================================================================
     timeline
     ===================================================================== */
  var SCENES=[
    {a:0.00,  b:1.72,  s:makeWordmark()},
    {a:1.72,  b:3.42,  s:makeWall()},
    {a:3.42,  b:5.62,  s:makeLines()},
    {a:5.62,  b:6.92,  s:makeDock()},
    {a:6.92,  b:7.72,  s:makeBeatText()},
    {a:7.72,  b:9.52,  s:makeTracks()},
    {a:9.52,  b:11.42, s:makeEditVideo()},
    {a:11.42, b:13.32, s:makeMac()},
    {a:13.32, b:16.10, s:makeCanvasScene()},
    {a:16.10, b:18.02, s:makePrompt()},
    {a:18.02, b:18.56, s:makePerform()},
    {a:18.56, b:19.42, s:makeLoop()},
    {a:19.42, b:20.26, s:makeSelect()},
    {a:20.26, b:21.34, s:makeWrite()},
    {a:21.34, b:23.10, s:makeScrap()},
    {a:23.10, b:24.20, s:makeMove()},
    {a:24.20, b:24.86, s:makeUpscale()},
    {a:24.86, b:25.82, s:makeShare()},
    {a:25.82, b:27.32, s:makePrice()},
    {a:27.32, b:28.52, s:makeApps()},
    {a:28.52, b:DUR,   s:makeWordmark()}
  ];

  var active=null;
  function render(t){
    var k=Math.min((stage.clientWidth||W)/W,(stage.clientHeight||H)/H);
    comp.style.transform='scale('+k.toFixed(4)+')';
    for(var i=0;i<SCENES.length;i++){
      var sc=SCENES[i];
      if(t>=sc.a && t<sc.b){
        if(active!==sc){
          if(active) active.s.node.classList.remove('on');
          sc.s.node.classList.add('on');
          active=sc;
        }
        sc.s.update(t-sc.a, seg(t,sc.a,sc.b));
        return;
      }
    }
  }

  /* ---------- driver ---------- */
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var start=null, raf=0, playing=!reduce, held=false, at=0;
  function seek(t){at=((t%DUR)+DUR)%DUR;render(at);return at}
  function play(){if(playing&&raf)return;playing=true;start=performance.now()-at*1000;if(!raf)raf=requestAnimationFrame(tick)}
  function pause(){playing=false;if(raf){cancelAnimationFrame(raf);raf=0}}
  function tick(now){
    if(!playing){raf=0;return}
    raf=requestAnimationFrame(tick);
    if(start===null)start=now;
    at=((now-start)/1000)%DUR;
    render(at);
  }
  window.addEventListener('resize',function(){render(at)});
  if(reduce){ seek(29.6) } else {
    raf=requestAnimationFrame(tick);
    document.addEventListener('visibilitychange',function(){
      if(document.hidden){ if(playing){held=true;pause()} }
      else if(held){ held=false; play() }
    });
  }
  window.__DUR=DUR;
  window.__seek=function(t){pause();return seek(t)};
  window.__play=play; window.__pause=pause; window.__time=function(){return at};
})();
<\/script>
</body>
</html>
`;var Gp=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Epilude \u2014 Footer</title>
<style>
  :root {
    --olive-400: #a9a9ac;
    --olive-500: #7a7a7d;
    --olive-950: #0c0c0d;
    --white: #fff;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    background: var(--olive-950);
    color: var(--white);
    min-height: 100%;
  }
  body {
    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
  a { color: inherit; text-decoration: none; }
  ul { list-style: none; }
  h3 { font-size: inherit; font-weight: 400; }

  footer {
    background: var(--olive-950);
    color: var(--white);
    padding-top: 4rem;
  }
  .inner { padding: 4rem 0 2rem; }
  .wrap {
    width: 100%;
    max-width: 42rem;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  .cols {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
    font-size: .875rem;
    line-height: 1.75rem;
  }
  .cols h3 { color: var(--white); }
  .cols ul {
    margin-top: .5rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }
  .cols a { color: var(--olive-400); }
  .cols a:hover { color: #d7d7d9; }

  .storm-wrap {
    margin-top: 4rem;
    user-select: none;
    -webkit-user-select: none;
  }
  .storm {
    position: relative;
    overflow: hidden;
    width: 100%;
    aspect-ratio: 8.541554959785524;
  }
  .storm canvas { display: block; width: 100%; height: 100%; }

  .legal {
    margin-top: 1.5rem;
    font-size: .875rem;
    line-height: 1.75rem;
    color: var(--olive-500);
  }
  .legal-row {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .legal-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .75rem;
    text-align: center;
  }
  .legal nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: .25rem 1rem;
    color: var(--olive-400);
  }
  .legal nav a:hover { color: #d7d7d9; }

  @media (min-width: 640px) {
    .legal-row {
      flex-direction: row;
      justify-content: space-between;
    }
    .legal-left {
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .legal nav { justify-content: flex-start; }
  }
  @media (min-width: 768px) {
    .wrap { max-width: 48rem; }
    .cols { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  }
  @media (min-width: 1024px) {
    .wrap { max-width: 80rem; padding: 0 2.5rem; }
  }
</style>
</head>
<body>
<footer id="footer">
  <div class="inner">
    <div class="wrap">
      <nav class="cols" aria-label="Footer">
        <div>
          <h3>Product</h3>
          <ul>
            <li><a href="https://app.epilude.com">Download</a></li>
            <li><a href="https://www.epilude.com/features/ai-smart-edits">AI Smart Edits</a></li>
            <li><a href="https://www.epilude.com/features/tone-match">Tone Match</a></li>
            <li><a href="https://www.epilude.com/features/vocabulary">Vocabulary</a></li>
            <li><a href="https://www.epilude.com/features/shortcuts">Shortcuts</a></li>
            <li><a href="https://www.epilude.com/features/actions">Actions</a></li>
            <li><a href="https://www.epilude.com/features/privacy">Local Mode</a></li>
            <li><a href="https://www.epilude.com/features/meetings">Meeting Notes</a></li>
          </ul>
        </div>
        <div>
          <h3>Solutions</h3>
          <ul>
            <li><a href="https://www.epilude.com/leaders">For Leaders</a></li>
            <li><a href="https://www.epilude.com/lawyers">For Lawyers</a></li>
            <li><a href="https://www.epilude.com/creators">For Content Creators</a></li>
            <li><a href="https://www.epilude.com/developers">For Developers</a></li>
            <li><a href="https://www.epilude.com/sales">For Sales</a></li>
            <li><a href="https://www.epilude.com/students">For Students</a></li>
            <li><a href="https://www.epilude.com/customer-support">For Customer Support</a></li>
          </ul>
        </div>
        <div>
          <h3>Compare</h3>
          <ul>
            <li><a href="https://www.epilude.com/best-dictation-app-for-mac">Best dictation app for Mac</a></li>
            <li><a href="https://www.epilude.com/compare/wispr-flow">Epilude vs Wispr Flow</a></li>
            <li><a href="https://www.epilude.com/compare/superwhisper">Epilude vs Superwhisper</a></li>
            <li><a href="https://www.epilude.com/compare/macwhisper">Epilude vs MacWhisper</a></li>
            <li><a href="https://www.epilude.com/compare/aqua-voice">Epilude vs Aqua Voice</a></li>
          </ul>
        </div>
        <div>
          <h3>Resources</h3>
          <ul>
            <li><a href="https://www.epilude.com/pricing">Pricing</a></li>
            <li><a href="https://www.epilude.com/news">News</a></li>
            <li><a href="https://www.epilude.com/help">Help Center</a></li>
            <li><a href="https://www.epilude.com/help/changelog">Changelog</a></li>
            <li><a href="https://www.epilude.com/trust">Trust &amp; Security</a></li>
          </ul>
        </div>
      </nav>
    </div>

    <div class="wrap storm-wrap" aria-hidden="true">
      <div class="storm" id="storm">
        <canvas id="storm-canvas"></canvas>
      </div>
    </div>

    <div class="wrap legal">
      <div class="legal-row">
        <div class="legal-left">
          <p>\xA9 2026 Epilude. All rights reserved.</p>
          <nav aria-label="Legal">
            <a href="https://www.epilude.com/terms">Terms</a>
            <a href="https://www.epilude.com/privacy">Privacy</a>
            <a href="https://www.epilude.com/cookie-policy">Cookies</a>
            <a href="https://www.epilude.com/refund">Refund</a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</footer>

<script>
(function () {
  var WORDMARK =
    '<svg width="3186" height="373" viewBox="0 0 3186 373" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M442.967 0.00610352H769.252L702.801 372.082H376.459L442.967 0.00610352ZM367.675 0.00610352H417.869L351.361 372.082H301.168L367.675 0.00610352ZM225.878 372.08L292.388 0.00708008H254.739L188.232 372.082H150.589L217.094 0.00610352H336.306L269.799 372.081L280.255 372.082H200.781L225.878 372.08ZM141.804 0.00610352H173.176L106.666 372.082H75.2949L141.804 0.00610352ZM66.2705 0.00610352H91.6074L25.1006 372.082H0L66.2705 0.00610352Z" fill="#F4F4F0"/>' +
    '<path d="M2797.67 372.078L2863.05 0H3185.69L3171.87 76.5417H2935.34L2923.11 144.047H3144.23L3130.94 220.057H2909.82L2896.54 295.536H3133.6L3120.31 372.078H2797.67Z" fill="#F4F4F0"/>' +
    '<path d="M2385.62 372.078L2451 0H2630.66C2740.69 0 2795.97 46.244 2795.97 138.732C2795.97 155.21 2794.38 172.75 2790.66 191.886C2769.39 314.14 2699.23 372.078 2570.07 372.078H2385.62ZM2484.49 295.004H2580.7C2656.18 295.004 2692.85 263.112 2706.67 186.039C2709.33 173.282 2709.86 161.056 2709.86 150.957C2709.86 99.3979 2682.22 77.0733 2619.5 77.0733H2523.29L2484.49 295.004Z" fill="#F4F4F0"/>' +
    '<path d="M2154.34 372.112C2045.37 372.112 1990.62 333.807 1990.62 243.445C1990.62 228.03 1991.68 212.084 1994.87 194.543L2028.89 0H2114.47L2079.92 197.733C2077.26 209.958 2076.2 220.589 2076.2 230.688C2076.2 280.653 2103.84 295.039 2162.31 295.039C2232.47 295.039 2268.62 271.085 2281.9 197.733L2316.45 0H2402.03L2366.95 200.39C2345.69 322.113 2274.99 372.112 2154.34 372.112Z" fill="#F4F4F0"/>' +
    '<path d="M1641.99 372.078L1707.36 0H1792.94L1740.85 295.004H1961.97L1948.68 372.078H1641.99Z" fill="#F4F4F0"/>' +
    '<path d="M1498.82 372.078L1564.2 0H1649.78L1584.4 372.078H1498.82Z" fill="#F4F4F0"/>' +
    '<path d="M1113.77 372.078L1179.15 0H1403.99C1477.87 0 1510.83 30.8293 1510.83 91.4249C1510.83 103.119 1509.77 116.407 1507.11 130.227C1492.76 209.958 1453.96 248.761 1365.72 248.761H1221.14L1199.35 372.078H1113.77ZM1234.43 172.75H1362.53C1397.08 172.75 1416.75 156.804 1422.59 123.849C1423.13 119.065 1423.66 114.813 1423.66 111.092C1423.66 87.1725 1408.77 76.0102 1379.54 76.0102H1251.44L1234.43 172.75Z" fill="#F4F4F0"/>' +
    '<path d="M746.362 372.078L811.742 0H1134.39L1120.57 76.5417H884.031L871.806 144.047H1092.93L1079.64 220.057H858.517L845.229 295.536H1082.3L1069.01 372.078H746.362Z" fill="#F4F4F0"/>' +
    "</svg>";

  var PALETTE = [[255, 255, 255], [226, 232, 240], [191, 205, 225]];
  var FORMATS = ["dot", "dot", "square"];
  var SIZE_SMALL = [1.4, 2.8];
  var SIZE_BIG = [3, 4.2];
  var BIG_CHANCE = 0.07;
  var GAP = 6;
  var SPEED = 2;
  var SEED = 1337;
  var GAMMA = 0.8;
  var DUR = 8;
  var TAU = Math.PI * 2;

  function noise(x, y, t) {
    var a = x + 0.7 * Math.sin(1.2 * y + t);
    var r = y + 0.7 * Math.cos(1.1 * x - t);
    return (Math.sin(1.3 * a + 0.6 * t) + Math.cos(1.5 * r - 0.5 * t) + Math.sin((a + r) * 0.9 + 0.3 * t)) / 3;
  }

  function snowfall(p, t, n) {
    var swirl = n.swirl ? n.swirl * noise(3 * p.nx, 3 * p.ny, 0.5 * t) : 0;
    var sway = (n.sway || 0) * Math.sin(0.8 * t + p.offset * TAU + 4 * p.ny) + swirl;
    var i = n.axis === "x" ? p.nx : p.ny;
    var l = n.axis === "x" ? p.ny : p.nx;
    var o = i * n.freq - t * n.fall + p.offset * n.freq + sway + (n.wind || 0) * l;
    var s = o - Math.floor(o);
    return s < n.trail ? 1 - s / n.trail : 0;
  }

  function squall(p, t) {
    var band = 0.35 + 0.65 * Math.pow(0.5 + 0.5 * Math.sin(3 * p.nx - 0.5 * t), 2);
    var flake = snowfall(p, t, { fall: 0.26, freq: 5, trail: 0.4, sway: 0.14, wind: 0.8 });
    return {
      a: 0.04 + 0.95 * band * Math.pow(flake, 1.8),
      p: 0.7 * p.offset
    };
  }

  function lerpRGB(a, b, t) {
    return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
  }

  function mixPalette(p) {
    var e = Math.max(0, Math.min(1, p)) * (PALETTE.length - 1);
    var r = Math.floor(e);
    var s = e - r;
    return lerpRGB(PALETTE[r], PALETTE[Math.min(PALETTE.length - 1, r + 1)], s);
  }

  var canvas = document.getElementById("storm-canvas");
  var host = document.getElementById("storm");
  var ctx = canvas.getContext("2d");
  var particles = [];
  var maskImg = null;
  var maskReady = false;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var playing = !reduced;
  var tNow = 0;
  var t0 = performance.now();
  var raf = 0;
  var visible = true;

  function lcg(seed) {
    var e = seed >>> 0;
    return function () {
      e = (1664525 * e + 0x3c6ef35f) >>> 0;
      return e / 0xffffffff;
    };
  }

  function makeMask(w, h) {
    if (!maskImg || !maskReady || !maskImg.width || !maskImg.height) return null;
    var off = document.createElement("canvas");
    off.width = w;
    off.height = h;
    var g = off.getContext("2d");
    if (!g) return null;
    var scale = Math.min(w / maskImg.width, h / maskImg.height);
    var dw = maskImg.width * scale;
    var dh = maskImg.height * scale;
    g.drawImage(maskImg, (w - dw) / 2, (h - dh) / 2, dw, dh);
    var data;
    try { data = g.getImageData(0, 0, w, h).data; }
    catch (e) { return null; }
    return function (x, y) {
      var ix = Math.min(w - 1, Math.max(0, Math.round(x)));
      var iy = Math.min(h - 1, Math.max(0, Math.round(y)));
      var i = (iy * w + ix) * 4;
      var lum = (0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]) / 255;
      return Math.pow(lum * (data[i + 3] / 255), GAMMA);
    };
  }

  function rebuild() {
    var w = host.clientWidth;
    var h = host.clientHeight;
    if (!w || !h) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.floor(w * dpr));
    canvas.height = Math.max(1, Math.floor(h * dpr));
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    var sample = makeMask(w, h);
    var rand = lcg(SEED);
    var cols = Math.ceil(w / GAP);
    var rows = Math.ceil(h / GAP);
    var ox = (w - (cols - 1) * GAP) / 2;
    var oy = (h - (rows - 1) * GAP) / 2;
    var cx = (cols - 1) / 2;
    var cy = (rows - 1) / 2;
    var maxd = Math.hypot(cx, cy) || 1;
    particles = [];
    for (var y = 0; y < rows; y++) {
      for (var x = 0; x < cols; x++) {
        var format = FORMATS[Math.floor(rand() * FORMATS.length)];
        var range = rand() < BIG_CHANCE ? SIZE_BIG : SIZE_SMALL;
        var size = range[0] + rand() * (range[1] - range[0]);
        var px = ox + x * GAP;
        var py = oy + y * GAP;
        particles.push({
          cx: px,
          cy: py,
          nx: cols > 1 ? x / (cols - 1) : 0.5,
          ny: rows > 1 ? y / (rows - 1) : 0.5,
          dist: Math.hypot(x - cx, y - cy) / maxd,
          format: format,
          size: size,
          phase: rand() * Math.PI * 2,
          speed: 0.6 + 2.6 * rand(),
          offset: rand(),
          mask: sample ? sample(px, py) : 1
        });
      }
    }
  }

  function drawParticle(p, t) {
    var field = squall(p, t);
    var alpha = field.a;
    var rgb = mixPalette(field.p);
    alpha = Math.max(0, Math.min(1, alpha));
    if (p.mask < 1) alpha = p.mask * (0.3 + 0.7 * alpha);
    if (alpha <= 0.005) return;
    ctx.fillStyle = "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + alpha + ")";
    var hx = p.cx, hy = p.cy, d = p.size, r = d / 2;
    if (p.format === "square") ctx.fillRect(hx - r, hy - r, d, d);
    else {
      ctx.beginPath();
      ctx.arc(hx, hy, r, 0, TAU);
      ctx.fill();
    }
  }

  function render(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < particles.length; i++) drawParticle(particles[i], t);
  }

  function apply(t) {
    tNow = ((t % DUR) + DUR) % DUR;
    render(tNow * SPEED);
  }

  function tick(now) {
    if (playing && visible) {
      tNow = ((now - t0) / 1000) % DUR;
      render(tNow * SPEED);
    }
    raf = requestAnimationFrame(tick);
  }

  function play() {
    playing = true;
    t0 = performance.now() - tNow * 1000;
  }

  function pause() {
    playing = false;
  }

  var img = new Image();
  img.onload = function () {
    maskImg = img;
    maskReady = true;
    rebuild();
    apply(tNow);
  };
  img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(WORDMARK);

  rebuild();
  apply(0);
  raf = requestAnimationFrame(tick);

  window.addEventListener("resize", function () {
    rebuild();
    apply(tNow);
  });

  if (typeof ResizeObserver !== "undefined") {
    var lastW = host.clientWidth, lastH = host.clientHeight;
    new ResizeObserver(function () {
      if (host.clientWidth !== lastW || host.clientHeight !== lastH) {
        lastW = host.clientWidth;
        lastH = host.clientHeight;
        rebuild();
        apply(tNow);
      }
    }).observe(host);
  }

  if (typeof IntersectionObserver !== "undefined") {
    new IntersectionObserver(function (entries) {
      var on = entries[0] && entries[0].isIntersecting;
      if (on === visible) return;
      visible = !!on;
      if (visible) t0 = performance.now() - tNow * 1000;
    }, { rootMargin: "120px" }).observe(canvas);
  }

  document.addEventListener("visibilitychange", function () {
    if (!document.hidden && playing) t0 = performance.now() - tNow * 1000;
  });

  window.__DUR = DUR;
  window.__seek = function (t) { pause(); apply(t); };
  window.__play = play;
  window.__pause = pause;
  window.__time = function () { return tNow; };
})();
<\/script>
</body>
</html>
`;var jp=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Issue 01 \u2014 Expanse Field</title>
    
    <!-- Frameworks & Animations -->
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
</head>
<body class="bg-[#f6f5f4] text-neutral-900 antialiased selection:bg-neutral-900 selection:text-white" 
      style="font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">

    <!-- WebGL Background Context -->
    <canvas id="glcanvas" class="fixed inset-0 w-full h-full -z-10 pointer-events-none"></canvas>

    <!-- Subtle Diagonal Texture Overlay -->
    <div class="fixed inset-0 pointer-events-none -z-10" 
         style="background-image: repeating-linear-gradient(45deg, rgba(0,0,0,0.015) 0, rgba(0,0,0,0.015) 1px, transparent 1px, transparent 6px);">
    </div>

    <!-- Global Framed Grid System -->
    <div class="fixed inset-4 md:inset-6 pointer-events-none z-50 flex flex-col justify-between mix-blend-difference text-white/50"
         style="border: 1px solid rgba(255,255,255,0.15); border-image: linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.3), rgba(255,255,255,0.1)) 1;">
        
        <!-- Corner Brackets -->
        <div class="absolute -top-[1px] -left-[1px] w-5 h-5 border-t border-l border-white/60"></div>
        <div class="absolute -top-[1px] -right-[1px] w-5 h-5 border-t border-r border-white/60"></div>
        <div class="absolute -bottom-[1px] -left-[1px] w-5 h-5 border-b border-l border-white/60"></div>
        <div class="absolute -bottom-[1px] -right-[1px] w-5 h-5 border-b border-r border-white/60"></div>

        <!-- Structural Guide Lines -->
        <div class="absolute left-[33.33%] top-0 bottom-0 w-[1px] bg-white/10 hidden md:block"></div>
        <div class="absolute right-[33.33%] top-0 bottom-0 w-[1px] bg-white/10 hidden md:block"></div>
    </div>

    <!-- Document Content -->
    <main class="w-full relative z-10">

        <!-- PAGE 01: COVER -->
        <section id="cover" class="relative min-h-screen p-6 md:p-12 flex flex-col pt-16 md:pt-24 pb-12">
            
            <!-- Masthead -->
            <header class="flex justify-between items-start mb-16 md:mb-24 relative z-20 mix-blend-difference text-white">
                <div class="text-xs uppercase tracking-widest font-medium">Issue N\xBA 01</div>
                <div class="text-xs uppercase tracking-widest font-medium text-right leading-tight">
                    Vol. 1 <br>
                    <span class="text-white/60">Aura Asset Library</span>
                </div>
            </header>

            <!-- Cover Layout Grid -->
            <div class="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20 h-full items-end pb-12 md:pb-0">
                
                <!-- Left: Typography -->
                <div class="col-span-1 md:col-span-2 flex flex-col justify-end order-2 md:order-1">
                    <h1 class="text-6xl md:text-[9vw] leading-[0.8] tracking-tight font-semibold mix-blend-difference text-white uppercase" 
                        style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                        Digital<br>Artifacts
                    </h1>
                    <div class="mt-8 md:mt-12 max-w-sm mix-blend-difference text-white/70">
                        <p class="text-sm font-normal leading-relaxed">
                            Exploring the intersection of generative environments, raw computational textures, and structured grid systems to establish physical presence in the void.
                        </p>
                    </div>
                </div>

                <!-- Right: Featured Asset -->
                <div class="col-span-1 flex items-center justify-center md:justify-end order-1 md:order-2 h-full pb-8 md:pb-0">
                    <div class="relative w-full max-w-sm aspect-[4/5] p-2 bg-black/5 backdrop-blur-md"
                         style="border: 1px solid rgba(255,255,255,0.1); border-image: linear-gradient(to bottom right, rgba(255,255,255,0.4), rgba(255,255,255,0.05)) 1;">
                         <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_1600w.jpg" 
                              class="w-full h-full object-cover filter grayscale contrast-125 opacity-90 mix-blend-luminosity" 
                              alt="Cover Feature Portrait">
                         
                         <!-- Image Container Corner Details -->
                         <div class="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/60 mix-blend-difference"></div>
                         <div class="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white/60 mix-blend-difference"></div>
                    </div>
                </div>
            </div>

            <!-- Footer Barcode -->
            <div class="mt-auto flex justify-between items-end relative z-20 mix-blend-difference text-white">
                <div class="text-xs font-mono uppercase tracking-widest flex items-center gap-3">
                    <iconify-icon icon="solar:barcode-line" class="text-3xl opacity-80" stroke-width="1.5"></iconify-icon>
                    <span>978-1-2345-678-0</span>
                </div>
                <div class="text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2">
                    Scroll <iconify-icon icon="solar:arrow-down-linear" class="text-sm"></iconify-icon>
                </div>
            </div>
        </section>

        <!-- PAGE 02: ARTICLE SPREAD -->
        <section id="page-2" class="relative min-h-screen bg-[#f6f5f4] p-6 md:p-12 flex flex-col justify-center shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
             <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 h-full items-center">
                
                <!-- Left Figure -->
                <div id="figure-img" class="md:col-span-4 flex flex-col justify-between h-full py-12 md:py-24">
                    <div class="text-[10px] uppercase tracking-widest font-medium text-neutral-400 mb-6 border-b border-neutral-300 pb-2 inline-block max-w-fit">
                        [ Fig. 01 ]
                    </div>
                    <div class="relative overflow-hidden aspect-[3/4]">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/724142aa-44a6-48d3-9cf3-761e00d05b78_1600w.jpg" 
                             class="w-full h-full object-cover filter grayscale contrast-125" 
                             alt="Deconstructed Pyramid Architecture">
                    </div>
                    <div class="text-[10px] uppercase tracking-widest mt-6 text-neutral-500 flex justify-between">
                        <span>Architecture</span>
                        <span>001</span>
                    </div>
                </div>

                <!-- Right Editorial Text -->
                <div class="md:col-span-8 md:pl-12 pt-8 md:pt-0">
                    <div class="text-xs uppercase tracking-widest font-medium text-neutral-400 mb-8 flex items-center gap-2">
                        <iconify-icon icon="solar:document-text-linear" class="text-base"></iconify-icon> Index Introduction
                    </div>
                    
                    <!-- GSAP Stagger Reveal Target -->
                    <div id="stagger-text" class="text-3xl md:text-5xl lg:text-[3.5vw] leading-[1.05] tracking-tight font-medium text-neutral-900">
                        The evolution of surface interfaces demands a departure from sterile environments. We look towards raw noise and structured grids to ground logic in physical realism.
                    </div>

                    <div class="mt-12 md:mt-20 flex flex-col md:flex-row gap-8 md:gap-12 text-sm font-normal text-neutral-600 leading-relaxed border-t border-neutral-200 pt-8">
                        <p class="flex-1">
                            By manipulating fragments of light through mathematical shaders, we simulate the imperfections of analog film. The resulting grain breathes life into rigid columns, oscillating to mimic a natural rhythm within strict constraints.
                        </p>
                        <p class="flex-1">
                            This intersection of organic distortion and rigid geometry creates a meditative atmosphere. It is not merely a background, but a dynamic environment that continuously responds to time and structure.
                        </p>
                    </div>
                </div>
             </div>
        </section>

    </main>

    <!-- Logic & Shaders -->
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            
            // -----------------------------------------------------
            // 1. WebGL Background Setup (Three.js)
            // -----------------------------------------------------
            const initWebGL = () => {
                const canvas = document.getElementById('glcanvas');
                const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

                const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
                const scene = new THREE.Scene();
                const geometry = new THREE.PlaneGeometry(2, 2);

                const uniforms = {
                    u_time: { value: 0.0 },
                    u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
                };

                const material = new THREE.ShaderMaterial({
                    uniforms: uniforms,
                    vertexShader: \`
                        void main() {
                            gl_Position = vec4(position, 1.0);
                        }
                    \`,
                    fragmentShader: \`
                        uniform vec2 u_resolution;
                        uniform float u_time;

                        float random(vec2 st) {
                            return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
                        }

                        void main() {
                            vec2 st = gl_FragCoord.xy / u_resolution.xy;
                            float numBars = 11.0;
                            float barIndex = floor(st.x * numBars);
                            float t = barIndex / (numBars - 1.0);

                            // Breathing pulse animation
                            float anim = sin(u_time * 0.5 + t * 3.0) * 0.025;

                            // Curve for horizon line
                            float targetHeight = 0.15 + pow(t, 1.3) * 0.5 + anim;

                            // Color gradient: Dark base -> Blue/Pink mid -> Cutoff
                            vec3 colorBase = vec3(0.04, 0.04, 0.06);
                            vec3 colorMid = mix(vec3(0.1, 0.3, 0.8), vec3(0.8, 0.2, 0.5), st.x);
                            vec3 color = mix(colorBase, colorMid, smoothstep(0.1, 0.7, st.y));

                            // Stepped horizon cutoff matching body background
                            if (st.y > targetHeight) {
                                gl_FragColor = vec4(0.965, 0.961, 0.957, 1.0); // #f6f5f4
                                return;
                            }

                            // High-frequency film grain
                            float noise = random(st * (u_time * 0.1)) * 0.15;
                            gl_FragColor = vec4(color + noise, 1.0);
                        }
                    \`,
                    transparent: true
                });

                const mesh = new THREE.Mesh(geometry, material);
                scene.add(mesh);

                const animate = (time) => {
                    uniforms.u_time.value = time * 0.001;
                    renderer.render(scene, camera);
                    requestAnimationFrame(animate);
                };
                requestAnimationFrame(animate);

                window.addEventListener('resize', () => {
                    renderer.setSize(window.innerWidth, window.innerHeight);
                    uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
                });
            };

            // -----------------------------------------------------
            // 2. GSAP Interactions & Masked Text Reveal
            // -----------------------------------------------------
            const initGSAP = () => {
                gsap.registerPlugin(ScrollTrigger);

                // Entry Animation for Cover
                const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
                tl.fromTo("#cover h1", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 2, delay: 0.2 })
                  .fromTo("#cover p", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5 }, "-=1.5")
                  .fromTo("#cover img", { scale: 1.1, filter: "blur(10px)", opacity: 0 }, { scale: 1, filter: "blur(0px)", opacity: 0.9, duration: 2.5 }, "-=1.8");

                // Text Splitter Utility for Masked Reveal
                const textElement = document.getElementById('stagger-text');
                const words = textElement.innerText.trim().split(' ');
                textElement.innerHTML = '';

                words.forEach(word => {
                    const wordWrap = document.createElement('span');
                    // Style inline to avoid external CSS
                    wordWrap.style.display = 'inline-block';
                    wordWrap.style.overflow = 'hidden';
                    wordWrap.style.marginRight = '0.2em';
                    wordWrap.style.paddingBottom = '0.1em'; // Prevent clipping bottom of letters
                    wordWrap.style.verticalAlign = 'top';

                    const innerSpan = document.createElement('span');
                    innerSpan.innerText = word;
                    innerSpan.style.display = 'inline-block';
                    innerSpan.classList.add('reveal-word');

                    wordWrap.appendChild(innerSpan);
                    textElement.appendChild(wordWrap);
                });

                // ScrollTrigger: Masked Stagger Reveal
                gsap.fromTo('.reveal-word', 
                    { y: '110%', rotationZ: 4 }, 
                    {
                        y: '0%',
                        rotationZ: 0,
                        duration: 1.2,
                        ease: "power4.out",
                        stagger: 0.03,
                        scrollTrigger: {
                            trigger: '#stagger-text',
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                // Subtle Image Parallax on Page 2
                gsap.fromTo('#figure-img img', 
                    { yPercent: -15, scale: 1.1 },
                    {
                        yPercent: 15,
                        scale: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: '#page-2',
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    }
                );
            };

            // Initialize
            initWebGL();
            initGSAP();
        });
    <\/script>
</body>
</html>`;var Fp=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Preview</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <style>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    body {
      height: 100%;
      overflow: auto;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #ffffff;
      color: #000000;
    }
    .component-wrapper {
      width: 100%;
      height: 100%;
      padding: 0;
      box-sizing: border-box;
      overflow: auto;
    }
  </style>
</head>
<body>
  <div class="component-wrapper">
    <html><head></head><body><button type="button" class="button">
  <div class="points_wrapper">
    <i class="point"></i>
    <i class="point"></i>
    <i class="point"></i>
    <i class="point"></i>
    <i class="point"></i>
    <i class="point"></i>
    <i class="point"></i>
    <i class="point"></i>
    <i class="point"></i>
    <i class="point"></i>
  </div>

  <span class="inner">
    Sign Up
    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  </span>
  <style>
    .button {
      cursor: pointer;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      transition: all 0.25s ease;
      background: radial-gradient(65.28% 65.28% at 50% 100%,
          rgba(34, 211, 238, 0.8) 0%,
          rgba(34, 211, 238, 0) 100%),
        linear-gradient(0deg, #2563eb, #2563eb);
      border-radius: 0.75rem;
      border: none;
      outline: none;
      padding: 12px 18px;
      min-height: 48px;
      min-width: 102px;
    }
  
    .button::before,
    .button::after {
      content: "";
      position: absolute;
      transition: all 0.5s ease-in-out;
      z-index: 0;
    }
  
    .button::before {
      inset: 1px;
      background: linear-gradient(177.95deg,
          rgba(255, 255, 255, 0.19) 0%,
          rgba(255, 255, 255, 0) 100%);
      border-radius: calc(0.75rem - 1px);
    }
  
    .button::after {
      inset: 2px;
      background: radial-gradient(65.28% 65.28% at 50% 100%,
          rgba(34, 211, 238, 0.8) 0%,
          rgba(34, 211, 238, 0) 100%),
        linear-gradient(0deg, #2563eb, #2563eb);
      border-radius: calc(0.75rem - 2px);
    }
  
    .button:active {
      transform: scale(0.95);
    }
  
    .points_wrapper {
      overflow: hidden;
      width: 100%;
      height: 100%;
      pointer-events: none;
      position: absolute;
      z-index: 1;
    }
  
    .points_wrapper .point {
      bottom: -10px;
      position: absolute;
      animation: floating-points infinite ease-in-out;
      pointer-events: none;
      width: 2px;
      height: 2px;
      background-color: #fff;
      border-radius: 9999px;
    }
  
    @keyframes floating-points {
      0% {
        transform: translateY(0);
      }
  
      85% {
        opacity: 0;
      }
  
      100% {
        transform: translateY(-55px);
        opacity: 0;
      }
    }
  
    .points_wrapper .point:nth-child(1) {
      left: 10%;
      opacity: 1;
      animation-duration: 2.35s;
      animation-delay: 0.2s;
    }
  
    .points_wrapper .point:nth-child(2) {
      left: 30%;
      opacity: 0.7;
      animation-duration: 2.5s;
      animation-delay: 0.5s;
    }
  
    .points_wrapper .point:nth-child(3) {
      left: 25%;
      opacity: 0.8;
      animation-duration: 2.2s;
      animation-delay: 0.1s;
    }
  
    .points_wrapper .point:nth-child(4) {
      left: 44%;
      opacity: 0.6;
      animation-duration: 2.05s;
    }
  
    .points_wrapper .point:nth-child(5) {
      left: 50%;
      opacity: 1;
      animation-duration: 1.9s;
    }
  
    .points_wrapper .point:nth-child(6) {
      left: 75%;
      opacity: 0.5;
      animation-duration: 1.5s;
      animation-delay: 1.5s;
    }
  
    .points_wrapper .point:nth-child(7) {
      left: 88%;
      opacity: 0.9;
      animation-duration: 2.2s;
      animation-delay: 0.2s;
    }
  
    .points_wrapper .point:nth-child(8) {
      left: 58%;
      opacity: 0.8;
      animation-duration: 2.25s;
      animation-delay: 0.2s;
    }
  
    .points_wrapper .point:nth-child(9) {
      left: 98%;
      opacity: 0.6;
      animation-duration: 2.6s;
      animation-delay: 0.1s;
    }
  
    .points_wrapper .point:nth-child(10) {
      left: 65%;
      opacity: 1;
      animation-duration: 2.5s;
      animation-delay: 0.2s;
    }
  
    .inner {
      z-index: 2;
      gap: 6px;
      position: relative;
      width: 100%;
      color: white;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      transition: color 0.2s ease-in-out;
    }
  
    .inner svg.icon {
      width: 18px;
      height: 18px;
      transition: transform 0.3s ease;
      stroke: white;
      fill: none;
    }
  
    .button:hover svg.icon {
      transform: translateX(2px);
    }
  
    .button:hover svg.icon path {
      animation: dash 0.8s linear forwards;
    }
  
    @keyframes dash {
      0% {
        stroke-dasharray: 0, 20;
        stroke-dashoffset: 0;
      }
  
      50% {
        stroke-dasharray: 10, 10;
        stroke-dashoffset: -5;
      }
  
      100% {
        stroke-dasharray: 20, 0;
        stroke-dashoffset: -10;
      }
    }
  </style>
</button></body></html>
  </div>
  
    <script>
      (function() {
        function checkAndCenter() {
          // Use double requestAnimationFrame to ensure DOM is fully painted and layout is stable
          requestAnimationFrame(function() {
            requestAnimationFrame(function() {
              const wrapper = document.querySelector('.component-wrapper');
              if (!wrapper) return;
              
              // Get all child elements
              const children = Array.from(wrapper.children);
              if (children.length === 0) return;
              
              // Temporarily override wrapper styles to shrink-wrap for measurement
              // Set inline styles to shrink-wrap (inline styles override CSS)
              wrapper.style.display = 'inline-block';
              wrapper.style.width = 'auto';
              wrapper.style.height = 'auto';
              wrapper.style.overflow = 'visible';
              wrapper.style.boxSizing = 'content-box';
              
              // Force multiple reflows to ensure styles are fully applied
              void wrapper.offsetHeight;
              void wrapper.offsetWidth;
              void wrapper.offsetHeight;
              
              // Measure the wrapper's content size
              const contentWidth = wrapper.offsetWidth;
              const contentHeight = wrapper.offsetHeight;
              
              // Restore original styles by removing inline styles we added
              wrapper.style.removeProperty('display');
              wrapper.style.removeProperty('width');
              wrapper.style.removeProperty('height');
              wrapper.style.removeProperty('overflow');
              wrapper.style.removeProperty('box-sizing');
              
              // If content is less than 500x500, center it
              if (contentWidth > 0 && contentHeight > 0 && contentWidth < 500 && contentHeight < 500) {
                wrapper.style.display = 'flex';
                wrapper.style.alignItems = 'center';
                wrapper.style.justifyContent = 'center';
              }
            });
          });
        }
        
        // Check immediately and after delays to ensure content is rendered and styled
        function runChecks() {
          checkAndCenter();
          setTimeout(checkAndCenter, 50);
          setTimeout(checkAndCenter, 150);
          setTimeout(checkAndCenter, 300);
          setTimeout(checkAndCenter, 500);
          setTimeout(checkAndCenter, 1000);
        }
        
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', runChecks);
        } else {
          runChecks();
        }
        
        // Also check when images or other resources load
        window.addEventListener('load', () => {
          setTimeout(checkAndCenter, 100);
          setTimeout(checkAndCenter, 300);
        });
        
        // Use ResizeObserver to detect size changes
        if (window.ResizeObserver) {
          setTimeout(() => {
            const wrapper = document.querySelector('.component-wrapper');
            if (wrapper) {
              const observer = new ResizeObserver(() => {
                setTimeout(checkAndCenter, 50);
              });
              observer.observe(wrapper);
            }
          }, 500);
        }
      })();
    <\/script>
  
</body>
</html>
`;var Yp=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>New Grainient Collection Added \u2014 motion</title>
<style>
  html,body{margin:0;height:100%;background:#000;overflow:hidden}
  body{-webkit-font-smoothing:antialiased}
  canvas{display:block;width:100vw;height:100vh}
</style>
</head>
<body>
<canvas id="stage"></canvas>
<script>
(function(){
'use strict';

/* ------------------------------------------------------------------ *
 * Design frame: 2962 x 2160.  Every length below is in that space.
 * ------------------------------------------------------------------ */
var DW = 2962, DH = 2160, DASP = DW / DH;

var RING = {
  cx: 1484, cy: 1108,   /* projected ring centre                        */
  a: 712,               /* projected semi-major axis (px)               */
  ratio: 0.492,         /* semi-minor / semi-major -> plane tilt 60.5deg */
  axis: 25.5,           /* screen angle of the major axis (deg, y down)  */
  n: 12,                /* tiles                                         */
  tile: 346,            /* tile side in ring units (R = a)               */
  radius: 0.22,         /* corner radius as a fraction of the side       */
  dist: 13,             /* camera distance in ring radii                 */
  phase: 93             /* psi of tile 0 at t = 0 (deg)                  */
};

var DUR = 15.015;       /* one full revolution = a seamless loop */

var HEAD = [
  { s:'NEW GRAINIENT',    top:930,  w:1370, fill:'#d0d0d0' },
  { s:'COLLECTION ADDED', top:1114, w:1775, fill:'#ffffff' }
];
var CAP = 142;          /* headline cap height */
var SMALL = 22;         /* small-label cap height */

var SANS = '"Helvetica Neue",Helvetica,"Inter",Arial,system-ui,sans-serif';

/* ------------------------------------------------------------------ *
 * Deterministic noise
 * ------------------------------------------------------------------ */
function rng(seed){
  var s = seed >>> 0;
  return function(){
    s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

function mkc(w,h){
  var c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

/* ------------------------------------------------------------------ *
 * Tile artwork \u2014 eleven grainy gradient "wallpapers"
 * ------------------------------------------------------------------ */
var TS = 512;                       /* texture resolution */
var grainTile = (function(){
  var c = mkc(160,160), x = c.getContext('2d'), d = x.createImageData(160,160), r = rng(0x51F3);
  for (var i = 0; i < d.data.length; i += 4){
    var v = 128 + (r() - 0.5) * 116;
    d.data[i] = d.data[i+1] = d.data[i+2] = v;
    d.data[i+3] = 255;
  }
  x.putImageData(d,0,0);
  return c;
})();

function lin(x,x0,y0,x1,y1,stops){
  var g = x.createLinearGradient(x0*TS,y0*TS,x1*TS,y1*TS);
  for (var i=0;i<stops.length;i++) g.addColorStop(stops[i][0],stops[i][1]);
  return g;
}
function rad(x,cx,cy,r,stops,r0){
  var g = x.createRadialGradient(cx*TS,cy*TS,(r0||0)*TS,cx*TS,cy*TS,r*TS);
  for (var i=0;i<stops.length;i++) g.addColorStop(stops[i][0],stops[i][1]);
  return g;
}
function fill(x,style){ x.fillStyle = style; x.fillRect(0,0,TS,TS); }

/* soft blurred stroke: draw off-canvas and keep only its shadow */
function band(x,pts,color,width,blur,passes){
  x.save();
  x.translate(-2*TS,0);
  x.shadowOffsetX = 2*TS; x.shadowBlur = blur*TS; x.shadowColor = color;
  x.strokeStyle = color; x.lineWidth = width*TS; x.lineCap='round'; x.lineJoin='round';
  x.beginPath();
  x.moveTo(pts[0][0]*TS,pts[0][1]*TS);
  for (var i=1;i<pts.length-1;i+=2){
    x.quadraticCurveTo(pts[i][0]*TS,pts[i][1]*TS,pts[i+1][0]*TS,pts[i+1][1]*TS);
  }
  for (var p=0;p<(passes||1);p++) x.stroke();
  x.restore();
}
function glow(x,cx,cy,r,color,mode){
  x.save();
  x.globalCompositeOperation = mode || 'lighter';
  x.fillStyle = rad(x,cx,cy,r,[[0,color],[1,'rgba(0,0,0,0)']]);
  x.fillRect(0,0,TS,TS);
  x.restore();
}

/* a wavy spine across the tile, used for silk bands and chrome folds */
function spine(y0,amp,ph,tilt){
  var p = [], i, u;
  for (i=0;i<5;i++){ u = -0.12 + i*0.31; p.push([u, y0 + amp*Math.sin(ph + u*4.2) + tilt*u]); }
  return p;
}
/* one wavy edge across the tile */
function wavy(x,y0,ph,amp,freq,tilt){
  var i,u,y;
  x.beginPath();
  for (i=0;i<=10;i++){
    u = -0.12 + i*0.124; y = y0 + amp*Math.sin(ph + u*freq) + (tilt||0)*u;
    if (i===0) x.moveTo(u*TS,y*TS); else x.lineTo(u*TS,y*TS);
  }
}
function wavyStroke(x,y0,ph,amp,freq,tilt,color,w,blur){
  x.save();
  x.translate(-2*TS,0);
  x.shadowOffsetX = 2*TS; x.shadowBlur = blur*TS; x.shadowColor = color;
  x.strokeStyle = color; x.lineWidth = w*TS; x.lineCap = 'round';
  wavy(x,y0,ph,amp,freq,tilt); x.stroke(); x.stroke();
  x.restore();
}
/* closed band between two wavy edges */
function bandPath(x,y0,h,ph,amp,freq,tilt){
  var i,u;
  x.beginPath();
  for (i=0;i<=10;i++){
    u = -0.12 + i*0.124;
    x.lineTo(u*TS, (y0 + amp*Math.sin(ph+u*freq) + tilt*u)*TS);
  }
  for (i=10;i>=0;i--){
    u = -0.12 + i*0.124;
    x.lineTo(u*TS, (y0 + h + amp*0.62*Math.sin(ph+1.9+u*freq*0.86) + tilt*u)*TS);
  }
  x.closePath();
}
/* folded liquid-chrome sheet: dark body, hot crest, iridescent underside */
function chrome(x,y0,h,ph,amp,freq,tilt,hot){
  x.save();
  x.translate(-2*TS,0);
  x.shadowOffsetX = 2*TS; x.shadowBlur = 0.06*TS; x.shadowColor = 'rgba(132,12,0,0.9)';
  x.fillStyle = '#000';
  bandPath(x,y0-0.018,h+0.036,ph,amp,freq,tilt); x.fill(); x.fill();
  x.restore();

  x.save();
  bandPath(x,y0,h,ph,amp,freq,tilt); x.clip();
  var g = x.createLinearGradient(0,(y0-0.03)*TS,0,(y0+h+0.03)*TS);
  g.addColorStop(0,   'rgba(8,0,2,1)');
  g.addColorStop(0.12,'rgba(58,2,6,1)');
  g.addColorStop(0.3, 'rgba(146,10,8,1)');
  g.addColorStop(0.43,'rgba(220,42,16,1)');
  g.addColorStop(0.49, hot || 'rgba(255,206,132,1)');
  g.addColorStop(0.56,'rgba(206,28,12,1)');
  g.addColorStop(0.72,'rgba(90,4,6,1)');
  g.addColorStop(0.88,'rgba(26,0,4,1)');
  g.addColorStop(1,   'rgba(5,0,2,1)');
  x.fillStyle = g; x.fillRect(0,0,TS,TS);
  x.restore();

  wavyStroke(x,y0+0.004,ph,amp,freq,tilt,'rgba(255,238,214,0.55)',0.005,0.004);
  wavyStroke(x,y0+h-0.006,ph+1.9,amp*0.62,freq*0.86,tilt,'rgba(40,220,200,0.42)',0.008,0.009);
  wavyStroke(x,y0+h+0.012,ph+1.9,amp*0.62,freq*0.86,tilt,'rgba(170,230,80,0.28)',0.006,0.008);
}
/* sink one side of the tile back into shadow so the mass reads as a fold, not a ribbon */
function shade(x,x0,x1,strength){
  x.save();
  var g = x.createLinearGradient(x0*TS,0,x1*TS,0);
  g.addColorStop(0,'rgba(0,0,0,0)');
  g.addColorStop(0.55,'rgba(0,0,0,'+(strength*0.7).toFixed(2)+')');
  g.addColorStop(1,'rgba(0,0,0,'+strength.toFixed(2)+')');
  x.fillStyle = g; x.fillRect(0,0,TS,TS);
  x.restore();
}

var ART = [
/* 0 \u2014 violet field with a dark torus punched through it */
function(x){
  fill(x, rad(x,0.5,0.48,0.82,[
    [0,'#020105'],[0.3,'#030106'],[0.37,'#1d0a48'],[0.46,'#4f2c94'],
    [0.54,'#38167e'],[0.66,'#22084e'],[0.86,'#0a0218'],[1,'#04010a']]));
  glow(x,0.3,0.24,0.4,'rgba(96,66,180,0.4)');
  glow(x,0.76,0.8,0.3,'rgba(52,18,110,0.35)');
},
/* 1 \u2014 white silk, magenta + orange flow */
function(x){
  fill(x,'#fbf9fb');
  band(x,spine(0.52,0.09,0.6,-0.18),'rgba(236,44,140,0.92)',0.19,0.055,2);
  band(x,spine(0.66,0.07,2.2,-0.14),'rgba(255,96,26,0.9)',0.16,0.05,2);
  band(x,spine(0.4,0.06,3.4,-0.1),'rgba(70,120,255,0.55)',0.09,0.05,1);
  band(x,spine(0.58,0.08,1.2,-0.16),'rgba(255,255,255,0.9)',0.05,0.03,2);
  band(x,spine(0.86,0.05,0.2,-0.05),'rgba(150,40,200,0.5)',0.1,0.06,1);
  glow(x,0.22,0.14,0.46,'rgba(255,255,255,0.85)');
},
/* 2 \u2014 deep blue, near-black in the far corner */
function(x){
  fill(x, lin(x,0.98,0,0.06,1,[
    [0,'#01020e'],[0.3,'#03082e'],[0.56,'#0820c4'],[0.76,'#1a4dff'],[0.95,'#7ea8ff'],[1,'#b6ccff']]));
  glow(x,0.2,0.86,0.3,'rgba(176,206,255,0.8)');
  glow(x,0.06,0.98,0.22,'rgba(226,120,220,0.55)');
  glow(x,0.92,0.06,0.44,'rgba(0,0,8,0.75)','source-over');
},
/* 3 \u2014 pale blue horizon crossed by a coral band */
function(x){
  fill(x, lin(x,0.08,0,0,1,[
    [0,'#9dbccd'],[0.14,'#5b87ad'],[0.26,'#245693'],[0.36,'#7793a8'],
    [0.45,'#e2523a'],[0.52,'#e07a5e'],[0.58,'#82aec8'],[0.68,'#2467a8'],
    [0.8,'#0e3970'],[0.92,'#081c40'],[1,'#051026']]));
  band(x,spine(0.42,0.02,1.0,0.03),'rgba(240,140,105,0.45)',0.05,0.03,1);
  band(x,spine(0.63,0.02,2.4,-0.03),'rgba(150,200,235,0.4)',0.05,0.03,1);
},
/* 4 \u2014 navy rising into violet-blue */
function(x){
  fill(x, lin(x,0.88,0.04,0.14,0.96,[
    [0,'#010103'],[0.34,'#030316'],[0.58,'#0d066a'],[0.78,'#2a10b8'],[0.93,'#5a38e0'],[1,'#8464f4']]));
  glow(x,0.14,0.92,0.3,'rgba(110,86,210,0.55)');
  glow(x,0.9,0.08,0.42,'rgba(0,0,4,0.75)','source-over');
},
/* 5 \u2014 nearly black, a dim red-brown smear */
function(x){
  fill(x,'#020104');
  band(x,spine(0.46,0.07,1.4,-0.1),'rgba(88,30,18,0.7)',0.24,0.13,2);
  band(x,spine(0.44,0.07,1.4,-0.1),'rgba(168,64,36,0.45)',0.08,0.07,1);
  glow(x,0.16,0.2,0.32,'rgba(20,30,64,0.35)');
  glow(x,0.9,0.88,0.22,'rgba(70,64,110,0.3)');
},
/* 6 \u2014 pale silk, lavender + amber flow */
function(x){
  fill(x,'#e3dcec');
  band(x,spine(0.42,0.1,2.6,0.16),'rgba(132,58,220,0.9)',0.18,0.055,2);
  band(x,spine(0.6,0.09,1.1,0.2),'rgba(240,104,20,0.92)',0.16,0.05,2);
  band(x,spine(0.5,0.09,2.0,0.18),'rgba(245,40,140,0.65)',0.1,0.045,1);
  band(x,spine(0.55,0.09,1.6,0.18),'rgba(255,255,255,0.8)',0.04,0.03,2);
  glow(x,0.82,0.94,0.36,'rgba(255,255,255,0.7)');
  glow(x,0.08,0.08,0.26,'rgba(60,40,110,0.4)','source-over');
},
/* 7 \u2014 amber corner, red chrome fold with cyan fringe */
function(x){
  fill(x,'#12030a');
  glow(x,0.02,0.04,0.42,'rgba(255,142,36,0.85)');
  glow(x,0.5,0.5,0.62,'rgba(178,26,14,0.8)');
  chrome(x,0.18,0.58,1.1,0.07,4.2,-0.1,'rgba(255,216,158,1)');
  shade(x,0.55,1.2,0.45);
  glow(x,0.94,0.94,0.3,'rgba(60,14,96,0.45)');
},
/* 8 \u2014 red chrome, cyan and lime fringes, purple shadow */
function(x){
  fill(x,'#040103');
  glow(x,0.4,0.46,0.5,'rgba(48,14,10,0.8)');
  chrome(x,0.3,0.44,2.4,0.06,4.8,0.1,'rgba(255,190,110,1)');
  shade(x,0.3,1.15,0.72);
  band(x,spine(0.9,0.05,0.4,0.1),'rgba(70,16,110,0.45)',0.12,0.08,1);
},
/* 9 \u2014 dark navy above, red chrome band below */
function(x){
  fill(x, lin(x,0.4,0,0.6,1,[[0,'#03040e'],[0.42,'#060a22'],[0.72,'#070412'],[1,'#030106']]));
  glow(x,0.28,0.14,0.42,'rgba(18,32,84,0.55)');
  chrome(x,0.6,0.3,0.9,0.05,3.8,-0.08,'rgba(255,198,120,1)');
  shade(x,0.3,1.1,0.8);
},
/* 10 \u2014 chrome fold above, blue-pink streaks over a pale plate */
function(x){
  fill(x,'#050208');
  chrome(x,0.02,0.34,2.0,0.045,4.4,-0.07,'rgba(255,206,132,1)');
  shade(x,0.45,1.1,0.7);
  x.save();
  x.beginPath(); x.moveTo(0,TS*0.72); x.lineTo(TS,TS*0.56); x.lineTo(TS,TS); x.lineTo(0,TS); x.closePath();
  x.clip();
  fill(x, lin(x,0,0.5,0.4,1,[[0,'#cfd6dc'],[0.6,'#e8eaee'],[1,'#f4f5f7']]));
  band(x,spine(0.7,0.03,1.0,-0.1),'rgba(245,44,96,0.8)',0.055,0.03,2);
  band(x,spine(0.76,0.03,1.6,-0.1),'rgba(30,146,245,0.75)',0.045,0.026,2);
  band(x,spine(0.82,0.03,2.2,-0.08),'rgba(245,130,54,0.5)',0.035,0.026,1);
  x.restore();
},
/* 11 \u2014 pale plate lit by streaks of pink light */
function(x){
  fill(x,'#08050a');
  var i;
  for (i=0;i<9;i++){
    var y0 = 0.06 + i*0.045, a = 0.8 - i*0.06;
    band(x,spine(y0,0.02,0.4+i*0.5,-0.2),
         'rgba('+(250-i*3)+','+(30+i*15)+','+(80+i*5)+','+a.toFixed(2)+')',0.032,0.018,2);
  }
  band(x,spine(0.28,0.02,1.2,-0.18),'rgba(255,120,72,0.55)',0.05,0.035,1);
  band(x,spine(0.14,0.02,2.4,-0.2),'rgba(120,190,255,0.4)',0.03,0.02,1);
  x.save();
  x.beginPath(); x.moveTo(0,TS*0.72); x.lineTo(TS,TS*0.4); x.lineTo(TS,TS); x.lineTo(0,TS); x.closePath();
  x.clip();
  fill(x, lin(x,0.1,0.4,0.6,1,[[0,'#c6c7cd'],[0.5,'#e2e2e6'],[1,'#f2f2f4']]));
  x.restore();
}
];

function roundRectPath(x,w,h,r){
  x.beginPath();
  x.moveTo(-w/2+r,-h/2);
  x.lineTo(w/2-r,-h/2); x.quadraticCurveTo(w/2,-h/2,w/2,-h/2+r);
  x.lineTo(w/2,h/2-r);  x.quadraticCurveTo(w/2,h/2,w/2-r,h/2);
  x.lineTo(-w/2+r,h/2); x.quadraticCurveTo(-w/2,h/2,-w/2,h/2-r);
  x.lineTo(-w/2,-h/2+r);x.quadraticCurveTo(-w/2,-h/2,-w/2+r,-h/2);
  x.closePath();
}

function buildTextures(){
  var front = [], back = [];
  for (var i=0;i<ART.length;i++){
    var c = mkc(TS,TS), x = c.getContext('2d');
    ART[i](x);
    /* film grain */
    x.save();
    x.globalCompositeOperation = 'overlay';
    x.globalAlpha = 0.15;
    var p = x.createPattern(grainTile,'repeat');
    x.fillStyle = p; x.fillRect(0,0,TS,TS);
    x.restore();
    front.push(c);

    /* reverse side: darker and washed out */
    var d = mkc(TS,TS), y = d.getContext('2d');
    y.drawImage(c,0,0);
    y.globalCompositeOperation = 'saturation';
    y.fillStyle = 'rgba(128,128,128,0.2)'; y.fillRect(0,0,TS,TS);
    y.globalCompositeOperation = 'multiply';
    y.fillStyle = 'rgba(6,8,18,0.75)'; y.fillRect(0,0,TS,TS);
    back.push(d);
  }
  return { front: front, back: back };
}
var TEX = buildTextures();

/* ------------------------------------------------------------------ *
 * Ring geometry.  u / v span the ring plane; z points at the viewer.
 * ------------------------------------------------------------------ */
var ax = RING.axis * Math.PI/180, cf = RING.ratio, sf = Math.sqrt(1-cf*cf);
var U = [Math.cos(ax), Math.sin(ax), 0];
var V = [-Math.sin(ax)*cf, Math.cos(ax)*cf, sf];
var AXIS = [                                    /* U x V \u2014 the ring's own axis */
  U[1]*V[2]-U[2]*V[1],
  U[2]*V[0]-U[0]*V[2],
  U[0]*V[1]-U[1]*V[0]
];

/* ------------------------------------------------------------------ *
 * Canvas + layout
 * ------------------------------------------------------------------ */
var cv = document.getElementById('stage'), ctx = cv.getContext('2d');
var W = 0, H = 0, K = 1, OX = 0, OY = 0, headLayer = null, labelLayer = null;

function d2sx(x){ return OX + x*K; }
function d2sy(y){ return OY + y*K; }

/* draw text whose inked box matches a target: capHeight and (optional) width */
function fitText(x,str,font,weight,cap,cx,capTop,targetW,color,align){
  var probe = 100;
  x.font = weight+' '+probe+'px '+font;
  var m = x.measureText('H');
  var capUnit = (m.actualBoundingBoxAscent||71) / probe;
  var size = cap / capUnit;
  x.font = weight+' '+size+'px '+font;
  var mm = x.measureText(str);
  var inkW = (mm.actualBoundingBoxRight||mm.width) + (mm.actualBoundingBoxLeft||0);
  var sx = targetW ? targetW / inkW : 1;
  x.save();
  x.fillStyle = color;
  x.textBaseline = 'alphabetic';
  x.translate(cx, capTop + cap);
  x.scale(sx,1);
  x.textAlign = align || 'center';
  var left = (mm.actualBoundingBoxLeft||0);
  x.fillText(str, align === 'left' ? left : 0, 0);
  x.restore();
  return inkW*sx;
}

function buildHead(){
  headLayer = mkc(Math.max(1,W), Math.max(1,H));
  var x = headLayer.getContext('2d');
  for (var i=0;i<HEAD.length;i++){
    var h = HEAD[i];
    fitText(x, h.s, SANS, '700', CAP*K, d2sx(1481), d2sy(h.top), h.w*K, h.fill);
  }
}

function buildLabels(){
  labelLayer = mkc(Math.max(1,W), Math.max(1,H));
  var x = labelLayer.getContext('2d');
  var cap = SMALL*K, dim = '#b0b0b0', pad = 88*K;
  /* corner marks hug the viewport so the frame reads at any aspect */
  x.save();
  x.fillStyle = dim; x.textBaseline = 'alphabetic'; x.textAlign = 'left';
  var f = '400 ' + (cap/0.717) + 'px ' + SANS;
  x.font = f;
  if (x.letterSpacing !== undefined) x.letterSpacing = (0.03*cap)+'px';
  x.fillText('VOID BLUE   /   GRADIENT STRIPS   /   RED AURA', pad, pad + cap);
  x.fillText('2026', pad, H - pad);
  x.textAlign = 'right';
  x.fillText('GRAINIENT.SUPPLY', W - pad, H - pad);
  x.restore();

  /* the two notes flanking the headline sit with the ring */
  var pitch = 33*K;
  var L = ['(50+) Gradients','Backgrounds','Added,'];
  for (var i=0;i<L.length;i++)
    fitText(x, L[i], SANS, '500', cap, d2sx(344), d2sy(1148) + i*pitch, 0, '#ffffff', 'left');
  var Rt = ['Gradients &','AI-Generated','Backgrounds'];
  for (var j=0;j<Rt.length;j++)
    fitText(x, Rt[j], SANS, '500', cap, d2sx(2310), d2sy(932) + j*32.5*K, 0, '#ffffff', 'left');
}

function resize(){
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  W = Math.round(window.innerWidth * dpr);
  H = Math.round(window.innerHeight * dpr);
  cv.width = W; cv.height = H;
  var S = Math.min(W, H*DASP);           /* effective design width */
  K = S / DW;
  OX = (W - DW*K)/2;
  OY = (H - DH*K)/2;
  buildHead();
  buildLabels();
}

/* ------------------------------------------------------------------ *
 * Frame
 * ------------------------------------------------------------------ */
function project(p){
  var k = RING.a*K*RING.dist / (RING.dist - p[2]);
  return [ d2sx(RING.cx) + k*p[0], d2sy(RING.cy) + k*p[1], k ];
}

function drawTile(i, psi){
  var c = Math.cos(psi), s = Math.sin(psi);
  var C  = [c*U[0]+s*V[0], c*U[1]+s*V[1], c*U[2]+s*V[2]];      /* centre, |C| = 1 */
  var T  = [-s*U[0]+c*V[0], -s*U[1]+c*V[1], -s*U[2]+c*V[2]];   /* tangent          */
  var h  = RING.tile/(2*RING.a);                               /* half side, ring units */
  var p0 = project(C);
  var pT = project([C[0]+T[0]*h, C[1]+T[1]*h, C[2]+T[2]*h]);
  var pA = project([C[0]+AXIS[0]*h, C[1]+AXIS[1]*h, C[2]+AXIS[2]*h]);
  var ex = pT[0]-p0[0], ey = pT[1]-p0[1];
  var fx = pA[0]-p0[0], fy = pA[1]-p0[1];
  if (Math.abs(ex*fy - ey*fx) < 0.4) return;                   /* edge on */

  var facing = C[2] > 0;                                       /* radial normal ~ C */
  var img = (facing ? TEX.front : TEX.back)[i % TEX.front.length];
  ctx.save();
  ctx.setTransform(ex*2/TS, ey*2/TS, fx*2/TS, fy*2/TS, p0[0], p0[1]);
  roundRectPath(ctx, TS, TS, TS*RING.radius);
  ctx.clip();
  ctx.drawImage(img, -TS/2, -TS/2, TS, TS);
  ctx.restore();
  ctx.setTransform(1,0,0,1,0,0);
}

function render(t){
  ctx.setTransform(1,0,0,1,0,0);
  ctx.fillStyle = '#000';
  ctx.fillRect(0,0,W,H);
  ctx.imageSmoothingQuality = 'high';

  var spin = (t/DUR)*Math.PI*2;
  var list = [], i;
  for (i=0;i<RING.n;i++){
    var psi = RING.phase*Math.PI/180 - i*2*Math.PI/RING.n + spin;
    var c = Math.cos(psi), s = Math.sin(psi);
    list.push({ i:i, psi:psi, z: c*U[2] + s*V[2] });
  }
  list.sort(function(a,b){ return a.z - b.z; });

  var drawnText = false;
  for (i=0;i<list.length;i++){
    if (!drawnText && list[i].z > 0){ ctx.drawImage(headLayer,0,0); drawnText = true; }
    drawTile(list[i].i, list[i].psi);
  }
  if (!drawnText) ctx.drawImage(headLayer,0,0);
  ctx.drawImage(labelLayer,0,0);
}

/* ------------------------------------------------------------------ *
 * Clock + public controls
 * ------------------------------------------------------------------ */
var t0 = performance.now(), tNow = 0, playing = true;

function frame(now){
  if (playing){
    tNow = ((now - t0)/1000) % DUR;
    render(tNow);
  }
  requestAnimationFrame(frame);
}

window.addEventListener('resize', function(){ resize(); render(tNow); });
resize();
requestAnimationFrame(frame);

window.__DUR = DUR;
window.__seek = function(t){
  tNow = ((t % DUR) + DUR) % DUR;
  playing = false;
  render(tNow);
};
window.__play = function(){ t0 = performance.now() - tNow*1000; playing = true; };
window.__pause = function(){ playing = false; };
window.__time = function(){ return tNow; };
})();
<\/script>
</body>
</html>
`;var Vp=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Preview</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <style>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    body {
      height: 100%;
      overflow: auto;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #000000;
      color: #ffffff;
    }
    .component-wrapper {
      width: 100%;
      height: 100%;
      padding: 0;
      box-sizing: border-box;
      overflow: auto;
    }
  </style>
</head>
<body>
  <div class="component-wrapper">
    <html lang="en"><head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Tailwind (CDN build is fine for quick paste) -->
  <script src="https://cdn.tailwindcss.com"><\/script>

  <!-- Optional font to match the original -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&amp;display=swap" rel="stylesheet">



  <style>
    /* ---------- Core styles that Tailwind can\u2019t express (pseudo-elements, keyframes, multi-shadows) ---------- */
    .btn-wrapper {
      position: relative;
      display: inline-block;
    }

    .btn {
      --border-radius: 24px;
      --padding: 4px;
      --transition: 0.4s;
      --button-color: #101010;
      --highlight-color-hue: 210deg;
      /* Change this hue to recolor the glow */

      user-select: none;
      display: flex;
      justify-content: center;

      background-color: var(--button-color);

      /* Complex layered shadows */
      box-shadow:
        inset 0px 1px 1px rgba(255, 255, 255, 0.2),
        inset 0px 2px 2px rgba(255, 255, 255, 0.15),
        inset 0px 4px 4px rgba(255, 255, 255, 0.1),
        inset 0px 8px 8px rgba(255, 255, 255, 0.05),
        inset 0px 16px 16px rgba(255, 255, 255, 0.05),
        0px -1px 1px rgba(0, 0, 0, 0.02),
        0px -2px 2px rgba(0, 0, 0, 0.03),
        0px -4px 4px rgba(0, 0, 0, 0.05),
        0px -8px 8px rgba(0, 0, 0, 0.06),
        0px -16px 16px rgba(0, 0, 0, 0.08);

      border: solid 1px #ffffff22;
      border-radius: var(--border-radius);
      cursor: pointer;

      transition:
        box-shadow var(--transition),
        border var(--transition),
        background-color var(--transition);
    }

    .btn::before {
      content: "";
      position: absolute;
      top: calc(0px - var(--padding));
      left: calc(0px - var(--padding));
      width: calc(100% + var(--padding) * 2);
      height: calc(100% + var(--padding) * 2);
      border-radius: calc(var(--border-radius) + var(--padding));
      pointer-events: none;
      background-image: linear-gradient(0deg, #0004, #000a);
      z-index: -1;
      transition:
        box-shadow var(--transition),
        filter var(--transition);
      box-shadow:
        0 -8px 8px -6px #0000 inset,
        0 -16px 16px -8px #00000000 inset,
        1px 1px 1px #fff2,
        2px 2px 2px #fff1,
        -1px -1px 1px #0002,
        -2px -2px 2px #0001;
    }

    .btn::after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
      background-image: linear-gradient(0deg,
          #fff,
          hsl(var(--highlight-color-hue), 100%, 70%),
          hsla(var(--highlight-color-hue), 100%, 70%, 50%),
          8%,
          transparent);
      background-position: 0 0;
      opacity: 0;
      transition: opacity var(--transition), filter var(--transition);
    }

    .btn-letter {
      position: relative;
      display: inline-block;
      color: #ffffff55;
      animation: letter-anim 2s ease-in-out infinite;
      transition: color var(--transition), text-shadow var(--transition), opacity var(--transition);
    }

    @keyframes letter-anim {
      50% {
        text-shadow: 0 0 3px #ffffff88;
        color: #fff;
      }
    }

    .btn-svg {
      flex-grow: 1;
      height: 24px;
      margin-right: 0.5rem;
      fill: #e8e8e8;
      animation: flicker 2s linear infinite;
      animation-delay: 0.5s;
      filter: drop-shadow(0 0 2px #ffffff99);
      transition: fill var(--transition), filter var(--transition), opacity var(--transition);
    }

    @keyframes flicker {
      50% {
        opacity: 0.3;
      }
    }

    .txt-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      min-width: 6.4em;
    }

    .txt-1,
    .txt-2 {
      position: absolute;
      word-spacing: -1em;
    }

    .txt-1 {
      animation: appear-anim 1s ease-in-out forwards;
    }

    .txt-2 {
      opacity: 0;
    }

    @keyframes appear-anim {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    .btn:focus .txt-1,
    .btn:focus-visible .txt-1 {
      animation: opacity-anim 0.3s ease-in-out forwards;
      animation-delay: 1s;
    }

    .btn:focus .txt-2,
    .btn:focus-visible .txt-2 {
      animation: opacity-anim 0.3s ease-in-out reverse forwards;
      animation-delay: 1s;
    }

    @keyframes opacity-anim {
      0% {
        opacity: 1;
      }

      100% {
        opacity: 0;
      }
    }

    .btn:focus .btn-letter,
    .btn:focus-visible .btn-letter {
      animation:
        focused-letter-anim 1s ease-in-out forwards,
        letter-anim 1.2s ease-in-out infinite;
      animation-delay: 0s, 1s;
    }

    @keyframes focused-letter-anim {

      0%,
      100% {
        filter: blur(0px);
      }

      50% {
        transform: scale(2);
        filter: blur(10px) brightness(150%) drop-shadow(-36px 12px 12px hsl(var(--highlight-color-hue), 100%, 70%));
      }
    }

    .btn:focus .btn-svg,
    .btn:focus-visible .btn-svg {
      animation-duration: 1.2s;
      animation-delay: 0.2s;
    }

    .btn:focus::before,
    .btn:focus-visible::before {
      box-shadow:
        0 -8px 12px -6px #fff3 inset,
        0 -16px 16px -8px hsla(var(--highlight-color-hue), 100%, 70%, 20%) inset,
        1px 1px 1px #fff3,
        2px 2px 2px #fff1,
        -1px -1px 1px #0002,
        -2px -2px 2px #0001;
    }

    .btn:focus::after,
    .btn:focus-visible::after {
      opacity: 0.6;
      -webkit-mask-image: linear-gradient(0deg, #fff, transparent);
      mask-image: linear-gradient(0deg, #fff, transparent);
      filter: brightness(100%);
    }

    /* Staggered delays for each letter */
    .btn-letter:nth-child(1),
    .btn:focus .btn-letter:nth-child(1),
    .btn:focus-visible .btn-letter:nth-child(1) {
      animation-delay: 0s;
    }

    .btn-letter:nth-child(2),
    .btn:focus .btn-letter:nth-child(2),
    .btn:focus-visible .btn-letter:nth-child(2) {
      animation-delay: 0.08s;
    }

    .btn-letter:nth-child(3),
    .btn:focus .btn-letter:nth-child(3),
    .btn:focus-visible .btn-letter:nth-child(3) {
      animation-delay: 0.16s;
    }

    .btn-letter:nth-child(4),
    .btn:focus .btn-letter:nth-child(4),
    .btn:focus-visible .btn-letter:nth-child(4) {
      animation-delay: 0.24s;
    }

    .btn-letter:nth-child(5),
    .btn:focus .btn-letter:nth-child(5),
    .btn:focus-visible .btn-letter:nth-child(5) {
      animation-delay: 0.32s;
    }

    .btn-letter:nth-child(6),
    .btn:focus .btn-letter:nth-child(6),
    .btn:focus-visible .btn-letter:nth-child(6) {
      animation-delay: 0.40s;
    }

    .btn-letter:nth-child(7),
    .btn:focus .btn-letter:nth-child(7),
    .btn:focus-visible .btn-letter:nth-child(7) {
      animation-delay: 0.48s;
    }

    .btn-letter:nth-child(8),
    .btn:focus .btn-letter:nth-child(8),
    .btn:focus-visible .btn-letter:nth-child(8) {
      animation-delay: 0.56s;
    }

    .btn-letter:nth-child(9),
    .btn:focus .btn-letter:nth-child(9),
    .btn:focus-visible .btn-letter:nth-child(9) {
      animation-delay: 0.64s;
    }

    .btn-letter:nth-child(10),
    .btn:focus .btn-letter:nth-child(10),
    .btn:focus-visible .btn-letter:nth-child(10) {
      animation-delay: 0.72s;
    }

    .btn-letter:nth-child(11),
    .btn:focus .btn-letter:nth-child(11),
    .btn:focus-visible .btn-letter:nth-child(11) {
      animation-delay: 0.80s;
    }

    .btn-letter:nth-child(12),
    .btn:focus .btn-letter:nth-child(12),
    .btn:focus-visible .btn-letter:nth-child(12) {
      animation-delay: 0.88s;
    }

    .btn-letter:nth-child(13),
    .btn:focus .btn-letter:nth-child(13),
    .btn:focus-visible .btn-letter:nth-child(13) {
      animation-delay: 0.96s;
    }

    /* Active state */
    .btn:active {
      border: solid 1px hsla(var(--highlight-color-hue), 100%, 80%, 0.7);
      background-color: hsla(var(--highlight-color-hue), 50%, 20%, 0.5);
    }

    .btn:active::before {
      box-shadow:
        0 -8px 12px -6px #fffa inset,
        0 -16px 16px -8px hsla(var(--highlight-color-hue), 100%, 70%, 0.8) inset,
        1px 1px 1px #fff4,
        2px 2px 2px #fff2,
        -1px -1px 1px #0002,
        -2px -2px 2px #0001;
    }

    .btn:active::after {
      opacity: 1;
      -webkit-mask-image: linear-gradient(0deg, #fff, transparent);
      mask-image: linear-gradient(0deg, #fff, transparent);
      filter: brightness(200%);
    }

    .btn:active .btn-letter {
      text-shadow: 0 0 1px hsla(var(--highlight-color-hue), 100%, 90%, 0.9);
      animation: none;
    }

    /* Hover state */
    .btn:hover {
      border: solid 1px hsla(var(--highlight-color-hue), 100%, 80%, 0.4);
    }

    .btn:hover::before {
      box-shadow:
        0 -8px 8px -6px #fffa inset,
        0 -16px 16px -8px hsla(var(--highlight-color-hue), 100%, 70%, 0.3) inset,
        1px 1px 1px #fff2,
        2px 2px 2px #fff1,
        -1px -1px 1px #0002,
        -2px -2px 2px #0001;
    }

    .btn:hover::after {
      opacity: 1;
      -webkit-mask-image: linear-gradient(0deg, #fff, transparent);
      mask-image: linear-gradient(0deg, #fff, transparent);
    }

    .btn:hover .btn-svg {
      fill: #fff;
      filter:
        drop-shadow(0 0 3px hsl(var(--highlight-color-hue), 100%, 70%)) drop-shadow(0 -4px 6px #0009);
      animation: none;
    }
  </style>
</head>



<!-- Button -->
<body><div class="btn-wrapper">
  <button class="btn px-3 py-2 md:px-4 md:py-2 focus:outline-none" type="button" aria-label="Generate" title="Generate">
        <svg class="btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z">
          </path>
        </svg>

        <div class="txt-wrapper">
          <div class="txt-1">
            <span class="btn-letter">G</span>
            <span class="btn-letter">e</span>
            <span class="btn-letter">n</span>
            <span class="btn-letter">e</span>
            <span class="btn-letter">r</span>
            <span class="btn-letter">a</span>
            <span class="btn-letter">t</span>
            <span class="btn-letter">e</span>
          </div>
          <div class="txt-2">
            <span class="btn-letter">G</span>
            <span class="btn-letter">e</span>
            <span class="btn-letter">n</span>
            <span class="btn-letter">e</span>
            <span class="btn-letter">r</span>
            <span class="btn-letter">a</span>
            <span class="btn-letter">t</span>
            <span class="btn-letter">i</span>
            <span class="btn-letter">n</span>
            <span class="btn-letter">g</span>
          </div>
        </div>
      </button>
</div>





</body></html>
  </div>
  
    <script>
      (function() {
        function checkAndCenter() {
          // Use double requestAnimationFrame to ensure DOM is fully painted and layout is stable
          requestAnimationFrame(function() {
            requestAnimationFrame(function() {
              const wrapper = document.querySelector('.component-wrapper');
              if (!wrapper) return;
              
              // Get all child elements
              const children = Array.from(wrapper.children);
              if (children.length === 0) return;
              
              // Temporarily override wrapper styles to shrink-wrap for measurement
              // Set inline styles to shrink-wrap (inline styles override CSS)
              wrapper.style.display = 'inline-block';
              wrapper.style.width = 'auto';
              wrapper.style.height = 'auto';
              wrapper.style.overflow = 'visible';
              wrapper.style.boxSizing = 'content-box';
              
              // Force multiple reflows to ensure styles are fully applied
              void wrapper.offsetHeight;
              void wrapper.offsetWidth;
              void wrapper.offsetHeight;
              
              // Measure the wrapper's content size
              const contentWidth = wrapper.offsetWidth;
              const contentHeight = wrapper.offsetHeight;
              
              // Restore original styles by removing inline styles we added
              wrapper.style.removeProperty('display');
              wrapper.style.removeProperty('width');
              wrapper.style.removeProperty('height');
              wrapper.style.removeProperty('overflow');
              wrapper.style.removeProperty('box-sizing');
              
              // If content is less than 500x500, center it
              if (contentWidth > 0 && contentHeight > 0 && contentWidth < 500 && contentHeight < 500) {
                wrapper.style.display = 'flex';
                wrapper.style.alignItems = 'center';
                wrapper.style.justifyContent = 'center';
              }
            });
          });
        }
        
        // Check immediately and after delays to ensure content is rendered and styled
        function runChecks() {
          checkAndCenter();
          setTimeout(checkAndCenter, 50);
          setTimeout(checkAndCenter, 150);
          setTimeout(checkAndCenter, 300);
          setTimeout(checkAndCenter, 500);
          setTimeout(checkAndCenter, 1000);
        }
        
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', runChecks);
        } else {
          runChecks();
        }
        
        // Also check when images or other resources load
        window.addEventListener('load', () => {
          setTimeout(checkAndCenter, 100);
          setTimeout(checkAndCenter, 300);
        });
        
        // Use ResizeObserver to detect size changes
        if (window.ResizeObserver) {
          setTimeout(() => {
            const wrapper = document.querySelector('.component-wrapper');
            if (wrapper) {
              const observer = new ResizeObserver(() => {
                setTimeout(checkAndCenter, 50);
              });
              observer.observe(wrapper);
            }
          }, 500);
        }
      })();
    <\/script>
  
</body>
</html>
`;var Wp=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Preview</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <style>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    body {
      height: 100%;
      overflow: auto;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #000000;
      color: #ffffff;
    }
    .component-wrapper {
      width: 100%;
      height: 100%;
      padding: 0;
      box-sizing: border-box;
      overflow: auto;
    }
  </style>
</head>
<body>
  <div class="component-wrapper">
    <html><head></head><body><a href="#" class="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(129,140,248,0.35)] rounded-full relative shadow-[0_8px_40px_rgba(129,140,248,0.25)]" style="--spread: 90deg; --shimmer-color: rgba(255,255,255,0.6); --radius: 9999px; --speed: 4s; --cut: 1px; --bg: rgba(255, 255, 255, 0.05);" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; a:nth-of-type(1)">
  <div class="absolute inset-0">
    <div class="absolute inset-[-200%] w-[400%] h-[400%] [animation:rotate-gradient_var(--speed)_linear_infinite]">
      <div class="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]">
      </div>
    </div>
  </div>
  <div class="absolute rounded-full [background:var(--bg)] [inset:var(--cut)] backdrop-blur"></div>
  <div class="z-10 flex gap-3 sm:w-auto overflow-hidden text-base font-medium text-white w-full pt-3 pr-4 pb-3 pl-4 relative gap-x-3 gap-y-3 items-center" style="border-radius: 9999px;" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; a:nth-of-type(1) &gt; div:nth-of-type(3)">
    <div style="position: absolute; content: ' '; display: block; width: 200%; height: 200%; background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), transparent); animation: borderBeamRotation 4s infinite linear; top: 50%; left: 50%; transform: translate(-50%, -50%);" class=""></div>
    <div style="position: absolute; inset: 1px; background: rgba(10, 11, 20, 0.8); border-radius: 9999px; backdrop-filter: blur(8px);" class="" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; a:nth-of-type(1) &gt; div:nth-of-type(3) &gt; div:nth-of-type(2)">
    </div>
    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f6038cb-af1c-4483-97bc-dd58d89c36ef_320w.jpg" alt="Advisor headshot" class="ring-2 ring-white/10 z-10 w-8 h-8 object-cover rounded-full relative">
    <span class="whitespace-nowrap relative z-10 font-sans">
                  Generate My Site
                </span>
    <span class="inline-flex items-center justify-center z-10 bg-white/10 w-7 h-7 rounded-full ml-1 relative" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; a:nth-of-type(1) &gt; div:nth-of-type(3) &gt; span:nth-of-type(2)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-lucide="wand-sparkles" class="lucide lucide-wand-sparkles lucide-arrow-right w-[24px] h-[16px]" data-icon-replaced="true" style="width: 24px; height: 16px; color: rgb(255, 255, 255);"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" class=""></path><path d="m14 7 3 3" class=""></path><path d="M5 6v4" class=""></path><path d="M19 14v4" class=""></path><path d="M10 2v2" class=""></path><path d="M7 8H3" class=""></path><path d="M21 16h-4" class=""></path><path d="M11 3H9" class=""></path></svg>
                </span>
    <style>
      @keyframes borderBeamRotation {
        0% {
          transform: translate(-50%, -50%) rotate(0deg);
        }

        100% {
          transform: translate(-50%, -50%) rotate(360deg);
        }
      }
    </style>
  </div>
</a></body></html>
  </div>
  
    <script>
      (function() {
        function checkAndCenter() {
          // Use double requestAnimationFrame to ensure DOM is fully painted and layout is stable
          requestAnimationFrame(function() {
            requestAnimationFrame(function() {
              const wrapper = document.querySelector('.component-wrapper');
              if (!wrapper) return;
              
              // Get all child elements
              const children = Array.from(wrapper.children);
              if (children.length === 0) return;
              
              // Temporarily override wrapper styles to shrink-wrap for measurement
              // Set inline styles to shrink-wrap (inline styles override CSS)
              wrapper.style.display = 'inline-block';
              wrapper.style.width = 'auto';
              wrapper.style.height = 'auto';
              wrapper.style.overflow = 'visible';
              wrapper.style.boxSizing = 'content-box';
              
              // Force multiple reflows to ensure styles are fully applied
              void wrapper.offsetHeight;
              void wrapper.offsetWidth;
              void wrapper.offsetHeight;
              
              // Measure the wrapper's content size
              const contentWidth = wrapper.offsetWidth;
              const contentHeight = wrapper.offsetHeight;
              
              // Restore original styles by removing inline styles we added
              wrapper.style.removeProperty('display');
              wrapper.style.removeProperty('width');
              wrapper.style.removeProperty('height');
              wrapper.style.removeProperty('overflow');
              wrapper.style.removeProperty('box-sizing');
              
              // If content is less than 500x500, center it
              if (contentWidth > 0 && contentHeight > 0 && contentWidth < 500 && contentHeight < 500) {
                wrapper.style.display = 'flex';
                wrapper.style.alignItems = 'center';
                wrapper.style.justifyContent = 'center';
              }
            });
          });
        }
        
        // Check immediately and after delays to ensure content is rendered and styled
        function runChecks() {
          checkAndCenter();
          setTimeout(checkAndCenter, 50);
          setTimeout(checkAndCenter, 150);
          setTimeout(checkAndCenter, 300);
          setTimeout(checkAndCenter, 500);
          setTimeout(checkAndCenter, 1000);
        }
        
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', runChecks);
        } else {
          runChecks();
        }
        
        // Also check when images or other resources load
        window.addEventListener('load', () => {
          setTimeout(checkAndCenter, 100);
          setTimeout(checkAndCenter, 300);
        });
        
        // Use ResizeObserver to detect size changes
        if (window.ResizeObserver) {
          setTimeout(() => {
            const wrapper = document.querySelector('.component-wrapper');
            if (wrapper) {
              const observer = new ResizeObserver(() => {
                setTimeout(checkAndCenter, 50);
              });
              observer.observe(wrapper);
            }
          }, 500);
        }
      })();
    <\/script>
  
</body>
</html>
`;var Xp=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Preview</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <style>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    body {
      height: 100%;
      overflow: auto;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #000000;
      color: #ffffff;
    }
    .component-wrapper {
      width: 100%;
      height: 100%;
      padding: 0;
      box-sizing: border-box;
      overflow: auto;
    }
  </style>
</head>
<body>
  <div class="component-wrapper">
    <html><head></head><body><button class="group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] focus:outline-none text-sm font-medium text-white tracking-widest font-geist rounded-full pt-5 pr-12 pb-5 pl-12 relative items-center justify-center">
    <style>
        @keyframes beam-spin { to { transform: rotate(360deg); } }
        @keyframes dots-move { 
            0% { background-position: 0 0; } 
            100% { background-position: 24px 24px; } 
        }
    </style>
    
    <!-- Full Border Beam (Single Beam) -->
    <div class="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
        <div class="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#ea580c_360deg)]" style="animation: beam-spin 3s linear infinite;"></div>
        <div class="absolute inset-[1px] rounded-full bg-black"></div>
    </div>

    <!-- Inner Background & Effects -->
    <div class="-z-10 overflow-hidden bg-zinc-950 rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">
        <!-- Light Monotone Gradient Background -->
        <div class="absolute inset-0 bg-gradient-to-b from-zinc-800/60 to-transparent"></div>
        
        <!-- Animated Dots Pattern -->
        <div class="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style="background-image: radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px); background-size: 12px 12px; animation: dots-move 8s linear infinite"></div>
        
        <!-- Orange Glow on Hover -->
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-orange-500/10 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-orange-500/30"></div>
    </div>

    <!-- Content -->
    <span class="relative z-10 text-white/90 transition-colors group-hover:text-white">Start Building</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14" class=""></path><path d="m12 5 7 7-7 7" class=""></path></svg>
</button></body></html>
  </div>
  
    <script>
      (function() {
        function checkAndCenter() {
          // Use double requestAnimationFrame to ensure DOM is fully painted and layout is stable
          requestAnimationFrame(function() {
            requestAnimationFrame(function() {
              const wrapper = document.querySelector('.component-wrapper');
              if (!wrapper) return;
              
              // Get all child elements
              const children = Array.from(wrapper.children);
              if (children.length === 0) return;
              
              // Temporarily override wrapper styles to shrink-wrap for measurement
              // Set inline styles to shrink-wrap (inline styles override CSS)
              wrapper.style.display = 'inline-block';
              wrapper.style.width = 'auto';
              wrapper.style.height = 'auto';
              wrapper.style.overflow = 'visible';
              wrapper.style.boxSizing = 'content-box';
              
              // Force multiple reflows to ensure styles are fully applied
              void wrapper.offsetHeight;
              void wrapper.offsetWidth;
              void wrapper.offsetHeight;
              
              // Measure the wrapper's content size
              const contentWidth = wrapper.offsetWidth;
              const contentHeight = wrapper.offsetHeight;
              
              // Restore original styles by removing inline styles we added
              wrapper.style.removeProperty('display');
              wrapper.style.removeProperty('width');
              wrapper.style.removeProperty('height');
              wrapper.style.removeProperty('overflow');
              wrapper.style.removeProperty('box-sizing');
              
              // If content is less than 500x500, center it
              if (contentWidth > 0 && contentHeight > 0 && contentWidth < 500 && contentHeight < 500) {
                wrapper.style.display = 'flex';
                wrapper.style.alignItems = 'center';
                wrapper.style.justifyContent = 'center';
              }
            });
          });
        }
        
        // Check immediately and after delays to ensure content is rendered and styled
        function runChecks() {
          checkAndCenter();
          setTimeout(checkAndCenter, 50);
          setTimeout(checkAndCenter, 150);
          setTimeout(checkAndCenter, 300);
          setTimeout(checkAndCenter, 500);
          setTimeout(checkAndCenter, 1000);
        }
        
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', runChecks);
        } else {
          runChecks();
        }
        
        // Also check when images or other resources load
        window.addEventListener('load', () => {
          setTimeout(checkAndCenter, 100);
          setTimeout(checkAndCenter, 300);
        });
        
        // Use ResizeObserver to detect size changes
        if (window.ResizeObserver) {
          setTimeout(() => {
            const wrapper = document.querySelector('.component-wrapper');
            if (wrapper) {
              const observer = new ResizeObserver(() => {
                setTimeout(checkAndCenter, 50);
              });
              observer.observe(wrapper);
            }
          }, 500);
        }
      })();
    <\/script>
  
</body>
</html>
`;var Pp=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Preview</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <style>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    body {
      height: 100%;
      overflow: auto;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #ffffff;
      color: #000000;
    }
    .component-wrapper {
      width: 100%;
      height: 100%;
      padding: 0;
      box-sizing: border-box;
      overflow: auto;
    }
  </style>
</head>
<body>
  <div class="component-wrapper">
    <html><head></head><body><button class="group shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 overflow-hidden font-medium text-orange-900 bg-gradient-to-r from-[#FFEBB1] to-[#FFC438] rounded-xl pt-4 pr-8 pb-4 pl-8 relative shadow-lg" style="box-shadow:0 15px 33px -12px rgba(255,162,42,0.9), inset 0 4px 6.3px rgba(252,220,134,1), inset 0 -5px 6.3px rgba(255,162,38,1); border-radius:9999px">
                        <div class="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
                        <span class="relative flex items-center gap-2">
                            Start Free Pilot
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-lucide="send" class="lucide lucide-send w-4 h-4"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" class=""></path><path d="m21.854 2.147-10.94 10.939" class=""></path></svg>
                        </span>
                    </button></body></html>
  </div>
  
    <script>
      (function() {
        function checkAndCenter() {
          // Use double requestAnimationFrame to ensure DOM is fully painted and layout is stable
          requestAnimationFrame(function() {
            requestAnimationFrame(function() {
              const wrapper = document.querySelector('.component-wrapper');
              if (!wrapper) return;
              
              // Get all child elements
              const children = Array.from(wrapper.children);
              if (children.length === 0) return;
              
              // Temporarily override wrapper styles to shrink-wrap for measurement
              // Set inline styles to shrink-wrap (inline styles override CSS)
              wrapper.style.display = 'inline-block';
              wrapper.style.width = 'auto';
              wrapper.style.height = 'auto';
              wrapper.style.overflow = 'visible';
              wrapper.style.boxSizing = 'content-box';
              
              // Force multiple reflows to ensure styles are fully applied
              void wrapper.offsetHeight;
              void wrapper.offsetWidth;
              void wrapper.offsetHeight;
              
              // Measure the wrapper's content size
              const contentWidth = wrapper.offsetWidth;
              const contentHeight = wrapper.offsetHeight;
              
              // Restore original styles by removing inline styles we added
              wrapper.style.removeProperty('display');
              wrapper.style.removeProperty('width');
              wrapper.style.removeProperty('height');
              wrapper.style.removeProperty('overflow');
              wrapper.style.removeProperty('box-sizing');
              
              // If content is less than 500x500, center it
              if (contentWidth > 0 && contentHeight > 0 && contentWidth < 500 && contentHeight < 500) {
                wrapper.style.display = 'flex';
                wrapper.style.alignItems = 'center';
                wrapper.style.justifyContent = 'center';
              }
            });
          });
        }
        
        // Check immediately and after delays to ensure content is rendered and styled
        function runChecks() {
          checkAndCenter();
          setTimeout(checkAndCenter, 50);
          setTimeout(checkAndCenter, 150);
          setTimeout(checkAndCenter, 300);
          setTimeout(checkAndCenter, 500);
          setTimeout(checkAndCenter, 1000);
        }
        
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', runChecks);
        } else {
          runChecks();
        }
        
        // Also check when images or other resources load
        window.addEventListener('load', () => {
          setTimeout(checkAndCenter, 100);
          setTimeout(checkAndCenter, 300);
        });
        
        // Use ResizeObserver to detect size changes
        if (window.ResizeObserver) {
          setTimeout(() => {
            const wrapper = document.querySelector('.component-wrapper');
            if (wrapper) {
              const observer = new ResizeObserver(() => {
                setTimeout(checkAndCenter, 50);
              });
              observer.observe(wrapper);
            }
          }, 500);
        }
      })();
    <\/script>
  
</body>
</html>
`;var Ip=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Preview</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <style>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    body {
      height: 100%;
      overflow: auto;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #ffffff;
      color: #000000;
    }
    .component-wrapper {
      width: 100%;
      height: 100%;
      padding: 0;
      box-sizing: border-box;
      overflow: auto;
    }
  </style>
</head>
<body>
  <div class="component-wrapper">
    <html><head></head><body><button class="hover:bg-slate-50 hover:text-slate- transition-all flex text-sm font-medium text-slate-600 bg-gradient-to-b from-black/10 via-black/20 to-black/10 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] gap-x-2 gap-y-2 items-center" style="box-shadow: 0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3);                  color: #e5e7eb; position: relative; --border-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8)); --border-radius-before: 9999px">

  <span class="text-sm font-medium text-black/60 tracking-tight">
    Demo Lesson
  </span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-[16px] h-[16px]" data-lucide="arrow-right" data-icon-set="lucide" data-icon-replaced="true" style="color: rgb(229, 231, 235); width: 16px; height: 16px;"><path d="M5 12h14" class=""></path><path d="m12 5 7 7-7 7"></path></svg>
  <style id="border-gradient-shared-style">
  [style*="--border-gradient"]::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: var(--border-radius-before, inherit);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    background: var(--border-gradient);
    pointer-events: none;
  }</style>
</button></body></html>
  </div>
  
    <script>
      (function() {
        function checkAndCenter() {
          // Use double requestAnimationFrame to ensure DOM is fully painted and layout is stable
          requestAnimationFrame(function() {
            requestAnimationFrame(function() {
              const wrapper = document.querySelector('.component-wrapper');
              if (!wrapper) return;
              
              // Get all child elements
              const children = Array.from(wrapper.children);
              if (children.length === 0) return;
              
              // Temporarily override wrapper styles to shrink-wrap for measurement
              // Set inline styles to shrink-wrap (inline styles override CSS)
              wrapper.style.display = 'inline-block';
              wrapper.style.width = 'auto';
              wrapper.style.height = 'auto';
              wrapper.style.overflow = 'visible';
              wrapper.style.boxSizing = 'content-box';
              
              // Force multiple reflows to ensure styles are fully applied
              void wrapper.offsetHeight;
              void wrapper.offsetWidth;
              void wrapper.offsetHeight;
              
              // Measure the wrapper's content size
              const contentWidth = wrapper.offsetWidth;
              const contentHeight = wrapper.offsetHeight;
              
              // Restore original styles by removing inline styles we added
              wrapper.style.removeProperty('display');
              wrapper.style.removeProperty('width');
              wrapper.style.removeProperty('height');
              wrapper.style.removeProperty('overflow');
              wrapper.style.removeProperty('box-sizing');
              
              // If content is less than 500x500, center it
              if (contentWidth > 0 && contentHeight > 0 && contentWidth < 500 && contentHeight < 500) {
                wrapper.style.display = 'flex';
                wrapper.style.alignItems = 'center';
                wrapper.style.justifyContent = 'center';
              }
            });
          });
        }
        
        // Check immediately and after delays to ensure content is rendered and styled
        function runChecks() {
          checkAndCenter();
          setTimeout(checkAndCenter, 50);
          setTimeout(checkAndCenter, 150);
          setTimeout(checkAndCenter, 300);
          setTimeout(checkAndCenter, 500);
          setTimeout(checkAndCenter, 1000);
        }
        
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', runChecks);
        } else {
          runChecks();
        }
        
        // Also check when images or other resources load
        window.addEventListener('load', () => {
          setTimeout(checkAndCenter, 100);
          setTimeout(checkAndCenter, 300);
        });
        
        // Use ResizeObserver to detect size changes
        if (window.ResizeObserver) {
          setTimeout(() => {
            const wrapper = document.querySelector('.component-wrapper');
            if (wrapper) {
              const observer = new ResizeObserver(() => {
                setTimeout(checkAndCenter, 50);
              });
              observer.observe(wrapper);
            }
          }, 500);
        }
      })();
    <\/script>
  
</body>
</html>
`;var Zp=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Ignition Button</title>
<script src="https://cdn.tailwindcss.com"><\/script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
<script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>
<body class="h-screen w-screen flex items-center justify-center overflow-hidden text-stone-800 bg-[#f4f1ea] selection:bg-[#d43d17] selection:text-white" style="font-family: 'Inter', sans-serif;">

  <!-- Ambient WebGL Background -->
  <canvas id="bg-gl" class="absolute inset-0 w-full h-full -z-10 block pointer-events-none" aria-hidden="true"></canvas>

  <main class="relative z-10 flex flex-col items-center text-center w-full max-w-md px-6">
    
    <!-- Company Header -->
    <div class="mb-16 overflow-hidden">
      <div class="reveal-element text-sm font-normal tracking-tight text-stone-700 opacity-0 translate-y-full">
        AETHER SYSTEMS
      </div>
    </div>

    <!-- Component Area -->
    <div class="mb-8 stagger-word text-xs font-mono tracking-[0.3em] uppercase text-[#d43d17] font-normal">
      SYS 07 / IGNITE
    </div>

    <div class="intro-wrapper opacity-0 scale-[0.55] blur-[8px]">
      <button id="btn" type="button" class="group relative block w-[264px] h-[78px] border-0 p-[7px] rounded-[24px] cursor-pointer outline-none transition-all duration-300 ease-[cubic-bezier(.34,1.4,.5,1)] hover:-translate-y-[2px] active:translate-y-[1px] active:scale-[0.985] focus-visible:outline-2 focus-visible:outline-[#d43d17] focus-visible:outline-offset-[5px] bg-[linear-gradient(180deg,#3c3f46_0%,#15171b_55%,#2a2d33_100%)] shadow-[0_26px_52px_rgba(15,12,10,.35),0_3px_10px_rgba(0,0,0,.35),inset_0_1px_0_rgba(255,255,255,.14)] hover:shadow-[0_32px_64px_rgba(160,60,12,.3),0_4px_12px_rgba(0,0,0,.4),inset_0_1px_0_rgba(255,255,255,.16)]">
        <span class="relative block w-full h-full rounded-[17px] overflow-hidden bg-[#06050a] flex items-center justify-center shadow-[inset_0_2px_8px_rgba(0,0,0,.9)]">
          <canvas id="gl" class="absolute inset-0 w-full h-full block" aria-hidden="true"></canvas>
          <span class="relative z-10 pointer-events-none font-medium text-sm tracking-[0.34em] indent-[0.34em] text-[#fdf6ee]" style="text-shadow: 0 0 14px rgba(255, 170, 100, .55), 0 1px 6px rgba(0, 0, 0, .9);">LAUNCH</span>
        </span>
      </button>
    </div>

    <div class="mt-8 stagger-word text-xs text-stone-500 tracking-wide font-light leading-relaxed max-w-[280px]">
      Hover to prime the core accelerator, click to execute initialization.
    </div>

  </main>

  <script>
    // --- GSAP Animations ---
    gsap.registerPlugin(ScrollTrigger);

    // Prepare text for masked staggered reveal
    document.querySelectorAll('.stagger-word').forEach(el => {
      const words = el.innerText.trim().split(' ');
      el.innerHTML = words.map(w => \`<span class="inline-block overflow-hidden align-top"><span class="reveal-word inline-block translate-y-full opacity-0">\${w}&nbsp;</span></span>\`).join('');
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Header reveal
    tl.to(".reveal-element", {
      y: "0%",
      opacity: 1,
      duration: 1,
      ease: "expo.out"
    }, "+=0.2");

    // Masked staggered word reveal
    tl.to(".reveal-word", {
      y: "0%",
      opacity: 1,
      duration: 0.8,
      stagger: 0.04,
      ease: "power4.out"
    }, "-=0.6");

    // Intro Button Sequence
    tl.to(".intro-wrapper", {
      scale: 1.05,
      opacity: 1,
      duration: 0.8,
      ease: "back.out(1.5)",
      onUpdate: function() {
        let progress = this.progress();
        let blurAmount = Math.max(0, 8 * (1 - progress * 1.5));
        gsap.set(".intro-wrapper", { filter: \`blur(\${blurAmount}px)\` });
      }
    }, "-=0.8");

    tl.to(".intro-wrapper", {
      scale: 1,
      duration: 0.4,
      ease: "power2.out"
    });

    // Subtle Ambient Parallax
    document.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      gsap.to(".intro-wrapper", {
        x: x,
        y: y,
        duration: 2,
        ease: "power2.out"
      });
    });


    // --- Ambient Background WebGL ---
    (function() {
      var canvas = document.getElementById('bg-gl');
      var gl = canvas.getContext('webgl');
      if (!gl) return;

      var VS = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
      var FS = \`
        precision highp float;
        uniform vec2 u_res;
        uniform float u_time;
        float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
        float noise(vec2 p){
          vec2 i=floor(p), f=fract(p);
          vec2 u=f*f*(3.0-2.0*f);
          return mix(mix(hash(i),hash(i+vec2(1.,0.)),u.x),
                     mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),u.x),u.y);
        }
        void main(){
          vec2 uv = gl_FragCoord.xy / u_res;
          float n = noise(uv * 2.5 + vec2(u_time * 0.015, u_time * 0.025));
          n += noise(uv * 5.0 - vec2(u_time * 0.01, u_time * 0.02)) * 0.5;
          // Soft ambient cream tones
          vec3 col1 = vec3(0.957, 0.945, 0.918);
          vec3 col2 = vec3(0.925, 0.910, 0.880);
          vec3 finalCol = mix(col1, col2, n * 0.6 + 0.2);
          gl_FragColor = vec4(finalCol, 1.0);
        }
      \`;

      function compile(type, src) {
        var s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        return s;
      }
      var prog = gl.createProgram();
      gl.attachShader(prog, compile(gl.VERTEX_SHADER, VS));
      gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FS));
      gl.linkProgram(prog);
      gl.useProgram(prog);

      var buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      var locP = gl.getAttribLocation(prog, 'p');
      gl.enableVertexAttribArray(locP);
      gl.vertexAttribPointer(locP, 2, gl.FLOAT, false, 0, 0);

      var uRes = gl.getUniformLocation(prog, 'u_res');
      var uTime = gl.getUniformLocation(prog, 'u_time');

      function resize() {
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        var w = window.innerWidth * dpr;
        var h = window.innerHeight * dpr;
        if (canvas.width !== w || canvas.height !== h) {
          canvas.width = w;
          canvas.height = h;
          gl.viewport(0, 0, w, h);
        }
      }
      window.addEventListener('resize', resize);
      resize();

      function frame(now) {
        resize();
        gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.uniform1f(uTime, now / 1000);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
        requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    })();


    // --- Portal Button WebGL ---
    (function () {
      var btn = document.getElementById('btn');
      var canvas = document.getElementById('gl');
      var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var gl = canvas.getContext('webgl');
      if (!gl) { document.body.classList.add('nogl'); return; }

      var VS = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
      var FS = [
        'precision highp float;',
        'uniform vec2 u_res;',
        'uniform float u_time;',
        'uniform float u_warp;',
        'uniform float u_flash;',
        'float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}',
        'float noise(vec2 p){',
        '  vec2 i=floor(p), f=fract(p);',
        '  vec2 u=f*f*(3.0-2.0*f);',
        '  return mix(mix(hash(i),hash(i+vec2(1.,0.)),u.x),',
        '             mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),u.x),u.y);',
        '}',
        'float fbm(vec2 p){',
        '  float v=0.0; float a=0.5;',
        '  for(int i=0;i<4;i++){ v+=a*noise(p); p=p*2.07+vec2(13.1,5.7); a*=0.5; }',
        '  return v;',
        '}',
        'void main(){',
        '  vec2 sc = gl_FragCoord.xy / u_res;',
        '  vec2 uv = (gl_FragCoord.xy - 0.5 * u_res) / u_res.y;',
        '  float r = length(uv);',
        '  float rr = max(r, 0.08);',
        '  float a = atan(uv.y, uv.x);',
        '  float t = u_time;',
        '  vec3 col = vec3(0.012, 0.011, 0.014);',
        '  float hz = fbm(uv * 2.6 + vec2(t * 0.35, 1.7));',
        '  col += vec3(0.13, 0.06, 0.032) * hz * (0.7 + 0.6 * u_warp);',
        '  for (int i = 0; i < 3; i++) {',
        '    float fi = float(i);',
        '    float ringN = 26.0 + fi * 9.0;',
        '    vec2 sp = vec2((a / 6.28318 + 0.5) * ringN,',
        '                   (0.3 + fi * 0.22) / rr + t * (2.0 + fi * 1.2));',
        '    vec2 cell = floor(sp);',
        '    vec2 f = fract(sp);',
        '    float h = hash(cell + fi * 17.31);',
        '    float on = step(0.68, h);',
        '    vec2 c = vec2(0.2 + 0.6 * hash(cell + 4.7), 0.5);',
        '    vec2 dlt = f - c;',
        '    float sy = mix(130.0, 8.0, u_warp);',
        '    float star = on * exp(-(dlt.x * dlt.x * 150.0 + dlt.y * dlt.y * sy));',
        '    float tw = 0.7 + 0.3 * sin(h * 81.0 + t * 9.0);',
        '    tw = mix(tw, 1.0, u_warp);',
        '    vec3 sCol = mix(vec3(1.0, 0.94, 0.85), vec3(1.0, 0.6, 0.33), step(0.9, h));',
        '    float fade = smoothstep(0.02, 0.25, r);',
        '    col += sCol * star * tw * fade * (1.1 + 0.7 * u_warp);',
        '  }',
        '  col += vec3(1.0, 0.8, 0.58) * u_warp * 0.32 * exp(-r * 4.0);',
        '  vec2 e = sc * (1.0 - sc);',
        '  col *= 0.3 + 0.7 * pow(e.x * e.y * 16.0, 0.3);',
        '  col = mix(col, vec3(1.0, 0.97, 0.92), clamp(u_flash, 0.0, 1.0));',
        '  gl_FragColor = vec4(col, 1.0);',
        '}'
      ].join('\\n');

      function compile(type, src) {
        var s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
          console.error('shader compile failed:', gl.getShaderInfoLog(s));
        }
        return s;
      }
      var prog = gl.createProgram();
      gl.attachShader(prog, compile(gl.VERTEX_SHADER, VS));
      gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FS));
      gl.linkProgram(prog);
      gl.useProgram(prog);

      var buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      var locP = gl.getAttribLocation(prog, 'p');
      gl.enableVertexAttribArray(locP);
      gl.vertexAttribPointer(locP, 2, gl.FLOAT, false, 0, 0);

      var uRes = gl.getUniformLocation(prog, 'u_res');
      var uTime = gl.getUniformLocation(prog, 'u_time');
      var uWarp = gl.getUniformLocation(prog, 'u_warp');
      var uFlash = gl.getUniformLocation(prog, 'u_flash');

      function resize() {
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        var w = Math.max(1, Math.round(canvas.clientWidth * dpr));
        var h = Math.max(1, Math.round(canvas.clientHeight * dpr));
        if (canvas.width !== w || canvas.height !== h) {
          canvas.width = w;
          canvas.height = h;
          gl.viewport(0, 0, w, h);
        }
      }
      window.addEventListener('resize', resize);
      resize();

      var warp = 0, warpTarget = 0, flash = 0, z = 0;
      var last = performance.now();

      btn.addEventListener('mouseenter', function () { warpTarget = 1; });
      btn.addEventListener('mouseleave', function () { warpTarget = 0; });
      btn.addEventListener('focus', function () { warpTarget = 1; });
      btn.addEventListener('blur', function () { warpTarget = 0; });
      btn.addEventListener('click', function () {
        flash = 1;
        warp = 0;
        z = 0;
      });

      function frame(now) {
        var dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        warp += (warpTarget - warp) * Math.min(1, dt * 2.6);
        flash *= Math.exp(-4.5 * dt);
        z += dt * (0.05 + warp * 1.35);
        resize();
        gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.uniform1f(uTime, reduced ? 4.0 : z);
        gl.uniform1f(uWarp, warp);
        gl.uniform1f(uFlash, flash);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
        requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    })();
  <\/script>
</body>
</html>`;var Qp=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Preview</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <style>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    body {
      height: 100%;
      overflow: auto;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #000000;
      color: #ffffff;
    }
    .component-wrapper {
      width: 100%;
      height: 100%;
      padding: 0;
      box-sizing: border-box;
      overflow: auto;
    }
  </style>
</head>
<body>
  <div class="component-wrapper">
    <html><head></head><body><button class="group/btn relative">
                <div class="-inset-1 group-hover/btn:opacity-75 transition duration-500 bg-amber-500/40 opacity-40 rounded-xl absolute blur"></div>
                <div class="relative bg-gradient-to-b from-amber-200 via-amber-300 to-amber-500 text-amber-950 rounded-xl px-8 py-4 flex items-center gap-3 shadow-[0_0_0_1px_rgba(251,191,36,0.5),0_4px_0_#b45309,0_10px_15px_-3px_rgba(0,0,0,0.5)] active:translate-y-[2px] active:shadow-[0_0_0_1px_rgba(251,191,36,0.5),0_2px_0_#b45309] transition-all duration-150">
                    <span class="text-lg font-medium tracking-tight">Initialize Launch</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="zap" class="lucide lucide-zap w-5 h-5 fill-amber-950/20 stroke-[1.5]"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" class=""></path></svg>
                </div>
            </button></body></html>
  </div>
  
    <script>
      (function() {
        function checkAndCenter() {
          // Use double requestAnimationFrame to ensure DOM is fully painted and layout is stable
          requestAnimationFrame(function() {
            requestAnimationFrame(function() {
              const wrapper = document.querySelector('.component-wrapper');
              if (!wrapper) return;
              
              // Get all child elements
              const children = Array.from(wrapper.children);
              if (children.length === 0) return;
              
              // Temporarily override wrapper styles to shrink-wrap for measurement
              // Set inline styles to shrink-wrap (inline styles override CSS)
              wrapper.style.display = 'inline-block';
              wrapper.style.width = 'auto';
              wrapper.style.height = 'auto';
              wrapper.style.overflow = 'visible';
              wrapper.style.boxSizing = 'content-box';
              
              // Force multiple reflows to ensure styles are fully applied
              void wrapper.offsetHeight;
              void wrapper.offsetWidth;
              void wrapper.offsetHeight;
              
              // Measure the wrapper's content size
              const contentWidth = wrapper.offsetWidth;
              const contentHeight = wrapper.offsetHeight;
              
              // Restore original styles by removing inline styles we added
              wrapper.style.removeProperty('display');
              wrapper.style.removeProperty('width');
              wrapper.style.removeProperty('height');
              wrapper.style.removeProperty('overflow');
              wrapper.style.removeProperty('box-sizing');
              
              // If content is less than 500x500, center it
              if (contentWidth > 0 && contentHeight > 0 && contentWidth < 500 && contentHeight < 500) {
                wrapper.style.display = 'flex';
                wrapper.style.alignItems = 'center';
                wrapper.style.justifyContent = 'center';
              }
            });
          });
        }
        
        // Check immediately and after delays to ensure content is rendered and styled
        function runChecks() {
          checkAndCenter();
          setTimeout(checkAndCenter, 50);
          setTimeout(checkAndCenter, 150);
          setTimeout(checkAndCenter, 300);
          setTimeout(checkAndCenter, 500);
          setTimeout(checkAndCenter, 1000);
        }
        
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', runChecks);
        } else {
          runChecks();
        }
        
        // Also check when images or other resources load
        window.addEventListener('load', () => {
          setTimeout(checkAndCenter, 100);
          setTimeout(checkAndCenter, 300);
        });
        
        // Use ResizeObserver to detect size changes
        if (window.ResizeObserver) {
          setTimeout(() => {
            const wrapper = document.querySelector('.component-wrapper');
            if (wrapper) {
              const observer = new ResizeObserver(() => {
                setTimeout(checkAndCenter, 50);
              });
              observer.observe(wrapper);
            }
          }, 500);
        }
      })();
    <\/script>
  
</body>
</html>
`;var Kp=`<!DOCTYPE html>
<html lang="en"><head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Imaginie \u2014 Stay close to your imagination.</title>
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"><\/script>
  <!-- Iconify Icons -->
  <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&amp;family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&amp;display=swap" rel="stylesheet">
  <style>
    .font-serif {
      font-family: 'Playfair Display', Georgia, serif;
    }
    .font-sans {
      font-family: 'Inter', sans-serif;
    }
    /* Smooth custom animations */
    .word-span {
      display: inline-block;
      opacity: 0;
      transform: translateY(12px) translateZ(0);
      filter: blur(4px);
      transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .word-span.visible {
      opacity: 1;
      transform: translateY(0) translateZ(0);
      filter: blur(0);
    }
    /* Holographic button glow */
    .holo-btn {
      position: relative;
      background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,220,205,0.9) 50%, rgba(220,240,255,0.9) 100%);
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6);
      transition: all 0.4s ease;
    }
    .holo-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 0 30px rgba(255, 220, 180, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.8);
    }
  </style>
</head>
<body class="bg-[#030303] text-[#f4f4f6] font-sans antialiased overflow-x-hidden min-h-screen flex flex-col justify-between" style="background-image: radial-gradient(circle at 10% 20%, rgba(15, 11, 28, 0.6) 0%, rgba(3, 3, 3, 1) 80%);">

  <!-- Interactive Background Canvas (WebGL/Nebula simulation) -->
  <canvas id="ambient-starfield" class="absolute inset-0 pointer-events-none z-0" style="opacity: 0.45;"></canvas>

  <!-- Header Navigation -->
  <header class="relative z-50 w-full max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
    <div class="flex items-center gap-12">
      <!-- Logo -->
      <a href="#" class="text-xl font-semibold tracking-tight text-white hover:opacity-90 transition-opacity">
        Imaginie
      </a>
      <!-- Nav Links -->
      <nav class="hidden md:flex items-center gap-8">
        <a href="#" class="text-[13px] text-[#9a9a9f] hover:text-white transition-colors duration-200">How it works</a>
        <a href="#" class="text-[13px] text-[#9a9a9f] hover:text-white transition-colors duration-200">Features</a>
        <a href="#" class="text-[13px] text-[#9a9a9f] hover:text-white transition-colors duration-200">Pricing</a>
      </nav>
    </div>
    <!-- Log In CTA -->
    <div>
      <a href="#" class="px-5 py-2 text-[13px] font-medium text-white bg-[#ffffff0a] border border-[#ffffff10] rounded-full hover:bg-[#ffffff15] transition-all duration-300">
        Log in
      </a>
    </div>
  </header>

  <!-- Main Hero Workspace Section -->
  <main class="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto py-8">
    
    <!-- Left Copy Column -->
    <div class="lg:col-span-5 flex flex-col space-y-8 text-left max-w-xl lg:max-w-none">
      
      <!-- High-fidelity Headline (Letter/Word animated) -->
      <h1 id="hero-title" class="text-5xl md:text-6xl lg:text-[64px] font-serif leading-[1.08] tracking-tight text-white py-1">
        Stay close to your imagination.
      </h1>

      <!-- Description Subhead -->
      <p id="hero-desc" class="text-[14px] md:text-[15px] text-[#94949a] leading-relaxed max-w-[430px] opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-500">
        Where ideas begin as sparks and emerge as living experiences through the power of AI. We transform what doesn't exist yet into something unforgettable.
      </p>

      <!-- Action Buttons -->
      <div id="hero-actions" class="flex flex-wrap items-center gap-4 pt-2 opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-700">
        <a href="#" class="px-5 py-3 text-[13px] font-medium text-white bg-[#0e0e11] border border-[#ffffff12] rounded-full hover:bg-[#16161b] hover:border-[#ffffff1c] transition-all duration-300 flex items-center gap-2">
          See how it works
        </a>
        <a href="#" class="holo-btn px-6 py-3 text-[13px] font-semibold text-[#0d0a12] rounded-full flex items-center gap-1.5 transition-transform duration-300">
          Begin the journey
          <iconify-icon icon="solar:arrow-right-linear" class="text-base font-semibold" style="stroke-width: 2;"></iconify-icon>
        </a>
      </div>

      <!-- Social Proof / Creators Indicator -->
      <div id="hero-proof" class="flex items-center gap-3.5 pt-8 opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-900">
        <!-- Avatars Stack -->
        <div class="flex -space-x-3.5">
          <img class="w-7 h-7 rounded-full border border-black object-cover filter brightness-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_1600w.jpg" alt="Creator">
          <img class="w-7 h-7 rounded-full border border-black object-cover filter brightness-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_1600w.jpg" alt="Creator">
          <img class="w-7 h-7 rounded-full border border-black object-cover filter brightness-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_1600w.jpg" alt="Creator">
          <img class="w-7 h-7 rounded-full border border-black object-cover filter brightness-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77415a2e-dcbc-4748-a29d-fced4821881a_1600w.jpg" alt="Creator">
        </div>
        <!-- Copy text -->
        <p class="text-[12px] text-[#86868b] tracking-normal">
          Used by <span class="text-white font-medium">12,000+</span> builders, creators, and professionals
        </p>
      </div>

    </div>

    <!-- Right Artistic Cosmic Portal Column -->
    <div class="lg:col-span-7 flex justify-center lg:justify-end relative w-full h-[480px] md:h-[620px] lg:h-[680px]">
      
      <!-- Outer glowing bronze border frame (Portal Container) -->
      <div class="relative w-full max-w-[500px] h-full rounded-t-[180px] rounded-b-[40px] p-[5px] bg-gradient-to-tr from-[#1b120f] via-[#a3704c] to-[#e6c29e] shadow-[0_0_80px_rgba(163,112,76,0.15)] overflow-hidden flex items-center justify-center transition-transform duration-700 hover:scale-[1.01]">
        
        <!-- Inner shadow & ambient overlay wrapper -->
        <div class="relative w-full h-full rounded-t-[176px] rounded-b-[36px] overflow-hidden bg-black flex items-center justify-center">
          
          <!-- Background Cosmic Dust Image (Aura Asset) -->
          <video src="https://wypspaektjjiccarxrgy.supabase.co/storage/v1/object/public/generated-page-media/302e86e0-80d8-4ba5-82e8-004220675655/2026-05-20/1779252781481-eabde810-981e-4ee8-a143-4bee829a788c.mp4" poster="https://wypspaektjjiccarxrgy.supabase.co/storage/v1/object/public/generated-page-media/302e86e0-80d8-4ba5-82e8-004220675655/2026-05-20/1779245193658-07a4020a-dced-499d-ac91-36b6037f907e.png" data-neuform-generated-video="true" data-neuform-video-preset="loop-in-view" muted="" playsinline="" preload="metadata" loop="" aria-label="Cosmic Window" class="absolute inset-0 w-full h-full object-cover opacity-85 mix-blend-lighten filter brightness-110 saturate-[1.1]"></video>

          <!-- Interactive Star/Nebula Field Canvas inside the window -->
          <canvas id="portal-stars" class="absolute inset-0 w-full h-full z-10 mix-blend-screen pointer-events-none"></canvas>

          <!-- Cosmic Horizon Layer Glow -->
          <div class="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#0e0c15] via-transparent to-transparent z-20"></div>

          <!-- Futuristic Figure Silhouette sitting in deep observation -->
          <div class="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
            
            <!-- Glow around head / focal aura -->
            <div class="absolute -top-3 w-10 h-10 rounded-full bg-orange-400 opacity-40 blur-md animate-pulse"></div>
            <div class="absolute -top-1 w-6 h-6 rounded-full bg-yellow-100 opacity-60 blur-sm"></div>

            <!-- Sleek SVG silhouette (Person in circular ergonomic egg-chair) -->
            <svg class="w-24 h-24 text-black filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]" viewBox="0 0 100 100" fill="currentColor">
              <!-- Pod / Chair -->
              <path d="M50,15 C30,15 20,30 20,55 C20,75 32,85 50,85 C68,85 80,75 80,55 C80,30 70,15 50,15 Z" fill="#060608"></path>
              <!-- Inner Cushion Cutout -->
              <path d="M50,22 C35,22 26,33 26,55 C26,70 34,78 50,78 C66,78 74,70 74,55 C74,33 65,22 50,22 Z" fill="#010102"></path>
              <!-- Person Silhouette inside -->
              <!-- Torso & Arms -->
              <path d="M46,68 L54,68 L54,58 L52,50 L48,50 L46,58 Z" fill="#08080c"></path>
              <!-- Head -->
              <circle cx="50" cy="45" r="4.5" fill="#08080c"></circle>
              <!-- Glow back rim on seat -->
              <path d="M26,55 C26,62 30,70 38,74" stroke="#e6c29e" stroke-width="1" fill="none" opacity="0.4"></path>
              <path d="M74,55 C74,62 70,70 62,74" stroke="#a3704c" stroke-width="1" fill="none" opacity="0.3"></path>
            </svg>

          </div>

          <!-- Glass reflection light glare on the screen -->
          <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-20" style="mix-blend-mode: overlay;"></div>

        </div>
      </div>

      <!-- Left Bottom soft dark gradient blend for natural shadow -->
      <div class="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#030303] to-transparent z-40 pointer-events-none"></div>

    </div>

  </main>

  <!-- Fine Footer Branding -->
  <footer class="relative z-50 w-full max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between border-t border-[#ffffff05] text-[11px] text-[#636366] gap-4">
    <div class="flex items-center gap-1.5">
      <span>\xA9 2026 Imaginie Inc. All rights reserved.</span>
    </div>
    <div class="flex items-center gap-6">
      <a href="#" class="hover:text-white transition-colors duration-200">Terms of Service</a>
      <a href="#" class="hover:text-white transition-colors duration-200">Privacy Policy</a>
      <a href="#" class="hover:text-white transition-colors duration-200">System Status</a>
    </div>
  </footer>

  <!-- Script for Animations & Live Cosmic Canvas Simulation (WebGL Quality 2D Context) -->
  <script>
    // 1. Text Animation: Splitting the header words cleanly and fading in one by one.
    const title = document.getElementById('hero-title');
    const titleText = title.textContent.trim();
    title.innerHTML = '';
    
    // Split text into words safely
    const words = titleText.split(/\\s+/);
    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.className = 'word-span';
      span.innerHTML = word + '&nbsp;';
      span.style.transitionDelay = \`\${index * 80}ms\`;
      title.appendChild(span);
    });

    // Trigger animations when content loaded
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        const spans = document.querySelectorAll('.word-span');
        spans.forEach(span => span.classList.add('visible'));
      }, 100);

      setTimeout(() => {
        document.getElementById('hero-desc').style.opacity = '1';
        document.getElementById('hero-desc').style.transform = 'translateY(0)';
      }, 400);

      setTimeout(() => {
        document.getElementById('hero-actions').style.opacity = '1';
        document.getElementById('hero-actions').style.transform = 'translateY(0)';
      }, 650);

      setTimeout(() => {
        document.getElementById('hero-proof').style.opacity = '1';
        document.getElementById('hero-proof').style.transform = 'translateY(0)';
      }, 850);
    });

    // 2. Interactive Starfield Canvas inside the Portal Frame
    const portalCanvas = document.getElementById('portal-stars');
    const ctxPortal = portalCanvas.getContext('2d');
    
    let stars = [];
    let portalWidth = 0;
    let portalHeight = 0;

    function resizePortalCanvas() {
      const rect = portalCanvas.getBoundingClientRect();
      portalWidth = rect.width;
      portalHeight = rect.height;
      portalCanvas.width = portalWidth;
      portalCanvas.height = portalHeight;
      initStars();
    }

    function initStars() {
      stars = [];
      const count = 45;
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * portalWidth,
          y: Math.random() * portalHeight,
          radius: Math.random() * 1.5 + 0.5,
          color: getRandomColor(),
          speed: Math.random() * 0.15 + 0.05,
          angle: Math.random() * Math.PI * 2,
          pulse: Math.random() * 0.02
        });
      }
    }

    function getRandomColor() {
      const colors = [
        'rgba(230, 194, 158, ', // Bronze/gold matches frame
        'rgba(244, 244, 246, ', // Pure soft white
        'rgba(173, 140, 255, ', // Purple starlight
        'rgba(135, 206, 250, '  // Cool space blue
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function drawStars() {
      ctxPortal.clearRect(0, 0, portalWidth, portalHeight);
      
      stars.forEach(s => {
        // Drift movement
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        
        // Bounce bounds inside space window
        if (s.x < 0 || s.x > portalWidth) s.angle = Math.PI - s.angle;
        if (s.y < 0 || s.y > portalHeight) s.angle = -s.angle;

        // Sparkle fade
        s.speed += (Math.random() - 0.5) * 0.01;
        s.speed = Math.max(0.02, Math.min(s.speed, 0.25));

        // Pulsing glow alpha
        const alpha = 0.3 + Math.abs(Math.sin(Date.now() * s.pulse)) * 0.7;
        ctxPortal.beginPath();
        ctxPortal.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctxPortal.fillStyle = s.color + alpha + ')';
        ctxPortal.shadowBlur = s.radius * 4;
        ctxPortal.shadowColor = s.color + '0.8)';
        ctxPortal.fill();
      });

      requestAnimationFrame(drawStars);
    }

    // 3. Ambient Starfield on Page Background
    const ambientCanvas = document.getElementById('ambient-starfield');
    const ctxAmbient = ambientCanvas.getContext('2d');
    let ambientStars = [];

    function resizeAmbientCanvas() {
      ambientCanvas.width = window.innerWidth;
      ambientCanvas.height = window.innerHeight;
      initAmbientStars();
    }

    function initAmbientStars() {
      ambientStars = [];
      const count = 70;
      for (let i = 0; i < count; i++) {
        ambientStars.push({
          x: Math.random() * ambientCanvas.width,
          y: Math.random() * ambientCanvas.height,
          size: Math.random() * 0.8 + 0.2,
          opacity: Math.random() * 0.6 + 0.1,
          drift: Math.random() * 0.02 + 0.01
        });
      }
    }

    function drawAmbientStars() {
      ctxAmbient.clearRect(0, 0, ambientCanvas.width, ambientCanvas.height);
      ambientStars.forEach(s => {
        s.y -= s.drift;
        if (s.y < 0) s.y = ambientCanvas.height;
        ctxAmbient.fillStyle = \`rgba(255, 255, 255, \${s.opacity})\`;
        ctxAmbient.fillRect(s.x, s.y, s.size, s.size);
      });
      requestAnimationFrame(drawAmbientStars);
    }

    window.addEventListener('resize', () => {
      resizePortalCanvas();
      resizeAmbientCanvas();
    });

    // Initial setups
    resizePortalCanvas();
    resizeAmbientCanvas();
    drawStars();
    drawAmbientStars();
  <\/script>

<script data-neuform-video-controller="true">
(function () {
  function playVideo(video) {
    var promise = video.play();
    if (promise && typeof promise.catch === "function") {
      promise.catch(function () {});
    }
  }
  function setupVideo(video) {
    if (video.__neuformVideoReady === true) return;
    video.__neuformVideoReady = true;
    video.muted = true;
    video.playsInline = true;
    var preset = video.dataset.neuformVideoPreset || "loop-in-view";
    if (preset === "hover") {
      video.addEventListener("mouseenter", function () { playVideo(video); });
      video.addEventListener("mouseleave", function () {
        video.pause();
        video.currentTime = 0;
      });
      return;
    }
    if (!("IntersectionObserver" in window)) {
      playVideo(video);
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          if (preset === "play-once" && video.__neuformVideoPlayed === true) return;
          playVideo(video);
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.35 });
    if (preset === "play-once") {
      video.addEventListener("ended", function () {
        video.__neuformVideoPlayed = true;
      }, { once: true });
    }
    observer.observe(video);
  }
  function setupVideos() {
    document.querySelectorAll("video[data-neuform-video-preset]").forEach(setupVideo);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupVideos);
  } else {
    setupVideos();
  }
})();<\/script></body></html>`;var Jp=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>N E X U S &mdash; Tactile Fluidics</title>
    
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
</head>
<body class="bg-[#02040a] text-neutral-200 h-screen w-screen overflow-hidden font-['Inter',sans-serif] selection:bg-[#06b6d4] selection:text-black relative">

    <!-- Ambient WebGL Background -->
    <canvas id="bg-canvas" class="absolute inset-0 w-full h-full block pointer-events-none z-0 opacity-0" aria-hidden="true"></canvas>

    <!-- Top Navigation / Logo -->
    <header class="absolute top-0 left-0 w-full p-6 sm:p-10 z-20 flex justify-between items-center opacity-0 nav-reveal">
        <div class="font-light text-sm tracking-[0.4em] uppercase text-neutral-400">
            N E X U S
        </div>
        <div class="flex gap-4">
            <div class="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse" style="animation-duration: 3s;"></div>
        </div>
    </header>

    <!-- Main Content Layer -->
    <main class="content-layer relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
        
        <div class="tag font-mono text-xs tracking-[0.3em] uppercase text-[#06b6d4] mb-8 sm:mb-12 opacity-0 transform translate-y-4">
            System 07 / Viscosity
        </div>

        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-normal text-neutral-100 flex flex-wrap justify-center gap-x-3 gap-y-2 max-w-4xl text-center mb-6 overflow-hidden">
            <span class="overflow-hidden inline-block"><span class="reveal-word inline-block translate-y-full will-change-transform">Viscous</span></span>
            <span class="overflow-hidden inline-block"><span class="reveal-word inline-block translate-y-full will-change-transform text-neutral-400">Fields.</span></span>
            <span class="overflow-hidden inline-block"><span class="reveal-word inline-block translate-y-full will-change-transform">Reengineered.</span></span>
        </h1>

        <p class="subhead text-sm sm:text-base text-neutral-400 font-light tracking-wide max-w-md text-center mb-12 sm:mb-16 opacity-0 transform translate-y-4">
            Delve into high-fidelity tactile feedback arrays. Engineered for continuous adaptive state manipulation.
        </p>

        <!-- CTA Component -->
        <div class="intro opacity-0 transform translate-y-[-20px] scale-95 will-change-transform">
            <!-- Subtle Cyan Gradient Border Wrapper -->
            <div class="p-[1px] rounded-[19px] bg-gradient-to-b from-cyan-500/30 via-neutral-800/20 to-cyan-950/40 shadow-2xl">
                <button class="relative flex items-center justify-center w-[250px] h-[70px] border-0 p-0 rounded-[18px] overflow-hidden cursor-pointer bg-[#050b11] transition-all duration-300 ease-out shadow-[0_22px_44px_rgba(4,24,36,0.35),0_3px_9px_rgba(5,10,15,0.4),inset_0_0_0_1px_rgba(255,255,255,0.05)] hover:-translate-y-[2px] hover:shadow-[0_28px_56px_rgba(6,182,212,0.25),0_4px_11px_rgba(5,10,15,0.45)] active:translate-y-[1px] active:scale-[0.985] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#06b6d4] focus-visible:outline-offset-[5px]" id="btn" type="button">
                    <canvas id="gl" aria-hidden="true" class="absolute inset-0 w-full h-full block"></canvas>
                    <span class="relative z-10 pointer-events-none font-normal text-sm tracking-[0.3em] indent-[0.3em] text-[#e0faff] drop-shadow-[0_1px_10px_rgba(0,18,25,0.85)] flex items-center gap-2">
                        SURGE
                        <iconify-icon icon="solar:arrow-right-linear" width="18" height="18" stroke-width="1.5" class="ml-1 opacity-80"></iconify-icon>
                    </span>
                </button>
            </div>
        </div>

        <p class="note font-light text-xs text-neutral-500 tracking-wide mt-8 sm:mt-10 opacity-0 transform translate-y-4">
            Sweep the cursor to generate turbulence, click to discharge.
        </p>
    </main>

    <script>
        // --------------------------------------------------------
        // GSAP Animations & Parallax
        // --------------------------------------------------------
        document.addEventListener("DOMContentLoaded", () => {
            const tl = gsap.timeline();

            // Background Fade In
            tl.to("#bg-canvas", { opacity: 1, duration: 2, ease: "power2.inOut" }, 0);
            
            // Nav Reveal
            tl.to(".nav-reveal", { opacity: 1, duration: 1, ease: "power2.out" }, 0.5);

            // Tag Reveal
            tl.to(".tag", { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 0.8);

            // Masked Word Stagger
            tl.to(".reveal-word", {
                y: "0%",
                duration: 1,
                stagger: 0.12,
                ease: "power4.out"
            }, 0.9);

            // Subhead Reveal
            tl.to(".subhead", { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 1.4);

            // Button Drop/Bounce Effect (Replicating CSS Keyframes)
            tl.to(".intro", {
                y: 0,
                scale: 1,
                opacity: 1,
                duration: 1.2,
                ease: "elastic.out(1, 0.6)"
            }, 1.6);

            // Note Reveal
            tl.to(".note", { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 1.8);

            // Subtle Mouse Parallax
            document.addEventListener("mousemove", (e) => {
                const x = (e.clientX / window.innerWidth - 0.5) * 15;
                const y = (e.clientY / window.innerHeight - 0.5) * 15;
                
                gsap.to(".content-layer", {
                    x: x,
                    y: y,
                    duration: 1.5,
                    ease: "power2.out",
                    overwrite: "auto"
                });
            });
        });

        // --------------------------------------------------------
        // Ambient Background WebGL
        // --------------------------------------------------------
        (function initAmbientBG() {
            const canvas = document.getElementById('bg-canvas');
            const gl = canvas.getContext('webgl');
            if (!gl) return;

            const vs = 'attribute vec2 p; void main() { gl_Position = vec4(p, 0.0, 1.0); }';
            const fs = \`
                precision mediump float;
                uniform vec2 u_res;
                uniform float u_time;

                float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
                float noise(vec2 p) {
                    vec2 i = floor(p);
                    vec2 f = fract(p);
                    vec2 u = f * f * (3.0 - 2.0 * f);
                    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
                               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
                }
                float fbm(vec2 p) {
                    float v = 0.0, a = 0.5;
                    for (int i = 0; i < 4; i++) { v += a * noise(p); p = p * 2.0; a *= 0.5; }
                    return v;
                }

                void main() {
                    vec2 uv = gl_FragCoord.xy / u_res;
                    uv.x *= u_res.x / u_res.y;
                    
                    float t = u_time * 0.15;
                    
                    // Slow moving dark liquid
                    vec2 q = vec2(fbm(uv + t), fbm(uv + vec2(1.0) + t));
                    vec2 r = vec2(fbm(uv + 1.0*q + vec2(1.7, 9.2) + 0.15*t),
                                  fbm(uv + 1.0*q + vec2(8.3, 2.8) + 0.126*t));
                    
                    float f = fbm(uv + r);
                    
                    // Core dark colors, subtle icy/cyan hints replacing fiery shades
                    vec3 col = mix(vec3(0.01, 0.02, 0.03), vec3(0.01, 0.04, 0.07), f);
                    col = mix(col, vec3(0.02, 0.07, 0.12), clamp(length(q) * 0.5, 0.0, 1.0));
                    
                    // Vignette
                    vec2 e = gl_FragCoord.xy / u_res * (1.0 - gl_FragCoord.xy / u_res);
                    col *= 0.5 + 0.5 * pow(e.x * e.y * 15.0, 0.3);
                    
                    gl_FragColor = vec4(col, 1.0);
                }
            \`;

            function compile(type, src) {
                const s = gl.createShader(type);
                gl.shaderSource(s, src);
                gl.compileShader(s);
                return s;
            }

            const prog = gl.createProgram();
            gl.attachShader(prog, compile(gl.VERTEX_SHADER, vs));
            gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fs));
            gl.linkProgram(prog);
            gl.useProgram(prog);

            const buf = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buf);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
            
            const locP = gl.getAttribLocation(prog, 'p');
            gl.enableVertexAttribArray(locP);
            gl.vertexAttribPointer(locP, 2, gl.FLOAT, false, 0, 0);

            const uRes = gl.getUniformLocation(prog, 'u_res');
            const uTime = gl.getUniformLocation(prog, 'u_time');

            function resize() {
                const dpr = Math.min(window.devicePixelRatio || 1, 2);
                canvas.width = window.innerWidth * dpr;
                canvas.height = window.innerHeight * dpr;
                gl.viewport(0, 0, canvas.width, canvas.height);
            }
            window.addEventListener('resize', resize);
            resize();

            const start = performance.now();
            function render(now) {
                gl.uniform2f(uRes, canvas.width, canvas.height);
                gl.uniform1f(uTime, (now - start) / 1000);
                gl.drawArrays(gl.TRIANGLES, 0, 3);
                requestAnimationFrame(render);
            }
            requestAnimationFrame(render);
        })();

        // --------------------------------------------------------
        // Interactive Liquid Button WebGL (from reference)
        // --------------------------------------------------------
        (function initButtonWebGL() {
            var btn = document.getElementById('btn');
            var canvas = document.getElementById('gl');
            var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            var gl = canvas.getContext('webgl');
            
            if (!gl) { 
                btn.style.background = 'linear-gradient(to top, #0284c7 0%, #06b6d4 52%, #a5f3fc 55%, #050b11 56%)';
                canvas.style.display = 'none';
                return; 
            }

            var VS = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
            var FS = [
                'precision highp float;',
                'uniform vec2 u_res;',
                'uniform float u_time;',
                'uniform float u_level;',
                'uniform float u_tilt;',
                'uniform float u_slosh;',
                'float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}',
                'float noise(vec2 p){',
                '  vec2 i=floor(p), f=fract(p);',
                '  vec2 u=f*f*(3.0-2.0*f);',
                '  return mix(mix(hash(i),hash(i+vec2(1.,0.)),u.x),',
                '             mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),u.x),u.y);',
                '}',
                'float fbm(vec2 p){',
                '  float v=0.0; float a=0.5;',
                '  for(int i=0;i<4;i++){ v+=a*noise(p); p=p*2.04+vec2(11.3,7.1); a*=0.5; }',
                '  return v;',
                '}',
                'void main(){',
                '  vec2 uv = gl_FragCoord.xy / u_res;',
                '  float ar = u_res.x / u_res.y;',
                '  float x = uv.x * ar;',
                '  float t = u_time;',
                '  float amp = 0.012 + u_slosh * 0.045;',
                '  float surf = u_level',
                '    + u_tilt * (uv.x - 0.5) * 0.34',
                '    + amp * sin(x * 5.1 + t * 4.6)',
                '    + amp * 0.62 * sin(x * 9.7 + t * (-6.8) + 1.7)',
                '    + amp * 0.38 * sin(x * 14.3 + t * 8.9 + 4.2);',
                '  float d = surf - uv.y;',
                '  vec3 col = mix(vec3(0.03, 0.06, 0.1), vec3(0.05, 0.09, 0.15), uv.y);',
                '  col += vec3(0.02, 0.05, 0.1) * pow(max(0.0, 1.0 - abs(uv.y - 0.88) * 6.0), 2.0);',
                '  float inside = smoothstep(0.0, 0.012, d);',
                '  float depth = clamp(d / max(u_level, 0.001), 0.0, 1.0);',
                '  vec3 liq = mix(vec3(0.0, 0.9, 1.0), vec3(0.02, 0.15, 0.45), depth);',
                '  float caust = fbm(vec2(x * 4.2, (uv.y + t * 0.14) * 4.2));',
                '  liq *= 0.8 + 0.42 * caust;',
                '  liq += vec3(0.02, 0.25, 0.35) * pow(max(0.0, d * 3.0), 1.5) * u_slosh;',
                '  col = mix(col, liq, inside);',
                '  col += vec3(0.4, 0.9, 1.0) * exp(-abs(d) * 80.0) * 0.85;',
                '  col += vec3(0.8, 0.98, 1.0) * exp(-abs(d) * 220.0) * 0.5;',
                '  vec2 e = uv * (1.0 - uv);',
                '  col *= 0.55 + 0.45 * pow(e.x * e.y * 16.0, 0.22);',
                '  gl_FragColor = vec4(col, 1.0);',
                '}'
            ].join('\\n');

            function compile(type, src) {
                var s = gl.createShader(type);
                gl.shaderSource(s, src);
                gl.compileShader(s);
                return s;
            }
            
            var prog = gl.createProgram();
            gl.attachShader(prog, compile(gl.VERTEX_SHADER, VS));
            gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FS));
            gl.linkProgram(prog);
            gl.useProgram(prog);

            var buf = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buf);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
            var locP = gl.getAttribLocation(prog, 'p');
            gl.enableVertexAttribArray(locP);
            gl.vertexAttribPointer(locP, 2, gl.FLOAT, false, 0, 0);

            var uRes = gl.getUniformLocation(prog, 'u_res');
            var uTime = gl.getUniformLocation(prog, 'u_time');
            var uLevel = gl.getUniformLocation(prog, 'u_level');
            var uTilt = gl.getUniformLocation(prog, 'u_tilt');
            var uSlosh = gl.getUniformLocation(prog, 'u_slosh');

            function resize() {
                var dpr = Math.min(window.devicePixelRatio || 1, 2);
                var w = Math.max(1, Math.round(canvas.clientWidth * dpr));
                var h = Math.max(1, Math.round(canvas.clientHeight * dpr));
                if (canvas.width !== w || canvas.height !== h) {
                    canvas.width = w;
                    canvas.height = h;
                    gl.viewport(0, 0, w, h);
                }
            }
            window.addEventListener('resize', resize);
            resize();

            var BASE = 0.56;
            var level = BASE, gulp = 0;
            var slosh = 0.4, tilt = 0, tiltTarget = 0;
            var lastX = null;
            var last = performance.now();

            btn.addEventListener('mousemove', function (e) {
                var rect = btn.getBoundingClientRect();
                var x = (e.clientX - rect.left) / Math.max(1, rect.width);
                if (lastX !== null) {
                    slosh = Math.min(1.4, slosh + Math.abs(x - lastX) * 2.6);
                }
                lastX = x;
                tiltTarget = Math.max(-1, Math.min(1, (x - 0.5) * 2));
            });
            btn.addEventListener('mouseleave', function () { lastX = null; tiltTarget = 0; });
            btn.addEventListener('focus', function () { slosh = Math.min(1.4, slosh + 0.5); });
            btn.addEventListener('click', function () {
                gulp = 1;
                slosh = Math.min(1.4, slosh + 0.7);
            });

            function frame(now) {
                var dt = Math.min(0.05, (now - last) / 1000);
                last = now;
                slosh *= Math.exp(-1.5 * dt);
                gulp *= Math.exp(-1.1 * dt);
                tilt += (tiltTarget - tilt) * Math.min(1, dt * 5);
                var levelTarget = BASE - 0.36 * gulp;
                level += (levelTarget - level) * Math.min(1, dt * 5.5);
                
                resize();
                gl.uniform2f(uRes, canvas.width, canvas.height);
                gl.uniform1f(uTime, reduced ? 2.0 : now / 1000);
                gl.uniform1f(uLevel, level);
                gl.uniform1f(uTilt, tilt);
                gl.uniform1f(uSlosh, reduced ? 0.25 : slosh);
                gl.drawArrays(gl.TRIANGLES, 0, 3);
                requestAnimationFrame(frame);
            }
            requestAnimationFrame(frame);
        })();
    <\/script>
</body>
</html>`;var $p=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nexus Architecture - Topology</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap" rel="stylesheet">
</head>
<body class="text-gray-100 antialiased selection:bg-zinc-800 selection:text-white" style="font-family: 'Inter', sans-serif; background: radial-gradient(circle at bottom right, #18181b 0%, #000000 50%, #000000 100%); overflow: hidden; margin: 0; padding: 0; height: 100vh; width: 100vw;">

    <div id="canvasGlow" class="absolute pointer-events-none rounded-full blur-[120px] opacity-[0.15] bg-white transition-all duration-1000" style="z-index: 0; transform: translate(-50%, -50%);"></div>
    <canvas id="animationCanvas" class="absolute inset-0 w-full h-full z-0 pointer-events-none"></canvas>

    <header class="absolute top-10 left-12 right-12 z-50 flex justify-between items-center pointer-events-auto">
        <div class="flex items-center gap-3">
            <iconify-icon icon="solar:globus-linear" class="text-3xl text-white"></iconify-icon>
            <span class="text-xl tracking-tighter font-light text-white">Nexus Architecture</span>
        </div>
        <div class="text-xs tracking-widest uppercase text-gray-500 font-normal">System Topology</div>
    </header>

    <main class="relative z-10 w-full h-full flex items-center">
        
        <div class="pl-12 md:pl-20 max-w-[55vw] z-20 pointer-events-none">
            <h1 class="text-[clamp(4rem,8vw,10rem)] tracking-tighter font-light text-white leading-[0.85] mb-10">
                Expand vs<br>Refine
            </h1>
            <div class="text-xl md:text-2xl text-gray-400 font-light max-w-[42vw] leading-snug flex flex-col gap-8">
                <ul class="list-disc pl-6 text-gray-200 flex flex-col gap-3 marker:text-gray-500">
                    <li>Refinement sharpens focus.</li>
                    <li>Expansion broadens scope.</li>
                </ul>
                <p>
                    Understanding this duality is crucial for system architects. When the core logic holds, refine the parameters. When the constraints limit potential, expand the boundaries. Suboptimal scaling often results from misapplying these principles during rapid deployment.
                </p>
            </div>
        </div>

        <div class="absolute inset-0 pointer-events-none hidden md:block z-20">
            
            <div class="absolute top-[28%] left-[58%] pointer-events-auto transition-transform duration-75" data-float data-float-offset="0">
                <div class="relative bg-black/40 backdrop-blur-md shadow-2xl rounded-full px-4 py-1.5 flex items-center justify-center">
                    <div class="absolute inset-0 rounded-full p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"></div>
                    <span class="text-xs font-light text-gray-200">48.2 TB/s</span>
                </div>
                <div class="absolute -right-3 top-1/2 -mt-1 w-2 h-2 bg-white rounded-full">
                    <div class="absolute inset-0 rounded-full animate-ping bg-white opacity-75" style="animation-duration: 2s;"></div>
                </div>
            </div>

            <div class="absolute top-[18%] left-[72%] pointer-events-auto transition-transform duration-75" data-float data-float-offset="3">
                <div class="relative bg-black/40 backdrop-blur-md shadow-2xl rounded-full px-4 py-1.5 flex items-center gap-1.5 justify-center">
                    <div class="absolute inset-0 rounded-full p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"></div>
                    <iconify-icon icon="solar:users-group-rounded-linear" class="text-gray-300 text-sm"></iconify-icon>
                    <span class="text-xs font-light text-gray-200">+3,420</span>
                </div>
                <div class="absolute -bottom-3 left-1/2 -ml-1 w-2 h-2 bg-white rounded-full">
                    <div class="absolute inset-0 rounded-full animate-ping bg-white opacity-75" style="animation-duration: 2s; animation-delay: 0.5s;"></div>
                </div>
            </div>

            <div class="absolute top-[35%] left-[82%] pointer-events-auto transition-transform duration-75" data-float data-float-offset="0">
                <div class="relative bg-black/40 backdrop-blur-md shadow-2xl rounded-full px-4 py-1.5 flex items-center justify-center">
                    <div class="absolute inset-0 rounded-full p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"></div>
                    <span class="text-xs font-light text-gray-200">2.8 TB/s</span>
                </div>
            </div>

            <div class="absolute top-[45%] left-[52%] pointer-events-auto transition-transform duration-75" data-float data-float-offset="0">
                <div class="absolute -top-12 -right-8 bg-black/40 backdrop-blur-md shadow-2xl rounded-2xl px-4 py-2 w-max">
                    <div class="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"></div>
                    <span class="text-xs font-light text-gray-300">Ledger synced.</span>
                    <div class="absolute -bottom-2 left-4 w-4 h-4 bg-zinc-900/80 border-b border-r border-white/5 transform rotate-45 backdrop-blur-md"></div>
                </div>
                <div class="bg-black/40 backdrop-blur-md shadow-2xl rounded-full p-1.5 relative z-10">
                    <div class="absolute inset-0 rounded-full p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"></div>
                    <img src="https://i.pravatar.cc/150?img=47" alt="Node Operator" class="w-12 h-12 rounded-full object-cover grayscale opacity-80">
                </div>
                <div class="absolute -bottom-4 left-1/2 -ml-1 w-2 h-2 bg-white rounded-full">
                    <div class="absolute inset-0 rounded-full animate-ping bg-white opacity-75" style="animation-duration: 2s; animation-delay: 1s;"></div>
                </div>
            </div>

            <div class="absolute top-[58%] left-[62%] pointer-events-auto transition-transform duration-75" data-float data-float-offset="3">
                <div class="relative bg-black/40 backdrop-blur-md shadow-2xl rounded-2xl p-3 shadow-lg">
                    <div class="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"></div>
                    <iconify-icon icon="solar:user-circle-linear" class="text-gray-400 text-3xl"></iconify-icon>
                </div>
                <div class="absolute -bottom-4 left-1/2 -ml-1 w-2 h-2 bg-white rounded-full">
                    <div class="absolute inset-0 rounded-full animate-ping bg-white opacity-75" style="animation-duration: 2s; animation-delay: 0.2s;"></div>
                </div>
            </div>

            <div class="absolute top-[55%] left-[88%] pointer-events-auto transition-transform duration-75" data-float data-float-offset="0">
                <div class="relative bg-black/40 backdrop-blur-md shadow-2xl rounded-full px-4 py-1.5 flex items-center justify-center">
                    <div class="absolute inset-0 rounded-full p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"></div>
                    <span class="text-xs font-light text-gray-200">9.12 PB/s</span>
                </div>
            </div>

            <div class="absolute top-[72%] left-[55%] pointer-events-auto transition-transform duration-75" data-float data-float-offset="3">
                <div class="relative bg-black/40 backdrop-blur-md shadow-2xl rounded-2xl px-4 py-3 flex items-center gap-3">
                    <div class="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"></div>
                    <div class="rounded-full border border-zinc-700 p-0.5">
                        <iconify-icon icon="solar:user-circle-linear" class="text-gray-300 text-2xl"></iconify-icon>
                    </div>
                    <div>
                        <div class="text-xs font-light text-gray-200">AP-South-2</div>
                        <div class="text-xs font-light text-gray-500">Replicating</div>
                    </div>
                </div>
            </div>

            <div class="absolute top-[80%] left-[75%] pointer-events-auto transition-transform duration-75" data-float data-float-offset="0">
                <div class="relative bg-black/40 backdrop-blur-md shadow-2xl rounded-2xl px-4 py-3 flex items-center gap-3">
                    <div class="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"></div>
                    <div class="rounded-full border border-zinc-700 p-0.5">
                        <iconify-icon icon="solar:user-circle-linear" class="text-gray-300 text-2xl"></iconify-icon>
                    </div>
                    <div>
                        <div class="text-xs font-light text-gray-200">EU-North-1</div>
                        <div class="text-xs font-light text-gray-500">Validating</div>
                    </div>
                </div>
                <div class="absolute -bottom-4 left-12 w-2 h-2 bg-white rounded-full">
                    <div class="absolute inset-0 rounded-full animate-ping bg-white opacity-75" style="animation-duration: 2s; animation-delay: 0.8s;"></div>
                </div>
            </div>

            <div class="absolute top-[40%] left-[72%] pointer-events-auto transition-transform duration-75" data-float data-float-offset="0">
                <div class="absolute -top-10 -right-6 bg-black/40 backdrop-blur-md shadow-2xl rounded-2xl px-4 py-2 w-max z-10">
                    <div class="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"></div>
                    <span class="text-xs font-light text-gray-300">Payload secured.</span>
                </div>
                <div class="bg-black/40 backdrop-blur-md shadow-2xl rounded-full p-2 relative z-0">
                    <div class="absolute inset-0 rounded-full p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"></div>
                    <div class="w-10 h-10 bg-zinc-800/80 rounded-full flex items-center justify-center shadow-inner">
                        <iconify-icon icon="solar:rocket-linear" class="text-white text-xl"></iconify-icon>
                    </div>
                </div>
                <div class="absolute top-12 left-6 w-2 h-2 bg-white rounded-full">
                    <div class="absolute inset-0 rounded-full animate-ping bg-white opacity-75" style="animation-duration: 2s; animation-delay: 1.5s;"></div>
                </div>
            </div>

            <div class="absolute top-[68%] left-[82%] pointer-events-auto transition-transform duration-75" data-float data-float-offset="0">
                <div class="absolute -top-10 -left-12 bg-black/40 backdrop-blur-md shadow-2xl rounded-2xl px-4 py-2 w-max">
                    <div class="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"></div>
                    <span class="text-xs font-light text-gray-300">Channel encrypted.</span>
                </div>
                <div class="relative bg-black/40 backdrop-blur-md shadow-2xl rounded-full p-2">
                    <div class="absolute inset-0 rounded-full p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"></div>
                    <div class="w-8 h-8 bg-zinc-800/80 border border-zinc-600/50 rounded-full flex items-center justify-center shadow-sm">
                        <iconify-icon icon="solar:bolt-linear" class="text-gray-200 text-lg"></iconify-icon>
                    </div>
                </div>
                <div class="absolute -bottom-3 left-5 w-2 h-2 bg-white rounded-full">
                    <div class="absolute inset-0 rounded-full animate-ping bg-white opacity-75" style="animation-duration: 2s; animation-delay: 1.1s;"></div>
                </div>
            </div>

        </div>

    </main>

    <footer class="absolute bottom-10 left-12 right-12 z-50 flex justify-between items-center pointer-events-auto">
        <div class="text-xs tracking-widest uppercase text-gray-500 font-normal">Internal Draft & Restricted</div>
        <div class="text-xs tracking-widest uppercase text-gray-500 font-normal">01</div>
    </footer>

    <script>
        const canvas = document.getElementById('animationCanvas');
        const floaters = document.querySelectorAll('[data-float]');
        
        let width = window.innerWidth;
        let height = window.innerHeight;

        const scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0x0a0a0a, 300, 950);

        const camera = new THREE.PerspectiveCamera(60, width / height, 1, 2000);
        camera.position.z = 650;

        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const group = new THREE.Group();
        scene.add(group);

        const numNodes = 120;
        const nodes = [];
        const nodeGeo = new THREE.SphereGeometry(1, 16, 16);
        
        for(let i = 0; i < numNodes; i++) {
            let phi = Math.acos(-1 + (2 * i) / numNodes);
            let theta = Math.sqrt(numNodes * Math.PI) * phi;
            let x = Math.cos(theta) * Math.sin(phi);
            let y = Math.sin(theta) * Math.sin(phi);
            let z = Math.cos(phi);

            let mesh = new THREE.Mesh(
                nodeGeo,
                new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 })
            );
            mesh.position.set(x, y, z);
            mesh.userData = {
                baseSize: Math.random() * 1.5 + 1.0,
                pulseSpeed: Math.random() * 0.02 + 0.015,
                pulseOffset: Math.random() * Math.PI * 2
            };
            group.add(mesh);
            nodes.push(mesh);
        }

        const linePos = [];
        const lineColors = [];
        for(let i = 0; i < numNodes; i++) {
            for(let j = i + 1; j < numNodes; j++) {
                let dist = nodes[i].position.distanceTo(nodes[j].position);
                const threshold = 0.45;
                if(dist < threshold) {
                    linePos.push(nodes[i].position.x, nodes[i].position.y, nodes[i].position.z);
                    linePos.push(nodes[j].position.x, nodes[j].position.y, nodes[j].position.z);
                    
                    let alpha = (1 - dist / threshold) * 0.8;
                    lineColors.push(alpha, alpha, alpha);
                    lineColors.push(alpha, alpha, alpha);
                }
            }
        }
        
        const lineGeo = new THREE.BufferGeometry();
        lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePos, 3));
        lineGeo.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));
        const lineMat = new THREE.LineBasicMaterial({
            vertexColors: true,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            opacity: 0.65
        });
        const lines = new THREE.LineSegments(lineGeo, lineMat);
        group.add(lines);

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
            
            const R = width > 768 ? 380 : 200;
            group.scale.set(R, R, R);
            
            const centerX = width > 768 ? width * 0.2 : 0; 
            const centerY = width > 768 ? -height * 0.05 : -height * 0.2;
            group.position.set(centerX, centerY, 0);

            const glow = document.getElementById('canvasGlow');
            if (glow) {
                glow.style.left = \`\${(width / 2) + centerX}px\`;
                glow.style.top = \`\${(height / 2) - centerY}px\`;
                glow.style.width = \`\${R * 2.8}px\`;
                glow.style.height = \`\${R * 2.8}px\`;
            }
        }

        window.addEventListener('resize', resize);
        resize();

        let time = 0;
        function animate() {
            requestAnimationFrame(animate);
            time += 1;
            
            group.rotation.y = time * 0.0018;
            group.rotation.x = 0.2;
            group.rotation.z = time * 0.0006;

            nodes.forEach(mesh => {
                let p = mesh.userData;
                let pulse = (Math.sin((time * p.pulseSpeed) + p.pulseOffset) + 1) / 2;
                
                let targetRadius = p.baseSize + pulse * 1.8;
                let scale = targetRadius / group.scale.x;
                
                mesh.scale.set(scale, scale, scale);
                mesh.material.opacity = 0.4 + (pulse * 0.6);
            });

            floaters.forEach(el => {
                const offset = Number(el.getAttribute('data-float-offset'));
                const y = Math.sin((time * 0.02) + offset) * 12;
                const rot = Math.cos((time * 0.015) + offset) * 1.5;
                el.style.transform = \`translateY(\${y}px) rotate(\${rot}deg)\`;
            });

            renderer.render(scene, camera);
        }
        
        animate();
    <\/script>
</body>
</html>`;var ef=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Recursive Erosion \u2014 Particle Sphere Motion Study</title>
<meta name="description" content="Self-contained 4-second looping WebGL study: a particle sphere morphs and erodes recursively while glowing trails crawl across its surface.">
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{height:100%;overflow:hidden;background:transparent}
  body{display:grid;place-items:center}
  .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
  #stage{position:relative;width:100%;height:100%;background:transparent;overflow:hidden;--u:1px}
  #gl,#fx{position:absolute;inset:0;width:100%;height:100%;display:block}
  #fx{pointer-events:none;mix-blend-mode:screen;opacity:.4}
  /* faint scanlines only \u2014 the study paints no background of its own */
  #vig{position:absolute;inset:0;pointer-events:none;
       background:repeating-linear-gradient(180deg,rgba(255,255,255,.014) 0 1px,rgba(0,0,0,0) 1px 3px)}
  /* --u is one reference pixel of the 1080-square master, set on resize */
  #badge{position:absolute;right:calc(46 * var(--u));bottom:calc(45 * var(--u));pointer-events:none;
         font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,"DejaVu Sans Mono",monospace;
         font-size:calc(15 * var(--u));line-height:calc(16.8 * var(--u));
         letter-spacing:calc(1 * var(--u));white-space:nowrap;text-align:left}
  #badge b{display:block;font-weight:400;color:#f6dccd;
           text-shadow:calc(-1.3 * var(--u)) 0 rgba(226,64,80,.55),
                       calc(1.3 * var(--u)) 0 rgba(60,120,255,.5)}
  #badge b i{font-style:normal;color:#e6845f;margin-right:calc(5 * var(--u));
             text-shadow:calc(-1.1 * var(--u)) 0 rgba(226,64,80,.4),
                         calc(1.1 * var(--u)) 0 rgba(70,130,255,.45)}
</style>
</head>
<body>
<p class="sr">A four-second looping study of a generative particle sphere: a lattice of small orange dots over a transparent backdrop, its surface crumpling and eroding into holes while bright glowing trails crawl over it, each dot fringed with red and blue chromatic aberration.</p>
<div id="stage">
  <canvas id="gl"></canvas>
  <canvas id="fx"></canvas>
  <div id="vig"></div>
  <div id="badge">
    <b><i>//</i>W.O.R.M.</b>
    <b><i>//</i>WORLDS OF</b>
    <b><i>//</i>RECURSIVE</b>
    <b><i>//</i>MOTION</b>
  </div>
</div>
<script>
(function(){
  "use strict";
  var DUR=3.99;                 /* reference loop length */
  var N=2500;                   /* lattice points */
  var WORMS=7, TAIL=14, WN=WORMS*TAIL;

  var stage=document.getElementById('stage');
  var cv=document.getElementById('gl'), fx=document.getElementById('fx');
  var gl=cv.getContext('webgl',{alpha:true,antialias:false,premultipliedAlpha:true,preserveDrawingBuffer:true});
  var fc=fx.getContext('2d');

  /* ------------------------------------------------------------------ *
     shaders
   * ------------------------------------------------------------------ */
  var NOISE=[
  'vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}',
  'vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}',
  'vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}',
  'vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}',
  'float snoise(vec3 v){',
  '  const vec2 C=vec2(1.0/6.0,1.0/3.0); const vec4 D=vec4(0.0,0.5,1.0,2.0);',
  '  vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx);',
  '  vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.0-g; vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);',
  '  vec3 x1=x0-i1+C.xxx; vec3 x2=x0-i2+C.yyy; vec3 x3=x0-D.yyy;',
  '  i=mod289(i);',
  '  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));',
  '  float n_=0.142857142857; vec3 ns=n_*D.wyz-D.xzx;',
  '  vec4 j=p-49.0*floor(p*ns.z*ns.z);',
  '  vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.0*x_);',
  '  vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy; vec4 h=1.0-abs(x)-abs(y);',
  '  vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);',
  '  vec4 s0=floor(b0)*2.0+1.0; vec4 s1=floor(b1)*2.0+1.0; vec4 sh=-step(h,vec4(0.0));',
  '  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;',
  '  vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);',
  '  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));',
  '  p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;',
  '  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0); m=m*m;',
  '  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));',
  '}'].join('\\n');

  var VS=[
  'precision highp float;',
  'attribute vec3 a_dir;',
  'attribute vec2 a_rand;',
  'uniform mat3 u_rot;',
  'uniform float u_th, u_px, u_pass, u_thr, u_trail;',
  'uniform vec2 u_off, u_scale;',
  'uniform vec4 u_worm['+WN+'];',
  'varying vec3 v_col;',
  'varying float v_a, v_ca, v_k;',
  NOISE,
  'void main(){',
  '  vec3 dir=a_dir;',
  '  vec2 c=vec2(cos(u_th),sin(u_th));',
  /* every noise lookup rides a closed circular path, so the morph is exactly periodic */
  '  float n1=snoise(dir*1.30+vec3(c*0.95,0.0));',
  '  float n2=snoise(dir*2.70+vec3(0.0,c*0.80));',
  '  float n3=snoise(dir*5.60+vec3(c.y*0.62,0.0,c.x*0.62));',
  '  float ridge=1.0-abs(n2);',
  '  float disp=0.54*n1+0.44*(ridge-0.5)+0.20*n3;',
  '  float R=1.0+0.305*disp;',
  /* recursive erosion: two scales of noise chew holes through the shell */
  '  float e=0.66*snoise(dir*1.45+vec3(c*1.30,0.4))+0.34*snoise(dir*3.10+vec3(0.3,c*1.05));',
  '  float alive=smoothstep(u_thr-0.05,u_thr+0.06,e+0.5);',
  '  vec3 n=u_rot*dir;',
  '  vec3 p=u_rot*(dir*R);',
  '  float persp=1.0/(1.0-0.14*p.z);',
  '  float face=smoothstep(-0.10,0.06,n.z);',
  /* glowing trails crawling over the shell: the rope carries its own dense
     particles, the lattice underneath only picks up a soft halo from them */
  '  float boost=0.0;',
  '  if(u_trail>0.5){',
  '    boost=a_rand.x*1.5;',
  '  }else{',
  '    for(int i=0;i<'+WN+';i++){',
  '      vec3 d=dir-u_worm[i].xyz;',
  '      boost+=u_worm[i].w*exp(-dot(d,d)*260.0);',
  '    }',
  '    boost=min(boost,1.5);',
  '  }',
  '  float live=(u_trail>0.5?1.0:max(alive,min(1.0,boost*0.9)))*face;',
  '  float sz=u_px*persp*(u_trail>0.5',
  '    ?(0.72+0.55*a_rand.y)*(1.0+boost*1.50)',
  '    :(0.78+0.50*a_rand.y)*(1.0+boost*1.2));',
  '  vec3 cDim=vec3(0.94,0.33,0.05);',
  '  vec3 cMid=vec3(1.00,0.56,0.16);',
  '  vec3 cHot=vec3(1.00,0.71,0.31);',
  '  vec3 col=mix(cDim,cMid,a_rand.x*a_rand.x);',
  '  if(u_trail>0.5) col=mix(cMid,cHot,clamp(boost,0.0,1.0));',
  '  else col=mix(col,cHot,clamp(boost*1.1,0.0,1.0));',
  '  float rim=1.0+0.12*pow(1.0-abs(n.z),4.0);',
  '  float a=(u_trail>0.5',
  '    ?(0.52+0.20*a_rand.y)*clamp(boost,0.0,1.22)',
  '    :(0.92+0.28*a_rand.y)*(0.85+0.60*min(boost,1.2)))*rim*live;',
  '  if(u_pass>0.5){',
  '    sz*=4.6; a*=0.115*smoothstep(0.15,0.70,boost);',
  '  }',
  '  v_col=col; v_a=a;',
  '  v_k=(u_pass>0.5)?3.0:(u_trail>0.5?0.0:2.1);',
  '  v_ca=(u_pass>0.5)?0.0:(u_trail>0.5?0.02:clamp(2.0/max(sz,3.0),0.015,0.055));',
  '  gl_PointSize=(a<0.004)?0.0:clamp(sz,0.0,140.0);',
  '  gl_Position=vec4(p.xy*persp*u_scale+u_off,0.0,1.0);',
  '}'].join('\\n');

  var FS=[
  'precision mediump float;',
  'varying vec3 v_col;',
  'varying float v_a, v_ca, v_k;',
  'float sp(vec2 c,float k){float d=length(c)*2.0;',
  '  if(k<0.5) return 1.0-smoothstep(0.42,1.0,d);',
  '  return pow(max(0.0,1.0-d),k);}',
  'void main(){',
  '  vec2 q=gl_PointCoord-0.5;',
  '  float k=v_k;',
  '  vec2 o=vec2(v_ca,v_ca*0.35);',
  /* per-dot chromatic aberration: the reference dots carry a red/blue fringe */
  '  float aR=sp(q+o,k), aG=sp(q,k), aB=sp(q-o,k);',
  '  vec3 c=vec3(v_col.r*aR,v_col.g*aG,v_col.b*aB)*v_a;',
  /* premultiplied coverage, so the dots composite over whatever sits behind the
     canvas instead of over a painted background */
  '  float cov=clamp(max(max(aR,aG),aB)*v_a,0.0,1.0);',
  '  gl_FragColor=vec4(min(c,vec3(1.0)),cov);',
  '}'].join('\\n');

  function sh(type,src){
    var s=gl.createShader(type);
    gl.shaderSource(s,src); gl.compileShader(s);
    if(!gl.getShaderParameter(s,gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
    return s;
  }
  var prog=gl.createProgram();
  gl.attachShader(prog,sh(gl.VERTEX_SHADER,VS));
  gl.attachShader(prog,sh(gl.FRAGMENT_SHADER,FS));
  gl.linkProgram(prog);
  if(!gl.getProgramParameter(prog,gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
  gl.useProgram(prog);

  /* ------------------------------------------------------------------ *
     geometry \u2014 fibonacci sphere, the lattice reads as spiral rows
   * ------------------------------------------------------------------ */
  function rng(s){var a=s>>>0;return function(){a+=0x6D2B79F5;var t=a;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296}}
  var R0=rng(20260812);
  var dirs=new Float32Array(N*3), rnds=new Float32Array(N*2);
  var GA=Math.PI*(3-Math.sqrt(5)), SP=Math.sqrt(4*Math.PI/N);
  for(var i=0;i<N;i++){
    var y=1-(i+0.5)/N*2, r=Math.sqrt(Math.max(0,1-y*y)), th=GA*i;
    /* a touch of jitter keeps the grain even without reading as spiral arms */
    var jx=(R0()*2-1)*SP*0.08, jy=(R0()*2-1)*SP*0.08, jz=(R0()*2-1)*SP*0.08;
    var vx=Math.cos(th)*r+jx, vy=y+jy, vz=Math.sin(th)*r+jz;
    var il=1/Math.hypot(vx,vy,vz);
    dirs[i*3]=vx*il; dirs[i*3+1]=vy*il; dirs[i*3+2]=vz*il;
    rnds[i*2]=R0(); rnds[i*2+1]=R0();
  }
  var A={dir:gl.getAttribLocation(prog,'a_dir'),rand:gl.getAttribLocation(prog,'a_rand')};
  gl.enableVertexAttribArray(A.dir); gl.enableVertexAttribArray(A.rand);
  function stat(data){
    var b=gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER,b);
    gl.bufferData(gl.ARRAY_BUFFER,data,gl.STATIC_DRAW);
    return b;
  }
  var bDir=stat(dirs), bRand=stat(rnds);
  function bindShell(){
    gl.bindBuffer(gl.ARRAY_BUFFER,bDir);  gl.vertexAttribPointer(A.dir,3,gl.FLOAT,false,0,0);
    gl.bindBuffer(gl.ARRAY_BUFFER,bRand); gl.vertexAttribPointer(A.rand,2,gl.FLOAT,false,0,0);
  }

  var U={};
  ['u_rot','u_th','u_scale','u_px','u_pass','u_thr','u_off','u_worm','u_trail'].forEach(function(k){
    U[k]=gl.getUniformLocation(prog,k);
  });

  /* ------------------------------------------------------------------ *
     worms \u2014 each rides a tilted great circle, so the loop stays seamless
   * ------------------------------------------------------------------ */
  var W=[];
  for(i=0;i<WORMS;i++){
    /* each path circles a cap centred on the viewer-facing side, so a steady
       handful of ropes is always on screen instead of swinging out of sight */
    var cz=0.06+R0()*0.86, ca0=R0()*6.283, cr=Math.sqrt(Math.max(0,1-cz*cz));
    var c=[Math.cos(ca0)*cr,Math.sin(ca0)*cr,cz];
    var t0=Math.abs(c[1])<0.85?[0,1,0]:[1,0,0];
    var d=t0[0]*c[0]+t0[1]*c[1]+t0[2]*c[2];
    var u=[t0[0]-c[0]*d,t0[1]-c[1]*d,t0[2]-c[2]*d];
    var lu=Math.hypot(u[0],u[1],u[2]); u=[u[0]/lu,u[1]/lu,u[2]/lu];
    var v=[c[1]*u[2]-c[2]*u[1],c[2]*u[0]-c[0]*u[2],c[0]*u[1]-c[1]*u[0]];
    var rho=0.46+R0()*0.42, sr=Math.sin(rho), crho=Math.cos(rho);
    W.push({c:c,u:u,v:v,sr:sr,cr:crho,m:1+Math.floor(R0()*2),ph:R0()*6.283,
            str:0.90+R0()*0.28,arc:(0.78+R0()*0.34)/sr,fl:R0()*6.283});
  }
  /* a point on worm k's path at angle ang, written into out[] */
  function onPath(w,ang,out){
    var ca=Math.cos(ang), sa=Math.sin(ang);
    out[0]=w.c[0]*w.cr+(w.u[0]*ca+w.v[0]*sa)*w.sr;
    out[1]=w.c[1]*w.cr+(w.u[1]*ca+w.v[1]*sa)*w.sr;
    out[2]=w.c[2]*w.cr+(w.u[2]*ca+w.v[2]*sa)*w.sr;
  }
  var tmpA=[0,0,0], tmpB=[0,0,0];
  var wormPos=new Float32Array(WN*4);
  function worms(th){
    for(var k=0;k<WORMS;k++){
      var w=W[k], head=th*w.m+w.ph;
      var flick=0.76+0.24*Math.sin(th*2.0+w.fl);
      for(var j=0;j<TAIL;j++){
        var o=(k*TAIL+j);
        onPath(w,head-j*(w.arc/TAIL),tmpA);
        wormPos[o*4]=tmpA[0]; wormPos[o*4+1]=tmpA[1]; wormPos[o*4+2]=tmpA[2];
        wormPos[o*4+3]=w.str*flick*(0.42+0.58*Math.pow(1-j/TAIL,0.7))*(0.80+0.20*Math.sin(j*1.7+head*2.0));
      }
    }
  }

  /* the rope itself: pearls strung along each path, finer than the lattice */
  var PEARL=34, TN=WORMS*PEARL, TSTRIDE=5;
  var pearls=new Float32Array(TN*TSTRIDE), pearlSeed=new Float32Array(TN);
  for(i=0;i<TN;i++) pearlSeed[i]=R0();
  var bTrail=gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER,bTrail);
  gl.bufferData(gl.ARRAY_BUFFER,pearls.byteLength,gl.DYNAMIC_DRAW);
  function bindTrail(){
    gl.bindBuffer(gl.ARRAY_BUFFER,bTrail);
    gl.vertexAttribPointer(A.dir,3,gl.FLOAT,false,TSTRIDE*4,0);
    gl.vertexAttribPointer(A.rand,2,gl.FLOAT,false,TSTRIDE*4,12);
  }
  function rope(th){
    for(var k=0;k<WORMS;k++){
      var w=W[k], head=th*w.m+w.ph;
      var flick=0.86+0.14*Math.sin(th*2.0+w.fl);
      var pstep=w.arc/PEARL;
      for(var j=0;j<PEARL;j++){
        var ang=head-j*pstep;
        var o=(k*PEARL+j), b=o*TSTRIDE, u=j/PEARL;
        /* a small wobble in the path angle keeps the rope from reading as a
           perfect arc without kinking it */
        var wob=0.055*Math.sin(j*0.42+head*2.0+w.fl)+0.030*Math.sin(j*0.17-head);
        onPath(w,ang+wob,tmpB);
        pearls[b]=tmpB[0]; pearls[b+1]=tmpB[1]; pearls[b+2]=tmpB[2];
        /* long even ridge that only fades at the far end, beaded along the way */
        pearls[b+3]=w.str*flick*(0.34+0.66*Math.pow(1-u,0.55))
                    *(0.74+0.26*Math.sin(j*1.15+head*2.0+w.fl));
        pearls[b+4]=pearlSeed[o];
      }
    }
    gl.bindBuffer(gl.ARRAY_BUFFER,bTrail);
    gl.bufferSubData(gl.ARRAY_BUFFER,0,pearls);
  }

  /* gentle tumble, periodic over the loop */
  function rot(th){
    var ax=0.22*Math.sin(th)+0.06*Math.sin(th*2+1.1);
    var ay=0.30*Math.sin(th+2.2)+0.08*Math.cos(th*2);
    var az=0.10*Math.cos(th+0.6);
    var cx=Math.cos(ax),sx=Math.sin(ax),cy=Math.cos(ay),sy=Math.sin(ay),cz=Math.cos(az),sz=Math.sin(az);
    /* Rz * Ry * Rx, column-major for WebGL */
    var m00=cz*cy, m01=cz*sy*sx-sz*cx, m02=cz*sy*cx+sz*sx;
    var m10=sz*cy, m11=sz*sy*sx+cz*cx, m12=sz*sy*cx-cz*sx;
    var m20=-sy,   m21=cy*sx,          m22=cy*cx;
    return new Float32Array([m00,m10,m20, m01,m11,m21, m02,m12,m22]);
  }

  /* ------------------------------------------------------------------ *
     grain overlay
   * ------------------------------------------------------------------ */
  var TILES=[];
  (function(){
    for(var t=0;t<5;t++){
      var c=document.createElement('canvas'); c.width=c.height=170;
      var g=c.getContext('2d'), im=g.createImageData(170,170), d=im.data;
      for(var i=0;i<d.length;i+=4){
        var v=R0(), n=v*v*255;
        d[i]=n; d[i+1]=n*0.74; d[i+2]=n*0.52; d[i+3]=255;
      }
      g.putImageData(im,0,0); TILES.push(c);
    }
  })();
  var pats=null;
  function grain(frame){
    if(!fx.width) return;
    if(!pats) pats=TILES.map(function(t){return fc.createPattern(t,'repeat')});
    fc.setTransform(1,0,0,1,0,0);
    fc.clearRect(0,0,fx.width,fx.height);
    fc.globalAlpha=0.11;
    fc.fillStyle=pats[frame%pats.length];
    fc.setTransform(1,0,0,1,(frame*37)%170,(frame*61)%170);
    fc.fillRect(-170,-170,fx.width+340,fx.height+340);
    fc.setTransform(1,0,0,1,0,0);
  }

  /* ------------------------------------------------------------------ *
     render
   * ------------------------------------------------------------------ */
  var DPR=1, size=0, VW=0, VH=0, aspX=1, aspY=1;
  function resize(){
    var w=stage.clientWidth||600, h=stage.clientHeight||600;
    DPR=Math.min(window.devicePixelRatio||1,2);
    VW=Math.max(1,Math.round(w*DPR)); VH=Math.max(1,Math.round(h*DPR));
    if(cv.width!==VW||cv.height!==VH){
      cv.width=fx.width=VW; cv.height=fx.height=VH;
      pats=null;
    }
    /* the sphere is measured against the short edge, so it stays round and
       centred in any container aspect */
    size=Math.min(VW,VH);
    aspX=VW>VH?VH/VW:1; aspY=VH>VW?VW/VH:1;
    stage.style.setProperty('--u',(Math.min(w,h)/1080)+'px');
    gl.viewport(0,0,VW,VH);
  }

  var frameNo=0;
  function render(t){
    var th=2*Math.PI*(t/DUR);
    worms(th); rope(th);
    gl.clearColor(0,0,0,0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_ALPHA);
    gl.uniformMatrix3fv(U.u_rot,false,rot(th));
    gl.uniform1f(U.u_th,th);
    gl.uniform2f(U.u_scale,0.672*aspX,0.672*aspY);
    gl.uniform1f(U.u_px,Math.max(1.0,size/1080*8.0));
    gl.uniform1f(U.u_thr,0.19+0.04*Math.sin(th*2+0.8));
    gl.uniform2f(U.u_off,0.006*Math.sin(th+1.0),-0.012*Math.cos(th));
    gl.uniform4fv(U.u_worm,wormPos);

    bindShell();
    gl.uniform1f(U.u_trail,0);
    gl.uniform1f(U.u_pass,0);
    gl.drawArrays(gl.POINTS,0,N);

    bindTrail();
    gl.uniform1f(U.u_trail,1);
    gl.uniform1f(U.u_pass,1);              /* bloom under the rope */
    gl.drawArrays(gl.POINTS,0,TN);
    gl.uniform1f(U.u_pass,0);
    gl.drawArrays(gl.POINTS,0,TN);
    grain(frameNo++);
  }

  /* ------------------------------------------------------------------ *
     driver
   * ------------------------------------------------------------------ */
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var start=null, raf=0, playing=!reduce, held=false, at=0;
  function seek(x){at=((x%DUR)+DUR)%DUR;frameNo=Math.round(at*30);render(at);return at}
  function play(){if(playing&&raf)return;playing=true;start=performance.now()-at*1000;if(!raf)raf=requestAnimationFrame(tick)}
  function pause(){playing=false;if(raf){cancelAnimationFrame(raf);raf=0}}
  function tick(now){
    if(!playing){raf=0;return}
    raf=requestAnimationFrame(tick);
    if(start===null)start=now;
    at=((now-start)/1000)%DUR;
    render(at);
  }
  resize();
  window.addEventListener('resize',function(){resize();render(at)});
  if(reduce){ seek(1.2) } else {
    raf=requestAnimationFrame(tick);
    document.addEventListener('visibilitychange',function(){
      if(document.hidden){ if(playing){held=true;pause()} }
      else if(held){ held=false; play() }
    });
  }
  window.__DUR=DUR;
  window.__seek=function(x){pause();return seek(x)};
  window.__play=play; window.__pause=pause; window.__time=function(){return at};
})();
<\/script>
</body>
</html>
`;var tf=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Preview</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <style>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    body {
      height: 100%;
      overflow: auto;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #000000;
      color: #ffffff;
    }
    .component-wrapper {
      width: 100%;
      height: 100%;
      padding: 0;
      box-sizing: border-box;
      overflow: auto;
    }
  </style>
</head>
<body>
  <div class="component-wrapper">
    <html><head></head><body><button class="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden font-semibold text-neutral-400 tracking-tight bg-neutral-800 border-neutral-600 border rounded-full pt-[12px] pr-[20px] pb-[12px] pl-[20px] items-center justify-center">
  <!-- Original text (slides down on hover) -->
  <span class="relative z-10 font-medium rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md">Download Mac app</span>
  
  <!-- Clone text (slides in from top on hover) -->
  <span class="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 rounded-full blur-md">Download Mac app</span>

  <!-- replaces the old ::before underline -->
  <span aria-hidden="true" class="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-neutral-200 to-transparent rounded-full blur-[2px]"></span>
  
  <!-- bottom light gradient on hover -->
  <span aria-hidden="true" class="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/20 via-white/10 to-transparent rounded-full"></span>
</button></body></html>
  </div>
  
    <script>
      (function() {
        function checkAndCenter() {
          // Use double requestAnimationFrame to ensure DOM is fully painted and layout is stable
          requestAnimationFrame(function() {
            requestAnimationFrame(function() {
              const wrapper = document.querySelector('.component-wrapper');
              if (!wrapper) return;
              
              // Get all child elements
              const children = Array.from(wrapper.children);
              if (children.length === 0) return;
              
              // Temporarily override wrapper styles to shrink-wrap for measurement
              // Set inline styles to shrink-wrap (inline styles override CSS)
              wrapper.style.display = 'inline-block';
              wrapper.style.width = 'auto';
              wrapper.style.height = 'auto';
              wrapper.style.overflow = 'visible';
              wrapper.style.boxSizing = 'content-box';
              
              // Force multiple reflows to ensure styles are fully applied
              void wrapper.offsetHeight;
              void wrapper.offsetWidth;
              void wrapper.offsetHeight;
              
              // Measure the wrapper's content size
              const contentWidth = wrapper.offsetWidth;
              const contentHeight = wrapper.offsetHeight;
              
              // Restore original styles by removing inline styles we added
              wrapper.style.removeProperty('display');
              wrapper.style.removeProperty('width');
              wrapper.style.removeProperty('height');
              wrapper.style.removeProperty('overflow');
              wrapper.style.removeProperty('box-sizing');
              
              // If content is less than 500x500, center it
              if (contentWidth > 0 && contentHeight > 0 && contentWidth < 500 && contentHeight < 500) {
                wrapper.style.display = 'flex';
                wrapper.style.alignItems = 'center';
                wrapper.style.justifyContent = 'center';
              }
            });
          });
        }
        
        // Check immediately and after delays to ensure content is rendered and styled
        function runChecks() {
          checkAndCenter();
          setTimeout(checkAndCenter, 50);
          setTimeout(checkAndCenter, 150);
          setTimeout(checkAndCenter, 300);
          setTimeout(checkAndCenter, 500);
          setTimeout(checkAndCenter, 1000);
        }
        
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', runChecks);
        } else {
          runChecks();
        }
        
        // Also check when images or other resources load
        window.addEventListener('load', () => {
          setTimeout(checkAndCenter, 100);
          setTimeout(checkAndCenter, 300);
        });
        
        // Use ResizeObserver to detect size changes
        if (window.ResizeObserver) {
          setTimeout(() => {
            const wrapper = document.querySelector('.component-wrapper');
            if (wrapper) {
              const observer = new ResizeObserver(() => {
                setTimeout(checkAndCenter, 50);
              });
              observer.observe(wrapper);
            }
          }, 500);
        }
      })();
    <\/script>
  
</body>
</html>
`;var af=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Preview</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <style>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    body {
      height: 100%;
      overflow: auto;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #000000;
      color: #ffffff;
    }
    .component-wrapper {
      width: 100%;
      height: 100%;
      padding: 0;
      box-sizing: border-box;
      overflow: auto;
    }
  </style>
</head>
<body>
  <div class="component-wrapper">
    <html><head></head><body><button class="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center">
  <!-- Spinning Border Beam (Visible on Hover) -->
  <span class="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
  
  <!-- Default Static Border -->
  <span class="absolute inset-0 rounded-full bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0"></span>
  
  <!-- 3D Button Surface & Content -->
  <span class="flex items-center justify-center gap-2 uppercase transition-colors duration-300 group-hover:text-white text-xs font-medium text-zinc-400 tracking-widest bg-gradient-to-b from-zinc-800 to-zinc-950 w-full h-full rounded-full pt-2.5 pr-6 pb-2.5 pl-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
    <span class="relative z-10">Request Demo</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
      <path d="M5 12h14" class=""></path>
      <path d="m12 5 7 7-7 7" class=""></path>
    </svg>
  </span>
</button></body></html>
  </div>
  
    <script>
      (function() {
        function checkAndCenter() {
          // Use double requestAnimationFrame to ensure DOM is fully painted and layout is stable
          requestAnimationFrame(function() {
            requestAnimationFrame(function() {
              const wrapper = document.querySelector('.component-wrapper');
              if (!wrapper) return;
              
              // Get all child elements
              const children = Array.from(wrapper.children);
              if (children.length === 0) return;
              
              // Temporarily override wrapper styles to shrink-wrap for measurement
              // Set inline styles to shrink-wrap (inline styles override CSS)
              wrapper.style.display = 'inline-block';
              wrapper.style.width = 'auto';
              wrapper.style.height = 'auto';
              wrapper.style.overflow = 'visible';
              wrapper.style.boxSizing = 'content-box';
              
              // Force multiple reflows to ensure styles are fully applied
              void wrapper.offsetHeight;
              void wrapper.offsetWidth;
              void wrapper.offsetHeight;
              
              // Measure the wrapper's content size
              const contentWidth = wrapper.offsetWidth;
              const contentHeight = wrapper.offsetHeight;
              
              // Restore original styles by removing inline styles we added
              wrapper.style.removeProperty('display');
              wrapper.style.removeProperty('width');
              wrapper.style.removeProperty('height');
              wrapper.style.removeProperty('overflow');
              wrapper.style.removeProperty('box-sizing');
              
              // If content is less than 500x500, center it
              if (contentWidth > 0 && contentHeight > 0 && contentWidth < 500 && contentHeight < 500) {
                wrapper.style.display = 'flex';
                wrapper.style.alignItems = 'center';
                wrapper.style.justifyContent = 'center';
              }
            });
          });
        }
        
        // Check immediately and after delays to ensure content is rendered and styled
        function runChecks() {
          checkAndCenter();
          setTimeout(checkAndCenter, 50);
          setTimeout(checkAndCenter, 150);
          setTimeout(checkAndCenter, 300);
          setTimeout(checkAndCenter, 500);
          setTimeout(checkAndCenter, 1000);
        }
        
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', runChecks);
        } else {
          runChecks();
        }
        
        // Also check when images or other resources load
        window.addEventListener('load', () => {
          setTimeout(checkAndCenter, 100);
          setTimeout(checkAndCenter, 300);
        });
        
        // Use ResizeObserver to detect size changes
        if (window.ResizeObserver) {
          setTimeout(() => {
            const wrapper = document.querySelector('.component-wrapper');
            if (wrapper) {
              const observer = new ResizeObserver(() => {
                setTimeout(checkAndCenter, 50);
              });
              observer.observe(wrapper);
            }
          }, 500);
        }
      })();
    <\/script>
  
</body>
</html>
`;var nf=`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>Uploading \u2014 glowing border microinteraction</title>
<style>
  :root{ color-scheme: dark; }
  html,body{ margin:0; height:100%; background:#1d1d1d; }
  body{
    display:flex; align-items:center; justify-content:center;
    overflow:hidden; -webkit-font-smoothing:antialiased;
  }
  #stage{
    position:relative;
    width:min(100vw,100svh); height:min(100vw,100svh);
    background:#1d1d1d;
  }
  #c{ position:absolute; inset:0; width:100%; height:100%; display:block; }
</style>
</head>
<body>
<div id="stage"><canvas id="c"></canvas></div>
<script>
(function(){
  'use strict';

  /* ---------- reference frame: everything authored in a 2048px square ---------- */
  var REF = 2048;
  var CX = 1024 - 22, CY = 1024 + 11.5;   /* button centre in the source recording */
  var PW = 976, PH = 345, PR = 100;       /* plate */
  var GAP = 50;                            /* plate edge -> track centre */
  var TW = PW + 2*GAP, TH = PH + 2*GAP, TR = PR + GAP;
  var TRACK_W = 13, CORE_W = 14, GLOW_W = 12;

  var DUR = 2.70;                          /* one lap of the trace = one loop */
  var TAIL = 0.389;                        /* comet length, in laps */
  var SHIM_OFF = 0.898;                    /* lap phase where the text sweep turns at the left */
  var TXT_W = 778, TXT_CAP = 120, TXT_BASE = 1093;
  var FONT = '300 100px -apple-system, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Inter, system-ui, "Segoe UI", Roboto, sans-serif';

  var cv = document.getElementById('c'), ctx = cv.getContext('2d');
  var gl = document.createElement('canvas'), gx = gl.getContext('2d');   /* comet, glow tint */
  var co = document.createElement('canvas'), cox = co.getContext('2d');  /* comet, core tint */
  var S = 0, k = 1, dpr = 1;
  var canFilter = (function(){ var t=document.createElement('canvas').getContext('2d'); t.filter='blur(2px)'; return t.filter!=='none'; })();

  /* ---------- geometry: rounded rect sampled by arc length ---------- */
  function rrPath(c, cx, cy, w, h, r){
    var x = cx - w/2, y = cy - h/2;
    c.beginPath();
    c.moveTo(x+r, y);
    c.lineTo(x+w-r, y);   c.arcTo(x+w, y,     x+w, y+r,     r);
    c.lineTo(x+w, y+h-r); c.arcTo(x+w, y+h,   x+w-r, y+h,   r);
    c.lineTo(x+r, y+h);   c.arcTo(x,   y+h,   x,   y+h-r,   r);
    c.lineTo(x, y+r);     c.arcTo(x,   y,     x+r, y,       r);
    c.closePath();
  }

  /* point on the track outline at arc length s, starting at the top-left corner
     tangent point and running clockwise */
  var SW = TW - 2*TR, SH = TH - 2*TR, ARC = Math.PI*TR/2;
  var PERIM = 2*SW + 2*SH + 4*ARC;
  var L = CX - TW/2, T = CY - TH/2, R = CX + TW/2, B = CY + TH/2;
  function ptAt(s){
    s = s - Math.floor(s/PERIM)*PERIM;
    var a;
    if(s < SW)  return [L+TR+s, T];
    s -= SW;
    if(s < ARC){ a = s/TR; return [R-TR+TR*Math.sin(a), T+TR-TR*Math.cos(a)]; }
    s -= ARC;
    if(s < SH)  return [R, T+TR+s];
    s -= SH;
    if(s < ARC){ a = s/TR; return [R-TR+TR*Math.cos(a), B-TR+TR*Math.sin(a)]; }
    s -= ARC;
    if(s < SW)  return [R-TR-s, B];
    s -= SW;
    if(s < ARC){ a = s/TR; return [L+TR-TR*Math.sin(a), B-TR+TR*Math.cos(a)]; }
    s -= ARC;
    if(s < SH)  return [L, B-TR-s];
    s -= SH;
    a = s/TR; return [L+TR-TR*Math.cos(a), T+TR-TR*Math.sin(a)];
  }

  /* brightness along the comet, sampled off the source clip every 0.0139 lap:
     a hot head, a flat core, then a long uneven fade */
  var TAPER = [1.16,1.09,1.03,1.00,1.02,1.00,1.00,1.00,1.00,0.98,0.97,0.94,0.91,0.89,
               0.84,0.77,0.74,0.65,0.61,0.52,0.43,0.40,0.27,0.23,0.17,0.12,0.075,0.02,0];
  var TSTEP = TAIL/(TAPER.length-1);
  function taper(u){                        /* u = laps behind the head */
    if(u < 0 || u >= TAIL) return 0;
    var f = u/TSTEP, i = Math.floor(f);
    return TAPER[i] + (TAPER[i+1]-TAPER[i])*(f-i);
  }

  /* ---------- sizing ---------- */
  function resize(){
    var st = document.getElementById('stage');
    S = st.clientWidth || 1;
    dpr = Math.min(window.devicePixelRatio || 1, 2.5);
    cv.width = gl.width = co.width = Math.round(S*dpr);
    cv.height = gl.height = co.height = Math.round(S*dpr);
    k = S*dpr/REF;
    fitText();
    render(now);
  }

  /* ---------- text: fit cap-height and total width to the recording ---------- */
  var glyphs = [], fontPx = 169, tracking = 0, textX = 0;
  function fitText(){
    var word = 'Uploading', n = word.length, probe = 200;
    ctx.setTransform(1,0,0,1,0,0);
    ctx.font = FONT.replace('100px', probe+'px');
    var cap = ctx.measureText('U').actualBoundingBoxAscent || probe*0.7;
    fontPx = probe * (TXT_CAP*k) / cap;                 /* cap height matches the source */
    ctx.font = FONT.replace('100px', fontPx+'px');
    glyphs = [];
    var advSum = 0, m;
    for(var i=0;i<n;i++){
      m = ctx.measureText(word[i]);
      glyphs.push({ch:word[i], w:m.width});
      if(i < n-1) advSum += m.width;
    }
    /* the source was measured as ink extents, so lay out to ink, not to advances */
    var lead = ctx.measureText(word[0]).actualBoundingBoxLeft;
    var trail = ctx.measureText(word[n-1]).actualBoundingBoxRight;
    tracking = (TXT_W*k - trail - lead - advSum) / (n-1);
    textX = (CX + 4)*k - TXT_W*k/2 + lead;
  }

  /* ---------- painting ---------- */
  /* the comet is painted opaque into its own layer, then added over the scene, so
     overlapping segments never double-blend */
  function paintComet(c, head, col, hot, width){
    c.setTransform(1,0,0,1,0,0);
    c.clearRect(0,0,c.canvas.width,c.canvas.height);
    c.lineCap = 'round';
    c.lineWidth = width*k;
    var step = 6;                                   /* ref px per segment */
    var n = Math.ceil(TAIL*PERIM/step);
    for(var i=n;i>=1;i--){
      var s1 = head - i*step, s0 = head - (i-1)*step;
      var a = taper((i*step)/PERIM);
      if(a <= 0.002) continue;
      var f = Math.min(a, 1.30), x = Math.max(0, f-1);
      var r = Math.round(Math.min(255, col[0]*f + hot[0]*x));
      var g = Math.round(Math.min(255, col[1]*f + hot[1]*x));
      var b = Math.round(Math.min(255, col[2]*f + hot[2]*x));
      var p1 = ptAt(s1), mid = ptAt((s1+s0)/2), p0 = ptAt(s0);
      c.strokeStyle = 'rgb('+r+','+g+','+b+')';
      c.beginPath();
      c.moveTo(p1[0]*k, p1[1]*k);
      c.lineTo(mid[0]*k, mid[1]*k);
      c.lineTo(p0[0]*k, p0[1]*k);
      c.stroke();
    }
  }

  function plate(c){
    var x = CX - PW/2, y = CY - PH/2;
    var grd = c.createLinearGradient(0, y*k, 0, (y+PH)*k);
    grd.addColorStop(0, '#2e3242');
    grd.addColorStop(0.55, '#2b2f3c');
    grd.addColorStop(1, '#272c36');
    rrPath(c, CX*k, CY*k, PW*k, PH*k, PR*k);
    c.fillStyle = grd;
    c.fill();

    /* neumorphic edges: a hairline of white light just inside the top, a cool
       bounce just inside the bottom */
    c.lineWidth = 5*k;
    var hg = c.createLinearGradient(0, y*k, 0, (y+PH)*k);
    hg.addColorStop(0,    'rgba(226,233,255,0.125)');
    hg.addColorStop(0.10, 'rgba(226,233,255,0)');
    hg.addColorStop(0.90, 'rgba(80,100,255,0)');
    hg.addColorStop(1,    'rgba(80,100,255,0.22)');
    rrPath(c, CX*k, CY*k, (PW-13)*k, (PH-13)*k, (PR-6.5)*k);
    c.strokeStyle = hg;
    c.stroke();
  }

  function label(c, ph){
    /* shimmer: a soft band ping-pongs across the word, twice per lap */
    var q = ph - SHIM_OFF; q -= Math.floor(q);
    var u = q < 0.5 ? q/0.5 : (1-q)/0.5;
    var x0 = textX, w = TXT_W*k;
    var bc = x0 + w*(-0.2375 + 1.475*u);   /* sweeps clear of both ends before turning */
    var bw = w*0.22;
    var g = c.createLinearGradient(bc-bw, 0, bc+bw, 0);
    g.addColorStop(0,    'rgb(83,92,135)');
    g.addColorStop(0.30, 'rgb(97,106,150)');
    g.addColorStop(0.5,  'rgb(133,141,189)');
    g.addColorStop(0.70, 'rgb(97,106,150)');
    g.addColorStop(1,    'rgb(83,92,135)');
    c.fillStyle = g;
    c.strokeStyle = g;
    c.font = FONT.replace('100px', fontPx+'px');
    c.textBaseline = 'alphabetic';
    var x = textX;
    for(var i=0;i<glyphs.length;i++){
      if(glyphs[i].ch === 'g') doubleStoreyG(c);
      else{
        /* the source face sits between Light and Regular, so nudge the stems out */
        c.fillText(glyphs[i].ch, x, TXT_BASE*k);
        c.lineWidth = 1.9*k;
        c.strokeText(glyphs[i].ch, x, TXT_BASE*k);
      }
      x += glyphs[i].w + tracking;
    }
  }

  /* the source sets a double-storey g, which no system face here carries, so it is
     drawn as a monoline: upper bowl, ear, link, lower loop */
  function doubleStoreyG(c){
    c.save();
    c.lineWidth = 11.5*k;
    c.lineCap = 'round';
    c.beginPath();
    c.moveTo(1327*k, 1050*k); c.lineTo(1319*k, 1084*k);              /* link down the left */
    c.stroke();
    c.beginPath();
    c.ellipse(1351.5*k, 1035*k, 30*k, 21*k, 0, 0, Math.PI*2);        /* bowl */
    c.stroke();
    c.beginPath();
    c.ellipse(1353*k, 1100*k, 35*k, 16*k, 0, 0, Math.PI*2);          /* descending loop */
    c.stroke();
    c.beginPath();
    c.moveTo(1352*k, 1011*k);                                        /* ear */
    c.quadraticCurveTo(1382*k, 1003*k, 1390*k, 1017*k);
    c.stroke();
    c.restore();
  }

  function render(t){
    if(!S) return;
    var ph = (t/DUR) % 1; if(ph < 0) ph += 1;
    var head = ph*PERIM;

    ctx.setTransform(1,0,0,1,0,0);
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.filter = 'none';
    ctx.fillStyle = '#1d1d1d';
    ctx.fillRect(0,0,cv.width,cv.height);

    /* the faint track the light runs on */
    rrPath(ctx, CX*k, CY*k, TW*k, TH*k, TR*k);
    ctx.lineWidth = TRACK_W*k;
    ctx.strokeStyle = 'rgba(120,140,255,0.048)';
    ctx.stroke();

    /* the travelling light: a blue bloom under a pale core */
    paintComet(gx,  head, [95,125,242], [50,70,120], GLOW_W);
    paintComet(cox, head, [82,90,110],  [70,60,40],  CORE_W);
    ctx.globalCompositeOperation = 'lighter';
    if(canFilter){
      ctx.filter = 'blur('+(28*k)+'px)'; ctx.globalAlpha = 0.62; ctx.drawImage(gl,0,0);
      ctx.filter = 'blur('+(8*k)+'px)';  ctx.globalAlpha = 0.45; ctx.drawImage(gl,0,0);
      ctx.filter = 'blur('+(1.8*k)+'px)';ctx.globalAlpha = 1;    ctx.drawImage(co,0,0);
      ctx.filter = 'none';
    }else{
      ctx.shadowColor = 'rgba(88,122,255,0.9)';
      ctx.shadowBlur = 26*k; ctx.globalAlpha = 0.7; ctx.drawImage(gl,0,0);
      ctx.shadowBlur = 8*k;  ctx.globalAlpha = 0.8; ctx.drawImage(gl,0,0);
      ctx.shadowBlur = 0;    ctx.globalAlpha = 1;   ctx.drawImage(co,0,0);
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';

    /* the button sits over the light, so the inner half of the glow is hidden */
    plate(ctx);
    label(ctx, ph);
  }

  /* ---------- clock ---------- */
  var now = 0, playing = true, last = null;
  function frame(ts){
    if(playing){
      if(last != null) now = (now + (ts-last)/1000) % DUR;
      last = ts;
      render(now);
    }else last = ts;
    requestAnimationFrame(frame);
  }

  window.__DUR = DUR;
  window.__seek = function(t){ playing = false; now = ((t % DUR) + DUR) % DUR; render(now); };
  window.__play = function(){ playing = true; last = null; };
  window.__pause = function(){ playing = false; };
  window.__time = function(){ return now; };

  window.addEventListener('resize', resize);
  if(window.ResizeObserver) new ResizeObserver(resize).observe(document.getElementById('stage'));
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(function(){ fitText(); render(now); });
  resize();
  requestAnimationFrame(frame);
})();
<\/script>
</body>
</html>
`;var wn=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Performance Diagnostics</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <style>
        :root {
            color-scheme: dark;

            /* procedural noise fields, generated inline so the document stays self-contained.
               fractal noise for print grain, anisotropic noise for brushed metal,
               and a low-frequency field for smudge and dust on the cover glass. */
            --tex-grain: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23g)'/%3E%3C/svg%3E");
            --tex-metal: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='m'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.008 1.5' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23m)'/%3E%3C/svg%3E");
            --tex-dust: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='d'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.014' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='linear' slope='0.6'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23d)'/%3E%3C/svg%3E");
        }

        /* every dimension inside a gauge is expressed against the card width,
           so one instrument reads identically at 300px and at 900px */
        .gauge-card { container-type: inline-size; }

        /* ---------- mounting plate ---------- */
        .plate {
            position: absolute;
            inset: 0;
            border-radius: 11.5cqw;
            background: radial-gradient(120% 100% at 30% 0%, #121215 0%, #09090A 55%, #060607 100%);
            border: 1px solid rgba(255,255,255,.03);
            box-shadow:
                0px 1px 1px -0.5px rgba(0,0,0,.5),
                0px 3px 3px -1.5px rgba(0,0,0,.4),
                0px 6px 6px -3px rgba(0,0,0,.35),
                0px 12px 12px -6px rgba(0,0,0,.3),
                0px 24px 24px -12px rgba(0,0,0,.25);
            transition: border-color .5s;
        }
        /* fine anodised tooth so the plate is not a flat fill */
        .plate::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: inherit;
            background-image: var(--tex-grain), var(--tex-dust);
            background-size: 34cqw 34cqw, 170% 170%;
            background-blend-mode: soft-light, normal;
            mix-blend-mode: screen;
            opacity: .07;
            pointer-events: none;
        }
        .gauge-card:hover .plate { border-color: rgba(255,255,255,.08); }

        /* ---------- instrument shell ---------- */
        .shell {
            position: absolute;
            inset: 13cqw;
            border-radius: 50%;
            padding: 2.2%;
            background:
                var(--tex-metal),
                conic-gradient(from 210deg, #3a3a3d 0deg, #17171a 60deg, #2c2c30 130deg, #0d0d0f 200deg, #313135 280deg, #131316 340deg, #3a3a3d 360deg);
            background-size: 100% 100%, auto;
            background-blend-mode: overlay, normal;
            box-shadow:
                0 18px 40px -12px rgba(0,0,0,.9),
                0 2px 0 rgba(255,255,255,.05),
                inset 0 2px 6px rgba(255,255,255,.10),
                inset 0 -6px 14px rgba(0,0,0,.65);
        }
        .bezel {
            position: relative;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            padding: 3.4%;
            background: radial-gradient(closest-side, #0b0b0d 76%, #212125 92%, #08080a 100%);
            box-shadow: inset 0 1px 1px rgba(255,255,255,.10), inset 0 -3px 8px rgba(0,0,0,.8);
        }
        /* knurled grip ring milled into the bezel edge */
        .bezel::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 50%;
            background: repeating-conic-gradient(from 0deg, rgba(255,255,255,.16) 0deg 0.5deg, rgba(0,0,0,0) 0.5deg 2.2deg);
            -webkit-mask-image: radial-gradient(closest-side, transparent 92%, #000 93.5%, #000 99%, transparent 100%);
            mask-image: radial-gradient(closest-side, transparent 92%, #000 93.5%, #000 99%, transparent 100%);
            opacity: .45;
            pointer-events: none;
        }
        /* brushed tooling marks across the bezel ring */
        .bezel::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 50%;
            background-image: var(--tex-metal);
            background-size: 100% 100%;
            -webkit-mask-image: radial-gradient(closest-side, transparent 95%, #000 96.5%, #000 100%);
            mask-image: radial-gradient(closest-side, transparent 95%, #000 96.5%, #000 100%);
            mix-blend-mode: overlay;
            opacity: .55;
            pointer-events: none;
        }
        /* a turned stainless pan head sunk into a counterbored well */
        .screw {
            position: absolute;
            width: 5cqw;
            aspect-ratio: 1;
            border-radius: 50%;
            background:
                radial-gradient(circle at 34% 26%, rgba(255,255,255,.55) 0%, rgba(255,255,255,.08) 26%, rgba(255,255,255,0) 46%),
                radial-gradient(closest-side, rgba(0,0,0,0) 58%, rgba(0,0,0,.45) 84%, rgba(0,0,0,.7) 100%),
                conic-gradient(from calc(var(--a, 0deg) - 52deg),
                    #9a9ba1 0deg, #43444a 34deg, #c3c4ca 74deg, #4d4e55 118deg,
                    #a7a8ae 168deg, #37383d 214deg, #b2b3b9 262deg, #45464c 312deg, #9a9ba1 360deg);
            box-shadow:
                0 0 0 .16cqw rgba(0,0,0,.6),
                0 .12cqw 0 .16cqw rgba(255,255,255,.05),
                0 .3cqw .6cqw rgba(0,0,0,.75),
                inset 0 -.16cqw .32cqw rgba(0,0,0,.6),
                inset 0 .12cqw .24cqw rgba(255,255,255,.4);
        }
        /* cross drive: dark recess with a lit lower lip so it reads as cut, not printed */
        .screw::before {
            content: "";
            position: absolute;
            inset: 22%;
            transform: rotate(var(--a, 0deg));
            background:
                linear-gradient(#050506, #1e1e23) center / 100% 20% no-repeat,
                linear-gradient(#050506, #1e1e23) center / 20% 100% no-repeat,
                linear-gradient(rgba(255,255,255,.62), rgba(255,255,255,.62)) center calc(50% + .11cqw) / 100% 20% no-repeat,
                linear-gradient(rgba(255,255,255,.62), rgba(255,255,255,.62)) calc(50% + .11cqw) center / 20% 100% no-repeat;
        }
        /* turning marks on the head */
        .screw::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 50%;
            background-image: var(--tex-metal);
            background-size: 100% 100%;
            mix-blend-mode: overlay;
            opacity: .45;
        }

        /* ---------- dial face ---------- */
        .face {
            container-type: inline-size;
            position: relative;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            overflow: hidden;
            box-shadow: inset 0 5px 16px rgba(0,0,0,.5), inset 0 -2px 9px rgba(0,0,0,.4);
        }
        .layer { position: absolute; inset: 0; pointer-events: none; }

        /* a full-bleed square rotated about its centre carries its child around the dial */
        .spoke { position: absolute; inset: 0; }

        .tick {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 1px;
        }
        .tick.minor { top: 9%; width: 0.9%; height: 2.8%; opacity: .5; }
        .tick.major { top: 8%; width: 1.8%; height: 6.4%; }

        .numeral {
            position: absolute;
            left: 50%;
            top: 17.5%;
            line-height: 1;
            white-space: nowrap;
            font-variant-numeric: tabular-nums;
        }

        /* ---------- needle ---------- */
        .needle {
            position: absolute;
            inset: 0;
            transform: rotate(var(--angle, 0deg));
            transition: transform var(--needle-duration, 1200ms) var(--needle-ease, cubic-bezier(.2,.9,.25,1));
            will-change: transform;
        }
        .flutter { position: absolute; inset: 0; }
        .blade {
            position: absolute;
            left: 50%;
            top: 11.5%;
            bottom: 50%;
            width: 3.2%;
            transform: translateX(-50%);
            clip-path: polygon(41% 0, 59% 0, 100% 97%, 100% 100%, 0 100%, 0 97%);
            filter: drop-shadow(0 3px 6px rgba(0,0,0,.55));
        }
        .blade::after {
            content: "";
            position: absolute;
            inset: 7% 40% 20% 40%;
            border-radius: 999px;
            background: linear-gradient(rgba(255,255,255,.34), rgba(255,255,255,0));
        }
        .tail {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 2%;
            height: 9.5%;
            transform: translateX(-50%);
            border-radius: 0 0 999px 999px;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,.5));
        }
        .hub {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            background: radial-gradient(circle at 34% 30%, #5c5c63, #1b1b1f 60%, #050506);
            box-shadow: 0 3px 8px rgba(0,0,0,.75), inset 0 1px 2px rgba(255,255,255,.35);
            display: grid;
            place-items: center;
        }

        /* ---------- glass ---------- */
        .glass {
            position: absolute;
            inset: 0;
            border-radius: 50%;
            background:
                radial-gradient(120% 78% at 22% 6%, rgba(255,255,255,.20) 0%, rgba(255,255,255,.05) 32%, rgba(255,255,255,0) 56%),
                linear-gradient(148deg, rgba(255,255,255,.12) 0%, rgba(255,255,255,0) 40%);
            mix-blend-mode: screen;
            pointer-events: none;
        }
        .glass::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 50%;
            box-shadow: inset 0 0 20px rgba(0,0,0,.5), inset 0 1px 1px rgba(255,255,255,.2);
        }
        /* smudge and settled dust caught by the raking highlight */
        .glass-dust {
            position: absolute;
            inset: 0;
            border-radius: 50%;
            background-image: var(--tex-dust), var(--tex-grain);
            background-size: 130% 130%, 30.03cqw 30.03cqw;
            mix-blend-mode: soft-light;
            opacity: .3;
            pointer-events: none;
        }

        /* printed-dial tooth, held under the ticks and numerals */
        .face-grain {
            position: absolute;
            inset: 0;
            background-image: var(--tex-grain);
            background-size: 25.4cqw 25.4cqw;
            mix-blend-mode: overlay;
            opacity: .13;
            pointer-events: none;
        }

        /* ---------- centre stack typography ---------- */
        .stack { position: absolute; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; }
        .cap { font-size: 2.89cqw; letter-spacing: .42em; text-indent: .42em; line-height: 1; }
        .cap-sm { font-size: 2.43cqw; letter-spacing: .3em; text-indent: .3em; line-height: 1; }
        .readout { font-size: 8.55cqw; font-weight: 300; line-height: 1; font-variant-numeric: tabular-nums; }

        /* ---------- motion ---------- */
        @keyframes flutter { 0%, 100% { transform: rotate(-.4deg); } 50% { transform: rotate(.4deg); } }
        .flutter[data-live] { animation: flutter 2.6s ease-in-out infinite; }

        @keyframes pulse-soft { 0%, 100% { opacity: .35; } 50% { opacity: 1; } }
        .pulse { animation: pulse-soft 1.4s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
            .needle, [data-peak], [data-soc] { transition: none !important; }
            .flutter[data-live], .pulse { animation: none !important; }
            [data-anim] { transition: none !important; }
        }
    </style>
</head>
<body class="bg-black min-h-screen text-white font-sans flex flex-col items-center justify-center p-6 sm:p-12 selection:bg-[#E26226] selection:text-white">

    <!-- Header Section -->
    <div data-anim="true" class="max-w-4xl w-full mb-16 text-center" style="opacity: 0; transform: translateY(20px); filter: blur(4px); transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);">
        <h1 class="text-3xl sm:text-5xl font-extralight tracking-tight mb-4 text-white/90" id="hero-title">
            Performance Diagnostics
        </h1>
        <p class="text-white/40 text-sm sm:text-base max-w-xl mx-auto font-extralight" id="hero-subtitle">
            Advanced tracking interfaces engineered for extreme conditions. Analyze vital statistics instantly with unmatched precision.
        </p>
    </div>

    <!-- Dashboard Container -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 w-full max-w-5xl justify-items-center">

        <!-- Card 1: Tachometer -->
        <div id="gauge-tachometer" data-anim="true" data-gauge="tachometer" class="gauge-card w-full max-w-[340px] aspect-square relative group" style="opacity: 0; transform: translateY(20px); filter: blur(4px); transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); transition-delay: 100ms;">
            <div class="plate">
                <span class="screw" style="--a:26deg;top:6.4cqw;left:6.4cqw"></span>
                <span class="screw" style="--a:-15deg;top:6.4cqw;right:6.4cqw"></span>
                <span class="screw" style="--a:42deg;bottom:6.4cqw;left:6.4cqw"></span>
                <span class="screw" style="--a:7deg;bottom:6.4cqw;right:6.4cqw"></span>
                <div class="shell">
                    <div class="bezel">
                        <div class="face" style="background: radial-gradient(closest-side at 50% 32%, #F58135 0%, #E76A2A 44%, #D0541B 74%, #B94512 100%);">
                            <!-- machined sunburst -->
                            <div class="layer" style="background: repeating-conic-gradient(from 0deg, rgba(255,255,255,.055) 0deg 1.2deg, rgba(0,0,0,.05) 1.2deg 2.4deg); -webkit-mask-image: radial-gradient(closest-side, #000 0%, #000 58%, transparent 66%); mask-image: radial-gradient(closest-side, #000 0%, #000 58%, transparent 66%); opacity:.6;"></div>
                            <!-- scale band with redline -->
                            <div class="layer" data-zone-band style="-webkit-mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%); mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%);"></div>

                            <div class="layer" data-ticks></div>
                            <div class="layer" data-numerals></div>

                            <div class="stack" style="top:31%">
                                <span class="cap-sm text-black/55 font-medium">r/min</span>
                                <span class="cap-sm text-black/40" style="margin-top:0.81cqw">&times;1000</span>
                            </div>

                            <!-- oil-temperature sub-dial -->
                            <div class="absolute left-1/2 top-[69%] -translate-x-1/2 -translate-y-1/2 w-[24%] aspect-square rounded-full overflow-hidden border border-black/45 shadow-[inset_0_3px_8px_rgba(0,0,0,.55)]" style="background: radial-gradient(closest-side at 50% 30%, #8C3A11, #6E2A08);">
                                <div class="layer" data-subticks></div>
                                <span class="absolute left-1/2 bottom-[15%] -translate-x-1/2 text-white/55 whitespace-nowrap" style="font-size:1.96cqw;letter-spacing:.2em;text-indent:.2em">TEMP &deg;C</span>
                                <div class="needle" data-subneedle style="--needle-duration:1700ms">
                                    <i class="blade" style="top:19%;width:5.5%;background:linear-gradient(#FCA5A5,#B91C1C)"></i>
                                </div>
                                <div class="hub" style="width:15%"></div>
                            </div>

                            <div class="needle" data-needle style="--needle-ease:cubic-bezier(.16,1.28,.4,1)">
                                <div class="flutter">
                                    <i class="blade" style="background:linear-gradient(#F87171,#DC2626 50%,#991B1B)"></i>
                                    <i class="tail" style="background:linear-gradient(#7F1D1D,#450A0A)"></i>
                                </div>
                            </div>
                            <div class="hub" style="width:9%">
                                <span class="block w-[40%] aspect-square rounded-full bg-[#DC2626] shadow-[0_0_6px_rgba(220,38,38,.85)]"></span>
                            </div>
                            <div class="face-grain"></div>
                            <div class="glass"></div>
                            <div class="glass-dust"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Card 2: Speedometer -->
        <div id="gauge-speedometer" data-anim="true" data-gauge="speedometer" class="gauge-card w-full max-w-[340px] aspect-square relative group" style="opacity: 0; transform: translateY(20px); filter: blur(4px); transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); transition-delay: 300ms;">
            <div class="plate">
                <span class="screw" style="--a:-33deg;top:6.4cqw;left:6.4cqw"></span>
                <span class="screw" style="--a:18deg;top:6.4cqw;right:6.4cqw"></span>
                <span class="screw" style="--a:5deg;bottom:6.4cqw;left:6.4cqw"></span>
                <span class="screw" style="--a:-48deg;bottom:6.4cqw;right:6.4cqw"></span>
                <div class="shell">
                    <div class="bezel">
                        <div class="face" style="background: radial-gradient(closest-side at 50% 28%, #1d1d21 0%, #141416 50%, #0a0a0b 100%);">
                            <!-- filled travel: a soft inner wash plus a bright rim arc -->
                            <div class="layer" data-progress-wash style="-webkit-mask-image: radial-gradient(closest-side, transparent 66%, #000 80%, #000 86%, transparent 89%); mask-image: radial-gradient(closest-side, transparent 66%, #000 80%, #000 86%, transparent 89%); opacity:.11;"></div>
                            <div class="layer" data-zone-band style="-webkit-mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%); mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%);"></div>
                            <div class="layer" data-progress-arc style="-webkit-mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%); mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%);"></div>

                            <div class="layer" data-ticks></div>
                            <div class="layer" data-numerals></div>

                            <!-- peak-hold marker -->
                            <div class="spoke" data-peak style="transition: transform 900ms cubic-bezier(.2,.9,.25,1)">
                                <i class="absolute left-1/2 top-[7.4%] -translate-x-1/2 w-[1.3%] h-[4%] bg-white/85 rounded-[1px] shadow-[0_0_7px_rgba(255,255,255,.7)]"></i>
                            </div>

                            <div class="stack" style="top:29%">
                                <iconify-icon icon="solar:shield-star-linear" class="text-white/25" style="font-size:6.24cqw"></iconify-icon>
                                <span class="cap-sm text-white/30" style="margin-top:1.39cqw">km/h</span>
                            </div>

                            <div class="stack" style="top:58%">
                                <span data-readout class="readout text-[#E26226]" style="text-shadow:0 0 12px rgba(226,98,38,.45)">0</span>
                            </div>

                            <!-- odometer -->
                            <div class="stack items-center" style="top:77%">
                                <div class="bg-black/85 border border-white/10 rounded shadow-[inset_0_1px_3px_rgba(0,0,0,.9)] flex flex-col items-center" style="padding:0.92cqw 1.85cqw">
                                    <div class="text-[#E26226] font-mono flex items-center" style="font-size:3.93cqw;letter-spacing:.14em;gap:0.58cqw">
                                        <span>3</span><span>1</span><span>5</span><span>9</span><span class="bg-[#E26226] text-black rounded-[2px]" style="padding:0 0.81cqw">5</span>
                                    </div>
                                    <span class="text-white/30 uppercase" style="font-size:2.08cqw;letter-spacing:.28em;margin-top:0.81cqw">km total</span>
                                </div>
                            </div>

                            <div class="needle" data-needle style="--needle-ease:cubic-bezier(.16,1.28,.4,1)">
                                <div class="flutter">
                                    <i class="blade" style="background:linear-gradient(#6EE7A0,#22C55E 50%,#15803D); filter: drop-shadow(0 0 7px rgba(74,222,128,.6))"></i>
                                    <i class="tail" style="background:linear-gradient(#166534,#052E16)"></i>
                                </div>
                            </div>
                            <div class="hub" style="width:8.5%">
                                <span class="block w-[38%] aspect-square rounded-full bg-[#4ADE80]/85 shadow-[0_0_6px_rgba(74,222,128,.75)]"></span>
                            </div>
                            <div class="face-grain"></div>
                            <div class="glass"></div>
                            <div class="glass-dust"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Card 3: Turbo Boost -->
        <div id="gauge-boost" data-anim="true" data-gauge="boost" class="gauge-card w-full max-w-[340px] aspect-square relative group" style="opacity: 0; transform: translateY(20px); filter: blur(4px); transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); transition-delay: 500ms;">
            <div class="plate">
                <span class="screw" style="--a:12deg;top:6.4cqw;left:6.4cqw"></span>
                <span class="screw" style="--a:-40deg;top:6.4cqw;right:6.4cqw"></span>
                <span class="screw" style="--a:29deg;bottom:6.4cqw;left:6.4cqw"></span>
                <span class="screw" style="--a:-6deg;bottom:6.4cqw;right:6.4cqw"></span>
                <div class="shell">
                    <div class="bezel">
                        <div class="face" style="background: radial-gradient(closest-side at 50% 26%, #17324F 0%, #0F172A 48%, #030816 100%);">
                            <div class="layer" style="background: repeating-conic-gradient(from 0deg, rgba(56,189,248,.06) 0deg 1.4deg, rgba(0,0,0,0) 1.4deg 2.8deg); -webkit-mask-image: radial-gradient(closest-side, #000 0%, #000 56%, transparent 64%); mask-image: radial-gradient(closest-side, #000 0%, #000 56%, transparent 64%);"></div>
                            <div class="layer" data-zone-band style="-webkit-mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%); mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%);"></div>

                            <div class="layer" data-ticks></div>
                            <div class="layer" data-numerals></div>

                            <div class="stack" style="top:30%">
                                <iconify-icon icon="solar:wind-linear" class="text-cyan-400/80" style="font-size:6.47cqw"></iconify-icon>
                                <span class="cap text-white/45" style="margin-top:1.62cqw">BOOST</span>
                            </div>

                            <div class="stack" style="top:57%">
                                <span data-readout class="readout text-cyan-300" style="text-shadow:0 0 12px rgba(34,211,238,.5)">0.00</span>
                                <span class="cap text-cyan-500/70" style="margin-top:1.85cqw">BAR</span>
                            </div>

                            <div class="stack" style="top:79%">
                                <div class="flex items-center text-white/35" style="gap:1.62cqw;font-size:2.19cqw;letter-spacing:.26em">
                                    <span class="rounded-full bg-red-500 pulse" style="width:1.85cqw;height:1.85cqw" data-overboost hidden></span>
                                    <span>WASTEGATE 1.20</span>
                                </div>
                            </div>

                            <div class="needle" data-needle style="--needle-ease:cubic-bezier(.16,1.32,.4,1)">
                                <div class="flutter">
                                    <i class="blade" style="background:linear-gradient(#4DD9F0,#0EB8D7 50%,#0E7490); filter: drop-shadow(0 0 8px rgba(34,211,238,.65))"></i>
                                    <i class="tail" style="background:linear-gradient(#155E75,#083344)"></i>
                                </div>
                            </div>
                            <div class="hub" style="width:9%">
                                <span class="block w-[38%] aspect-square rounded-full bg-cyan-400/85 shadow-[0_0_6px_rgba(34,211,238,.85)]"></span>
                            </div>
                            <div class="face-grain"></div>
                            <div class="glass"></div>
                            <div class="glass-dust"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Card 4: EV Power / Charge -->
        <div id="gauge-power" data-anim="true" data-gauge="power" class="gauge-card w-full max-w-[340px] aspect-square relative group" style="opacity: 0; transform: translateY(20px); filter: blur(4px); transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); transition-delay: 700ms;">
            <div class="plate">
                <span class="screw" style="--a:47deg;top:6.4cqw;left:6.4cqw"></span>
                <span class="screw" style="--a:3deg;top:6.4cqw;right:6.4cqw"></span>
                <span class="screw" style="--a:-21deg;bottom:6.4cqw;left:6.4cqw"></span>
                <span class="screw" style="--a:35deg;bottom:6.4cqw;right:6.4cqw"></span>
                <div class="shell">
                    <div class="bezel">
                        <div class="face" style="background: radial-gradient(closest-side at 50% 28%, #191624 0%, #111016 50%, #08070B 100%);">
                            <div class="layer" data-zone-band style="-webkit-mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%); mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%);"></div>
                            <div class="layer" data-progress-arc style="-webkit-mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%); mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%);"></div>

                            <div class="layer" data-ticks></div>
                            <div class="layer" data-numerals></div>

                            <div class="stack" style="top:29%">
                                <iconify-icon icon="solar:bolt-linear" class="text-purple-400/90" style="font-size:6.47cqw"></iconify-icon>
                                <span class="cap text-white/45" style="margin-top:1.62cqw">POWER</span>
                            </div>

                            <div class="stack" style="top:57%">
                                <span data-readout class="readout text-purple-200" style="text-shadow:0 0 12px rgba(192,132,252,.45)">0</span>
                                <span class="cap text-purple-400/70" style="margin-top:1.85cqw">KW</span>
                            </div>

                            <!-- battery state of charge -->
                            <div class="stack" style="top:76%">
                                <div class="rounded-full bg-white/10 overflow-hidden border border-white/10" style="width:23.1cqw;height:1.96cqw">
                                    <div data-soc class="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300 transition-[width] duration-[1400ms] ease-out" style="width:0%"></div>
                                </div>
                                <span class="text-white/35" style="font-size:2.19cqw;letter-spacing:.28em;margin-top:1.39cqw">SOC 72%</span>
                            </div>

                            <div class="needle" data-needle style="--needle-ease:cubic-bezier(.16,1.28,.4,1)">
                                <div class="flutter">
                                    <i class="blade" style="background:linear-gradient(#C88CFA,#9333EA 50%,#6B21A8); filter: drop-shadow(0 0 8px rgba(168,85,247,.6))"></i>
                                    <i class="tail" style="background:linear-gradient(#581C87,#2E1065)"></i>
                                </div>
                            </div>
                            <div class="hub" style="width:9%">
                                <span class="block w-[38%] aspect-square rounded-full bg-purple-400/85 shadow-[0_0_6px_rgba(168,85,247,.85)]"></span>
                            </div>
                            <div class="face-grain"></div>
                            <div class="glass"></div>
                            <div class="glass-dust"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- Script for dial construction, reveal, and instrument motion -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            /* ---------- dial specifications ---------- */
            const SPECS = {
                tachometer: {
                    start: -135, sweep: 270, min: 0, max: 7,
                    majorStep: 1, minorPerMajor: 5,
                    numeral: (v) => String(v),
                    numeralStyle: 'font-size:7.39cqw;font-weight:300;color:rgba(0,0,0,.78)',
                    tickColor: (v) => (v >= 5.5 ? '#7F1D1D' : 'rgba(0,0,0,.7)'),
                    zones: [
                        { from: 0, to: 5.5, color: 'rgba(0,0,0,.22)' },
                        { from: 5.5, to: 7, color: 'rgba(185,28,28,.95)' },
                    ],
                    idle: 0, value: 5.2,
                    sub: { start: -110, sweep: 220, min: 40, max: 130, majorStep: 30, minorPerMajor: 3, value: 92 },
                },
                speedometer: {
                    start: -135, sweep: 270, min: 0, max: 160,
                    majorStep: 20, minorPerMajor: 4,
                    numeral: (v) => String(v),
                    numeralStyle: 'font-size:5.31cqw;font-weight:300;color:rgba(255,255,255,.72)',
                    tickColor: (v) => (v >= 140 ? 'rgba(248,113,113,.95)' : 'rgba(255,255,255,.6)'),
                    zones: [
                        { from: 0, to: 140, color: 'rgba(255,255,255,.09)' },
                        { from: 140, to: 160, color: 'rgba(220,38,38,.6)' },
                    ],
                    progress: '#E26226', wash: '#E26226',
                    idle: 0, value: 118, peak: 143,
                    readout: (v) => String(Math.round(v)),
                },
                boost: {
                    start: -135, sweep: 270, min: -1, max: 1.5,
                    majorStep: 0.5, minorPerMajor: 5,
                    numeral: (v) => v.toFixed(1),
                    numeralStyle: 'font-size:4.85cqw;font-weight:300;color:rgba(255,255,255,.7)',
                    tickColor: (v) => (v >= 1.2 ? 'rgba(248,113,113,.95)' : v < 0 ? 'rgba(148,163,184,.65)' : 'rgba(103,232,249,.85)'),
                    zones: [
                        { from: -1, to: 0, color: 'rgba(148,163,184,.55)' },
                        { from: 0, to: 1.2, color: 'rgba(34,211,238,.6)' },
                        { from: 1.2, to: 1.5, color: 'rgba(220,38,38,.9)' },
                    ],
                    idle: -0.85, value: 0.92,
                    readout: (v) => (v >= 0 ? '+' : '\u2212') + Math.abs(v).toFixed(2),
                },
                power: {
                    start: -135, sweep: 270, min: -30, max: 120,
                    majorStep: 30, minorPerMajor: 3,
                    numeral: (v) => (v === -30 ? 'CHG' : String(v)),
                    numeralStyle: 'font-size:4.85cqw;font-weight:300;color:rgba(255,255,255,.68)',
                    tickColor: (v) => (v < 0 ? 'rgba(52,211,153,.85)' : 'rgba(216,180,254,.75)'),
                    zones: [
                        { from: -30, to: 0, color: 'rgba(16,185,129,.7)' },
                        { from: 0, to: 120, color: 'rgba(168,85,247,.3)' },
                    ],
                    progress: '#C084FC', progressFrom: 0,
                    idle: -22, value: 78, soc: 72,
                    readout: (v) => String(Math.round(v)),
                },
            };

            /* ---------- polar helpers ---------- */
            const angleFor = (spec, value) => spec.start + ((value - spec.min) / (spec.max - spec.min)) * spec.sweep;

            const spoke = (angle) => {
                const wrap = document.createElement('div');
                wrap.className = 'spoke';
                wrap.style.transform = \`rotate(\${angle}deg)\`;
                return wrap;
            };

            const arcGradient = (spec, segments) => segments.map((segment) => {
                const from = angleFor(spec, segment.from);
                const span = ((segment.to - segment.from) / (spec.max - spec.min)) * spec.sweep;
                return \`conic-gradient(from \${from}deg, \${segment.color} 0deg, \${segment.color} \${span}deg, transparent \${span}deg)\`;
            }).join(', ');

            function buildTicks(host, spec, options) {
                if (!host) return;
                const settings = options || {};
                const step = spec.majorStep / spec.minorPerMajor;
                const count = Math.round((spec.max - spec.min) / step);
                for (let index = 0; index <= count; index += 1) {
                    const value = spec.min + index * step;
                    const isMajor = index % spec.minorPerMajor === 0;
                    const wrap = spoke(angleFor(spec, value));
                    const tick = document.createElement('i');
                    tick.className = \`tick \${isMajor ? 'major' : 'minor'}\`;
                    tick.style.background = (settings.color || spec.tickColor)(value);
                    if (settings.scale) {
                        tick.style.top = isMajor ? '9%' : '10.5%';
                        tick.style.height = isMajor ? '10%' : '5%';
                        tick.style.width = isMajor ? '3.6%' : '2.2%';
                    }
                    wrap.appendChild(tick);
                    host.appendChild(wrap);
                }
            }

            function buildNumerals(host, spec) {
                if (!host) return;
                const count = Math.round((spec.max - spec.min) / spec.majorStep);
                for (let index = 0; index <= count; index += 1) {
                    const value = Math.round((spec.min + index * spec.majorStep) * 1000) / 1000;
                    const angle = angleFor(spec, value);
                    const wrap = spoke(angle);
                    const numeral = document.createElement('span');
                    numeral.className = 'numeral';
                    numeral.setAttribute('style', spec.numeralStyle);
                    numeral.textContent = spec.numeral(value);
                    numeral.style.transform = \`translateX(-50%) rotate(\${-angle}deg)\`;
                    wrap.appendChild(numeral);
                    host.appendChild(wrap);
                }
            }

            /* ---------- build every dial ---------- */
            document.querySelectorAll('[data-gauge]').forEach((card) => {
                const spec = SPECS[card.dataset.gauge];
                if (!spec) return;

                buildTicks(card.querySelector('[data-ticks]'), spec);
                buildNumerals(card.querySelector('[data-numerals]'), spec);

                const band = card.querySelector('[data-zone-band]');
                if (band && spec.zones) band.style.background = arcGradient(spec, spec.zones);

                if (spec.sub) {
                    buildTicks(card.querySelector('[data-subticks]'), spec.sub, {
                        scale: true,
                        color: (value) => (value >= 115 ? 'rgba(248,113,113,.95)' : 'rgba(255,255,255,.55)'),
                    });
                    const subNeedle = card.querySelector('[data-subneedle]');
                    if (subNeedle) subNeedle.style.setProperty('--angle', \`\${angleFor(spec.sub, spec.sub.min)}deg\`);
                }

                const needle = card.querySelector('[data-needle]');
                if (needle) needle.style.setProperty('--angle', \`\${angleFor(spec, spec.idle)}deg\`);
            });

            /* ---------- instrument sequence ---------- */
            function setArc(card, selector, spec, value, color) {
                const arc = card.querySelector(selector);
                if (!arc || !color) return;
                const from = spec.progressFrom != null ? spec.progressFrom : spec.min;
                arc.style.background = arcGradient(spec, [{ from, to: Math.max(from, value), color }]);
            }

            function countTo(element, spec, from, to, duration) {
                if (!element || !spec.readout) return;
                if (reduceMotion || duration === 0) { element.textContent = spec.readout(to); return; }
                const started = performance.now();
                const step = (now) => {
                    const progress = Math.min(1, (now - started) / duration);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    element.textContent = spec.readout(from + (to - from) * eased);
                    if (progress < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
            }

            function sweepTo(card, spec, value, duration) {
                const needle = card.querySelector('[data-needle]');
                if (needle) {
                    needle.style.setProperty('--needle-duration', \`\${duration}ms\`);
                    needle.style.setProperty('--angle', \`\${angleFor(spec, value)}deg\`);
                }
                setArc(card, '[data-progress-arc]', spec, value, spec.progress);
                setArc(card, '[data-progress-wash]', spec, value, spec.wash);

                const overboost = card.querySelector('[data-overboost]');
                if (overboost) overboost.hidden = value < 1.2;
            }

            function runInstrument(card) {
                const spec = SPECS[card.dataset.gauge];
                if (!spec) return;
                const readout = card.querySelector('[data-readout]');
                const flutter = card.querySelector('[data-needle] .flutter');
                const peak = card.querySelector('[data-peak]');
                const soc = card.querySelector('[data-soc]');
                const subNeedle = card.querySelector('[data-subneedle]');
                const peakTo = (value) => { if (peak && spec.peak != null) peak.style.transform = \`rotate(\${angleFor(spec, value)}deg)\`; };

                if (soc && spec.soc != null) soc.style.width = \`\${spec.soc}%\`;
                if (subNeedle && spec.sub) subNeedle.style.setProperty('--angle', \`\${angleFor(spec.sub, spec.sub.value)}deg\`);

                if (reduceMotion) {
                    sweepTo(card, spec, spec.value, 0);
                    countTo(readout, spec, spec.value, spec.value, 0);
                    peakTo(spec.peak);
                    return;
                }

                const cycle = () => {
                    if (flutter) flutter.removeAttribute('data-live');

                    /* instrument self-test: full-scale sweep, fall back to rest, settle on the live reading */
                    sweepTo(card, spec, spec.max, 1100);
                    countTo(readout, spec, spec.idle, spec.max, 1100);
                    peakTo(spec.max);

                    setTimeout(() => {
                        sweepTo(card, spec, spec.idle, 900);
                        countTo(readout, spec, spec.max, spec.idle, 900);
                        peakTo(spec.idle);
                    }, 1350);

                    setTimeout(() => {
                        sweepTo(card, spec, spec.value, 1200);
                        countTo(readout, spec, spec.idle, spec.value, 1200);
                        peakTo(spec.peak);
                    }, 2500);

                    setTimeout(() => { if (flutter) flutter.setAttribute('data-live', ''); }, 3900);
                };

                cycle();
                setInterval(cycle, 8000);
            }

            /* ---------- heading word reveal ---------- */
            const wrapWords = (elementId) => {
                const el = document.getElementById(elementId);
                if (!el) return;
                const text = el.innerText.trim().replace(/\\s+/g, ' ');
                el.innerHTML = '';
                const words = text.split(' ');
                words.forEach((word, index) => {
                    const wordWrap = document.createElement('span');
                    wordWrap.style.display = 'inline-block';
                    wordWrap.style.overflow = 'hidden';
                    wordWrap.style.paddingBottom = '4px';

                    const wordSpan = document.createElement('span');
                    wordSpan.className = 'word';
                    wordSpan.style.display = 'inline-block';
                    wordSpan.style.opacity = '0';
                    wordSpan.style.transform = 'translateY(100%)';
                    wordSpan.style.filter = 'blur(4px)';
                    wordSpan.style.transition = 'all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
                    wordSpan.style.transitionDelay = \`\${index * 40}ms\`;
                    wordSpan.innerHTML = word + '&nbsp;';

                    wordWrap.appendChild(wordSpan);
                    el.appendChild(wordWrap);
                });
            };

            wrapWords('hero-title');
            wrapWords('hero-subtitle');

            const observer = new IntersectionObserver((entries, self) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.filter = 'blur(0)';

                    entry.target.querySelectorAll('.word').forEach((word) => {
                        word.style.opacity = '1';
                        word.style.transform = 'translateY(0)';
                        word.style.filter = 'blur(0)';
                    });

                    if (entry.target.dataset.gauge) setTimeout(() => runInstrument(entry.target), 500);

                    self.unobserve(entry.target);
                });
            }, { root: null, rootMargin: '0px', threshold: 0.1 });

            document.querySelectorAll('[data-anim="true"]').forEach((el) => observer.observe(el));
        });
    <\/script>
</body>
</html>
`;var rf=`<!DOCTYPE html>
<html lang="en" class="antialiased selection:bg-cyan-500/30 selection:text-cyan-50">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logic Core</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>
<body class="bg-[#050505] text-zinc-300 min-h-screen flex items-center justify-center font-['Inter',sans-serif] overflow-x-hidden m-0 p-0" style="background-color: #050505;">

    <!-- Faint Ambient Grid Background -->
    <div class="fixed inset-0 pointer-events-none flex justify-center items-center overflow-hidden z-0" style="opacity: 0.04;">
        <svg class="absolute w-[200vw] h-[200vh]" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="bg-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" stroke-width="1"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#bg-grid)" />
        </svg>
    </div>

    <!-- Main Content Layout -->
    <main class="relative z-10 w-full max-w-5xl mx-auto p-6 md:p-12 flex flex-col md:flex-row gap-6 lg:gap-8 items-stretch justify-center pt-24 pb-24">
        
        <!-- Left Card: Visual Interface (Design) -->
        <article class="flex-1 rounded-[24px] bg-gradient-to-b from-white/10 to-transparent p-[1px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] group/card">
            <div class="bg-[#0A0A0A] rounded-[23px] overflow-hidden flex flex-col h-full w-full">
                
                <!-- Visual Area -->
                <div class="relative w-full h-64 sm:h-72 border-b border-white/5 flex items-center justify-center overflow-hidden bg-[#0A0A0A]" id="svg-container">
                    
                    <!-- SVG Interactive Scene -->
                    <svg width="100%" height="100%" viewBox="0 0 400 300" class="absolute inset-0 pointer-events-none">
                        <!-- Orbiting Rings -->
                        <g class="origin-center" style="transform-origin: 200px 150px;">
                            <circle cx="200" cy="150" r="130" fill="none" stroke="#ffffff" stroke-width="1" stroke-opacity="0.03" stroke-dasharray="4 4" id="ring-outer"/>
                            <circle cx="200" cy="150" r="90" fill="none" stroke="#ffffff" stroke-width="1" stroke-opacity="0.05" />
                            <circle cx="200" cy="150" r="50" fill="none" stroke="#ffffff" stroke-width="1" stroke-opacity="0.08" />
                        </g>

                        <!-- Central Bounding Box -->
                        <rect x="140" y="120" width="120" height="60" fill="none" stroke="#4F46E5" stroke-width="1" stroke-opacity="0.8" stroke-dasharray="2 2"/>
                        <rect x="138" y="118" width="4" height="4" fill="#4F46E5" />
                        <rect x="258" y="118" width="4" height="4" fill="#4F46E5" />
                        <rect x="138" y="178" width="4" height="4" fill="#4F46E5" />
                        <rect x="258" y="178" width="4" height="4" fill="#4F46E5" />

                        <!-- Animated SVG Cursors -->
                        <g id="cursor-alex" style="transform: translate(110px, 90px);">
                            <g>
                                <animateTransform attributeName="transform" type="translate" values="0,0; 0,-6; 0,0" dur="2s" repeatCount="indefinite" />
                                <path d="M0,0 L12,12 L5,12 L0,18 Z" fill="#F97316" />
                                <rect x="10" y="-8" width="42" height="18" rx="9" fill="#F97316" />
                                <text x="31" y="4" font-family="sans-serif" font-size="9" font-weight="500" fill="white" text-anchor="middle" style="letter-spacing: 0.5px;">Alex</text>
                            </g>
                        </g>

                        <g id="cursor-sam" style="transform: translate(130px, 200px);">
                            <g>
                                <animateTransform attributeName="transform" type="translate" values="0,0; 0,-6; 0,0" dur="2.5s" repeatCount="indefinite" />
                                <path d="M0,0 L12,12 L5,12 L0,18 Z" fill="#EC4899" transform="rotate(-30)" />
                                <rect x="12" y="8" width="40" height="18" rx="9" fill="#EC4899" />
                                <text x="32" y="20" font-family="sans-serif" font-size="9" font-weight="500" fill="white" text-anchor="middle" style="letter-spacing: 0.5px;">Sam</text>
                            </g>
                        </g>

                        <g id="cursor-me" style="transform: translate(270px, 180px);">
                            <g>
                                <animateTransform attributeName="transform" type="translate" values="0,0; 0,-6; 0,0" dur="2.2s" repeatCount="indefinite" />
                                <path d="M0,0 L12,12 L5,12 L0,18 Z" fill="#10B981" transform="rotate(-70)" />
                                <rect x="-4" y="14" width="34" height="18" rx="9" fill="#10B981" />
                                <text x="13" y="26" font-family="sans-serif" font-size="9" font-weight="500" fill="white" text-anchor="middle" style="letter-spacing: 0.5px;">Me</text>
                            </g>
                        </g>
                    </svg>

                    <!-- Avatar Nodes -->
                    <div class="absolute w-5 h-5 rounded-full bg-zinc-800 border border-white/10 overflow-hidden shadow-sm" style="top: 25%; left: 30%;">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80" class="w-full h-full object-cover" alt="Avatar">
                    </div>
                    <div class="absolute w-6 h-6 rounded-full bg-zinc-800 border border-white/10 overflow-hidden shadow-sm" style="top: 60%; right: 20%;">
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&q=80" class="w-full h-full object-cover" alt="Avatar">
                    </div>
                    <div class="absolute w-5 h-5 rounded-full bg-zinc-800 border border-white/10 overflow-hidden shadow-sm" style="bottom: 20%; left: 20%;">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80" class="w-full h-full object-cover" alt="Avatar">
                    </div>
                </div>

                <!-- Text Content -->
                <div class="p-6 md:p-8 flex-1 flex flex-col justify-start">
                    <h2 class="text-xl tracking-tight font-medium text-zinc-100 mb-3 animate-text">Visual Interface</h2>
                    <p class="text-sm text-zinc-400 leading-relaxed animate-text">Construct dynamic layouts using our intuitive node-based system. Collaborate in real-time with your team across unified environments.</p>
                </div>
            </div>
        </article>

        <!-- Right Card: Core Logic (Develop / ThreeJS) -->
        <article class="flex-1 rounded-[24px] bg-gradient-to-b from-white/10 to-transparent p-[1px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] group/card">
            <div class="bg-[#0A0A0A] rounded-[23px] overflow-hidden flex flex-col h-full w-full">
                
                <!-- Visual Area -->
                <div class="relative w-full h-64 sm:h-72 border-b border-white/5 bg-[#050505] overflow-hidden">
                    
                    <!-- ThreeJS Canvas Container -->
                    <div id="three-canvas-container" class="absolute inset-0"></div>

                    <!-- Overlay Terminal Icon -->
                    <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                        <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#0F0F0F]/90 backdrop-blur-md border border-white/10 flex items-center justify-center" style="box-shadow: 0 8px 32px -8px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.05);">
                            <div class="text-cyan-400 font-mono text-2xl sm:text-3xl font-light tracking-widest flex items-center gap-1">
                                <span>></span><span id="terminal-cursor" class="block w-3 sm:w-4 h-[2px] bg-cyan-400 mt-2" style="transition: opacity 0.2s;"></span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Text Content -->
                <div class="p-6 md:p-8 flex-1 flex flex-col justify-start relative">
                    <div class="flex items-center gap-2 mb-3">
                        <h2 class="text-xl tracking-tight font-medium text-zinc-100 animate-text">Core Logic</h2>
                        <iconify-icon icon="solar:code-circle-linear" style="stroke-width: 1.5;" class="text-zinc-500 text-lg opacity-0 animate-text-icon"></iconify-icon>
                    </div>
                    <p class="text-sm text-zinc-400 leading-relaxed animate-text">Access the underlying isometric data structures directly. Deploy scalable microservices instantly via our high-performance runtime.</p>
                </div>
            </div>
        </article>

    </main>

    <!-- Application Logic -->
    <script type="module">
        import * as THREE from 'https://cdn.skypack.dev/three@0.136.0';

        // --- 1. ThreeJS Isometric Terminal-Modernism Scene ---
        const initThreeJS = () => {
            const container = document.getElementById('three-canvas-container');
            if (!container) return;

            const scene = new THREE.Scene();
            
            // Isometric Orthographic Camera Configuration
            const aspect = container.clientWidth / container.clientHeight;
            const d = 12; // Camera frustum size
            const camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 1000);
            camera.position.set(20, 20, 20); // Isometric angle
            camera.lookAt(0, 0, 0);

            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(renderer.domElement);

            const group = new THREE.Group();
            scene.add(group);

            // Material Definitions
            const basePlatformMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9, metalness: 0.1 });
            const coreEmissiveMat = new THREE.MeshStandardMaterial({ color: 0x00E5FF, emissive: 0x00E5FF, emissiveIntensity: 0.5, roughness: 0.2 });
            const wireframeMat = new THREE.LineBasicMaterial({ color: 0x333333, transparent: true, opacity: 0.4 });

            // Geometry Build: Base Platform
            const platformGeo = new THREE.BoxGeometry(16, 0.5, 16);
            const platform = new THREE.Mesh(platformGeo, basePlatformMat);
            platform.position.y = -2;
            group.add(platform);

            const platformEdges = new THREE.LineSegments(new THREE.EdgesGeometry(platformGeo), wireframeMat);
            platform.add(platformEdges);

            // Geometry Build: Central Logic Core
            const coreGeo = new THREE.BoxGeometry(2, 4, 2);
            const core = new THREE.Mesh(coreGeo, coreEmissiveMat);
            core.position.y = 0.25;
            group.add(core);

            // Geometry Build: Orbiting Data Nodes
            const nodes = [];
            const nodeCount = 12;
            for(let i = 0; i < nodeCount; i++) {
                const isAccent = Math.random() > 0.7;
                const nodeMat = isAccent ? coreEmissiveMat : new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.8 });
                const size = 0.4 + Math.random() * 0.4;
                const nodeGeo = new THREE.BoxGeometry(size, size, size);
                const node = new THREE.Mesh(nodeGeo, nodeMat);
                
                const angle = (i / nodeCount) * Math.PI * 2;
                const radius = 4 + Math.random() * 4;
                
                node.position.set(Math.cos(angle) * radius, -1 + Math.random() * 4, Math.sin(angle) * radius);
                
                // Add tiny wireframe to nodes for technical look
                node.add(new THREE.LineSegments(new THREE.EdgesGeometry(nodeGeo), new THREE.LineBasicMaterial({ color: 0x555555, transparent: true, opacity: 0.3 })));

                node.userData = { 
                    angle, 
                    radius, 
                    speed: 0.005 + Math.random() * 0.015, 
                    yBase: node.position.y,
                    yOffset: Math.random() * Math.PI * 2 
                };
                group.add(node);
                nodes.push({ mesh: node, isAccent });
            }

            // Lighting Setup
            scene.add(new THREE.AmbientLight(0xffffff, 0.3));
            
            const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
            dirLight.position.set(10, 20, 5);
            scene.add(dirLight);
            
            const pointLight = new THREE.PointLight(0x00E5FF, 1.5, 25);
            pointLight.position.set(0, 1, 0);
            scene.add(pointLight);

            // Animation Loop
            let time = 0;
            const animate3D = () => {
                requestAnimationFrame(animate3D);
                time += 0.016;

                // Subtle environmental drift
                group.rotation.y = Math.sin(time * 0.1) * 0.15;
                group.position.y = Math.sin(time * 0.5) * 0.2;

                // Emissive pulsing logic
                const pulse = (Math.sin(time * 2.5) + 1) * 0.5;
                coreEmissiveMat.emissiveIntensity = 0.4 + pulse * 0.6;
                pointLight.intensity = 1.0 + pulse * 1.5;

                // Node orbital mechanics
                nodes.forEach(nodeObj => {
                    const data = nodeObj.mesh.userData;
                    data.angle += data.speed;
                    nodeObj.mesh.position.x = Math.cos(data.angle) * data.radius;
                    nodeObj.mesh.position.z = Math.sin(data.angle) * data.radius;
                    nodeObj.mesh.position.y = data.yBase + Math.sin(time * 1.5 + data.yOffset) * 0.5;
                    nodeObj.mesh.rotation.x += 0.01;
                    nodeObj.mesh.rotation.y += 0.02;
                });

                renderer.render(scene, camera);
            };
            animate3D();

            // Responsive Handling
            window.addEventListener('resize', () => {
                if(!container) return;
                const newAspect = container.clientWidth / container.clientHeight;
                camera.left = -d * newAspect;
                camera.right = d * newAspect;
                camera.top = d;
                camera.bottom = -d;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            });
        };

        // --- 2. 2D SVG & DOM Animations ---
        
        // Terminal Cursor Blink
        const terminalCursor = document.getElementById('terminal-cursor');
        setInterval(() => {
            if(terminalCursor) {
                terminalCursor.style.opacity = terminalCursor.style.opacity === '0' ? '1' : '0';
            }
        }, 500);

        // SVG Cursor Organic Float
        const cursorAlex = document.getElementById('cursor-alex');
        const cursorSam = document.getElementById('cursor-sam');
        const cursorMe = document.getElementById('cursor-me');
        const outerRing = document.getElementById('ring-outer');
        let svgTime = 0;

        const animateSVG = () => {
            svgTime += 0.015;
            
            // Organic cursor movement formulas
            if(cursorAlex) cursorAlex.setAttribute('transform', \`translate(\${110 + Math.sin(svgTime * 1.2) * 6}, \${90 + Math.cos(svgTime * 0.8) * 6})\`);
            if(cursorSam) cursorSam.setAttribute('transform', \`translate(\${130 + Math.cos(svgTime * 0.9) * 5}, \${200 + Math.sin(svgTime * 1.1) * 5})\`);
            if(cursorMe) cursorMe.setAttribute('transform', \`translate(\${270 + Math.sin(svgTime * 1.5) * 4}, \${180 + Math.cos(svgTime * 1.3) * 7})\`);
            
            // Subtle ring rotation
            if(outerRing) outerRing.style.transform = \`rotate(\${svgTime * 5}deg)\`;

            requestAnimationFrame(animateSVG);
        };

        // --- 3. Staggered Word-by-Word Scroll Reveal ---
        const initTextAnimations = () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Reveal spans
                        const spans = entry.target.querySelectorAll('span');
                        spans.forEach(span => {
                            span.style.opacity = '1';
                            span.style.transform = 'translateY(0) scale(1)';
                            span.style.filter = 'blur(0px)';
                        });
                        
                        // Handle potential icon siblings
                        const icon = entry.target.parentElement?.querySelector('iconify-icon');
                        if(icon) {
                            setTimeout(() => {
                                icon.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
                                icon.style.opacity = '1';
                                icon.style.transform = 'translateY(0) scale(1)';
                            }, 300);
                        }

                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

            document.querySelectorAll('.animate-text').forEach(el => {
                const text = el.textContent;
                el.innerHTML = ''; // Clear original text
                const words = text.split(' ');
                
                words.forEach((word, index) => {
                    const span = document.createElement('span');
                    span.textContent = word + ' '; // Re-add space
                    
                    // Initial hidden state applied inline to respect constraints
                    span.style.opacity = '0';
                    span.style.transform = 'translateY(12px) scale(0.98)';
                    span.style.filter = 'blur(4px)';
                    span.style.display = 'inline-block';
                    span.style.whiteSpace = 'pre-wrap';
                    
                    // Complex transition physics
                    span.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
                    span.style.transitionDelay = \`\${index * 35}ms\`;
                    
                    el.appendChild(span);
                });

                // Initial setup for sibling icons
                const icon = el.parentElement?.querySelector('iconify-icon');
                if(icon) {
                    icon.style.opacity = '0';
                    icon.style.transform = 'translateY(10px) scale(0.8)';
                }

                observer.observe(el);
            });
        };

        // Bootstrap
        window.addEventListener('DOMContentLoaded', () => {
            initThreeJS();
            animateSVG();
            initTextAnimations();
        });

    <\/script>
</body>
</html>`;var of=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Strata \u2014 Cloud Migration Platform</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&display=swap" rel="stylesheet">
    
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="bg-[#050510] text-white font-['Inter',system-ui,sans-serif] overflow-x-hidden antialiased selection:bg-violet-500/30 selection:text-violet-200">

    <!-- WebGL Background Canvas -->
    <canvas id="c" class="fixed inset-0 w-full h-full z-0 pointer-events-none"></canvas>

    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-4 px-6 md:px-10 bg-[#050510]/50 backdrop-blur-xl border-b border-violet-600/10">
        <div class="w-full max-w-[1200px] flex items-center justify-between">
            <div class="flex items-center gap-3 font-medium text-sm tracking-wide">
                <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-violet-400 flex items-center justify-center shadow-[0_0_16px_rgba(124,58,237,0.3)]">
                    <iconify-icon icon="solar:layers-linear" class="text-white text-lg"></iconify-icon>
                </div>
                Strata
            </div>
            
            <div class="hidden md:flex items-center gap-8">
                <a href="#" class="text-white/50 hover:text-white/90 text-sm font-light tracking-wide transition-colors">Platform</a>
                <a href="#" class="text-white/50 hover:text-white/90 text-sm font-light tracking-wide transition-colors">Solutions</a>
                <a href="#" class="text-white/50 hover:text-white/90 text-sm font-light tracking-wide transition-colors">Pricing</a>
                <a href="#" class="text-white/50 hover:text-white/90 text-sm font-light tracking-wide transition-colors">Docs</a>
            </div>
            
            <button class="px-5 py-2.5 rounded-full text-xs font-normal bg-gradient-to-br from-violet-600/20 to-violet-500/10 border border-violet-600/30 text-violet-400 hover:from-violet-600/30 hover:to-violet-500/20 transition-all shadow-[0_0_20px_rgba(124,58,237,0.1)] hover:shadow-[0_0_28px_rgba(124,58,237,0.2)] tracking-wide">
                Start Migration
            </button>
        </div>
    </nav>

    <!-- Hero Section -->
    <main class="relative z-10 flex flex-col items-center justify-center text-center min-h-[100svh] px-6 pt-20">
        <!-- Radial shadow overlay to help text readability over canvas -->
        <div class="absolute inset-0 pointer-events-none z-[-1]" style="background: radial-gradient(ellipse 70% 50% at 50% 55%, rgba(5,5,16,0.6) 0%, transparent 70%);"></div>

        <div class="relative z-1 max-w-3xl mx-auto w-full flex flex-col items-center">
            
            <div class="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-violet-600/5 border border-violet-600/20 rounded-full text-xs font-medium tracking-[0.1em] uppercase text-violet-400 backdrop-blur-sm">
                <span class="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_8px_#8b5cf6] animate-pulse"></span>
                Now in General Availability
            </div>
            
            <h1 class="text-[clamp(2.4rem,6vw,4rem)] font-thin tracking-tight leading-[1.08] text-white mb-6">
                Migrate to the cloud<br>with <em class="not-italic bg-gradient-to-br from-violet-500 via-violet-400 to-violet-200 bg-clip-text text-transparent">confidence</em>
            </h1>
            
            <p class="text-sm md:text-base font-light leading-relaxed text-white/40 max-w-xl mx-auto mb-10">
                Automated discovery, dependency mapping, and zero-downtime migration for enterprise workloads. Move faster with less risk.
            </p>
            
            <div class="flex flex-wrap justify-center gap-4 mb-16 w-full">
                <button class="relative overflow-hidden px-8 py-3.5 rounded-xl text-sm font-medium border-none text-white tracking-wide bg-gradient-to-br from-violet-700 to-violet-500 shadow-[0_0_30px_rgba(124,58,237,0.3),0_4px_16px_rgba(0,0,0,0.4)] hover:shadow-[0_0_40px_rgba(124,58,237,0.45),0_6px_20px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-[1px] group">
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                    Start Free Assessment
                </button>
                <button class="px-8 py-3.5 rounded-xl text-sm font-normal border border-white/10 bg-white/5 text-white/70 backdrop-blur-md hover:border-white/20 hover:text-white hover:bg-white/10 transition-all tracking-wide">
                    Watch Demo
                </button>
            </div>
            
            <div class="flex flex-wrap justify-center gap-8 md:gap-14 w-full">
                <div class="text-center">
                    <div class="text-2xl md:text-3xl font-thin tracking-tight bg-gradient-to-br from-violet-400 to-violet-200 bg-clip-text text-transparent">99.99%</div>
                    <div class="text-xs font-light text-white/30 tracking-[0.08em] uppercase mt-1.5">Uptime SLA</div>
                </div>
                <div class="text-center">
                    <div class="text-2xl md:text-3xl font-thin tracking-tight bg-gradient-to-br from-violet-400 to-violet-200 bg-clip-text text-transparent">8.5M</div>
                    <div class="text-xs font-light text-white/30 tracking-[0.08em] uppercase mt-1.5">Workloads Migrated</div>
                </div>
                <div class="text-center">
                    <div class="text-2xl md:text-3xl font-thin tracking-tight bg-gradient-to-br from-violet-400 to-violet-200 bg-clip-text text-transparent">75%</div>
                    <div class="text-xs font-light text-white/30 tracking-[0.08em] uppercase mt-1.5">Faster Migrations</div>
                </div>
                <div class="hidden sm:block text-center">
                    <div class="text-2xl md:text-3xl font-thin tracking-tight bg-gradient-to-br from-violet-400 to-violet-200 bg-clip-text text-transparent">500+</div>
                    <div class="text-xs font-light text-white/30 tracking-[0.08em] uppercase mt-1.5">Enterprise Clients</div>
                </div>
            </div>

        </div>

        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 pointer-events-none">
            <div class="w-5 h-[30px] rounded-full border-[1.5px] border-white/40 relative">
                <div id="scroll-dot" class="w-[2px] h-1.5 bg-white/60 rounded-full absolute top-1.5 left-1/2 -translate-x-1/2"></div>
            </div>
            <span class="text-[0.6rem] tracking-[0.14em] uppercase text-white/40">Scroll</span>
        </div>
    </main>

    <!-- Scroll Reveal Section (GSAP Masked Stagger) -->
    <section class="relative z-10 py-32 px-6 min-h-[70svh] flex items-center justify-center bg-[#050510]">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#050510] to-[#050510] pointer-events-none z-[-1]"></div>
        <div class="max-w-4xl mx-auto w-full text-center">
            <p class="text-xs font-medium tracking-[0.15em] uppercase text-violet-500 mb-8">Intelligent Infrastructure</p>
            <h2 id="reveal-text" class="text-2xl md:text-5xl font-thin tracking-tight leading-[1.3] text-white/90">
                Discover untethered scalability. The platform built to dynamically map, migrate, and optimize your entire infrastructure without lifting a finger.
            </h2>
        </div>
    </section>

    <!-- Feature Section with Premium Gradient Borders & Aura Images -->
    <section class="relative z-10 py-24 px-6 bg-[#050510]">
        <div class="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <!-- Card 1 -->
            <div class="p-[1px] rounded-3xl bg-gradient-to-b from-white/10 via-white/5 to-transparent relative group overflow-hidden">
                <div class="absolute inset-0 bg-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl rounded-3xl pointer-events-none"></div>
                <div class="bg-[#080814] rounded-[23px] h-full p-2 relative z-10 flex flex-col">
                    <div class="w-full h-56 md:h-72 rounded-[18px] overflow-hidden mb-6 relative">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/724142aa-44a6-48d3-9cf3-761e00d05b78_1600w.jpg" alt="Architecture" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80" loading="lazy">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#080814] to-transparent"></div>
                    </div>
                    <div class="px-6 pb-8">
                        <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 text-white/70">
                            <iconify-icon icon="solar:box-minimalistic-linear" class="text-xl"></iconify-icon>
                        </div>
                        <h3 class="text-xl font-light tracking-tight text-white mb-3">Architectural Clarity</h3>
                        <p class="text-sm font-light text-white/40 leading-relaxed">
                            Automatically visualize dependencies across microservices and legacy monolithic structures before execution.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="p-[1px] rounded-3xl bg-gradient-to-b from-white/10 via-white/5 to-transparent relative group overflow-hidden">
                <div class="absolute inset-0 bg-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl rounded-3xl pointer-events-none"></div>
                <div class="bg-[#080814] rounded-[23px] h-full p-2 relative z-10 flex flex-col">
                    <div class="w-full h-56 md:h-72 rounded-[18px] overflow-hidden mb-6 relative">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" alt="Abstract" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80" loading="lazy">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#080814] to-transparent"></div>
                    </div>
                    <div class="px-6 pb-8">
                        <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 text-white/70">
                            <iconify-icon icon="solar:graph-linear" class="text-xl"></iconify-icon>
                        </div>
                        <h3 class="text-xl font-light tracking-tight text-white mb-3">Dynamic Scaling</h3>
                        <p class="text-sm font-light text-white/40 leading-relaxed">
                            Leverage predictive models to right-size compute resources dynamically as your user traffic shifts.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- Footer Spacer -->
    <footer class="relative z-10 bg-[#050510] border-t border-white/5 py-10 text-center">
        <p class="text-xs font-light text-white/30 tracking-wide">\xA9 Strata Technologies. All rights reserved.</p>
    </footer>

    <!-- Logic & Animations -->
    <script>
        // --- GSAP Animations ---
        gsap.registerPlugin(ScrollTrigger);

        // Scroll Mouse Dot Animation
        gsap.to("#scroll-dot", {
            y: 8,
            opacity: 0.2,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        // Masked Staggered Text Reveal
        const revealEl = document.getElementById('reveal-text');
        const textContent = revealEl.innerText;
        revealEl.innerHTML = '';
        
        // Wrap words in masked spans
        const words = textContent.split(' ');
        words.forEach(word => {
            const wrapper = document.createElement('span');
            // Using inline styles for structural mask requirements (avoids \`<style>\`)
            wrapper.style.display = 'inline-block';
            wrapper.style.overflow = 'hidden';
            wrapper.style.verticalAlign = 'bottom';
            wrapper.style.marginRight = '0.25em';
            wrapper.style.paddingBottom = '0.1em'; // Prevent clipping of descenders
            
            const inner = document.createElement('span');
            inner.className = 'reveal-word';
            inner.style.display = 'inline-block';
            inner.style.transform = 'translateY(110%)';
            inner.style.transformOrigin = 'top left';
            inner.innerText = word;
            
            wrapper.appendChild(inner);
            revealEl.appendChild(wrapper);
        });

        // Trigger animation
        gsap.to('.reveal-word', {
            y: 0,
            duration: 1.2,
            stagger: 0.03,
            ease: "power4.out",
            scrollTrigger: {
                trigger: revealEl,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });


        // --- WebGL Background Canvas ---
        const canvas = document.getElementById('c');
        const gl = canvas.getContext('webgl', { antialias: true, alpha: false, preserveDrawingBuffer: true });

        let W, H, dpr;
        function resize() {
            dpr = Math.min(window.devicePixelRatio, 2);
            W = window.innerWidth;
            H = window.innerHeight;
            canvas.width = W * dpr;
            canvas.height = H * dpr;
            gl.viewport(0, 0, canvas.width, canvas.height);
        }
        window.addEventListener('resize', resize);
        resize();

        const VS = \`
        attribute vec2 a_pos;
        void main(){ gl_Position = vec4(a_pos, 0.0, 1.0); }
        \`;

        const FS = \`
        precision highp float;
        uniform vec2 u_res;
        uniform float u_time;
        uniform vec2 u_mouse;

        float hash(float n){ return fract(sin(n)*43758.5453123); }
        float hash2(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }

        float noise(float x){
            float i = floor(x);
            float f = fract(x);
            f = f*f*(3.0-2.0*f);
            return mix(hash(i), hash(i+1.0), f);
        }

        float fbm(float x, float octaves){
            float val = 0.0;
            float amp = 0.5;
            float freq = 1.0;
            for(int i = 0; i < 6; i++){
                if(float(i) >= octaves) break;
                val += amp * noise(x * freq);
                freq *= 2.17;
                amp *= 0.48;
            }
            return val;
        }

        float meteor(vec2 uv, float t){
            float cycle = mod(t * 0.15, 1.0);
            float seed = floor(t * 0.15);
            float h = hash(seed * 7.31);
            float h2 = hash(seed * 13.17);
            if(h > 0.30) return 0.0;
            vec2 start = vec2(0.2 + h2 * 0.6, 0.7 + h * 0.25);
            vec2 dir = normalize(vec2(1.0, -0.6 - h * 0.3));
            float progress = smoothstep(0.0, 0.7, cycle);
            vec2 pos = start + dir * progress * 0.5;
            vec2 toP = uv - pos;
            float along = dot(toP, dir);
            float perp = length(toP - dir * along);
            float trail = smoothstep(0.0, -0.12, along) * smoothstep(-0.18, -0.04, along);
            float core = smoothstep(0.003, 0.0, perp) * trail;
            float glow = smoothstep(0.012, 0.0, perp) * trail * 0.3;
            float fade = smoothstep(0.0, 0.1, cycle) * smoothstep(0.8, 0.55, cycle);
            return (core + glow) * fade;
        }

        float stars(vec2 uv, float density){
            vec2 cell = floor(uv * density);
            vec2 sub = fract(uv * density);
            float h = hash2(cell);
            float brightness = step(0.975, h);
            float size = 0.025 + h * 0.045;
            float d = length(sub - vec2(hash2(cell + 100.0), hash2(cell + 200.0)));
            float star = brightness * smoothstep(size, 0.0, d);
            star *= 0.5 + 0.5 * sin(u_time * (1.0 + h * 3.0) + h * 6.28);
            return star;
        }

        void main(){
            vec2 uv = gl_FragCoord.xy / u_res;
            float aspect = u_res.x / u_res.y;

            vec2 mouse = u_mouse * 2.0 - 1.0;

            vec3 skyTop    = vec3(0.015, 0.012, 0.045);
            vec3 skyMid    = vec3(0.035, 0.025, 0.085);
            vec3 skyBottom = vec3(0.065, 0.045, 0.14);

            float skyGrad = uv.y;
            vec3 col = mix(skyBottom, skyMid, smoothstep(0.3, 0.6, skyGrad));
            col = mix(col, skyTop, smoothstep(0.6, 1.0, skyGrad));

            float horizonY = 0.35;
            float horizonGlow = exp(-pow((uv.y - horizonY) * 3.8, 2.0));
            col += vec3(0.15, 0.07, 0.26) * horizonGlow * 0.8;

            float centerGlow = exp(-pow((uv.x - 0.5) * 1.5, 2.0)) * exp(-pow((uv.y - horizonY) * 4.0, 2.0));
            col += vec3(0.14, 0.10, 0.24) * centerGlow * 0.6;

            float starField = stars(uv * vec2(aspect, 1.0), 60.0)
                            + stars(uv * vec2(aspect, 1.0) + 500.0, 100.0) * 0.7
                            + stars(uv * vec2(aspect, 1.0) + 900.0, 160.0) * 0.4;

            float starMask = 1.0;
            float xC, yS, prof, mTop, mtn, rDist, rGlow, rAmb;
            vec3 lC;

            // Layer 0
            lC = vec3(0.14, 0.10, 0.24);
            xC = uv.x * aspect * 1.6 + u_time * 0.006 + mouse.x * 0.010;
            yS = mouse.y * 0.003;
            prof = fbm(xC, 5.0) * 0.10 + fbm(xC * 0.3 + 17.0, 3.0) * 0.07;
            mTop = 0.40 + prof + yS;
            mtn = smoothstep(mTop + 0.003, mTop - 0.001, uv.y);
            rDist = abs(uv.y - mTop);
            rGlow = smoothstep(0.012, 0.0, rDist) * 0.18;
            rAmb = smoothstep(0.04, 0.0, rDist) * 0.06;
            col = mix(col, lC, mtn);
            col += vec3(0.20, 0.10, 0.35) * rGlow;
            col += vec3(0.12, 0.06, 0.22) * rAmb;
            starMask *= (1.0 - mtn);

            // Layer 1
            lC = vec3(0.11, 0.07, 0.19);
            xC = uv.x * aspect * 2.0 + u_time * 0.012 + mouse.x * 0.020;
            yS = mouse.y * 0.006;
            prof = fbm(xC, 5.0) * 0.13 + fbm(xC * 0.3 + 34.0, 3.0) * 0.091;
            mTop = 0.33 + prof + yS;
            mtn = smoothstep(mTop + 0.003, mTop - 0.001, uv.y);
            rDist = abs(uv.y - mTop);
            rGlow = smoothstep(0.012, 0.0, rDist) * 0.15;
            rAmb = smoothstep(0.04, 0.0, rDist) * 0.045;
            col = mix(col, lC, mtn);
            col += vec3(0.20, 0.10, 0.35) * rGlow;
            col += vec3(0.12, 0.06, 0.22) * rAmb;
            starMask *= (1.0 - mtn);

            // Layer 2
            lC = vec3(0.08, 0.05, 0.14);
            xC = uv.x * aspect * 2.6 + u_time * 0.020 + mouse.x * 0.034;
            yS = mouse.y * 0.010;
            prof = fbm(xC, 5.0) * 0.16 + fbm(xC * 0.3 + 51.0, 3.0) * 0.112;
            mTop = 0.26 + prof + yS;
            mtn = smoothstep(mTop + 0.003, mTop - 0.001, uv.y);
            rDist = abs(uv.y - mTop);
            rGlow = smoothstep(0.012, 0.0, rDist) * 0.12;
            rAmb = smoothstep(0.04, 0.0, rDist) * 0.03;
            col = mix(col, lC, mtn);
            col += vec3(0.20, 0.10, 0.35) * rGlow;
            col += vec3(0.12, 0.06, 0.22) * rAmb;
            starMask *= (1.0 - mtn);

            // Layer 3
            lC = vec3(0.05, 0.03, 0.09);
            xC = uv.x * aspect * 3.2 + u_time * 0.030 + mouse.x * 0.050;
            yS = mouse.y * 0.015;
            prof = fbm(xC, 5.0) * 0.14 + fbm(xC * 0.3 + 68.0, 3.0) * 0.098;
            mTop = 0.18 + prof + yS;
            mtn = smoothstep(mTop + 0.003, mTop - 0.001, uv.y);
            rDist = abs(uv.y - mTop);
            rGlow = smoothstep(0.012, 0.0, rDist) * 0.09;
            col = mix(col, lC, mtn);
            col += vec3(0.20, 0.10, 0.35) * rGlow;
            starMask *= (1.0 - mtn);

            // Layer 4
            lC = vec3(0.03, 0.018, 0.055);
            xC = uv.x * aspect * 4.0 + u_time * 0.044 + mouse.x * 0.070;
            yS = mouse.y * 0.021;
            prof = fbm(xC, 5.0) * 0.11 + fbm(xC * 0.3 + 85.0, 3.0) * 0.077;
            mTop = 0.09 + prof + yS;
            mtn = smoothstep(mTop + 0.003, mTop - 0.001, uv.y);
            rDist = abs(uv.y - mTop);
            rGlow = smoothstep(0.012, 0.0, rDist) * 0.06;
            col = mix(col, lC, mtn);
            col += vec3(0.20, 0.10, 0.35) * rGlow;
            starMask *= (1.0 - mtn);

            col += vec3(0.9, 0.8, 1.0) * starField * starMask;
            float met = meteor(uv * vec2(aspect, 1.0), u_time);
            col += vec3(0.8, 0.6, 1.0) * met * starMask;

            float vig = 1.0 - 0.3 * pow(length((uv - 0.5) * vec2(1.1, 1.6)), 2.0);
            col *= vig;

            float haze = exp(-pow((uv.y - 0.33) * 5.0, 2.0)) * 0.05;
            col += vec3(0.15, 0.10, 0.30) * haze;

            col = pow(col, vec3(0.95));

            gl_FragColor = vec4(col, 1.0);
        }
        \`;

        function createShader(src, type) {
            const s = gl.createShader(type);
            gl.shaderSource(s, src);
            gl.compileShader(s);
            if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) return null;
            return s;
        }

        const vs = createShader(VS, gl.VERTEX_SHADER);
        const fs = createShader(FS, gl.FRAGMENT_SHADER);
        const prog = gl.createProgram();
        gl.attachShader(prog, vs);
        gl.attachShader(prog, fs);
        gl.linkProgram(prog);
        gl.useProgram(prog);

        const quad = new Float32Array([-1,-1, 1,-1, -1,1, 1,1]);
        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);
        const aPos = gl.getAttribLocation(prog, 'a_pos');
        gl.enableVertexAttribArray(aPos);
        gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

        const uRes = gl.getUniformLocation(prog, 'u_res');
        const uTime = gl.getUniformLocation(prog, 'u_time');
        const uMouse = gl.getUniformLocation(prog, 'u_mouse');

        let mx = 0.5, my = 0.5;
        let smx = 0.5, smy = 0.5;
        document.addEventListener('mousemove', e => {
            mx = e.clientX / window.innerWidth;
            my = 1.0 - e.clientY / window.innerHeight;
        });

        function frame(t) {
            t *= 0.001;
            smx += (mx - smx) * 0.04;
            smy += (my - smy) * 0.04;

            gl.uniform2f(uRes, canvas.width, canvas.height);
            gl.uniform1f(uTime, t);
            gl.uniform2f(uMouse, smx, smy);

            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
    <\/script>
</body>
</html>`;var lf=`<!DOCTYPE html>
<html lang="en"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Synthesis - Autonomous Systems</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"><\/script>
    
    <!-- Iconify -->
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;family=Playfair+Display:wght@400;600&amp;family=Space+Mono:wght@400;700&amp;display=swap" rel="stylesheet">
</head>
<body class="bg-black text-white min-h-screen flex flex-col items-center justify-center p-6 md:p-12 font-['Inter'] antialiased overflow-x-hidden selection:bg-white/30 selection:text-white" style="background-color: #030303;">

    <!-- Global Noise Overlay -->
    <div class="fixed inset-0 pointer-events-none z-[100] opacity-[0.15] mix-blend-overlay" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>

    <main class="w-full max-w-[900px] mx-auto flex flex-col items-center gap-16">
        
        <!-- Cards Container -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 w-full place-items-center">

            <!-- Card 1 (Left Reference) -->
            <div class="obs-animate relative w-full max-w-[340px] aspect-[9/19] rounded-[2rem] p-[1px] group transition-transform duration-1000 ease-out opacity-0 translate-y-8 blur-sm" style="background: linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.02) 40%, rgba(0,0,0,0) 100%);">
                <!-- Inner Container -->
                <div class="relative z-10 w-full h-full bg-[#0a0a0a] rounded-[calc(2rem-1px)] flex flex-col overflow-hidden pt-8 pb-10 px-8 justify-between shadow-[inset_0_0_80px_rgba(0,0,0,0.8)]">
                    
                    <!-- Header -->
                    <div class="flex justify-between items-center w-full relative z-20">
                        <span class="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-white/70">Nexus Team</span>
                        <div class="flex items-center gap-1.5 opacity-70">
                            <iconify-icon icon="solar:cpu-linear" width="12" height="12"></iconify-icon>
                            <span class="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em]">By Synthesis</span>
                        </div>
                    </div>

                    <!-- Title Area -->
                    <div class="relative z-20 flex flex-col items-center mt-12 mb-auto">
                        <h1 class="font-['Playfair_Display'] text-3xl tracking-[0.15em] text-white uppercase text-center" style="text-shadow: 0 0 20px rgba(255,255,255,0.3);">
                            Synthesis
                        </h1>
                        <!-- Dissolve Pixels -->
                        <div id="pixel-dissolve" class="flex flex-wrap justify-center gap-[1px] w-[80%] mt-2 opacity-60"></div>
                    </div>

                    <!-- Canvas Orb Animation -->
                    <canvas id="orbCanvas" class="absolute inset-0 w-full h-[60%] top-[25%] z-0 pointer-events-none mix-blend-screen opacity-90" style="filter: drop-shadow(0 0 30px rgba(255,255,255,0.2));"></canvas>

                    <!-- Subtle Hand overlay behind orb to match reference -->
                    <div class="absolute bottom-[25%] left-[-20%] w-[140%] h-[40%] z-0 pointer-events-none opacity-40 mix-blend-screen" style="background-image: url('https://wypspaektjjiccarxrgy.supabase.co/storage/v1/object/public/generated-page-media/302e86e0-80d8-4ba5-82e8-004220675655/2026-05-20/1779252373608-52b8a9e5-d6a8-4510-8c9e-7ac4cc9acdb1.png'); background-size: cover; background-position: center bottom; filter: grayscale(1) contrast(3) brightness(0.5) blur(2px); mask-image: linear-gradient(to top, transparent, black 40%, transparent 100%); -webkit-mask-image: linear-gradient(to top, transparent, black 40%, transparent 100%);"></div>

                    <!-- Footer -->
                    <div class="relative z-20 flex flex-col gap-3 mt-auto">
                        <h2 class="font-['Space_Mono'] text-[11px] font-bold tracking-[0.15em] uppercase text-white/90">
                            Synthesis Neural Swarms
                        </h2>
                        <p class="word-animate font-['Space_Mono'] text-[8px] leading-[1.8] text-white/40 uppercase tracking-[0.05em] text-justify">
                            In our recent analytical models, we discovered profound structural anomalies within the verified dataset, indicating that legacy benchmarks are entirely obsolete for evaluating current generation autonomous entities.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Card 2 (Right Reference) -->
            <div class="obs-animate relative w-full max-w-[340px] aspect-[9/19] rounded-[2rem] p-[1px] group transition-transform duration-1000 ease-out delay-200 opacity-0 translate-y-8 blur-sm" style="background: linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.02) 40%, rgba(0,0,0,0) 100%);">
                <!-- Inner Container -->
                <div class="relative z-10 w-full h-full bg-[#0a0a0a] rounded-[calc(2rem-1px)] flex flex-col overflow-hidden pt-8 pb-10 px-8 items-center shadow-[inset_0_0_80px_rgba(0,0,0,0.8)]">
                    
                    <!-- Header -->
                    <div class="flex justify-between items-center w-full relative z-20">
                        <span class="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-white/70">Nexus Team</span>
                        <div class="flex items-center gap-1.5 opacity-70">
                            <iconify-icon icon="solar:cpu-linear" width="12" height="12"></iconify-icon>
                            <span class="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em]">By Synthesis</span>
                        </div>
                    </div>

                    <!-- Title Area -->
                    <div class="relative z-20 flex flex-col items-center mt-12 w-full">
                        <!-- Custom SVG Logo -->
                        <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-3 opacity-90">
                            <path d="M20 20C20 12 35 12 60 12C85 12 100 12 100 20" stroke="white" stroke-width="1.5" stroke-linecap="round"></path>
                            <path d="M30 4C30 8 40 12 60 12C80 12 90 8 90 4" stroke="white" stroke-width="1.5" stroke-linecap="round"></path>
                            <path d="M40 16C40 14 48 12 60 12C72 12 80 14 80 16" stroke="white" stroke-width="1.5" stroke-linecap="round"></path>
                            <path d="M50 8C50 10 54 12 60 12C66 12 70 10 70 8" stroke="white" stroke-width="1.5" stroke-linecap="round"></path>
                        </svg>
                        
                        <h1 class="font-['Space_Mono'] font-bold text-[28px] tracking-tight text-white uppercase mt-2">
                            Synthesis
                        </h1>
                        <span class="font-['Space_Mono'] text-[10px] tracking-[0.2em] text-white/50 mt-4">
                            EST. 2026
                        </span>
                    </div>

                    <!-- Halftone Stylized Image -->
                    <div class="absolute inset-0 top-[30%] z-0 pointer-events-none overflow-hidden mask-fade">
                        <!-- Base Image -->
                        <div class="absolute inset-[-10%] w-[120%] h-[120%] opacity-80" style="background-image: url('https://wypspaektjjiccarxrgy.supabase.co/storage/v1/object/public/generated-page-media/302e86e0-80d8-4ba5-82e8-004220675655/2026-05-20/1779252397131-15cf585b-725a-4a7b-92e1-0eb229e98c69.png'); 
                                    background-size: cover; 
                                    background-position: center 20%; 
                                    filter: grayscale(1) contrast(4) brightness(0.6);">
                        </div>
                        
                        <!-- Dither/Halftone Pattern Overlay -->
                        <div class="absolute inset-0 mix-blend-multiply opacity-90" style="background-image: radial-gradient(circle at center, #ffffff 0.5px, transparent 1px); 
                                    background-size: 3px 3px;">
                        </div>
                        
                        <!-- Scanline Overlay -->
                        <div class="absolute inset-0 opacity-30 mix-blend-overlay" style="background-image: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.8) 50%);
                                    background-size: 100% 4px;">
                        </div>

                        <!-- Glitch shift layer -->
                        <div class="absolute inset-[-10%] w-[120%] h-[120%] opacity-30 mix-blend-screen translate-x-[3px]" style="background-image:none; background-size: cover; background-position: center 20%; filter: grayscale(1) contrast(4) brightness(0.5); overflow:hidden; isolation:isolate"><video src="https://wypspaektjjiccarxrgy.supabase.co/storage/v1/object/public/generated-page-media/302e86e0-80d8-4ba5-82e8-004220675655/2026-05-20/1779252518557-fe1e9d3d-3205-4f1e-894b-7d0febc4d045.mp4" poster="https://wypspaektjjiccarxrgy.supabase.co/storage/v1/object/public/generated-page-media/302e86e0-80d8-4ba5-82e8-004220675655/2026-05-20/1779252423170-89677f7c-f5e8-4145-936d-b4561e04c593.png" data-neuform-generated-video="true" data-neuform-video-preset="loop-in-view" muted="" playsinline="" preload="metadata" loop="" data-neuform-generated-video-bg="true" autoplay="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;z-index:0;max-width:none"></video>
                        </div>
                    </div>
                    
                    <!-- Gradient Mask for fading image at bottom -->
                    <div class="absolute inset-0 top-[50%] z-10 pointer-events-none" style="background: linear-gradient(to bottom, transparent 0%, #0a0a0a 100%);"></div>

                </div>
            </div>

        </div>

        <!-- Dynamic CTA Button -->
        <div class="obs-animate opacity-0 translate-y-4 blur-sm transition-all duration-1000 delay-500 ease-out mt-8">
            <button class="group relative px-10 py-4 bg-transparent rounded-full overflow-hidden flex items-center gap-3 cursor-pointer">
                <!-- Border Gradient -->
                <div class="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-white/10 via-white/40 to-white/10 transition-opacity duration-500 group-hover:opacity-100 opacity-60">
                    <div class="w-full h-full bg-black/50 backdrop-blur-md rounded-full"></div>
                </div>
                <!-- Flare Effect -->
                <div class="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[30deg] transition-transform duration-1000 group-hover:translate-x-[300%] ease-in-out pointer-events-none"></div>
                
                <span class="relative z-10 font-['Space_Mono'] text-[11px] font-bold tracking-[0.2em] uppercase text-white transition-colors group-hover:text-white">Initialize Sequence</span>
                <iconify-icon icon="solar:arrow-right-linear" width="16" height="16" class="relative z-10 text-white/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white"></iconify-icon>
            </button>
        </div>

    </main>

    <script>
        // 1. Pixel Dissolve Generator for Card 1
        const pixelContainer = document.getElementById('pixel-dissolve');
        for (let i = 0; i < 40; i++) {
            const pixel = document.createElement('div');
            // Random sizes: mostly 1x1, some 2x2 or 3x1
            const w = Math.random() > 0.8 ? 2 : (Math.random() > 0.9 ? 3 : 1);
            const h = Math.random() > 0.8 ? 2 : 1;
            
            pixel.style.width = \`\${w * 2}px\`;
            pixel.style.height = \`\${h * 2}px\`;
            pixel.style.backgroundColor = 'white';
            
            // Randomize starting opacity and layout offset
            const initialOpacity = Math.random() * 0.8;
            pixel.style.opacity = initialOpacity;
            pixel.style.margin = \`\${Math.random() * 2}px \${Math.random() * 3}px\`;
            
            // Subtle inline animation styling using transition
            pixel.style.transition = 'opacity 1s ease-in-out';
            
            pixelContainer.appendChild(pixel);

            // Animate twinkle randomly
            setInterval(() => {
                pixel.style.opacity = Math.random() * 0.8 + 0.1;
            }, 1000 + Math.random() * 2000);
        }

        // 2. Word-by-Word setup
        document.querySelectorAll('.word-animate').forEach(el => {
            const text = el.innerText;
            const words = text.split(/\\s+/);
            el.innerHTML = words.map((word, i) => {
                // Return span with inline starting styles for the animation
                return \`<span class="inline-block opacity-0 blur-[4px]" style="transform: translateY(6px); transition: opacity 0.6s ease-out, transform 0.6s ease-out, filter 0.6s ease-out; transition-delay: \${i * 25}ms">\${word}&nbsp;</span>\`;
            }).join('');
        });

        // 3. Intersection Observer for trigger animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Handle main fade/slide/blur in classes
                    if(entry.target.classList.contains('obs-animate')){
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        entry.target.style.filter = 'blur(0)';
                    }
                    
                    // Trigger word-by-word children
                    const spans = entry.target.querySelectorAll('.word-animate span');
                    if (spans.length > 0) {
                        // Delay word animation slightly after card appears
                        setTimeout(() => {
                            spans.forEach(span => {
                                span.style.opacity = '1';
                                span.style.transform = 'translateY(0)';
                                span.style.filter = 'blur(0)';
                            });
                        }, 400);
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.obs-animate, .word-animate').forEach(el => {
            observer.observe(el);
        });

        // 4. WebGL/Canvas simulated 3D Particle Orb
        const canvas = document.getElementById('orbCanvas');
        const ctx = canvas.getContext('2d');
        
        let width, height;
        let particles = [];
        const numParticles = 800; // Dense enough to look like the reference

        function resize() {
            const rect = canvas.getBoundingClientRect();
            // Use device pixel ratio for sharper particles
            const dpr = window.devicePixelRatio || 1;
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            width = canvas.width;
            height = canvas.height;
            ctx.scale(dpr, dpr);
            width /= dpr;
            height /= dpr;
            initParticles();
        }

        function initParticles() {
            particles = [];
            const radius = Math.min(width, height) * 0.35;
            
            for (let i = 0; i < numParticles; i++) {
                // Math for spherical distribution
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos((Math.random() * 2) - 1);
                
                // Add noise to radius to make it fuzzy/grainy instead of a perfect sphere
                const r = radius + (Math.random() * radius * 0.4 - radius * 0.2);

                const x = r * Math.sin(phi) * Math.cos(theta);
                const y = r * Math.sin(phi) * Math.sin(theta);
                const z = r * Math.cos(phi);

                particles.push({
                    x, y, z,
                    originalX: x, originalY: y, originalZ: z,
                    size: Math.random() * 1.5 + 0.5,
                    phase: Math.random() * Math.PI * 2
                });
            }
        }

        let time = 0;
        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            
            time += 0.005;

            // Center of canvas
            const cx = width / 2;
            const cy = height / 2;

            // Rotation matrices
            const rotY = time * 0.5;
            const rotX = time * 0.3;

            const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
            const cosX = Math.cos(rotX), sinX = Math.sin(rotX);

            // Sort particles by Z for basic depth rendering (far first)
            particles.sort((a, b) => b.z - a.z);

            particles.forEach(p => {
                // Add jitter (glitch/noise effect)
                const jitter = Math.sin(time * 10 + p.phase) * 2;
                
                let x = p.originalX + jitter;
                let y = p.originalY;
                let z = p.originalZ;

                // Rotate Y
                let tempX = x * cosY - z * sinY;
                let tempZ = z * cosY + x * sinY;
                x = tempX;
                z = tempZ;

                // Rotate X
                let tempY = y * cosX - z * sinX;
                tempZ = z * cosX + y * sinX;
                y = tempY;
                z = tempZ;

                // Simple 3D projection
                const fov = 300;
                const zOffset = 400;
                const scale = fov / (fov + z + zOffset);

                const projX = x * scale + cx;
                const projY = y * scale + cy;

                // Size scales with depth
                const pSize = p.size * scale;

                // Alpha scales with depth, closer = brighter
                const alpha = Math.max(0.1, Math.min(0.9, (z + 200) / 400));
                
                // Draw particle (mimicking halftone dots/noise)
                ctx.fillStyle = \`rgba(255, 255, 255, \${alpha})\`;
                ctx.fillRect(projX, projY, pSize, pSize);
            });

            requestAnimationFrame(animateCanvas);
        }

        window.addEventListener('resize', resize);
        // Initialize canvas
        setTimeout(() => {
            resize();
            animateCanvas();
        }, 100);

    <\/script>

<script data-neuform-video-controller="true">
(function () {
  function playVideo(video) {
    var promise = video.play();
    if (promise && typeof promise.catch === "function") {
      promise.catch(function () {});
    }
  }
  function setupVideo(video) {
    if (video.__neuformVideoReady === true) return;
    video.__neuformVideoReady = true;
    video.muted = true;
    video.playsInline = true;
    var preset = video.dataset.neuformVideoPreset || "loop-in-view";
    if (preset === "hover") {
      video.addEventListener("mouseenter", function () { playVideo(video); });
      video.addEventListener("mouseleave", function () {
        video.pause();
        video.currentTime = 0;
      });
      return;
    }
    if (!("IntersectionObserver" in window)) {
      playVideo(video);
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          if (preset === "play-once" && video.__neuformVideoPlayed === true) return;
          playVideo(video);
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.35 });
    if (preset === "play-once") {
      video.addEventListener("ended", function () {
        video.__neuformVideoPlayed = true;
      }, { once: true });
    }
    observer.observe(video);
  }
  function setupVideos() {
    document.querySelectorAll("video[data-neuform-video-preset]").forEach(setupVideo);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupVideos);
  } else {
    setupVideos();
  }
})();<\/script></body></html>`;var sf=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VALENCE CORE | Kinetic Induction</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"><\/script>

    <!-- Scripts -->
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
</head>
<body class="bg-neutral-950 text-neutral-50 h-screen w-screen overflow-hidden font-sans selection:bg-cyan-500/30 selection:text-cyan-50 flex flex-col relative antialiased">

    <!-- Ambient WebGL Background -->
    <canvas id="bg-canvas" class="absolute inset-0 w-full h-full z-0 opacity-60 pointer-events-none" aria-hidden="true"></canvas>

    <!-- Overlay Vignette for depth -->
    <div class="absolute inset-0 z-0 pointer-events-none" style="background: radial-gradient(circle at center, transparent 0%, rgba(10,10,10,0.8) 100%);"></div>

    <!-- Navigation -->
    <nav class="absolute top-0 w-full flex justify-between items-center px-6 py-6 z-20" style="opacity: 0; transform: translateY(-20px);" id="main-nav">
        <div class="flex items-center gap-2">
            <iconify-icon icon="solar:atom-linear" class="text-cyan-500 text-xl" style="stroke-width: 1.5px;"></iconify-icon>
            <span class="font-medium text-sm tracking-tight text-neutral-200">VALENCE SYSTEM</span>
        </div>
        
        <!-- Premium Border Gradient Pill -->
        <div class="hidden sm:flex relative p-[1px] rounded-full overflow-hidden items-center justify-center cursor-pointer group transition-transform duration-300 hover:scale-105">
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/50 via-neutral-500/10 to-transparent rounded-full group-hover:from-cyan-500/80 transition-colors duration-500"></div>
            <div class="relative bg-neutral-950 rounded-full px-5 py-2 flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-cyan-500" style="box-shadow: 0 0 8px rgba(6, 182, 212, 0.8);"></div>
                <span class="text-xs font-medium tracking-wide text-neutral-300">Induction Active</span>
            </div>
        </div>
    </nav>

    <!-- Main Content Stage -->
    <main class="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 w-full h-full max-w-4xl mx-auto">
        
        <div class="mb-8 flex flex-col items-center" id="intro-tags">
            <div class="font-mono font-medium text-xs tracking-[0.3em] uppercase text-cyan-500 mb-6" style="opacity: 0; transform: translateY(12px);" id="tag-text">
                SYS 12 // Kinetic Pulse
            </div>
            
            <h1 class="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[1.1] text-neutral-50" data-split>
                Command the momentum.
            </h1>
            <p class="mt-6 text-sm sm:text-base text-neutral-400 max-w-md font-normal leading-relaxed" data-split>
                Initialize the valence induction loop. The kinetic perimeter is optimized and standing by for sequence execution.
            </p>
        </div>

        <!-- WebGL Button Component -->
        <div class="mt-10 relative flex justify-center w-full" id="btn-container" style="opacity: 0; transform: scale(0.92);">
            <button class="relative flex items-center justify-center w-[280px] h-[96px] bg-transparent cursor-pointer rounded-[18px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 group" id="btn" type="button" style="transition: transform .22s cubic-bezier(.34, 1.4, .5, 1);" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'" onmousedown="this.style.transform='translateY(1px) scale(.99)'" onmouseup="this.style.transform='translateY(-2px)'">
                <canvas id="btn-gl" aria-hidden="true" class="absolute inset-0 w-full h-full block rounded-[18px]"></canvas>
                <span class="relative z-10 pointer-events-none font-medium text-sm tracking-[0.3em] indent-[0.3em] text-[#e0f7f8]" style="text-shadow: 0 0 12px rgba(0, 210, 255, .6), 0 1px 4px rgba(0, 0, 0, .8);">VALENCE CORE</span>
            </button>
        </div>

        <p class="mt-8 text-xs text-neutral-500 tracking-wide font-normal" style="opacity: 0; transform: translateY(12px);" id="note-text">
            Hover to trigger neural arcs, click to unleash a synchronized valence discharge.
        </p>

    </main>

    <script>
        // --- GSAP Animations ---
        document.addEventListener("DOMContentLoaded", () => {
            // Masked Text Splitter
            document.querySelectorAll('[data-split]').forEach(el => {
                const text = el.innerText;
                el.innerHTML = '';
                text.split(' ').forEach(word => {
                    if (word.trim() === '') return;
                    const wrapper = document.createElement('span');
                    wrapper.style.display = 'inline-block';
                    wrapper.style.overflow = 'hidden';
                    wrapper.style.verticalAlign = 'top';
                    wrapper.style.marginRight = '0.25em';
                    wrapper.style.paddingBottom = '0.1em';

                    const inner = document.createElement('span');
                    inner.style.display = 'inline-block';
                    inner.style.transform = 'translateY(100%)';
                    inner.style.opacity = '0';
                    inner.className = 'mask-target';
                    inner.innerText = word;

                    wrapper.appendChild(inner);
                    el.appendChild(wrapper);
                });
            });

            const tl = gsap.timeline();

            // Nav Entrance
            tl.to("#main-nav", { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 });

            // Tag Entrance
            tl.to("#tag-text", { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");

            // Text Reveal
            tl.to(".mask-target", {
                y: "0%",
                opacity: 1,
                duration: 0.8,
                stagger: 0.04,
                ease: "power3.out"
            }, "-=0.4");

            // Button Flicker Entrance
            tl.to("#btn-container", {
                keyframes: {
                    "0%":   { opacity: 0, scale: 0.92 },
                    "9%":   { opacity: 0.85 },
                    "15%":  { opacity: 0.12 },
                    "24%":  { opacity: 0.92 },
                    "31%":  { opacity: 0.35 },
                    "44%":  { opacity: 1, scale: 1.015 },
                    "100%": { opacity: 1, scale: 1 }
                },
                duration: 1.15,
                ease: "none"
            }, "-=0.2");

            // Note Entrance
            tl.to("#note-text", { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.5");
        });

        // --- Core WebGL Logic ---
        (function () {
            const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            
            function compileShader(gl, type, src) {
                const s = gl.createShader(type);
                gl.shaderSource(s, src);
                gl.compileShader(s);
                if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
                    console.error('shader compile failed:', gl.getShaderInfoLog(s));
                }
                return s;
            }

            function createProgram(gl, vsSrc, fsSrc) {
                const prog = gl.createProgram();
                gl.attachShader(prog, compileShader(gl, gl.VERTEX_SHADER, vsSrc));
                gl.attachShader(prog, compileShader(gl, gl.FRAGMENT_SHADER, fsSrc));
                gl.linkProgram(prog);
                if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
                    console.error('program link failed:', gl.getProgramInfoLog(prog));
                }
                return prog;
            }

            const VS = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';

            // --- 1. Ambient Background Canvas ---
            function initBackgroundGL() {
                const canvas = document.getElementById('bg-canvas');
                const gl = canvas.getContext('webgl', { alpha: false, antialias: false });
                if (!gl) return;

                const FS_BG = \`
                    precision highp float;
                    uniform vec2 u_res;
                    uniform float u_time;
                    
                    float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
                    float noise(vec2 p){
                        vec2 i=floor(p), f=fract(p);
                        vec2 u=f*f*(3.0-2.0*f);
                        return mix(mix(hash(i),hash(i+vec2(1.,0.)),u.x),
                                   mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),u.x),u.y);
                    }
                    float fbm(vec2 p){
                        float v=0.0; float a=0.5;
                        for(int i=0;i<4;i++){ v+=a*noise(p); p=p*2.05+vec2(9.7,3.1); a*=0.5; }
                        return v;
                    }
                    void main(){
                        vec2 uv = gl_FragCoord.xy / u_res.y;
                        float t = u_time * 0.1;
                        
                        float n1 = fbm(uv * 1.5 + vec2(t * 0.2, t * 0.1));
                        float n2 = fbm(uv * 2.0 - vec2(t * 0.15, -t * 0.2) + n1);
                        
                        vec3 baseCol = vec3(0.039, 0.039, 0.039);
                        // Restyled to Deep Cyan Highlight
                        vec3 highlightCol = vec3(0.01, 0.08, 0.12);
                        
                        vec3 col = mix(baseCol, highlightCol, n2 * 0.4);
                        
                        vec2 grid = fract(uv * 20.0);
                        float line = smoothstep(0.95, 1.0, max(grid.x, grid.y));
                        col += vec3(0.015) * line * (1.0 - n1);
                        
                        gl_FragColor = vec4(col, 1.0);
                    }
                \`;

                const prog = createProgram(gl, VS, FS_BG);
                gl.useProgram(prog);

                const buf = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, buf);
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 3,-1, -1,3]), gl.STATIC_DRAW);
                const locP = gl.getAttribLocation(prog, 'p');
                gl.enableVertexAttribArray(locP);
                gl.vertexAttribPointer(locP, 2, gl.FLOAT, false, 0, 0);

                const uRes = gl.getUniformLocation(prog, 'u_res');
                const uTime = gl.getUniformLocation(prog, 'u_time');

                function resize() {
                    const dpr = Math.min(window.devicePixelRatio || 1, 2);
                    const w = Math.round(canvas.clientWidth * dpr);
                    const h = Math.round(canvas.clientHeight * dpr);
                    if (canvas.width !== w || canvas.height !== h) {
                        canvas.width = w; canvas.height = h;
                        gl.viewport(0, 0, w, h);
                    }
                }
                window.addEventListener('resize', resize);
                resize();

                function render(now) {
                    resize();
                    gl.uniform2f(uRes, canvas.width, canvas.height);
                    gl.uniform1f(uTime, reduced ? 0 : now / 1000);
                    gl.drawArrays(gl.TRIANGLES, 0, 3);
                    requestAnimationFrame(render);
                }
                requestAnimationFrame(render);
            }

            // --- 2. Button WebGL (Remixed to Electric Cyan & Emerald) ---
            function initButtonGL() {
                const btn = document.getElementById('btn');
                const canvas = document.getElementById('btn-gl');
                const gl = canvas.getContext('webgl', { alpha: false, antialias: true });
                if (!gl) { 
                    btn.style.background = '#062630';
                    btn.style.boxShadow = '0 0 0 2px #00f2fe, 0 0 24px rgba(0, 242, 254, .5)';
                    return; 
                }

                const FS_BTN = [
                    'precision highp float;',
                    'uniform vec2 u_res;',
                    'uniform float u_time;',
                    'uniform float u_arcs;',
                    'uniform float u_flash;',
                    'float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}',
                    'float noise(vec2 p){',
                    '  vec2 i=floor(p), f=fract(p);',
                    '  vec2 u=f*f*(3.0-2.0*f);',
                    '  return mix(mix(hash(i),hash(i+vec2(1.,0.)),u.x),',
                    '             mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),u.x),u.y);',
                    '}',
                    'float fbm(vec2 p){',
                    '  float v=0.0; float a=0.5;',
                    '  for(int i=0;i<4;i++){ v+=a*noise(p); p=p*2.05+vec2(9.7,3.1); a*=0.5; }',
                    '  return v;',
                    '}',
                    'float sdRBox(vec2 p, vec2 b, float r){',
                    '  vec2 q = abs(p) - b + r;',
                    '  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;',
                    '}',
                    'void main(){',
                    '  vec2 p = (gl_FragCoord.xy - 0.5 * u_res) / u_res.y;',
                    '  float ar = u_res.x / u_res.y;',
                    '  vec2 hs = vec2(ar * 0.5 - 0.2, 0.5 - 0.2);',
                    '  float d = sdRBox(p, hs, 0.14);',
                    '  float t = u_time;',
                    '  float hover = clamp(u_arcs / 6.0, 0.0, 1.0);',
                    '  vec3 col = vec3(0.039, 0.039, 0.039);',
                    '  float plate = 1.0 - smoothstep(-0.004, 0.004, d);',
                    '  vec3 plateCol = vec3(0.04, 0.05, 0.055);',
                    '  plateCol += vec3(0.014, 0.022, 0.035) * fbm(p * 9.0);',
                    '  plateCol += vec3(0.0, 0.25, 0.3) * exp(d * 9.0) * (0.25 + hover * 0.6);',
                    '  col = mix(col, plateCol, plate);',
                    '  col *= 1.0 + 0.5 * exp(-max(d, 0.0) * 16.0) * (1.0 - plate);',
                    '  float a = atan(p.y, p.x);',
                    '  vec3 arcCol = vec3(0.0);',
                    '  for (int i = 0; i < 6; i++) {',
                    '    float fi = float(i);',
                    '    float w = clamp(u_arcs - fi, 0.0, 1.0);',
                    '    float n1 = fbm(vec2(a * 2.4 + fi * 11.3, t * (1.6 + fi * 0.27) + fi * 53.1));',
                    '    float off = (n1 - 0.5) * (0.11 + u_flash * 0.1);',
                    '    float seg = smoothstep(0.35, 0.75, noise(vec2(a * 1.8 + fi * 7.7, t * (0.9 + fi * 0.13) + fi * 19.0)));',
                    '    seg = 0.3 + 0.7 * seg;',
                    '    float g = 0.0042 / (abs(d + off) + 0.006);',
                    // Remixed with bright cyan/teal and emerald glow profile
                    '    arcCol += (vec3(0.0, 0.75, 0.9) * g + vec3(0.6, 1.0, 0.95) * g * g * 0.55) * w * seg;',
                    '  }',
                    '  float outerMask = 1.0 - smoothstep(0.04, 0.15, d);',
                    '  col += arcCol * (0.6 + 0.4 * hover) * outerMask;',
                    '  float ring = 0.006 / (abs(d) + 0.006);',
                    '  col += vec3(0.8, 0.98, 1.0) * ring * u_flash * 1.5 * outerMask;',
                    '  col += vec3(0.7, 0.95, 1.0) * u_flash * 0.16 * outerMask;',
                    '  gl_FragColor = vec4(col, 1.0);',
                    '}'
                ].join('\\n');

                const prog = createProgram(gl, VS, FS_BTN);
                gl.useProgram(prog);

                const buf = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, buf);
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 3,-1, -1,3]), gl.STATIC_DRAW);
                const locP = gl.getAttribLocation(prog, 'p');
                gl.enableVertexAttribArray(locP);
                gl.vertexAttribPointer(locP, 2, gl.FLOAT, false, 0, 0);

                const uRes = gl.getUniformLocation(prog, 'u_res');
                const uTime = gl.getUniformLocation(prog, 'u_time');
                const uArcs = gl.getUniformLocation(prog, 'u_arcs');
                const uFlash = gl.getUniformLocation(prog, 'u_flash');

                function resize() {
                    const dpr = Math.min(window.devicePixelRatio || 1, 2);
                    const w = Math.max(1, Math.round(canvas.clientWidth * dpr));
                    const h = Math.max(1, Math.round(canvas.clientHeight * dpr));
                    if (canvas.width !== w || canvas.height !== h) {
                        canvas.width = w; canvas.height = h;
                        gl.viewport(0, 0, w, h);
                    }
                }
                window.addEventListener('resize', resize);
                resize();

                let arcs = 2.4, arcsTarget = 2.4, flash = 0, crawl = 0;
                let last = performance.now();

                btn.addEventListener('mouseenter', () => arcsTarget = 5.8);
                btn.addEventListener('mouseleave', () => arcsTarget = 2.4);
                btn.addEventListener('focus', () => arcsTarget = 5.8);
                btn.addEventListener('blur', () => arcsTarget = 2.4);
                btn.addEventListener('click', () => flash = 1);

                function frame(now) {
                    const dt = Math.min(0.05, (now - last) / 1000);
                    last = now;
                    arcs += (arcsTarget - arcs) * Math.min(1, dt * 5);
                    flash *= Math.exp(-3.6 * dt);
                    crawl += dt * (0.6 + (arcs / 6) * 1.1 + flash * 2.0);
                    resize();
                    gl.uniform2f(uRes, canvas.width, canvas.height);
                    gl.uniform1f(uTime, reduced ? 3.0 : crawl);
                    gl.uniform1f(uArcs, arcs);
                    gl.uniform1f(uFlash, flash);
                    gl.drawArrays(gl.TRIANGLES, 0, 3);
                    requestAnimationFrame(frame);
                }
                requestAnimationFrame(frame);
            }

            initBackgroundGL();
            initButtonGL();
        })();
    <\/script>
</body>
</html>`;var cf=`<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vanguard Labs \u2014 Dimensional Architecture</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap" rel="stylesheet">
    
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="bg-[#050505] text-gray-100 font-sans antialiased overflow-hidden selection:bg-cyan-500/20 selection:text-cyan-100" style="font-family: 'Inter', sans-serif;">

    <!-- WebGL Canvas Container -->
    <canvas id="webgl-canvas" class="fixed inset-0 w-full h-full pointer-events-none z-[-30]"></canvas>

    <!-- Technical Grid Overlay (Dark Mode) -->
    <div class="fixed inset-0 w-full h-full pointer-events-none z-[-20] opacity-[0.06]" style="background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.8) 0, rgba(255,255,255,0.8) 1px, transparent 1px, transparent 56px);"></div>

    <!-- Cinematic Grain Overlay (Dark Mode) -->
    <div class="fixed inset-0 w-full h-full pointer-events-none z-[-10] mix-blend-overlay opacity-[0.15]" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>

    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[#050505]/40 backdrop-blur-lg border-b border-white/5 gsap-reveal">
        <a href="#" class="text-sm font-light tracking-wide text-gray-200 hover:text-white transition-colors duration-300 flex items-center gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-[#00FFCC] shadow-[0_0_12px_#00FFCC]"></span>
            Vanguard Labs
        </a>
        
        <div class="hidden md:flex gap-8 text-sm font-extralight text-gray-400">
            <a href="#" class="hover:text-cyan-400 transition-colors duration-300">Framework</a>
            <a href="#" class="hover:text-cyan-400 transition-colors duration-300">Architecture</a>
            <a href="#" class="hover:text-cyan-400 transition-colors duration-300">Modules</a>
            <a href="#" class="hover:text-cyan-400 transition-colors duration-300">Transmission</a>
        </div>

        <button class="md:hidden text-gray-400 hover:text-white transition-colors" aria-label="Menu">
            <iconify-icon icon="solar:hamburger-menu-linear" class="text-2xl" stroke-width="1.5"></iconify-icon>
        </button>
    </nav>

    <!-- Main Content -->
    <main class="relative h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 z-10 pointer-events-none">
        <div class="max-w-2xl pointer-events-auto">
            
            <div class="overflow-hidden mb-6 flex items-center gap-3">
                <span class="relative inline-flex items-center px-3 py-1.5 text-xs font-light text-cyan-300 gsap-reveal-text group z-0">
                    <span class="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 -z-20"></span>
                    <span class="absolute inset-[1px] rounded-full bg-[#0A0A0A]/90 -z-10 backdrop-blur-sm"></span>
                    <iconify-icon icon="solar:augmented-reality-linear" class="mr-2 text-sm" stroke-width="1.5"></iconify-icon>
                    Dimensional Core v4.5
                </span>
            </div>
            
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight text-white mb-8">
                <span class="inline-block overflow-hidden align-top pb-1"><span class="inline-block masked-word font-semibold">Immersive</span></span>
                <span class="inline-block overflow-hidden align-top pb-1"><span class="inline-block masked-word font-semibold">environments,</span></span>
                <br class="hidden md:block">
                <span class="inline-block overflow-hidden align-top pb-1"><span class="inline-block masked-word font-semibold">engineered</span></span>
                <span class="inline-block overflow-hidden align-top pb-1"><span class="inline-block masked-word font-semibold">with</span></span>
                <br class="hidden md:block">
                <span class="inline-block overflow-hidden align-top pb-1">
                    <span class="inline-block masked-word text-transparent bg-clip-text font-semibold" style="background-image: linear-gradient(120deg, #F3F4F6, #9CA3AF); -webkit-background-clip: text;">absolute</span>
                </span>
                <span class="inline-block overflow-hidden align-top pb-1">
                    <span class="inline-block masked-word text-transparent bg-clip-text font-semibold" style="background-image: linear-gradient(120deg, #00FFCC, #7000FF); -webkit-background-clip: text;">precision.</span>
                </span>
            </h1>

            <p class="text-sm md:text-base text-gray-400 max-w-md font-extralight leading-relaxed mb-10 gsap-reveal-text">
                We build boundary-pushing, physics-enabled digital topologies that merge advanced WebGL with sleek brutalism, crafting the next frontier of immersive computing.
            </p>

            <div class="flex flex-col sm:flex-row gap-5 gsap-reveal-text">
                <a href="#" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#050505] bg-white rounded-full hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                    Initialize Directory
                    <iconify-icon icon="solar:arrow-right-linear" class="ml-2 text-lg group-hover:translate-x-1 transition-transform" stroke-width="1.5"></iconify-icon>
                </a>
                <a href="#" class="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-light text-gray-300 rounded-full transition-all duration-300 hover:scale-[1.02] hover:text-white active:scale-[0.98] z-0">
                    <span class="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 group-hover:from-gray-700 group-hover:via-gray-600 group-hover:to-gray-800 transition-colors -z-20"></span>
                    <span class="absolute inset-[1px] rounded-full bg-[#050505]/80 backdrop-blur-md -z-10"></span>
                    Launch Environment
                </a>
            </div>
        </div>
    </main>

    <!-- UI Controls & Indicators -->
    <div class="absolute bottom-0 w-full px-6 py-8 flex justify-between items-end z-10 pointer-events-none gsap-reveal">
        <div class="flex flex-col gap-2">
            <div class="text-xs text-gray-500 font-light tracking-widest uppercase">
                Vector // <span id="coord-display" class="text-cyan-400/80 font-medium tracking-wider">0.0000, 0.0000</span>
            </div>
            
            <!-- Custom Theme Toggle -->
            <div class="flex items-center gap-4 mt-5 pointer-events-auto group cursor-pointer" id="theme-toggle" role="switch" aria-checked="false">
                <span class="text-xs font-light text-gray-500 uppercase tracking-widest group-hover:text-gray-300 transition-colors">Void</span>
                <div class="w-10 h-5 rounded-full bg-gray-800 border border-gray-700 relative transition-all duration-300 flex items-center p-0.5 group-hover:border-gray-500 shadow-inner" id="toggle-track">
                    <div class="w-3.5 h-3.5 rounded-full bg-cyan-400 transform transition-transform duration-300 translate-x-0 shadow-[0_0_8px_#00FFCC]" id="toggle-thumb"></div>
                </div>
                <span class="text-xs font-light text-gray-500 uppercase tracking-widest group-hover:text-gray-300 transition-colors">Aurora</span>
            </div>
        </div>

        <div class="flex flex-col items-center gap-4">
            <span class="text-xs text-gray-500 uppercase tracking-widest font-light" style="writing-mode: vertical-rl;">Descend</span>
            <div class="w-[1px] h-14 bg-gray-800 relative overflow-hidden">
                <div class="scroll-line absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
            </div>
        </div>
    </div>

    <script>
        // --- Dark WebGL Architecture ---
        const initWebGL = () => {
            const canvas = document.getElementById('webgl-canvas');
            if (!canvas) return;

            const renderer = new THREE.WebGLRenderer({ 
                canvas, 
                alpha: true, 
                antialias: false 
            });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
            camera.position.z = 12;

            const uniforms = {
                u_time: { value: 0 },
                u_resolution: { value: new THREE.Vector2() },
                u_color1: { value: new THREE.Color(0.0, 0.8, 0.7) }, // Cyan
                u_color2: { value: new THREE.Color(0.4, 0.0, 0.9) }  // Deep Purple
            };

            const snoiseLogic = \`
                vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
                float snoise(vec2 v){
                    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
                    vec2 i  = floor(v + dot(v, C.yy) );
                    vec2 x0 = v -   i + dot(i, C.xx);
                    vec2 i1;
                    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                    vec4 x12 = x0.xyxy + C.xxzz;
                    x12.xy -= i1;
                    i = mod(i, 289.0);
                    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
                    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                    m = m*m ; m = m*m ;
                    vec3 x = 2.0 * fract(p * C.www) - 1.0;
                    vec3 h = abs(x) - 0.5;
                    vec3 ox = floor(x + 0.5);
                    vec3 a0 = x - ox;
                    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
                    vec3 g;
                    g.x  = a0.x  * x0.x  + h.x  * x0.y;
                    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                    return 130.0 * dot(m, g);
                }
            \`;

            // --- Dark Background Shader Plane ---
            const bgMaterial = new THREE.ShaderMaterial({
                vertexShader: \`void main() { gl_Position = vec4(position, 1.0); }\`,
                fragmentShader: \`
                    uniform float u_time;
                    uniform vec2 u_resolution;
                    uniform vec3 u_color1;
                    uniform vec3 u_color2;
                    \${snoiseLogic}
                    void main() {
                        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
                        uv.x *= u_resolution.x / u_resolution.y;

                        vec3 baseColor = vec3(0.02, 0.02, 0.03);
                        vec2 st = uv * 0.5;
                        st += vec2(snoise(st + u_time * 0.04), snoise(st - u_time * 0.04)) * 0.4;

                        float beam = smoothstep(0.2, 0.9, snoise(vec2(st.x + st.y * 2.0 - u_time * 0.1, u_time * 0.03)));
                        vec3 glow = mix(u_color1, u_color2, snoise(uv * 2.0 + u_time * 0.15) * 0.5 + 0.5);

                        float dist = distance(gl_FragCoord.xy / u_resolution.xy, vec2(0.5));
                        float vignette = smoothstep(1.5, 0.1, dist);
                        
                        vec3 edgeColor = vec3(0.01, 0.01, 0.015);
                        vec3 colorGlow = mix(baseColor, glow, beam * 0.6);

                        gl_FragColor = vec4(mix(edgeColor, colorGlow, vignette), 1.0);
                    }
                \`,
                uniforms,
                depthWrite: false,
                depthTest: false
            });

            const bgMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), bgMaterial);
            bgMesh.position.z = -15;
            scene.add(bgMesh);

            // --- Dark Glass Sphere Shader ---
            const glassMaterial = new THREE.ShaderMaterial({
                vertexShader: \`
                    varying vec3 vNormal;
                    void main() {
                        vNormal = normalize(normalMatrix * normal);
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                \`,
                fragmentShader: \`
                    uniform float u_time;
                    uniform vec2 u_resolution;
                    uniform vec3 u_color1;
                    uniform vec3 u_color2;
                    varying vec3 vNormal;
                    \${snoiseLogic}
                    void main() {
                        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
                        uv += vNormal.xy * 0.2; 
                        uv.x *= u_resolution.x / u_resolution.y;

                        vec3 baseColor = vec3(0.04, 0.04, 0.06);
                        vec2 st = uv * 0.6;
                        st += vec2(snoise(st + u_time * 0.06), snoise(st - u_time * 0.06)) * 0.35;

                        float beam = smoothstep(0.1, 0.9, snoise(vec2(st.x + st.y * 1.8 - u_time * 0.12, u_time * 0.02)));
                        vec3 glow = mix(u_color1, u_color2, snoise(uv * 1.8 + u_time * 0.12) * 0.5 + 0.5);

                        float fresnel = dot(vec3(0.0, 0.0, 1.0), vNormal);
                        fresnel = clamp(1.0 - fresnel, 0.0, 1.0);
                        fresnel = pow(fresnel, 2.5);

                        vec3 finalColor = mix(baseColor, glow, clamp((beam * 0.5) + (fresnel * 0.8), 0.0, 1.0));
                        gl_FragColor = vec4(finalColor, 0.95);
                    }
                \`,
                uniforms,
                transparent: true
            });

            const sphereGeo = new THREE.SphereGeometry(1, 64, 64);
            const spheres = [];

            // Remixed Coordinates and scales
            const sphereData = [
                { scale: 4.2, x: 6.5, y: -1.2, z: -1.5, speed: 0.002 },   
                { scale: 1.8, x: -6.0, y: -4.0, z: 2.5, speed: 0.004 },  
                { scale: 1.1, x: -4.5, y: 4.2, z: -2.0, speed: 0.005 },  
                { scale: 0.75, x: 3.0, y: 5.5, z: 4.0, speed: 0.008 }      
            ];

            sphereData.forEach(data => {
                const mesh = new THREE.Mesh(sphereGeo, glassMaterial);
                mesh.scale.set(data.scale, data.scale, data.scale);
                mesh.position.set(data.x, data.y, data.z);
                scene.add(mesh);
                spheres.push({
                    mesh,
                    baseY: data.y,
                    speed: data.speed,
                    offset: Math.random() * Math.PI * 2
                });
            });

            // --- Viewport Dynamics ---
            let mouseX = 0, mouseY = 0;
            const windowHalfX = window.innerWidth / 2;
            const windowHalfY = window.innerHeight / 2;
            const coordDisplay = document.getElementById('coord-display');

            document.addEventListener('mousemove', (event) => {
                mouseX = (event.clientX - windowHalfX);
                mouseY = (event.clientY - windowHalfY);
                if(coordDisplay) {
                    // Updating coordinates display format
                    coordDisplay.innerText = \`\${(event.clientX / window.innerWidth).toFixed(4)}, \${(event.clientY / window.innerHeight).toFixed(4)}\`;
                }
            });

            const resize = () => {
                const width = window.innerWidth;
                const height = window.innerHeight;
                renderer.setSize(width, height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();

                const dist = camera.position.z - bgMesh.position.z;
                const vFov = camera.fov * Math.PI / 180;
                const planeHeight = 2 * Math.tan(vFov / 2) * dist;
                bgMesh.scale.set(planeHeight * camera.aspect / 2, planeHeight / 2, 1);
                
                uniforms.u_resolution.value.set(width, height);
            };

            window.addEventListener('resize', resize);
            resize();

            let isAurora = false;
            const themeToggle = document.getElementById('theme-toggle');
            
            themeToggle.addEventListener('click', () => {
                isAurora = !isAurora;
                themeToggle.setAttribute('aria-checked', isAurora.toString());
                const thumb = document.getElementById('toggle-thumb');
                
                if(isAurora) {
                    thumb.style.transform = 'translateX(20px)';
                    thumb.style.backgroundColor = '#FF007F'; // Neon Pink
                    thumb.style.boxShadow = '0 0 8px #FF007F';
                    gsap.to(uniforms.u_color1.value, { r: 1.0, g: 0.0, b: 0.5, duration: 1.5 });
                    gsap.to(uniforms.u_color2.value, { r: 1.0, g: 0.3, b: 0.0, duration: 1.5 });
                } else {
                    thumb.style.transform = 'translateX(0px)';
                    thumb.style.backgroundColor = '#00FFCC'; // Cyan
                    thumb.style.boxShadow = '0 0 8px #00FFCC';
                    gsap.to(uniforms.u_color1.value, { r: 0.0, g: 0.8, b: 0.7, duration: 1.5 });
                    gsap.to(uniforms.u_color2.value, { r: 0.4, g: 0.0, b: 0.9, duration: 1.5 });
                }
            });

            const clock = new THREE.Clock();
            const animate = () => {
                requestAnimationFrame(animate);
                const time = clock.getElapsedTime();
                
                uniforms.u_time.value = time;

                camera.position.x += (mouseX * 0.005 - camera.position.x) * 0.05;
                camera.position.y += (-mouseY * 0.005 - camera.position.y) * 0.05;
                camera.lookAt(scene.position);

                spheres.forEach(s => {
                    s.mesh.position.y = s.baseY + Math.sin(time * s.speed * 120 + s.offset) * 0.5;
                    s.mesh.rotation.x = time * s.speed * 18;
                    s.mesh.rotation.y = time * s.speed * 24;
                });

                renderer.render(scene, camera);
            };

            animate();
        };

        const initUI = () => {
            gsap.registerPlugin(ScrollTrigger);

            const tl = gsap.timeline({ 
                scrollTrigger: {
                    trigger: "main",
                    start: "top 80%",
                },
                defaults: { ease: "power3.out" } 
            });

            gsap.set('.gsap-reveal-text', { y: 24, opacity: 0 });
            gsap.set('.gsap-reveal', { opacity: 0 });
            gsap.set('.masked-word', { y: "110%" });

            tl.to('.gsap-reveal', { opacity: 1, duration: 1.2, delay: 0.2 })
              .to('.gsap-reveal-text', { y: 0, opacity: 1, duration: 1.0, stagger: 0.12 }, "-=1.0")
              .to('.masked-word', { y: "0%", duration: 1.0, stagger: 0.05 }, "-=0.8");

            gsap.to('.scroll-line', {
                yPercent: 150,
                opacity: 0,
                repeat: -1,
                duration: 2.2,
                ease: "power2.inOut",
                onRepeat: function() { gsap.set(this.targets()[0], { yPercent: -100, opacity: 1 }); }
            });
        };

        document.addEventListener('DOMContentLoaded', () => {
            initWebGL();
            initUI();
        });
    <\/script>

</body>
</html>`;var df=`<!doctype html>
<html lang="en"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vertex 9 Global Data</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&amp;display=swap" rel="stylesheet">
</head>
<body style="font-family: 'Inter', sans-serif; background-color: #0E100F; margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 1rem;" class="antialiased selection:bg-white/20 text-white">

    <!-- Border Gradient Wrapper -->
    <div class="relative w-full max-w-[1440px] p-[1px] rounded-sm" style="background: linear-gradient(145deg, rgba(200,185,160,0.2) 0%, rgba(200,185,160,0.02) 40%, rgba(255,255,255,0) 100%);">
        
        <!-- Main Container -->
        <div class="relative w-full bg-[#0E100F] grid grid-cols-1 lg:grid-cols-3 min-h-[90vh] lg:min-h-[850px] border overflow-hidden border-white/5">
            
            <!-- Global Subtle Grain/Texture Overlay -->
            <div class="absolute inset-0 pointer-events-none z-40 mix-blend-overlay opacity-30" style="background-image: repeating-linear-gradient(45deg, rgba(200,185,160,0.05) 0px, rgba(200,185,160,0.05) 1px, transparent 1px, transparent 12px);"></div>

            <!-- Corner Accents -->
            <div class="absolute -top-[1px] -left-[1px] w-5 h-5 border-t border-l border-[#C8B9A0]/40 z-50 pointer-events-none"></div>
            <div class="absolute -top-[1px] -right-[1px] w-5 h-5 border-t border-r border-[#C8B9A0]/40 z-50 pointer-events-none"></div>
            <div class="absolute -bottom-[1px] -left-[1px] w-5 h-5 border-b border-l border-[#C8B9A0]/40 z-50 pointer-events-none"></div>
            <div class="absolute -bottom-[1px] -right-[1px] w-5 h-5 border-b border-r border-[#C8B9A0]/40 z-50 pointer-events-none"></div>

            <!-- Panel 1: Elegant Cream -->
            <div class="relative p-8 lg:p-12 flex flex-col justify-between overflow-hidden" style="background-color: #F4F1EB;">
                <div class="relative z-10">
                    <h1 class="text-3xl lg:text-4xl tracking-tight font-normal uppercase text-[#1C1F1D] leading-[1.15] mask-reveal pr-4">
                        REDEFINING THE SCALE OF MODERN CLOUD COMPUTING
                    </h1>
                    <div class="mt-8 flex items-start gap-3 text-[#1C1F1D]/80">
                        <iconify-icon icon="solar:monitor-linear" style="stroke-width: 1.5;" class="text-lg mt-0.5"></iconify-icon>
                        <p class="text-sm font-light max-w-[240px] leading-relaxed">
                            A network designed to elevate your stack, offering 99.99% uptime and 24/7 unwavering security.
                        </p>
                    </div>
                </div>
                
                <!-- Geometric Motif Grid -->
                <div id="motif-container" class="grid grid-cols-4 gap-6 mt-24 text-[#C8B9A0] opacity-40">
                    <!-- Populated by JS -->
                </div>
            </div>

            <!-- Panel 2: Ambient Dark Canvas -->
            <div class="relative min-h-[450px] lg:min-h-full border-y lg:border-y-0 lg:border-x border-[#C8B9A0]/10" style="background-color: #121413;">
                <!-- WebGL Canvas for flowing water/silk effect -->
                <div id="webgl-canvas" class="absolute inset-0 w-full h-full"></div>
                
                <!-- Inner Depth Shadows -->
                <div class="absolute inset-0 pointer-events-none" style="box-shadow: inset 0 0 120px rgba(14, 16, 15, 0.9);"></div>
                
                <!-- Center Emblem -->
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-20 mix-blend-plus-lighter">
                    <svg viewBox="0 0 100 100" class="w-28 h-28 text-[#D1C5B4] fill-current drop-shadow-[0_0_20px_rgba(200,185,160,0.15)]">
                        <path d="M50 5 L95 50 L50 95 L5 50 Z" fill="none" stroke="currentColor" stroke-width="2"></path>
                        <path d="M50 20 L80 50 L50 80 L20 50 Z" class="opacity-40"></path>
                        <circle cx="50" cy="50" r="6"></circle>
                    </svg>
                </div>
                
                <!-- Bottom Indicator -->
                <div class="absolute bottom-8 left-8 text-[#D1C5B4]/50 flex items-center gap-3 z-20">
                     <iconify-icon icon="solar:shield-check-line-duotone" style="stroke-width: 1.5;" class="text-base"></iconify-icon>
                     <span class="text-xs tracking-widest uppercase font-light">Tier-4 Datacenters</span>
                </div>
            </div>

            <!-- Panel 3: Warm Sand -->
            <div class="relative p-8 lg:p-12 flex flex-col justify-between" style="background-color: #B5AFA2;">
                <div>
                    <div class="flex items-start gap-4 text-[#1C1F1D]">
                        <svg viewBox="0 0 100 100" class="w-8 h-8 flex-shrink-0 fill-current mt-1">
                            <path d="M50 5 L95 50 L50 95 L5 50 Z" fill="none" stroke="currentColor" stroke-width="4"></path>
                            <circle cx="50" cy="50" r="15" class="opacity-60"></circle>
                        </svg>
                        <h2 class="text-3xl lg:text-4xl tracking-tight font-normal uppercase leading-[1.15] mask-reveal">
                            SCALABLE SYSTEMS WITH SUB-MILLISECOND DETAIL
                        </h2>
                    </div>
                    <p class="mt-8 text-sm text-[#1C1F1D]/80 font-light max-w-[240px] leading-relaxed">
                        Every element of our 300-node clusters is crafted to process 50 petabytes without a single fault.
                    </p>
                </div>
                
                <div class="mt-24 text-[#1C1F1D]">
                    <p class="text-xs mb-5 font-normal uppercase tracking-widest text-[#1C1F1D]/70 flex items-center gap-2">
                        <iconify-icon icon="solar:database-linear" style="stroke-width: 1.5;" class="text-base"></iconify-icon>
                        Analytics, storage, and computing
                    </p>
                    <h3 class="text-3xl lg:text-4xl tracking-tight font-normal uppercase leading-[1.15] mask-reveal">
                        AN ENGINE OF GROWTH ACROSS 12 GLOBAL REGIONS
                    </h3>
                </div>
            </div>

        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // 1. Generate SVG Motif Grid for Panel 1
            const motifContainer = document.getElementById('motif-container');
            const svgMarkup = \`
                <svg viewBox="0 0 100 100" class="w-full aspect-square fill-current">
                    <polygon points="50,15 65,40 90,50 65,60 50,85 35,60 10,50 35,40" />
                    <circle cx="50" cy="50" r="8" class="opacity-30" />
                </svg>
            \`;
            // Add 12 instances for a 4x3 grid look
            for(let i=0; i<12; i++) {
                motifContainer.innerHTML += svgMarkup;
            }

            // 2. GSAP Masked Reveal for Elegant Typography
            gsap.registerPlugin(ScrollTrigger);
            const revealElements = document.querySelectorAll('.mask-reveal');
            
            revealElements.forEach(el => {
                const text = el.innerText;
                el.innerHTML = '';
                const words = text.split(' ');
                
                words.forEach(word => {
                    if(word.trim() === '') return;
                    
                    const outer = document.createElement('span');
                    outer.className = 'inline-block overflow-hidden align-bottom mr-[0.25em] pb-1';
                    
                    const inner = document.createElement('span');
                    inner.className = 'inline-block translate-y-[110%] will-change-transform';
                    inner.innerText = word;
                    
                    outer.appendChild(inner);
                    el.appendChild(outer);
                });

                gsap.to(el.querySelectorAll('span > span'), {
                    y: '0%',
                    duration: 1.4,
                    ease: 'power3.out',
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 95%'
                    }
                });
            });

            // 3. Three.js Gentle Flowing Silk/Water Animation
            function initThree() {
                const container = document.getElementById('webgl-canvas');
                if(!container || typeof THREE === 'undefined') return;

                const scene = new THREE.Scene();
                const camera = new THREE.PerspectiveCamera(55, container.clientWidth / container.clientHeight, 0.1, 100);
                camera.position.set(0, -2, 9);

                const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
                renderer.setSize(container.clientWidth, container.clientHeight);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                container.appendChild(renderer.domElement);

                const group = new THREE.Group();
                scene.add(group);

                const numLines = 60;
                const pointsPerLine = 100;
                
                // Elegant warm neutrals
                const colorStart = new THREE.Color('#D1C5B4'); 
                const colorEnd = new THREE.Color('#7A7B76');

                for (let i = 0; i < numLines; i++) {
                    const points = [];
                    const xPos = (i - numLines / 2) * 0.22;
                    for (let j = 0; j < pointsPerLine; j++) {
                        const yPos = (j - pointsPerLine / 2) * 0.2;
                        points.push(new THREE.Vector3(xPos, yPos, 0));
                    }
                    const geometry = new THREE.BufferGeometry().setFromPoints(points);
                    
                    const color = new THREE.Color().lerpColors(colorStart, colorEnd, i / numLines);

                    const material = new THREE.LineBasicMaterial({
                        color: color,
                        transparent: true,
                        opacity: 0.1 + (Math.random() * 0.25),
                        blending: THREE.AdditiveBlending
                    });
                    
                    const line = new THREE.Line(geometry, material);
                    group.add(line);
                }

                // Tilt to create a flowing plane
                group.rotation.x = Math.PI / 3;
                group.rotation.z = -Math.PI / 8;

                const clock = new THREE.Clock();

                function animate() {
                    requestAnimationFrame(animate);
                    const time = clock.getElapsedTime() * 0.4; // Slower, more relaxed pace

                    group.children.forEach((line, i) => {
                        const positions = line.geometry.attributes.position.array;
                        for (let j = 0; j < pointsPerLine; j++) {
                            const idx = j * 3;
                            const x = positions[idx];
                            const y = positions[idx + 1];
                            
                            // Smooth, rolling, gentle waves reminiscent of water or silk
                            const wave1 = Math.sin(y * 1.2 + time + x * 0.8) * 0.8;
                            const wave2 = Math.cos(x * 1.5 - time * 0.8 + y * 0.5) * 0.6;
                            
                            positions[idx + 2] = wave1 + wave2;
                        }
                        line.geometry.attributes.position.needsUpdate = true;
                    });

                    renderer.render(scene, camera);
                }
                animate();

                window.addEventListener('resize', () => {
                    if(container) {
                        camera.aspect = container.clientWidth / container.clientHeight;
                        camera.updateProjectionMatrix();
                        renderer.setSize(container.clientWidth, container.clientHeight);
                    }
                });
            }
            
            initThree();
        });
    <\/script>

</body></html>`;var uf=`<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Void Field</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400&display=swap" rel="stylesheet">
</head>
<body class="antialiased text-purple-200 bg-[#08030c] min-h-screen relative overflow-x-hidden flex items-center justify-center p-4 lg:p-12" style="font-family: 'Inter', sans-serif;">

    <!-- Background decorative text -->
    <div class="fixed top-[-5vh] left-[-10vw] text-[40vw] font-extralight tracking-tight text-purple-400/[0.03] select-none z-0 leading-none">
        042
    </div>

    <!-- Container Lines Directive -->
    <div class="relative w-full max-w-[1100px] mx-auto z-10">
        <!-- Infinite Container Vertical Lines -->
        <div class="absolute top-[-100vh] bottom-[-100vh] left-0 w-px bg-purple-400/10 hidden md:block z-0"></div>
        <div class="absolute top-[-100vh] bottom-[-100vh] right-0 w-px bg-purple-400/10 hidden md:block z-0"></div>
        
        <!-- Container Corner Nodes (6px square) -->
        <div class="absolute top-0 left-[-2.5px] w-[6px] h-[6px] bg-purple-300 border border-purple-800 z-20 hidden md:block"></div>
        <div class="absolute top-0 right-[-2.5px] w-[6px] h-[6px] bg-purple-300 border border-purple-800 z-20 hidden md:block"></div>
        <div class="absolute bottom-0 left-[-2.5px] w-[6px] h-[6px] bg-purple-300 border border-purple-800 z-20 hidden md:block"></div>
        <div class="absolute bottom-0 right-[-2.5px] w-[6px] h-[6px] bg-purple-300 border border-purple-800 z-20 hidden md:block"></div>

        <!-- Thin 16px Frame Brackets -->
        <div class="absolute top-[-16px] left-[-16px] w-[16px] h-[16px] border-t border-l border-purple-400/30 hidden md:block z-20"></div>
        <div class="absolute top-[-16px] right-[-16px] w-[16px] h-[16px] border-t border-r border-purple-400/30 hidden md:block z-20"></div>
        <div class="absolute bottom-[-16px] left-[-16px] w-[16px] h-[16px] border-b border-l border-purple-400/30 hidden md:block z-20"></div>
        <div class="absolute bottom-[-16px] right-[-16px] w-[16px] h-[16px] border-b border-r border-purple-400/30 hidden md:block z-20"></div>

        <div class="py-12 lg:py-24 flex justify-center w-full">
            
            <!-- Main Hardware Housing (2.3:1 Aspect Ratio on lg) -->
            <div class="relative w-full lg:aspect-[2.3/1] rounded-[3rem] bg-[#130a1c] shadow-[0_10px_40px_rgba(0,0,0,0.8),_0_20px_80px_rgba(0,0,0,0.6),inset_0_0_0_1px_rgba(216,180,254,0.15)] p-3 lg:p-5 flex flex-col">
                
                <!-- Premium Gradient Bezel Edge -->
                <div class="absolute inset-0 rounded-[3rem] shadow-[inset_0_2px_4px_rgba(216,180,254,0.05)] pointer-events-none z-10 border border-transparent" style="background: linear-gradient(135deg, rgba(216,180,254,0.15) 0%, rgba(216,180,254,0.02) 40%, transparent 100%) border-box; -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0); -webkit-mask-composite: destination-out; mask-composite: exclude;"></div>

                <!-- Hardware Details (Screws/Rivets top/bottom) -->
                <div class="absolute top-3 left-1/4 w-3 h-3 rounded-full bg-black/90 shadow-[inset_0_1px_1px_rgba(216,180,254,0.2)] z-20"></div>
                <div class="absolute top-3 right-1/4 w-3 h-3 rounded-full bg-black/90 shadow-[inset_0_1px_1px_rgba(216,180,254,0.2)] z-20"></div>
                <div class="absolute bottom-3 left-1/4 w-3 h-3 rounded-full bg-black/90 shadow-[inset_0_1px_1px_rgba(216,180,254,0.2)] z-20"></div>
                <div class="absolute bottom-3 right-1/4 w-3 h-3 rounded-full bg-black/90 shadow-[inset_0_1px_1px_rgba(216,180,254,0.2)] z-20"></div>

                <!-- Inner Housing / Shadow Box -->
                <div class="relative rounded-[2.5rem] bg-[#0a0510] overflow-hidden shadow-[inset_0_20px_50px_rgba(0,0,0,0.9)] border border-purple-400/5 z-10 flex-grow flex flex-col" style="background-image: repeating-linear-gradient(to right, #0a0510, #0a0510 6px, #10081a 6px, #10081a 10px);">
                    
                    <!-- Screen Area -->
                    <div class="relative m-4 lg:m-8 rounded-xl bg-[#0a0510] shadow-[inset_0_5px_20px_rgba(0,0,0,1)] overflow-hidden flex flex-col flex-grow min-h-[400px] lg:min-h-0">
                        
                        <!-- Premium Gradient Screen Border -->
                        <div class="absolute inset-0 rounded-xl pointer-events-none border border-transparent z-30" style="background: linear-gradient(180deg, rgba(216,180,254,0.15) 0%, rgba(216,180,254,0.02) 25%, rgba(0,0,0,0.8) 100%) border-box; -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0); -webkit-mask-composite: destination-out; mask-composite: exclude;"></div>

                        <!-- WebGL Dot Matrix Layer -->
                        <canvas id="webgl-canvas" class="absolute inset-0 w-full h-full opacity-80 mix-blend-screen pointer-events-none z-0"></canvas>

                        <!-- Screen Horizontal Corrugation Overlay -->
                        <div class="absolute inset-0 pointer-events-none z-10 opacity-40" style="background-image: repeating-linear-gradient(to bottom, transparent, transparent 18px, rgba(0,0,0,0.9) 18px, rgba(0,0,0,0.9) 20px);"></div>

                        <!-- Faint Geometric Wireframe -->
                        <svg class="absolute right-0 top-0 h-full w-2/3 opacity-10 pointer-events-none z-10 stroke-purple-500" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M400 50 L550 150 L550 350 L400 450 L250 350 L250 150 Z" stroke-width="2"></path>
                            <path d="M400 50 L400 250 M250 150 L400 250 M550 150 L400 250 M400 450 L400 250 M250 350 L400 250 M550 350 L400 250" stroke-width="1"></path>
                            <circle cx="550" cy="150" r="40" stroke-width="2"></circle>
                        </svg>

                        <!-- Content Container -->
                        <div class="relative z-20 flex flex-col h-full text-purple-100 w-full">
                            
                            <!-- Top Section -->
                            <div class="flex items-center px-6 lg:px-12 py-6 border-b border-purple-400/10 bg-gradient-to-r from-transparent to-black/60">
                                <div class="flex items-center gap-4 border-r border-purple-400/20 pr-8">
                                    <iconify-icon icon="solar:arrow-right-up-linear" class="text-4xl text-purple-400" style="stroke-width: 1.5px;"></iconify-icon>
                                    <div class="flex items-center gap-2">
                                        <div class="w-1 h-6 bg-purple-400/50"></div>
                                        <span class="text-3xl font-extralight tracking-tight">V-72</span>
                                    </div>
                                </div>
                                <div class="pl-8 text-xs font-normal uppercase tracking-widest opacity-70 leading-tight">
                                    Void<br>Protocol
                                </div>
                            </div>

                            <!-- Middle Section (Data Band) -->
                            <div class="bg-purple-500/[0.03] text-purple-100 border-b border-purple-400/10 flex flex-col lg:flex-row relative backdrop-blur-sm">
                                
                                <!-- Inner layout grid -->
                                <div class="grid grid-cols-1 lg:grid-cols-12 w-full">
                                    <!-- Column 1: Core Telemetry -->
                                    <div class="lg:col-span-3 px-6 lg:px-12 py-6 flex items-center border-b lg:border-b-0 lg:border-r border-purple-400/10">
                                        <h2 class="text-3xl lg:text-4xl font-extralight tracking-tight leading-none masked-reveal">
                                            Quantum<br>Metric
                                        </h2>
                                    </div>

                                    <!-- Column 2: Date -->
                                    <div class="lg:col-span-3 px-6 lg:px-8 py-6 flex items-center border-b lg:border-b-0 lg:border-r border-purple-400/10">
                                        <div class="flex items-start gap-1">
                                            <span class="text-4xl lg:text-5xl font-extralight tracking-tight">NET.42</span>
                                            <span class="text-sm font-extralight mt-1 opacity-70">.8192</span>
                                        </div>
                                        <iconify-icon icon="solar:double-alt-arrow-right-linear" class="ml-auto text-2xl opacity-40" style="stroke-width: 1.5px;"></iconify-icon>
                                    </div>

                                    <!-- Column 3: Data Uplink -->
                                    <div class="lg:col-span-3 px-6 lg:px-8 py-6 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-purple-400/10">
                                        <div class="text-4xl lg:text-5xl font-extralight tracking-tight masked-reveal">72</div>
                                        <div class="text-xs font-normal uppercase tracking-widest mt-1 opacity-70">Link Status</div>
                                    </div>

                                    <!-- Column 4: Cycles -->
                                    <div class="lg:col-span-3 px-6 lg:px-8 py-6 flex flex-col justify-center relative">
                                        <div class="flex items-center gap-3">
                                            <iconify-icon icon="solar:atom-linear" class="text-2xl opacity-40" style="stroke-width: 1.5px;"></iconify-icon>
                                            <div class="text-4xl lg:text-5xl font-extralight tracking-tight masked-reveal">1.059</div>
                                        </div>
                                        <div class="text-xs font-normal uppercase tracking-widest mt-1 ml-9 opacity-70">Phases</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Bottom Section -->
                            <div class="flex-grow flex items-end px-6 lg:px-12 py-8 lg:py-12 bg-gradient-to-t from-black/80 to-transparent relative">
                                <div class="flex items-end gap-8 w-full">
                                    <div class="text-8xl lg:text-9xl leading-none font-extralight tracking-tight opacity-90 masked-reveal text-purple-100" style="text-shadow: 0px 0px 20px rgba(216,180,254,0.2);">
                                        99
                                    </div>
                                    <div class="mb-4 lg:mb-8 flex flex-col gap-2">
                                        <div class="text-xs font-normal uppercase tracking-widest leading-tight opacity-70">
                                            System<br>Override
                                        </div>
                                        <iconify-icon icon="solar:target-linear" class="text-2xl opacity-50 text-purple-200" style="stroke-width: 1.5px;"></iconify-icon>
                                    </div>
                                </div>

                                <!-- Bottom Edge Detailing -->
                                <div class="absolute bottom-0 left-0 w-full h-4 flex border-t border-purple-400/10">
                                    <div class="w-16 h-full bg-[#0e0716] border-r border-purple-400/10 flex items-center justify-center gap-1">
                                        <div class="w-1 h-1 bg-purple-400/30 rounded-full"></div>
                                        <div class="w-1 h-1 bg-purple-400/30 rounded-full"></div>
                                    </div>
                                    <div class="w-32 h-full bg-purple-400/5 border-r border-purple-400/10"></div>
                                    <!-- Striped hazard area -->
                                    <div class="w-48 h-full border-r border-purple-400/10" style="background-image: repeating-linear-gradient(45deg, rgba(216,180,254,0.05) 0, rgba(216,180,254,0.05) 4px, transparent 4px, transparent 8px);"></div>
                                    <div class="w-16 h-full bg-[#0e0716] border-r border-purple-400/10 flex items-center justify-center gap-1">
                                        <div class="w-1 h-1 bg-purple-400/30 rounded-full"></div>
                                        <div class="w-1 h-1 bg-purple-400/30 rounded-full"></div>
                                    </div>
                                    <div class="flex-grow h-full bg-purple-400/[0.02]"></div>
                                    <div class="w-16 h-full bg-[#0e0716] border-l border-purple-400/10 flex items-center justify-center gap-1">
                                        <div class="w-1 h-1 bg-purple-400/30 rounded-full"></div>
                                        <div class="w-1 h-1 bg-purple-400/30 rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Scripts for WebGL and GSAP -->
    <script>
        // 1. Masked Reveal via GSAP (TranslateY 100% to 0% with power4.out)
        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            const revealElements = document.querySelectorAll('.masked-reveal');
            
            revealElements.forEach(el => {
                const text = el.innerHTML;
                const words = text.split(/<br>|\\s+/).filter(w => w.trim() !== '');
                el.innerHTML = '';
                
                words.forEach((word) => {
                    const wrapper = document.createElement('span');
                    wrapper.className = 'inline-block overflow-hidden align-bottom pb-1 -mb-1 mr-2';
                    
                    const inner = document.createElement('span');
                    inner.className = 'inline-block translate-y-[100%] opacity-0';
                    inner.innerHTML = word;
                    
                    if(text.includes(word + '<br>')) {
                        wrapper.appendChild(inner);
                        el.appendChild(wrapper);
                        el.appendChild(document.createElement('br'));
                    } else {
                        wrapper.appendChild(inner);
                        el.appendChild(wrapper);
                    }
                });

                gsap.to(el.querySelectorAll('span > span'), {
                    y: "0%",
                    opacity: 1,
                    duration: 1.2,
                    ease: "power4.out",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                    }
                });
            });
        });

        // 2. WebGL Dot-Matrix Terminal Shader
        const canvas = document.getElementById('webgl-canvas');
        const gl = canvas.getContext('webgl', { alpha: true, antialias: false });

        if (gl) {
            const resize = () => {
                canvas.width = canvas.clientWidth;
                canvas.height = canvas.clientHeight;
                gl.viewport(0, 0, canvas.width, canvas.height);
            };
            window.addEventListener('resize', resize);
            resize();

            const vertexShaderSource = \`
                attribute vec2 position;
                void main() {
                    gl_Position = vec4(position, 0.0, 1.0);
                }
            \`;

            const fragmentShaderSource = \`
                precision highp float;
                uniform vec2 iResolution;
                uniform float iTime;
                uniform vec2 uMouse;

                vec2 barrel(vec2 uv, float amt) {
                    vec2 cc = uv - 0.5;
                    float r = dot(cc, cc);
                    return uv + cc * r * amt;
                }

                float rand(vec2 co) {
                    return fract(sin(dot(co, vec2(12.9898,78.233))) * 43758.5453);
                }

                void main() {
                    vec2 uv = gl_FragCoord.xy / iResolution.xy;
                    
                    // Parallax drift based on uMouse
                    vec2 mouseOffset = (uMouse - 0.5) * 0.05;
                    uv += mouseOffset;

                    // Barrel distortion curvature
                    uv = barrel(uv, 0.2);

                    // Clamp edges
                    if(uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
                        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
                        return;
                    }

                    // Dot matrix resolution
                    vec2 gridCount = vec2(100.0, 100.0 * (iResolution.y / iResolution.x));
                    vec2 gridUv = fract(uv * gridCount);
                    vec2 id = floor(uv * gridCount);

                    // Radial symmetry distance
                    vec2 cc = id / gridCount - 0.5;
                    float dist = length(cc);
                    
                    // Slow breathing pulse
                    float pulse = sin(iTime * 1.5 - dist * 10.0) * 0.5 + 0.5;

                    // Dot formulation
                    float dotSize = 0.35 * pulse;
                    float d = length(gridUv - 0.5);
                    float circle = smoothstep(dotSize, dotSize - 0.05, d);

                    // Digital scanlines
                    float scanline = sin(uv.y * 800.0) * 0.03;

                    // Randomized flicker
                    float flicker = rand(vec2(iTime, id.y)) > 0.98 ? 0.4 : 1.0;

                    // Base color compilation (Tinted Monotone Purple)
                    vec3 col = vec3(circle * pulse * flicker);
                    col -= scanline;
                    col *= vec3(0.7, 0.3, 1.0); // Purple tint
                    
                    // Vignette edge masking
                    col *= smoothstep(0.8, 0.2, dist);

                    gl_FragColor = vec4(col, 1.0);
                }
            \`;

            const compileShader = (type, source) => {
                const shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                return shader;
            };

            const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
            const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            gl.useProgram(program);

            const positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
                -1.0, -1.0,  1.0, -1.0, -1.0,  1.0,
                -1.0,  1.0,  1.0, -1.0,  1.0,  1.0
            ]), gl.STATIC_DRAW);

            const positionLocation = gl.getAttribLocation(program, "position");
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

            const iResLoc = gl.getUniformLocation(program, "iResolution");
            const iTimeLoc = gl.getUniformLocation(program, "iTime");
            const uMouseLoc = gl.getUniformLocation(program, "uMouse");

            // Interactive pointer drift tracking
            let mouseX = 0.5, mouseY = 0.5;
            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX / window.innerWidth;
                mouseY = 1.0 - (e.clientY / window.innerHeight);
            });

            const startTime = performance.now();
            const render = (time) => {
                const elapsedTime = (time - startTime) / 1000.0;
                
                gl.uniform2f(iResLoc, canvas.width, canvas.height);
                gl.uniform1f(iTimeLoc, elapsedTime);
                gl.uniform2f(uMouseLoc, mouseX, mouseY);

                gl.drawArrays(gl.TRIANGLES, 0, 6);
                requestAnimationFrame(render);
            };
            requestAnimationFrame(render);
        }
    <\/script>
</body>
</html>`;var ao=aa(kn(),1),Tm=`<svg viewBox="0 0 512 512" aria-hidden="true">
  <defs>
    <mask id="threeui-intro-cut" maskUnits="userSpaceOnUse" x="0" y="0" width="512" height="512">
      <rect width="512" height="512" fill="#000"/>
      <circle cx="256" cy="256" r="208" fill="#fff"/>
      <g fill="none" stroke="#000" stroke-linecap="round" stroke-width="28">
        <path d="M36 178C112 252 184 264 260 196C336 128 404 114 482 180"/>
        <path d="M36 292C112 366 184 378 260 310C336 242 404 228 482 294"/>
      </g>
    </mask>
  </defs>
  <rect width="512" height="512" fill="#f5f5f7" mask="url(#threeui-intro-cut)"/>
</svg>`,Em=`<svg width="1600" height="300" viewBox="0 0 1600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="800" y="235" text-anchor="middle" fill="#F4F4F0" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="240" font-weight="900" letter-spacing="-8">SHADERS</text>
</svg>`,Sa={mode:"dark",hue:0,saturation:1,brightness:1},Sn={"rising-diagonal":{title:"Twelve Works in Slow Orbit",headline:["TWELVE WORKS","IN SLOW ORBIT"],headlineWidths:[1846,2e3],axis:25.5,phase:93,direction:1,field:"matte",palette:["#e9e5dd","#20232a","#c25a43","#2f5b4e","#d6cfc2","#3a4763","#dda45c","#14161a","#a7b3a4","#f3f1ec","#5a6670","#8c4b3f"],ink:{dark:["#8d949c","#ffffff","#20232a"],light:["#6b7280","#111827","#e9e5dd"]},type:{font:"sans",weight:"400",headlineSize:1.15,tracking:.1},motion:{spring:!0,ease:.42}},"falling-diagonal":{title:"Signal Lost, Image Holding",headline:["SIGNAL LOST","IMAGE HOLDING"],headlineWidths:[1622,1917],axis:-25.5,phase:87,direction:-1,field:"glitch",palette:["#0b0b12","#ff2f6d","#00e6ff","#13f28a","#f2f2f8","#7a1bff","#101018","#ff7a1a","#141a2e","#e01f52","#1a1a26","#0ac2d8"],ink:{dark:["#ff2f6d","#f2f2f8","#0b0b12"],light:["#c81049","#111827","#f2f2f8"]},type:{font:"sans",weight:"700",headlineSize:1.2,tracking:0},motion:{spring:!1,ease:.12}},"horizontal-sweep":{title:"Prints from the Flat Files",headline:["PRINTS FROM","THE FLAT FILES"],headlineWidths:[1506,1917],axis:0,phase:90,direction:1,field:"riso",palette:["#e0b64a","#b1512a","#6d7638","#ecdfc2","#2f6b66","#8a3a2b","#d69b3e","#3c4630","#c06e3a","#e6d3a8","#546d76","#7a4726"],ink:{dark:["#e0b64a","#f4e9d2","#6d2a16"],light:["#8a3a2b","#2b2018","#e0b64a"]},type:{font:"oldstyle",weight:"700",headlineSize:1.2,tracking:.03},motion:{spring:!1,ease:.9}},"vertical-loop":{title:"One Wall, Twelve Plates",headline:["ONE WALL","TWELVE PLATES"],headlineWidths:[1132,1840],axis:90,phase:0,direction:-1,field:"halftone",palette:["#12110f","#f2efe8","#1c1b18","#e4e0d7","#2b2a26","#d6d1c6","#0a0a09","#faf8f3","#1f1e1a","#eae6dd","#161513","#c0402c"],ink:{dark:["#c0402c","#f2efe8","#12110f"],light:["#c0402c","#12110f","#e4e0d7"]},type:{font:"didone",weight:"400",headlineSize:1.25,tracking:.06},motion:{spring:!1,ease:.55}}},mi={serif:'"Times New Roman",Times,"Liberation Serif","Nimbus Roman",serif',didone:'Didot,"Bodoni 72","Bodoni MT","Playfair Display",Georgia,serif',oldstyle:'"Iowan Old Style","Palatino Linotype",Palatino,"Book Antiqua",Georgia,serif',sans:'"Helvetica Neue",Helvetica,"Inter",Arial,system-ui,sans-serif'},Am=["400","700"],Vs={...Sa,variant:"rising-diagonal"};function Mm(e,t){let a=t==="light"?"#f4f7fb":"#111318",i=t==="light"?["#60a5fa","#3b82f6","#2563eb"]:["#2563eb","#1d4ed8","#1e40af"];return e.replace("<title>Uploading \u2014 glowing border microinteraction</title>","<title>Thinking \u2014 glowing border microinteraction</title>").replace("<style>",`<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet">
<style>`).replaceAll("#1d1d1d",a).replace("var word = 'Uploading'","var word = 'Thinking'").replace(`var FONT = '300 100px -apple-system, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Inter, system-ui, "Segoe UI", Roboto, sans-serif';`,`var FONT = '300 100px Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';`).replace(`      if(glyphs[i].ch === 'g') doubleStoreyG(c);
      else{`,"      {").replace("grd.addColorStop(0, '#2e3242');",`grd.addColorStop(0, '${i[0]}');`).replace("grd.addColorStop(0.55, '#2b2f3c');",`grd.addColorStop(0.55, '${i[1]}');`).replace("grd.addColorStop(1, '#272c36');",`grd.addColorStop(1, '${i[2]}');`).replaceAll("rgb(83,92,135)","rgb(219,234,254)").replaceAll("rgb(97,106,150)","rgb(239,246,255)").replace("rgb(133,141,189)","rgb(255,255,255)").replace("  var CX = 1024 - 22, CY = 1024 + 11.5;   /* button centre in the source recording */",`  var SCL = 0.49;                          /* hero button -> normal button */
  var CX = (1024 - 22)/SCL, CY = (1024 + 11.5)/SCL;`).replace("    k = S*dpr/REF;","    k = S*dpr/REF*SCL;").replace("  var PW = 976, PH = 345, PR = 100;","  var PW = 1010, PH = 345, PR = 100;").replace("  var TXT_W = 778, TXT_CAP = 120, TXT_BASE = 1093;",`  var TXT_W = 450, TXT_CAP = 79, TXT_BASE = CY + 38;
  var BR_R = 13, BR_SP = 40, BR_GAP = 78;   /* braille dot radius, cell pitch, gap to label */
  var BR_W = BR_SP + 2*BR_R, BR_SHIFT = (BR_W + BR_GAP)/2;
  /* the terminal 'dots' spinner, as raised-dot masks: bit 0..2 = left column top->bottom, 3..5 = right */
  var BRAILLE = [0x0B,0x19,0x39,0x38,0x3C,0x34,0x26,0x27,0x07,0x0F];
  var BR_STEPS = 30;                        /* three full spinner cycles per lap, so the loop still joins */`).replace("  var glyphs = [], fontPx = 169, tracking = 0, textX = 0;","  var glyphs = [], fontPx = 169, tracking = 0, textX = 0, brailleX = 0;").replace("    textX = (CX + 4)*k - TXT_W*k/2 + lead;",`    textX = (CX + 4)*k - TXT_W*k/2 + lead + BR_SHIFT*k;
    brailleX = (CX + 4)*k - (BR_W + BR_GAP + TXT_W)*k/2 + BR_R*k;`).replace("  function label(c, ph){",`  /* the spinner is drawn as dots rather than braille glyphs, so it never depends
     on a system face carrying the U+28xx block */
  function braille(c, ph){
    var mask = BRAILLE[Math.floor(ph*BR_STEPS) % BRAILLE.length];
    var cy = (CY - 1.5)*k, r = BR_R*k, sp = BR_SP*k;
    for(var b=0;b<6;b++){
      var on = (mask >> b) & 1;
      c.beginPath();
      c.arc(brailleX + (b < 3 ? 0 : sp), cy + ((b % 3) - 1)*sp, on ? r : r*0.7, 0, Math.PI*2);
      c.fillStyle = on ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.16)';
      c.fill();
    }
  }

  function label(c, ph){`).replace(`    plate(ctx);
    label(ctx, ph);`,`    plate(ctx);
    braille(ctx, ph);
    label(ctx, ph);`)}function Cm(e,t){return t!=="dark"?e:e.replace("from-black/10 via-black/20 to-black/10","from-white/[0.16] via-white/[0.07] to-white/[0.16]").replace("text-black/60","text-white/70").replace("text-slate-600","text-slate-200").replace('stroke="#666"','stroke="#e5e7eb"').replace("hover:bg-slate-50","hover:bg-white/10")}function zm(e,t){return t!=="light"?e:e.replaceAll("#fffa","#111a").replaceAll("#fffd","#111d").replaceAll("#fff4","#1114").replaceAll("#fff3","#1113").replaceAll("#fff2","#1112")}var Rm=/function buildLabels\(\)\{[\s\S]*?\n\}\n\nfunction resize/,Lm=/function buildHead\(\)\{[\s\S]*?\n\}\n\nfunction buildLabels/,Dm=/function lin\(x,x0,y0,x1,y1,stops\)\{[\s\S]*?\n\];\n\nfunction roundRectPath/,Om=/    \/\* film grain \*\/\n[\s\S]*?\n    x\.restore\(\);\n    front\.push\(c\);/,Bm=/var t0 = performance\.now\(\), tNow = 0, playing = true;[\s\S]*?window\.__play = function\(\)\{ t0 = performance\.now\(\) - tNow\*1000; playing = true; \};/,Hm=`function buildHead(){
  headLayer = mkc(Math.max(1,W), Math.max(1,H));
  var x = headLayer.getContext('2d');
  if (x.letterSpacing !== undefined) x.letterSpacing = (HEAD_TRACK*HEAD_CAP*HEAD_SIZE*K).toFixed(2)+'px';
  if (HEAD_STYLE === 'riso'){
    var off = 0.055*HEAD_CAP*HEAD_SIZE*K;
    headPass(x, off, off, HEAD_SHADOW);
  }
  headPass(x, 0, 0, null);
  if (HEAD_STYLE === 'glitch') headGlitch(x);
}

/* one setting of the two headline lines, optionally displaced and forced to
   a single colour, so a style can stack passes into its treatment */
function headPass(x, dx, dy, tint){
  for (var i=0;i<HEAD.length;i++){
    var h = HEAD[i];
    fitText(x, h.s, SANS, HEAD_WEIGHT, HEAD_CAP*HEAD_SIZE*K, d2sx(1481) + dx,
            d2sy(HEAD_MID + (h.top - HEAD_MID)*HEAD_SIZE) + dy, h.w*HEAD_SIZE*K, tint || h.fill);
  }
}

/* the headline as a picture that lost its signal: a few rows slip sideways
   and two colour channels sit out of register behind the letterforms */
function headGlitch(x){
  var w = headLayer.width, h = headLayer.height, i;
  var snap = mkc(w,h);
  snap.getContext('2d').drawImage(headLayer,0,0);
  var r = rng(0x2E51);
  var top = d2sy(HEAD_MID) - HEAD_CAP*HEAD_SIZE*K*2.1, span = HEAD_CAP*HEAD_SIZE*K*4.2;
  for (i=0;i<7;i++){
    var sy = Math.round(top + r()*span);
    var sh = Math.round((0.03 + r()*0.11)*HEAD_CAP*HEAD_SIZE*K);
    var dx = Math.round((r()-0.5)*0.08*w);
    x.clearRect(0,sy,w,sh);
    x.drawImage(snap, 0,sy,w,sh, dx,sy,w,sh);
  }
  var ghost = function(color){
    var g = mkc(w,h), gx = g.getContext('2d');
    gx.drawImage(snap,0,0);
    gx.globalCompositeOperation = 'source-in';
    gx.fillStyle = color; gx.fillRect(0,0,w,h);
    return g;
  };
  var off = 0.05*HEAD_CAP*HEAD_SIZE*K;
  x.save();
  /* the ghosts go under the letterforms, so the headline stays readable */
  x.globalCompositeOperation = 'destination-over';
  x.globalAlpha = 0.9;
  x.drawImage(ghost(HEAD_GHOST[0]), -off, 0);
  x.drawImage(ghost(HEAD_GHOST[1]), off, 0);
  x.restore();
}

function buildLabels`,qm=`function fill(x,style){ x.fillStyle = style; x.fillRect(0,0,TS,TS); }

function rgbOf(hex){
  var v = parseInt(hex.slice(1),16);
  return [(v>>16)&255,(v>>8)&255,v&255];
}
function mixRGB(a,b,t){
  return [a[0]+(b[0]-a[0])*t, a[1]+(b[1]-a[1])*t, a[2]+(b[2]-a[2])*t];
}
function cssRGB(c){
  return 'rgb('+(c[0]|0)+','+(c[1]|0)+','+(c[2]|0)+')';
}
function luma(c){ return (c[0]*0.299 + c[1]*0.587 + c[2]*0.114)/255; }

/* value noise on a 64x64 lattice, smoothstep-interpolated and wrapped */
function noiseField(seed){
  var g = new Float32Array(4096), r = rng(seed), i;
  for (i=0;i<4096;i++) g[i] = r();
  return function(x,y){
    var x0 = Math.floor(x), y0 = Math.floor(y);
    var fx = x - x0, fy = y - y0;
    fx = fx*fx*(3-2*fx); fy = fy*fy*(3-2*fy);
    var ra = (y0 & 63)*64, rb = ((y0+1) & 63)*64, ca = x0 & 63, cb = (x0+1) & 63;
    var a = g[ra+ca], b = g[ra+cb], c = g[rb+ca], d = g[rb+cb];
    return a + (b-a)*fx + (c-a)*fy + (a-b-c+d)*fx*fy;
  };
}
function fbm(n,x,y,oct){
  var v = 0, amp = 0.5, f = 1, tot = 0, i;
  for (i=0;i<oct;i++){ v += amp*n(x*f,y*f); tot += amp; amp *= 0.5; f *= 2; }
  return v/tot;
}
function grain(x, alpha){
  x.save();
  x.globalCompositeOperation = 'overlay';
  x.globalAlpha = alpha;
  x.fillStyle = x.createPattern(grainTile,'repeat');
  x.fillRect(0,0,TS,TS);
  x.restore();
}

/* paint a low-resolution field, then blow it up over the whole tile: smooth
   for a matte plate, nearest wherever the noise has to keep its edges */
function fieldBuffer(N, shade){
  var buf = mkc(N,N), bx = buf.getContext('2d'), d = bx.createImageData(N,N), px, py, o, c;
  for (py=0;py<N;py++){
    for (px=0;px<N;px++){
      c = shade((px+0.5)/N, (py+0.5)/N, px, py);
      o = (py*N+px)*4;
      d.data[o] = c[0]|0; d.data[o+1] = c[1]|0; d.data[o+2] = c[2]|0;
      d.data[o+3] = c.length > 3 ? c[3]|0 : 255;
    }
  }
  bx.putImageData(d,0,0);
  return buf;
}
function blowUp(x, buf, smooth, alpha){
  x.save();
  x.imageSmoothingEnabled = smooth;
  if (alpha !== undefined) x.globalAlpha = alpha;
  x.drawImage(buf, 0, 0, TS, TS);
  x.restore();
}

/* matte \u2014 a museum plate: flat colour, one slow rise of noise across it,
   and grain fine enough to read as the surface rather than as an effect */
function paintMatte(x, base, i){
  var n = noiseField(0x2C41 + i*9176);
  var hi = mixRGB(base,[255,255,255],0.13), lo = mixRGB(base,[0,0,0],0.15);
  blowUp(x, fieldBuffer(160, function(u,v){
    var s = 0.5 + (fbm(n, u*6.5, v*6.5, 5) - 0.5)*1.9 + (v - 0.5)*0.07;
    s = s < 0 ? 0 : s > 1 ? 1 : s;
    return s < 0.5 ? mixRGB(lo, base, s*2) : mixRGB(base, hi, (s-0.5)*2);
  }), true);
  grain(x, 0.1);
}

/* glitch \u2014 a plate that lost the signal: flat blocks torn out of the
   neighbouring colours, rows slipped sideways, two channels off register */
function paintGlitch(x, base, i){
  var r = rng(0x51B7 + i*30011), k;
  fill(x, cssRGB(base));
  for (k=0;k<4;k++){
    x.fillStyle = cssRGB(rgbOf(PLATES[(i + 1 + ((r()*5)|0)) % PLATES.length]));
    x.fillRect(Math.round((r()-0.2)*TS), Math.round(r()*TS),
               Math.round((0.2 + r()*0.55)*TS), Math.round((0.04 + r()*0.2)*TS));
  }
  blowUp(x, fieldBuffer(64, function(){
    var w = r() < 0.5 ? 250 : 6;
    return [w,w,w, r() < 0.2 ? 200 : 0];
  }), false, 0.5);
  /* rows slip sideways, each one wrapped so no edge is ever left empty */
  var snap = mkc(TS,TS);
  snap.getContext('2d').drawImage(x.canvas,0,0);
  for (k=0;k<11;k++){
    var y0 = Math.round(r()*TS), h = Math.round((0.01 + r()*0.06)*TS);
    var dx = Math.round((r()-0.5)*0.36*TS);
    x.clearRect(0,y0,TS,h);
    x.drawImage(snap, 0,y0,TS,h, dx,y0,TS,h);
    x.drawImage(snap, 0,y0,TS,h, dx + (dx < 0 ? TS : -TS),y0,TS,h);
  }
  var channel = function(color){
    var g = mkc(TS,TS), gx = g.getContext('2d');
    gx.drawImage(x.canvas,0,0);
    gx.globalCompositeOperation = 'multiply';
    gx.fillStyle = color; gx.fillRect(0,0,TS,TS);
    return g;
  };
  var red = channel('#ff3050'), cyan = channel('#30e0ff');
  x.save();
  x.globalCompositeOperation = 'lighter';
  x.globalAlpha = 0.3;
  x.drawImage(red, -0.022*TS, 0);
  x.drawImage(cyan, 0.022*TS, 0);
  x.restore();
  x.save();
  x.fillStyle = 'rgba(0,0,0,0.22)';
  for (k=0;k<TS;k+=4) x.fillRect(0,k,TS,1);
  x.restore();
  grain(x, 0.24);
}

/* riso \u2014 the printed plate: a lit corner and a noise field quantised to
   three tones through an ordered dither, then scanlines and heavy grain */
var BAYER = [0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];
function paintRiso(x, base, i){
  var n = noiseField(0x77A3 + i*15731), k;
  var lo = mixRGB(base,[24,14,6],0.66), hi = mixRGB(base,[255,238,196],0.5);
  var cx = 0.22 + (i % 3)*0.28, cy = 0.2 + ((i/3)|0)*0.2;
  blowUp(x, fieldBuffer(100, function(u,v,px,py){
    var d = Math.sqrt((u-cx)*(u-cx) + (v-cy)*(v-cy));
    var s = (1 - d*1.25)*0.72 + fbm(n, u*3.2, v*3.2, 3)*0.52 - 0.1;
    var band = Math.floor(s*2.4 + (BAYER[(py & 3)*4 + (px & 3)] + 0.5)/16);
    return band <= 0 ? lo : band === 1 ? base : hi;
  }), false);
  x.save();
  x.fillStyle = 'rgba(28,14,4,0.18)';
  for (k=0;k<TS;k+=6) x.fillRect(0,k,TS,2);
  x.restore();
  grain(x, 0.22);
}

/* halftone \u2014 one ink on one stock, shaded only by the size of the dots on
   a screen rotated a few degrees further for every tile */
function paintHalftone(x, base, i){
  var n = noiseField(0x3F19 + i*21467), gx, gy;
  fill(x, cssRGB(base));
  var dot = luma(base) > 0.5 ? mixRGB(base,[0,0,0],0.88) : mixRGB(base,[255,255,255],0.9);
  var pitch = TS/30, a = (17 + (i % 4)*9)*Math.PI/180;
  var ca = Math.cos(a), sa = Math.sin(a), span = Math.ceil(TS/pitch);
  x.save();
  x.fillStyle = cssRGB(dot);
  x.translate(TS/2, TS/2);
  x.rotate(a);
  for (gy=-span;gy<=span;gy++){
    for (gx=-span;gx<=span;gx++){
      var wx = gx*pitch, wy = gy*pitch;
      var u = (wx*ca - wy*sa)/TS + 0.5, v = (wx*sa + wy*ca)/TS + 0.5;
      if (u < -0.1 || u > 1.1 || v < -0.1 || v > 1.1) continue;
      var s = fbm(n, u*2.7, v*2.7, 4)*0.95 + (0.55 - v)*0.5;
      var rad = pitch*0.66*(s < 0 ? 0 : s > 1 ? 1 : s);
      if (rad < 0.4) continue;
      x.beginPath(); x.arc(wx, wy, rad, 0, Math.PI*2); x.fill();
    }
  }
  x.restore();
  grain(x, 0.12);
}

var PAINTERS = { matte: paintMatte, glitch: paintGlitch, riso: paintRiso, halftone: paintHalftone };
var ART = (function(){
  var painter = PAINTERS[FIELD] || paintMatte, list = [], i;
  for (i=0;i<PLATES.length;i++){
    list.push((function(index){
      return function(x){ painter(x, rgbOf(PLATES[index]), index); };
    })(i));
  }
  return list;
})();

function roundRectPath`,Nm=`function pointOnRoundedPlate(x,y,plate){
  const determinant=plate.ex*plate.fy-plate.ey*plate.fx;
  if(Math.abs(determinant)<0.4)return false;
  const dx=x-plate.x,dy=y-plate.y;
  const u=Math.abs((dx*plate.fy-dy*plate.fx)/determinant);
  const v=Math.abs((dy*plate.ex-dx*plate.ey)/determinant);
  const padding=plate.padding||0;
  const radius=2*plate.aspect*plate.radius;
  const qx=u-(1-radius),qy=v-(plate.aspect-radius);
  return Math.hypot(Math.max(qx,0),Math.max(qy,0))+Math.min(Math.max(qx,qy),0)<=radius+padding;
}
function projectedOrbitAngle(x,y,cx,cy,radius,ux,uy,vx,vy){
  const dx=(x-cx)/radius,dy=(y-cy)/radius;
  const determinant=ux*vy-uy*vx;
  const u=(dx*vy-dy*vx)/determinant;
  const v=(dy*ux-dx*uy)/determinant;
  return Math.hypot(u,v)<0.15?null:Math.atan2(v,u);
}
function wrappedAngleDelta(previous,next){
  return Math.atan2(Math.sin(next-previous),Math.cos(next-previous));
}
function galleryTargetRate(hovering,onCard,direction){
  if(!hovering)return 0;
  return (onCard?0.24:1)*direction;
}

var galleryPX=0,galleryPY=0,galleryPointerActive=false,galleryDragging=false,galleryCardIndex=-1;
var galleryLastAngle=null,galleryLastY=0,galleryLastDragAt=0,galleryDragVelocity=0,galleryDirection=1,galleryCoasting=false;
var galleryFeedbackAt=0,galleryFeedbackKey='';
window.addEventListener('message',function(event){
  if(event.source!==window.parent)return;
  var input=event.data&&event.data.galleryInteraction;
  if(!input)return;
  var wasDragging=galleryDragging,now=performance.now();
  if(typeof input.x==='number')galleryPX=input.x;
  if(typeof input.y==='number')galleryPY=input.y;
  if(typeof input.pointer==='boolean')galleryPointerActive=input.pointer;
  if(typeof input.dragging==='boolean')galleryDragging=input.dragging;
  if(galleryDragging){
    var angle=projectedOrbitAngle(galleryPX*W,galleryPY*H,d2sx(RING.cx),d2sy(RING.cy),RING.a*K,U[0],U[1],V[0],V[1]);
    if(!wasDragging){galleryLastAngle=angle;galleryLastY=galleryPY;galleryDragVelocity=0;rate=0;vel=0;}
    else{
      // Unwrap the pointer angle rather than multiplying a speed: the orbit
      // advances by exactly the pointer's arc, in either direction.
      var delta=angle!==null&&galleryLastAngle!==null?wrappedAngleDelta(galleryLastAngle,angle):-(galleryPY-galleryLastY)*Math.PI*2;
      var advance=delta*DUR/(Math.PI*2);
      tNow=((tNow+advance)%DUR+DUR)%DUR;
      var dt=Math.max(0.008,(now-galleryLastDragAt)/1000);
      galleryDragVelocity=galleryDragVelocity*0.45+Math.max(-3.2,Math.min(3.2,advance/dt))*0.55;
      if(Math.abs(delta)>0.001)galleryDirection=delta<0?-1:1;
      galleryLastAngle=angle;galleryLastY=galleryPY;
    }
    galleryLastDragAt=now;galleryCoasting=false;settled=false;render(tNow);
  }else if(wasDragging){
    rate=galleryDragVelocity;vel=0;galleryCoasting=true;settled=false;
  }
  if(input.clear){galleryDragging=false;galleryPointerActive=false;galleryCardIndex=-1;galleryDragVelocity=0;galleryCoasting=false;rate=0;vel=0;}
  if(typeof input.inside==='boolean')setHover(input.inside);
});
function galleryCardAtPointer(){
  if(!galleryPointerActive||!hovering)return -1;
  var spin=(tNow/DUR)*Math.PI*2;
  var px=galleryPX*W,py=galleryPY*H;
  for(var index=0;index<RING.n;index++){
    var psi=RING.phase*Math.PI/180-index*2*Math.PI/RING.n+spin;
    var c=Math.cos(psi),s=Math.sin(psi);
    var C=[c*U[0]+s*V[0],c*U[1]+s*V[1],c*U[2]+s*V[2]];
    var T=[-s*U[0]+c*V[0],-s*U[1]+c*V[1],-s*U[2]+c*V[2]];
    var half=RING.tile/(2*RING.a),centre=project(C);
    var pT=project([C[0]+T[0]*half,C[1]+T[1]*half,C[2]+T[2]*half]);
    var pA=project([C[0]+AXIS[0]*half,C[1]+AXIS[1]*half,C[2]+AXIS[2]*half]);
    if(pointOnRoundedPlate(px,py,{x:centre[0],y:centre[1],ex:pT[0]-centre[0],ey:pT[1]-centre[1],fx:pA[0]-centre[0],fy:pA[1]-centre[1],aspect:RING.aspect,radius:RING.radius,padding:index===galleryCardIndex?0.055:0}))return index;
  }
  return -1;
}
function galleryReport(now){
  var speed=Math.round(Math.abs(rate)*100)/100;
  var mode=!hovering?(speed>0.03?'settling':'idle'):galleryDragging?'drag':galleryCoasting?'coast':galleryCardIndex>=0?'card':'normal';
  var key=mode+':'+speed;
  if(now-galleryFeedbackAt>120&&key!==galleryFeedbackKey){
    galleryFeedbackAt=now;galleryFeedbackKey=key;
    window.parent.postMessage({galleryFeedback:{mode:mode,speed:speed}},'*');
  }
}

var tNow = 0, playing = true, hovering = false, rate = 0, vel = 0, settled = false, last = performance.now();

function setHover(state){
  if (hovering === state) return;
  hovering = state; settled = false;
  /* the host cannot see the pointer arrive over this frame, so tell it \u2014 it is
     the one that will see the pointer leave again */
  if (state && window.parent !== window){
    try { window.parent.postMessage({ threeuiPointerOver: true }, '*'); } catch (error) {}
  }
}
var root = document.documentElement;
root.addEventListener('pointerenter', function(){ setHover(true); });
root.addEventListener('pointermove',  function(){ setHover(true); });
root.addEventListener('pointerdown',  function(){ setHover(true); });
root.addEventListener('pointerleave', function(){ setHover(false); });
root.addEventListener('pointercancel',function(){ setHover(false); });
window.addEventListener('blur', function(){ setHover(false); });

function frame(now){
  var dt = Math.min(0.05, Math.max(0, (now - last)/1000));
  last = now;
  if (playing){
    if(galleryDragging){rate=0;vel=0;galleryDragVelocity*=Math.exp(-dt/0.18);galleryReport(now);requestAnimationFrame(frame);return;}
    galleryCardIndex=galleryCardAtPointer();
    var desiredRate=galleryTargetRate(hovering,galleryCardIndex>=0,galleryDirection);
    if(galleryCoasting&&Math.abs(rate-desiredRate)<0.08)galleryCoasting=false;
    if (SPRING){
      vel += ((desiredRate - rate)*SPRING_K - vel*SPRING_D)*dt;
      rate += vel*dt;
    } else {
      rate += (desiredRate - rate) * (1 - Math.exp(-dt/EASE));
    }
    if (Math.abs(rate) > 0.0004 || Math.abs(vel) > 0.0004){
      tNow = ((tNow + dt*rate) % DUR + DUR) % DUR;
      render(tNow); settled = false;
    } else if (!settled){
      rate = 0; vel = 0; render(tNow); settled = true;
    }
  }
  galleryReport(now);
  requestAnimationFrame(frame);
}

/* font family, weight, and headline size arrive live so a control tick never
   rebuilds the document and repaints the twelve tile textures */
window.addEventListener('message', function(event){
  var runtime = event.data && event.data.threeuiRuntime;
  if (!runtime) return;
  if (typeof runtime.font === 'string') SANS = runtime.font;
  if (typeof runtime.weight === 'string') HEAD_WEIGHT = runtime.weight;
  if (typeof runtime.headlineSize === 'number' && runtime.headlineSize > 0){
    HEAD_SIZE = Math.max(0.6, Math.min(1.8, runtime.headlineSize));
  }
  if (typeof runtime.hover === 'number') setHover(runtime.hover > 0);
  buildHead(); settled = false; render(tNow);
});

window.addEventListener('resize', function(){ resize(); settled = false; render(tNow); });
resize();
render(tNow);
requestAnimationFrame(frame);

window.__DUR = DUR;
window.__seek = function(t){
  tNow = ((t % DUR) + DUR) % DUR;
  playing = false;
  render(tNow);
};
window.__play = function(){ last = performance.now(); playing = true; settled = false; };`;function gf(e,t,a){let i=t==="light"?"#f4f7fb":"#000000",n=t==="light"?a.ink.light:a.ink.dark,r=mi[a.type.font];return e.replace("<title>New Grainient Collection Added \u2014 motion</title>",`<title>${a.title} \u2014 motion</title>`).replace("html,body{margin:0;height:100%;background:#000;overflow:hidden}",`html,body{margin:0;height:100%;background:${i};overflow:hidden}`).replace("axis: 25.5,",`axis: ${a.axis},`).replace("phase: 93",`phase: ${a.phase}`).replace("  tile: 346,            /* tile side in ring units (R = a)               */",`  tile: 346,            /* tile width in ring units (R = a)              */
  aspect: 0.75,         /* tile height / width \u2014 a 4:3 landscape crop    */`).replace("  roundRectPath(ctx, TS, TS, TS*RING.radius);","  roundRectPath(ctx, TS, TS*RING.aspect, TS*RING.aspect*RING.radius);").replace(`var CAP = 142;          /* headline cap height */
var SMALL = 22;         /* small-label cap height */`,`var HEAD_CAP = 142;     /* authored headline cap height */
var HEAD_MID = 1093;    /* authored vertical centre of the two-line block */
var HEAD_SIZE = ${a.type.headlineSize};   /* headline size multiplier */
var HEAD_WEIGHT = '${a.type.weight}'; /* headline weight */
var HEAD_TRACK = ${a.type.tracking};   /* headline tracking, in cap heights */
var HEAD_STYLE = '${a.field}';
var HEAD_SHADOW = '${n[2]}';  /* riso: the plate under the ink */
var HEAD_GHOST = ['#ff2f6d','#00e6ff'];  /* glitch: the two channel ghosts */
var PLATES = ${JSON.stringify(a.palette)};
var FIELD = '${a.field}';       /* which painter shades the plates */
var EASE = ${a.motion.ease};        /* seconds for the orbit to reach hover speed */
var SPRING = ${a.motion.spring?1:0}, SPRING_K = 26, SPRING_D = 5.7;`).replace(`var SANS = '"Helvetica Neue",Helvetica,"Inter",Arial,system-ui,sans-serif';`,`var SANS = '${r}';`).replace("{ s:'NEW GRAINIENT',    top:930,  w:1370, fill:'#d0d0d0' }",`{ s:'${a.headline[0]}', top:930,  w:${a.headlineWidths[0]}, fill:'${n[0]}' }`).replace("{ s:'COLLECTION ADDED', top:1114, w:1775, fill:'#ffffff' }",`{ s:'${a.headline[1]}', top:1114, w:${a.headlineWidths[1]}, fill:'${n[1]}' }`).replace(' * Tile artwork \u2014 eleven grainy gradient "wallpapers"'," * Tile artwork \u2014 twelve flat plates under a procedural noise field").replace(Dm,qm).replace(Om,`    /* each field painter lays its own grain, at the weight its style wants */
    front.push(c);`).replace("y.fillStyle = 'rgba(6,8,18,0.75)';","y.fillStyle = 'rgba(10,12,24,0.45)';").replace(Lm,Hm).replace(Rm,`function buildLabels(){
  /* the launch poster's corner marks and flanking notes are dropped; the
     layer stays so the compositing order below is untouched */
  labelLayer = mkc(1,1);
}

function resize`).replace("var spin = (t/DUR)*Math.PI*2;",`var spin = (t/DUR)*Math.PI*2*${a.direction};`).replace(`ctx.fillStyle = '#000';
  ctx.fillRect(0,0,W,H);`,`ctx.fillStyle = '${i}';
  ctx.fillRect(0,0,W,H);`).replace(Bm,Nm)}var sv={...Sa,variant:"sphere",speed:1,pointSize:1,wavelength:1};function Um(e,t){let a=t==="light"?"[[8, 10, 15], [40, 48, 62], [85, 96, 116]]":"[[255, 255, 255], [226, 232, 240], [191, 205, 225]]";return e.replace("<title>Epilude \u2014 Footer</title>","<title>Shaders Particle Wordmark</title>").replace("aspect-ratio: 8.541554959785524;","aspect-ratio: 5.333333333333333;").replace(/var WORDMARK =[\s\S]*?"<\/svg>";/,`var WORDMARK = ${JSON.stringify(Em)};`).replace("var PALETTE = [[255, 255, 255], [226, 232, 240], [191, 205, 225]];",`var PALETTE = ${a};`).replace("a: 0.04 + 0.95 * band * Math.pow(flake, 1.8)","a: 0.14 + 0.86 * band * Math.pow(flake, 1.8)")}function Gm(e,t){let a=t==="light"?"#f4f7fb":"#000",i=t==="light"?"#172033":"#E8EEE9",n=t==="light"?"#536076":"#c9d4cc",r=t==="light"?"#315efb":"#7080ff";return e.replace("<title>Supreme Radio \u2014 Graphic Identity</title>","<title>ThreeUI \u2014 Audio Wordmark</title>").replaceAll("supreme radio","ThreeUI").replaceAll("#EA3927",r).replaceAll("#E8EEE9",i).replaceAll("#E3EDE5",i).replaceAll("#c9d4cc",n).replaceAll("#000",a).replace("var DUR = 20;","var DUR = 4.7;")}var B={expanse:{title:"Expanse Field shader background",source:jp,background:"#07080b",targets:[{selector:"#glcanvas",role:"background"}]},starfield:{title:"Imaginie star portal",source:Kp,background:"#0d0a12",theme:{nativeMode:"dark",lightBackground:"#f4f7fb",darkBackground:"#0d0a12",invertBackground:!0},targets:[{selector:"#ambient-starfield",role:"background"},{selector:"#portal-stars",role:"background"},{selector:".holo-btn",role:"button"}]},particleOrb:{title:"Synthesis autonomous orb",source:lf,background:"#050505",targets:[{selector:"#orbCanvas",role:"background"}]},performanceGaugesTachometer:{title:"Tachometer diagnostic gauge",source:wn,background:"#000000",targets:[{selector:"#gauge-tachometer",role:"visual",fit:"contain-square"}]},performanceGaugesSpeedometer:{title:"Speedometer diagnostic gauge",source:wn,background:"#000000",targets:[{selector:"#gauge-speedometer",role:"visual",fit:"contain-square"}]},performanceGaugesBoost:{title:"Turbo boost diagnostic gauge",source:wn,background:"#000000",targets:[{selector:"#gauge-boost",role:"visual",fit:"contain-square"}]},performanceGaugesPower:{title:"EV power diagnostic gauge",source:wn,background:"#000000",targets:[{selector:"#gauge-power",role:"visual",fit:"contain-square"}]},logicCore:{title:"Logic Core isometric field",source:rf,background:"#050505",targets:[{selector:"#three-canvas-container",role:"background"}]},ignition:{title:"Ignition Button shader button",source:Zp,background:"#f0ede7",theme:{nativeMode:"light",lightBackground:"#f0ede7",darkBackground:"#121316",invertBackground:!0},targets:[{selector:"#bg-gl",role:"background"},{selector:"#btn",role:"button"}]},induction:{title:"Induction Button kinetic button",source:sf,background:"#050505",theme:{nativeMode:"dark",lightBackground:"#f4f7fb",darkBackground:"#050505",invertBackground:!0},targets:[{selector:"#bg-canvas",role:"background"},{selector:"#btn",role:"button"}]},aetherisLabs:{title:"Aetheris Labs plasma button",source:Hp,background:"#020614",theme:{nativeMode:"dark",lightBackground:"#f4f7fb",darkBackground:"#020614",invertBackground:!0},targets:[{selector:"#bg-gl",role:"background"},{selector:"#btn",role:"button"}]},tactile:{title:"Nexus tactile fluidics button",source:Jp,background:"#03090d",theme:{nativeMode:"dark",lightBackground:"#f4f7fb",darkBackground:"#03090d",invertBackground:!0},targets:[{selector:"#bg-canvas",role:"background"},{selector:"#btn",role:"button"}]},thinking:{title:"Thinking Button canvas animation",source:nf,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},transformSource:Mm,targets:[{selector:"#stage",role:"button"}]},slidingTextCta:{title:"Sliding Text CTA button",source:tf,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},targets:[{selector:".component-wrapper button",role:"button",preserveTransform:!0}]},floatingDotsCta:{title:"Floating Dots CTA button",source:Fp,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},targets:[{selector:".component-wrapper button",role:"button",preserveTransform:!0}]},launchButton:{title:"Gradient Launch button",source:Qp,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},targets:[{selector:".component-wrapper button",role:"button",preserveTransform:!0}]},dotBorderButton:{title:"Dot Border button",source:Np,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},transformSource:zm,targets:[{selector:".component-wrapper .btn-wrapper",role:"button",preserveTransform:!0}]},gradientCta:{title:"Gradient CTA button",source:Pp,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},targets:[{selector:".component-wrapper button",role:"button",preserveTransform:!0}]},spinningBorderButton:{title:"Spinning Border button",source:af,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},targets:[{selector:".component-wrapper button",role:"button",preserveTransform:!0}]},glassmorphismCta:{title:"Glassmorphism CTA button",source:Wp,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},targets:[{selector:".component-wrapper a",role:"button",preserveTransform:!0}]},generateButton:{title:"Generate button",source:Vp,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},targets:[{selector:".component-wrapper .btn-wrapper",role:"button",preserveTransform:!0}]},gradientPillButton:{title:"Gradient Pill button",source:Ip,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},transformSource:Cm,targets:[{selector:".component-wrapper button",role:"button",preserveTransform:!0}]},gradientBeamCta:{title:"Gradient Beam CTA button",source:Xp,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},targets:[{selector:".component-wrapper button",role:"button",preserveTransform:!0}]},recursiveErosion:{title:"Recursive Erosion particle sphere background",source:ef,background:"#0a0908",theme:{lightBackground:"#f4f3f1",darkBackground:"#0a0908"},targets:[{selector:"#stage",role:"background"}],hiddenTargets:["#badge",".sr"]},threeUIIntro:{title:"ThreeUI chromatic wordmark intro",source:Up,background:"#000000",theme:{nativeMode:"dark",lightBackground:"#f4f7fb",darkBackground:"#000000",invertBackground:!0},targets:[{selector:"#stage",role:"background"}],hiddenTargets:[".sr"],introWordmark:{sceneSelector:"#comp .scene:first-child",text:"ThreeUI",fontSize:130,endTime:1.7,holdTime:1.1,logoSvg:Tm}},particleWordmark:{title:"Shaders particle wordmark",source:Gp,background:"#0c0c0d",theme:{lightBackground:"#f4f7fb",darkBackground:"#0c0c0d"},transformSource:Um,targets:[{selector:"#storm",role:"visual",fit:"wide-wordmark"}]},audioWordmark:{title:"ThreeUI audio wordmark",source:qp,background:"#000000",theme:{lightBackground:"#f4f7fb",darkBackground:"#000000"},transformSource:Gm,targets:[{selector:"#stage",role:"visual",fit:"portrait-stage",preserveTransform:!0}]},galleryHeading:{title:"Gallery Heading canvas animation",source:Yp,background:"#000000",theme:{lightBackground:"#f4f7fb",darkBackground:"#000000"},transformSource:(e,t)=>gf(e,t,Sn[Vs.variant]),targets:[{selector:"#stage",role:"background"}]},dimensional:{title:"Vanguard dimensional architecture",source:cf,background:"#050608",targets:[{selector:"#webgl-canvas",role:"background"}]},cloud:{title:"Strata cloud migration field",source:of,background:"#071010",targets:[{selector:"#c",role:"background"}]},vertex9:{title:"Vertex 9 global data field",source:df,background:"#050505",targets:[{selector:"#webgl-canvas",role:"background"}]},topology:{title:"Nexus topology field",source:$p,background:"#070707",targets:[{selector:"#animationCanvas",role:"background"}]},voidField:{title:"Void Field shader background",source:uf,background:"#030305",targets:[{selector:"#webgl-canvas",role:"background"}]}};function to(e,t,a){return Math.min(a,Math.max(t,e))}function mf(e,t){return e.theme?.[`${t}Background`]??e.background}function jm(e,t){let a=mf(e,t),i=e.theme?.invertBackground===!0&&e.theme.nativeMode!==t,n=e.transformSource?.(e.source,t)??e.source,r=JSON.stringify(e.targets).replace(/</g,"\\u003c"),o=JSON.stringify(e.hiddenTargets??[]).replace(/</g,"\\u003c"),l=JSON.stringify(e.introWordmark??null).replace(/</g,"\\u003c"),s=JSON.stringify(t),p=i?"filter: invert(1) hue-rotate(180deg) saturate(.92) brightness(1.02) !important;":"",g=e.introWordmark?`${e.introWordmark.sceneSelector} .tx { font-size: ${e.introWordmark.fontSize}px !important; }`:"",v=`<style data-threeui-focus>
html, body { width: 100% !important; height: 100% !important; min-height: 0 !important; margin: 0 !important; padding: 0 !important; overflow: hidden !important; background: ${a} !important; color-scheme: ${t} !important; }
body { position: relative !important; display: flex !important; align-items: center !important; justify-content: center !important; }
body > * { visibility: hidden !important; }
body[data-threeui-ready] > [data-threeui-role] { visibility: visible !important; }
[data-threeui-residual] { display: none !important; }
[data-threeui-hidden] { display: none !important; }
[data-threeui-role="background"] { position: fixed !important; inset: 0 !important; width: 100% !important; height: 100% !important; max-width: none !important; max-height: none !important; z-index: 0 !important; opacity: 1 !important; pointer-events: none !important; ${p} }
[data-threeui-role="background"][data-threeui-fit="contain-square"] { position: absolute !important; top: 50% !important; right: auto !important; bottom: auto !important; left: 50% !important; width: min(100vw, 100vh) !important; height: min(100vw, 100vh) !important; aspect-ratio: 1 / 1 !important; transform: translate(-50%, -50%) !important; }
[data-threeui-role="button"] { position: relative !important; z-index: 2 !important; opacity: 1 !important; flex: none !important; }
[data-threeui-role="button"]:not([data-threeui-preserve-transform]) { transform: none !important; }
[data-threeui-role="visual"] { position: relative !important; z-index: 1 !important; width: min(100%, 1040px) !important; max-width: 1040px !important; max-height: 100% !important; margin: auto !important; padding: 24px !important; overflow: auto !important; opacity: 1 !important; filter: none !important; }
[data-threeui-role="visual"]:not([data-threeui-preserve-transform]) { transform: none !important; }
[data-threeui-role="visual"][data-threeui-fit="contain-square"] { flex: none !important; width: min(calc(100vw - 32px), calc(100vh - 32px)) !important; max-width: none !important; height: min(calc(100vw - 32px), calc(100vh - 32px)) !important; max-height: none !important; aspect-ratio: 1 / 1 !important; padding: 0 !important; overflow: hidden !important; }
[data-threeui-role="visual"][data-threeui-fit="wide-wordmark"] { width: min(calc(100vw - 48px), 1180px) !important; max-width: calc(100vw - 48px) !important; height: auto !important; max-height: none !important; aspect-ratio: 16 / 3 !important; padding: 0 !important; overflow: hidden !important; }
[data-threeui-role="visual"][data-threeui-fit="portrait-stage"] { position: absolute !important; top: 50% !important; right: auto !important; bottom: auto !important; left: 50% !important; width: 1080px !important; max-width: none !important; height: 1350px !important; max-height: none !important; padding: 0 !important; overflow: hidden !important; transform-origin: center !important; }
${g}
</style>`,f=`<script data-threeui-focus>
(function () {
  document.documentElement.dataset.sfMode = ${s};
  var isolated = false;
  function isolate() {
    if (isolated) return;
    var specs = ${r};
    var hiddenSelectors = ${o};
    var introWordmark = ${l};
    var roots = [];
    hiddenSelectors.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (element) {
        element.setAttribute('data-threeui-hidden', '');
        element.setAttribute('aria-hidden', 'true');
        if ('inert' in element) element.inert = true;
      });
    });
    specs.forEach(function (spec) {
      var element = document.querySelector(spec.selector);
      if (!element) return;
      element.setAttribute('data-threeui-role', spec.role);
      if (spec.fit) element.setAttribute('data-threeui-fit', spec.fit);
      if (spec.preserveTransform) element.setAttribute('data-threeui-preserve-transform', '');
      if (!roots.some(function (root) { return root.contains(element); })) roots.push(element);
    });
    if (introWordmark) {
      var introScene = document.querySelector(introWordmark.sceneSelector);
      var introText = introScene && introScene.querySelector('.tx');
      var introMark = introText && introText.querySelector('.mark');
      if (introText && introMark) {
        introMark.innerHTML = introWordmark.logoSvg;
        var introCharacters = Array.from(introText.children).filter(function (element) { return element !== introMark; });
        introCharacters.forEach(function (element, index) {
          element.textContent = introWordmark.text[index] === ' ' ? '\xA0' : (introWordmark.text[index] || '');
          element.style.display = index < introWordmark.text.length ? 'inline-block' : 'none';
        });
      }
      var introReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var introStartedAt = performance.now();
      function renderIntroWordmark(now) {
        if (typeof window.__seek !== 'function') return;
        if (introReducedMotion) {
          window.__seek(introWordmark.endTime);
          return;
        }
        var introCycle = introWordmark.endTime + introWordmark.holdTime;
        var introTime = ((now - introStartedAt) / 1000) % introCycle;
        window.__seek(Math.min(introTime, introWordmark.endTime));
        requestAnimationFrame(renderIntroWordmark);
      }
      requestAnimationFrame(renderIntroWordmark);
    }
    if (!roots.length) return;
    isolated = true;
    roots.forEach(function (root) {
      var placeholderLink = root.matches('a[href="#"]') ? root : root.querySelector('a[href="#"]');
      if (placeholderLink) placeholderLink.addEventListener('click', function (event) { event.preventDefault(); });
      document.body.appendChild(root);
    });
    Array.from(document.body.children).forEach(function (element) {
      if (roots.indexOf(element) !== -1) return;
      element.setAttribute('data-threeui-residual', '');
      element.setAttribute('aria-hidden', 'true');
      if ('inert' in element) element.inert = true;
    });
    document.body.setAttribute('data-threeui-ready', '');
    requestAnimationFrame(function () { window.dispatchEvent(new Event('resize')); });
  }
  function scheduleIsolation() { setTimeout(isolate, 100); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scheduleIsolation, { once: true });
  else scheduleIsolation();
  window.addEventListener('load', isolate, { once: true });
})();
<\/script>`;return n.replace(/<\/head>/i,`${v}</head>`).replace(/<\/body>/i,`${f}</body>`)}function vf({definition:e,mode:t=Sa.mode,hue:a=Sa.hue,saturation:i=Sa.saturation,brightness:n=Sa.brightness,runtime:r,trackPointerHover:o,className:l,style:s}){let p=(0,Et.useRef)(null),g=t==="light"?"light":"dark",v=mf(e,g),f=(0,Et.useMemo)(()=>jm(e,g),[e,g]),h=to(a,-180,180),y=to(i,0,2),k=to(n,.35,1.65),D=h===0&&y===1&&k===1?void 0:`hue-rotate(${h}deg) saturate(${y}) brightness(${k})`;(0,Et.useEffect)(()=>{let c=p.current;if(!o||!c)return;let u=!1,m=()=>{u&&(u=!1,c.contentWindow?.postMessage({threeuiRuntime:{hover:0}},"*"))},w=x=>{x.source===c.contentWindow&&x.data?.threeuiPointerOver&&(u=!0)},A=x=>{if(!u)return;let _=c.getBoundingClientRect();(x.clientX<_.left||x.clientX>_.right||x.clientY<_.top||x.clientY>_.bottom)&&m()};return window.addEventListener("message",w),window.addEventListener("pointermove",A,!0),c.addEventListener("pointerleave",m),document.addEventListener("mouseleave",m),window.addEventListener("blur",m),()=>{window.removeEventListener("message",w),window.removeEventListener("pointermove",A,!0),c.removeEventListener("pointerleave",m),document.removeEventListener("mouseleave",m),window.removeEventListener("blur",m)}},[o]);let d=r?JSON.stringify(r):null;return(0,Et.useEffect)(()=>{let c=p.current;if(!c||!d)return;let u=()=>c.contentWindow?.postMessage({threeuiRuntime:JSON.parse(d)},"*");return u(),c.addEventListener("load",u),()=>c.removeEventListener("load",u)},[d,f]),(0,ao.jsx)("iframe",{ref:p,className:l,"data-mode":g,title:e.title,srcDoc:f,sandbox:"allow-scripts",loading:"eager",style:{display:"block",width:"100%",height:"100%",border:0,background:v,filter:D,...s}})}function Y(e){return function(a){return(0,ao.jsx)(vf,{...a,definition:e})}}var cv=Y(B.expanse),dv=Y(B.starfield),uv=Y(B.particleOrb),pv={tachometer:B.performanceGaugesTachometer,speedometer:B.performanceGaugesSpeedometer,boost:B.performanceGaugesBoost,power:B.performanceGaugesPower},fv={...Sa,variant:"tachometer"};var hv=Y(B.logicCore),gv=Y(B.ignition),mv=Y(B.induction),vv=Y(B.aetherisLabs),bv=Y(B.tactile),xv=Y(B.thinking);var yv=Y(B.slidingTextCta),wv=Y(B.floatingDotsCta),kv=Y(B.launchButton),Sv=Y(B.dotBorderButton),_v=Y(B.gradientCta),Tv=Y(B.spinningBorderButton),Ev=Y(B.glassmorphismCta),Av=Y(B.generateButton),Mv=Y(B.gradientPillButton),Cv=Y(B.gradientBeamCta);var zv=Y(B.threeUIIntro),Rv=Y(B.particleWordmark),Lv=Y(B.audioWordmark);function bf({variant:e=Vs.variant,font:t,weight:a,headlineSize:i,...n}){let r=Sn[e]??Sn[Vs.variant],o=(0,Et.useMemo)(()=>({...B.galleryHeading,title:`${r.title} canvas animation`,transformSource:(s,p)=>gf(s,p,r)}),[r]),l=(0,Et.useMemo)(()=>{let s=r.type,p=a&&Am.includes(a)?a:s.weight;return{font:(t&&mi[t])??mi[s.font],weight:p,headlineSize:to(i??s.headlineSize,.6,1.8)}},[r,t,i,a]);return(0,ao.jsx)(vf,{...n,definition:o,runtime:l,trackPointerHover:!0})}var Dv=Y(B.dimensional),Ov=Y(B.cloud),Bv=Y(B.vertex9),Hv=Y(B.topology),qv=Y(B.voidField);var Qe=aa(kn(),1),io=Sn["rising-diagonal"],wf=["Website","Home Style"],vi=document.createElement("canvas").getContext("2d");if(!vi)throw new Error("Gallery Heading requires Canvas 2D.");vi.font="400 100px "+mi.sans;var Fm=(vi.measureText("H").actualBoundingBoxAscent||71)/100;vi.font="400 "+142/Fm+"px "+mi.sans;vi.letterSpacing=io.type.tracking*142+"px";function xf(e){let t=vi.measureText(e);return(t.actualBoundingBoxRight||t.width)+(t.actualBoundingBoxLeft||0)}var Ym=wf.map((e,t)=>io.headlineWidths[t]*xf(e)/xf(io.headline[t]));Object.assign(io,{title:"Website Home Style",headline:wf,headlineWidths:Ym});function Vm(){let e=(0,rt.useRef)(null),t=(0,rt.useRef)(!1),a=(0,rt.useRef)(null),[i,n]=(0,rt.useState)(!1),[r,o]=(0,rt.useState)(!1),[l,s]=(0,rt.useState)({mode:"idle",speed:0}),p={idle:"\u79FB\u5165\u9884\u89C8",settling:"\u5E73\u6ED1\u505C\u8F6C",normal:"\u6B63\u5E38\u65CB\u8F6C",card:"\u5361\u7247\u51CF\u901F",drag:"\u8DDF\u968F\u62D6\u52A8",coast:"\u60EF\u6027\u56DE\u843D"};function g(c){e.current?.querySelector("iframe")?.contentWindow?.postMessage({galleryInteraction:c},"*")}function v(c){t.current!==c&&(t.current=c,n(c),e.current?.querySelector("iframe")?.contentWindow?.postMessage({threeuiRuntime:{hover:c?1:0}},"*"))}function f(c){let u=e.current.getBoundingClientRect();return{x:(c.clientX-u.left)/u.width,y:(c.clientY-u.top)/u.height}}function h(c){let u=f(c),m=a.current;m&&m.id===c.pointerId?g({...u,pointer:!0,inside:!0,dragging:!0}):g({...u,pointer:!0,inside:!0}),v(!0)}function y(c){c.button===0&&(c.currentTarget.setPointerCapture(c.pointerId),a.current={id:c.pointerId},o(!0),v(!0),g({...f(c),pointer:!0,inside:!0,dragging:!0}))}function k(c,u=!1){if(!a.current||a.current.id!==c.pointerId)return;a.current=null,o(!1),c.currentTarget.hasPointerCapture(c.pointerId)&&c.currentTarget.releasePointerCapture(c.pointerId);let m=f(c),w=!u&&m.x>=0&&m.x<=1&&m.y>=0&&m.y<=1;v(w),g({...m,pointer:w,inside:w,dragging:!1,...u?{clear:!0}:{}})}function D(){a.current||(v(!1),g({pointer:!1,inside:!1,dragging:!1}))}function d(){a.current=null,o(!1),v(!1),g({clear:!0,inside:!1})}return(0,rt.useEffect)(()=>{let c=e.current?.querySelector("iframe"),u=()=>c?.contentWindow?.postMessage({threeuiRuntime:{hover:t.current?1:0}},"*"),m=A=>{let x=A.data?.galleryFeedback;A.source===c?.contentWindow&&x&&Object.hasOwn(p,x.mode)&&Number.isFinite(x.speed)&&s({mode:x.mode,speed:Math.max(0,Math.min(10,x.speed))})},w=()=>{document.hidden&&d()};return c?.addEventListener("load",u),window.addEventListener("message",m),window.addEventListener("blur",d),document.addEventListener("visibilitychange",w),()=>{c?.removeEventListener("load",u),window.removeEventListener("message",m),window.removeEventListener("blur",d),document.removeEventListener("visibilitychange",w)}},[]),(0,Qe.jsxs)("main",{className:"gallery-case",children:[(0,Qe.jsx)("h1",{className:"sr-only",children:"Website Home Style"}),(0,Qe.jsxs)("div",{className:"shader-frame",ref:e,children:[(0,Qe.jsx)(bf,{variant:"rising-diagonal",mode:"dark",font:"sans",weight:"400",headlineSize:1.15,hue:0,saturation:1,brightness:1}),(0,Qe.jsx)("button",{className:"pointer-surface"+(r?" is-dragging":""),type:"button","aria-label":"\u753B\u5ECA\u4EA4\u4E92\uFF1A\u60AC\u505C\u5361\u7247\u51CF\u901F\uFF0C\u62D6\u52A8\u8DDF\u968F\u9F20\u6807\u65B9\u5411\uFF0C\u7A7A\u683C\u5207\u6362\uFF0CEsc\u505C\u6B62","aria-pressed":i,onPointerEnter:h,onPointerMove:h,onPointerLeave:D,onPointerDown:y,onPointerUp:c=>k(c),onPointerCancel:c=>k(c,!0),onLostPointerCapture:c=>k(c,!0),onMouseEnter:()=>v(!0),onMouseLeave:D,onMouseMove:c=>{a.current||(v(!0),g({...f(c),pointer:!0,inside:!0}))},onClick:c=>{v(!0),c.detail&&g({...f(c),pointer:!0,inside:!0})},onBlur:d,onKeyDown:c=>{(c.key===" "||c.key==="Enter")&&(c.preventDefault(),g({pointer:!1,dragging:!1}),v(!t.current)),c.key==="Escape"&&d()}}),(0,Qe.jsxs)("div",{className:"gallery-feedback","aria-hidden":"true",children:[(0,Qe.jsx)("span",{children:"\u60AC\u505C\u5361\u7247\u51CF\u901F \xB7 \u62D6\u52A8\u65CB\u8F6C"}),(0,Qe.jsxs)("span",{children:[p[l.mode],l.mode!=="drag"&&l.speed>.01?" \xB7 "+l.speed.toFixed(2)+"\xD7":""]})]})]})]})}(0,yf.createRoot)(document.querySelector("#root")).render((0,Qe.jsx)(Vm,{}));})();
/*! For license information please see app.bundle.js.LEGAL.txt */
