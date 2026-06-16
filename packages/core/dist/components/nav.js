import { html as c, nothing as m } from "lit";
import { customElement as v, property as h } from "lit/decorators.js";
import { d, A as f } from "../chunks/base-DPbIYdLL.js";
var u = Object.defineProperty, y = Object.getOwnPropertyDescriptor, s = (r, a, n, i) => {
  for (var t = i > 1 ? void 0 : i ? y(a, n) : a, l = r.length - 1, o; l >= 0; l--)
    (o = r[l]) && (t = (i ? o(a, n, t) : o(t)) || t);
  return i && t && u(a, n, t), t;
};
let p = class extends f {
  render() {
    return c`<div class="nav-list" role="list">${this.slotTarget()}</div>`;
  }
};
p = s([
  v("andy-nav-list")
], p);
d("andy-nav-list", p);
let e = class extends f {
  constructor() {
    super(...arguments), this.active = !1, this.href = "", this.key = "";
  }
  connectedCallback() {
    super.connectedCallback(), this.hasAttribute("role") || this.setAttribute("role", "listitem");
  }
  onClick(r) {
    this.href || r.preventDefault(), this.dispatchEvent(new CustomEvent("andy-select", { detail: this.key, bubbles: !0, composed: !0 }));
  }
  render() {
    return c`
      <a class="nav-item ${this.active ? "active" : ""}" href=${this.href || "#"} @click=${this.onClick}>
        ${this.hasSlot("icon") ? c`<span class="nav-item__icon">${this.slotTarget("icon")}</span>` : m}
        <span class="nav-label">${this.slotTarget()}</span>
      </a>
    `;
  }
};
s([
  h({ type: Boolean, reflect: !0 })
], e.prototype, "active", 2);
s([
  h()
], e.prototype, "href", 2);
s([
  h()
], e.prototype, "key", 2);
e = s([
  v("andy-nav-item")
], e);
d("andy-nav-item", e);
export {
  e as AndyNavItem,
  p as AndyNavList
};
//# sourceMappingURL=nav.js.map
