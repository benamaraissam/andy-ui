import { nothing as i, html as o } from "lit";
import { property as d, customElement as p } from "lit/decorators.js";
import { d as u, A as b } from "../chunks/base-DPbIYdLL.js";
var f = Object.defineProperty, m = Object.getOwnPropertyDescriptor, n = (s, r, c, a) => {
  for (var e = a > 1 ? void 0 : a ? m(r, c) : r, l = s.length - 1, h; l >= 0; l--)
    (h = s[l]) && (e = (a ? h(r, c, e) : h(e)) || e);
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
    return o`
      <label class="ds-row ds-row--tight" style="cursor:${this.disabled ? "not-allowed" : "pointer"}">
        <span class="ds-switch">
          <input
            type="checkbox"
            role="switch"
            aria-checked=${this.checked ? "true" : "false"}
            .checked=${this.checked}
            ?disabled=${this.disabled}
            @change=${this.onChange}
          />
          <span class="track"></span>
        </span>
        ${this.hasSlot() ? o`<span class="t-label">${this.slotTarget()}</span>` : i}
      </label>
    `;
  }
};
n([
  d({ type: Boolean, reflect: !0 })
], t.prototype, "checked", 2);
n([
  d({ type: Boolean, reflect: !0 })
], t.prototype, "disabled", 2);
t = n([
  p("andy-switch")
], t);
u("andy-switch", t);
export {
  t as AndySwitch
};
//# sourceMappingURL=switch.js.map
