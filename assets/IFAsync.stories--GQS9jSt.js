import{j as n}from"./jsx-runtime-vNq4Oc-g.js";import{E as c}from"./ErrorBoundary-j90xmBYf.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const o=({element:e,data:m,loading:p,error:a})=>{let r;return p?r=n.jsx("div",{children:"Loading..."}):a?r=n.jsxs("div",{children:["Error: ",a.message]}):r=n.jsx(e,{...m}),n.jsx(c,{id:e.name,children:r})};try{o.displayName="IFAsync",o.__docgenInfo={description:"",displayName:"IFAsync",props:{element:{defaultValue:null,description:"",name:"element",required:!0,type:{name:"FunctionComponent<T>"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"object"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"Error | null"}}}}}catch{}const f={component:o,title:"Components/IF/IFAsync",argTypes:{error:{description:"error provided"},loading:{description:"loading state"},data:{description:"data passed as props at element"},element:{description:"custom component to render if condition is true"}}},s=({user:e})=>n.jsx("h1",{children:e.name}),t={render:e=>n.jsx(o,{...e,element:s}),args:{data:{user:{name:"Hi! Im IFAsync Component"}},element:s,loading:!0,error:null}};var i,d,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: props => {
    return <IFAsync {...props} element={MyComponent} />;
  },
  args: {
    data: {
      user: {
        name: 'Hi! Im IFAsync Component'
      }
    },
    element: MyComponent,
    loading: true,
    error: null
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const F=["IFAsyncByControls"];export{t as IFAsyncByControls,F as __namedExportsOrder,f as default};
