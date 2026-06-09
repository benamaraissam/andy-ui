import{b as s}from"./lit-element-CHqfs0qX.js";const y={title:"Feedback/Callout",component:"andy-callout",tags:["autodocs"],parameters:{docs:{description:{component:"Inline note / banner (`.ds-callout`) with a variant icon. Slot in rich body content."}}},argTypes:{variant:{control:"inline-radio",options:["info","warning","success","error"],table:{category:"Props",defaultValue:{summary:"info"}}},body:{control:"text",table:{category:"Slot"}}},args:{variant:"warning",body:"Copy this key now. You can re-display it later."},render:n=>s`<div style="max-width:560px"><andy-callout variant=${n.variant}>${n.body}</andy-callout></div>`},a={},o={render:()=>s`
    <div style="display:flex;flex-direction:column;gap:12px;max-width:560px">
      <andy-callout variant="info">This adapter speaks MCP over both <code>/mcp</code> and <code>/sse</code>.</andy-callout>
      <andy-callout variant="success">Backlog generated successfully.</andy-callout>
      <andy-callout variant="warning"><strong>Copy this key now.</strong> You can re-display it later.</andy-callout>
      <andy-callout variant="error">Connection failed — check your token and retry.</andy-callout>
    </div>
  `};var e,t,r;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(r=(t=a.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:12px;max-width:560px">
      <andy-callout variant="info">This adapter speaks MCP over both <code>/mcp</code> and <code>/sse</code>.</andy-callout>
      <andy-callout variant="success">Backlog generated successfully.</andy-callout>
      <andy-callout variant="warning"><strong>Copy this key now.</strong> You can re-display it later.</andy-callout>
      <andy-callout variant="error">Connection failed — check your token and retry.</andy-callout>
    </div>
  \`
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const u=["Playground","AllVariants"];export{o as AllVariants,a as Playground,u as __namedExportsOrder,y as default};
