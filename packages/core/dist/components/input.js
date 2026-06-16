import { nothing as a, html as p } from "lit";
import { property as i, customElement as u } from "lit/decorators.js";
import { d as c, A as y } from "../chunks/base-DPbIYdLL.js";
var b = Object.defineProperty, v = Object.getOwnPropertyDescriptor, t = (r, l, n, o) => {
  for (var s = o > 1 ? void 0 : o ? v(l, n) : l, d = r.length - 1, h; d >= 0; d--)
    (h = r[d]) && (s = (o ? h(l, n, s) : h(s)) || s);
  return o && s && b(l, n, s), s;
};
let $ = 0, e = class extends y {
  constructor() {
    super(...arguments), this._id = `andy-input-${++$}`, this.label = "", this.value = "", this.placeholder = "", this.type = "text", this.required = !1, this.disabled = !1, this.error = "";
  }
  onInput(r) {
    this.value = r.target.value, this.dispatchEvent(new CustomEvent("andy-input", { detail: this.value, bubbles: !0, composed: !0 }));
  }
  onChange() {
    this.dispatchEvent(new CustomEvent("andy-change", { detail: this.value, bubbles: !0, composed: !0 }));
  }
  render() {
    const r = `${this._id}-error`;
    return p`
      <div class="dp-field">
        ${this.label ? p`<label class="label" for=${this._id}
              >${this.label}${this.required ? p` <span class="req" aria-hidden="true">*</span>` : a}</label
            >` : a}
        <input
          id=${this._id}
          class="dp-input ${this.error ? "is-error" : ""}"
          type=${this.type}
          .value=${this.value}
          placeholder=${this.placeholder}
          ?required=${this.required}
          ?disabled=${this.disabled}
          aria-invalid=${this.error ? "true" : a}
          aria-describedby=${this.error ? r : a}
          @input=${this.onInput}
          @change=${this.onChange}
        />
        ${this.error ? p`<span class="error-msg" id=${r} role="alert">${this.error}</span>` : a}
      </div>
    `;
  }
};
t([
  i()
], e.prototype, "label", 2);
t([
  i()
], e.prototype, "value", 2);
t([
  i()
], e.prototype, "placeholder", 2);
t([
  i()
], e.prototype, "type", 2);
t([
  i({ type: Boolean, reflect: !0 })
], e.prototype, "required", 2);
t([
  i({ type: Boolean, reflect: !0 })
], e.prototype, "disabled", 2);
t([
  i()
], e.prototype, "error", 2);
e = t([
  u("andy-input")
], e);
c("andy-input", e);
export {
  e as AndyInput
};
//# sourceMappingURL=input.js.map
