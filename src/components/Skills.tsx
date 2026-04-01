import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import {
  Storage,
  Web,
  Terminal,
  IntegrationInstructions,
} from "@mui/icons-material";

const skillGroups = [
  {
    category: "Frontend",
    icon: <Web sx={{ fontSize: 40 }} />,
    skills: ["HTML", "CSS", "TypeScript", "React", "Next.js", "Material UI"],
  },
  {
    category: "Backend",
    icon: <Storage sx={{ fontSize: 40 }} />,
    skills: [
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Prisma ORM",
      "Next.js API Routes",
    ],
  },
  {
    category: "DevOps & Tools",
    icon: <Terminal sx={{ fontSize: 40 }} />,
    skills: ["Git", "GitLab CI/CD", "Sentry", "Vercel", "Docker"],
  },
  {
    category: "Integrations",
    icon: <IntegrationInstructions sx={{ fontSize: 40 }} />,
    skills: ["OpenAI API", "LaunchDarkly", "AWS S3", "SendGrid", "Sentry"],
  },
];

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 10 },
        mb: { xs: 4, md: 8 },
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ 
              fontWeight: 900, 
              letterSpacing: "-0.02em",
              fontSize: { xs: "2rem", md: "3rem" } 
            }}
          >
            Tech Stack
          </Typography>          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto", fontWeight: 500 }}
          >
            A specialized toolkit for building high-performance, scalable
            applications.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ maxWidth: 2000, mx: "auto" }}>
          {skillGroups.map((group, index) => (
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
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 3,
                    borderRadius: 4,
                    border: "1px solid rgba(0,0,0,0.08)",
                    bgcolor: "white",
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "primary.main",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
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
                      flexShrink: 0,
                      borderRadius: 3,
                      bgcolor: "rgba(37, 99, 235, 0.05)",
                      color: "primary.main",
                    }}
                  >
                    {group.icon}
                  </Box>

                  <Box>
                    <Typography
                      variant="h5"
                      fontWeight="900"
                      sx={{ mb: 1.5, letterSpacing: "-0.01em" }}
                    >
                      {group.category}
                    </Typography>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                      {group.skills.map((skill) => (
                        <Typography
                          key={skill}
                          variant="body2"
                          sx={{
                            fontWeight: 700,
                            color: "text.secondary",
                            bgcolor: "rgba(0,0,0,0.03)",
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 2,
                            fontSize: "0.8rem",
                          }}
                        >
                          {skill}
                        </Typography>
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
