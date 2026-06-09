import { html as i } from "lit";
import { property as f, customElement as d } from "lit/decorators.js";
import { d as c, A as m } from "../chunks/base-DPbIYdLL.js";
var v = Object.defineProperty, y = Object.getOwnPropertyDescriptor, o = (u, t, n, e) => {
  for (var s = e > 1 ? void 0 : e ? y(t, n) : t, a = u.length - 1, l; a >= 0; a--)
    (l = u[a]) && (s = (e ? l(t, n, s) : l(s)) || s);
  return e && s && v(t, n, s), s;
};
let r = class extends m {
  constructor() {
    super(...arguments), this.status = "unknown";
  }
  render() {
    return i`<span class="ds-status ${this.status}"><span class="dot"></span>${this.slotTarget()}</span>`;
  }
};
o([
  f({ reflect: !0 })
], r.prototype, "status", 2);
r = o([
  d("andy-status")
], r);
c("andy-status", r);
let p = class extends m {
  render() {
    return i`<span class="ds-ver-pill">${this.slotTarget()}</span>`;
  }
};
p = o([
  d("andy-version-pill")
], p);
c("andy-version-pill", p);
export {
  r as AndyStatus,
  p as AndyVersionPill
};
//# sourceMappingURL=status.js.map
