import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import HomeLab from "./components/HomeLab";
import Learning from "./components/Learning";
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
          <Navbar />
          <Hero />
          <Skills />
          <HomeLab />
          <Experience />
          <Learning />
          <Projects />
          <Education />
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
