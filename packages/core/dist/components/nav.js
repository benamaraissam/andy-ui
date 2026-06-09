import { html as c, nothing as u } from "lit";
import { customElement as v, property as h } from "lit/decorators.js";
import { d as f, A as m } from "../chunks/base-DPbIYdLL.js";
var y = Object.defineProperty, d = Object.getOwnPropertyDescriptor, s = (r, a, i, n) => {
  for (var e = n > 1 ? void 0 : n ? d(a, i) : a, l = r.length - 1, o; l >= 0; l--)
    (o = r[l]) && (e = (n ? o(a, i, e) : o(e)) || e);
  return n && e && y(a, i, e), e;
};
let p = class extends m {
  render() {
    return c`<ul class="nav-list">${this.slotTarget()}</ul>`;
  }
};
p = s([
  v("andy-nav-list")
], p);
f("andy-nav-list", p);
let t = class extends m {
  constructor() {
    super(...arguments), this.active = !1, this.href = "", this.key = "";
  }
  onClick(r) {
    this.href || r.preventDefault(), this.dispatchEvent(new CustomEvent("andy-select", { detail: this.key, bubbles: !0, composed: !0 }));
  }
  render() {
    return c`
      <li>
        <a class="nav-item ${this.active ? "active" : ""}" href=${this.href || "#"} @click=${this.onClick}>
          ${this.hasSlot("icon") ? c`<span class="nav-item__icon">${this.slotTarget("icon")}</span>` : u}
          <span class="nav-label">${this.slotTarget()}</span>
        </a>
      </li>
    `;
  }
};
s([
  h({ type: Boolean, reflect: !0 })
], t.prototype, "active", 2);
s([
  h()
], t.prototype, "href", 2);
s([
  h()
], t.prototype, "key", 2);
t = s([
  v("andy-nav-item")
], t);
f("andy-nav-item", t);
export {
  t as AndyNavItem,
  p as AndyNavList
};
//# sourceMappingURL=nav.js.map
