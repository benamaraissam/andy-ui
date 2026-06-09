import { html as t, nothing as b } from "lit";
import { property as n, customElement as c } from "lit/decorators.js";
import { d as p, A as h } from "../chunks/base-DPbIYdLL.js";
var f = Object.defineProperty, m = Object.getOwnPropertyDescriptor, e = (l, o, v, r) => {
  for (var s = r > 1 ? void 0 : r ? m(o, v) : o, g = l.length - 1, u; g >= 0; g--)
    (u = l[g]) && (s = (r ? u(o, v, s) : u(s)) || s);
  return r && s && f(o, v, s), s;
};
let d = class extends h {
  constructor() {
    super(...arguments), this.collapsed = !1, this._onToggle = (l) => {
      this.collapsed = l.detail;
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("andy-collapse-toggle", this._onToggle);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("andy-collapse-toggle", this._onToggle);
  }
  render() {
    return t`
      ${this.slotTarget("sidebar")}
      <div class="app-col">
        ${this.slotTarget("header")}
        <div class="app-scroll">${this.slotTarget()}</div>
      </div>
    `;
  }
};
e([
  n({ type: Boolean, reflect: !0 })
], d.prototype, "collapsed", 2);
d = e([
  c("andy-app-shell")
], d);
p("andy-app-shell", d);
let a = class extends h {
  constructor() {
    super(...arguments), this.collapsed = !1, this.collapsible = !0;
  }
  toggle() {
    this.collapsed = !this.collapsed, this.dispatchEvent(
      new CustomEvent("andy-collapse-toggle", { detail: this.collapsed, bubbles: !0, composed: !0 })
    );
  }
  render() {
    return t`
      <aside class="sidebar ${this.collapsed ? "collapsed" : ""}">
        <div class="sidebar-header">
          <div class="sidebar-header__top">
            <div class="sidebar-brand">${this.slotTarget("brand")}</div>
            ${this.collapsible ? t`<button class="sidebar-collapse-toggle" title="Collapse" aria-label="Collapse sidebar" @click=${this.toggle}>
                  <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 19l-7-7 7-7M19 19l-7-7 7-7" /></svg>
                </button>` : b}
          </div>
        </div>
        <nav class="sidebar-nav">${this.slotTarget()}</nav>
        ${this.hasSlot("footer") ? t`<div class="sidebar-footer">${this.slotTarget("footer")}</div>` : b}
      </aside>
    `;
  }
};
e([
  n({ type: Boolean, reflect: !0 })
], a.prototype, "collapsed", 2);
e([
  n({ type: Boolean })
], a.prototype, "collapsible", 2);
a = e([
  c("andy-sidebar")
], a);
p("andy-sidebar", a);
let i = class extends h {
  constructor() {
    super(...arguments), this.heading = "";
  }
  render() {
    return t`
      <div class="nav-section">
        ${this.heading ? t`<p class="nav-section-title collapsed-hide">${this.heading}</p>` : b}
        <ul class="nav-list">${this.slotTarget()}</ul>
      </div>
    `;
  }
};
e([
  n()
], i.prototype, "heading", 2);
i = e([
  c("andy-nav-section")
], i);
p("andy-nav-section", i);
let y = class extends h {
  render() {
    return t`
      <header class="header">
        <div class="header-content">
          <div class="header-title">${this.slotTarget()}</div>
          <div class="header-actions">${this.slotTarget("actions")}</div>
        </div>
      </header>
    `;
  }
};
y = e([
  c("andy-header")
], y);
p("andy-header", y);
export {
  d as AndyAppShell,
  y as AndyHeader,
  i as AndyNavSection,
  a as AndySidebar
};
//# sourceMappingURL=layout.js.map
