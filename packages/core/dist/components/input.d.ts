import { AndyElement } from "../internal/base.js";
/**
 * `<andy-input>` — labelled text field (`.dp-field` + `.dp-input`).
 *
 * @fires {CustomEvent<string>} andy-input  - On every keystroke; detail is the value.
 * @fires {CustomEvent<string>} andy-change - On commit (blur/Enter); detail is the value.
 */
export declare class AndyInput extends AndyElement {
    /** Stable id linking the <label>, <input>, and error message for a11y. */
    private readonly _id;
    label: string;
    value: string;
    placeholder: string;
    type: string;
    required: boolean;
    disabled: boolean;
    /** Validation message; presence puts the field into the error state. */
    error: string;
    private onInput;
    private onChange;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-input": AndyInput;
    }
}
//# sourceMappingURL=input.d.ts.map