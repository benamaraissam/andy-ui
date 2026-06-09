import { AndyElement } from "../internal/base.js";
export interface AndyColumn {
    key: string;
    header: string;
    align?: "left" | "right";
    /** Render this column's cells in monospace. */
    mono?: boolean;
    /** Render this column's cells with emphasis. */
    strong?: boolean;
}
export type AndyRow = Record<string, unknown>;
/**
 * `<andy-table>` — canonical data table (`.ds-table`).
 *
 * Provide `columns` and `rows`. For rich cells (pills, action buttons) you can
 * also use the `.ds-table` CSS classes directly — see the docs.
 */
export declare class AndyTable extends AndyElement {
    columns: AndyColumn[];
    rows: AndyRow[];
    private cellClass;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-table": AndyTable;
    }
}
//# sourceMappingURL=table.d.ts.map