import { html as a } from "lit";
import { property as p, customElement as d } from "lit/decorators.js";
import { d as h, A as u } from "../chunks/base-DPbIYdLL.js";
var b = Object.defineProperty, c = Object.getOwnPropertyDescriptor, m = (t, e, o, l) => {
  for (var r = l > 1 ? void 0 : l ? c(e, o) : e, n = t.length - 1, i; n >= 0; n--)
    (i = t[n]) && (r = (l ? i(e, o, r) : i(r)) || r);
  return l && r && b(e, o, r), r;
};
let s = class extends u {
  constructor() {
    super(...arguments), this.columns = [], this.rows = [];
  }
  cellClass(t) {
    return [t.mono ? "cell-mono" : "", t.strong ? "cell-strong" : ""].filter(Boolean).join(" ");
  }
  render() {
    return a`
      <div class="ds-table-panel">
        <table class="ds-table">
          <thead>
            <tr>
              ${this.columns.map((t) => a`<th style=${t.align === "right" ? "text-align:right" : ""}>${t.header}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.rows.map(
      (t) => a`<tr>
                ${this.columns.map(
        (e) => a`<td class=${this.cellClass(e)} style=${e.align === "right" ? "text-align:right" : ""}>${String(t[e.key] ?? "")}</td>`
      )}
              </tr>`
    )}
          </tbody>
        </table>
      </div>
    `;
  }
};
m([
  p({ attribute: !1 })
], s.prototype, "columns", 2);
m([
  p({ attribute: !1 })
], s.prototype, "rows", 2);
s = m([
  d("andy-table")
], s);
h("andy-table", s);
export {
  s as AndyTable
};
//# sourceMappingURL=table.js.map
