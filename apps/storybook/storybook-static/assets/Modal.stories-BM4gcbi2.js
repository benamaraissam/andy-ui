import{b as c}from"./lit-element-CHqfs0qX.js";const p={title:"Feedback/Modal",component:"andy-modal",tags:["autodocs"],parameters:{docs:{description:{component:"Dialog with overlay (`.modal-overlay` / `.modal-content`). Open it by setting the `open` property. Closes on backdrop click, the ✕, or Escape (unless `persistent`); fires `andy-close`. Slot in the body and footer actions."}}},argTypes:{open:{control:"boolean",table:{category:"Props"}},heading:{control:"text",table:{category:"Props"}},persistent:{control:"boolean",table:{category:"Props"}}},args:{open:!1,heading:"Delete this repository?",persistent:!1},render:o=>{const d=t=>{const l=t.target.parentElement.querySelector("andy-modal");l.open=!0},a=t=>t.target.closest("andy-modal").close();return c`
      <div>
        <andy-button @andy-click=${d}>Open dialog</andy-button>
        <andy-modal ?open=${o.open} heading=${o.heading} ?persistent=${o.persistent}>
          <p class="modal-description">This removes <strong>devpilot-api</strong> and its backlog. This cannot be undone.</p>
          <div class="modal-footer" style="margin-top:16px">
            <andy-button variant="secondary" @andy-click=${a}>Cancel</andy-button>
            <andy-button variant="error" @andy-click=${a}>Delete</andy-button>
          </div>
        </andy-modal>
      </div>
    `}},e={};var n,r,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const y=["Playground"];export{e as Playground,y as __namedExportsOrder,p as default};
