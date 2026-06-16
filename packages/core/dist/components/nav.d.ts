import { AndyElement } from "../internal/base.js";
/**
 * `<andy-nav-list>` — sidebar nav container (`.nav-list`).
 * @slot - `<andy-nav-item>` children.
 */
export declare class AndyNavList extends AndyElement {
    render(): import("lit").TemplateResult<1>;
}
/**
 * `<andy-nav-item>` — sidebar nav row (`.nav-item`).
 * @slot icon - Optional leading icon.
 * @slot      - The label.
 * @fires {CustomEvent<string>} andy-select - when clicked; detail is `key`.
 */
export declare class AndyNavItem extends AndyElement {
    active: boolean;
    href: string;
    /** Stable identifier echoed back in the `andy-select` event detail. */
    key: string;
    connectedCallback(): void;
    private onClick;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-nav-list": AndyNavList;
        "andy-nav-item": AndyNavItem;
    }
}
//# sourceMappingURL=nav.d.ts.map