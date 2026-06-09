import { ElementRef } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
import * as i0 from "@angular/core";
/**
 * Form-control bridges so `ngModel` / reactive forms bind directly to the
 * Andy-UI web components. Consumers still need `CUSTOM_ELEMENTS_SCHEMA` in the
 * component/module that renders the `<andy-*>` tags.
 */
declare abstract class ValueAccessorBase<T> implements ControlValueAccessor {
    protected el: ElementRef<HTMLElement & Record<string, unknown>>;
    protected onChange: (v: T) => void;
    protected onTouched: () => void;
    abstract writeValue(value: T): void;
    registerOnChange(fn: (v: T) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
}
/** ngModel support for `<andy-input>` and `<andy-search-input>` (string value). */
export declare class AndyTextValueAccessor extends ValueAccessorBase<string> {
    writeValue(value: string): void;
    handleInput(e: CustomEvent<string>): void;
    handleBlur(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AndyTextValueAccessor, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AndyTextValueAccessor, "andy-input, andy-search-input", never, {}, {}, never, never, true, never>;
}
/** ngModel support for `<andy-select>` (string value). */
export declare class AndySelectValueAccessor extends ValueAccessorBase<string> {
    writeValue(value: string): void;
    handleChange(e: CustomEvent<string>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AndySelectValueAccessor, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AndySelectValueAccessor, "andy-select", never, {}, {}, never, never, true, never>;
}
/** ngModel support for `<andy-switch>` (boolean checked). */
export declare class AndySwitchValueAccessor extends ValueAccessorBase<boolean> {
    writeValue(value: boolean): void;
    handleChange(e: CustomEvent<boolean>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AndySwitchValueAccessor, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AndySwitchValueAccessor, "andy-switch", never, {}, {}, never, never, true, never>;
}
/** All value-accessor directives, handy for `imports: [...ANDY_FORM_ACCESSORS]`. */
export declare const ANDY_FORM_ACCESSORS: readonly [typeof AndyTextValueAccessor, typeof AndySelectValueAccessor, typeof AndySwitchValueAccessor];
export {};
