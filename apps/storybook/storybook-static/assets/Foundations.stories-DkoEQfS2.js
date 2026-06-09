import{b as s}from"./lit-element-CHqfs0qX.js";const y={title:"Foundations/Overview",tags:["autodocs"],parameters:{docs:{description:{component:"Design tokens from `@andy-ui/tokens`: colours, type scale, spacing, radius, motion and z-index — all CSS custom properties that re-resolve per `[data-theme]`. Import `@andy-ui/tokens/andy-ui.css` once at your app root."}}}},c=r=>s`
  <div style="display:flex;flex-direction:column;gap:6px">
    <div style="height:56px;border-radius:12px;background:var(${r});border:1px solid var(--border-light)"></div>
    <code style="font-size:12px">${r}</code>
  </div>
`,e={render:()=>s`
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;max-width:720px">
      ${["--brand-primary","--brand-secondary","--brand-accent","--success-500","--warning-500","--error-500","--info-500","--surface-card"].map(c)}
    </div>
  `},a={render:()=>s`
    <div style="display:flex;flex-direction:column;gap:8px">
      <p class="t-display">Display</p>
      <h1 class="t-h1">Heading 1</h1>
      <h2 class="t-h2">Heading 2</h2>
      <h3 class="t-h3">Heading 3</h3>
      <p class="t-body">Body — the quick brown fox jumps over the lazy dog.</p>
      <p class="t-body-sm">Body small — the quick brown fox jumps over the lazy dog.</p>
      <p class="t-label">Label</p>
      <p class="t-eyebrow">Eyebrow</p>
      <p class="t-gradient t-h2">Gradient heading</p>
    </div>
  `};var o,t,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;max-width:720px">
      \${["--brand-primary", "--brand-secondary", "--brand-accent", "--success-500", "--warning-500", "--error-500", "--info-500", "--surface-card"].map(swatch)}
    </div>
  \`
}`,...(d=(t=e.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var n,p,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:8px">
      <p class="t-display">Display</p>
      <h1 class="t-h1">Heading 1</h1>
      <h2 class="t-h2">Heading 2</h2>
      <h3 class="t-h3">Heading 3</h3>
      <p class="t-body">Body — the quick brown fox jumps over the lazy dog.</p>
      <p class="t-body-sm">Body small — the quick brown fox jumps over the lazy dog.</p>
      <p class="t-label">Label</p>
      <p class="t-eyebrow">Eyebrow</p>
      <p class="t-gradient t-h2">Gradient heading</p>
    </div>
  \`
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const h=["Colors","Typography"];export{e as Colors,a as Typography,h as __namedExportsOrder,y as default};
