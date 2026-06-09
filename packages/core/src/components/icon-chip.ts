import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { AndyElement, define } from "../internal/base.js";

export type AndyIconChipVariant = "tinted" | "solid" | "muted";
export type AndyIconChipSize = "md" | "lg";

/**
 * `<andy-icon-chip>` — gradient-tinted square holding an icon (`.au-icon-chip`).
 * @slot - The icon SVG.
 */
@customElement("andy-icon-chip")
export class AndyIconChip extends AndyElement {
  @property({ reflect: true }) variant: AndyIconChipVariant = "tinted";
  @property({ reflect: true }) size: AndyIconChipSize = "md";

  override render() {
    const cls = [
      "au-icon-chip",
      this.size === "lg" ? "au-icon-chip--lg" : "",
      this.variant === "solid" ? "au-icon-chip--solid" : "",
      this.variant === "muted" ? "au-icon-chip--muted" : "",
    ]
      .filter(Boolean)
      .join(" ");
    return html`<div class=${cls}>${this.slotTarget()}</div>`;
  }
}

define("andy-icon-chip", AndyIconChip);

declare global {
  interface HTMLElementTagNameMap {
    "andy-icon-chip": AndyIconChip;
  }
}
