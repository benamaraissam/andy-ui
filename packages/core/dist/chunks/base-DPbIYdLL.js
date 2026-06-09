var b = (e) => {
  throw TypeError(e);
};
var E = (e, s, t) => s.has(e) || b("Cannot " + t);
var o = (e, s, t) => (E(e, s, "read from private field"), t ? t.call(e) : s.get(e)), c = (e, s, t) => s.has(e) ? b("Cannot add the same private member more than once") : s instanceof WeakSet ? s.add(e) : s.set(e, t), f = (e, s, t, n) => (E(e, s, "write to private field"), n ? n.call(e, t) : s.set(e, t), t), p = (e, s, t) => (E(e, s, "access private method"), t);
import { LitElement as y } from "lit";
var u, d, l, i, h, m;
class N extends y {
  constructor() {
    super(...arguments);
    c(this, h);
    c(this, u);
    c(this, d, /* @__PURE__ */ new Map());
    c(this, l, /* @__PURE__ */ new Set());
    c(this, i);
  }
  createRenderRoot() {
    const t = document.createElement("span");
    return t.setAttribute("data-andy-chrome", ""), t.style.display = "contents", this.appendChild(t), f(this, u, t), t;
  }
  connectedCallback() {
    super.connectedCallback(), o(this, i) || (f(this, i, new MutationObserver(() => p(this, h, m).call(this))), o(this, i).observe(this, { childList: !0 })), p(this, h, m).call(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), o(this, i)?.disconnect(), f(this, i, void 0);
  }
  /**
   * A persistent, transparent projection target for the given slot name (`""`
   * is the default slot). Render it in your template, e.g.
   * `html`<button class="btn">${this.slotTarget()}</button>``.
   */
  slotTarget(t = "") {
    let n = o(this, d).get(t);
    return n || (n = document.createElement("span"), n.setAttribute("data-andy-slot", t), n.style.display = "contents", o(this, d).set(t, n)), n;
  }
  /** Whether any author child targets the given slot (`""` = default). */
  hasSlot(t = "") {
    return o(this, l).has(t);
  }
  updated(t) {
    super.updated(t), p(this, h, m).call(this);
  }
}
u = new WeakMap(), d = new WeakMap(), l = new WeakMap(), i = new WeakMap(), h = new WeakSet(), /** Move author children (every direct child except the chrome) into targets. */
m = function() {
  const t = Array.from(this.childNodes).filter((r) => r !== o(this, u));
  if (!t.length) return;
  let n = !1;
  for (const r of t) {
    const a = g(r);
    o(this, l).has(a) || (o(this, l).add(a), n = !0);
  }
  n && this.requestUpdate();
  for (const r of t) {
    const a = o(this, d).get(g(r)) ?? o(this, d).get("");
    a && r.parentNode !== a && a.appendChild(r);
  }
};
function g(e) {
  return e.nodeType === Node.ELEMENT_NODE && e.getAttribute("slot") || "";
}
function k(e, s) {
  typeof customElements > "u" || customElements.get(e) || customElements.define(e, s);
}
export {
  N as A,
  k as d
};
//# sourceMappingURL=base-DPbIYdLL.js.map
