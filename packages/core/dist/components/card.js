import { html as c } from "lit";
import { property as n, customElement as f } from "lit/decorators.js";
import { d as h, A as i } from "../chunks/base-DPbIYdLL.js";
var m = Object.defineProperty, v = Object.getOwnPropertyDescriptor, l = (t, o, a, s) => {
  for (var e = s > 1 ? void 0 : s ? v(o, a) : o, p = t.length - 1, d; p >= 0; p--)
    (d = t[p]) && (e = (s ? d(o, a, e) : d(e)) || e);
  return s && e && m(o, a, e), e;
};
let r = class extends i {
  constructor() {
    super(...arguments), this.hoverable = !1, this.pad = "md";
  }
  render() {
    const t = this.pad === "none" ? "" : `p-${this.pad}`;
    return c`<div class="dp-card ${this.hoverable ? "hoverable" : ""} ${t}">${this.slotTarget()}</div>`;
  }
};
l([
  n({ type: Boolean, reflect: !0 })
], r.prototype, "hoverable", 2);
l([
  n({ reflect: !0 })
], r.prototype, "pad", 2);
r = l([
  f("andy-card")
], r);
h("andy-card", r);
export {
  r as AndyCard
};
//# sourceMappingURL=card.js.map
