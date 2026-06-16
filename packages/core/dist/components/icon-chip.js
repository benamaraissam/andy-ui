import { html as l } from "lit";
import { property as p, customElement as d } from "lit/decorators.js";
import { d as m, A as u } from "../chunks/base-DPbIYdLL.js";
import { a as h } from "../chunks/icons-7oGzUTdG.js";
var f = Object.defineProperty, v = Object.getOwnPropertyDescriptor, s = (e, r, n, o) => {
  for (var t = o > 1 ? void 0 : o ? v(r, n) : r, c = e.length - 1, a; c >= 0; c--)
    (a = e[c]) && (t = (o ? a(r, n, t) : a(t)) || t);
  return o && t && f(r, n, t), t;
};
let i = class extends u {
  constructor() {
    super(...arguments), this.variant = "tinted", this.size = "md", this.icon = "";
  }
  render() {
    const e = [
      "au-icon-chip",
      this.size === "lg" ? "au-icon-chip--lg" : "",
      this.variant === "solid" ? "au-icon-chip--solid" : "",
      this.variant === "muted" ? "au-icon-chip--muted" : ""
    ].filter(Boolean).join(" ");
    return this.icon && h[this.icon] ? l`<div class=${e}>
          ${h[this.icon]()}<span hidden style="display:none">${this.slotTarget()}</span>
        </div>` : l`<div class=${e}>${this.slotTarget()}</div>`;
  }
};
s([
  p({ reflect: !0 })
], i.prototype, "variant", 2);
s([
  p({ reflect: !0 })
], i.prototype, "size", 2);
s([
  p({ reflect: !0 })
], i.prototype, "icon", 2);
i = s([
  d("andy-icon-chip")
], i);
m("andy-icon-chip", i);
export {
  i as AndyIconChip
};
//# sourceMappingURL=icon-chip.js.map
