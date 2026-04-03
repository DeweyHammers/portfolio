import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import {
  AutoAwesome,
  Speed,
  Code,
  Psychology,
  Search,
} from "@mui/icons-material";

const aiHighlights = [
  {
    title: "Rapid Prototyping & Debugging",
    description:
      "I use AI to quickly scaffold new features and identify edge cases, significantly reducing the time from concept to code.",
    icon: <Speed sx={{ fontSize: 32 }} />,
  },
  {
    title: "Refactoring & Optimization",
    description:
      "Leveraging AI tools to identify performance bottlenecks and refactor legacy code for better maintainability and readability.",
    icon: <Code sx={{ fontSize: 32 }} />,
  },
  {
    title: "Structured Logic & API Design",
    description:
      "Generating robust backend logic and API patterns that adhere to industry standards and best practices.",
    icon: <Psychology sx={{ fontSize: 32 }} />,
  },
  {
    title: "Strategic Problem Solving",
    description:
      "Exploring alternative technical approaches and architectural solutions to ensure the most efficient path forward.",
    icon: <Search sx={{ fontSize: 32 }} />,
  },
];

const AIDevelopment = () => {
  return (
    <Box
      id="ai-development"
      sx={{
        pt: { xs: 12, md: 15 },
        pb: { xs: 15, md: 25 },
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        bgcolor: "background.default",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.05), transparent)",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
              px: 2.5,
              py: 1,
              borderRadius: 50,
              bgcolor: "rgba(37, 99, 235, 0.1)",
              border: "1px solid rgba(37, 99, 235, 0.2)",
              color: "primary.dark",
              mb: 3,
            }}
          >
            <AutoAwesome sx={{ fontSize: 16 }} />
            <Typography variant="subtitle2" fontWeight="800" letterSpacing="0.05em">
              AI INTEGRATION
            </Typography>
          </Box>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "text.primary",
            }}
          >
            Intelligent Workflow
          </Typography>
          <Typography
            variant="h6"
            sx={{ maxWidth: 800, mx: "auto", fontWeight: 500, lineHeight: 1.6, color: "text.secondary" }}
          >
            I leverage artificial intelligence to accelerate development cycles 
            and implement smart features that solve complex user problems.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {aiHighlights.map((highlight, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    border: "1px solid rgba(0,0,0,0.05)",
                    background: "white",
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "primary.light",
                      transform: "translateY(-4px)",
                      boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 56,
                      height: 56,
                      borderRadius: 3,
                      bgcolor: "rgba(37, 99, 235, 0.05)",
                      color: "primary.main",
                      mb: 2.5,
                    }}
                  >
                    {highlight.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    fontWeight="900"
                    gutterBottom
                    sx={{ letterSpacing: "-0.01em", color: "text.primary" }}
                  >
                    {highlight.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 500, lineHeight: 1.7, color: "text.secondary" }}
                  >
                    {highlight.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AIDevelopment;
