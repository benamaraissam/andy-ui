import { nothing as c, html as m } from "lit";
import { property as s, customElement as f } from "lit/decorators.js";
import { d as u, A as y } from "../chunks/base-DPbIYdLL.js";
import { a as h } from "../chunks/icons-7oGzUTdG.js";
var d = Object.defineProperty, b = Object.getOwnPropertyDescriptor, o = (n, r, a, i) => {
  for (var e = i > 1 ? void 0 : i ? b(r, a) : r, l = n.length - 1, p; l >= 0; l--)
    (p = n[l]) && (e = (i ? p(r, a, e) : p(e)) || e);
  return i && e && d(r, a, e), e;
};
let t = class extends y {
  constructor() {
    super(...arguments), this.name = "info", this.size = "md", this.tone = "inherit", this.label = "";
  }
  render() {
    const n = (h[this.name] ?? h.info)(), r = ["au-icon", `au-icon--${this.size}`, this.tone !== "inherit" ? `au-icon--tone-${this.tone}` : ""].filter(Boolean).join(" ");
    return m`<span
      class=${r}
      role=${this.label ? "img" : c}
      aria-label=${this.label || c}
      aria-hidden=${this.label ? c : "true"}
      >${n}</span
    >`;
  }
};
o([
  s({ reflect: !0 })
], t.prototype, "name", 2);
o([
  s({ reflect: !0 })
], t.prototype, "size", 2);
o([
  s({ reflect: !0 })
], t.prototype, "tone", 2);
o([
  s()
], t.prototype, "label", 2);
t = o([
  f("andy-icon")
], t);
u("andy-icon", t);
export {
  t as AndyIcon
};
//# sourceMappingURL=icon.js.map
