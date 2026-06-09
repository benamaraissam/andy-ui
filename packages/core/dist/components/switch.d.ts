import { AndyElement } from "../internal/base.js";
/**
 * `<andy-switch>` — toggle switch (`.ds-switch`) with an optional trailing label.
 * @slot - Optional label text shown beside the switch.
 * @fires {CustomEvent<boolean>} andy-change - detail is the new checked state.
 */
export declare class AndySwitch extends AndyElement {
    checked: boolean;
    disabled: boolean;
    private onChange;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-switch": AndySwitch;
    }
}
//# sourceMappingURL=switch.d.ts.map