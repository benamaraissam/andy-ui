import { html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { AndyElement, define } from "../internal/base.js";

/**
 * `<andy-input>` — labelled text field (`.dp-field` + `.dp-input`).
 *
 * @fires {CustomEvent<string>} andy-input  - On every keystroke; detail is the value.
 * @fires {CustomEvent<string>} andy-change - On commit (blur/Enter); detail is the value.
 */
@customElement("andy-input")
export class AndyInput extends AndyElement {
  @property() label = "";
  @property() value = "";
  @property() placeholder = "";
  @property() type = "text";
  @property({ type: Boolean, reflect: true }) required = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  /** Validation message; presence puts the field into the error state. */
  @property() error = "";

  private onInput(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
    this.dispatchEvent(new CustomEvent("andy-input", { detail: this.value, bubbles: true, composed: true }));
  }
  private onChange() {
    this.dispatchEvent(new CustomEvent("andy-change", { detail: this.value, bubbles: true, composed: true }));
  }

  override render() {
    return html`
      <div class="dp-field">
        ${this.label
          ? html`<label class="label">${this.label}${this.required ? html` <span class="req">*</span>` : nothing}</label>`
          : nothing}
        <input
          class="dp-input ${this.error ? "is-error" : ""}"
          type=${this.type}
          .value=${this.value}
          placeholder=${this.placeholder}
          ?required=${this.required}
          ?disabled=${this.disabled}
          @input=${this.onInput}
          @change=${this.onChange}
        />
        ${this.error ? html`<span class="error-msg">${this.error}</span>` : nothing}
      </div>
    `;
  }
}

define("andy-input", AndyInput);

declare global {
  interface HTMLElementTagNameMap {
    "andy-input": AndyInput;
  }
}
