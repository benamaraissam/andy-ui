import { html as s, nothing as t } from "lit";
import { property as a, customElement as n } from "lit/decorators.js";
import { d as l, A as i } from "../chunks/base-DPbIYdLL.js";
import "./icon.js";
import "./icon-chip.js";
import "./avatar.js";
var _ = Object.defineProperty, T = Object.getOwnPropertyDescriptor, e = (p, h, g, v) => {
  for (var r = v > 1 ? void 0 : v ? T(h, g) : h, u = p.length - 1, m; u >= 0; u--)
    (m = p[u]) && (r = (v ? m(h, g, r) : m(r)) || r);
  return v && r && _(h, g, r), r;
};
let y = class extends i {
  constructor() {
    super(...arguments), this.collapsed = !1, this._onToggle = (p) => {
      this.collapsed = p.detail;
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("andy-collapse-toggle", this._onToggle);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("andy-collapse-toggle", this._onToggle);
  }
  render() {
    return s`
      ${this.slotTarget("sidebar")}
      <div class="app-col">
        ${this.slotTarget("header")}
        <div class="app-scroll">${this.slotTarget()}</div>
      </div>
    `;
  }
};
e([
  a({ type: Boolean, reflect: !0 })
], y.prototype, "collapsed", 2);
y = e([
  n("andy-app-shell")
], y);
l("andy-app-shell", y);
let c = class extends i {
  constructor() {
    super(...arguments), this.collapsed = !1, this.collapsible = !0;
  }
  toggle() {
    this.collapsed = !this.collapsed, this.dispatchEvent(
      new CustomEvent("andy-collapse-toggle", { detail: this.collapsed, bubbles: !0, composed: !0 })
    );
  }
  render() {
    return s`
      <aside class="sidebar ${this.collapsed ? "collapsed" : ""}">
        <andy-header class="sidebar-header">
          <div class="sidebar-brand">${this.slotTarget("brand")}</div>
          ${this.collapsible ? s`<button slot="actions" class="sidebar-collapse-toggle" title="Collapse" aria-label="Collapse sidebar" @click=${this.toggle}>
                <andy-icon name="chevronsLeft" size="sm"></andy-icon>
              </button>` : t}
        </andy-header>
        <nav class="sidebar-nav">${this.slotTarget()}</nav>
        ${this.hasSlot("footer") ? s`<andy-footer class="sidebar-footer">${this.slotTarget("footer")}</andy-footer>` : t}
      </aside>
    `;
  }
};
e([
  a({ type: Boolean, reflect: !0 })
], c.prototype, "collapsed", 2);
e([
  a({ type: Boolean })
], c.prototype, "collapsible", 2);
c = e([
  n("andy-sidebar")
], c);
l("andy-sidebar", c);
let o = class extends i {
  constructor() {
    super(...arguments), this.name = "", this.tagline = "", this.icon = "box";
  }
  render() {
    return s`
      <andy-icon-chip variant="solid" icon=${this.icon || t}>${this.slotTarget("logo")}</andy-icon-chip>
      <span class="sidebar-brand__text collapsed-hide">
        ${this.name ? s`<span class="sidebar-brand__name">${this.name}</span>` : t}
        ${this.tagline ? s`<span class="sidebar-brand__tagline">${this.tagline}</span>` : t}
      </span>
    `;
  }
};
e([
  a()
], o.prototype, "name", 2);
e([
  a()
], o.prototype, "tagline", 2);
e([
  a({ reflect: !0 })
], o.prototype, "icon", 2);
o = e([
  n("andy-sidebar-brand")
], o);
l("andy-sidebar-brand", o);
let d = class extends i {
  constructor() {
    super(...arguments), this.name = "", this.email = "", this.avatar = "";
  }
  render() {
    return s`
      <div class="sidebar-user">
        <andy-avatar>${this.avatar}</andy-avatar>
        <span class="sidebar-user__meta collapsed-hide">
          ${this.name ? s`<span class="sidebar-user__name">${this.name}</span>` : t}
          ${this.email ? s`<span class="sidebar-user__email">${this.email}</span>` : t}
        </span>
      </div>
    `;
  }
};
e([
  a()
], d.prototype, "name", 2);
e([
  a()
], d.prototype, "email", 2);
e([
  a()
], d.prototype, "avatar", 2);
d = e([
  n("andy-sidebar-user")
], d);
l("andy-sidebar-user", d);
let b = class extends i {
  constructor() {
    super(...arguments), this.heading = "";
  }
  render() {
    return s`
      <div class="nav-section">
        ${this.heading ? s`<p class="nav-section-title collapsed-hide">${this.heading}</p>` : t}
        <div class="nav-list" role="list">${this.slotTarget()}</div>
      </div>
    `;
  }
};
e([
  a()
], b.prototype, "heading", 2);
b = e([
  n("andy-nav-section")
], b);
l("andy-nav-section", b);
let $ = class extends i {
  render() {
    return s`
      <header class="header">
        <div class="header-content">
          <div class="header-title">${this.slotTarget()}</div>
          <div class="header-actions">${this.slotTarget("actions")}</div>
        </div>
      </header>
    `;
  }
};
$ = e([
  n("andy-header")
], $);
l("andy-header", $);
let f = class extends i {
  render() {
    return s`
      <footer class="au-footer">
        <div class="au-footer__main">${this.slotTarget()}</div>
        ${this.hasSlot("actions") ? s`<div class="au-footer__actions">${this.slotTarget("actions")}</div>` : t}
      </footer>
    `;
  }
};
f = e([
  n("andy-footer")
], f);
l("andy-footer", f);
export {
  y as AndyAppShell,
  f as AndyFooter,
  $ as AndyHeader,
  b as AndyNavSection,
  c as AndySidebar,
  o as AndySidebarBrand,
  d as AndySidebarUser
};
//# sourceMappingURL=layout.js.map
