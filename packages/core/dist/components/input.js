import { nothing as h, html as i } from "lit";
import { property as s, customElement as d } from "lit/decorators.js";
import { d as c, A as v } from "../chunks/base-DPbIYdLL.js";
var y = Object.defineProperty, b = Object.getOwnPropertyDescriptor, t = (l, p, o, a) => {
  for (var r = a > 1 ? void 0 : a ? b(p, o) : p, n = l.length - 1, u; n >= 0; n--)
    (u = l[n]) && (r = (a ? u(p, o, r) : u(r)) || r);
  return a && r && y(p, o, r), r;
};
let e = class extends v {
  constructor() {
    super(...arguments), this.label = "", this.value = "", this.placeholder = "", this.type = "text", this.required = !1, this.disabled = !1, this.error = "";
  }
  onInput(l) {
    this.value = l.target.value, this.dispatchEvent(new CustomEvent("andy-input", { detail: this.value, bubbles: !0, composed: !0 }));
  }
  onChange() {
    this.dispatchEvent(new CustomEvent("andy-change", { detail: this.value, bubbles: !0, composed: !0 }));
  }
  render() {
    return i`
      <div class="dp-field">
        ${this.label ? i`<label class="label">${this.label}${this.required ? i` <span class="req">*</span>` : h}</label>` : h}
        <input
          class="dp-input ${this.error ? "is-error" : ""}"
          type=${this.type}
          .value=${this.value}
          placeholder=${this.placeholder}
          ?required=${this.required}
          ?disabled=${this.disabled}
          @input=${this.onInput}
          @change=${this.onChange}
        />
        ${this.error ? i`<span class="error-msg">${this.error}</span>` : h}
      </div>
    `;
  }
};
t([
  s()
], e.prototype, "label", 2);
t([
  s()
], e.prototype, "value", 2);
t([
  s()
], e.prototype, "placeholder", 2);
t([
  s()
], e.prototype, "type", 2);
t([
  s({ type: Boolean, reflect: !0 })
], e.prototype, "required", 2);
t([
  s({ type: Boolean, reflect: !0 })
], e.prototype, "disabled", 2);
t([
  s()
], e.prototype, "error", 2);
e = t([
  d("andy-input")
], e);
c("andy-input", e);
export {
  e as AndyInput
};
//# sourceMappingURL=input.js.map
