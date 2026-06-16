import { nothing as r, html as h } from "lit";
import { property as c, customElement as p } from "lit/decorators.js";
import { d as f, A as m } from "../chunks/base-DPbIYdLL.js";
import { a as y } from "../chunks/icons-7oGzUTdG.js";
var b = Object.defineProperty, v = Object.getOwnPropertyDescriptor, d = (e, t, s, n) => {
  for (var o = n > 1 ? void 0 : n ? v(t, s) : t, i = e.length - 1, l; i >= 0; i--)
    (l = e[i]) && (o = (n ? l(t, s, o) : l(o)) || o);
  return n && o && b(t, s, o), o;
};
let _ = 0;
const u = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
let a = class extends m {
  constructor() {
    super(...arguments), this.open = !1, this.heading = "", this.persistent = !1, this._titleId = `andy-modal-${++_}-title`, this._returnFocus = null;
  }
  connectedCallback() {
    super.connectedCallback(), this._onKey = this._onKey.bind(this), document.addEventListener("keydown", this._onKey);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("keydown", this._onKey), this.open && (document.body.style.overflow = "");
  }
  _onKey(e) {
    if (this.open) {
      if (e.key === "Escape" && !this.persistent) {
        this.close();
        return;
      }
      e.key === "Tab" && this._trapTab(e);
    }
  }
  /** Keep Tab focus cycling inside the dialog. */
  _trapTab(e) {
    const t = this.querySelector(".modal-content");
    if (!t) return;
    const s = Array.from(t.querySelectorAll(u)).filter(
      (l) => l.offsetParent !== null || l === document.activeElement
    ), n = s[0] ?? t, o = s[s.length - 1] ?? t, i = document.activeElement;
    t.contains(i) ? e.shiftKey && i === n ? (e.preventDefault(), o.focus()) : !e.shiftKey && i === o && (e.preventDefault(), n.focus()) : (e.preventDefault(), n.focus());
  }
  updated(e) {
    super.updated(e), e.has("open") && (this.open ? (this._returnFocus = document.activeElement, document.body.style.overflow = "hidden", this.updateComplete.then(() => {
      const t = this.querySelector(".modal-content");
      (t?.querySelector(u) ?? t)?.focus();
    })) : e.get("open") && (document.body.style.overflow = "", this._returnFocus?.focus?.(), this._returnFocus = null));
  }
  close() {
    this.open = !1, this.dispatchEvent(new CustomEvent("andy-close", { bubbles: !0, composed: !0 }));
  }
  onBackdrop(e) {
    e.target === e.currentTarget && !this.persistent && this.close();
  }
  render() {
    return this.open ? h`
      <div class="modal-overlay" style="position:fixed" @click=${this.onBackdrop}>
        <div
          class="modal-content"
          role="dialog"
          aria-modal="true"
          tabindex="-1"
          aria-labelledby=${this.heading ? this._titleId : r}
          aria-label=${this.heading ? r : "Dialog"}
        >
          <div class="modal-header">
            <h3 id=${this.heading ? this._titleId : r}>${this.heading}</h3>
            <button class="modal-close" aria-label="Close" @click=${this.close}>${y.close()}</button>
          </div>
          <div class="modal-body">${this.slotTarget()}</div>
        </div>
      </div>
    ` : r;
  }
};
d([
  c({ type: Boolean, reflect: !0 })
], a.prototype, "open", 2);
d([
  c()
], a.prototype, "heading", 2);
d([
  c({ type: Boolean })
], a.prototype, "persistent", 2);
a = d([
  p("andy-modal")
], a);
f("andy-modal", a);
export {
  a as AndyModal
};
//# sourceMappingURL=modal.js.map
