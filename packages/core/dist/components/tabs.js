import { nothing as v, html as r } from "lit";
import { property as p, customElement as b } from "lit/decorators.js";
import { d as u, A as d } from "../chunks/base-DPbIYdLL.js";
var h = Object.defineProperty, m = Object.getOwnPropertyDescriptor, n = (e, t, c, i) => {
  for (var s = i > 1 ? void 0 : i ? m(t, c) : t, o = e.length - 1, l; o >= 0; o--)
    (l = e[o]) && (s = (i ? l(t, c, s) : l(s)) || s);
  return i && s && h(t, c, s), s;
};
let a = class extends d {
  constructor() {
    super(...arguments), this.tabs = [], this.active = "", this.variant = "segment";
  }
  select(e) {
    e !== this.active && (this.active = e, this.dispatchEvent(new CustomEvent("andy-change", { detail: e, bubbles: !0, composed: !0 })));
  }
  render() {
    const e = this.active || this.tabs[0]?.id;
    return this.variant === "provider" ? r`
        <div class="provider-tabs">
          ${this.tabs.map(
      (t) => r`<button
              class="provider-tab ${t.id === e ? "active" : ""}"
              @click=${() => this.select(t.id)}
            >
              ${t.label}${t.count != null ? r` <span class="tab-count">${t.count}</span>` : v}
            </button>`
    )}
        </div>
      ` : r`
      <div class="ds-segment">
        ${this.tabs.map(
      (t) => r`<button
            class="ds-segment-btn ${t.id === e ? "active" : ""}"
            @click=${() => this.select(t.id)}
          >
            ${t.label}
          </button>`
    )}
      </div>
    `;
  }
};
n([
  p({ attribute: !1 })
], a.prototype, "tabs", 2);
n([
  p()
], a.prototype, "active", 2);
n([
  p({ reflect: !0 })
], a.prototype, "variant", 2);
a = n([
  b("andy-tabs")
], a);
u("andy-tabs", a);
export {
  a as AndyTabs
};
//# sourceMappingURL=tabs.js.map
