import { html as l } from "lit";
import { state as h, customElement as f } from "lit/decorators.js";
import { d as p, A as g } from "./base-DPbIYdLL.js";
import { a as u } from "./icons-7oGzUTdG.js";
const c = "andy-ui-theme";
function i() {
  return typeof document > "u" ? "light" : document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}
function y(e) {
  if (!(typeof document > "u")) {
    document.documentElement.dataset.theme = e;
    try {
      localStorage.setItem(c, e);
    } catch {
    }
  }
}
function v() {
  const e = i() === "dark" ? "light" : "dark";
  return y(e), e;
}
function P(e = "light") {
  if (typeof document > "u") return e;
  let n = null;
  try {
    const t = localStorage.getItem(c);
    (t === "light" || t === "dark") && (n = t);
  } catch {
  }
  const s = n ?? e;
  return document.documentElement.dataset.theme = s, s;
}
var E = Object.defineProperty, T = Object.getOwnPropertyDescriptor, d = (e, n, s, t) => {
  for (var r = t > 1 ? void 0 : t ? T(n, s) : n, m = e.length - 1, a; m >= 0; m--)
    (a = e[m]) && (r = (t ? a(n, s, r) : a(r)) || r);
  return t && r && E(n, s, r), r;
};
let o = class extends g {
  constructor() {
    super(...arguments), this.theme = i();
  }
  flip() {
    this.theme = v(), this.dispatchEvent(new CustomEvent("andy-theme-change", { detail: this.theme, bubbles: !0, composed: !0 }));
  }
  render() {
    return l`
      <button
        class="ds-theme-toggle"
        aria-label="Toggle theme"
        aria-pressed=${this.theme === "dark" ? "true" : "false"}
        @click=${this.flip}
      >
        <span class="sun">${u.sun()}</span>
        <span class="moon">${u.moon()}</span>
      </button>
    `;
  }
};
d([
  h()
], o.prototype, "theme", 2);
o = d([
  f("andy-theme-toggle")
], o);
p("andy-theme-toggle", o);
export {
  o as A,
  i as g,
  P as i,
  y as s,
  v as t
};
//# sourceMappingURL=theme-toggle-BKiyPTpF.js.map
