import { nothing as i, html as h } from "lit";
import { property as d, customElement as p } from "lit/decorators.js";
import { d as u, A as b } from "../chunks/base-DPbIYdLL.js";
var f = Object.defineProperty, m = Object.getOwnPropertyDescriptor, o = (s, r, c, a) => {
  for (var e = a > 1 ? void 0 : a ? m(r, c) : r, n = s.length - 1, l; n >= 0; n--)
    (l = s[n]) && (e = (a ? l(r, c, e) : l(e)) || e);
  return a && e && f(r, c, e), e;
};
let t = class extends b {
  constructor() {
    super(...arguments), this.checked = !1, this.disabled = !1;
  }
  onChange(s) {
    this.checked = s.target.checked, this.dispatchEvent(new CustomEvent("andy-change", { detail: this.checked, bubbles: !0, composed: !0 }));
  }
  render() {
    return h`
      <label class="ds-row ds-row--tight" style="cursor:${this.disabled ? "not-allowed" : "pointer"}">
        <span class="ds-switch">
          <input type="checkbox" .checked=${this.checked} ?disabled=${this.disabled} @change=${this.onChange} />
          <span class="track"></span>
        </span>
        ${this.hasSlot() ? h`<span class="t-label">${this.slotTarget()}</span>` : i}
      </label>
    `;
  }
};
o([
  d({ type: Boolean, reflect: !0 })
], t.prototype, "checked", 2);
o([
  d({ type: Boolean, reflect: !0 })
], t.prototype, "disabled", 2);
t = o([
  p("andy-switch")
], t);
u("andy-switch", t);
export {
  t as AndySwitch
};
//# sourceMappingURL=switch.js.map
