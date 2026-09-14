import {
  Box,
  Typography,
  Button,
  Stack,
  Container,
  Link as MuiLink,
  Avatar,
  Grid,
} from "@mui/material";
import { GitHub, Email, ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import profilePic from "../assets/me.jpg";
import { monoStack } from "../theme";

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(94, 234, 212, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(94, 234, 212, 0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ py: { xs: 12, md: 8 } }}>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  sx={{
                    fontFamily: monoStack,
                    fontSize: { xs: "0.85rem", md: "1rem" },
                    color: "text.secondary",
                    mb: 3,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  <Box component="span" sx={{ color: "text.disabled" }}>
                    ~/portfolio ${" "}
                  </Box>
                  <Box component="span" sx={{ color: "primary.main" }}>
                    whoami
                  </Box>
                </Typography>

                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: "3rem", sm: "4.5rem", md: "5.5rem" },
                    lineHeight: 1,
                    mb: 3,
                    letterSpacing: "-0.05em",
                    background:
                      "linear-gradient(135deg, #e6edf3 0%, #5eead4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textAlign: { xs: "center", md: "left" },
                    display: { xs: "block", md: "inline-block" },
                  }}
                >
                  Richard <br /> Dewey <br /> Hammers
                </Typography>
                <Box
                  component="span"
                  sx={{
                    "@keyframes blink": {
                      "0%, 49%": { opacity: 1 },
                      "50%, 100%": { opacity: 0 },
                    },
                    display: "inline-block",
                    width: { xs: "0.5em", md: "0.55em" },
                    height: { xs: "0.9em", md: "1em" },
                    bgcolor: "primary.main",
                    ml: 1,
                    verticalAlign: "baseline",
                    animation: "blink 1s step-end infinite",
                    boxShadow: "0 0 12px rgba(94, 234, 212, 0.5)",
                  }}
                />

                <Typography
                  sx={{
                    fontFamily: monoStack,
                    fontWeight: 600,
                    fontSize: { xs: "0.95rem", md: "1.15rem" },
                    color: "primary.main",
                    mt: 4,
                    mb: 3,
                    textAlign: { xs: "center", md: "left" },
                    letterSpacing: "-0.01em",
                  }}
                >
                  <Box component="span" sx={{ color: "text.disabled" }}>
                    &gt;{" "}
                  </Box>
                  Full-Stack Engineer moving into Cybersecurity
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    mb: 6,
                    maxWidth: "640px",
                    lineHeight: 1.75,
                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                    textAlign: { xs: "center", md: "left" },
                    mx: { xs: "auto", md: 0 },
                  }}
                >
                  I've spent 4+ years building and shipping production web
                  applications in TypeScript, Next.js, and PostgreSQL. Now I'm
                  working toward the Flatiron School Cybersecurity Professional
                  Certificate to move into cybersecurity, alongside a DevOps
                  track from Boot.dev.
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  justifyContent={{ xs: "center", md: "flex-start" }}
                  alignItems={{ xs: "stretch", sm: "center" }}
                >
                  <ScrollLink to="projects" smooth={true} duration={500}>
                    <Button
                      variant="contained"
                      size="large"
                      fullWidth
                      endIcon={<ArrowForward />}
                    >
                      View Projects
                    </Button>
                  </ScrollLink>

                  <MuiLink
                    href="https://github.com/DeweyHammers"
                    target="_blank"
                    underline="none"
                  >
                    <Button
                      variant="outlined"
                      size="large"
                      fullWidth
                      startIcon={<GitHub />}
                    >
                      GitHub
                    </Button>
                  </MuiLink>

                  <MuiLink
                    href="mailto:hammersdrichard@gmail.com"
                    underline="none"
                  >
                    <Button
                      variant="outlined"
                      size="large"
                      fullWidth
                      startIcon={<Email />}
                    >
                      Email
                    </Button>
                  </MuiLink>
                </Stack>
              </motion.div>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      width: { xs: 320, md: 440 },
                      height: { xs: 320, md: 440 },
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle, rgba(94, 234, 212, 0.15) 0%, transparent 65%)",
                      filter: "blur(30px)",
                      zIndex: 0,
                    }}
                  />
                  <Avatar
                    src={profilePic}
                    sx={{
                      width: { xs: 280, md: 400 },
                      height: { xs: 280, md: 400 },
                      border: "2px solid rgba(94, 234, 212, 0.3)",
                      boxShadow:
                        "0 0 0 6px rgba(94, 234, 212, 0.06), 0 30px 60px -20px rgba(0,0,0,0.8)",
                      zIndex: 1,
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
