import { html as d } from "lit";
import { property as c, customElement as l } from "lit/decorators.js";
import { d as h, A as m } from "../chunks/base-DPbIYdLL.js";
import { i as u } from "../chunks/icons-Dyl0601F.js";
var f = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, a = (p, t, s, n) => {
  for (var e = n > 1 ? void 0 : n ? _(t, s) : t, r = p.length - 1, i; r >= 0; r--)
    (i = p[r]) && (e = (n ? i(t, s, e) : i(e)) || e);
  return n && e && f(t, s, e), e;
};
let o = class extends m {
  constructor() {
    super(...arguments), this.heading = "", this.open = !1;
  }
  toggle() {
    this.open = !this.open, this.dispatchEvent(new CustomEvent("andy-toggle", { detail: this.open, bubbles: !0, composed: !0 }));
  }
  render() {
    return d`
      <button class="ds-accordion__head ${this.open ? "open" : ""}" @click=${this.toggle} aria-expanded=${this.open}>
        <span class="ds-accordion__icon">${u.chevron()}</span>
        <span class="label">${this.heading}</span>
      </button>
      <div class="ds-accordion__body" ?hidden=${!this.open}>${this.slotTarget()}</div>
    `;
  }
};
a([
  c()
], o.prototype, "heading", 2);
a([
  c({ type: Boolean, reflect: !0 })
], o.prototype, "open", 2);
o = a([
  l("andy-accordion")
], o);
h("andy-accordion", o);
export {
  o as AndyAccordion
};
//# sourceMappingURL=accordion.js.map
