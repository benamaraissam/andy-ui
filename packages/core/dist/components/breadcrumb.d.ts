import { AndyElement } from "../internal/base.js";
export interface AndyCrumb {
    label: string;
    href?: string;
}
/**
 * `<andy-breadcrumb>` — path breadcrumb (`.dp-breadcrumb`).
 *
 * Provide `items`; the last item renders as the current leaf.
 * @fires {CustomEvent<AndyCrumb>} andy-navigate - when a crumb is clicked.
 */
export declare class AndyBreadcrumb extends AndyElement {
    items: AndyCrumb[];
    private go;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-breadcrumb": AndyBreadcrumb;
    }
}
//# sourceMappingURL=breadcrumb.d.ts.map