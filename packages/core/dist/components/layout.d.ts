import { AndyElement } from "../internal/base.js";
import type { IconName } from "../internal/icons.js";
import "./icon.js";
import "./icon-chip.js";
import "./avatar.js";
/**
 * `<andy-app-shell>` — sidebar + main-column application layout.
 *
 * Regions (light-DOM slots):
 * @slot sidebar - The `<andy-sidebar>`.
 * @slot header  - The `<andy-header>` (sticky, top of the main column).
 * @slot         - The scrolling page content.
 *
 * Listens for `andy-collapse-toggle` from a descendant sidebar and mirrors the
 * collapsed state onto itself so the grid animates between the full and
 * collapsed sidebar widths.
 */
export declare class AndyAppShell extends AndyElement {
    collapsed: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _onToggle;
    render(): import("lit").TemplateResult<1>;
}
/**
 * `<andy-sidebar>` — collapsible workspace sidebar (`.sidebar`).
 *
 * @slot brand  - Brand mark / wordmark (shown in the sidebar header).
 * @slot        - Nav sections (`<andy-nav-section>` / `<andy-nav-list>`).
 * @slot footer - Footer content (user card, sign-out, …).
 * @fires {CustomEvent<boolean>} andy-collapse-toggle - new collapsed state.
 */
export declare class AndySidebar extends AndyElement {
    collapsed: boolean;
    /** Show the collapse toggle button in the header. */
    collapsible: boolean;
    private toggle;
    render(): import("lit").TemplateResult<1>;
}
/**
 * `<andy-sidebar-brand>` — logo mark + wordmark for the sidebar `brand` slot.
 *
 * Composed from Andy-UI parts: an `<andy-icon-chip>` for the mark plus the
 * name/tagline (hidden when the sidebar is collapsed).
 * @slot logo - Optional custom logo, used instead of `icon`.
 */
export declare class AndySidebarBrand extends AndyElement {
    name: string;
    tagline: string;
    /** Built-in icon name for the mark. Ignored when a `logo` is slotted. */
    icon: IconName | "";
    render(): import("lit").TemplateResult<1>;
}
/**
 * `<andy-sidebar-user>` — user card for the sidebar `footer` slot.
 *
 * Composed from an `<andy-avatar>` plus name/email (hidden when collapsed).
 */
export declare class AndySidebarUser extends AndyElement {
    name: string;
    email: string;
    /** Avatar initials (or slot an image into `<andy-avatar>` via the default slot). */
    avatar: string;
    render(): import("lit").TemplateResult<1>;
}
/**
 * `<andy-nav-section>` — titled group of nav items (`.nav-section`).
 * @slot - `<andy-nav-item>` rows (wrapped in a `.nav-list`).
 */
export declare class AndyNavSection extends AndyElement {
    heading: string;
    render(): import("lit").TemplateResult<1>;
}
/**
 * `<andy-header>` — sticky app header / topbar (`.header`).
 * @slot         - Title / breadcrumb area (left).
 * @slot actions - Right-aligned actions.
 */
export declare class AndyHeader extends AndyElement {
    render(): import("lit").TemplateResult<1>;
}
/**
 * `<andy-footer>` — generic footer bar (`.au-footer`).
 *
 * A flexible slotted bar (content left, optional actions right). Works as a
 * page/section footer and as the sidebar footer region.
 * @slot         - Main footer content (left).
 * @slot actions - Right-aligned actions.
 */
export declare class AndyFooter extends AndyElement {
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-app-shell": AndyAppShell;
        "andy-sidebar": AndySidebar;
        "andy-sidebar-brand": AndySidebarBrand;
        "andy-sidebar-user": AndySidebarUser;
        "andy-nav-section": AndyNavSection;
        "andy-header": AndyHeader;
        "andy-footer": AndyFooter;
    }
}
//# sourceMappingURL=layout.d.ts.map