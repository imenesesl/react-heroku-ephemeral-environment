import{j as t,E as c}from"./ErrorBoundary-ghlIf7v9.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const o=({element:e,data:d,condition:m})=>{const p=m?t.jsx(e,{...d}):null;return t.jsx(c,{id:e.name,children:p})};try{o.displayName="IF",o.__docgenInfo={description:"",displayName:"IF",props:{condition:{defaultValue:null,description:"",name:"condition",required:!0,type:{name:"boolean"}},element:{defaultValue:null,description:"",name:"element",required:!0,type:{name:"FunctionComponent<T>"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"object"}}}}}catch{}const I={component:o,title:"Components/IF/IF",argTypes:{condition:{description:"conditional rendering"},data:{description:"data passed as props at element"},element:{description:"custom component to render if condition is true"}}},r=({user:e})=>t.jsx("h1",{children:e.name}),n={render:e=>t.jsx(o,{...e,element:r}),args:{data:{user:{name:"Hi! Im IF Component"}},element:r,condition:!0}};var a,s,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: props => {
    return <IF {...props} element={MyComponent} />;
  },
  args: {
    data: {
      user: {
        name: 'Hi! Im IF Component'
      }
    },
    element: MyComponent,
    condition: true
  }
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const F=["IFByControls"];export{n as IFByControls,F as __namedExportsOrder,I as default};
