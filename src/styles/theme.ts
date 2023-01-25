import { createTheme } from '@mui/material/styles'
import type { Shadows } from '@mui/material/styles'

import { palette } from '@/styles/palette'

declare module '@mui/material/styles' {
  // Custom color palettes
  interface Palette {
    border: Palette['primary']
    logo: Palette['primary']
    backdrop: Palette['primary']
    static: Palette['primary']
  }
  interface PaletteOptions {
    border: PaletteOptions['primary']
    logo: PaletteOptions['primary']
    backdrop: PaletteOptions['primary']
    static: PaletteOptions['primary']
  }

  interface TypeBackground {
    main: string
    light: string
  }

  // Custom color properties
  interface PaletteColor {
    background?: string
  }
  interface SimplePaletteColorOptions {
    background?: string
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    background: true
  }
}

export const theme = createTheme({
  palette: {
    mode: 'dark',
    ...palette,
  },
  spacing: 8,
  shape: {
    borderRadius: 6,
  },
  shadows: ['none', `0 0 2px ${palette.primary.light}`, ...Array(23).fill('none')] as Shadows,
  typography: {
    fontFamily: 'Citerne, sans-serif',
    h1: {
      fontSize: '60px',
      lineHeight: '64px',
      fontWeight: 400,
    },
    h2: {
      fontSize: '27px',
      lineHeight: '34px',
    },
    h3: {
      fontSize: '24px',
      lineHeight: '30px',
    },
    h4: {
      fontSize: '20px',
      lineHeight: '26px',
    },
    h5: {
      fontSize: '16px',
    },
    body1: {
      fontSize: '18px',
      lineHeight: '28px',
    },
    body2: {
      fontSize: '14px',
      lineHeight: '24px',
    },
    caption: {
      fontSize: '12px',
      lineHeight: '24px',
      letterSpacing: '0.1em',
      fontWeight: 500,
      textTransform: 'uppercase',
      color: palette.primary.light,
    },
    overline: {
      fontSize: '11px',
      lineHeight: '14px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeSmall: {
          width: '1rem',
          height: '1rem',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        sizeLarge: {
          fontSize: '18px',
          lineHeight: '26px',
          padding: '15px 22px',
        },
        root: {
          textTransform: 'inherit',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'inherit',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '15px',
          paddingRight: '15px',
        },
      },
    },
  },
})
