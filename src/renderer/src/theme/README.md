# Mission Portal theme (vendored)

`common.ts`, `light.ts`, and `dark.ts` in this directory are **copied verbatim**
from Mission Portal:

```
mission-portal/public/scripts/src/themes/
```

They define the shared MUI look & feel (Red Hat Text typography, the CFEngine
color palette, and component overrides) in `light`/`dark` `ThemeOptions`, which
`index.ts` turns into MUI `Theme` objects for `<ThemeProvider>`.

## Do not edit these files by hand

To keep them in sync with Mission Portal they are kept byte-identical to
upstream and are therefore **excluded from ESLint and Prettier** (see
`eslint.config.js` and `.prettierignore`). `tsconfig.web.json` also relaxes
`noImplicitAny` because upstream uses implicitly-typed MUI styleOverride
callbacks.

To update the theme, re-copy the three files from Mission Portal rather than
editing them in place:

```sh
cp ../mission-portal/public/scripts/src/themes/{common,light,dark}.ts \
   src/renderer/src/theme/
```

## @todo — single source of truth

This is duplicated source. The theme should eventually be published as a shared
package @northern.tech/theme.
