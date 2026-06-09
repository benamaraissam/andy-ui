import { html as m } from "lit";
import { property as i, customElement as u } from "lit/decorators.js";
import { d as v, A as d } from "../chunks/base-DPbIYdLL.js";
var c = Object.defineProperty, f = Object.getOwnPropertyDescriptor, l = (e, s, o, t) => {
  for (var r = t > 1 ? void 0 : t ? f(s, o) : s, p = e.length - 1, n; p >= 0; p--)
    (n = e[p]) && (r = (t ? n(s, o, r) : n(r)) || r);
  return t && r && c(s, o, r), r;
};
let a = class extends d {
  constructor() {
    super(...arguments), this.value = 0;
  }
  render() {
    const e = Math.max(0, Math.min(100, this.value));
    return m`<div class="ds-progress" role="progressbar" aria-valuenow=${e} aria-valuemin="0" aria-valuemax="100"><span style="width:${e}%"></span></div>`;
  }
};
l([
  i({ type: Number })
], a.prototype, "value", 2);
a = l([
  u("andy-progress")
], a);
v("andy-progress", a);
export {
  a as AndyProgress
};
//# sourceMappingURL=progress.js.map
