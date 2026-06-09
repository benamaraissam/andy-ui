import { i as a } from "../chunks/icons-Dyl0601F.js";
import { render as u, html as d } from "lit";
const m = {
  success: "Success",
  info: "Notice",
  warning: "Warning",
  error: "Error"
}, f = {
  success: "check",
  info: "info",
  warning: "warning",
  error: "error"
};
let s = null;
function p() {
  return s && s.isConnected || (s = document.getElementById("toast-host"), s || (s = document.createElement("div"), s.id = "toast-host", document.body.appendChild(s))), s;
}
function y(t) {
  t.style.animation = "ds-toast-out 0.25s ease forwards", setTimeout(() => t.remove(), 260);
}
function o(t = {}) {
  if (typeof document > "u") return () => {
  };
  const e = t.type ?? "info", l = t.title ?? m[e], r = t.message ?? "", c = t.duration ?? 4200, n = document.createElement("div");
  n.className = `dp-toast ${e}`, n.style.animation = "ds-toast-in 0.3s cubic-bezier(0.34,1.56,0.64,1)";
  const i = () => y(n);
  return u(
    d`
      <div class="icon-box" style="--ts-w:18px">${a[f[e]]()}</div>
      <div class="body">
        <div class="title">${l}</div>
        ${r ? d`<div class="msg">${r}</div>` : null}
      </div>
      <button class="close" aria-label="Dismiss" @click=${i}>${a.close()}</button>
    `,
    n
  ), p().appendChild(n), c > 0 && setTimeout(i, c), i;
}
const h = {
  show: o,
  success: (t, e) => o({ ...e, type: "success", message: t }),
  info: (t, e) => o({ ...e, type: "info", message: t }),
  warning: (t, e) => o({ ...e, type: "warning", message: t }),
  error: (t, e) => o({ ...e, type: "error", message: t })
};
export {
  o as showToast,
  h as toast
};
//# sourceMappingURL=toast.js.map
