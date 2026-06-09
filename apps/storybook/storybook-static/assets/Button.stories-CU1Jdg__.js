import{b as o}from"./lit-element-CHqfs0qX.js";const m={title:"Primitives/Button",component:"andy-button",tags:["autodocs"],parameters:{docs:{description:{component:"The design-system button. Renders a native `<button>` (so it's keyboard- and form-friendly) styled with the `.btn` classes. Fires `andy-click` on activation; clicks are suppressed while `disabled` or `loading`."}}},argTypes:{variant:{control:"select",options:["primary","secondary","success","warning","error","ghost"],description:"Visual style / intent.",table:{category:"Props",defaultValue:{summary:"primary"}}},size:{control:"inline-radio",options:["sm","md","lg"],description:"Control height (36 / 44 / 52px).",table:{category:"Props",defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"Disable interaction.",table:{category:"Props"}},loading:{control:"boolean",description:"Show a spinner and block clicks.",table:{category:"Props"}},type:{control:"inline-radio",options:["button","submit","reset"],description:"Native button type, useful inside a form.",table:{category:"Props",defaultValue:{summary:"button"}}},label:{control:"text",description:"Slotted label (demo only).",table:{category:"Slot"}}},args:{variant:"primary",size:"md",disabled:!1,loading:!1,type:"button",label:"Save changes"},render:n=>o`
    <andy-button
      variant=${n.variant}
      size=${n.size}
      type=${n.type}
      ?disabled=${n.disabled}
      ?loading=${n.loading}
    >
      ${n.label}
    </andy-button>
  `},t={},a={parameters:{docs:{description:{story:"Every intent variant."}}},render:()=>o`
    <div style="display:flex;gap:12px;flex-wrap:wrap">
      <andy-button variant="primary">Primary</andy-button>
      <andy-button variant="secondary">Secondary</andy-button>
      <andy-button variant="success">Success</andy-button>
      <andy-button variant="warning">Warning</andy-button>
      <andy-button variant="error">Delete</andy-button>
      <andy-button variant="ghost">Dismiss</andy-button>
    </div>
  `},e={parameters:{docs:{description:{story:"Sizes plus the disabled and loading states."}}},render:()=>o`
    <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
      <andy-button size="sm">Small</andy-button>
      <andy-button size="md">Medium</andy-button>
      <andy-button size="lg">Large</andy-button>
      <andy-button disabled>Disabled</andy-button>
      <andy-button loading>Loading</andy-button>
    </div>
  `};var r,s,d;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(d=(s=t.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var i,l,y;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Every intent variant."
      }
    }
  },
  render: () => html\`
    <div style="display:flex;gap:12px;flex-wrap:wrap">
      <andy-button variant="primary">Primary</andy-button>
      <andy-button variant="secondary">Secondary</andy-button>
      <andy-button variant="success">Success</andy-button>
      <andy-button variant="warning">Warning</andy-button>
      <andy-button variant="error">Delete</andy-button>
      <andy-button variant="ghost">Dismiss</andy-button>
    </div>
  \`
}`,...(y=(l=a.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var u,c,b;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Sizes plus the disabled and loading states."
      }
    }
  },
  render: () => html\`
    <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
      <andy-button size="sm">Small</andy-button>
      <andy-button size="md">Medium</andy-button>
      <andy-button size="lg">Large</andy-button>
      <andy-button disabled>Disabled</andy-button>
      <andy-button loading>Loading</andy-button>
    </div>
  \`
}`,...(b=(c=e.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};const g=["Playground","Variants","SizesAndStates"];export{t as Playground,e as SizesAndStates,a as Variants,g as __namedExportsOrder,m as default};
