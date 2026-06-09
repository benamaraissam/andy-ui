import { AndyElement } from "../internal/base.js";
export type AndyIconChipVariant = "tinted" | "solid" | "muted";
export type AndyIconChipSize = "md" | "lg";
/**
 * `<andy-icon-chip>` — gradient-tinted square holding an icon (`.au-icon-chip`).
 * @slot - The icon SVG.
 */
export declare class AndyIconChip extends AndyElement {
    variant: AndyIconChipVariant;
    size: AndyIconChipSize;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-icon-chip": AndyIconChip;
    }
}
//# sourceMappingURL=icon-chip.d.ts.map