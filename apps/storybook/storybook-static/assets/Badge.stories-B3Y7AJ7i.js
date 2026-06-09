import{b as y}from"./lit-element-CHqfs0qX.js";const c={title:"Primitives/Badge",component:"andy-badge",tags:["autodocs"],parameters:{docs:{description:{component:"A small labelled chip for statuses or categories (`.dp-badge`)."}}},argTypes:{variant:{control:"select",options:["primary","secondary","success","warning","error","info"],description:"Colour / intent.",table:{category:"Props",defaultValue:{summary:"primary"}}},label:{control:"text",table:{category:"Slot"}}},args:{variant:"primary",label:"Primary"},render:e=>y`<andy-badge variant=${e.variant}>${e.label}</andy-badge>`},a={},r={render:()=>y`
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <andy-badge variant="primary">Primary</andy-badge>
      <andy-badge variant="secondary">Secondary</andy-badge>
      <andy-badge variant="success">Success</andy-badge>
      <andy-badge variant="warning">Warning</andy-badge>
      <andy-badge variant="error">Error</andy-badge>
      <andy-badge variant="info">Info</andy-badge>
    </div>
  `};var n,d,t;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(t=(d=a.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};var s,o,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <andy-badge variant="primary">Primary</andy-badge>
      <andy-badge variant="secondary">Secondary</andy-badge>
      <andy-badge variant="success">Success</andy-badge>
      <andy-badge variant="warning">Warning</andy-badge>
      <andy-badge variant="error">Error</andy-badge>
      <andy-badge variant="info">Info</andy-badge>
    </div>
  \`
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const l=["Playground","AllVariants"];export{r as AllVariants,a as Playground,l as __namedExportsOrder,c as default};
