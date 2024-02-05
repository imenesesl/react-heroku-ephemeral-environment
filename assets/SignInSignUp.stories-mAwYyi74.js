var ri=Object.defineProperty;var ii=(n,e,t)=>e in n?ri(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var je=(n,e,t)=>(ii(n,typeof e!="symbol"?e+"":e,t),t);import{j as _}from"./jsx-runtime-vNq4Oc-g.js";import{i as L}from"./tiny-invariant-bHgPayXn.js";import{r as w}from"./index-4g5l5LRQ.js";import{B as hn,G as si,F as oi}from"./Button-xdxp-r5h.js";import"./_commonjsHelpers-4gQjN7DL.js";const fn="pushstate",pn="popstate",Qn="beforeunload",Zn=n=>(n.preventDefault(),n.returnValue=""),ai=()=>{removeEventListener(Qn,Zn,{capture:!0})};function er(n){let e=n.getLocation(),t=new Set,r=[];const i=()=>{e=n.getLocation(),t.forEach(o=>o())},s=async o=>{var a;if(typeof document<"u"&&r.length){for(let c of r)if(!await c()){(a=n.onBlocked)==null||a.call(n,i);return}}o()};return{get location(){return e},subscribe:o=>(t.add(o),()=>{t.delete(o)}),push:(o,a)=>{a=gn(a),s(()=>{n.pushState(o,a),i()})},replace:(o,a)=>{a=gn(a),s(()=>{n.replaceState(o,a),i()})},go:o=>{s(()=>{n.go(o)})},back:()=>{s(()=>{n.back()})},forward:()=>{s(()=>{n.forward()})},createHref:o=>n.createHref(o),block:o=>(r.push(o),r.length===1&&addEventListener(Qn,Zn,{capture:!0}),()=>{r=r.filter(a=>a!==o),r.length||ai()}),flush:()=>{var o;return(o=n.flush)==null?void 0:o.call(n)},destroy:()=>{var o;return(o=n.destroy)==null?void 0:o.call(n)},notify:i}}function gn(n){return n||(n={}),{...n,key:tr()}}function ci(n){const e=(n==null?void 0:n.window)??(typeof document<"u"?window:void 0),t=(n==null?void 0:n.createHref)??(p=>p),r=(n==null?void 0:n.parseLocation)??(()=>Ct(`${e.location.pathname}${e.location.search}${e.location.hash}`,e.history.state));let i=r(),s;const o=()=>i;let a,c=!0,l;const d=p=>{c=!1,p(),c=!0},f=()=>{d(()=>{a&&(e.history[a.isPush?"pushState":"replaceState"](a.state,"",a.href),a=void 0,l=void 0,s=void 0)})},u=(p,v,b)=>{const R=t(v);l||(s=i),i=Ct(v,b),a={href:R,state:b,isPush:(a==null?void 0:a.isPush)||p==="push"},l||(l=Promise.resolve().then(()=>f()))},h=()=>{i=r(),I.notify()};var g=e.history.pushState,m=e.history.replaceState;const I=er({getLocation:o,pushState:(p,v)=>u("push",p,v),replaceState:(p,v)=>u("replace",p,v),back:()=>e.history.back(),forward:()=>e.history.forward(),go:p=>e.history.go(p),createHref:p=>t(p),flush:f,destroy:()=>{e.history.pushState=g,e.history.replaceState=m,e.removeEventListener(fn,h),e.removeEventListener(pn,h)},onBlocked:p=>{s&&i!==s&&(i=s,p())}});return e.addEventListener(fn,h),e.addEventListener(pn,h),e.history.pushState=function(){let p=g.apply(e.history,arguments);return c&&I.notify(),p},e.history.replaceState=function(){let p=m.apply(e.history,arguments);return c&&I.notify(),p},I}function li(n={initialEntries:["/"]}){const e=n.initialEntries;let t=n.initialIndex??e.length-1,r={key:tr()};return er({getLocation:()=>Ct(e[t],r),pushState:(s,o)=>{r=o,e.push(s),t++},replaceState:(s,o)=>{r=o,e[t]=s},back:()=>{t--},forward:()=>{t=Math.min(t+1,e.length-1)},go:s=>{t=Math.min(Math.max(t+s,0),e.length-1)},createHref:s=>s})}function Ct(n,e){let t=n.indexOf("#"),r=n.indexOf("?");return{href:n,pathname:n.substring(0,t>0?r>0?Math.min(t,r):t:r>0?r:n.length),hash:t>-1?n.substring(t):"",search:r>-1?n.slice(r,t===-1?void 0:t):"",state:e||{}}}function tr(){return(Math.random()+1).toString(36).substring(7)}let pt=w.createContext(null);function nr(){return typeof document>"u"?pt:window.__TSR_ROUTER_CONTEXT__?window.__TSR_ROUTER_CONTEXT__:(window.__TSR_ROUTER_CONTEXT__=pt,pt)}function le(n){const e=w.useContext(nr());return n==null||n.warn,e}var rr={exports:{}},ir={},sr={exports:{}},or={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie=w;function ui(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var di=typeof Object.is=="function"?Object.is:ui,hi=Ie.useState,fi=Ie.useEffect,pi=Ie.useLayoutEffect,gi=Ie.useDebugValue;function mi(n,e){var t=e(),r=hi({inst:{value:t,getSnapshot:e}}),i=r[0].inst,s=r[1];return pi(function(){i.value=t,i.getSnapshot=e,gt(i)&&s({inst:i})},[n,t,e]),fi(function(){return gt(i)&&s({inst:i}),n(function(){gt(i)&&s({inst:i})})},[n]),gi(t),t}function gt(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!di(n,t)}catch{return!0}}function _i(n,e){return e()}var vi=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?_i:mi;or.useSyncExternalStore=Ie.useSyncExternalStore!==void 0?Ie.useSyncExternalStore:vi;sr.exports=or;var yi=sr.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ot=w,Ii=yi;function Si(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var bi=typeof Object.is=="function"?Object.is:Si,wi=Ii.useSyncExternalStore,Ei=ot.useRef,Ti=ot.useEffect,Ri=ot.useMemo,Pi=ot.useDebugValue;ir.useSyncExternalStoreWithSelector=function(n,e,t,r,i){var s=Ei(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=Ri(function(){function c(h){if(!l){if(l=!0,d=h,h=r(h),i!==void 0&&o.hasValue){var g=o.value;if(i(g,h))return f=g}return f=h}if(g=f,bi(d,h))return g;var m=r(h);return i!==void 0&&i(g,m)?g:(d=h,f=m)}var l=!1,d,f,u=t===void 0?null:t;return[function(){return c(e())},u===null?void 0:function(){return c(u())}]},[e,t,r,i]);var a=wi(n,s[0],s[1]);return Ti(function(){o.hasValue=!0,o.value=a},[a]),Pi(a),a};rr.exports=ir;var Ci=rr.exports,Ai=class{constructor(n,e){this.listeners=new Set,this._batching=!1,this._flushing=0,this._nextPriority=null,this.subscribe=t=>{var i,s;this.listeners.add(t);const r=(s=(i=this.options)==null?void 0:i.onSubscribe)==null?void 0:s.call(i,t,this);return()=>{this.listeners.delete(t),r==null||r()}},this.setState=(t,r)=>{var o,a,c,l,d;const i=this.state;this.state=(o=this.options)!=null&&o.updateFn?this.options.updateFn(i)(t):t(i);const s=(r==null?void 0:r.priority)??((a=this.options)==null?void 0:a.defaultPriority)??"high";this._nextPriority===null?this._nextPriority=s:this._nextPriority==="high"?this._nextPriority=s:this._nextPriority=((c=this.options)==null?void 0:c.defaultPriority)??"high",(d=(l=this.options)==null?void 0:l.onUpdate)==null||d.call(l,{priority:this._nextPriority}),this._flush()},this._flush=()=>{if(this._batching)return;const t=++this._flushing;this.listeners.forEach(r=>{this._flushing===t&&r({priority:this._nextPriority??"high"})})},this.batch=t=>{if(this._batching)return t();this._batching=!0,t(),this._batching=!1,this._flush()},this.state=n,this.options=e}};function ki(n,e=t=>t){return Ci.useSyncExternalStoreWithSelector(n.subscribe,()=>n.state,()=>n.state,e,Oi)}function Oi(n,e){if(Object.is(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;const t=Object.keys(n);if(t.length!==Object.keys(e).length)return!1;for(let r=0;r<t.length;r++)if(!Object.prototype.hasOwnProperty.call(e,t[r])||!Object.is(n[t[r]],e[t[r]]))return!1;return!0}function Wt(n){const e=n.errorComponent??zt;return _.jsx(Li,{getResetKey:n.getResetKey,onCatch:n.onCatch,children:({error:t})=>t?w.createElement(e,{error:t}):n.children})}class Li extends w.Component{constructor(){super(...arguments),this.state={error:null}}static getDerivedStateFromProps(e){var t;return{resetKey:(t=e.getResetKey)==null?void 0:t.call(e)}}static getDerivedStateFromError(e){return{error:e}}componentDidUpdate(e,t){t.error&&t.resetKey!==this.state.resetKey&&this.setState({error:null})}componentDidCatch(e){var t,r;this.props.onCatch?(r=(t=this.props).onCatch)==null||r.call(t,e):console.error(e)}render(){return this.props.children(this.state)}}function zt({error:n}){const[e,t]=w.useState(!1);return _.jsxs("div",{style:{padding:".5rem",maxWidth:"100%"},children:[_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:".5rem"},children:[_.jsx("strong",{style:{fontSize:"1rem"},children:"Something went wrong!"}),_.jsx("button",{style:{appearance:"none",fontSize:".6em",border:"1px solid currentColor",padding:".1rem .2rem",fontWeight:"bold",borderRadius:".25rem"},onClick:()=>t(r=>!r),children:e?"Hide Error":"Show Error"})]}),_.jsx("div",{style:{height:".25rem"}}),e?_.jsx("div",{children:_.jsx("pre",{style:{fontSize:".7em",border:"1px solid red",borderRadius:".25rem",padding:".3rem",color:"red",overflow:"auto"},children:n.message?_.jsx("code",{children:n.message}):null})}):null]})}function H(n){const e=le({warn:(n==null?void 0:n.router)===void 0});return ki(((n==null?void 0:n.router)||e).__store,n==null?void 0:n.select)}function Gt(n){return n[n.length-1]}function Mi(n){return typeof n=="function"}function He(n,e){return Mi(n)?n(e):n}function Pe(n,e){return e.reduce((t,r)=>(t[r]=n[r],t),{})}function Y(n,e){if(n===e)return n;const t=e,r=_n(n)&&_n(t);if(r||Xe(n)&&Xe(t)){const i=r?n:Object.keys(n),s=i.length,o=r?t:Object.keys(t),a=o.length,c=r?[]:{};let l=0;for(let d=0;d<a;d++){const f=r?d:o[d];!r&&n[f]===void 0&&t[f]===void 0&&i.includes(f)?(c[f]=void 0,l++):(c[f]=Y(n[f],t[f]),c[f]===n[f]&&n[f]!==void 0&&l++)}return s===a&&l===s?n:c}return t}function Xe(n){if(!mn(n))return!1;const e=n.constructor;if(typeof e>"u")return!0;const t=e.prototype;return!(!mn(t)||!t.hasOwnProperty("isPrototypeOf"))}function mn(n){return Object.prototype.toString.call(n)==="[object Object]"}function _n(n){return Array.isArray(n)&&n.length===Object.keys(n).length}function Qe(n,e,t=!1){if(n===e)return!0;if(typeof n!=typeof e)return!1;if(Xe(n)&&Xe(e)){const r=Object.keys(n),i=Object.keys(e);return!t&&r.length!==i.length?!1:!i.some(s=>!(s in n)||!Qe(n[s],e[s],t))}return Array.isArray(n)&&Array.isArray(e)?!n.some((r,i)=>!Qe(r,e[i],t)):!1}const mt=typeof window<"u"?w.useLayoutEffect:w.useEffect;function Ni(n){return n.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/"/g,'\\"')}function Ce(n){return!!(n!=null&&n.isNotFound)}function Di(n){const e=H({select:t=>`not-found-${t.location.pathname}-${t.status}`});return _.jsx(Wt,{getResetKey:()=>e,onCatch:t=>{var r;if(Ce(t))(r=n.onCatch)==null||r.call(n,t);else throw t},errorComponent:({error:t})=>{var r;return(r=n.fallback)==null?void 0:r.call(n,t)},children:n.children})}function xi(){return _.jsx("p",{children:"Not Found"})}const at=w.createContext(void 0);function vn(){const n=le(),e=H({select:t=>{var r;return(r=j(t)[0])==null?void 0:r.id}});return _.jsx(at.Provider,{value:e,children:_.jsx(Wt,{getResetKey:()=>{var t;return(t=n.state.resolvedLocation.state)==null?void 0:t.key},errorComponent:zt,onCatch:t=>{console.error(t)},children:e?_.jsx(ar,{matchId:e}):null})})}function _t(n){return _.jsx(_.Fragment,{children:n.children})}function ar({matchId:n}){var e,t,r,i;const s=le(),o=H({select:m=>{var I;return(I=j(m).find(p=>p.id===n))==null?void 0:I.routeId}});L(o);const a=s.routesById[o],c=a.options.pendingComponent??s.options.defaultPendingComponent,l=c?_.jsx(c,{}):null,d=a.options.errorComponent??s.options.defaultErrorComponent??zt,f=a.isRoot?a.options.notFoundComponent??((e=s.options.notFoundRoute)==null?void 0:e.options.component):a.options.notFoundComponent,u=a.options.wrapInSuspense??c??((t=a.options.component)==null?void 0:t.preload)??((r=a.options.pendingComponent)==null?void 0:r.preload)??((i=a.options.errorComponent)==null?void 0:i.preload)?w.Suspense:_t,h=d?Wt:_t,g=f?Di:_t;return _.jsx(at.Provider,{value:n,children:_.jsx(u,{fallback:l,children:_.jsx(h,{getResetKey:()=>{var m;return(m=s.state.resolvedLocation.state)==null?void 0:m.key},errorComponent:d,onCatch:m=>{if(Ce(m))throw m;console.error(m)},children:_.jsx(g,{fallback:m=>{if(!f||m.global&&!a.isRoot)throw m;return w.createElement(f,{data:m.data})},children:_.jsx(Ui,{matchId:n,pendingElement:l})})})})})}function Ui({matchId:n,pendingElement:e}){var t;const r=le(),i=H({select:a=>{var c;return(c=j(a).find(l=>l.id===n))==null?void 0:c.routeId}}),s=r.routesById[i],o=H({select:a=>Pe(j(a).find(c=>c.id===n),["status","error","showPending","loadPromise","notFoundError"])});if(o.notFoundError)return i===N&&!s.options.notFoundComponent?_.jsx(xi,{}):(L(s.options.notFoundComponent),_.jsx(s.options.notFoundComponent,{data:o.notFoundError}));if(o.status==="error")throw $i(o.error)?(((t=r.options.errorSerializer)==null?void 0:t.deserialize)??ji)(o.error.data):o.error;if(o.status==="pending"){if(o.showPending)return e;throw o.loadPromise}if(o.status==="success"){let a=s.options.component??r.options.defaultComponent;return a?_.jsx(a,{}):_.jsx(cr,{})}L(!1)}const cr=w.memo(function(){const e=w.useContext(at),t=H({select:r=>{var i;const s=j(r),o=s.findIndex(a=>a.id===e);return(i=s[o+1])==null?void 0:i.id}});return t?_.jsx(ar,{matchId:t}):null});function j(n){var e;return(e=n.pendingMatches)!=null&&e.some(t=>t.showPending)?n.pendingMatches:n.matches}function Se(n){var e;const t=le(),r=w.useContext(at),i=(e=j(t.state).find(a=>a.id===r))==null?void 0:e.routeId,s=(()=>{const a=j(t.state);return(n!=null&&n.from?a.find(l=>l.routeId===(n==null?void 0:n.from)):a.find(l=>l.id===r)).routeId})();return((n==null?void 0:n.strict)??!0)&&L(i==s),H({select:a=>{const c=j(a).find(l=>l.id===r);return L(c,`Could not find ${n!=null&&n.from?`an active match from "${n.from}"`:"a nearest match!"}`),n!=null&&n.select?n.select(c):c}})}function Fi(n){return Se({...n,select:e=>typeof n.select=="function"?n.select(e==null?void 0:e.loaderDeps):e==null?void 0:e.loaderDeps})}function Bi(n){return Se({...n,select:e=>typeof n.select=="function"?n.select(e==null?void 0:e.loaderData):e==null?void 0:e.loaderData})}function $i(n){return!(typeof n=="object"&&n&&"data"in n)||!("__isServerError"in n&&n.__isServerError)||!(typeof n.data=="object"&&n.data)?!1:n.__isServerError===!0}function ji(n){if("name"in n&&"message"in n){const e=new Error(n.message);return e.name=n.name,e}return n.data}function ee(n){return ct(n.filter(Boolean).join("/"))}function ct(n){return n.replace(/\/{2,}/g,"/")}function Kt(n){return n==="/"?n:n.replace(/^\/{1,}/,"")}function Ge(n){return n==="/"?n:n.replace(/\/{1,}$/,"")}function Hi(n){return Ge(Kt(n))}function Vi(n,e,t){e=e.replace(new RegExp(`^${n}`),"/"),t=t.replace(new RegExp(`^${n}`),"/");let r=be(e);const i=be(t);i.forEach((o,a)=>{var c;if(o.value==="/")a?a===i.length-1&&r.push(o):r=[o];else if(o.value==="..")r.length>1&&((c=Gt(r))==null?void 0:c.value)==="/"&&r.pop(),r.pop();else{if(o.value===".")return;r.push(o)}});const s=ee([n,...r.map(o=>o.value)]);return ct(s)}function be(n){if(!n)return[];n=ct(n);const e=[];if(n.slice(0,1)==="/"&&(n=n.substring(1),e.push({type:"pathname",value:"/"})),!n)return e;const t=n.split("/").filter(Boolean);return e.push(...t.map(r=>r==="$"||r==="*"?{type:"wildcard",value:r}:r.charAt(0)==="$"?{type:"param",value:r}:{type:"pathname",value:r})),n.slice(-1)==="/"&&(n=n.substring(1),e.push({type:"pathname",value:"/"})),e}function vt({path:n,params:e,leaveWildcards:t,leaveParams:r}){const i=be(n);return ee(i.map(s=>{if(s.type==="wildcard"){const o=e._splat;return t?`${s.value}${o??""}`:o}if(s.type==="param"){if(r){const o=e[s.value];return`${s.value}${o??""}`}return e[s.value.substring(1)]??"undefined"}return s.value}))}function yt(n,e,t){const r=zi(n,e,t);if(!(t.to&&!r))return r??{}}function Wi(n,e){return n!="/"?e.substring(n.length):e}function zi(n,e,t){e=Wi(n,e);const r=`${t.to??"$"}`,i=be(e),s=be(r);e.startsWith("/")||i.unshift({type:"pathname",value:"/"}),r.startsWith("/")||s.unshift({type:"pathname",value:"/"});const o={};return(()=>{for(let c=0;c<Math.max(i.length,s.length);c++){const l=i[c],d=s[c],f=c>=i.length-1,u=c>=s.length-1;if(d){if(d.type==="wildcard"){if(l!=null&&l.value){const h=decodeURI(ee(i.slice(c).map(g=>g.value)));return o["*"]=h,o._splat=h,!0}return!1}if(d.type==="pathname"){if(d.value==="/"&&!(l!=null&&l.value))return!0;if(l){if(t.caseSensitive){if(d.value!==l.value)return!1}else if(d.value.toLowerCase()!==l.value.toLowerCase())return!1}}if(!l)return!1;if(d.type==="param"){if((l==null?void 0:l.value)==="/")return!1;l.value.charAt(0)!=="$"&&(o[d.value.substring(1)]=decodeURI(l.value))}}if(!f&&u)return o["**"]=ee(i.slice(c+1).map(h=>h.value)),!!t.fuzzy&&(d==null?void 0:d.value)!=="/"}return!0})()?o:void 0}function Gi(n){return H({select:e=>{var t;const r=(t=Gt(j(e)))==null?void 0:t.params;return n!=null&&n.select?n.select(r):r}})}function Ki(n){return Se({...n,select:e=>n!=null&&n.select?n.select(e.search):e.search})}const N="__root__";class lr{constructor(e){this.init=t=>{var r,i;this.originalIndex=t.originalIndex;const s=this.options,o=!(s!=null&&s.path)&&!(s!=null&&s.id);this.parentRoute=(i=(r=this.options)==null?void 0:r.getParentRoute)==null?void 0:i.call(r),o?this.path=N:L(this.parentRoute);let a=o?N:s.path;a&&a!=="/"&&(a=Kt(a));const c=(s==null?void 0:s.id)||a;let l=o?N:ee([this.parentRoute.id===N?"":this.parentRoute.id,c]);a===N&&(a="/"),l!==N&&(l=ee(["/",l]));const d=l===N?"/":ee([this.parentRoute.fullPath,a]);this.path=a,this.id=l,this.fullPath=d,this.to=d},this.addChildren=t=>(this.children=t,this),this.updateLoader=t=>(Object.assign(this.options,t),this),this.update=t=>(Object.assign(this.options,t),this),this.lazy=t=>(this.lazyFn=t,this),this.useMatch=t=>Se({...t,from:this.id}),this.useRouteContext=t=>Se({...t,from:this.id,select:r=>t!=null&&t.select?t.select(r.context):r.context}),this.useSearch=t=>Ki({...t,from:this.id}),this.useParams=t=>Gi({...t,from:this.id}),this.useLoaderDeps=t=>Fi({...t,from:this.id}),this.useLoaderData=t=>Bi({...t,from:this.id}),this.options=e||{},this.isRoot=!(e!=null&&e.getParentRoute),L(!(e!=null&&e.id&&(e!=null&&e.path))),this.$$typeof=Symbol.for("react.memo")}}function qi(n){return new lr(n)}class Ji extends lr{constructor(e){super(e)}}function Yi(n,e){var t,r,i,s="";for(t in n)if((i=n[t])!==void 0)if(Array.isArray(i))for(r=0;r<i.length;r++)s&&(s+="&"),s+=encodeURIComponent(t)+"="+encodeURIComponent(i[r]);else s&&(s+="&"),s+=encodeURIComponent(t)+"="+encodeURIComponent(i);return(e||"")+s}function yn(n){if(!n)return"";var e=decodeURIComponent(n);return e==="false"?!1:e==="true"?!0:+e*0===0&&+e+""===e?+e:e}function Xi(n,e){for(var t,r,i={},s=(e?n.substr(e.length):n).split("&");t=s.shift();)t=t.split("="),r=t.shift(),i[r]!==void 0?i[r]=[].concat(i[r],yn(t.shift())):i[r]=yn(t.shift());return i}const Qi=es(JSON.parse),Zi=ts(JSON.stringify,JSON.parse);function es(n){return e=>{e.substring(0,1)==="?"&&(e=e.substring(1));let t=Xi(e);for(let r in t){const i=t[r];if(typeof i=="string")try{t[r]=n(i)}catch{}}return t}}function ts(n,e){function t(r){if(typeof r=="object"&&r!==null)try{return n(r)}catch{}else if(typeof r=="string"&&typeof e=="function")try{return e(r),n(r)}catch{}return r}return r=>{r={...r},r&&Object.keys(r).forEach(s=>{const o=r[s];typeof o>"u"||o===void 0?delete r[s]:r[s]=t(o)});const i=Yi(r).toString();return i?`?${i}`:""}}const ns=w.useTransition||(()=>[!1,n=>{n()}]);function rs({router:n,...e}){n.update({...n.options,...e,context:{...n.options.context,...e==null?void 0:e.context}});const t=n.options.InnerWrap?_.jsx(n.options.InnerWrap,{children:_.jsx(vn,{})}):_.jsx(vn,{}),r=nr(),i=_.jsxs(r.Provider,{value:n,children:[t,_.jsx(is,{})]});return n.options.Wrap?_.jsx(n.options.Wrap,{children:i}):i}function is(){const n=le(),e=w.useRef({router:n,mounted:!1}),t=H({select:o=>Pe(o,["isLoading","location","resolvedLocation","isTransitioning"])}),[r,i]=ns();n.startReactTransition=i,w.useEffect(()=>{r&&n.__store.setState(o=>({...o,isTransitioning:r}))},[r]);const s=()=>{(a=>{t.isTransitioning?a():i(()=>a())})(()=>{try{n.load()}catch(a){console.error(a)}})};return mt(()=>{const o=n.history.subscribe(()=>{n.latestLocation=n.parseLocation(n.latestLocation),t.location!==n.latestLocation&&s()}),a=n.buildLocation({search:!0,params:!0,hash:!0,state:!0});return t.location.href!==a.href&&n.commitLocation({...a,replace:!0}),()=>{o()}},[n.history]),mt(()=>{var o;if(w.useTransition?t.isTransitioning&&!r:!t.isLoading&&t.resolvedLocation!==t.location){if(n.emit({type:"onResolved",fromLocation:t.resolvedLocation,toLocation:t.location,pathChanged:t.location.href!==((o=t.resolvedLocation)==null?void 0:o.href)}),document.querySelector&&t.location.hash!==""){const a=document.getElementById(t.location.hash);a&&a.scrollIntoView()}n.__store.setState(a=>({...a,isTransitioning:!1,resolvedLocation:a.location}))}},[t.isTransitioning,r,t.isLoading,t.resolvedLocation,t.location]),mt(()=>{window.__TSR_DEHYDRATED__||e.current.router===n&&e.current.mounted||(e.current={router:n,mounted:!0},s())},[n]),null}function It(n,e){return[...n.cachedMatches,...n.pendingMatches??[],...n.matches].find(t=>t.id===e)}function fe(n){return!!(n!=null&&n.isRedirect)}const ss=["component","errorComponent","pendingComponent","notFoundComponent"];function os(n){return new as(n)}class as{constructor(e){this.tempLocationKey=`${Math.round(Math.random()*1e7)}`,this.resetNextScroll=!0,this.navigateTimeout=null,this.latestLoadPromise=Promise.resolve(),this.subscribers=new Set,this.injectedHtml=[],this.startReactTransition=t=>t(),this.update=t=>{t.notFoundRoute&&console.warn("The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/guide/not-found-errors#migrating-from-notfoundroute for more info.");const r=this.options;this.options={...this.options,...t},(!this.basepath||t.basepath&&t.basepath!==r.basepath)&&(t.basepath===void 0||t.basepath===""||t.basepath==="/"?this.basepath="/":this.basepath=`/${Hi(t.basepath)}`),(!this.history||this.options.history&&this.options.history!==this.history)&&(this.history=this.options.history??(typeof document<"u"?ci():li({initialEntries:[this.options.basepath||"/"]})),this.latestLocation=this.parseLocation()),this.options.routeTree!==this.routeTree&&(this.routeTree=this.options.routeTree,this.buildRouteTree()),this.__store||(this.__store=new Ai(us(this.latestLocation),{onUpdate:()=>{this.__store.state={...this.state,status:this.state.isTransitioning||this.state.isLoading?"pending":"idle"}}}))},this.buildRouteTree=()=>{this.routesById={},this.routesByPath={};const t=this.options.notFoundRoute;t&&(t.init({originalIndex:99999999999}),this.routesById[t.id]=t);const r=s=>{s.forEach((o,a)=>{o.init({originalIndex:a});const c=this.routesById[o.id];if(L(!c,`Duplicate routes found with id: ${String(o.id)}`),this.routesById[o.id]=o,!o.isRoot&&o.path){const d=Ge(o.fullPath);(!this.routesByPath[d]||o.fullPath.endsWith("/"))&&(this.routesByPath[d]=o)}const l=o.children;l!=null&&l.length&&r(l)})};r([this.routeTree]);const i=[];Object.values(this.routesById).forEach((s,o)=>{var a;if(s.isRoot||!s.path)return;const c=Kt(s.fullPath),l=be(c);for(;l.length>1&&((a=l[0])==null?void 0:a.value)==="/";)l.shift();const d=l.map(f=>f.value==="/"?.75:f.type==="param"?.5:f.type==="wildcard"?.25:1);i.push({child:s,trimmed:c,parsed:l,index:o,scores:d})}),this.flatRoutes=i.sort((s,o)=>{const a=Math.min(s.scores.length,o.scores.length);for(let c=0;c<a;c++)if(s.scores[c]!==o.scores[c])return o.scores[c]-s.scores[c];if(s.scores.length!==o.scores.length)return o.scores.length-s.scores.length;for(let c=0;c<a;c++)if(s.parsed[c].value!==o.parsed[c].value)return s.parsed[c].value>o.parsed[c].value?1:-1;return s.index-o.index}).map((s,o)=>(s.child.rank=o,s.child))},this.subscribe=(t,r)=>{const i={eventType:t,fn:r};return this.subscribers.add(i),()=>{this.subscribers.delete(i)}},this.emit=t=>{this.subscribers.forEach(r=>{r.eventType===t.type&&r.fn(t)})},this.checkLatest=t=>this.latestLoadPromise!==t?this.latestLoadPromise:void 0,this.parseLocation=t=>{const r=({pathname:a,search:c,hash:l,state:d})=>{const f=this.options.parseSearch(c),u=this.options.stringifySearch(f);return{pathname:a,searchStr:u,search:Y(t==null?void 0:t.search,f),hash:l.split("#").reverse()[0]??"",href:`${a}${u}${l}`,state:Y(t==null?void 0:t.state,d)}},i=r(this.history.location);let{__tempLocation:s,__tempKey:o}=i.state;if(s&&(!o||o===this.tempLocationKey)){const a=r(s);return a.state.key=i.state.key,delete a.state.__tempLocation,{...a,maskedLocation:i}}return i},this.resolvePathWithBase=(t,r)=>Vi(this.basepath,t,ct(r)),this.matchRoutes=(t,r,i)=>{let s={},o=this.flatRoutes.find(u=>{const h=yt(this.basepath,Ge(t),{to:u.fullPath,caseSensitive:u.options.caseSensitive??this.options.caseSensitive,fuzzy:!0});return h?(s=h,!0):!1}),a=o||this.routesById.__root__,c=[a],l=!1;for((o?o.path!=="/"&&s["**"]:Ge(t))&&(this.options.notFoundRoute?c.push(this.options.notFoundRoute):l=!0);a!=null&&a.parentRoute;)a=a.parentRoute,a&&c.unshift(a);const d=c.map(u=>{let h;if(u.options.parseParams)try{const g=u.options.parseParams(s);Object.assign(s,g)}catch(g){if(h=new ls(g.message,{cause:g}),i!=null&&i.throwOnError)throw h;return h}}),f=[];return c.forEach((u,h)=>{var g,m,I,p,v,b;const R=f[h-1],[T,P]=(()=>{const C=(R==null?void 0:R.search)??r;try{const K=typeof u.options.validateSearch=="object"?u.options.validateSearch.parse:u.options.validateSearch;let ie=(K==null?void 0:K(C))??{};return[{...C,...ie},void 0]}catch(K){const ie=new cs(K.message,{cause:K});if(i!=null&&i.throwOnError)throw ie;return[C,ie]}})(),A=((m=(g=u.options).loaderDeps)==null?void 0:m.call(g,{search:T}))??"",z=A?JSON.stringify(A):"",M=vt({path:u.fullPath,params:s}),E=vt({path:u.id,params:s,leaveWildcards:!0})+z,D=It(this.state,E),Re=this.state.matches.find(C=>C.id===E)?"stay":"enter",G=D?{...D,cause:Re,notFoundError:l&&u.id===N?{global:!0}:void 0,params:s}:{id:E,routeId:u.id,params:s,pathname:ee([this.basepath,M]),updatedAt:Date.now(),search:{},searchError:void 0,status:"pending",showPending:!1,isFetching:!1,error:void 0,paramsError:d[h],loadPromise:Promise.resolve(),routeContext:void 0,context:void 0,abortController:new AbortController,fetchCount:0,cause:Re,loaderDeps:A,invalid:!1,preload:!1,notFoundError:l&&u.id===N?{global:!0}:void 0,links:(p=(I=u.options).links)==null?void 0:p.call(I),scripts:(b=(v=u.options).scripts)==null?void 0:b.call(v),staticData:u.options.staticData||{}};G.search=Y(G.search,T),G.searchError=P,f.push(G)}),f},this.cancelMatch=t=>{var r,i;(i=(r=It(this.state,t))==null?void 0:r.abortController)==null||i.abort()},this.cancelMatches=()=>{var t;(t=this.state.pendingMatches)==null||t.forEach(r=>{this.cancelMatch(r.id)})},this.buildLocation=t=>{const r=(s={},o)=>{var a,c;const l=this.state.pendingMatches||this.state.matches,d=((a=l[l.length-1])==null?void 0:a.search)||this.latestLocation.search;let f=this.resolvePathWithBase(s.from??this.latestLocation.pathname,`${s.to??""}`);const u=this.matchRoutes(this.latestLocation.pathname,d),h=o==null?void 0:o.filter(E=>u==null?void 0:u.find(D=>D.routeId===E.routeId)),g={...(c=Gt(u))==null?void 0:c.params};let m=(s.params??!0)===!0?g:He(s.params,g);m&&(o==null||o.map(E=>this.looseRoutesById[E.routeId].options.stringifyParams).filter(Boolean).forEach(E=>{m={...m,...E(m)}})),f=vt({path:f,params:m??{},leaveWildcards:!1,leaveParams:t.leaveParams});const I=(h==null?void 0:h.map(E=>this.looseRoutesById[E.routeId].options.preSearchFilters??[]).flat().filter(Boolean))??[],p=(h==null?void 0:h.map(E=>this.looseRoutesById[E.routeId].options.postSearchFilters??[]).flat().filter(Boolean))??[],v=I!=null&&I.length?I==null?void 0:I.reduce((E,D)=>D(E),d):d,b=s.search===!0?v:s.search?He(s.search,v)??{}:I!=null&&I.length?v:{},R=p!=null&&p.length?p.reduce((E,D)=>D(E),b):b,T=Y(d,R),P=this.options.stringifySearch(T),A=s.hash===!0?this.latestLocation.hash:s.hash?He(s.hash,this.latestLocation.hash):void 0,z=A?`#${A}`:"";let M=s.state===!0?this.latestLocation.state:s.state?He(s.state,this.latestLocation.state):{};return M=Y(this.latestLocation.state,M),{pathname:f,search:T,searchStr:P,state:M,hash:A??"",href:`${f}${P}${z}`,unmaskOnReload:s.unmaskOnReload}},i=(s={},o)=>{var a;let c=r(s),l=o?r(o):void 0;if(!l){let g={},m=(a=this.options.routeMasks)==null?void 0:a.find(I=>{const p=yt(this.basepath,c.pathname,{to:I.from,caseSensitive:!1,fuzzy:!1});return p?(g=p,!0):!1});m&&(o={...Pe(t,["from"]),...m,params:g},l=r(o))}const d=this.matchRoutes(c.pathname,c.search),f=l?this.matchRoutes(l.pathname,l.search):void 0,u=l?r(o,f):void 0,h=r(s,d);return u&&(h.maskedLocation=u),h};return t.mask?i(t,{...Pe(t,["from"]),...t.mask}):i(t)},this.commitLocation=async({startTransition:t,...r})=>{if(this.navigateTimeout&&clearTimeout(this.navigateTimeout),!(this.latestLocation.href===r.href)||!r.replace){let{maskedLocation:s,...o}=r;s&&(o={...s,state:{...s.state,__tempKey:void 0,__tempLocation:{...o,search:o.searchStr,state:{...o.state,__tempKey:void 0,__tempLocation:void 0,key:void 0}}}},(o.unmaskOnReload??this.options.unmaskOnReload??!1)&&(o.state.__tempKey=this.tempLocationKey));const a=()=>{this.history[r.replace?"replace":"push"](o.href,o.state)};t??!0?this.startReactTransition(a):a()}return this.resetNextScroll=r.resetScroll??!0,this.latestLoadPromise},this.buildAndCommitLocation=({replace:t,resetScroll:r,startTransition:i,...s}={})=>{const o=this.buildLocation(s);return this.commitLocation({...o,startTransition:i,replace:t,resetScroll:r})},this.navigate=({from:t,to:r,...i})=>{const s=String(r);let o;try{new URL(`${s}`),o=!0}catch{}return L(!o),this.buildAndCommitLocation({...i,from:t,to:r})},this.loadMatches=async({checkLatest:t,matches:r,preload:i})=>{var s,o;let a,c;const l=u=>{var h;const g=(h=this.state.pendingMatches)==null?void 0:h.find(p=>p.id===u.id),m=this.state.matches.find(p=>p.id===u.id),I=g?"pendingMatches":m?"matches":"cachedMatches";this.__store.setState(p=>{var v;return{...p,[I]:(v=p[I])==null?void 0:v.map(b=>b.id===u.id?u:b)}})};try{for(let[u,h]of r.entries()){const g=r[u-1],m=this.looseRoutesById[h.routeId],I=new AbortController,p=(v,b)=>{var R,T;if(v.routerCode=b,c=c??u,fe(v))throw v;Ce(v)&&this.updateMatchesWithNotFound(r,h,v);try{(T=(R=m.options).onError)==null||T.call(R,v)}catch(P){if(v=P,fe(P))throw P}r[u]=h={...h,error:v,status:"error",updatedAt:Date.now(),abortController:new AbortController}};try{h.paramsError&&p(h.paramsError,"PARSE_PARAMS"),h.searchError&&p(h.searchError,"VALIDATE_SEARCH");const v=(g==null?void 0:g.context)??this.options.context??{},b=m.options.pendingMs??this.options.defaultPendingMs,R=typeof b=="number"&&b<=0?Promise.resolve():new Promise(A=>setTimeout(A,b)),T=await((o=(s=m.options).beforeLoad)==null?void 0:o.call(s,{search:h.search,abortController:I,params:h.params,preload:!!i,context:v,location:this.state.location,navigate:A=>this.navigate({...A,from:h.pathname}),buildLocation:this.buildLocation,cause:i?"preload":h.cause}))??{};if(fe(T))throw T;const P={...v,...T};r[u]=h={...h,routeContext:Y(h.routeContext,T),context:Y(h.context,P),abortController:I,pendingPromise:R}}catch(v){p(v,"BEFORE_LOAD");break}}}catch(u){if(fe(u))return i||this.navigate(u),r;throw u}const d=r.slice(0,c),f=[];return d.forEach((u,h)=>{f.push(new Promise(async g=>{var m;const I=f[h-1],p=this.looseRoutesById[u.routeId],v=C=>fe(C)?(i||this.navigate(C),!0):Ce(C)?(i||this.updateMatchesWithNotFound(r,u,C),!0):!1;let b;r[h]=u={...u,showPending:!1};let R=!1;const T=p.options.pendingMs??this.options.defaultPendingMs,P=p.options.pendingMinMs??this.options.defaultPendingMinMs,A=!i&&typeof T=="number"&&(p.options.pendingComponent??this.options.defaultPendingComponent),z={params:u.params,deps:u.loaderDeps,preload:!!i,parentMatchPromise:I,abortController:u.abortController,context:u.context,location:this.state.location,navigate:C=>this.navigate({...C,from:u.pathname}),cause:i?"preload":u.cause},M=async()=>{var C,K,ie,an,cn,ln,un,dn;if(u.isFetching)b=(C=It(this.state,u.id))==null?void 0:C.loadPromise;else{u.fetchCount&&u.status==="success"&&g(),r[h]=u={...u,isFetching:!0,fetchCount:u.fetchCount+1};const O=((K=p.lazyFn)==null?void 0:K.call(p).then(q=>{Object.assign(p.options,q.options)}))||Promise.resolve(),de=O.then(()=>Promise.all(ss.map(async q=>{const he=p.options[q];he!=null&&he.preload&&await he.preload()})));async function ht(){var q,he;return await((he=(q=p.options).loader)==null?void 0:he.call(q,z))}const ft=ht();b=Promise.all([de,ft,O]).then(q=>q[1])}r[h]=u={...u,loadPromise:b},l(u);try{const O=await b;if(a=t())return await a;if((fe(O)||Ce(O))&&v(O))return;if(R&&P&&await new Promise(ft=>setTimeout(ft,P)),a=t())return await a;const[de,ht]=await Promise.all([(an=(ie=p.options).meta)==null?void 0:an.call(ie,{loaderData:O}),(ln=(cn=p.options).headers)==null?void 0:ln.call(cn,{loaderData:O})]);r[h]=u={...u,error:void 0,status:"success",isFetching:!1,updatedAt:Date.now(),loaderData:O,loadPromise:void 0,meta:de,headers:ht}}catch(O){if(a=t())return await a;if(v(O))return;try{(dn=(un=p.options).onError)==null||dn.call(un,O)}catch(de){if(O=de,v(de))return}r[h]=u={...u,error:O,status:"error",isFetching:!1}}l(u)},E=Date.now()-u.updatedAt;let D=i?p.options.preloadStaleTime??this.options.defaultPreloadStaleTime??3e4:p.options.staleTime??this.options.defaultStaleTime??0,Re;const G=p.options.shouldReload;Re=typeof G=="function"?G(z):G,r[h]=u={...u,preload:!!i&&!this.state.matches.find(C=>C.id===u.id)},u.status!=="success"?(A&&((m=u.pendingPromise)==null||m.then(async()=>{if(a=t())return a;R=!0,r[h]=u={...u,showPending:!0},l(u),g()})),await M()):(u.invalid||(Re??E>D))&&M(),g()}))}),await Promise.all(f),r},this.invalidate=()=>{const t=r=>({...r,invalid:!0});this.__store.setState(r=>{var i;return{...r,matches:r.matches.map(t),cachedMatches:r.cachedMatches.map(t),pendingMatches:(i=r.pendingMatches)==null?void 0:i.map(t)}}),this.load()},this.load=async()=>{const t=new Promise(async(r,i)=>{const s=this.latestLocation,o=this.state.resolvedLocation,a=o.href!==s.href;let c;this.cancelMatches(),this.emit({type:"onBeforeLoad",fromLocation:o,toLocation:s,pathChanged:a});let l;const d=this.state.matches;this.__store.batch(()=>{this.cleanCache(),l=this.matchRoutes(s.pathname,s.search,{debug:!0}),this.__store.setState(f=>({...f,isLoading:!0,location:s,pendingMatches:l,cachedMatches:f.cachedMatches.filter(u=>!l.find(h=>h.id===u.id))}))});try{try{await this.loadMatches({matches:l,checkLatest:()=>this.checkLatest(t)})}catch{}if(c=this.checkLatest(t))return c;const f=d.filter(g=>!l.find(m=>m.id===g.id)),u=l.filter(g=>!d.find(m=>m.id===g.id)),h=d.filter(g=>l.find(m=>m.id===g.id));this.__store.batch(()=>{this.__store.setState(g=>({...g,isLoading:!1,matches:g.pendingMatches,pendingMatches:void 0,cachedMatches:[...g.cachedMatches,...f.filter(m=>m.status!=="error")]})),this.cleanCache()}),[[f,"onLeave"],[u,"onEnter"],[h,"onStay"]].forEach(([g,m])=>{g.forEach(I=>{var p,v;(v=(p=this.looseRoutesById[I.routeId].options)[m])==null||v.call(p,I)})}),this.emit({type:"onLoad",fromLocation:o,toLocation:s,pathChanged:a}),r()}catch(f){if(c=this.checkLatest(t))return c;i(f)}});return this.latestLoadPromise=t,this.latestLoadPromise},this.cleanCache=()=>{this.__store.setState(t=>({...t,cachedMatches:t.cachedMatches.filter(r=>{const i=this.looseRoutesById[r.routeId];if(!i.options.loader)return!1;const s=(r.preload?i.options.preloadGcTime??this.options.defaultPreloadGcTime:i.options.gcTime??this.options.defaultGcTime)??5*60*1e3;return r.status!=="error"&&Date.now()-r.updatedAt<s})}))},this.preloadRoute=async(t=this.state.location)=>{var r;let i=this.buildLocation(t),s=this.matchRoutes(i.pathname,i.search,{throwOnError:!0});const o=Object.fromEntries((r=[...this.state.matches,...this.state.pendingMatches??[],...this.state.cachedMatches])==null?void 0:r.map(a=>[a.id,!0]));return this.__store.batch(()=>{s.forEach(a=>{o[a.id]||this.__store.setState(c=>({...c,cachedMatches:[...c.cachedMatches,a]}))})}),s=await this.loadMatches({matches:s,preload:!0,checkLatest:()=>{}}),s},this.matchRoute=(t,r)=>{const i={...t,to:t.to?this.resolvePathWithBase(t.from||"",t.to):void 0,params:t.params||{},leaveParams:!0},s=this.buildLocation(i);if(r!=null&&r.pending&&this.state.status!=="pending")return!1;const o=r!=null&&r.pending?this.latestLocation:this.state.resolvedLocation;if(!o)return!1;const a=yt(this.basepath,o.pathname,{...r,to:s.pathname});return!a||t.params&&!Qe(a,t.params,!0)?!1:a&&((r==null?void 0:r.includeSearch)??!0)?Qe(o.search,s.search,!0)?a:!1:a},this.injectHtml=async t=>{this.injectedHtml.push(t)},this.registeredDeferredsIds=new Map,this.registeredDeferreds=new WeakMap,this.getDeferred=t=>{const r=this.registeredDeferredsIds.get(t);if(r)return this.registeredDeferreds.get(r)},this.dehydrateData=(t,r)=>{if(typeof document>"u"){const i=typeof t=="string"?t:JSON.stringify(t);return this.injectHtml(async()=>{const s=`__TSR_DEHYDRATED__${i}`,o=typeof r=="function"?await r():r;return`<script id='${s}' suppressHydrationWarning>
  window["__TSR_DEHYDRATED__${Ni(i)}"] = ${JSON.stringify(this.options.transformer.stringify(o))}
<\/script>`}),()=>this.hydrateData(t)}return()=>{}},this.hydrateData=t=>{if(typeof document<"u"){const r=typeof t=="string"?t:JSON.stringify(t);return this.options.transformer.parse(window[`__TSR_DEHYDRATED__${r}`])}},this.dehydrate=()=>{var t;const r=((t=this.options.errorSerializer)==null?void 0:t.serialize)??ds;return{state:{dehydratedMatches:this.state.matches.map(i=>({...Pe(i,["id","status","updatedAt","loaderData","notFoundError"]),error:i.error?{data:r(i.error),__isServerError:!0}:void 0}))}}},this.hydrate=async t=>{var r,i,s;let o=t;typeof document<"u"&&(o=(r=window.__TSR_DEHYDRATED__)==null?void 0:r.data),L(o);const a=this.options.transformer.parse(o);this.dehydratedData=a.payload,(s=(i=this.options).hydrate)==null||s.call(i,a.payload);const c=a.router.state;let l=this.matchRoutes(this.state.location.pathname,this.state.location.search).map(d=>{var f,u,h,g,m,I;const p=c.dehydratedMatches.find(v=>v.id===d.id);if(L(p,`Could not find a client-side match for dehydrated match with id: ${d.id}!`),p){const v=this.looseRoutesById[d.routeId];return{...d,...p,meta:(u=(f=v.options).meta)==null?void 0:u.call(f,{loaderData:p.loaderData}),links:(g=(h=v.options).links)==null?void 0:g.call(h),scripts:(I=(m=v.options).scripts)==null?void 0:I.call(m)}}return d});this.__store.setState(d=>({...d,matches:l,lastUpdated:Date.now()}))},this.updateMatchesWithNotFound=(t,r,i)=>{const s=Object.fromEntries(t.map(o=>[o.routeId,o]));if(i.global)s[N].notFoundError=i;else{let o=this.routesById[i.route??r.routeId];for(;!o.options.notFoundComponent&&(o=o==null?void 0:o.parentRoute,L(o),o.id!==N););const a=s[o.id];L(a,"Could not find match for route: "+o.id),a.notFoundError=i}},this.hasNotFoundMatch=()=>this.__store.state.matches.some(t=>t.notFoundError),this.update({defaultPreloadDelay:50,defaultPendingMs:1e3,defaultPendingMinMs:500,context:void 0,...e,stringifySearch:(e==null?void 0:e.stringifySearch)??Zi,parseSearch:(e==null?void 0:e.parseSearch)??Qi,transformer:(e==null?void 0:e.transformer)??JSON}),typeof document<"u"&&(window.__TSR__ROUTER__=this)}get state(){return this.__store.state}get looseRoutesById(){return this.routesById}}class cs extends Error{}class ls extends Error{}function us(n){return{isLoading:!1,isTransitioning:!1,status:"idle",resolvedLocation:{...n},location:n,matches:[],pendingMatches:[],cachedMatches:[],lastUpdated:0}}function ds(n){return n instanceof Error?{name:n.name,message:n.message}:{data:n}}function hs(n){return new fs(n,{silent:!0}).createRoute}class fs{constructor(e,t){this.path=e,this.createRoute=r=>{this.silent;const i=qi(r);return i.isRoot=!1,i},this.silent=t==null?void 0:t.silent}}function ps(n){const{navigate:e}=le(),t=Se({strict:!1,select:r=>r.pathname});return w.useCallback(({from:r,...i})=>e({from:i!=null&&i.to?t:void 0,...i}),[])}var In={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},gs=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},dr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let u=(a&15)<<2|l>>6,h=l&63;c||(h=64,o||(u=64)),r.push(t[d],t[f],t[u],t[h])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ur(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):gs(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||l==null||f==null)throw new ms;const u=s<<2|a>>4;if(r.push(u),l!==64){const h=a<<4&240|l>>2;if(r.push(h),f!==64){const g=l<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ms extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _s=function(n){const e=ur(n);return dr.encodeByteArray(e,!0)},hr=function(n){return _s(n).replace(/\./g,"")},fr=function(n){try{return dr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=()=>vs().__FIREBASE_DEFAULTS__,Is=()=>{if(typeof process>"u"||typeof In>"u")return;const n=In.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ss=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&fr(n[1]);return e&&JSON.parse(e)},qt=()=>{try{return ys()||Is()||Ss()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},bs=n=>{var e,t;return(t=(e=qt())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},pr=()=>{var n;return(n=qt())===null||n===void 0?void 0:n.config},gr=n=>{var e;return(e=qt())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Es(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(k())}function Ts(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Rs(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ps(){const n=k();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Cs(){try{return typeof indexedDB=="object"}catch{return!1}}function As(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="FirebaseError";class re extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=ks,Object.setPrototypeOf(this,re.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,De.prototype.create)}}class De{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Os(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new re(i,a,r)}}function Os(n,e){return n.replace(Ls,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ls=/\{\$([^}]+)}/g;function Ms(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ze(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Sn(s)&&Sn(o)){if(!Ze(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Sn(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ns(n,e){const t=new Ds(n,e);return t.subscribe.bind(t)}class Ds{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");xs(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=St),i.error===void 0&&(i.error=St),i.complete===void 0&&(i.complete=St);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xs(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function St(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(n){return n&&n._delegate?n._delegate:n}class we{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ws;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Bs(e))try{this.getOrInitializeService({instanceIdentifier:se})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=se){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=se){return this.instances.has(e)}getOptions(e=se){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fs(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=se){return this.component?this.component.multipleInstances?e:se:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fs(n){return n===se?void 0:n}function Bs(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Us(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(S||(S={}));const js={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},Hs=S.INFO,Vs={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},Ws=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Vs[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let mr=class{constructor(e){this.name=e,this._logLevel=Hs,this._logHandler=Ws,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?js[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}};const zs=(n,e)=>e.some(t=>n instanceof t);let bn,wn;function Gs(){return bn||(bn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ks(){return wn||(wn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _r=new WeakMap,At=new WeakMap,vr=new WeakMap,bt=new WeakMap,Jt=new WeakMap;function qs(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(te(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&_r.set(t,n)}).catch(()=>{}),Jt.set(e,n),e}function Js(n){if(At.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});At.set(n,e)}let kt={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return At.get(n);if(e==="objectStoreNames")return n.objectStoreNames||vr.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return te(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ys(n){kt=n(kt)}function Xs(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(wt(this),e,...t);return vr.set(r,e.sort?e.sort():[e]),te(r)}:Ks().includes(n)?function(...e){return n.apply(wt(this),e),te(_r.get(this))}:function(...e){return te(n.apply(wt(this),e))}}function Qs(n){return typeof n=="function"?Xs(n):(n instanceof IDBTransaction&&Js(n),zs(n,Gs())?new Proxy(n,kt):n)}function te(n){if(n instanceof IDBRequest)return qs(n);if(bt.has(n))return bt.get(n);const e=Qs(n);return e!==n&&(bt.set(n,e),Jt.set(e,n)),e}const wt=n=>Jt.get(n);function Zs(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=te(o);return r&&o.addEventListener("upgradeneeded",c=>{r(te(o.result),c.oldVersion,c.newVersion,te(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const eo=["get","getKey","getAll","getAllKeys","count"],to=["put","add","delete","clear"],Et=new Map;function En(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Et.get(e))return Et.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=to.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eo.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return Et.set(e,s),s}Ys(n=>({...n,get:(e,t,r)=>En(e,t)||n.get(e,t,r),has:(e,t)=>!!En(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ro(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function ro(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ot="@firebase/app",Tn="0.9.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=new mr("@firebase/app"),io="@firebase/app-compat",so="@firebase/analytics-compat",oo="@firebase/analytics",ao="@firebase/app-check-compat",co="@firebase/app-check",lo="@firebase/auth",uo="@firebase/auth-compat",ho="@firebase/database",fo="@firebase/database-compat",po="@firebase/functions",go="@firebase/functions-compat",mo="@firebase/installations",_o="@firebase/installations-compat",vo="@firebase/messaging",yo="@firebase/messaging-compat",Io="@firebase/performance",So="@firebase/performance-compat",bo="@firebase/remote-config",wo="@firebase/remote-config-compat",Eo="@firebase/storage",To="@firebase/storage-compat",Ro="@firebase/firestore",Po="@firebase/firestore-compat",Co="firebase",Ao="10.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="[DEFAULT]",ko={[Ot]:"fire-core",[io]:"fire-core-compat",[oo]:"fire-analytics",[so]:"fire-analytics-compat",[co]:"fire-app-check",[ao]:"fire-app-check-compat",[lo]:"fire-auth",[uo]:"fire-auth-compat",[ho]:"fire-rtdb",[fo]:"fire-rtdb-compat",[po]:"fire-fn",[go]:"fire-fn-compat",[mo]:"fire-iid",[_o]:"fire-iid-compat",[vo]:"fire-fcm",[yo]:"fire-fcm-compat",[Io]:"fire-perf",[So]:"fire-perf-compat",[bo]:"fire-rc",[wo]:"fire-rc-compat",[Eo]:"fire-gcs",[To]:"fire-gcs-compat",[Ro]:"fire-fst",[Po]:"fire-fst-compat","fire-js":"fire-js",[Co]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et=new Map,Mt=new Map;function Oo(n,e){try{n.container.addComponent(e)}catch(t){ae.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ke(n){const e=n.name;if(Mt.has(e))return ae.debug(`There were multiple attempts to register component ${e}.`),!1;Mt.set(e,n);for(const t of et.values())Oo(t,n);return!0}function yr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ne=new De("app","Firebase",Lo);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new we("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ne.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=Ao;function Ir(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Lt,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ne.create("bad-app-name",{appName:String(i)});if(t||(t=pr()),!t)throw ne.create("no-options");const s=et.get(i);if(s){if(Ze(t,s.options)&&Ze(r,s.config))return s;throw ne.create("duplicate-app",{appName:i})}const o=new $s(i);for(const c of Mt.values())o.addComponent(c);const a=new Mo(t,r,o);return et.set(i,a),a}function No(n=Lt){const e=et.get(n);if(!e&&n===Lt&&pr())return Ir();if(!e)throw ne.create("no-app",{appName:n});return e}function me(n,e,t){var r;let i=(r=ko[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ae.warn(a.join(" "));return}ke(new we(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do="firebase-heartbeat-database",xo=1,Oe="firebase-heartbeat-store";let Tt=null;function Sr(){return Tt||(Tt=Zs(Do,xo,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Oe)}catch(t){console.warn(t)}}}}).catch(n=>{throw ne.create("idb-open",{originalErrorMessage:n.message})})),Tt}async function Uo(n){try{const t=(await Sr()).transaction(Oe),r=await t.objectStore(Oe).get(br(n));return await t.done,r}catch(e){if(e instanceof re)ae.warn(e.message);else{const t=ne.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ae.warn(t.message)}}}async function Rn(n,e){try{const r=(await Sr()).transaction(Oe,"readwrite");await r.objectStore(Oe).put(e,br(n)),await r.done}catch(t){if(t instanceof re)ae.warn(t.message);else{const r=ne.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ae.warn(r.message)}}}function br(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=1024,Bo=30*24*60*60*1e3;class $o{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ho(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Pn();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Bo}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Pn(),{heartbeatsToSend:r,unsentEntries:i}=jo(this._heartbeatsCache.heartbeats),s=hr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Pn(){return new Date().toISOString().substring(0,10)}function jo(n,e=Fo){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Cn(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Cn(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Ho{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cs()?As().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Uo(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Cn(n){return hr(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(n){ke(new we("platform-logger",e=>new no(e),"PRIVATE")),ke(new we("heartbeat",e=>new $o(e),"PRIVATE")),me(Ot,Tn,n),me(Ot,Tn,"esm2017"),me("fire-js","")}Vo("");function Yt(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function wr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wo=wr,Er=new De("auth","Firebase",wr());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt=new mr("@firebase/auth");function zo(n,...e){tt.logLevel<=S.WARN&&tt.warn(`Auth (${Ue}): ${n}`,...e)}function Ke(n,...e){tt.logLevel<=S.ERROR&&tt.error(`Auth (${Ue}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(n,...e){throw Xt(n,...e)}function x(n,...e){return Xt(n,...e)}function Go(n,e,t){const r=Object.assign(Object.assign({},Wo()),{[e]:t});return new De("auth","Firebase",r).create(e,{appName:n.name})}function Xt(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Er.create(n,...e)}function y(n,e,...t){if(!n)throw Xt(e,...t)}function B(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ke(e),new Error(e)}function W(n,e){n||B(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ko(){return An()==="http:"||An()==="https:"}function An(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ko()||Ts()||"connection"in navigator)?navigator.onLine:!0}function Jo(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t){this.shortDelay=e,this.longDelay=t,W(t>e,"Short delay should be less than long delay!"),this.isMobile=Es()||Rs()}get(){return qo()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(n,e){W(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;B("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;B("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;B("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=new Fe(3e4,6e4);function Zt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Te(n,e,t,r,i={}){return Rr(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=xe(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Tr.fetch()(Pr(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Rr(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Yo),e);try{const i=new Zo(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ve(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ve(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ve(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ve(n,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Go(n,d,l);V(n,d)}}catch(i){if(i instanceof re)throw i;V(n,"network-request-failed",{message:String(i)})}}async function Qo(n,e,t,r,i={}){const s=await Te(n,e,t,r,i);return"mfaPendingCredential"in s&&V(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Pr(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Qt(n.config,i):`${n.config.apiScheme}://${i}`}class Zo{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(x(this.auth,"network-request-failed")),Xo.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ve(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=x(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ea(n,e){return Te(n,"POST","/v1/accounts:delete",e)}async function ta(n,e){return Te(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function na(n,e=!1){const t=ue(n),r=await t.getIdToken(e),i=en(r);y(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ae(Rt(i.auth_time)),issuedAtTime:Ae(Rt(i.iat)),expirationTime:Ae(Rt(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Rt(n){return Number(n)*1e3}function en(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ke("JWT malformed, contained fewer than 3 sections"),null;try{const i=fr(t);return i?JSON.parse(i):(Ke("Failed to decode base64 JWT payload"),null)}catch(i){return Ke("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ra(n){const e=en(n);return y(e,"internal-error"),y(typeof e.exp<"u","internal-error"),y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof re&&ia(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ia({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ae(this.lastLoginAt),this.creationTime=Ae(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Le(n,ta(t,{idToken:r}));y(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ca(s.providerUserInfo):[],a=aa(n.providerData,o),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Cr(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,f)}async function oa(n){const e=ue(n);await nt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function aa(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ca(n){return n.map(e=>{var{providerId:t}=e,r=Yt(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function la(n,e){const t=await Rr(n,{},async()=>{const r=xe({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Pr(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Tr.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ua(n,e){return Te(n,"POST","/v2/accounts:revokeToken",Zt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(typeof e.idToken<"u","internal-error"),y(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ra(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await la(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Me;return r&&(y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Me,this.toJSON())}_performRefresh(){return B("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(n,e){y(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class oe{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Yt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sa(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Cr(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Le(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return na(this,e)}reload(){return oa(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await nt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Le(this,ea(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,l,d;const f=(r=t.displayName)!==null&&r!==void 0?r:void 0,u=(i=t.email)!==null&&i!==void 0?i:void 0,h=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,m=(a=t.tenantId)!==null&&a!==void 0?a:void 0,I=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,p=(l=t.createdAt)!==null&&l!==void 0?l:void 0,v=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:b,emailVerified:R,isAnonymous:T,providerData:P,stsTokenManager:A}=t;y(b&&A,e,"internal-error");const z=Me.fromJSON(this.name,A);y(typeof b=="string",e,"internal-error"),J(f,e.name),J(u,e.name),y(typeof R=="boolean",e,"internal-error"),y(typeof T=="boolean",e,"internal-error"),J(h,e.name),J(g,e.name),J(m,e.name),J(I,e.name),J(p,e.name),J(v,e.name);const M=new oe({uid:b,auth:e,email:u,emailVerified:R,displayName:f,isAnonymous:T,photoURL:g,phoneNumber:h,tenantId:m,stsTokenManager:z,createdAt:p,lastLoginAt:v});return P&&Array.isArray(P)&&(M.providerData=P.map(E=>Object.assign({},E))),I&&(M._redirectEventId=I),M}static async _fromIdTokenResponse(e,t,r=!1){const i=new Me;i.updateFromServerResponse(t);const s=new oe({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await nt(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new Map;function $(n){W(n instanceof Function,"Expected a class definition");let e=kn.get(n);return e?(W(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,kn.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ar.type="NONE";const On=Ar;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(n,e,t){return`firebase:${n}:${e}:${t}`}class _e{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=qe(this.userKey,i.apiKey,s),this.fullPersistenceKey=qe("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new _e($(On),e,r);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||$(On);const o=qe(r,e.config.apiKey,e.name);let a=null;for(const l of t)try{const d=await l._get(o);if(d){const f=oe._fromJSON(e,d);l!==s&&(a=f),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new _e(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new _e(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nr(e))return"Blackberry";if(Dr(e))return"Webos";if(tn(e))return"Safari";if((e.includes("chrome/")||Or(e))&&!e.includes("edge/"))return"Chrome";if(Mr(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function kr(n=k()){return/firefox\//i.test(n)}function tn(n=k()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Or(n=k()){return/crios\//i.test(n)}function Lr(n=k()){return/iemobile/i.test(n)}function Mr(n=k()){return/android/i.test(n)}function Nr(n=k()){return/blackberry/i.test(n)}function Dr(n=k()){return/webos/i.test(n)}function lt(n=k()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function da(n=k()){var e;return lt(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ha(){return Ps()&&document.documentMode===10}function xr(n=k()){return lt(n)||Mr(n)||Dr(n)||Nr(n)||/windows phone/i.test(n)||Lr(n)}function fa(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(n,e=[]){let t;switch(n){case"Browser":t=Ln(k());break;case"Worker":t=`${Ln(k())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ue}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ga(n,e={}){return Te(n,"GET","/v2/passwordPolicy",Zt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=6;class _a{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:ma,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mn(this),this.idTokenSubscription=new Mn(this),this.beforeStateQueue=new pa(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Er,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await _e.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await nt(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Jo()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ue(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence($(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ga(this),t=new _a(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new De("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ua(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&$(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await _e.create(this,[$(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(y(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ur(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&zo(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function nn(n){return ue(n)}class Mn{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ns(t=>this.observer=t)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ya(n){rn=n}function Ia(n){return rn.loadJS(n)}function Sa(){return rn.gapiScript}function ba(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(n,e){const t=yr(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Ze(s,e??{}))return i;V(i,"already-initialized")}return t.initialize({options:e})}function Ea(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map($);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ta(n,e,t){const r=nn(n);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=Fr(e),{host:o,port:a}=Ra(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Pa()}function Fr(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ra(n){const e=Fr(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Nn(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Nn(o)}}}function Nn(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Pa(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return B("not implemented")}_getIdTokenResponse(e){return B("not implemented")}_linkToIdToken(e,t){return B("not implemented")}_getReauthenticationResolver(e){return B("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ve(n,e){return Qo(n,"POST","/v1/accounts:signInWithIdp",Zt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="http://localhost";class ce extends Br{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ce(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):V("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Yt(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ce(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ve(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ve(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ve(e,t)}buildRequest(){const e={requestUri:Ca,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=xe(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends $r{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X extends Be{constructor(){super("facebook.com")}static credential(e){return ce._fromParams({providerId:X.PROVIDER_ID,signInMethod:X.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return X.credentialFromTaggedObject(e)}static credentialFromError(e){return X.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return X.credential(e.oauthAccessToken)}catch{return null}}}X.FACEBOOK_SIGN_IN_METHOD="facebook.com";X.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F extends Be{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ce._fromParams({providerId:F.PROVIDER_ID,signInMethod:F.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return F.credentialFromTaggedObject(e)}static credentialFromError(e){return F.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return F.credential(t,r)}catch{return null}}}F.GOOGLE_SIGN_IN_METHOD="google.com";F.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q extends Be{constructor(){super("github.com")}static credential(e){return ce._fromParams({providerId:Q.PROVIDER_ID,signInMethod:Q.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Q.credentialFromTaggedObject(e)}static credentialFromError(e){return Q.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Q.credential(e.oauthAccessToken)}catch{return null}}}Q.GITHUB_SIGN_IN_METHOD="github.com";Q.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z extends Be{constructor(){super("twitter.com")}static credential(e,t){return ce._fromParams({providerId:Z.PROVIDER_ID,signInMethod:Z.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Z.credentialFromTaggedObject(e)}static credentialFromError(e){return Z.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Z.credential(t,r)}catch{return null}}}Z.TWITTER_SIGN_IN_METHOD="twitter.com";Z.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await oe._fromIdTokenResponse(e,r,i),o=Dn(r);return new Ee({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Dn(r);return new Ee({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Dn(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends re{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,rt.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new rt(e,t,r,i)}}function jr(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?rt._fromErrorAndOperation(n,s,e,r):s})}async function Aa(n,e,t=!1){const r=await Le(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ee._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ka(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await Le(n,jr(r,i,e,n),t);y(s.idToken,r,"internal-error");const o=en(s.idToken);y(o,r,"internal-error");const{sub:a}=o;return y(n.uid===a,r,"user-mismatch"),Ee._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&V(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oa(n,e,t=!1){const r="signIn",i=await jr(n,r,e),s=await Ee._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function La(n,e,t,r){return ue(n).onIdTokenChanged(e,t,r)}function Ma(n,e,t){return ue(n).beforeAuthStateChanged(e,t)}function Na(n,e,t,r){return ue(n).onAuthStateChanged(e,t,r)}const it="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(it,"1"),this.storage.removeItem(it),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(){const n=k();return tn(n)||lt(n)}const xa=1e3,Ua=10;class Vr extends Hr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Da()&&fa(),this.fallbackToPolling=xr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ha()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ua):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},xa)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vr.type="LOCAL";const Fa=Vr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends Hr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Wr.type="SESSION";const zr=Wr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ut(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,s)),c=await Ba(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ut.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=sn("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const u=f;if(u.data.eventId===l)switch(u.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(u.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(){return window}function ja(n){U().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(){return typeof U().WorkerGlobalScope<"u"&&typeof U().importScripts=="function"}async function Ha(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Va(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Wa(){return Gr()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="firebaseLocalStorageDb",za=1,st="firebaseLocalStorage",qr="fbase_key";class $e{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function dt(n,e){return n.transaction([st],e?"readwrite":"readonly").objectStore(st)}function Ga(){const n=indexedDB.deleteDatabase(Kr);return new $e(n).toPromise()}function Dt(){const n=indexedDB.open(Kr,za);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(st,{keyPath:qr})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(st)?e(r):(r.close(),await Ga(),e(await Dt()))})})}async function xn(n,e,t){const r=dt(n,!0).put({[qr]:e,value:t});return new $e(r).toPromise()}async function Ka(n,e){const t=dt(n,!1).get(e),r=await new $e(t).toPromise();return r===void 0?null:r.value}function Un(n,e){const t=dt(n,!0).delete(e);return new $e(t).toPromise()}const qa=800,Ja=3;class Jr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dt(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ja)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ut._getInstance(Wa()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ha(),!this.activeServiceWorker)return;this.sender=new $a(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Va()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dt();return await xn(e,it,"1"),await Un(e,it),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>xn(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Ka(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Un(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=dt(i,!1).getAll();return new $e(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qa)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jr.type="LOCAL";const Ya=Jr;new Fe(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(n,e){return e?$(e):(y(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Br{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ve(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ve(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ve(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Qa(n){return Oa(n.auth,new on(n),n.bypassAuthState)}function Za(n){const{auth:e,user:t}=n;return y(t,e,"internal-error"),ka(t,new on(n),n.bypassAuthState)}async function ec(n){const{auth:e,user:t}=n;return y(t,e,"internal-error"),Aa(t,new on(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qa;case"linkViaPopup":case"linkViaRedirect":return ec;case"reauthViaPopup":case"reauthViaRedirect":return Za;default:V(this.auth,"internal-error")}}resolve(e){W(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){W(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc=new Fe(2e3,1e4);class ge extends Yr{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ge.currentPopupAction&&ge.currentPopupAction.cancel(),ge.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){W(this.filter.length===1,"Popup operations only handle one event");const e=sn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(x(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(x(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ge.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(x(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tc.get())};e()}}ge.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="pendingRedirect",Je=new Map;class rc extends Yr{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Je.get(this.auth._key());if(!e){try{const r=await ic(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Je.set(this.auth._key(),e)}return this.bypassAuthState||Je.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ic(n,e){const t=ac(e),r=oc(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function sc(n,e){Je.set(n._key(),e)}function oc(n){return $(n._redirectPersistence)}function ac(n){return qe(nc,n.config.apiKey,n.name)}async function cc(n,e,t=!1){const r=nn(n),i=Xa(r,e),o=await new rc(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=10*60*1e3;class uc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dc(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Xr(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(x(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lc&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fn(e))}saveEventToCache(e){this.cachedEventUids.add(Fn(e)),this.lastProcessedEventTime=Date.now()}}function Fn(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Xr({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dc(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xr(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hc(n,e={}){return Te(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pc=/^https?/;async function gc(n){if(n.config.emulator)return;const{authorizedDomains:e}=await hc(n);for(const t of e)try{if(mc(t))return}catch{}V(n,"unauthorized-domain")}function mc(n){const e=Nt(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!pc.test(t))return!1;if(fc.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=new Fe(3e4,6e4);function Bn(){const n=U().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function vc(n){return new Promise((e,t)=>{var r,i,s;function o(){Bn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bn(),t(x(n,"network-request-failed"))},timeout:_c.get()})}if(!((i=(r=U().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=U().gapi)===null||s===void 0)&&s.load)o();else{const a=ba("iframefcb");return U()[a]=()=>{gapi.load?o():t(x(n,"network-request-failed"))},Ia(`${Sa()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Ye=null,e})}let Ye=null;function yc(n){return Ye=Ye||vc(n),Ye}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=new Fe(5e3,15e3),Sc="__/auth/iframe",bc="emulator/auth/iframe",wc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ec=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Tc(n){const e=n.config;y(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Qt(e,bc):`https://${n.config.authDomain}/${Sc}`,r={apiKey:e.apiKey,appName:n.name,v:Ue},i=Ec.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${xe(r).slice(1)}`}async function Rc(n){const e=await yc(n),t=U().gapi;return y(t,n,"internal-error"),e.open({where:document.body,url:Tc(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wc,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=x(n,"network-request-failed"),a=U().setTimeout(()=>{s(o)},Ic.get());function c(){U().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Cc=500,Ac=600,kc="_blank",Oc="http://localhost";class $n{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Lc(n,e,t,r=Cc,i=Ac){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Pc),{width:r.toString(),height:i.toString(),top:s,left:o}),l=k().toLowerCase();t&&(a=Or(l)?kc:t),kr(l)&&(e=e||Oc,c.scrollbars="yes");const d=Object.entries(c).reduce((u,[h,g])=>`${u}${h}=${g},`,"");if(da(l)&&a!=="_self")return Mc(e||"",a),new $n(null);const f=window.open(e||"",a,d);y(f,n,"popup-blocked");try{f.focus()}catch{}return new $n(f)}function Mc(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="__/auth/handler",Dc="emulator/auth/handler",xc=encodeURIComponent("fac");async function jn(n,e,t,r,i,s){y(n.config.authDomain,n,"auth-domain-config-required"),y(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ue,eventId:i};if(e instanceof $r){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ms(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))o[d]=f}if(e instanceof Be){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await n._getAppCheckToken(),l=c?`#${xc}=${encodeURIComponent(c)}`:"";return`${Uc(n)}?${xe(a).slice(1)}${l}`}function Uc({config:n}){return n.emulator?Qt(n,Dc):`https://${n.authDomain}/${Nc}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="webStorageSupport";class Fc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zr,this._completeRedirectFn=cc,this._overrideRedirectResult=sc}async _openPopup(e,t,r,i){var s;W((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await jn(e,t,r,Nt(),i);return Lc(e,o,sn())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await jn(e,t,r,Nt(),i);return ja(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(W(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Rc(e),r=new uc(e);return t.register("authEvent",i=>(y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Pt,{type:Pt},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Pt];o!==void 0&&t(!!o),V(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=gc(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xr()||tn()||lt()}}const Bc=Fc;var Hn="@firebase/auth",Vn="1.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hc(n){ke(new we("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ur(n)},l=new va(r,i,s,c);return Ea(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ke(new we("auth-internal",e=>{const t=nn(e.getProvider("auth").getImmediate());return(r=>new $c(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),me(Hn,Vn,jc(n)),me(Hn,Vn,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=5*60,Wc=gr("authIdTokenMaxAge")||Vc;let Wn=null;const zc=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Wc)return;const i=t==null?void 0:t.token;Wn!==i&&(Wn=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Qr(n=No()){const e=yr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=wa(n,{popupRedirectResolver:Bc,persistence:[Ya,Fa,zr]}),r=gr("authTokenSyncURL");if(r){const s=zc(r);Ma(t,s,()=>s(t.currentUser)),La(t,o=>s(o))}const i=bs("auth");return i&&Ta(t,`http://${i}`),t}function Gc(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}ya({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=x("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Gc().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Hc("Browser");var Kc="firebase",qc="10.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */me(Kc,qc,"app");class Zr{constructor(e){je(this,"target");je(this,"log",(e,...t)=>{console.log({name:e,target:this.target},{...t})});this.target=e}}const Jc="@@GetEnv",Yc=new Zr(Jc);var Xc={};const pe=(n,e)=>{const{isGlobal:t=!1}=e??{},i=Xc[`${t?"":"VITE_"}${n}`];return i||(Yc.log("key-not-found",{key:n,isGlobal:t}),"")},Qc={apiKey:pe("FIREBASE__API_KEY"),authDomain:pe("FIREBASE__AUTH_DOMAIN"),projectId:pe("FIREBASE__PROJECT_ID"),storageBucket:pe("FIREBASE__STORAGE_BUCKET"),messagingSenderId:pe("FIREBASE__MESSAGING_SENDER_ID"),appId:pe("FIREBASE__APP_ID")},ei=Ir(Qc);new F;Qr(ei);const ti=Qr(ei),Zc=n=>Na(ti,n);ti.signOut;const xt="@@Persist",zn=new Zr(xt);class Ut{static get(e){try{const t=localStorage.getItem(`${xt}:${e}`);return!t&&typeof t=="object"?null:JSON.parse(t)}catch(t){return zn.log("get:error",t),null}}}je(Ut,"set",(e,t)=>{try{if(!t&&typeof t=="object")return;const r=JSON.stringify(t);localStorage.setItem(`${xt}:${e}`,r)}catch(r){zn.log("set:error",r)}});const el=w.createContext(null),Ft=({children:n})=>{const e=Ut.get("user"),[t,r]=w.useState(e);return w.useEffect(()=>{const i=Zc(s=>{if(!s)r(null);else{const{uid:o,displayName:a}=s,l={name:a??"",uid:o};r(l),Ut.set("user",l)}});return()=>i()},[]),_.jsx(el.Provider,{value:t,children:n})};try{Ft.displayName="AuthenticationProvider",Ft.__docgenInfo={description:"",displayName:"AuthenticationProvider",props:{}}}catch{}const tl={"auth:sign-in":"Sign in with {provider}","auth:sign-up":"Sign up with {provider}","auth:sign-out":"Log out with {provider}","auth:sign-in:cta-announcement-label":"No account?","auth:sign-up:cta-label":"Create one","auth:sign-up:cta-announcement-label":"Already have an account?","auth:sign-in:cta-label":"Sign in","facebook:name":"Facebook","google:name":"Google"},nl={en:tl},rl=w.createContext({}),Bt=({children:n,records:e})=>_.jsx(rl.Provider,{value:e,children:n});try{Bt.displayName="I18nProvider",Bt.__docgenInfo={description:"",displayName:"I18nProvider",props:{records:{defaultValue:null,description:"",name:"records",required:!0,type:{name:"I18nContextProps"}}}}}catch{}const $t=({children:n})=>_.jsx(Bt,{records:nl,children:n});try{$t.displayName="I18nProvider",$t.__docgenInfo={description:"",displayName:"I18nProvider",props:{}}}catch{}const jt=(...n)=>n.reduce((e,t)=>({children:r})=>_.jsx(e,{children:_.jsx(t,{children:r})}),({children:e})=>_.jsx(_.Fragment,{children:e}));try{jt.displayName="reduceProviders",jt.__docgenInfo={description:"",displayName:"reduceProviders",props:{}}}catch{}const Ht=jt($t,Ft);try{Ht.displayName="AppProvider",Ht.__docgenInfo={description:"",displayName:"AppProvider",props:{}}}catch{}const ni=(n,e)=>{const t=new Ji({component:cr}),i=hs("/*")({component:()=>_.jsx(n,{...e})}).update({path:"/*",getParentRoute:()=>t}),s=t.addChildren([i]),o=os({routeTree:s,defaultPreload:"intent"}),a=rs;return()=>_.jsx(Ht,{children:_.jsx(a,{router:o,children:_.jsx(n,{...e})})})},il="_SignInSignUp_1qo4x_1",sl="_SignInSignUp__TopSection_1qo4x_5",ol="_SignInSignUp__MiddleSection_1qo4x_8",al="_SignInSignUp__MiddleSection__Announcement_1qo4x_11",cl="_SignInSignUp__MiddleSection__Announcement__CTA_1qo4x_14",ll="_SignInSignUp__BottomSection_1qo4x_17",ye={SignInSignUp:il,SignInSignUp__TopSection:sl,SignInSignUp__MiddleSection:ol,SignInSignUp__MiddleSection__Announcement:al,SignInSignUp__MiddleSection__Announcement__CTA:cl,SignInSignUp__BottomSection:ll};function Vt({ctaAnnouncementLabel:n,ctaLabel:e,ctaLink:t,facebookLabel:r,googleLabel:i,onSignInSignUpWithGoogle:s,onSignInSignUpWithFacebook:o}){const a=ps();return _.jsxs("section",{className:ye.SignInSignUp__MiddleSection,children:[_.jsx(hn,{onClick:s,icon:si,label:i}),_.jsx(hn,{onClick:o,icon:oi,label:r}),_.jsxs("p",{className:ye.SignInSignUp__MiddleSection__Announcement,children:[n,_.jsx("a",{onClick:c=>{c.preventDefault(),a({to:t})},className:ye.SignInSignUp__MiddleSection__Announcement__CTA,type:"button",href:t,children:e})]})]})}try{Vt.displayName="MiddleSection",Vt.__docgenInfo={description:"",displayName:"MiddleSection",props:{googleLabel:{defaultValue:null,description:"",name:"googleLabel",required:!0,type:{name:"string"}},onSignInSignUpWithGoogle:{defaultValue:null,description:"",name:"onSignInSignUpWithGoogle",required:!1,type:{name:"(() => Promise<void>)"}},facebookLabel:{defaultValue:null,description:"",name:"facebookLabel",required:!0,type:{name:"string"}},onSignInSignUpWithFacebook:{defaultValue:null,description:"",name:"onSignInSignUpWithFacebook",required:!1,type:{name:"(() => Promise<void>)"}},ctaAnnouncementLabel:{defaultValue:null,description:"",name:"ctaAnnouncementLabel",required:!0,type:{name:"string"}},ctaLabel:{defaultValue:null,description:"",name:"ctaLabel",required:!0,type:{name:"string"}},ctaLink:{defaultValue:null,description:"",name:"ctaLink",required:!0,type:{name:"T"}}}}}catch{}function Ne({middleSection:n}){return _.jsxs("div",{className:ye.SignInSignUp,children:[_.jsx("section",{className:ye.SignInSignUp__TopSection,children:"Top"}),_.jsx(Vt,{...n}),_.jsx("section",{className:ye.SignInSignUp__BottomSection,children:"Bottom"})]})}try{Ne.displayName="SignInSignUp",Ne.__docgenInfo={description:"",displayName:"SignInSignUp",props:{middleSection:{defaultValue:null,description:"",name:"middleSection",required:!0,type:{name:"MiddleSectionProps<T>"}}}}}catch{}const _l={component:Ne,title:"Features/SignInSignUp",argTypes:{middleSection:{description:"structure defined for auth method and cta"}}},We={args:{middleSection:{ctaAnnouncementLabel:"No account?",ctaLabel:"Create one",ctaLink:"/signup",googleLabel:"Sign in with Google",facebookLabel:"Sign in with Facebook"}},render:n=>{const e=ni(Ne,n);return _.jsx(e,{})}},ze={args:{middleSection:{ctaAnnouncementLabel:"Already have an account?",ctaLabel:"Sign in",ctaLink:"/signin",googleLabel:"Sign up with Google",facebookLabel:"Sign up with Facebook"}},render:n=>{const e=ni(Ne,n);return _.jsx(e,{})}};var Gn,Kn,qn;We.parameters={...We.parameters,docs:{...(Gn=We.parameters)==null?void 0:Gn.docs,source:{originalSource:`{
  args: {
    middleSection: {
      ctaAnnouncementLabel: 'No account?',
      ctaLabel: 'Create one',
      ctaLink: '/signup',
      googleLabel: 'Sign in with Google',
      facebookLabel: 'Sign in with Facebook'
    }
  },
  render: args => {
    const Component = withStoryProviders(SignInSignUp, args);
    return <Component />;
  }
}`,...(qn=(Kn=We.parameters)==null?void 0:Kn.docs)==null?void 0:qn.source}}};var Jn,Yn,Xn;ze.parameters={...ze.parameters,docs:{...(Jn=ze.parameters)==null?void 0:Jn.docs,source:{originalSource:`{
  args: {
    middleSection: {
      ctaAnnouncementLabel: 'Already have an account?',
      ctaLabel: 'Sign in',
      ctaLink: '/signin',
      googleLabel: 'Sign up with Google',
      facebookLabel: 'Sign up with Facebook'
    }
  },
  render: args => {
    const Component = withStoryProviders(SignInSignUp, args);
    return <Component />;
  }
}`,...(Xn=(Yn=ze.parameters)==null?void 0:Yn.docs)==null?void 0:Xn.source}}};const vl=["SignIn","SignUp"];export{We as SignIn,ze as SignUp,vl as __namedExportsOrder,_l as default};
