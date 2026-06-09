import{b as c}from"./lit-element-CHqfs0qX.js";const y={title:"Primitives/Stat",component:"andy-stat",tags:["autodocs"],parameters:{docs:{description:{component:"A single metric tile (`.ds-stat`) — a large value over a label."}}},argTypes:{value:{control:"text",table:{category:"Props"}},label:{control:"text",table:{category:"Props"}}},args:{value:"1,284",label:"Tool calls today"},render:t=>c`<andy-stat value=${t.value} label=${t.label}></andy-stat>`},a={},e={render:()=>c`
    <div style="display:flex;gap:12px">
      <andy-stat value="1,284" label="Tool calls today"></andy-stat>
      <andy-stat value="98.2%" label="Success rate"></andy-stat>
    </div>
  `};var s,l,r;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(r=(l=a.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};var o,d,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;gap:12px">
      <andy-stat value="1,284" label="Tool calls today"></andy-stat>
      <andy-stat value="98.2%" label="Success rate"></andy-stat>
    </div>
  \`
}`,...(n=(d=e.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const u=["Playground","Row"];export{a as Playground,e as Row,u as __namedExportsOrder,y as default};
