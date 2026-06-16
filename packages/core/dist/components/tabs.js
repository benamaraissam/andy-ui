import { nothing as b, html as l } from "lit";
import { property as d, customElement as p } from "lit/decorators.js";
import { d as u, A as h } from "../chunks/base-DPbIYdLL.js";
var v = Object.defineProperty, f = Object.getOwnPropertyDescriptor, o = (s, e, n, r) => {
  for (var t = r > 1 ? void 0 : r ? f(e, n) : e, a = s.length - 1, c; a >= 0; a--)
    (c = s[a]) && (t = (r ? c(e, n, t) : c(t)) || t);
  return r && t && v(e, n, t), t;
};
let i = class extends h {
  constructor() {
    super(...arguments), this.tabs = [], this.active = "", this.variant = "segment";
  }
  select(s) {
    s !== this.active && (this.active = s, this.dispatchEvent(new CustomEvent("andy-change", { detail: s, bubbles: !0, composed: !0 })));
  }
  /** Roving keyboard navigation across the tablist (WAI-ARIA Tabs pattern). */
  onKeydown(s) {
    const e = this.tabs.map((a) => a.id);
    if (!e.length) return;
    const n = this.active || e[0], r = e.indexOf(n);
    if (r < 0) return;
    let t = r;
    switch (s.key) {
      case "ArrowRight":
      case "ArrowDown":
        t = (r + 1) % e.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        t = (r - 1 + e.length) % e.length;
        break;
      case "Home":
        t = 0;
        break;
      case "End":
        t = e.length - 1;
        break;
      default:
        return;
    }
    s.preventDefault(), this.select(e[t]), this.updateComplete.then(() => {
      this.querySelector(`[data-tab-id="${e[t]}"]`)?.focus();
    });
  }
  render() {
    const s = this.active || this.tabs[0]?.id, e = this.variant === "provider", n = e ? "provider-tabs" : "ds-segment", r = e ? "provider-tab" : "ds-segment-btn";
    return l`
      <div class=${n} role="tablist" @keydown=${this.onKeydown}>
        ${this.tabs.map((t) => {
      const a = t.id === s;
      return l`<button
            class="${r} ${a ? "active" : ""}"
            role="tab"
            data-tab-id=${t.id}
            aria-selected=${a ? "true" : "false"}
            tabindex=${a ? 0 : -1}
            @click=${() => this.select(t.id)}
          >
            ${t.label}${e && t.count != null ? l` <span class="tab-count">${t.count}</span>` : b}
          </button>`;
    })}
      </div>
    `;
  }
};
o([
  d({ attribute: !1 })
], i.prototype, "tabs", 2);
o([
  d()
], i.prototype, "active", 2);
o([
  d({ reflect: !0 })
], i.prototype, "variant", 2);
i = o([
  p("andy-tabs")
], i);
u("andy-tabs", i);
export {
  i as AndyTabs
};
//# sourceMappingURL=tabs.js.map
