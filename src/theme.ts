import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2563eb', // Modern Blue
    },
    secondary: {
      main: '#7c3aed', // Modern Purple
    },
    background: {
      default: '#f8fafc',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          border: '1px solid rgba(255, 255, 255, 0.3)',
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        },
      },
    },
  },
});

export default theme;
