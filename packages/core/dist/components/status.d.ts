import { AndyElement } from "../internal/base.js";
export type AndyStatusKind = "healthy" | "error" | "disabled" | "unknown";
/**
 * `<andy-status>` — status pill with a leading dot.
 * @slot - Status label.
 */
export declare class AndyStatus extends AndyElement {
    status: AndyStatusKind;
    render(): import("lit").TemplateResult<1>;
}
/**
 * `<andy-version-pill>` — monospace version tag.
 * @slot - Version string, e.g. `1.3.0`.
 */
export declare class AndyVersionPill extends AndyElement {
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-status": AndyStatus;
        "andy-version-pill": AndyVersionPill;
    }
}
//# sourceMappingURL=status.d.ts.map