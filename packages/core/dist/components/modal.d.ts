import { nothing, type PropertyValues } from "lit";
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
    private readonly _titleId;
    /** Element focused before the dialog opened, restored on close. */
    private _returnFocus;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _onKey;
    /** Keep Tab focus cycling inside the dialog. */
    private _trapTab;
    protected updated(changed: PropertyValues): void;
    close(): void;
    private onBackdrop;
    render(): typeof nothing | import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-modal": AndyModal;
    }
}
//# sourceMappingURL=modal.d.ts.map