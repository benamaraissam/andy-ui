import{b as r}from"./lit-element-CHqfs0qX.js";const d={title:"Feedback/Accordion",component:"andy-accordion",tags:["autodocs"],parameters:{docs:{description:{component:"Collapsible disclosure (the `.ds-think` / collapse pattern). Fires `andy-toggle` with the new open state."}}},argTypes:{heading:{control:"text",table:{category:"Props"}},open:{control:"boolean",table:{category:"Props"}}},args:{heading:"Reasoning",open:!1},render:o=>r`
    <div style="max-width:480px">
      <andy-accordion heading=${o.heading} ?open=${o.open}>
        <p class="t-body-sm">Scanned 3 test files, grouped by suite, then diffed the failing assertions.</p>
      </andy-accordion>
    </div>
  `},e={};var a,t,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const c=["Playground"];export{e as Playground,c as __namedExportsOrder,d as default};
