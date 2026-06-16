import { AndyElement } from "../internal/base.js";
export interface AndySelectOption {
    value: string;
    label: string;
}
/**
 * `<andy-select>` — styled native select (`.ds-select`).
 *
 * Pass options via the `options` property, or project `<option>` children.
 * @fires {CustomEvent<string>} andy-change - detail is the selected value.
 */
export declare class AndySelect extends AndyElement {
    /** Stable id linking the <label> to the <select> for a11y. */
    private readonly _id;
    label: string;
    value: string;
    options: AndySelectOption[];
    private onChange;
    render(): import("lit").TemplateResult<1>;
    protected updated(changed: import("lit").PropertyValues): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-select": AndySelect;
    }
}
//# sourceMappingURL=select.d.ts.map