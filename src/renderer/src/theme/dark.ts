import { Palette, ThemeOptions, autocompleteClasses, inputBaseClasses } from '@mui/material';
import { buttonClasses } from '@mui/material/Button';

import { blue, red, commonPalette, darkBackground, darkBlue, darkThemeText, gray, orange, overrides, typography } from './common';

const palette = {
  ...commonPalette,
  darkBackground,
  primary: {
    main: gray[600],
    light: blue[200],
    dark: gray[700],
    border: 'rgba(255, 255, 255, 0.38)'
  },
  secondary: {
    main: orange[800],
    light: darkBlue[700],
    dark: orange[850]
  },
  danger: {
    main: red[600],
    contrastText: '#fff'
  },
  link: { primary: darkBlue[200], muted: gray[200] },
  text: {
    primary: darkThemeText,
    muted: gray[300]
  },
  background: {
    default: darkBackground[900],
    lightgrey: darkBackground[500],
    code: darkBackground[800],
    summary: darkBackground[50]
  },
  border: {
    main: 'rgba(255, 255, 255, 0.38)',
    secondary: 'rgba(255, 255, 255, 0.2)'
  },
  mode: 'dark'
} as Palette;

export const dark: ThemeOptions = {
  palette,
  typography,
  components: {
    ...overrides,
    MuiTextField: {
      ...overrides.MuiTextField,
      styleOverrides: {
        ...overrides.MuiTextField.styleOverrides,
        root: {
          ...overrides.MuiTextField.styleOverrides.root
        }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        ...overrides.MuiAutocomplete.styleOverrides,
        root: {
          ...overrides.MuiAutocomplete.styleOverrides.root,
          [`& .${autocompleteClasses.input}`]: {
            ...(overrides.MuiAutocomplete.styleOverrides.root[`& .${autocompleteClasses.input}`] as object),
            background: darkBackground[50],
            color: palette.text.primary,
            caretColor: palette.text.primary
          },
          [`& .${inputBaseClasses.input}::placeholder`]: {
            ...(overrides.MuiAutocomplete.styleOverrides.root[`& .${inputBaseClasses.input}::placeholder`] as object),
            color: palette.text.primary
          },
          ['.Mui-focused .MuiOutlinedInput-notchedOutline']: {
            border: `3px solid ${darkBlue[200]} !important`
          },
          '.MuiAutocomplete-option': {
            backgroundColor: darkBackground[50]
          }
        },
        popper: {
          ...overrides.MuiAutocomplete.styleOverrides.popper
        },
        noOptions: {
          ...(overrides.MuiAutocomplete.styleOverrides.noOptions as object),
          color: `${palette.text.primary} !important`,
          background: `${darkBackground[50]} !important`
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltipArrow: {
          ['> .MuiTooltip-arrow']: {
            color: gray[600]
          },
          background: gray[600]
        }
      }
    },
    MuiButton: {
      ...overrides.MuiButton,
      styleOverrides: {
        ...overrides.MuiButton.styleOverrides,
        root: {
          ...overrides.MuiButton.styleOverrides.root,
          [`&.${buttonClasses.colorSecondary}`]: {
            color: darkBackground[900],
            [`&.${buttonClasses.outlined}, &.${buttonClasses.outlined} *`]: {
              color: orange[800]
            }
          },
          [`&.${buttonClasses.disabled}`]: {
            color: 'rgba(255, 255, 255, 0.6)'
          }
        },
        // Outlined "error" buttons (e.g. Remove selected hosts) — keep red
        // text + red border in dark mode; otherwise dark theme's default text
        // color overrides MUI's error color and we end up with white text on
        // a red-bordered button.
        outlinedError: {
          color: `${red[600]} !important`,
          borderColor: `${red[600]} !important`,
          '&:hover': {
            color: red[600],
            borderColor: red[600],
            backgroundColor: 'rgba(215, 73, 54, 0.08)'
          },
          '&.Mui-disabled': {
            color: 'rgba(215, 73, 54, 0.4) !important',
            borderColor: 'rgba(215, 73, 54, 0.4) !important'
          }
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          ...overrides.MuiDialog.styleOverrides.paper,
          background: darkBackground[900],
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          ...overrides.MuiDialogTitle.styleOverrides.root,
          borderBottom: `1px solid ${palette.primary.border}`
        }
      }
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          color: palette.text.primary
        }
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          ...overrides.MuiDialogActions.styleOverrides.root,
          borderTop: `1px solid ${palette.border.secondary}`,
          background: darkBackground[500]
        }
      }
    },
    MuiTable: {
      styleOverrides: {
        root: {
          ...overrides.MuiTable.styleOverrides.root,
          border: '1px solid rgba(255, 255, 255, 0.16)',
          backgroundColor: 'transparent'
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        ...overrides.MuiTableCell.styleOverrides,
        root: {
          ...overrides.MuiTableCell.styleOverrides.root,
          borderBottom: '1px solid rgba(255, 255, 255, 0.16)',
          borderRight: '1px solid rgba(255, 255, 255, 0.16)',
          color: palette.text.primary,
          '&:last-child': {
            borderRight: 'none'
          }
        },
        head: {
          ...overrides.MuiTableCell.styleOverrides.head,
          color: palette.text.muted
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '& input, & textarea': {
            border: 'none !important'
          },
          '&.Mui-focused': {
            border: 'none !important',
          },
          '&.MuiOutlinedInput-root': {
            '&:hover fieldset': {
              border: `1px solid ${palette.primary.border}`,
            }
          }
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          color: palette.text.secondary,
          fontWeight: 500,
          '&.Mui-selected': {
            color: palette.text.primary,
            fontWeight: 700
          }
        }
      }
    }
  }
};
