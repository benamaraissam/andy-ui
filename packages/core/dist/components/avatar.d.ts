import { AndyElement } from "../internal/base.js";
export type AndyAvatarSize = "sm" | "md" | "lg";
/**
 * `<andy-avatar>` — initials/icon avatar (`.ds-avatar`).
 * @slot - Initials or an icon.
 */
export declare class AndyAvatar extends AndyElement {
    size: AndyAvatarSize;
    round: boolean;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-avatar": AndyAvatar;
    }
}
//# sourceMappingURL=avatar.d.ts.map