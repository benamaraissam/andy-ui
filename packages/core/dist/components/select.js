import { html as p } from "lit";
import { property as u, customElement as c } from "lit/decorators.js";
import { d, A as h } from "../chunks/base-DPbIYdLL.js";
var v = Object.defineProperty, b = Object.getOwnPropertyDescriptor, i = (t, e, o, a) => {
  for (var l = a > 1 ? void 0 : a ? b(e, o) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (l = (a ? n(e, o, l) : n(l)) || l);
  return a && l && v(e, o, l), l;
};
let m = 0, s = class extends h {
  constructor() {
    super(...arguments), this._id = `andy-select-${++m}`, this.label = "", this.value = "", this.options = [];
  }
  onChange(t) {
    this.value = t.target.value, this.dispatchEvent(new CustomEvent("andy-change", { detail: this.value, bubbles: !0, composed: !0 }));
  }
  render() {
    const t = p`
      <select id=${this._id} class="ds-select" .value=${this.value} @change=${this.onChange}>
        ${this.options.map((e) => p`<option value=${e.value}>${e.label}</option>`)}
      </select>
    `;
    return this.label ? p`<div class="dp-field"><label class="label" for=${this._id}>${this.label}</label>${t}</div>` : t;
  }
  updated(t) {
    super.updated(t);
    const e = this.querySelector("select");
    e && e.value !== this.value && (e.value = this.value);
  }
};
i([
  u()
], s.prototype, "label", 2);
i([
  u()
], s.prototype, "value", 2);
i([
  u({ attribute: !1 })
], s.prototype, "options", 2);
s = i([
  c("andy-select")
], s);
d("andy-select", s);
export {
  s as AndySelect
};
//# sourceMappingURL=select.js.map
