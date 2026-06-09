import { AndyElement } from "../internal/base.js";
/**
 * `<andy-empty-state>` — empty/zero-data placeholder (`.ds-empty`).
 * @slot icon   - Optional icon glyph.
 * @slot        - Optional action(s) below the copy.
 */
export declare class AndyEmptyState extends AndyElement {
    heading: string;
    copy: string;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-empty-state": AndyEmptyState;
    }
}
//# sourceMappingURL=empty-state.d.ts.map