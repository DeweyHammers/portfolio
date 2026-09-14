import {
  Box,
  Typography,
  Container,
  Paper,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { monoStack } from "../theme";

type Job = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  tech?: string[];
};

const experiences: Job[] = [
  {
    company: "Vons",
    role: "Deli Clerk",
    location: "Oakhurst, CA, USA",
    period: "May 2026 – Present",
    bullets: [
      "Serve 50+ customers per shift in a high-volume deli, handling made-to-order prep, slicing, and case management while maintaining order accuracy during peak periods.",
    ],
  },
  {
    company: "Ksense Technology Group",
    role: "Full-Stack Software Engineer",
    location: "Remote",
    period: "Dec 2021 – Jan 2026",
    bullets: [
      "Built and maintained 10 production full-stack applications in TypeScript, Next.js, and Node.js, reducing load times on data-heavy interfaces through query optimization and render-path improvements.",
      "Developed and optimized APIs and database queries using Prisma and PostgreSQL, improving API response times by up to 40% and reducing overall backend load.",
      "Implemented server-side filtering, sorting, and pagination to replace client-side handling, keeping response times under 10ms across datasets of 1000+ records.",
    ],
    tech: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "GitLab",
      "Sentry",
      "Google Gemini & CLI",
      "OpenAI",
    ],
  },
  {
    company: "Raley's",
    role: "Courtesy Clerk / Deli / Night Crew",
    location: "Oakhurst, CA",
    period: "Sep 2013 – Nov 2021",
    bullets: [
      "Rotated across three departments over 8 years, covering 5 shifts per week and stepping into short-notice coverage to keep departments staffed through peak and overnight hours.",
    ],
  },
];

const Experience = () => {
  return (
    <Box
      id="experience"
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
          top: "10%",
          right: "5%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(251, 191, 36, 0.05) 0%, transparent 70%)",
          filter: "blur(70px)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            sx={{
              fontFamily: monoStack,
              fontSize: { xs: "0.8rem", md: "0.9rem" },
              color: "text.secondary",
              mb: 2,
            }}
          >
            <Box component="span" sx={{ color: "text.disabled" }}>
              ~/experience ${" "}
            </Box>
            <Box component="span" sx={{ color: "primary.main" }}>
              git log --oneline
            </Box>
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "text.primary",
              mb: 2,
            }}
          >
            Professional{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              History
            </Box>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2.5, md: 3 },
            maxWidth: 1000,
            mx: "auto",
          }}
        >
          {experiences.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    borderColor: "rgba(94, 234, 212, 0.25)",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "3px",
                    height: "100%",
                    background:
                      "linear-gradient(180deg, #5eead4, transparent)",
                  },
                }}
              >
                <Grid container spacing={{ xs: 2, md: 4 }}>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        letterSpacing: "-0.02em",
                        color: "text.primary",
                        fontSize: { xs: "1.15rem", md: "1.3rem" },
                        lineHeight: 1.2,
                        mb: 0.75,
                      }}
                    >
                      {job.company}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: monoStack,
                        color: "text.secondary",
                        fontSize: { xs: "0.8rem", md: "0.85rem" },
                        lineHeight: 1.5,
                      }}
                    >
                      {job.role}
                    </Typography>
                  </Grid>

                  <Grid size={{ xs: 12, md: 8 }}>
                    <Typography
                      sx={{
                        fontFamily: monoStack,
                        fontSize: { xs: "0.72rem", md: "0.78rem" },
                        color: "primary.main",
                        letterSpacing: "0.05em",
                        mb: 1.5,
                      }}
                    >
                      {job.period}
                      <Box
                        component="span"
                        sx={{ color: "text.disabled", mx: 1 }}
                      >
                        ·
                      </Box>
                      <Box
                        component="span"
                        sx={{ color: "text.secondary" }}
                      >
                        {job.location}
                      </Box>
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                      }}
                    >
                      {job.bullets.map((text, i) => (
                        <Box
                          key={i}
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 1,
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              fontFamily: monoStack,
                              color: "primary.main",
                              fontWeight: 700,
                              fontSize: { xs: "0.85rem", md: "0.9rem" },
                              lineHeight: 1.7,
                              flexShrink: 0,
                            }}
                          >
                            &gt;
                          </Box>
                          <Typography
                            sx={{
                              color: "text.secondary",
                              fontSize: { xs: "0.85rem", md: "0.92rem" },
                              lineHeight: 1.65,
                            }}
                          >
                            {text}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {job.tech && job.tech.length > 0 && (
                      <Box
                        sx={{
                          mt: 2.5,
                          pt: 2.5,
                          borderTop: "1px solid rgba(255,255,255,0.06)",
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 0.75,
                        }}
                      >
                        {job.tech.map((t) => (
                          <Box
                            key={t}
                            sx={{
                              fontFamily: monoStack,
                              fontSize: "0.7rem",
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
                            <Box
                              component="span"
                              sx={{ color: "text.disabled" }}
                            >
                              [
                            </Box>
                            {t}
                            <Box
                              component="span"
                              sx={{ color: "text.disabled" }}
                            >
                              ]
                            </Box>
                          </Box>
                        ))}
                      </Box>
                    )}
                  </Grid>
                </Grid>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
