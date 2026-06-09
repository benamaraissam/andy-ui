import { AndyElement } from "../internal/base.js";
/**
 * `<andy-search-input>` — search box with a leading magnifier icon.
 * @fires {CustomEvent<string>} andy-input - detail is the current query.
 */
export declare class AndySearchInput extends AndyElement {
    value: string;
    placeholder: string;
    private onInput;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-search-input": AndySearchInput;
    }
}
//# sourceMappingURL=search-input.d.ts.map