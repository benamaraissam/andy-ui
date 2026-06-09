import{b as s}from"./lit-element-CHqfs0qX.js";const n={title:"Primitives/Card",component:"andy-card",tags:["autodocs"],parameters:{docs:{description:{component:"Surface card (`.dp-card`). Set `hoverable` for the lift + glow interaction; `pad` controls inner padding."}}},argTypes:{hoverable:{control:"boolean",table:{category:"Props"}},pad:{control:"inline-radio",options:["none","sm","md","lg"],table:{category:"Props",defaultValue:{summary:"md"}}}},args:{hoverable:!0,pad:"md"},render:e=>s`
    <div style="max-width:320px">
      <andy-card ?hoverable=${e.hoverable} pad=${e.pad}>
        <span class="t-eyebrow">Hoverable</span>
        <h3 class="t-h3" style="margin:6px 0">Lift + glow</h3>
        <p class="t-body-sm" style="margin:0">Hover me — border bumps and the card lifts.</p>
      </andy-card>
    </div>
  `},a={};var r,o,t;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(t=(o=a.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const l=["Playground"];export{a as Playground,l as __namedExportsOrder,n as default};
