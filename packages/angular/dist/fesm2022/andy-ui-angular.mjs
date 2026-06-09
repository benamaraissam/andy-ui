import { showToast, toast } from '@andy-ui/core';
export { getTheme, initTheme, setTheme, showToast, toast, toggleTheme } from '@andy-ui/core';
import * as i0 from '@angular/core';
import { inject, ElementRef, forwardRef, HostListener, Directive, NgModule, Injectable } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * Form-control bridges so `ngModel` / reactive forms bind directly to the
 * Andy-UI web components. Consumers still need `CUSTOM_ELEMENTS_SCHEMA` in the
 * component/module that renders the `<andy-*>` tags.
 */
class ValueAccessorBase {
    el = inject(ElementRef);
    onChange = () => { };
    onTouched = () => { };
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.el.nativeElement["disabled"] = isDisabled;
    }
}
/** ngModel support for `<andy-input>` and `<andy-search-input>` (string value). */
class AndyTextValueAccessor extends ValueAccessorBase {
    writeValue(value) {
        this.el.nativeElement["value"] = value ?? "";
    }
    handleInput(e) {
        this.onChange(e.detail);
    }
    handleBlur() {
        this.onTouched();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: AndyTextValueAccessor, deps: null, target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.25", type: AndyTextValueAccessor, isStandalone: true, selector: "andy-input, andy-search-input", host: { listeners: { "andy-input": "handleInput($event)", "blur": "handleBlur()" } }, providers: [
            { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => AndyTextValueAccessor), multi: true },
        ], usesInheritance: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: AndyTextValueAccessor, decorators: [{
            type: Directive,
            args: [{
                    selector: "andy-input, andy-search-input",
                    standalone: true,
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => AndyTextValueAccessor), multi: true },
                    ],
                }]
        }], propDecorators: { handleInput: [{
                type: HostListener,
                args: ["andy-input", ["$event"]]
            }], handleBlur: [{
                type: HostListener,
                args: ["blur"]
            }] } });
/** ngModel support for `<andy-select>` (string value). */
class AndySelectValueAccessor extends ValueAccessorBase {
    writeValue(value) {
        this.el.nativeElement["value"] = value ?? "";
    }
    handleChange(e) {
        this.onChange(e.detail);
        this.onTouched();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: AndySelectValueAccessor, deps: null, target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.25", type: AndySelectValueAccessor, isStandalone: true, selector: "andy-select", host: { listeners: { "andy-change": "handleChange($event)" } }, providers: [
            { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => AndySelectValueAccessor), multi: true },
        ], usesInheritance: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: AndySelectValueAccessor, decorators: [{
            type: Directive,
            args: [{
                    selector: "andy-select",
                    standalone: true,
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => AndySelectValueAccessor), multi: true },
                    ],
                }]
        }], propDecorators: { handleChange: [{
                type: HostListener,
                args: ["andy-change", ["$event"]]
            }] } });
/** ngModel support for `<andy-switch>` (boolean checked). */
class AndySwitchValueAccessor extends ValueAccessorBase {
    writeValue(value) {
        this.el.nativeElement["checked"] = !!value;
    }
    handleChange(e) {
        this.onChange(e.detail);
        this.onTouched();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: AndySwitchValueAccessor, deps: null, target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.25", type: AndySwitchValueAccessor, isStandalone: true, selector: "andy-switch", host: { listeners: { "andy-change": "handleChange($event)" } }, providers: [
            { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => AndySwitchValueAccessor), multi: true },
        ], usesInheritance: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: AndySwitchValueAccessor, decorators: [{
            type: Directive,
            args: [{
                    selector: "andy-switch",
                    standalone: true,
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => AndySwitchValueAccessor), multi: true },
                    ],
                }]
        }], propDecorators: { handleChange: [{
                type: HostListener,
                args: ["andy-change", ["$event"]]
            }] } });
/** All value-accessor directives, handy for `imports: [...ANDY_FORM_ACCESSORS]`. */
const ANDY_FORM_ACCESSORS = [
    AndyTextValueAccessor,
    AndySelectValueAccessor,
    AndySwitchValueAccessor,
];

/**
 * Convenience module that wires up the Andy-UI form-control directives for
 * template-driven / reactive forms. Standalone consumers can instead import
 * the directives (or `ANDY_FORM_ACCESSORS`) directly.
 *
 * NOTE: components that render `<andy-*>` tags must add `CUSTOM_ELEMENTS_SCHEMA`
 * to their `schemas`, because the elements are custom elements, not Angular
 * components.
 */
class AndyUiModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: AndyUiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.25", ngImport: i0, type: AndyUiModule, imports: [AndyTextValueAccessor, AndySelectValueAccessor, AndySwitchValueAccessor], exports: [AndyTextValueAccessor, AndySelectValueAccessor, AndySwitchValueAccessor] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: AndyUiModule });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: AndyUiModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [...ANDY_FORM_ACCESSORS],
                    exports: [...ANDY_FORM_ACCESSORS],
                }]
        }] });

/**
 * Thin injectable wrapper around the core imperative toast API.
 *
 * @example
 *   constructor(private toast: ToastService) {}
 *   save() { this.toast.success("Settings saved"); }
 */
class ToastService {
    show(opts) {
        return showToast(opts);
    }
    success(message) {
        return toast.success(message);
    }
    info(message) {
        return toast.info(message);
    }
    warning(message) {
        return toast.warning(message);
    }
    error(message) {
        return toast.error(message);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: ToastService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: ToastService, providedIn: "root" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: ToastService, decorators: [{
            type: Injectable,
            args: [{ providedIn: "root" }]
        }] });

/**
 * @andy-ui/angular — Angular bindings for the Andy-UI web components.
 *
 * Importing from this package registers every `<andy-*>` custom element as a
 * side effect. You also need the stylesheet once at your app root:
 *   import "@andy-ui/tokens/andy-ui.css";   // or add it to angular.json styles
 */
// Register all custom elements.

/**
 * Generated bundle index. Do not edit.
 */

export { ANDY_FORM_ACCESSORS, AndySelectValueAccessor, AndySwitchValueAccessor, AndyTextValueAccessor, AndyUiModule, ToastService };
//# sourceMappingURL=andy-ui-angular.mjs.map
