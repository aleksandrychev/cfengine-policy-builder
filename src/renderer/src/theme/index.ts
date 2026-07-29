import { createTheme, type Theme } from '@mui/material';

import { light } from './light';
import { dark } from './dark';

/**
 * Mission Portal MUI themes, ready to hand to a <ThemeProvider>.
 *
 * @todo The files in this directory (common.ts / light.ts / dark.ts) are copied
 *       VERBATIM from Mission Portal:
 *         mission-portal/public/scripts/src/themes/
 *       They must eventually share a single source of truth with Mission Portal
 *       (e.g. a published `@northern.tech/theme` package consumed by both apps)
 *       instead of being duplicated here. Until then, keep these files
 *       byte-identical to upstream — they are excluded from ESLint/Prettier so
 *       they don't drift. See theme/README.md.
 */
export const lightTheme: Theme = createTheme(light);
export const darkTheme: Theme = createTheme(dark);

export const getTheme = (mode: 'light' | 'dark'): Theme =>
  mode === 'dark' ? darkTheme : lightTheme;
