import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "./theme";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
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
          background:
            "linear-gradient(135deg, #f0f7ff 0%, #ffffff 50%, #f5f3ff 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Hero />
          <Skills />
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
