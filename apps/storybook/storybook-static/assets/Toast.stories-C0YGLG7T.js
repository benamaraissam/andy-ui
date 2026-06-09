import{D as f,b as c}from"./lit-element-CHqfs0qX.js";import{n as l}from"./chat-C1ODE0MD.js";const b={success:"Success",info:"Notice",warning:"Warning",error:"Error"},v={success:"check",info:"info",warning:"warning",error:"error"};let s=null;function w(){return s&&s.isConnected||(s=document.getElementById("toast-host"),s||(s=document.createElement("div"),s.id="toast-host",document.body.appendChild(s))),s}function $(e){e.style.animation="ds-toast-out 0.25s ease forwards",setTimeout(()=>e.remove(),260)}function n(e={}){if(typeof document>"u")return()=>{};const t=e.type??"info",g=e.title??b[t],d=e.message??"",u=e.duration??4200,o=document.createElement("div");o.className=`dp-toast ${t}`,o.style.animation="ds-toast-in 0.3s cubic-bezier(0.34,1.56,0.64,1)";const i=()=>$(o);return f(c`
      <div class="icon-box" style="--ts-w:18px">${l[v[t]]()}</div>
      <div class="body">
        <div class="title">${g}</div>
        ${d?c`<div class="msg">${d}</div>`:null}
      </div>
      <button class="close" aria-label="Dismiss" @click=${i}>${l.close()}</button>
    `,o),w().appendChild(o),u>0&&setTimeout(i,u),i}const a={show:n,success:(e,t)=>n({...t,type:"success",message:e}),info:(e,t)=>n({...t,type:"info",message:e}),warning:(e,t)=>n({...t,type:"warning",message:e}),error:(e,t)=>n({...t,type:"error",message:e})},x={title:"Feedback/Toast",tags:["autodocs"],parameters:{docs:{description:{component:"Toasts are **imperative**, not an element: call `toast.success(msg)` / `toast.info` / `toast.warning` / `toast.error`, or `showToast({ type, title, message, duration })`. A host is created on `<body>` automatically. The same API is re-exported from `@andy-ui/react` and wrapped by Angular's `ToastService`."}}},render:()=>c`
    <div style="display:flex;gap:12px;flex-wrap:wrap">
      <andy-button variant="secondary" @andy-click=${()=>a.success("Settings saved")}>Success</andy-button>
      <andy-button variant="secondary" @andy-click=${()=>a.info("Backlog imported")}>Info</andy-button>
      <andy-button variant="secondary" @andy-click=${()=>a.warning("Your API key expires in 3 days")}>Warning</andy-button>
      <andy-button variant="secondary" @andy-click=${()=>a.error("Connection failed — check your token")}>Error</andy-button>
    </div>
  `},r={};var m,y,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(y=r.parameters)==null?void 0:y.docs)==null?void 0:p.source}}};const T=["Playground"];export{r as Playground,T as __namedExportsOrder,x as default};
