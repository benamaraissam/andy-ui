import { nothing as c, html as p } from "lit";
import { property as d, customElement as h } from "lit/decorators.js";
import { d as m, A as y } from "../chunks/base-DPbIYdLL.js";
import { i as u } from "../chunks/icons-Dyl0601F.js";
var v = Object.defineProperty, f = Object.getOwnPropertyDescriptor, i = (e, s, a, n) => {
  for (var t = n > 1 ? void 0 : n ? f(s, a) : s, r = e.length - 1, l; r >= 0; r--)
    (l = e[r]) && (t = (n ? l(s, a, t) : l(t)) || t);
  return n && t && v(s, a, t), t;
};
let o = class extends y {
  constructor() {
    super(...arguments), this.open = !1, this.heading = "", this.persistent = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this._onKey = this._onKey.bind(this), document.addEventListener("keydown", this._onKey);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("keydown", this._onKey);
  }
  _onKey(e) {
    e.key === "Escape" && this.open && !this.persistent && this.close();
  }
  close() {
    this.open = !1, this.dispatchEvent(new CustomEvent("andy-close", { bubbles: !0, composed: !0 }));
  }
  onBackdrop(e) {
    e.target === e.currentTarget && !this.persistent && this.close();
  }
  render() {
    return this.open ? p`
      <div class="modal-overlay" style="position:fixed" @click=${this.onBackdrop}>
        <div class="modal-content" role="dialog" aria-modal="true" aria-label=${this.heading || "Dialog"}>
          <div class="modal-header">
            <h3>${this.heading}</h3>
            <button class="modal-close" aria-label="Close" @click=${this.close}>${u.close()}</button>
          </div>
          <div class="modal-body">${this.slotTarget()}</div>
        </div>
      </div>
    ` : c;
  }
};
i([
  d({ type: Boolean, reflect: !0 })
], o.prototype, "open", 2);
i([
  d()
], o.prototype, "heading", 2);
i([
  d({ type: Boolean })
], o.prototype, "persistent", 2);
o = i([
  h("andy-modal")
], o);
m("andy-modal", o);
export {
  o as AndyModal
};
//# sourceMappingURL=modal.js.map
