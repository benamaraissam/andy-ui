import{b as p,w as l}from"./lit-element-CHqfs0qX.js";const n=l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 17h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" /></svg>`,h={title:"Primitives/Icon chip",component:"andy-icon-chip",tags:["autodocs"],parameters:{docs:{description:{component:"Gradient-tinted square holding an icon (`.au-icon-chip`). Slot in any SVG."}}},argTypes:{variant:{control:"inline-radio",options:["tinted","solid","muted"],table:{category:"Props",defaultValue:{summary:"tinted"}}},size:{control:"inline-radio",options:["md","lg"],table:{category:"Props",defaultValue:{summary:"md"}}}},args:{variant:"tinted",size:"md"},render:e=>p`<andy-icon-chip variant=${e.variant} size=${e.size}>${n}</andy-icon-chip>`},i={},a={render:()=>p`
    <div style="display:flex;gap:12px;align-items:center">
      <andy-icon-chip variant="tinted">${n}</andy-icon-chip>
      <andy-icon-chip variant="solid">${n}</andy-icon-chip>
      <andy-icon-chip variant="muted">${n}</andy-icon-chip>
      <andy-icon-chip variant="tinted" size="lg">${n}</andy-icon-chip>
    </div>
  `};var t,o,r;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(r=(o=i.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var c,d,s;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;gap:12px;align-items:center">
      <andy-icon-chip variant="tinted">\${glyph}</andy-icon-chip>
      <andy-icon-chip variant="solid">\${glyph}</andy-icon-chip>
      <andy-icon-chip variant="muted">\${glyph}</andy-icon-chip>
      <andy-icon-chip variant="tinted" size="lg">\${glyph}</andy-icon-chip>
    </div>
  \`
}`,...(s=(d=a.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const m=["Playground","Variants"];export{i as Playground,a as Variants,m as __namedExportsOrder,h as default};
