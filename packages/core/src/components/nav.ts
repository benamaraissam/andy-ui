import { html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { AndyElement, define } from "../internal/base.js";

/**
 * `<andy-nav-list>` — sidebar nav container (`.nav-list`).
 * @slot - `<andy-nav-item>` children.
 */
@customElement("andy-nav-list")
export class AndyNavList extends AndyElement {
  override render() {
    return html`<ul class="nav-list">${this.slotTarget()}</ul>`;
  }
}
define("andy-nav-list", AndyNavList);

/**
 * `<andy-nav-item>` — sidebar nav row (`.nav-item`).
 * @slot icon - Optional leading icon.
 * @slot      - The label.
 * @fires {CustomEvent<string>} andy-select - when clicked; detail is `key`.
 */
@customElement("andy-nav-item")
export class AndyNavItem extends AndyElement {
  @property({ type: Boolean, reflect: true }) active = false;
  @property() href = "";
  /** Stable identifier echoed back in the `andy-select` event detail. */
  @property() key = "";

  private onClick(e: Event) {
    if (!this.href) e.preventDefault();
    this.dispatchEvent(new CustomEvent("andy-select", { detail: this.key, bubbles: true, composed: true }));
  }

  override render() {
    return html`
      <li>
        <a class="nav-item ${this.active ? "active" : ""}" href=${this.href || "#"} @click=${this.onClick}>
          ${this.hasSlot("icon") ? html`<span class="nav-item__icon">${this.slotTarget("icon")}</span>` : nothing}
          <span class="nav-label">${this.slotTarget()}</span>
        </a>
      </li>
    `;
  }
}
define("andy-nav-item", AndyNavItem);

declare global {
  interface HTMLElementTagNameMap {
    "andy-nav-list": AndyNavList;
    "andy-nav-item": AndyNavItem;
  }
}
