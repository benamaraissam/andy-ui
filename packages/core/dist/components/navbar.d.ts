import { AndyElement } from "../internal/base.js";
import type { AndyCrumb } from "./breadcrumb.js";
import "./breadcrumb.js";
import "./search-input.js";
import "./theme-toggle.js";
/**
 * `<andy-navbar>` — top navigation bar (`.au-navbar`).
 *
 * A ready-made composition: a breadcrumb on the left, then a search box and a
 * theme toggle on the right. Child events bubble (`andy-navigate`,
 * `andy-input`, `andy-theme-change`), so listen for them on the navbar.
 *
 * @slot actions - Extra content placed before the theme toggle (buttons, avatar…).
 */
export declare class AndyNavbar extends AndyElement {
    /** Breadcrumb trail (last item is the current leaf). */
    items: AndyCrumb[];
    searchPlaceholder: string;
    searchValue: string;
    /** Hide the built-in search box. */
    noSearch: boolean;
    /** Hide the built-in theme toggle. */
    noThemeToggle: boolean;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-navbar": AndyNavbar;
    }
}
//# sourceMappingURL=navbar.d.ts.map