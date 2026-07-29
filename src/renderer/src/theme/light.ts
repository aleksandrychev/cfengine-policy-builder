import { Palette, ThemeOptions, autocompleteClasses, inputBaseClasses } from '@mui/material';

import { blue, commonPalette, darkBlue, gray, overrides, red, typography } from './common';

const palette = {
  ...commonPalette,
  danger: {
    main: red[600],
    contrastText: '#fff'
  },
  primary: {
    main: darkBlue[700],
    light: darkBlue[700],
    dark: blue[700],
    border: '#E0E0E0'
  },
  secondary: {
    main: darkBlue[700],
    light: darkBlue[700],
    dark: darkBlue[400]
  },
  border: {
    main: gray[600],
    secondary: gray[300]
  },
  tooltip: {
    text: gray[50],
    tierTipBackground: '#f7fafb'
  },
  text: { primary: '#0B132A', muted: gray[600] },
  link: { primary: darkBlue[400], muted: gray[500] },
  background: {
    default: '#FFF',
    lightgrey: gray[50],
    code: gray[50],
    paper: gray[50],
    summary: gray[100]
  },
  mode: 'light'
} as Palette;

export const light: ThemeOptions = {
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
    MuiOutlinedInput: {
      styleOverrides: {
        ...overrides.MuiOutlinedInput.styleOverrides,
        root: {
          ...overrides.MuiOutlinedInput.styleOverrides.root,
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: `2px solid ${blue[500]}`,
            borderColor: blue[500]
          }
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
            background: palette.background.paper,
            color: '#0B132A',
            caretColor: '#3869FF'
          },
          [`& .${inputBaseClasses.input}::placeholder`]: {
            ...(overrides.MuiAutocomplete.styleOverrides.root[`& .${inputBaseClasses.input}::placeholder`] as object),
            color: gray[600]
          },
          ['.Mui-focused .MuiOutlinedInput-notchedOutline']: {
            border: `2px solid ${blue[500]} !important`
          },
          '.MuiAutocomplete-option': {
            backgroundColor: '#FFFFFFDE'
          }
        },
        popper: {
          ...(overrides.MuiAutocomplete.styleOverrides.popper as object)
        },
        noOptions: {
          ...(overrides.MuiAutocomplete.styleOverrides.noOptions as object)
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: gray[700],
          fontSize: 12,
          fontWeight: 500
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          ...overrides.MuiIconButton.styleOverrides,
          color: palette.text.primary
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: palette.text.primary
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          ...overrides.MuiDialog.styleOverrides.paper,
          backgroundColor: 'white',
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
           ...overrides.MuiDialogTitle.styleOverrides.root,
          borderBottom: `1px solid ${palette.border.secondary}`
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
          backgroundColor: palette.gray[50]
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          color: gray[700],
          fontWeight: 500,
          '&.Mui-selected': {
            color: '#0B132A', // MP text
            fontWeight: 700
          }
        }
      }
    }
  }
};
