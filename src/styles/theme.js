import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#f5ededc9', // Cara por que vermelho
    },
    secondary: {
      main: '#212121', // cinza escuro
    },
    background: {
      default: '#fafafa',
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, sans-serif',
  },
});