import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { AndyElement, define } from "../internal/base.js";
import { icons } from "../internal/icons.js";

/**
 * `<andy-accordion>` — collapsible disclosure (mirrors the `.ds-think` / collapse pattern).
 * @slot - The collapsible body content.
 * @fires {CustomEvent<boolean>} andy-toggle - detail is the new open state.
 */
@customElement("andy-accordion")
export class AndyAccordion extends AndyElement {
  @property() heading = "";
  @property({ type: Boolean, reflect: true }) open = false;

  private toggle() {
    this.open = !this.open;
    this.dispatchEvent(new CustomEvent("andy-toggle", { detail: this.open, bubbles: true, composed: true }));
  }

  override render() {
    return html`
      <button class="ds-accordion__head ${this.open ? "open" : ""}" @click=${this.toggle} aria-expanded=${this.open}>
        <span class="ds-accordion__icon">${icons.chevron()}</span>
        <span class="label">${this.heading}</span>
      </button>
      <div class="ds-accordion__body" ?hidden=${!this.open}>${this.slotTarget()}</div>
    `;
  }
}

define("andy-accordion", AndyAccordion);

declare global {
  interface HTMLElementTagNameMap {
    "andy-accordion": AndyAccordion;
  }
}
