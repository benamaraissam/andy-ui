import { AndyElement } from "../internal/base.js";
/**
 * `<andy-skill-card>` — link-style card with icon, title, description and meta.
 * @slot icon - Optional custom icon (defaults to a file glyph).
 */
export declare class AndySkillCard extends AndyElement {
    heading: string;
    description: string;
    slug: string;
    version: string;
    href: string;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-skill-card": AndySkillCard;
    }
}
//# sourceMappingURL=skill-card.d.ts.map