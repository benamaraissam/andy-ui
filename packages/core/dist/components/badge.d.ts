import { AndyElement } from "../internal/base.js";
export type AndyBadgeVariant = "primary" | "secondary" | "success" | "warning" | "error" | "info";
/**
 * `<andy-badge>` — small labelled status/category chip.
 * @slot - Badge text.
 */
export declare class AndyBadge extends AndyElement {
    variant: AndyBadgeVariant;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-badge": AndyBadge;
    }
}
//# sourceMappingURL=badge.d.ts.map