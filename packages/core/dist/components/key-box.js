import { html as h } from "lit";
import { property as l, state as n, customElement as u } from "lit/decorators.js";
import { d as y, A as v } from "../chunks/base-DPbIYdLL.js";
import { a as d } from "../chunks/icons-7oGzUTdG.js";
var m = Object.defineProperty, b = Object.getOwnPropertyDescriptor, s = (o, i, a, r) => {
  for (var e = r > 1 ? void 0 : r ? b(i, a) : i, p = o.length - 1, c; p >= 0; p--)
    (c = o[p]) && (e = (r ? c(i, a, e) : c(e)) || e);
  return r && e && m(i, a, e), e;
};
let t = class extends v {
  constructor() {
    super(...arguments), this.value = "", this.masked = "", this.revealed = !1, this.copied = !1;
  }
  get maskedText() {
    if (this.masked) return this.masked;
    const o = this.value.slice(-4);
    return `${this.value.slice(0, 9)}${"•".repeat(20)}${o}`;
  }
  toggle() {
    this.revealed = !this.revealed;
  }
  async copy() {
    try {
      await navigator.clipboard?.writeText(this.value);
    } catch {
    }
    this.copied = !0, this.dispatchEvent(new CustomEvent("andy-copy", { bubbles: !0, composed: !0 })), setTimeout(() => this.copied = !1, 1400);
  }
  render() {
    return h`
      <div class="ds-key-box">
        <code>${this.revealed ? this.value : this.maskedText}</code>
        <button class="ds-icon-btn" title="Reveal / hide" @click=${this.toggle}>${d.eye()}</button>
        <button class="ds-key-copy ${this.copied ? "is-copied" : ""}" @click=${this.copy}>
          ${d.copy()}<span>${this.copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
    `;
  }
};
s([
  l()
], t.prototype, "value", 2);
s([
  l()
], t.prototype, "masked", 2);
s([
  n()
], t.prototype, "revealed", 2);
s([
  n()
], t.prototype, "copied", 2);
t = s([
  u("andy-key-box")
], t);
y("andy-key-box", t);
export {
  t as AndyKeyBox
};
//# sourceMappingURL=key-box.js.map
