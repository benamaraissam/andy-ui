import { nothing as d, html as u } from "lit";
import { property as i, customElement as h } from "lit/decorators.js";
import { d as b, A as c } from "../chunks/base-DPbIYdLL.js";
var y = Object.defineProperty, f = Object.getOwnPropertyDescriptor, r = (s, n, a, o) => {
  for (var e = o > 1 ? void 0 : o ? f(n, a) : n, p = s.length - 1, l; p >= 0; p--)
    (l = s[p]) && (e = (o ? l(n, a, e) : l(e)) || e);
  return o && e && y(n, a, e), e;
};
let t = class extends c {
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
    return u`
      <button
        class="btn btn-${this.size} btn-${this.variant}"
        type=${this.type}
        ?disabled=${this.disabled || this.loading}
        aria-busy=${this.loading ? "true" : d}
        @click=${this.onClick}
      >
        ${this.loading ? u`<span class="btn-spinner" aria-hidden="true"></span>` : d}
        ${this.slotTarget()}
      </button>
    `;
  }
};
r([
  i({ reflect: !0 })
], t.prototype, "variant", 2);
r([
  i({ reflect: !0 })
], t.prototype, "size", 2);
r([
  i({ type: Boolean, reflect: !0 })
], t.prototype, "disabled", 2);
r([
  i({ type: Boolean, reflect: !0 })
], t.prototype, "loading", 2);
r([
  i()
], t.prototype, "type", 2);
t = r([
  h("andy-button")
], t);
b("andy-button", t);
export {
  t as AndyButton
};
//# sourceMappingURL=button.js.map
