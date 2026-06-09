import { type AndyToastOptions } from "@andy-ui/core";
import * as i0 from "@angular/core";
/**
 * Thin injectable wrapper around the core imperative toast API.
 *
 * @example
 *   constructor(private toast: ToastService) {}
 *   save() { this.toast.success("Settings saved"); }
 */
export declare class ToastService {
    show(opts: AndyToastOptions): () => void;
    success(message?: string): () => void;
    info(message?: string): () => void;
    warning(message?: string): () => void;
    error(message?: string): () => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ToastService>;
}
