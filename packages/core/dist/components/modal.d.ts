import { nothing } from "lit";
import { AndyElement } from "../internal/base.js";
/**
 * `<andy-modal>` — dialog with overlay (`.modal-overlay` / `.modal-content`).
 *
 * @slot        - Modal body.
 * @slot footer - Footer actions.
 * @fires {CustomEvent<void>} andy-close - when dismissed (backdrop, ✕, or Escape).
 */
export declare class AndyModal extends AndyElement {
    open: boolean;
    heading: string;
    /** Disable closing on backdrop click / Escape. */
    persistent: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _onKey;
    close(): void;
    private onBackdrop;
    render(): import("lit").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-modal": AndyModal;
    }
}
//# sourceMappingURL=modal.d.ts.map