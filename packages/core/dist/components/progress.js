import { html as m } from "lit";
import { property as i, customElement as u } from "lit/decorators.js";
import { d as v, A as d } from "../chunks/base-DPbIYdLL.js";
var c = Object.defineProperty, f = Object.getOwnPropertyDescriptor, n = (e, a, o, t) => {
  for (var r = t > 1 ? void 0 : t ? f(a, o) : a, l = e.length - 1, p; l >= 0; l--)
    (p = e[l]) && (r = (t ? p(a, o, r) : p(r)) || r);
  return t && r && c(a, o, r), r;
};
let s = class extends d {
  constructor() {
    super(...arguments), this.value = 0, this.label = "Progress";
  }
  render() {
    const e = Math.max(0, Math.min(100, this.value));
    return m`<div class="ds-progress" role="progressbar" aria-label=${this.label} aria-valuenow=${e} aria-valuemin="0" aria-valuemax="100"><span style="width:${e}%"></span></div>`;
  }
};
n([
  i({ type: Number })
], s.prototype, "value", 2);
n([
  i()
], s.prototype, "label", 2);
s = n([
  u("andy-progress")
], s);
v("andy-progress", s);
export {
  s as AndyProgress
};
//# sourceMappingURL=progress.js.map
