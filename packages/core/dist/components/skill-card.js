import { nothing as c, html as t } from "lit";
import { property as l, customElement as h } from "lit/decorators.js";
import { d as v, A as _ } from "../chunks/base-DPbIYdLL.js";
var f = Object.defineProperty, u = Object.getOwnPropertyDescriptor, i = (e, d, a, o) => {
  for (var r = o > 1 ? void 0 : o ? u(d, a) : d, n = e.length - 1, p; n >= 0; n--)
    (p = e[n]) && (r = (o ? p(d, a, r) : p(r)) || r);
  return o && r && f(d, a, r), r;
};
let s = class extends _ {
  constructor() {
    super(...arguments), this.heading = "", this.description = "", this.slug = "", this.version = "", this.href = "";
  }
  render() {
    const e = t`
      <div class="ds-skill-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
      <div>
        <h3 class="ds-skill-card__title">${this.heading}</h3>
        <p class="ds-skill-card__desc">${this.description}</p>
      </div>
      <div class="ds-skill-card__meta">
        ${this.slug ? t`<code class="ds-skill-card__slug">${this.slug}</code>` : c}
        ${this.version ? t`<span class="ds-ver-pill">${this.version}</span>` : c}
      </div>
    `;
    return this.href ? t`<a class="ds-skill-card" href=${this.href}>${e}</a>` : t`<div class="ds-skill-card">${e}</div>`;
  }
};
i([
  l()
], s.prototype, "heading", 2);
i([
  l()
], s.prototype, "description", 2);
i([
  l()
], s.prototype, "slug", 2);
i([
  l()
], s.prototype, "version", 2);
i([
  l()
], s.prototype, "href", 2);
s = i([
  h("andy-skill-card")
], s);
v("andy-skill-card", s);
export {
  s as AndySkillCard
};
//# sourceMappingURL=skill-card.js.map
