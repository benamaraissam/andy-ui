import{b as e}from"./lit-element-CHqfs0qX.js";const h={title:"Primitives/Status",component:"andy-status",tags:["autodocs"],parameters:{docs:{description:{component:"Status pill with a leading dot (`.ds-status`), for health/state indicators. The sibling `<andy-version-pill>` renders a monospace version tag."}}},argTypes:{status:{control:"inline-radio",options:["healthy","error","disabled","unknown"],description:"State the dot + colours reflect.",table:{category:"Props",defaultValue:{summary:"unknown"}}},label:{control:"text",table:{category:"Slot"}}},args:{status:"healthy",label:"Healthy"},render:n=>e`<andy-status status=${n.status}>${n.label}</andy-status>`},s={},a={render:()=>e`
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
      <andy-status status="healthy">Healthy</andy-status>
      <andy-status status="error">Unhealthy</andy-status>
      <andy-status status="disabled">Disabled</andy-status>
      <andy-status status="unknown">Unknown</andy-status>
      <andy-version-pill>v2.4.1</andy-version-pill>
    </div>
  `},t={parameters:{docs:{description:{story:"`<andy-version-pill>` — monospace version tag."}}},render:()=>e`<andy-version-pill>1.3.0</andy-version-pill>`};var r,o,l;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(l=(o=s.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var d,i,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
      <andy-status status="healthy">Healthy</andy-status>
      <andy-status status="error">Unhealthy</andy-status>
      <andy-status status="disabled">Disabled</andy-status>
      <andy-status status="unknown">Unknown</andy-status>
      <andy-version-pill>v2.4.1</andy-version-pill>
    </div>
  \`
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,y,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "\`<andy-version-pill>\` — monospace version tag."
      }
    }
  },
  render: () => html\`<andy-version-pill>1.3.0</andy-version-pill>\`
}`,...(c=(y=t.parameters)==null?void 0:y.docs)==null?void 0:c.source}}};const v=["Playground","AllStates","VersionPill"];export{a as AllStates,s as Playground,t as VersionPill,v as __namedExportsOrder,h as default};
