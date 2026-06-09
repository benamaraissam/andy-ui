import { html as d } from "lit";
import { state as h, customElement as f } from "lit/decorators.js";
import { d as g, A as p } from "./base-DPbIYdLL.js";
import { i as u } from "./icons-Dyl0601F.js";
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
  const r = n ?? e;
  return document.documentElement.dataset.theme = r, r;
}
var E = Object.defineProperty, T = Object.getOwnPropertyDescriptor, l = (e, n, r, t) => {
  for (var o = t > 1 ? void 0 : t ? T(n, r) : n, m = e.length - 1, a; m >= 0; m--)
    (a = e[m]) && (o = (t ? a(n, r, o) : a(o)) || o);
  return t && o && E(n, r, o), o;
};
let s = class extends p {
  constructor() {
    super(...arguments), this.theme = i();
  }
  flip() {
    this.theme = v(), this.dispatchEvent(new CustomEvent("andy-theme-change", { detail: this.theme, bubbles: !0, composed: !0 }));
  }
  render() {
    return d`
      <button class="ds-theme-toggle" aria-label="Toggle theme" @click=${this.flip}>
        <span class="sun">${u.sun()}</span>
        <span class="moon">${u.moon()}</span>
      </button>
    `;
  }
};
l([
  h()
], s.prototype, "theme", 2);
s = l([
  f("andy-theme-toggle")
], s);
g("andy-theme-toggle", s);
export {
  s as A,
  i as g,
  P as i,
  y as s,
  v as t
};
//# sourceMappingURL=theme-toggle-DhG6fsp4.js.map
