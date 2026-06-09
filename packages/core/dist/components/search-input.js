import { html as i } from "lit";
import { property as u, customElement as c } from "lit/decorators.js";
import { d as h, A as v } from "../chunks/base-DPbIYdLL.js";
import { i as d } from "../chunks/icons-Dyl0601F.js";
var m = Object.defineProperty, f = Object.getOwnPropertyDescriptor, l = (r, s, p, a) => {
  for (var e = a > 1 ? void 0 : a ? f(s, p) : s, n = r.length - 1, o; n >= 0; n--)
    (o = r[n]) && (e = (a ? o(s, p, e) : o(e)) || e);
  return a && e && m(s, p, e), e;
};
let t = class extends v {
  constructor() {
    super(...arguments), this.value = "", this.placeholder = "Search…";
  }
  onInput(r) {
    this.value = r.target.value, this.dispatchEvent(new CustomEvent("andy-input", { detail: this.value, bubbles: !0, composed: !0 }));
  }
  render() {
    return i`
      <div class="search-input-wrapper">
        <span class="search-icon">${d.search()}</span>
        <input
          class="search-input"
          type="search"
          .value=${this.value}
          placeholder=${this.placeholder}
          @input=${this.onInput}
        />
      </div>
    `;
  }
};
l([
  u()
], t.prototype, "value", 2);
l([
  u()
], t.prototype, "placeholder", 2);
t = l([
  c("andy-search-input")
], t);
h("andy-search-input", t);
export {
  t as AndySearchInput
};
//# sourceMappingURL=search-input.js.map
