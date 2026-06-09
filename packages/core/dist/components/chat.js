import { html as t, nothing as o } from "lit";
import { customElement as p, property as e } from "lit/decorators.js";
import { d as c, A as v } from "../chunks/base-DPbIYdLL.js";
var g = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, s = (_, r, l, d) => {
  for (var a = d > 1 ? void 0 : d ? $(r, l) : r, m = _.length - 1, h; m >= 0; m--)
    (h = _[m]) && (a = (d ? h(r, l, a) : h(a)) || a);
  return d && a && g(r, l, a), a;
};
let y = class extends v {
  render() {
    return t`<div class="ds-chat">${this.slotTarget()}</div>`;
  }
};
y = s([
  p("andy-chat")
], y);
c("andy-chat", y);
let i = class extends v {
  constructor() {
    super(...arguments), this.kind = "user", this.author = "", this.avatar = "", this.time = "";
  }
  render() {
    return t`
      <div class="ds-msg ${this.kind}">
        <div class="ds-avatar sm round">${this.avatar}</div>
        <div class="ds-msg__bubble">
          ${this.author ? t`<p class="ds-msg__name">${this.author}</p>` : o}
          <div class="ds-msg__text">${this.slotTarget()}</div>
          ${this.time ? t`<div class="ds-msg__time">${this.time}</div>` : o}
        </div>
      </div>
    `;
  }
};
s([
  e({ reflect: !0 })
], i.prototype, "kind", 2);
s([
  e()
], i.prototype, "author", 2);
s([
  e()
], i.prototype, "avatar", 2);
s([
  e()
], i.prototype, "time", 2);
i = s([
  p("andy-message")
], i);
c("andy-message", i);
let u = class extends v {
  render() {
    return t`<span class="ds-typing"><span></span><span></span><span></span></span>`;
  }
};
u = s([
  p("andy-typing")
], u);
c("andy-typing", u);
let n = class extends v {
  constructor() {
    super(...arguments), this.name = "", this.description = "", this.meta = "", this.active = !1;
  }
  render() {
    return t`
      <div class="ds-session ${this.active ? "active" : ""}">
        <span class="live"></span>
        <div>
          <div class="ds-session__name">${this.name}</div>
          ${this.description ? t`<div class="ds-session__desc">${this.description}</div>` : o}
          ${this.meta ? t`<div class="ds-session__meta">${this.meta}</div>` : o}
        </div>
      </div>
    `;
  }
};
s([
  e()
], n.prototype, "name", 2);
s([
  e()
], n.prototype, "description", 2);
s([
  e()
], n.prototype, "meta", 2);
s([
  e({ type: Boolean, reflect: !0 })
], n.prototype, "active", 2);
n = s([
  p("andy-session")
], n);
c("andy-session", n);
export {
  y as AndyChat,
  i as AndyMessage,
  n as AndySession,
  u as AndyTyping
};
//# sourceMappingURL=chat.js.map
