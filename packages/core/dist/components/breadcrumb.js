import { html as o } from "lit";
import { property as m, customElement as u } from "lit/decorators.js";
import { d as f, A as b } from "../chunks/base-DPbIYdLL.js";
var d = Object.defineProperty, i = Object.getOwnPropertyDescriptor, c = (r, e, a, t) => {
  for (var s = t > 1 ? void 0 : t ? i(e, a) : e, p = r.length - 1, l; p >= 0; p--)
    (l = r[p]) && (s = (t ? l(e, a, s) : l(s)) || s);
  return t && s && d(e, a, s), s;
};
let n = class extends b {
  constructor() {
    super(...arguments), this.items = [];
  }
  go(r, e) {
    r.href || e.preventDefault(), this.dispatchEvent(new CustomEvent("andy-navigate", { detail: r, bubbles: !0, composed: !0 }));
  }
  render() {
    const r = this.items.length - 1;
    return o`
      <nav class="dp-breadcrumb">
        ${this.items.map(
      (e, a) => a === r ? o`<span class="leaf">${e.label}</span>` : o`<a href=${e.href ?? "#"} @click=${(t) => this.go(e, t)}>${e.label}</a><span class="sep">/</span>`
    )}
      </nav>
    `;
  }
};
c([
  m({ attribute: !1 })
], n.prototype, "items", 2);
n = c([
  u("andy-breadcrumb")
], n);
f("andy-breadcrumb", n);
export {
  n as AndyBreadcrumb
};
//# sourceMappingURL=breadcrumb.js.map
