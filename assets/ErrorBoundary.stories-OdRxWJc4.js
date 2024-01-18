import{E as p,j as o}from"./ErrorBoundary-ghlIf7v9.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const g={component:p,title:"Components/ErrorBoundary",argTypes:{id:{description:"unique id to track errors"},children:{description:"component as children to render"}}},m=({user:d})=>o.jsx("h1",{children:d.name}),r={args:{id:"no-errors",children:o.jsx(m,{user:{name:"Hey there, working fine"}})}},e={args:{id:"with-errors",children:o.jsx(m,{})}};var n,t,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    id: 'no-errors',
    children: <MyComponent user={{
      name: 'Hey there, working fine'
    }} />
  }
}`,...(s=(t=r.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var i,a,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    id: 'with-errors',
    children: <MyComponent />
  }
}`,...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const E=["ComponentWithOutError","ComponentWithError"];export{e as ComponentWithError,r as ComponentWithOutError,E as __namedExportsOrder,g as default};
