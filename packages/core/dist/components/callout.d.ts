import { AndyElement } from "../internal/base.js";
export type AndyCalloutVariant = "info" | "warning" | "success" | "error";
/**
 * `<andy-callout>` — inline note / banner (`.ds-callout`).
 * @slot - Callout body (supports rich markup).
 */
export declare class AndyCallout extends AndyElement {
    variant: AndyCalloutVariant;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-callout": AndyCallout;
    }
}
//# sourceMappingURL=callout.d.ts.map