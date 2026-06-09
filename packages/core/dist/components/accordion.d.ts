import { AndyElement } from "../internal/base.js";
/**
 * `<andy-accordion>` — collapsible disclosure (mirrors the `.ds-think` / collapse pattern).
 * @slot - The collapsible body content.
 * @fires {CustomEvent<boolean>} andy-toggle - detail is the new open state.
 */
export declare class AndyAccordion extends AndyElement {
    heading: string;
    open: boolean;
    private toggle;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-accordion": AndyAccordion;
    }
}
//# sourceMappingURL=accordion.d.ts.map