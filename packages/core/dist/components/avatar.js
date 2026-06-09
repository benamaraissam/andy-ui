import { html as l } from "lit";
import { property as i, customElement as u } from "lit/decorators.js";
import { d as f, A as m } from "../chunks/base-DPbIYdLL.js";
var v = Object.defineProperty, c = Object.getOwnPropertyDescriptor, p = (d, t, o, s) => {
  for (var r = s > 1 ? void 0 : s ? c(t, o) : t, a = d.length - 1, n; a >= 0; a--)
    (n = d[a]) && (r = (s ? n(t, o, r) : n(r)) || r);
  return s && r && v(t, o, r), r;
};
let e = class extends m {
  constructor() {
    super(...arguments), this.size = "md", this.round = !1;
  }
  render() {
    return l`<div class="ds-avatar ${this.size} ${this.round ? "round" : ""}">${this.slotTarget()}</div>`;
  }
};
p([
  i({ reflect: !0 })
], e.prototype, "size", 2);
p([
  i({ type: Boolean, reflect: !0 })
], e.prototype, "round", 2);
e = p([
  u("andy-avatar")
], e);
f("andy-avatar", e);
export {
  e as AndyAvatar
};
//# sourceMappingURL=avatar.js.map
