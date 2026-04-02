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
import { GitHub, Email } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import profilePic from "../assets/me.jpg";

const Hero = () => {
  return (
    <Container maxWidth="lg" id="home" sx={{ mb: { xs: 4, md: 8 } }}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          pt: { xs: 12, md: 8 },
          pb: 8,
        }}
      >
        <Grid container spacing={6} alignItems="center">
          {/* LEFT SIDE: Name & Tagline */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "2.5rem", sm: "4rem", md: "5rem" },
                  lineHeight: { xs: 1.1, md: 1 },
                  mb: 2,
                  letterSpacing: "-0.04em",
                  background:
                    "linear-gradient(135deg, #1e293b 0%, #2563eb 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Richard <br /> Dewey <br /> Hammers
              </Typography>

              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1.1rem", md: "1.5rem" },
                  color: "primary.main",
                  mb: 3,
                  textAlign: { xs: "center", md: "left" },
                  maxWidth: { md: "max-content" },
                }}
              >
                Full-Stack Engineer building scalable, <br /> high-performance
                web applications
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "text.primary",
                  mb: 2,
                  fontWeight: 600,
                  maxWidth: "600px",
                  lineHeight: 1.5,
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  textAlign: { xs: "center", md: "left" },
                  mx: { xs: "auto", md: 0 },
                }}
              >
                I work primarily with TypeScript, Next.js, and PostgreSQL, and
                have spent the last 4+ years building and shipping production
                applications, including systems that integrate AI features into
                real-world workflows.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  mb: 5,
                  maxWidth: "600px",
                  lineHeight: 1.6,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  textAlign: { xs: "center", md: "left" },
                  mx: { xs: "auto", md: 0 },
                }}
              >
                I’m a full-stack developer focused on solving practical
                problems, optimizing systems, and building applications people
                actually use.
              </Typography>

              <Stack
                direction="row"
                spacing={{ xs: 1, sm: 2 }}
                justifyContent={{ xs: "center", md: "flex-start" }}
                alignItems="center"
                useFlexGap
              >
                <ScrollLink to="projects" smooth={true} duration={500}>
                  <Button
                    variant="contained"
                    size="medium"
                    sx={{
                      px: { xs: 1.5, sm: 4 },
                      py: { xs: 1, sm: 1.5 },
                      fontSize: { xs: "0.85rem", sm: "1rem" },
                      fontWeight: 700,
                      textTransform: "none",
                      borderRadius: 2,
                      whiteSpace: "nowrap",
                      boxShadow: "0 10px 20px rgba(37, 99, 235, 0.15)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 15px 30px rgba(37, 99, 235, 0.25)",
                      },
                    }}
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
                    size="medium"
                    startIcon={
                      <GitHub sx={{ display: { xs: "none", sm: "block" } }} />
                    }
                    sx={{
                      px: { xs: 1.5, sm: 3 },
                      py: { xs: 1, sm: 1.5 },
                      fontSize: { xs: "0.85rem", sm: "1rem" },
                      fontWeight: 700,
                      textTransform: "none",
                      borderRadius: 2,
                      borderColor: "rgba(0,0,0,0.1)",
                      color: "text.primary",
                      whiteSpace: "nowrap",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "primary.main",
                        bgcolor: "rgba(37, 99, 235, 0.04)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    GitHub
                  </Button>
                </MuiLink>

                <MuiLink
                  href="mailto:hammersdrichard@gmail.com"
                  underline="none"
                >
                  <Button
                    variant="text"
                    size="medium"
                    startIcon={
                      <Email sx={{ display: { xs: "none", sm: "block" } }} />
                    }
                    sx={{
                      px: { xs: 1, sm: 2 },
                      py: { xs: 1, sm: 1.5 },
                      fontSize: { xs: "0.85rem", sm: "1rem" },
                      fontWeight: 700,
                      textTransform: "none",
                      borderRadius: 2,
                      color: "text.secondary",
                      whiteSpace: "nowrap",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "primary.main",
                        bgcolor: "rgba(0,0,0,0.02)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Contact
                  </Button>
                </MuiLink>
              </Stack>
            </motion.div>
          </Grid>

          {/* RIGHT SIDE: Profile Image */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {/* Decorative Elements */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -20,
                    right: -20,
                    width: "100%",
                    height: "100%",
                    border: "2px solid rgba(37, 99, 235, 0.2)",
                    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                    zIndex: 0,
                    display: { xs: "none", md: "block" },
                  }}
                />

                <Avatar
                  src={profilePic}
                  sx={{
                    width: { xs: 280, md: 420 },
                    height: { xs: 280, md: 420 },
                    border: "12px solid white",
                    boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
                    zIndex: 1,
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Hero;
