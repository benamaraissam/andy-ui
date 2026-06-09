import{b as p}from"./lit-element-CHqfs0qX.js";const u={title:"Forms/Input",component:"andy-input",tags:["autodocs"],parameters:{docs:{description:{component:"Labelled text field (`.dp-field` + `.dp-input`). Fires `andy-input` on every keystroke and `andy-change` on commit, with the value in `event.detail`. Set `error` to put it in the invalid state."}}},argTypes:{label:{control:"text",table:{category:"Props"}},value:{control:"text",table:{category:"Props"}},placeholder:{control:"text",table:{category:"Props"}},type:{control:"text",description:"Native input type.",table:{category:"Props",defaultValue:{summary:"text"}}},required:{control:"boolean",table:{category:"Props"}},disabled:{control:"boolean",table:{category:"Props"}},error:{control:"text",description:"Validation message; presence flips to the error state.",table:{category:"Props"}}},args:{label:"Repository name",value:"",placeholder:"devpilot-api",type:"text",required:!0,disabled:!1,error:""},render:e=>p`
    <div style="max-width:360px">
      <andy-input
        label=${e.label}
        .value=${e.value}
        placeholder=${e.placeholder}
        type=${e.type}
        ?required=${e.required}
        ?disabled=${e.disabled}
        error=${e.error}
      ></andy-input>
    </div>
  `},t={},r={render:()=>p`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:360px">
      <andy-input label="Repository name" .required=${!0} placeholder="devpilot-api"></andy-input>
      <andy-input label="With error" value="not-a-url" error="Must be a valid URL"></andy-input>
      <andy-input label="Disabled" value="locked" .disabled=${!0}></andy-input>
    </div>
  `};var a,o,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var d,n,i;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:360px">
      <andy-input label="Repository name" .required=\${true} placeholder="devpilot-api"></andy-input>
      <andy-input label="With error" value="not-a-url" error="Must be a valid URL"></andy-input>
      <andy-input label="Disabled" value="locked" .disabled=\${true}></andy-input>
    </div>
  \`
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const c=["Playground","States"];export{t as Playground,r as States,c as __namedExportsOrder,u as default};
