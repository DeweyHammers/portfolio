import { createTheme } from "@mui/material/styles";

export const monoStack =
  '"JetBrains Mono", "Fira Code", ui-monospace, "Menlo", monospace';
export const sansStack =
  '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif';

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5eead4", // teal-300
      light: "#99f6e4",
      dark: "#14b8a6",
      contrastText: "#0a0a0f",
    },
    secondary: {
      main: "#fbbf24", // amber-400
      light: "#fcd34d",
      dark: "#f59e0b",
      contrastText: "#0a0a0f",
    },
    background: {
      default: "#0d1117",
      paper: "#181d27",
    },
    text: {
      primary: "#e6edf3",
      secondary: "#8b949e",
      disabled: "#6e7681",
    },
    divider: "rgba(255, 255, 255, 0.06)",
  },
  typography: {
    fontFamily: sansStack,
    h1: { fontWeight: 900, letterSpacing: "-0.04em" },
    h2: { fontWeight: 800, letterSpacing: "-0.03em" },
    h3: { fontWeight: 800, letterSpacing: "-0.03em" },
    h4: { fontWeight: 800, letterSpacing: "-0.02em" },
    h5: { fontWeight: 700, letterSpacing: "-0.01em" },
    h6: { fontWeight: 700 },
    body1: { color: "#c9d1d9" },
    body2: { color: "#8b949e" },
    overline: {
      fontFamily: monoStack,
      letterSpacing: "0.15em",
      fontWeight: 600,
    },
    subtitle2: {
      fontFamily: monoStack,
      letterSpacing: "0.1em",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: "smooth" },
        body: {
          backgroundColor: "#0d1117",
        },
        "::selection": {
          background: "rgba(94, 234, 212, 0.25)",
          color: "#e6edf3",
        },
        "*::-webkit-scrollbar": { width: "10px", height: "10px" },
        "*::-webkit-scrollbar-track": { background: "#0d1117" },
        "*::-webkit-scrollbar-thumb": {
          background: "rgba(94, 234, 212, 0.15)",
          borderRadius: "10px",
        },
        "*::-webkit-scrollbar-thumb:hover": {
          background: "rgba(94, 234, 212, 0.3)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          textTransform: "none",
          fontWeight: 600,
          fontFamily: monoStack,
          padding: "10px 20px",
          letterSpacing: "0.02em",
        },
        containedPrimary: {
          background: "#5eead4",
          color: "#0a0a0f",
          "&:hover": {
            background: "#99f6e4",
            boxShadow: "0 0 24px rgba(94, 234, 212, 0.35)",
          },
        },
        outlined: {
          borderColor: "rgba(255, 255, 255, 0.12)",
          color: "#e6edf3",
          "&:hover": {
            borderColor: "#5eead4",
            color: "#5eead4",
            background: "rgba(94, 234, 212, 0.05)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          border: "1px solid rgba(255, 255, 255, 0.06)",
          background: "#181d27",
          boxShadow: "none",
          backgroundImage: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: monoStack,
          fontWeight: 500,
          borderRadius: 4,
          fontSize: "0.7rem",
          height: 24,
          letterSpacing: "0.02em",
        },
        outlined: {
          borderColor: "rgba(255, 255, 255, 0.1)",
          color: "#c9d1d9",
        },
      },
    },
  },
});

export default theme;
