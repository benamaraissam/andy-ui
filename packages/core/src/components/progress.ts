import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { AndyElement, define } from "../internal/base.js";

/**
 * `<andy-progress>` — slim progress bar (`.ds-progress`).
 */
@customElement("andy-progress")
export class AndyProgress extends AndyElement {
  /** 0–100. */
  @property({ type: Number }) value = 0;

  override render() {
    const pct = Math.max(0, Math.min(100, this.value));
    return html`<div class="ds-progress" role="progressbar" aria-valuenow=${pct} aria-valuemin="0" aria-valuemax="100"><span style="width:${pct}%"></span></div>`;
  }
}

define("andy-progress", AndyProgress);

declare global {
  interface HTMLElementTagNameMap {
    "andy-progress": AndyProgress;
  }
}
