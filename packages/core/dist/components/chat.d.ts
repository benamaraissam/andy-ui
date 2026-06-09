import { AndyElement } from "../internal/base.js";
/**
 * `<andy-chat>` — conversation container (`.ds-chat`).
 * @slot - `<andy-message>` children.
 */
export declare class AndyChat extends AndyElement {
    render(): import("lit").TemplateResult<1>;
}
/**
 * `<andy-message>` — chat bubble (`.ds-msg`).
 * @slot - Message body.
 */
export declare class AndyMessage extends AndyElement {
    kind: "user" | "agent";
    author: string;
    avatar: string;
    time: string;
    render(): import("lit").TemplateResult<1>;
}
/**
 * `<andy-typing>` — animated “agent is typing” indicator (`.ds-typing`).
 */
export declare class AndyTyping extends AndyElement {
    render(): import("lit").TemplateResult<1>;
}
/**
 * `<andy-session>` — session list row (`.ds-session`).
 */
export declare class AndySession extends AndyElement {
    name: string;
    description: string;
    meta: string;
    active: boolean;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "andy-chat": AndyChat;
        "andy-message": AndyMessage;
        "andy-typing": AndyTyping;
        "andy-session": AndySession;
    }
}
//# sourceMappingURL=chat.d.ts.map