import { html as d } from "lit";
import { property as v, customElement as m } from "lit/decorators.js";
import { d as u, A as i } from "../chunks/base-DPbIYdLL.js";
var _ = Object.defineProperty, c = Object.getOwnPropertyDescriptor, n = (o, e, r, a) => {
  for (var t = a > 1 ? void 0 : a ? c(e, r) : e, l = o.length - 1, p; l >= 0; l--)
    (p = o[l]) && (t = (a ? p(e, r, t) : p(t)) || t);
  return a && t && _(e, r, t), t;
};
let s = class extends i {
  constructor() {
    super(...arguments), this.value = "", this.label = "";
  }
  render() {
    return d`<div class="ds-stat"><span class="ds-stat__value">${this.value}</span><span class="ds-stat__label">${this.label}</span></div>`;
  }
};
n([
  v()
], s.prototype, "value", 2);
n([
  v()
], s.prototype, "label", 2);
s = n([
  m("andy-stat")
], s);
u("andy-stat", s);
export {
  s as AndyStat
};
//# sourceMappingURL=stat.js.map
