import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import {
  Storage,
  Web,
  IntegrationInstructions,
  Psychology,
  Cloud,
  Code,
} from "@mui/icons-material";
import { monoStack } from "../theme";

const skillGroups = [
  {
    category: "Languages",
    icon: <Code sx={{ fontSize: 24 }} />,
    skills: ["TypeScript", "JavaScript", "Python"],
  },
  {
    category: "Frontend",
    icon: <Web sx={{ fontSize: 24 }} />,
    skills: ["HTML", "CSS", "React", "Next.js", "Material UI", "Zod"],
  },
  {
    category: "Backend",
    icon: <IntegrationInstructions sx={{ fontSize: 24 }} />,
    skills: ["Node.js", "REST API Development"],
  },
  {
    category: "Database",
    icon: <Storage sx={{ fontSize: 24 }} />,
    skills: ["Prisma", "PostgreSQL", "SQL"],
  },
  {
    category: "Cloud & Tools",
    icon: <Cloud sx={{ fontSize: 24 }} />,
    skills: ["AWS S3", "Git", "Vercel", "Supabase", "Sentry", "Jest"],
  },
  {
    category: "AI",
    icon: <Psychology sx={{ fontSize: 24 }} />,
    skills: [
      "Google Gemini & CLI",
      "OpenAI",
      "Prompt Engineering",
      "RAG",
      "AI Workflows",
    ],
  },
];

const SectionEyebrow = ({ command }: { command: string }) => (
  <Typography
    sx={{
      fontFamily: monoStack,
      fontSize: { xs: "0.8rem", md: "0.9rem" },
      color: "text.secondary",
      textAlign: "center",
      mb: 2,
    }}
  >
    <Box component="span" sx={{ color: "text.disabled" }}>
      ~ ${" "}
    </Box>
    <Box component="span" sx={{ color: "primary.main" }}>
      {command}
    </Box>
  </Typography>
);

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        pt: { xs: 10, md: 14 },
        pb: { xs: 10, md: 14 },
        display: "flex",
        flexDirection: "column",
        position: "relative",
        bgcolor: "#12161f",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-10%",
          left: "10%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(94, 234, 212, 0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <SectionEyebrow command="cat stack.md" />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "text.primary",
              mb: 2,
            }}
          >
            Tech <Box component="span" sx={{ color: "primary.main" }}>Stack</Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 640,
              mx: "auto",
              color: "text.secondary",
              lineHeight: 1.7,
              fontSize: { xs: "0.95rem", md: "1.05rem" },
            }}
          >
            Production-grade tools I've shipped with over the last 4+ years.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {skillGroups.map((group, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={group.category}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2.5,
                    height: "100%",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "rgba(94, 234, 212, 0.4)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 0 32px rgba(94, 234, 212, 0.06)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 40,
                        height: 40,
                        borderRadius: 1,
                        bgcolor: "rgba(94, 234, 212, 0.08)",
                        color: "primary.main",
                        border: "1px solid rgba(94, 234, 212, 0.15)",
                      }}
                    >
                      {group.icon}
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: monoStack,
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "text.primary",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {group.category}
                    </Typography>
                  </Box>

                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mt: 0 }}
                  >
                    {group.skills.map((skill) => (
                      <Box
                        key={skill}
                        sx={{
                          fontFamily: monoStack,
                          fontSize: "0.75rem",
                          fontWeight: 500,
                          color: "text.secondary",
                          px: 1,
                          py: 0.4,
                          borderRadius: 0.75,
                          border: "1px solid rgba(255,255,255,0.08)",
                          background: "rgba(255,255,255,0.02)",
                          transition: "all 0.2s ease",
                          "&:hover": {
                            color: "primary.main",
                            borderColor: "rgba(94, 234, 212, 0.35)",
                            background: "rgba(94, 234, 212, 0.06)",
                          },
                        }}
                      >
                        <Box component="span" sx={{ color: "text.disabled" }}>
                          [
                        </Box>
                        {skill}
                        <Box component="span" sx={{ color: "text.disabled" }}>
                          ]
                        </Box>
                      </Box>
                    ))}
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
