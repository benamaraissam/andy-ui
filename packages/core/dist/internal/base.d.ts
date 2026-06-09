import { LitElement, type PropertyValues } from "lit";
/**
 * Base class for all Andy-UI elements.
 *
 * We render into the **light DOM** (not a shadow root) on purpose: the whole
 * design system is a global stylesheet (`@andy-ui/tokens`) built around global
 * (often cross-component) class selectors and CSS custom properties driven by
 * `[data-theme]` on <html>. Light-DOM rendering lets every component reuse that
 * stylesheet verbatim and theme through the normal cascade — shadow DOM would
 * scope those selectors away.
 *
 * Light DOM has no real `<slot>`, yet we still need to project author children
 * into our rendered chrome (e.g. a button label inside `<button class="btn">`).
 * We do this **race-free across frameworks** as follows:
 *
 *   - Lit renders into a dedicated `display:contents` "chrome wrapper" that is a
 *     child of the host (see {@link createRenderRoot}). Because Lit only ever
 *     touches that wrapper, the host's *other* direct children — the author's
 *     content — are never clobbered, whenever the framework inserts them.
 *   - Author children are therefore trivially identifiable: every direct child
 *     of the host except the wrapper. We relocate them into `display:contents`
 *     "slot target" spans inside the chrome (see {@link slotTarget}), driven by
 *     a MutationObserver so it works whether children arrive before or after the
 *     element upgrades/connects (React inserts early; Angular inserts late).
 */
export declare class AndyElement extends LitElement {
    #private;
    protected createRenderRoot(): HTMLElement;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * A persistent, transparent projection target for the given slot name (`""`
     * is the default slot). Render it in your template, e.g.
     * `html`<button class="btn">${this.slotTarget()}</button>``.
     */
    protected slotTarget(name?: string): HTMLElement;
    /** Whether any author child targets the given slot (`""` = default). */
    protected hasSlot(name?: string): boolean;
    protected updated(changed: PropertyValues): void;
}
/** Register a custom element once, tolerating duplicate imports / HMR. */
export declare function define(tag: string, ctor: CustomElementConstructor): void;
//# sourceMappingURL=base.d.ts.map