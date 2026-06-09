import { AndyElement } from "../internal/base.js";
/**
 * `<andy-stat>` — single metric tile (`.ds-stat`).
 */
export declare class AndyStat extends AndyElement {
    value: string;
    label: string;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-stat": AndyStat;
    }
}
//# sourceMappingURL=stat.d.ts.map