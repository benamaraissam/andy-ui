import { AndyElement } from "../internal/base.js";
/**
 * `<andy-progress>` — slim progress bar (`.ds-progress`).
 */
export declare class AndyProgress extends AndyElement {
    /** 0–100. */
    value: number;
    /** Accessible name for the progress bar. */
    label: string;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-progress": AndyProgress;
    }
}
//# sourceMappingURL=progress.d.ts.map