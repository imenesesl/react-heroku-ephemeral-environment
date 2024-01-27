import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import{E as d}from"./ErrorBoundary-j90xmBYf.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const E={component:d,title:"Components/ErrorBoundary",argTypes:{id:{description:"unique id to track errors"},children:{description:"component as children to render"}}},c=({user:p})=>o.jsx("h1",{children:p.name}),r={args:{id:"no-errors",children:o.jsx(c,{user:{name:"Hey there, working fine"}})}},e={args:{id:"with-errors",children:o.jsx(c,{})}};var n,t,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    id: 'no-errors',
    children: <MyComponent user={{
      name: 'Hey there, working fine'
    }} />
  }
}`,...(s=(t=r.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var i,a,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    id: 'with-errors',
    children: <MyComponent />
  }
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const y=["ComponentWithOutError","ComponentWithError"];export{e as ComponentWithError,r as ComponentWithOutError,y as __namedExportsOrder,E as default};
