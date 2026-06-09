import * as i0 from "@angular/core";
import * as i1 from "./value-accessors";
/**
 * Convenience module that wires up the Andy-UI form-control directives for
 * template-driven / reactive forms. Standalone consumers can instead import
 * the directives (or `ANDY_FORM_ACCESSORS`) directly.
 *
 * NOTE: components that render `<andy-*>` tags must add `CUSTOM_ELEMENTS_SCHEMA`
 * to their `schemas`, because the elements are custom elements, not Angular
 * components.
 */
export declare class AndyUiModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<AndyUiModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AndyUiModule, never, [typeof i1.AndyTextValueAccessor, typeof i1.AndySelectValueAccessor, typeof i1.AndySwitchValueAccessor], [typeof i1.AndyTextValueAccessor, typeof i1.AndySelectValueAccessor, typeof i1.AndySwitchValueAccessor]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AndyUiModule>;
}
