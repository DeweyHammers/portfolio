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
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        bgcolor: "background.default",
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
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 0)",
          backgroundSize: "40px 40px",
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.03) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            py: { xs: 12, md: 8 },
          }}
        >
          <Grid container spacing={6} alignItems="center">
            {/* LEFT SIDE: Name & Tagline */}
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: "3rem", sm: "4.5rem", md: "5.5rem" },
                    lineHeight: 1,
                    mb: 3,
                    letterSpacing: "-0.04em",
                    background:
                      "linear-gradient(135deg, #0f172a 0%, #2563eb 100%)",
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
                    fontWeight: 700,
                    fontSize: { xs: "1.25rem", md: "1.75rem" },
                    color: "primary.main",
                    mb: 4,
                    textAlign: { xs: "center", md: "left" },
                    maxWidth: "600px",
                    lineHeight: 1.3,
                  }}
                >
                  Full-Stack Engineer building scalable, <br />
                  high-performance web applications
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    mb: 6,
                    maxWidth: "700px",
                    lineHeight: 1.8,
                    fontSize: { xs: "1rem", md: "1.125rem" },
                    textAlign: { xs: "center", md: "left" },
                    mx: { xs: "auto", md: 0 },
                  }}
                >
                  I work primarily with TypeScript, Next.js, and PostgreSQL, and
                  have spent the last 4+ years building and shipping production
                  applications, including systems that integrate AI features
                  into real-world workflows.
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
                      sx={{
                        boxShadow: "0 10px 20px -5px rgba(37, 99, 235, 0.3)",
                        "&:hover": {
                          boxShadow: "0 15px 25px -5px rgba(37, 99, 235, 0.4)",
                          transform: "translateY(-2px)",
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
                      size="large"
                      fullWidth
                      startIcon={<GitHub />}
                      sx={{
                        borderColor: "rgba(0,0,0,0.1)",
                        color: "text.primary",
                        "&:hover": {
                          borderColor: "primary.main",
                          bgcolor: "rgba(37, 99, 235, 0.02)",
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
                      variant="outlined"
                      size="large"
                      fullWidth
                      startIcon={<Email />}
                      sx={{
                        borderColor: "rgba(0,0,0,0.1)",
                        color: "text.primary",
                        "&:hover": {
                          borderColor: "primary.main",
                          bgcolor: "rgba(37, 99, 235, 0.02)",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      Email
                    </Button>
                  </MuiLink>
                </Stack>
              </motion.div>
            </Grid>

            {/* RIGHT SIDE: Profile Image */}
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
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
                  <Avatar
                    src={profilePic}
                    sx={{
                      width: { xs: 280, md: 400 },
                      height: { xs: 280, md: 400 },
                      border: "8px solid white",
                      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
                      zIndex: 1,
                    }}
                  />
                  {/* Decorative background element */}
                  <Box
                    sx={{
                      position: "absolute",
                      width: "110%",
                      height: "110%",
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle, rgba(37, 99, 235, 0.03) 0%, transparent 70%)",
                      zIndex: 0,
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
