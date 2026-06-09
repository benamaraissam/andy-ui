import { html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { AndyElement, define } from "../internal/base.js";

export interface AndyTab {
  id: string;
  label: string;
  /** Optional count badge. */
  count?: number;
}

export type AndyTabsVariant = "segment" | "provider";

/**
 * `<andy-tabs>` — segmented control / provider tabs.
 *
 * @fires {CustomEvent<string>} andy-change - detail is the selected tab id.
 */
@customElement("andy-tabs")
export class AndyTabs extends AndyElement {
  @property({ attribute: false }) tabs: AndyTab[] = [];
  @property() active = "";
  @property({ reflect: true }) variant: AndyTabsVariant = "segment";

  private select(id: string) {
    if (id === this.active) return;
    this.active = id;
    this.dispatchEvent(new CustomEvent("andy-change", { detail: id, bubbles: true, composed: true }));
  }

  override render() {
    const active = this.active || this.tabs[0]?.id;
    if (this.variant === "provider") {
      return html`
        <div class="provider-tabs">
          ${this.tabs.map(
            (t) => html`<button
              class="provider-tab ${t.id === active ? "active" : ""}"
              @click=${() => this.select(t.id)}
            >
              ${t.label}${t.count != null ? html` <span class="tab-count">${t.count}</span>` : nothing}
            </button>`
          )}
        </div>
      `;
    }
    return html`
      <div class="ds-segment">
        ${this.tabs.map(
          (t) => html`<button
            class="ds-segment-btn ${t.id === active ? "active" : ""}"
            @click=${() => this.select(t.id)}
          >
            ${t.label}
          </button>`
        )}
      </div>
    `;
  }
}

define("andy-tabs", AndyTabs);

declare global {
  interface HTMLElementTagNameMap {
    "andy-tabs": AndyTabs;
  }
}
