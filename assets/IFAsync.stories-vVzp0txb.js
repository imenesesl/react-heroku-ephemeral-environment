import{j as n,E as c}from"./ErrorBoundary-ghlIf7v9.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const o=({element:e,data:p,loading:m,error:a})=>{let r;return m?r=n.jsx("div",{children:"Loading..."}):a?r=n.jsxs("div",{children:["Error: ",a.message]}):r=n.jsx(e,{...p}),n.jsx(c,{id:e.name,children:r})};try{o.displayName="IFAsync",o.__docgenInfo={description:"",displayName:"IFAsync",props:{element:{defaultValue:null,description:"",name:"element",required:!0,type:{name:"FunctionComponent<T>"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"object"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"Error | null"}}}}}catch{}const I={component:o,title:"Components/IF/IFAsync",argTypes:{error:{description:"error provided"},loading:{description:"loading state"},data:{description:"data passed as props at element"},element:{description:"custom component to render if condition is true"}}},s=({user:e})=>n.jsx("h1",{children:e.name}),t={render:e=>n.jsx(o,{...e,element:s}),args:{data:{user:{name:"Hi! Im IFAsync Component"}},element:s,loading:!0,error:null}};var d,i,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const F=["IFAsyncByControls"];export{t as IFAsyncByControls,F as __namedExportsOrder,I as default};
