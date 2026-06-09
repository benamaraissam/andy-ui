import { html as d } from "lit";
import { property as i, customElement as l } from "lit/decorators.js";
import { d as f, A as v } from "../chunks/base-DPbIYdLL.js";
var c = Object.defineProperty, u = Object.getOwnPropertyDescriptor, m = (o, e, s, t) => {
  for (var r = t > 1 ? void 0 : t ? u(e, s) : e, n = o.length - 1, p; n >= 0; n--)
    (p = o[n]) && (r = (t ? p(e, s, r) : p(r)) || r);
  return t && r && c(e, s, r), r;
};
let a = class extends v {
  constructor() {
    super(...arguments), this.variant = "primary";
  }
  render() {
    return d`<span class="dp-badge ${this.variant}">${this.slotTarget()}</span>`;
  }
};
m([
  i({ reflect: !0 })
], a.prototype, "variant", 2);
a = m([
  l("andy-badge")
], a);
f("andy-badge", a);
export {
  a as AndyBadge
};
//# sourceMappingURL=badge.js.map
