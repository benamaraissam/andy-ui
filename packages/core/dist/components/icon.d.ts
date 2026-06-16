import { AndyElement } from "../internal/base.js";
import { type IconName } from "../internal/icons.js";
export type AndyIconSize = "sm" | "md" | "lg" | "xl";
/** Semantic colour, mapped to design tokens. `inherit` uses the surrounding `currentColor`. */
export type AndyIconTone = "inherit" | "brand" | "success" | "warning" | "error" | "info" | "muted";
/**
 * `<andy-icon>` — renders a built-in icon from the Andy-UI set (`.au-icon`).
 *
 * Decorative by default (`aria-hidden`). Provide `label` to expose it as an
 * image to assistive tech. The same icon names power `<andy-icon-chip icon>`.
 */
export declare class AndyIcon extends AndyElement {
    /** Icon name from the built-in set. */
    name: IconName;
    size: AndyIconSize;
    /** Semantic colour (design tokens). Defaults to `inherit` (currentColor). */
    tone: AndyIconTone;
    /** Accessible label. When empty the icon is decorative (hidden from AT). */
    label: string;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-icon": AndyIcon;
    }
}
//# sourceMappingURL=icon.d.ts.map