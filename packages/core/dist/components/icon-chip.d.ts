import { AndyElement } from "../internal/base.js";
import { type IconName } from "../internal/icons.js";
export type AndyIconChipVariant = "tinted" | "solid" | "muted";
export type AndyIconChipSize = "md" | "lg";
/**
 * `<andy-icon-chip>` — gradient-tinted square holding an icon (`.au-icon-chip`).
 *
 * Set `icon` to a built-in icon name, or slot in your own SVG.
 * @slot - The icon SVG (used when `icon` is not set).
 */
export declare class AndyIconChip extends AndyElement {
    variant: AndyIconChipVariant;
    size: AndyIconChipSize;
    /** Built-in icon name. When set, it's rendered instead of slotted content. */
    icon: IconName | "";
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-icon-chip": AndyIconChip;
    }
}
//# sourceMappingURL=icon-chip.d.ts.map