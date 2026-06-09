import{b as c}from"./lit-element-CHqfs0qX.js";const b={title:"Navigation/Tabs",component:"andy-tabs",tags:["autodocs"],parameters:{docs:{description:{component:"Segmented control / provider tabs. Provide `tabs` (`{ id, label, count? }[]`) and the `active` id; fires `andy-change` with the selected id. `variant` switches between the `segment` and `provider` styles."}}},argTypes:{variant:{control:"inline-radio",options:["segment","provider"],table:{category:"Props",defaultValue:{summary:"segment"}}},active:{control:"text",table:{category:"Props"}},tabs:{control:"object",table:{category:"Props"}}},args:{variant:"provider",active:"github",tabs:[{id:"github",label:"GitHub",count:12},{id:"azure",label:"Azure",count:5},{id:"local",label:"Local",count:3}]},render:a=>c`<andy-tabs variant=${a.variant} active=${a.active} .tabs=${a.tabs}></andy-tabs>`},e={},t={render:()=>c`
    <andy-tabs
      variant="segment"
      active="list"
      .tabs=${[{id:"list",label:"List"},{id:"grid",label:"Grid"}]}
    ></andy-tabs>
  `};var r,n,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var o,i,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`
    <andy-tabs
      variant="segment"
      active="list"
      .tabs=\${[{
    id: "list",
    label: "List"
  }, {
    id: "grid",
    label: "Grid"
  }]}
    ></andy-tabs>
  \`
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const m=["Playground","Segment"];export{e as Playground,t as Segment,m as __namedExportsOrder,b as default};
