import { html as l } from "lit";
import { property as a, customElement as h } from "lit/decorators.js";
import { d as u, A as d } from "../chunks/base-DPbIYdLL.js";
var m = Object.defineProperty, f = Object.getOwnPropertyDescriptor, p = (r, i, n, o) => {
  for (var t = o > 1 ? void 0 : o ? f(i, n) : i, s = r.length - 1, c; s >= 0; s--)
    (c = r[s]) && (t = (o ? c(i, n, t) : c(t)) || t);
  return o && t && m(i, n, t), t;
};
let e = class extends d {
  constructor() {
    super(...arguments), this.variant = "tinted", this.size = "md";
  }
  render() {
    const r = [
      "au-icon-chip",
      this.size === "lg" ? "au-icon-chip--lg" : "",
      this.variant === "solid" ? "au-icon-chip--solid" : "",
      this.variant === "muted" ? "au-icon-chip--muted" : ""
    ].filter(Boolean).join(" ");
    return l`<div class=${r}>${this.slotTarget()}</div>`;
  }
};
p([
  a({ reflect: !0 })
], e.prototype, "variant", 2);
p([
  a({ reflect: !0 })
], e.prototype, "size", 2);
e = p([
  h("andy-icon-chip")
], e);
u("andy-icon-chip", e);
export {
  e as AndyIconChip
};
//# sourceMappingURL=icon-chip.js.map
