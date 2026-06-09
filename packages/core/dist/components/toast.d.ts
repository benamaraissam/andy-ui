export type AndyToastType = "success" | "info" | "warning" | "error";
export interface AndyToastOptions {
    type?: AndyToastType;
    title?: string;
    message?: string;
    /** Auto-dismiss after this many ms. 0 keeps it until dismissed. Default 4200. */
    duration?: number;
}
/**
 * Imperatively show a toast. This is the primitive the React `useToast` hook
 * and the Angular `ToastService` wrap.
 */
export declare function showToast(opts?: AndyToastOptions): () => void;
export declare const toast: {
    show: typeof showToast;
    success: (message?: string, opts?: Omit<AndyToastOptions, "type" | "message">) => () => void;
    info: (message?: string, opts?: Omit<AndyToastOptions, "type" | "message">) => () => void;
    warning: (message?: string, opts?: Omit<AndyToastOptions, "type" | "message">) => () => void;
    error: (message?: string, opts?: Omit<AndyToastOptions, "type" | "message">) => () => void;
};
//# sourceMappingURL=toast.d.ts.map