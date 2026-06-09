import { AndyElement } from "../internal/base.js";
/**
 * `<andy-key-box>` — secret/API-key row with reveal + copy (`.ds-key-box`).
 * @fires {CustomEvent<void>} andy-copy - when the value is copied.
 */
export declare class AndyKeyBox extends AndyElement {
    /** The full secret value. */
    value: string;
    /** Masked display; defaults to a derived mask of `value`. */
    masked: string;
    private revealed;
    private copied;
    private get maskedText();
    private toggle;
    private copy;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-key-box": AndyKeyBox;
    }
}
//# sourceMappingURL=key-box.d.ts.map