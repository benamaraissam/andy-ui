import { nothing as u, html as d } from "lit";
import { property as n, customElement as c } from "lit/decorators.js";
import { d as h, A as b } from "../chunks/base-DPbIYdLL.js";
var y = Object.defineProperty, f = Object.getOwnPropertyDescriptor, r = (s, o, a, i) => {
  for (var e = i > 1 ? void 0 : i ? f(o, a) : o, p = s.length - 1, l; p >= 0; p--)
    (l = s[p]) && (e = (i ? l(o, a, e) : l(e)) || e);
  return i && e && y(o, a, e), e;
};
let t = class extends b {
  constructor() {
    super(...arguments), this.variant = "primary", this.size = "md", this.disabled = !1, this.loading = !1, this.type = "button";
  }
  onClick(s) {
    if (this.disabled || this.loading) {
      s.stopImmediatePropagation(), s.preventDefault();
      return;
    }
    this.dispatchEvent(new CustomEvent("andy-click", { bubbles: !0, composed: !0 }));
  }
  render() {
    return d`
      <button
        class="btn btn-${this.size} btn-${this.variant}"
        type=${this.type}
        ?disabled=${this.disabled || this.loading}
        @click=${this.onClick}
      >
        ${this.loading ? d`<span class="btn-spinner"></span>` : u}
        ${this.slotTarget()}
      </button>
    `;
  }
};
r([
  n({ reflect: !0 })
], t.prototype, "variant", 2);
r([
  n({ reflect: !0 })
], t.prototype, "size", 2);
r([
  n({ type: Boolean, reflect: !0 })
], t.prototype, "disabled", 2);
r([
  n({ type: Boolean, reflect: !0 })
], t.prototype, "loading", 2);
r([
  n()
], t.prototype, "type", 2);
t = r([
  c("andy-button")
], t);
h("andy-button", t);
export {
  t as AndyButton
};
//# sourceMappingURL=button.js.map
