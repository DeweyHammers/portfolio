import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2563eb", // Blue 600
      light: "#60a5fa",
      dark: "#1e40af",
    },
    secondary: {
      main: "#7c3aed", // Purple 600
      light: "#a78bfa",
      dark: "#5b21b6",
    },
    background: {
      default: "#f1f5f9", // Slate 100
      paper: "#ffffff",
    },
    text: {
      primary: "#0f172a", // Slate 900
      secondary: "#475569", // Slate 600
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em" },
    h3: { fontWeight: 700, color: "#0f172a", letterSpacing: "-0.01em" },
    h4: { fontWeight: 700, color: "#0f172a", letterSpacing: "-0.01em" },
    h5: { fontWeight: 600, color: "#0f172a" },
    h6: { fontWeight: 600, color: "#0f172a" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: "none",
          fontWeight: 600,
          padding: "10px 24px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          border: "1px solid rgba(0, 0, 0, 0.04)",
          background: "#ffffff",
          boxShadow:
            "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
