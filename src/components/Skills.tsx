import { Box, Typography, Container, Grid, Paper, Chip } from "@mui/material";
import { motion } from "framer-motion";
import {
  Storage,
  Web,
  IntegrationInstructions,
  AutoAwesome,
  Cloud,
  Code,
} from "@mui/icons-material";

const skillGroups = [
  {
    category: "Languages",
    icon: <Code sx={{ fontSize: 40 }} />,
    skills: ["TypeScript", "JavaScript"],
  },
  {
    category: "Frontend",
    icon: <Web sx={{ fontSize: 40 }} />,
    skills: ["HTML", "CSS", "React", "Next.js", "Material UI", "Zod"],
  },
  {
    category: "Backend",
    icon: <IntegrationInstructions sx={{ fontSize: 40 }} />,
    skills: ["Node.js", "REST API Development"],
  },
  {
    category: "Database",
    icon: <Storage sx={{ fontSize: 40 }} />,
    skills: ["Prisma", "PostgreSQL", "SQL"],
  },
  {
    category: "Cloud & Tools",
    icon: <Cloud sx={{ fontSize: 40 }} />,
    skills: ["AWS S3", "Git", "Vercel", "Supabase", "Sentry", "Jest"],
  },
  {
    category: "AI",
    icon: <AutoAwesome sx={{ fontSize: 40 }} />,
    skills: [
      "Google Gemini & CLI",
      "OpenAI",
      "Prompt Engineering",
      "RAG",
      "AI Workflows",
    ],
  },
];

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        pt: { xs: 12, md: 15 },
        pb: { xs: 15, md: 25 },
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        bgcolor: "background.paper",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)",
          backgroundSize: "40px 40px",
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: "-10%",
          left: "20%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
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
            <Typography
              variant="subtitle2"
              fontWeight="800"
              letterSpacing="0.05em"
            >
              TECH STACK
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
            Modern Toolkit
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: 700,
              mx: "auto",
              fontWeight: 500,
              color: "text.secondary",
              lineHeight: 1.6,
            }}
          >
            I leverage a modern, high-performance ecosystem to build scalable
            and maintainable software solutions.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ maxWidth: 1200, mx: "auto" }}>
          {skillGroups.map((group, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    borderRadius: 4,
                    border: "1px solid rgba(0,0,0,0.06)",
                    background: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(8px)",
                    height: "100%",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      borderColor: "primary.light",
                      transform: "translateY(-4px)",
                      boxShadow: "0 12px 30px -10px rgba(0,0,0,0.08)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      bgcolor: "rgba(37, 99, 235, 0.04)",
                      color: "primary.main",
                    }}
                  >
                    {group.icon}
                  </Box>

                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight="800"
                      sx={{ mb: 2, color: "text.primary" }}
                    >
                      {group.category}
                    </Typography>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {group.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          variant="outlined"
                          sx={{
                            fontWeight: 600,
                            color: "text.secondary",
                            bgcolor: "rgba(0,0,0,0.01)",
                            borderColor: "rgba(0,0,0,0.06)",
                            "&:hover": {
                              bgcolor: "white",
                              borderColor: "primary.main",
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
