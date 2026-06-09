import { html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { AndyElement, define } from "../internal/base.js";
import { icons } from "../internal/icons.js";

/**
 * `<andy-modal>` — dialog with overlay (`.modal-overlay` / `.modal-content`).
 *
 * @slot        - Modal body.
 * @slot footer - Footer actions.
 * @fires {CustomEvent<void>} andy-close - when dismissed (backdrop, ✕, or Escape).
 */
@customElement("andy-modal")
export class AndyModal extends AndyElement {
  @property({ type: Boolean, reflect: true }) open = false;
  @property() heading = "";
  /** Disable closing on backdrop click / Escape. */
  @property({ type: Boolean }) persistent = false;

  override connectedCallback(): void {
    super.connectedCallback();
    this._onKey = this._onKey.bind(this);
    document.addEventListener("keydown", this._onKey);
  }
  override disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener("keydown", this._onKey);
  }
  private _onKey(e: KeyboardEvent) {
    if (e.key === "Escape" && this.open && !this.persistent) this.close();
  }

  close() {
    this.open = false;
    this.dispatchEvent(new CustomEvent("andy-close", { bubbles: true, composed: true }));
  }

  private onBackdrop(e: Event) {
    if (e.target === e.currentTarget && !this.persistent) this.close();
  }

  override render() {
    if (!this.open) return nothing;
    // Footer content is whatever the author slotted; rendered as-is below body.
    return html`
      <div class="modal-overlay" style="position:fixed" @click=${this.onBackdrop}>
        <div class="modal-content" role="dialog" aria-modal="true" aria-label=${this.heading || "Dialog"}>
          <div class="modal-header">
            <h3>${this.heading}</h3>
            <button class="modal-close" aria-label="Close" @click=${this.close}>${icons.close()}</button>
          </div>
          <div class="modal-body">${this.slotTarget()}</div>
        </div>
      </div>
    `;
  }
}

define("andy-modal", AndyModal);

declare global {
  interface HTMLElementTagNameMap {
    "andy-modal": AndyModal;
  }
}
