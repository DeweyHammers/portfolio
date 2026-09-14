import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Security, Terminal } from "@mui/icons-material";
import { monoStack } from "../theme";

const learningTracks = [
  {
    program: "Flatiron School",
    title: "Cybersecurity Professional Certificate",
    description:
      "Multi-course program covering networking fundamentals, security operations, offensive security, and incident response. Hands-on labs across Linux, Python, SIEM tooling, and industry-standard pen testing tools.",
    icon: <Security sx={{ fontSize: 28 }} />,
    topics: [
      "Networking (TCP/IP, DNS, Subnetting)",
      "Linux Administration",
      "Python for Security",
      "SIEM & Threat Hunting",
      "MITRE ATT&CK",
      "Incident Response",
      "Digital Forensics",
      "Penetration Testing",
      "Nmap, Burp Suite, Metasploit",
      "System Hardening",
      "Zero-Trust Architecture",
    ],
  },
  {
    program: "Boot.dev",
    title: "DevOps Path",
    description:
      "Infrastructure and automation fundamentals to complement the cybersecurity track — cloud platforms, containers, orchestration, and delivery pipelines.",
    icon: <Terminal sx={{ fontSize: 28 }} />,
    topics: [
      "Python",
      "Go",
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Linux",
      "Shell Scripting",
    ],
  },
];

const Learning = () => {
  return (
    <Box
      id="learning"
      sx={{
        pt: { xs: 10, md: 14 },
        pb: { xs: 10, md: 14 },
        display: "flex",
        flexDirection: "column",
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "-10%",
          right: "5%",
          width: "550px",
          height: "550px",
          background:
            "radial-gradient(circle, rgba(94, 234, 212, 0.05) 0%, transparent 70%)",
          filter: "blur(70px)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            sx={{
              fontFamily: monoStack,
              fontSize: { xs: "0.8rem", md: "0.9rem" },
              color: "text.secondary",
              mb: 2,
            }}
          >
            <Box component="span" sx={{ color: "text.disabled" }}>
              ~/learning ${" "}
            </Box>
            <Box component="span" sx={{ color: "primary.main" }}>
              cat in-progress.md
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
            Currently{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Learning
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 720,
              mx: "auto",
              lineHeight: 1.7,
              color: "text.secondary",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
            }}
          >
            Actively working through both programs to move from full-stack
            engineering into cybersecurity.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {learningTracks.map((track, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={track.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    height: "100%",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "rgba(94, 234, 212, 0.4)",
                      boxShadow: "0 0 32px rgba(94, 234, 212, 0.06)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 3,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 48,
                        height: 48,
                        borderRadius: 1,
                        bgcolor: "rgba(94, 234, 212, 0.08)",
                        color: "primary.main",
                        border: "1px solid rgba(94, 234, 212, 0.15)",
                      }}
                    >
                      {track.icon}
                    </Box>
                    <Box
                      sx={{
                        fontFamily: monoStack,
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        color: "secondary.main",
                        px: 1.25,
                        py: 0.5,
                        borderRadius: 0.75,
                        background: "rgba(251, 191, 36, 0.08)",
                        border: "1px solid rgba(251, 191, 36, 0.25)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.75,
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          "@keyframes pulse": {
                            "0%, 100%": { opacity: 1 },
                            "50%": { opacity: 0.3 },
                          },
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          bgcolor: "secondary.main",
                          animation: "pulse 1.5s ease-in-out infinite",
                        }}
                      />
                      IN PROGRESS
                    </Box>
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: monoStack,
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      color: "primary.main",
                      textTransform: "uppercase",
                      mb: 0.75,
                    }}
                  >
                    {track.program}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      color: "text.primary",
                      mb: 2,
                      fontSize: { xs: "1.4rem", md: "1.65rem" },
                    }}
                  >
                    {track.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.7,
                      fontSize: "0.95rem",
                      mb: 3,
                    }}
                  >
                    {track.description}
                  </Typography>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                    {track.topics.map((topic) => (
                      <Box
                        key={topic}
                        sx={{
                          fontFamily: monoStack,
                          fontSize: "0.72rem",
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
                        {topic}
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

export default Learning;
