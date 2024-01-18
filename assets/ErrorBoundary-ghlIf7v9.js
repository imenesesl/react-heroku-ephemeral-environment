import{r as d}from"./index-4g5l5LRQ.js";var u={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=d,l=Symbol.for("react.element"),f=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,y=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function c(t,r,o){var e,n={},i=null,a=null;o!==void 0&&(i=""+o),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(a=r.ref);for(e in r)m.call(r,e)&&!h.hasOwnProperty(e)&&(n[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)n[e]===void 0&&(n[e]=r[e]);return{$$typeof:l,type:t,key:i,ref:a,props:n,_owner:y.current}}s.Fragment=f;s.jsx=c;s.jsxs=c;u.exports=s;var E=u.exports;class p extends d.Component{constructor(r){super(r),this.state={hasError:!1}}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,o){console.error("ErrorBoundary caught an error",r,o,"ID:",this.props.id)}render(){return this.state.hasError?E.jsxs("h1",{children:["Something went wrong. Error ID: ",this.props.id]}):this.props.children}}try{p.displayName="ErrorBoundary",p.__docgenInfo={description:"",displayName:"ErrorBoundary",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}}}}}catch{}export{p as E,E as j};
