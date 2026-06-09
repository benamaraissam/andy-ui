import { html as p } from "lit";
import { property as u, customElement as c } from "lit/decorators.js";
import { d as v, A as h } from "../chunks/base-DPbIYdLL.js";
var d = Object.defineProperty, b = Object.getOwnPropertyDescriptor, o = (t, e, r, a) => {
  for (var l = a > 1 ? void 0 : a ? b(e, r) : e, n = t.length - 1, i; n >= 0; n--)
    (i = t[n]) && (l = (a ? i(e, r, l) : i(l)) || l);
  return a && l && d(e, r, l), l;
};
let s = class extends h {
  constructor() {
    super(...arguments), this.label = "", this.value = "", this.options = [];
  }
  onChange(t) {
    this.value = t.target.value, this.dispatchEvent(new CustomEvent("andy-change", { detail: this.value, bubbles: !0, composed: !0 }));
  }
  render() {
    const t = p`
      <select class="ds-select" .value=${this.value} @change=${this.onChange}>
        ${this.options.map((e) => p`<option value=${e.value}>${e.label}</option>`)}
      </select>
    `;
    return this.label ? p`<div class="dp-field"><label class="label">${this.label}</label>${t}</div>` : t;
  }
  updated(t) {
    super.updated(t);
    const e = this.querySelector("select");
    e && e.value !== this.value && (e.value = this.value);
  }
};
o([
  u()
], s.prototype, "label", 2);
o([
  u()
], s.prototype, "value", 2);
o([
  u({ attribute: !1 })
], s.prototype, "options", 2);
s = o([
  c("andy-select")
], s);
v("andy-select", s);
export {
  s as AndySelect
};
//# sourceMappingURL=select.js.map
