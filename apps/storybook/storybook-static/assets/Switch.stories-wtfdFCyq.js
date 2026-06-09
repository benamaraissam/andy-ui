import{b as i}from"./lit-element-CHqfs0qX.js";const h={title:"Forms/Switch",component:"andy-switch",tags:["autodocs"],parameters:{docs:{description:{component:"Toggle switch (`.ds-switch`) with an optional trailing label. Fires `andy-change` with the new boolean checked state."}}},argTypes:{checked:{control:"boolean",table:{category:"Props"}},disabled:{control:"boolean",table:{category:"Props"}},label:{control:"text",table:{category:"Slot"}}},args:{checked:!0,disabled:!1,label:"Group by namespace"},render:t=>i`<andy-switch ?checked=${t.checked} ?disabled=${t.disabled}>${t.label}</andy-switch>`},e={},a={render:()=>i`
    <div style="display:flex;flex-direction:column;gap:12px">
      <andy-switch .checked=${!0}>Group by namespace</andy-switch>
      <andy-switch>Show archived</andy-switch>
      <andy-switch .checked=${!0} .disabled=${!0}>Disabled (on)</andy-switch>
    </div>
  `};var c,s,r;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var d,o,n;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:12px">
      <andy-switch .checked=\${true}>Group by namespace</andy-switch>
      <andy-switch>Show archived</andy-switch>
      <andy-switch .checked=\${true} .disabled=\${true}>Disabled (on)</andy-switch>
    </div>
  \`
}`,...(n=(o=a.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const p=["Playground","States"];export{e as Playground,a as States,p as __namedExportsOrder,h as default};
