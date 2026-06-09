import { AndyElement } from "../internal/base.js";
/**
 * `<andy-theme-toggle>` — light/dark switch that drives `<html data-theme>`.
 * @fires {CustomEvent<AndyTheme>} andy-theme-change
 */
export declare class AndyThemeToggle extends AndyElement {
    private theme;
    private flip;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-theme-toggle": AndyThemeToggle;
    }
}
//# sourceMappingURL=theme-toggle.d.ts.map