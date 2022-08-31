import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    black: string;
    violet: string;
    blue: string;
    orange: string;
    red: string;
    green: {
      main: string;
      darker: string;
    }
    white: string;
    bgr: string;
  }
}

export const mainTheme = createTheme({
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
    bgr: '#f1f2f1',
  },
});
