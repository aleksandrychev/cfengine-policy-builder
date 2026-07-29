// Typed boundary for the vendored Mission Portal theme.
//
// The theme sources (src/renderer/src/theme/{common,light,dark}.ts + index.ts)
// are copied VERBATIM from Mission Portal, where they are transpiled by webpack
// without a strict type check. They use `as Palette` casts and custom palette
// keys that do not satisfy MUI's real types, so they are excluded from `tsc`
// (see tsconfig.web.json) and Vite/esbuild transpiles them at build time.
//
// This ambient declaration is how the strictly-typechecked app consumes the
// theme: it imports from the `@renderer/theme` alias, which Vite/Vitest resolve
// to the real theme/index.ts, while tsc resolves it to these declarations.
declare module '@renderer/theme' {
  import type { Theme } from '@mui/material';

  export const lightTheme: Theme;
  export const darkTheme: Theme;
  export function getTheme(mode: 'light' | 'dark'): Theme;
}
