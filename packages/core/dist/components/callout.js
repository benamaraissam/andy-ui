import { html as c } from "lit";
import { property as p, customElement as f } from "lit/decorators.js";
import { d as v, A as m } from "../chunks/base-DPbIYdLL.js";
import { i as u } from "../chunks/icons-Dyl0601F.js";
var d = Object.defineProperty, h = Object.getOwnPropertyDescriptor, l = (i, t, n, e) => {
  for (var r = e > 1 ? void 0 : e ? h(t, n) : t, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (r = (e ? a(t, n, r) : a(r)) || r);
  return e && r && d(t, n, r), r;
};
const _ = {
  info: "info",
  warning: "warning",
  success: "check",
  error: "error"
};
let o = class extends m {
  constructor() {
    super(...arguments), this.variant = "info";
  }
  render() {
    return c`<div class="ds-callout ${this.variant}">${u[_[this.variant]]()}<div>${this.slotTarget()}</div></div>`;
  }
};
l([
  p({ reflect: !0 })
], o.prototype, "variant", 2);
o = l([
  f("andy-callout")
], o);
v("andy-callout", o);
export {
  o as AndyCallout
};
//# sourceMappingURL=callout.js.map
