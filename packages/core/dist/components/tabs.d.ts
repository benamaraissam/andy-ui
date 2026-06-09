import { AndyElement } from "../internal/base.js";
export interface AndyTab {
    id: string;
    label: string;
    /** Optional count badge. */
    count?: number;
}
export type AndyTabsVariant = "segment" | "provider";
/**
 * `<andy-tabs>` — segmented control / provider tabs.
 *
 * @fires {CustomEvent<string>} andy-change - detail is the selected tab id.
 */
export declare class AndyTabs extends AndyElement {
    tabs: AndyTab[];
    active: string;
    variant: AndyTabsVariant;
    private select;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-tabs": AndyTabs;
    }
}
//# sourceMappingURL=tabs.d.ts.map