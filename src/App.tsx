import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "./theme";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import AIDevelopment from "./components/AIDevelopment";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: (theme) => theme.palette.background.default,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Hero />
          <Skills />
          <AIDevelopment />
          <Experience />
          <Education />
          <Projects />
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
