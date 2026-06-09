/**
 * Theme helpers — mirror the behaviour of the original `andy-ui.js`:
 * persist the chosen theme and reflect it onto `<html data-theme>`.
 */
export type AndyTheme = "light" | "dark";
export declare function getTheme(): AndyTheme;
export declare function setTheme(theme: AndyTheme): void;
export declare function toggleTheme(): AndyTheme;
/** Apply the persisted theme (or `fallback`) to <html>. Call once at startup. */
export declare function initTheme(fallback?: AndyTheme): AndyTheme;
//# sourceMappingURL=theme.d.ts.map