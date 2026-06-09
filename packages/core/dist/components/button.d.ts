import { AndyElement } from "../internal/base.js";
export type AndyButtonVariant = "primary" | "secondary" | "success" | "warning" | "error" | "ghost";
export type AndyButtonSize = "sm" | "md" | "lg";
/**
 * `<andy-button>` — the design-system button.
 *
 * @slot - Button label / content.
 * @fires {CustomEvent<void>} andy-click - Fired on activation (suppressed while loading/disabled).
 */
export declare class AndyButton extends AndyElement {
    variant: AndyButtonVariant;
    size: AndyButtonSize;
    disabled: boolean;
    loading: boolean;
    /** Native button type, useful inside forms. */
    type: "button" | "submit" | "reset";
    private onClick;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-button": AndyButton;
    }
}
//# sourceMappingURL=button.d.ts.map