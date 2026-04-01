import {
  Box,
  Typography,
  Button,
  Stack,
  Container,
  Link as MuiLink,
  Avatar,
  Grid,
  IconButton,
} from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
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
                  fontSize: { xs: "2.5rem", sm: "4rem", md: "5.5rem" },
                  lineHeight: { xs: 1.1, md: 1 },
                  mb: 3,
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
                variant="h5"
                sx={{
                  color: "text.secondary",
                  mb: 5,
                  fontWeight: 500,
                  maxWidth: "600px",
                  lineHeight: 1.6,
                  fontSize: { xs: "1.1rem", md: "1.5rem" },
                  textAlign: { xs: "center", md: "left" },
                  mx: { xs: "auto", md: 0 },
                }}
              >
                Husband, Father, and{" "}
                <Box
                  component="span"
                  sx={{ color: "primary.main", fontWeight: 800 }}
                >
                  Full-Stack Software Engineer
                </Box>{" "}
                passionate about building scalable, high-impact web applications.
              </Typography>

              <Stack
                direction="row"
                spacing={2}
                justifyContent={{ xs: "center", md: "flex-start" }}
                flexWrap="wrap"
                useFlexGap
              >
                <ScrollLink to="projects" smooth={true} duration={500}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: "1.1rem",
                      boxShadow: "0 10px 20px rgba(37, 99, 235, 0.2)",
                    }}
                  >
                    View My Work
                  </Button>
                </ScrollLink>
                <Stack direction="row" spacing={1}>
                  <MuiLink
                    href="https://github.com/DeweyHammers"
                    target="_blank"
                    color="inherit"
                  >
                    <IconButton
                      size="large"
                      sx={{ bgcolor: "rgba(0,0,0,0.03)" }}
                    >
                      <GitHub />
                    </IconButton>
                  </MuiLink>
                  <MuiLink
                    href="https://www.linkedin.com/in/richard-dewey-hammers/"
                    target="_blank"
                    color="inherit"
                  >
                    <IconButton
                      size="large"
                      sx={{ bgcolor: "rgba(0,0,0,0.03)" }}
                    >
                      <LinkedIn />
                    </IconButton>
                  </MuiLink>
                  <MuiLink
                    href="mailto:hammersdrichard@gmail.com"
                    color="inherit"
                  >
                    <IconButton
                      size="large"
                      sx={{ bgcolor: "rgba(0,0,0,0.03)" }}
                    >
                      <Email />
                    </IconButton>
                  </MuiLink>
                </Stack>
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
