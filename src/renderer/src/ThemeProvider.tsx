import { CssBaseline, ThemeProvider } from '@mui/material';
import type { ReactNode } from 'react';

import { getTheme } from '@renderer/theme';
import { useColorScheme } from './hooks/useColorScheme';

/**
 * Applies the Mission Portal MUI theme, following the OS light/dark preference.
 */
export function AppThemeProvider({ children }: { children: ReactNode }) {
  const scheme = useColorScheme();
  return (
    <ThemeProvider theme={getTheme(scheme)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
