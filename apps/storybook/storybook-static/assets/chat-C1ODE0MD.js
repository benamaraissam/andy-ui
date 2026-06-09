import{f as qe,u as Ie,i as Ne,A as h,b as l,w as u}from"./lit-element-CHqfs0qX.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=s=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ae={attribute:!0,type:String,converter:Ie,reflect:!1,hasChanged:qe},We=(s=Ae,e,r)=>{const{kind:a,metadata:t}=r;let i=globalThis.litPropertyMetadata.get(t);if(i===void 0&&globalThis.litPropertyMetadata.set(t,i=new Map),a==="setter"&&((s=Object.create(s)).wrapped=!0),i.set(r.name,s),a==="accessor"){const{name:n}=r;return{set(b){const de=e.get.call(this);e.set.call(this,b),this.requestUpdate(n,de,s,!0,b)},init(b){return b!==void 0&&this.C(n,void 0,s,b),b}}}if(a==="setter"){const{name:n}=r;return function(b){const de=this[n];e.call(this,b),this.requestUpdate(n,de,s,!0,b)}}throw Error("Unsupported decorator location: "+a)};function o(s){return(e,r)=>typeof r=="object"?We(s,e,r):((a,t,i)=>{const n=t.hasOwnProperty(i);return t.constructor.createProperty(i,a),n?Object.getOwnPropertyDescriptor(t,i):void 0})(s,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ge(s){return o({...s,state:!0,attribute:!1})}var Te=s=>{throw TypeError(s)},be=(s,e,r)=>e.has(s)||Te("Cannot "+r),$=(s,e,r)=>(be(s,e,"read from private field"),e.get(s)),S=(s,e,r)=>e.has(s)?Te("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,r),ce=(s,e,r,a)=>(be(s,e,"write to private field"),e.set(s,r),r),pe=(s,e,r)=>(be(s,e,"access private method"),r),X,C,q,O,L,Q;class c extends Ne{constructor(){super(...arguments),S(this,L),S(this,X),S(this,C,new Map),S(this,q,new Set),S(this,O)}createRenderRoot(){const e=document.createElement("span");return e.setAttribute("data-andy-chrome",""),e.style.display="contents",this.appendChild(e),ce(this,X,e),e}connectedCallback(){super.connectedCallback(),$(this,O)||(ce(this,O,new MutationObserver(()=>pe(this,L,Q).call(this))),$(this,O).observe(this,{childList:!0})),pe(this,L,Q).call(this)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=$(this,O))==null||e.disconnect(),ce(this,O,void 0)}slotTarget(e=""){let r=$(this,C).get(e);return r||(r=document.createElement("span"),r.setAttribute("data-andy-slot",e),r.style.display="contents",$(this,C).set(e,r)),r}hasSlot(e=""){return $(this,q).has(e)}updated(e){super.updated(e),pe(this,L,Q).call(this)}}X=new WeakMap,C=new WeakMap,q=new WeakMap,O=new WeakMap,L=new WeakSet,Q=function(){const s=Array.from(this.childNodes).filter(r=>r!==$(this,X));if(!s.length)return;let e=!1;for(const r of s){const a=Ee(r);$(this,q).has(a)||($(this,q).add(a),e=!0)}e&&this.requestUpdate();for(const r of s){const a=$(this,C).get(Ee(r))??$(this,C).get("");a&&r.parentNode!==a&&a.appendChild(r)}};function Ee(s){return s.nodeType===Node.ELEMENT_NODE&&s.getAttribute("slot")||""}function p(s,e){typeof customElements>"u"||customElements.get(s)||customElements.define(s,e)}var Ke=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,M=(s,e,r,a)=>{for(var t=a>1?void 0:a?Ue(e,r):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&Ke(e,r,t),t};let m=class extends c{constructor(){super(...arguments),this.variant="primary",this.size="md",this.disabled=!1,this.loading=!1,this.type="button"}onClick(e){if(this.disabled||this.loading){e.stopImmediatePropagation(),e.preventDefault();return}this.dispatchEvent(new CustomEvent("andy-click",{bubbles:!0,composed:!0}))}render(){return l`
      <button
        class="btn btn-${this.size} btn-${this.variant}"
        type=${this.type}
        ?disabled=${this.disabled||this.loading}
        @click=${this.onClick}
      >
        ${this.loading?l`<span class="btn-spinner"></span>`:h}
        ${this.slotTarget()}
      </button>
    `}};M([o({reflect:!0})],m.prototype,"variant",2);M([o({reflect:!0})],m.prototype,"size",2);M([o({type:Boolean,reflect:!0})],m.prototype,"disabled",2);M([o({type:Boolean,reflect:!0})],m.prototype,"loading",2);M([o()],m.prototype,"type",2);m=M([d("andy-button")],m);p("andy-button",m);var Re=Object.defineProperty,He=Object.getOwnPropertyDescriptor,De=(s,e,r,a)=>{for(var t=a>1?void 0:a?He(e,r):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&Re(e,r,t),t};let Y=class extends c{constructor(){super(...arguments),this.variant="primary"}render(){return l`<span class="dp-badge ${this.variant}">${this.slotTarget()}</span>`}};De([o({reflect:!0})],Y.prototype,"variant",2);Y=De([d("andy-badge")],Y);p("andy-badge",Y);var Ve=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,me=(s,e,r,a)=>{for(var t=a>1?void 0:a?Fe(e,r):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&Ve(e,r,t),t};let Z=class extends c{constructor(){super(...arguments),this.status="unknown"}render(){return l`<span class="ds-status ${this.status}"><span class="dot"></span>${this.slotTarget()}</span>`}};me([o({reflect:!0})],Z.prototype,"status",2);Z=me([d("andy-status")],Z);p("andy-status",Z);let he=class extends c{render(){return l`<span class="ds-ver-pill">${this.slotTarget()}</span>`}};he=me([d("andy-version-pill")],he);p("andy-version-pill",he);var Ge=Object.defineProperty,Je=Object.getOwnPropertyDescriptor,x=(s,e,r,a)=>{for(var t=a>1?void 0:a?Je(e,r):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&Ge(e,r,t),t};let g=class extends c{constructor(){super(...arguments),this.label="",this.value="",this.placeholder="",this.type="text",this.required=!1,this.disabled=!1,this.error=""}onInput(e){this.value=e.target.value,this.dispatchEvent(new CustomEvent("andy-input",{detail:this.value,bubbles:!0,composed:!0}))}onChange(){this.dispatchEvent(new CustomEvent("andy-change",{detail:this.value,bubbles:!0,composed:!0}))}render(){return l`
      <div class="dp-field">
        ${this.label?l`<label class="label">${this.label}${this.required?l` <span class="req">*</span>`:h}</label>`:h}
        <input
          class="dp-input ${this.error?"is-error":""}"
          type=${this.type}
          .value=${this.value}
          placeholder=${this.placeholder}
          ?required=${this.required}
          ?disabled=${this.disabled}
          @input=${this.onInput}
          @change=${this.onChange}
        />
        ${this.error?l`<span class="error-msg">${this.error}</span>`:h}
      </div>
    `}};x([o()],g.prototype,"label",2);x([o()],g.prototype,"value",2);x([o()],g.prototype,"placeholder",2);x([o()],g.prototype,"type",2);x([o({type:Boolean,reflect:!0})],g.prototype,"required",2);x([o({type:Boolean,reflect:!0})],g.prototype,"disabled",2);x([o()],g.prototype,"error",2);g=x([d("andy-input")],g);p("andy-input",g);var Qe=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,ne=(s,e,r,a)=>{for(var t=a>1?void 0:a?Xe(e,r):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&Qe(e,r,t),t};let E=class extends c{constructor(){super(...arguments),this.label="",this.value="",this.options=[]}onChange(e){this.value=e.target.value,this.dispatchEvent(new CustomEvent("andy-change",{detail:this.value,bubbles:!0,composed:!0}))}render(){const e=l`
      <select class="ds-select" .value=${this.value} @change=${this.onChange}>
        ${this.options.map(r=>l`<option value=${r.value}>${r.label}</option>`)}
      </select>
    `;return this.label?l`<div class="dp-field"><label class="label">${this.label}</label>${e}</div>`:e}updated(e){super.updated(e);const r=this.querySelector("select");r&&r.value!==this.value&&(r.value=this.value)}};ne([o()],E.prototype,"label",2);ne([o()],E.prototype,"value",2);ne([o({attribute:!1})],E.prototype,"options",2);E=ne([d("andy-select")],E);p("andy-select",E);const y=s=>u`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${s}</svg>`,f={check:()=>y(u`<polyline points="20 6 9 17 4 12"/>`),info:()=>y(u`<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>`),warning:()=>y(u`<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>`),error:()=>y(u`<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>`),close:()=>y(u`<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>`),eye:()=>y(u`<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`),copy:()=>y(u`<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>`),search:()=>y(u`<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>`),sun:()=>y(u`<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`),moon:()=>y(u`<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`),chevron:()=>y(u`<polyline points="6 9 12 15 18 9"/>`)};var Ye=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,fe=(s,e,r,a)=>{for(var t=a>1?void 0:a?Ze(e,r):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&Ye(e,r,t),t};let I=class extends c{constructor(){super(...arguments),this.value="",this.placeholder="Search…"}onInput(e){this.value=e.target.value,this.dispatchEvent(new CustomEvent("andy-input",{detail:this.value,bubbles:!0,composed:!0}))}render(){return l`
      <div class="search-input-wrapper">
        <span class="search-icon">${f.search()}</span>
        <input
          class="search-input"
          type="search"
          .value=${this.value}
          placeholder=${this.placeholder}
          @input=${this.onInput}
        />
      </div>
    `}};fe([o()],I.prototype,"value",2);fe([o()],I.prototype,"placeholder",2);I=fe([d("andy-search-input")],I);p("andy-search-input",I);var et=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,ke=(s,e,r,a)=>{for(var t=a>1?void 0:a?tt(e,r):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&et(e,r,t),t};let N=class extends c{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}onChange(e){this.checked=e.target.checked,this.dispatchEvent(new CustomEvent("andy-change",{detail:this.checked,bubbles:!0,composed:!0}))}render(){return l`
      <label class="ds-row ds-row--tight" style="cursor:${this.disabled?"not-allowed":"pointer"}">
        <span class="ds-switch">
          <input type="checkbox" .checked=${this.checked} ?disabled=${this.disabled} @change=${this.onChange} />
          <span class="track"></span>
        </span>
        ${this.hasSlot()?l`<span class="t-label">${this.slotTarget()}</span>`:h}
      </label>
    `}};ke([o({type:Boolean,reflect:!0})],N.prototype,"checked",2);ke([o({type:Boolean,reflect:!0})],N.prototype,"disabled",2);N=ke([d("andy-switch")],N);p("andy-switch",N);var st=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,xe=(s,e,r,a)=>{for(var t=a>1?void 0:a?rt(e,r):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&st(e,r,t),t};let A=class extends c{constructor(){super(...arguments),this.hoverable=!1,this.pad="md"}render(){const s=this.pad==="none"?"":`p-${this.pad}`;return l`<div class="dp-card ${this.hoverable?"hoverable":""} ${s}">${this.slotTarget()}</div>`}};xe([o({type:Boolean,reflect:!0})],A.prototype,"hoverable",2);xe([o({reflect:!0})],A.prototype,"pad",2);A=xe([d("andy-card")],A);p("andy-card",A);var at=Object.defineProperty,it=Object.getOwnPropertyDescriptor,z=(s,e,r,a)=>{for(var t=a>1?void 0:a?it(e,r):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&at(e,r,t),t};let k=class extends c{constructor(){super(...arguments),this.heading="",this.description="",this.slug="",this.version="",this.href=""}render(){const e=l`
      <div class="ds-skill-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
      <div>
        <h3 class="ds-skill-card__title">${this.heading}</h3>
        <p class="ds-skill-card__desc">${this.description}</p>
      </div>
      <div class="ds-skill-card__meta">
        ${this.slug?l`<code class="ds-skill-card__slug">${this.slug}</code>`:h}
        ${this.version?l`<span class="ds-ver-pill">${this.version}</span>`:h}
      </div>
    `;return this.href?l`<a class="ds-skill-card" href=${this.href}>${e}</a>`:l`<div class="ds-skill-card">${e}</div>`}};z([o()],k.prototype,"heading",2);z([o()],k.prototype,"description",2);z([o()],k.prototype,"slug",2);z([o()],k.prototype,"version",2);z([o()],k.prototype,"href",2);k=z([d("andy-skill-card")],k);p("andy-skill-card",k);var nt=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,we=(s,e,r,a)=>{for(var t=a>1?void 0:a?ot(e,r):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&nt(e,r,t),t};let W=class extends c{constructor(){super(...arguments),this.value="",this.label=""}render(){return l`<div class="ds-stat"><span class="ds-stat__value">${this.value}</span><span class="ds-stat__label">${this.label}</span></div>`}};we([o()],W.prototype,"value",2);we([o()],W.prototype,"label",2);W=we([d("andy-stat")],W);p("andy-stat",W);var lt=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,Be=(s,e,r,a)=>{for(var t=a>1?void 0:a?dt(e,r):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&lt(e,r,t),t};const ct={info:"info",warning:"warning",success:"check",error:"error"};let ee=class extends c{constructor(){super(...arguments),this.variant="info"}render(){return l`<div class="ds-callout ${this.variant}">${f[ct[this.variant]]()}<div>${this.slotTarget()}</div></div>`}};Be([o({reflect:!0})],ee.prototype,"variant",2);ee=Be([d("andy-callout")],ee);p("andy-callout",ee);var pt=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,Oe=(s,e,r,a)=>{for(var t=a>1?void 0:a?ht(e,r):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&pt(e,r,t),t};let K=class extends c{constructor(){super(...arguments),this.size="md",this.round=!1}render(){return l`<div class="ds-avatar ${this.size} ${this.round?"round":""}">${this.slotTarget()}</div>`}};Oe([o({reflect:!0})],K.prototype,"size",2);Oe([o({type:Boolean,reflect:!0})],K.prototype,"round",2);K=Oe([d("andy-avatar")],K);p("andy-avatar",K);var ut=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,Me=(s,e,r,a)=>{for(var t=a>1?void 0:a?vt(e,r):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&ut(e,r,t),t};let te=class extends c{constructor(){super(...arguments),this.value=0}render(){const e=Math.max(0,Math.min(100,this.value));return l`<div class="ds-progress" role="progressbar" aria-valuenow=${e} aria-valuemin="0" aria-valuemax="100"><span style="width:${e}%"></span></div>`}};Me([o({type:Number})],te.prototype,"value",2);te=Me([d("andy-progress")],te);p("andy-progress",te);var yt=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,je=(s,e,r,a)=>{for(var t=a>1?void 0:a?$t(e,r):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&yt(e,r,t),t};let U=class extends c{constructor(){super(...arguments),this.variant="tinted",this.size="md"}render(){const e=["au-icon-chip",this.size==="lg"?"au-icon-chip--lg":"",this.variant==="solid"?"au-icon-chip--solid":"",this.variant==="muted"?"au-icon-chip--muted":""].filter(Boolean).join(" ");return l`<div class=${e}>${this.slotTarget()}</div>`}};je([o({reflect:!0})],U.prototype,"variant",2);je([o({reflect:!0})],U.prototype,"size",2);U=je([d("andy-icon-chip")],U);p("andy-icon-chip",U);var gt=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,Pe=(s,e,r,a)=>{for(var t=a>1?void 0:a?bt(e,r):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&gt(e,r,t),t};let R=class extends c{constructor(){super(...arguments),this.heading="",this.copy=""}render(){return l`
      <div class="ds-empty">
        <div class="ds-empty__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
          </svg>
        </div>
        ${this.heading?l`<p class="ds-empty__title">${this.heading}</p>`:h}
        ${this.copy?l`<p class="ds-empty__copy">${this.copy}</p>`:h}
        ${this.slotTarget()}
      </div>
    `}};Pe([o()],R.prototype,"heading",2);Pe([o()],R.prototype,"copy",2);R=Pe([d("andy-empty-state")],R);p("andy-empty-state",R);var mt=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,ze=(s,e,r,a)=>{for(var t=a>1?void 0:a?ft(e,r):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&mt(e,r,t),t};let se=class extends c{constructor(){super(...arguments),this.items=[]}go(e,r){e.href||r.preventDefault(),this.dispatchEvent(new CustomEvent("andy-navigate",{detail:e,bubbles:!0,composed:!0}))}render(){const e=this.items.length-1;return l`
      <nav class="dp-breadcrumb">
        ${this.items.map((r,a)=>a===e?l`<span class="leaf">${r.label}</span>`:l`<a href=${r.href??"#"} @click=${t=>this.go(r,t)}>${r.label}</a><span class="sep">/</span>`)}
      </nav>
    `}};ze([o({attribute:!1})],se.prototype,"items",2);se=ze([d("andy-breadcrumb")],se);p("andy-breadcrumb",se);var kt=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,G=(s,e,r,a)=>{for(var t=a>1?void 0:a?xt(e,r):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&kt(e,r,t),t};let ue=class extends c{render(){return l`<ul class="nav-list">${this.slotTarget()}</ul>`}};ue=G([d("andy-nav-list")],ue);p("andy-nav-list",ue);let T=class extends c{constructor(){super(...arguments),this.active=!1,this.href="",this.key=""}onClick(e){this.href||e.preventDefault(),this.dispatchEvent(new CustomEvent("andy-select",{detail:this.key,bubbles:!0,composed:!0}))}render(){return l`
      <li>
        <a class="nav-item ${this.active?"active":""}" href=${this.href||"#"} @click=${this.onClick}>
          ${this.hasSlot("icon")?l`<span class="nav-item__icon">${this.slotTarget("icon")}</span>`:h}
          <span class="nav-label">${this.slotTarget()}</span>
        </a>
      </li>
    `}};G([o({type:Boolean,reflect:!0})],T.prototype,"active",2);G([o()],T.prototype,"href",2);G([o()],T.prototype,"key",2);T=G([d("andy-nav-item")],T);p("andy-nav-item",T);var wt=Object.defineProperty,Ot=Object.getOwnPropertyDescriptor,w=(s,e,r,a)=>{for(var t=a>1?void 0:a?Ot(e,r):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&wt(e,r,t),t};let re=class extends c{constructor(){super(...arguments),this.collapsed=!1,this._onToggle=s=>{this.collapsed=s.detail}}connectedCallback(){super.connectedCallback(),this.addEventListener("andy-collapse-toggle",this._onToggle)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("andy-collapse-toggle",this._onToggle)}render(){return l`
      ${this.slotTarget("sidebar")}
      <div class="app-col">
        ${this.slotTarget("header")}
        <div class="app-scroll">${this.slotTarget()}</div>
      </div>
    `}};w([o({type:Boolean,reflect:!0})],re.prototype,"collapsed",2);re=w([d("andy-app-shell")],re);p("andy-app-shell",re);let H=class extends c{constructor(){super(...arguments),this.collapsed=!1,this.collapsible=!0}toggle(){this.collapsed=!this.collapsed,this.dispatchEvent(new CustomEvent("andy-collapse-toggle",{detail:this.collapsed,bubbles:!0,composed:!0}))}render(){return l`
      <aside class="sidebar ${this.collapsed?"collapsed":""}">
        <div class="sidebar-header">
          <div class="sidebar-header__top">
            <div class="sidebar-brand">${this.slotTarget("brand")}</div>
            ${this.collapsible?l`<button class="sidebar-collapse-toggle" title="Collapse" aria-label="Collapse sidebar" @click=${this.toggle}>
                  <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 19l-7-7 7-7M19 19l-7-7 7-7" /></svg>
                </button>`:h}
          </div>
        </div>
        <nav class="sidebar-nav">${this.slotTarget()}</nav>
        ${this.hasSlot("footer")?l`<div class="sidebar-footer">${this.slotTarget("footer")}</div>`:h}
      </aside>
    `}};w([o({type:Boolean,reflect:!0})],H.prototype,"collapsed",2);w([o({type:Boolean})],H.prototype,"collapsible",2);H=w([d("andy-sidebar")],H);p("andy-sidebar",H);let ae=class extends c{constructor(){super(...arguments),this.heading=""}render(){return l`
      <div class="nav-section">
        ${this.heading?l`<p class="nav-section-title collapsed-hide">${this.heading}</p>`:h}
        <ul class="nav-list">${this.slotTarget()}</ul>
      </div>
    `}};w([o()],ae.prototype,"heading",2);ae=w([d("andy-nav-section")],ae);p("andy-nav-section",ae);let ve=class extends c{render(){return l`
      <header class="header">
        <div class="header-content">
          <div class="header-title">${this.slotTarget()}</div>
          <div class="header-actions">${this.slotTarget("actions")}</div>
        </div>
      </header>
    `}};ve=w([d("andy-header")],ve);p("andy-header",ve);var jt=Object.defineProperty,Pt=Object.getOwnPropertyDescriptor,oe=(s,e,r,a)=>{for(var t=a>1?void 0:a?Pt(e,r):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&jt(e,r,t),t};let D=class extends c{constructor(){super(...arguments),this.open=!1,this.heading="",this.persistent=!1}connectedCallback(){super.connectedCallback(),this._onKey=this._onKey.bind(this),document.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKey)}_onKey(e){e.key==="Escape"&&this.open&&!this.persistent&&this.close()}close(){this.open=!1,this.dispatchEvent(new CustomEvent("andy-close",{bubbles:!0,composed:!0}))}onBackdrop(e){e.target===e.currentTarget&&!this.persistent&&this.close()}render(){return this.open?l`
      <div class="modal-overlay" style="position:fixed" @click=${this.onBackdrop}>
        <div class="modal-content" role="dialog" aria-modal="true" aria-label=${this.heading||"Dialog"}>
          <div class="modal-header">
            <h3>${this.heading}</h3>
            <button class="modal-close" aria-label="Close" @click=${this.close}>${f.close()}</button>
          </div>
          <div class="modal-body">${this.slotTarget()}</div>
        </div>
      </div>
    `:h}};oe([o({type:Boolean,reflect:!0})],D.prototype,"open",2);oe([o()],D.prototype,"heading",2);oe([o({type:Boolean})],D.prototype,"persistent",2);D=oe([d("andy-modal")],D);p("andy-modal",D);var _t=Object.defineProperty,Ct=Object.getOwnPropertyDescriptor,le=(s,e,r,a)=>{for(var t=a>1?void 0:a?Ct(e,r):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&_t(e,r,t),t};let B=class extends c{constructor(){super(...arguments),this.tabs=[],this.active="",this.variant="segment"}select(e){e!==this.active&&(this.active=e,this.dispatchEvent(new CustomEvent("andy-change",{detail:e,bubbles:!0,composed:!0})))}render(){var r;const e=this.active||((r=this.tabs[0])==null?void 0:r.id);return this.variant==="provider"?l`
        <div class="provider-tabs">
          ${this.tabs.map(a=>l`<button
              class="provider-tab ${a.id===e?"active":""}"
              @click=${()=>this.select(a.id)}
            >
              ${a.label}${a.count!=null?l` <span class="tab-count">${a.count}</span>`:h}
            </button>`)}
        </div>
      `:l`
      <div class="ds-segment">
        ${this.tabs.map(a=>l`<button
            class="ds-segment-btn ${a.id===e?"active":""}"
            @click=${()=>this.select(a.id)}
          >
            ${a.label}
          </button>`)}
      </div>
    `}};le([o({attribute:!1})],B.prototype,"tabs",2);le([o()],B.prototype,"active",2);le([o({reflect:!0})],B.prototype,"variant",2);B=le([d("andy-tabs")],B);p("andy-tabs",B);var Et=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,_e=(s,e,r,a)=>{for(var t=a>1?void 0:a?Tt(e,r):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&Et(e,r,t),t};let V=class extends c{constructor(){super(...arguments),this.heading="",this.open=!1}toggle(){this.open=!this.open,this.dispatchEvent(new CustomEvent("andy-toggle",{detail:this.open,bubbles:!0,composed:!0}))}render(){return l`
      <button class="ds-accordion__head ${this.open?"open":""}" @click=${this.toggle} aria-expanded=${this.open}>
        <span class="ds-accordion__icon">${f.chevron()}</span>
        <span class="label">${this.heading}</span>
      </button>
      <div class="ds-accordion__body" ?hidden=${!this.open}>${this.slotTarget()}</div>
    `}};_e([o()],V.prototype,"heading",2);_e([o({type:Boolean,reflect:!0})],V.prototype,"open",2);V=_e([d("andy-accordion")],V);p("andy-accordion",V);const Dt="andy-ui-theme";function Se(){return typeof document>"u"?"light":document.documentElement.dataset.theme==="dark"?"dark":"light"}function Bt(s){if(!(typeof document>"u")){document.documentElement.dataset.theme=s;try{localStorage.setItem(Dt,s)}catch{}}}function Mt(){const s=Se()==="dark"?"light":"dark";return Bt(s),s}var zt=Object.defineProperty,St=Object.getOwnPropertyDescriptor,Le=(s,e,r,a)=>{for(var t=a>1?void 0:a?St(e,r):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&zt(e,r,t),t};let ie=class extends c{constructor(){super(...arguments),this.theme=Se()}flip(){this.theme=Mt(),this.dispatchEvent(new CustomEvent("andy-theme-change",{detail:this.theme,bubbles:!0,composed:!0}))}render(){return l`
      <button class="ds-theme-toggle" aria-label="Toggle theme" @click=${this.flip}>
        <span class="sun">${f.sun()}</span>
        <span class="moon">${f.moon()}</span>
      </button>
    `}};Le([ge()],ie.prototype,"theme",2);ie=Le([d("andy-theme-toggle")],ie);p("andy-theme-toggle",ie);var Lt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,J=(s,e,r,a)=>{for(var t=a>1?void 0:a?qt(e,r):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&Lt(e,r,t),t};let j=class extends c{constructor(){super(...arguments),this.value="",this.masked="",this.revealed=!1,this.copied=!1}get maskedText(){if(this.masked)return this.masked;const s=this.value.slice(-4);return`${this.value.slice(0,9)}${"•".repeat(20)}${s}`}toggle(){this.revealed=!this.revealed}async copy(){var s;try{await((s=navigator.clipboard)==null?void 0:s.writeText(this.value))}catch{}this.copied=!0,this.dispatchEvent(new CustomEvent("andy-copy",{bubbles:!0,composed:!0})),setTimeout(()=>this.copied=!1,1400)}render(){return l`
      <div class="ds-key-box">
        <code>${this.revealed?this.value:this.maskedText}</code>
        <button class="ds-icon-btn" title="Reveal / hide" @click=${this.toggle}>${f.eye()}</button>
        <button class="ds-key-copy ${this.copied?"is-copied":""}" @click=${this.copy}>
          ${f.copy()}<span>${this.copied?"Copied":"Copy"}</span>
        </button>
      </div>
    `}};J([o()],j.prototype,"value",2);J([o()],j.prototype,"masked",2);J([ge()],j.prototype,"revealed",2);J([ge()],j.prototype,"copied",2);j=J([d("andy-key-box")],j);p("andy-key-box",j);var It=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,Ce=(s,e,r,a)=>{for(var t=a>1?void 0:a?Nt(e,r):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&It(e,r,t),t};let F=class extends c{constructor(){super(...arguments),this.columns=[],this.rows=[]}cellClass(e){return[e.mono?"cell-mono":"",e.strong?"cell-strong":""].filter(Boolean).join(" ")}render(){return l`
      <div class="ds-table-panel">
        <table class="ds-table">
          <thead>
            <tr>
              ${this.columns.map(e=>l`<th style=${e.align==="right"?"text-align:right":""}>${e.header}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.rows.map(e=>l`<tr>
                ${this.columns.map(r=>l`<td class=${this.cellClass(r)} style=${r.align==="right"?"text-align:right":""}>${String(e[r.key]??"")}</td>`)}
              </tr>`)}
          </tbody>
        </table>
      </div>
    `}};Ce([o({attribute:!1})],F.prototype,"columns",2);Ce([o({attribute:!1})],F.prototype,"rows",2);F=Ce([d("andy-table")],F);p("andy-table",F);var At=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,v=(s,e,r,a)=>{for(var t=a>1?void 0:a?Wt(e,r):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&At(e,r,t),t};let ye=class extends c{render(){return l`<div class="ds-chat">${this.slotTarget()}</div>`}};ye=v([d("andy-chat")],ye);p("andy-chat",ye);let P=class extends c{constructor(){super(...arguments),this.kind="user",this.author="",this.avatar="",this.time=""}render(){return l`
      <div class="ds-msg ${this.kind}">
        <div class="ds-avatar sm round">${this.avatar}</div>
        <div class="ds-msg__bubble">
          ${this.author?l`<p class="ds-msg__name">${this.author}</p>`:h}
          <div class="ds-msg__text">${this.slotTarget()}</div>
          ${this.time?l`<div class="ds-msg__time">${this.time}</div>`:h}
        </div>
      </div>
    `}};v([o({reflect:!0})],P.prototype,"kind",2);v([o()],P.prototype,"author",2);v([o()],P.prototype,"avatar",2);v([o()],P.prototype,"time",2);P=v([d("andy-message")],P);p("andy-message",P);let $e=class extends c{render(){return l`<span class="ds-typing"><span></span><span></span><span></span></span>`}};$e=v([d("andy-typing")],$e);p("andy-typing",$e);let _=class extends c{constructor(){super(...arguments),this.name="",this.description="",this.meta="",this.active=!1}render(){return l`
      <div class="ds-session ${this.active?"active":""}">
        <span class="live"></span>
        <div>
          <div class="ds-session__name">${this.name}</div>
          ${this.description?l`<div class="ds-session__desc">${this.description}</div>`:h}
          ${this.meta?l`<div class="ds-session__meta">${this.meta}</div>`:h}
        </div>
      </div>
    `}};v([o()],_.prototype,"name",2);v([o()],_.prototype,"description",2);v([o()],_.prototype,"meta",2);v([o({type:Boolean,reflect:!0})],_.prototype,"active",2);_=v([d("andy-session")],_);p("andy-session",_);export{f as n};
