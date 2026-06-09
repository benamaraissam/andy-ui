import { AndyElement } from "../internal/base.js";
export type AndyCardPad = "none" | "sm" | "md" | "lg";
/**
 * `<andy-card>` — surface card (`.dp-card`).
 * @slot - Card content.
 */
export declare class AndyCard extends AndyElement {
    hoverable: boolean;
    pad: AndyCardPad;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-card": AndyCard;
    }
}
//# sourceMappingURL=card.d.ts.map