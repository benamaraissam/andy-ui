import { AndyElement } from "../internal/base.js";
/**
 * `<andy-accordion>` — collapsible disclosure (`.ds-accordion`).
 *
 * The panel animates its height open/closed and the chevron rotates. Collapsed
 * content is `inert` so it stays out of the tab order and the a11y tree.
 *
 * @slot - The collapsible body content.
 * @fires {CustomEvent<boolean>} andy-toggle - detail is the new open state.
 */
export declare class AndyAccordion extends AndyElement {
    heading: string;
    open: boolean;
    private readonly _bodyId;
    private toggle;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-accordion": AndyAccordion;
    }
}
//# sourceMappingURL=accordion.d.ts.map