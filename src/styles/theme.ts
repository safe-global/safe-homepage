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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1630,
    },
  },
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
      fontSize: '50px',
      lineHeight: '56px',

      '@media (min-width:600px)': {
        fontSize: '90px',
        lineHeight: '100px',
      },
    },
    h2: {
      fontSize: '44px',
      lineHeight: '56px',

      '@media (min-width:600px)': {
        fontSize: '60px',
        lineHeight: '64px',
      },
    },
    h3: {
      fontSize: '40px',
      lineHeight: '44px',

      '@media (min-width:600px)': {
        fontSize: '48px',
        lineHeight: '56px',
      },
    },
    h4: {
      fontSize: '32px',
      lineHeight: '36px',
    },
    h5: {
      fontSize: '24px',
      lineHeight: '32px',
    },
    body1: {
      fontSize: '20px',
      lineHeight: '28px',
      fontWeight: 300,
    },
    body2: {
      fontSize: '15px',
      lineHeight: '24px',
      fontWeight: 300,
    },
    caption: {
      fontSize: '14px',
      lineHeight: '24px',
      letterSpacing: '0.1em',
      fontWeight: 500,
      textTransform: 'uppercase',
      color: palette.primary.light,
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
        root: {
          color: palette.border.main,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        fixed: true,
        maxWidth: 'xl',
        disableGutters: true,
      },
      styleOverrides: {
        root: {
          paddingLeft: '15px',
          paddingRight: '15px',

          '@media (min-width:1630px)': {
            paddingLeft: '24px',
            paddingRight: '24px',
          },
        },
      },
    },
  },
})
