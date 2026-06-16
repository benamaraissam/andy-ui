import { html as p } from "lit";
import { property as c, customElement as l } from "lit/decorators.js";
import { d as h, A as _ } from "../chunks/base-DPbIYdLL.js";
import { a as v } from "../chunks/icons-7oGzUTdG.js";
var m = Object.defineProperty, u = Object.getOwnPropertyDescriptor, d = (a, s, n, t) => {
  for (var o = t > 1 ? void 0 : t ? u(s, n) : s, r = a.length - 1, i; r >= 0; r--)
    (i = a[r]) && (o = (t ? i(s, n, o) : i(o)) || o);
  return t && o && m(s, n, o), o;
};
let y = 0, e = class extends _ {
  constructor() {
    super(...arguments), this.heading = "", this.open = !1, this._bodyId = `andy-accordion-${++y}-body`;
  }
  toggle() {
    this.open = !this.open, this.dispatchEvent(new CustomEvent("andy-toggle", { detail: this.open, bubbles: !0, composed: !0 }));
  }
  render() {
    return p`
      <div class="ds-accordion ${this.open ? "is-open" : ""}">
        <button
          class="ds-accordion__head"
          @click=${this.toggle}
          aria-expanded=${this.open ? "true" : "false"}
          aria-controls=${this._bodyId}
        >
          <span class="ds-accordion__label">${this.heading}</span>
          <span class="ds-accordion__chevron">${v.chevron()}</span>
        </button>
        <div id=${this._bodyId} class="ds-accordion__panel" role="region">
          <div class="ds-accordion__clip">
            <div class="ds-accordion__content" ?inert=${!this.open}>${this.slotTarget()}</div>
          </div>
        </div>
      </div>
    `;
  }
};
d([
  c()
], e.prototype, "heading", 2);
d([
  c({ type: Boolean, reflect: !0 })
], e.prototype, "open", 2);
e = d([
  l("andy-accordion")
], e);
h("andy-accordion", e);
export {
  e as AndyAccordion
};
//# sourceMappingURL=accordion.js.map
