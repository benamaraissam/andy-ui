import { nothing as m, html as n } from "lit";
import { property as l, customElement as y } from "lit/decorators.js";
import { d as c, A as h } from "../chunks/base-DPbIYdLL.js";
var v = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, a = (d, s, p, r) => {
  for (var t = r > 1 ? void 0 : r ? _(s, p) : s, o = d.length - 1, i; o >= 0; o--)
    (i = d[o]) && (t = (r ? i(s, p, t) : i(t)) || t);
  return r && t && v(s, p, t), t;
};
let e = class extends h {
  constructor() {
    super(...arguments), this.heading = "", this.copy = "";
  }
  render() {
    return n`
      <div class="ds-empty">
        <div class="ds-empty__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
          </svg>
        </div>
        ${this.heading ? n`<p class="ds-empty__title">${this.heading}</p>` : m}
        ${this.copy ? n`<p class="ds-empty__copy">${this.copy}</p>` : m}
        ${this.slotTarget()}
      </div>
    `;
  }
};
a([
  l()
], e.prototype, "heading", 2);
a([
  l()
], e.prototype, "copy", 2);
e = a([
  y("andy-empty-state")
], e);
c("andy-empty-state", e);
export {
  e as AndyEmptyState
};
//# sourceMappingURL=empty-state.js.map
