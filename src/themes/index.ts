import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    black: string
    violet: string
    blue: string
    orange: string
    red: string
    green: {
      main: string
      darker: string
    }
    white: string
    bgr: string
  }

  interface PaletteOptions {
    black: string
    violet: string
    blue: string
    orange: string
    red: string
    green: {
      main: string
      darker: string
    }
    white: string
    bgr: string
  }
}

export const mainTheme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(',')
  },
  palette: {
    black: '#1d283a',
    violet: '#d4ccf1',
    blue: '#69b0ff',
    orange: '#f08e5b',
    red: '#ee5e5e',
    green: {
      main: '#b2d0ad',
      darker: '#539713'
    },
    white: '#ffffff',
    bgr: '#f5f5f5'
  }
})
