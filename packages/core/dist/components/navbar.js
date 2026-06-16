import { nothing as c, html as i } from "lit";
import { property as t, customElement as m } from "lit/decorators.js";
import { d, A as u } from "../chunks/base-DPbIYdLL.js";
import "./breadcrumb.js";
import "./search-input.js";
import "../chunks/theme-toggle-BKiyPTpF.js";
var v = Object.defineProperty, y = Object.getOwnPropertyDescriptor, r = (p, s, n, o) => {
  for (var a = o > 1 ? void 0 : o ? y(s, n) : s, h = p.length - 1, l; h >= 0; h--)
    (l = p[h]) && (a = (o ? l(s, n, a) : l(a)) || a);
  return o && a && v(s, n, a), a;
};
let e = class extends u {
  constructor() {
    super(...arguments), this.items = [], this.searchPlaceholder = "Search…", this.searchValue = "", this.noSearch = !1, this.noThemeToggle = !1;
  }
  render() {
    return i`
      <div class="au-navbar">
        <div class="au-navbar__left">
          <andy-breadcrumb .items=${this.items}></andy-breadcrumb>
        </div>
        <div class="au-navbar__right">
          ${this.noSearch ? c : i`<span class="au-navbar__search">
                <andy-search-input placeholder=${this.searchPlaceholder} .value=${this.searchValue}></andy-search-input>
              </span>`}
          ${this.slotTarget("actions")}
          ${this.noThemeToggle ? c : i`<andy-theme-toggle></andy-theme-toggle>`}
        </div>
      </div>
    `;
  }
};
r([
  t({ attribute: !1 })
], e.prototype, "items", 2);
r([
  t()
], e.prototype, "searchPlaceholder", 2);
r([
  t()
], e.prototype, "searchValue", 2);
r([
  t({ type: Boolean })
], e.prototype, "noSearch", 2);
r([
  t({ type: Boolean })
], e.prototype, "noThemeToggle", 2);
e = r([
  m("andy-navbar")
], e);
d("andy-navbar", e);
export {
  e as AndyNavbar
};
//# sourceMappingURL=navbar.js.map
