import{b as l}from"./lit-element-CHqfs0qX.js";const m={title:"Primitives/Avatar",component:"andy-avatar",tags:["autodocs"],parameters:{docs:{description:{component:"Initials / icon avatar (`.ds-avatar`)."}}},argTypes:{size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Props",defaultValue:{summary:"md"}}},round:{control:"boolean",table:{category:"Props"}},label:{control:"text",table:{category:"Slot"}}},args:{size:"md",round:!0,label:"AY"},render:e=>l`<andy-avatar size=${e.size} ?round=${e.round}>${e.label}</andy-avatar>`},a={},r={render:()=>l`
    <div style="display:flex;gap:12px;align-items:center">
      <andy-avatar size="sm" round>AY</andy-avatar>
      <andy-avatar size="md" round>AY</andy-avatar>
      <andy-avatar size="lg" round>AY</andy-avatar>
    </div>
  `};var t,n,o;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var s,d,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;gap:12px;align-items:center">
      <andy-avatar size="sm" round>AY</andy-avatar>
      <andy-avatar size="md" round>AY</andy-avatar>
      <andy-avatar size="lg" round>AY</andy-avatar>
    </div>
  \`
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const y=["Playground","Sizes"];export{a as Playground,r as Sizes,y as __namedExportsOrder,m as default};
