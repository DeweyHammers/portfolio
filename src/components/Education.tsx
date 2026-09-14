import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Grid,
  Dialog,
  IconButton,
} from "@mui/material";
import { Close, Security } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { monoStack } from "../theme";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import flatironCert from "../assets/certificate-of-completion.jpg";
import ccbcDiploma from "../assets/ccbc-diploma.jpg";

const Education = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOpenImage = (image: string) => setSelectedImage(image);
  const handleCloseImage = () => setSelectedImage(null);

  const educationData: {
    institution: string;
    degree: string;
    description: string;
    certTitle: string;
    year: string;
    image?: string;
  }[] = [
    {
      institution: "Flatiron School",
      degree: "Cybersecurity Professional Certificate",
      description:
        "Multi-course program covering networking fundamentals, security operations, offensive security, and incident response — building toward a career transition into cybersecurity.",
      certTitle: "Certificate",
      year: "In Progress",
    },
    {
      institution: "Flatiron School",
      degree: "Full Stack Web Development",
      description:
        "Intensive software engineering program focused on full-stack web development, modern JavaScript, and production-ready applications.",
      certTitle: "Certificate of Completion",
      year: "2021",
      image: flatironCert,
    },
    {
      institution: "Calvary Chapel Bible College",
      degree: "Associate of Theology",
      description:
        "Comprehensive program focused on biblical studies, theology, and practical ministry training.",
      certTitle: "Associate Degree",
      year: "2012",
      image: ccbcDiploma,
    },
  ];

  return (
    <Box
      id="education"
      sx={{
        pt: { xs: 10, md: 14 },
        pb: { xs: 10, md: 14 },
        display: "flex",
        flexDirection: "column",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "15%",
          left: "8%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(94, 234, 212, 0.05) 0%, transparent 70%)",
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
              ~/education ${" "}
            </Box>
            <Box component="span" sx={{ color: "primary.main" }}>
              ls -la
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
            Learning &amp;{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Growth
            </Box>
          </Typography>
        </Box>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          style={
            {
              padding: "10px 0 50px 0",
              "--swiper-navigation-color": "#5eead4",
              "--swiper-pagination-color": "#5eead4",
              "--swiper-pagination-bullet-inactive-color": "#ffffff",
              "--swiper-pagination-bullet-inactive-opacity": "0.35",
              "--swiper-pagination-bullet-size": "10px",
              "--swiper-navigation-size": "22px",
            } as React.CSSProperties
          }
        >
          {educationData.map((edu, index) => (
            <SwiperSlide key={`${edu.institution}-${edu.degree}`}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, sm: 4, md: 5 },
                  mx: { xs: 0, sm: 2, md: 6 },
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "3px",
                    height: "100%",
                    background:
                      index === 0
                        ? "linear-gradient(180deg, #fbbf24, transparent)"
                        : "linear-gradient(180deg, #5eead4, transparent)",
                  },
                }}
              >
                <Grid container spacing={{ xs: 3, md: 5 }} alignItems="stretch">
                  <Grid size={{ xs: 12, md: 7 }}>
                    <Typography
                      sx={{
                        fontFamily: monoStack,
                        fontSize: "0.75rem",
                        color:
                          edu.year === "In Progress"
                            ? "secondary.main"
                            : "primary.main",
                        letterSpacing: "0.1em",
                        mb: 1,
                        textTransform: "uppercase",
                      }}
                    >
                      {edu.year}
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        letterSpacing: "-0.02em",
                        color: "text.primary",
                        fontSize: { xs: "1.4rem", md: "1.85rem" },
                        mb: 0.5,
                      }}
                    >
                      {edu.institution}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: monoStack,
                        color: "text.secondary",
                        fontSize: { xs: "0.85rem", md: "0.95rem" },
                        mb: 2,
                      }}
                    >
                      {edu.degree}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontSize: { xs: "0.85rem", md: "0.95rem" },
                        lineHeight: 1.7,
                        mb: 2,
                      }}
                    >
                      {edu.description}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: monoStack,
                        fontSize: "0.75rem",
                        color: "text.disabled",
                        letterSpacing: "0.1em",
                      }}
                    >
                      # {edu.certTitle}
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 5 }}>
                    {edu.image ? (
                      <Box
                        component="img"
                        src={edu.image}
                        alt={`${edu.institution} ${edu.certTitle}`}
                        onClick={() => handleOpenImage(edu.image!)}
                        sx={{
                          width: "100%",
                          height: "auto",
                          maxHeight: { xs: 240, md: 300 },
                          objectFit: "contain",
                          borderRadius: 1,
                          border: "1px solid rgba(255,255,255,0.08)",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "scale(1.02)",
                            borderColor: "rgba(94, 234, 212, 0.4)",
                            boxShadow: "0 0 24px rgba(94, 234, 212, 0.1)",
                          },
                        }}
                      />
                    ) : (
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          minHeight: { xs: 200, md: 240 },
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 1.5,
                          p: 3,
                          borderRadius: 1,
                          border: "1px dashed rgba(251, 191, 36, 0.3)",
                          background:
                            "linear-gradient(135deg, rgba(251, 191, 36, 0.04) 0%, rgba(94, 234, 212, 0.03) 100%)",
                        }}
                      >
                        <Security
                          sx={{
                            fontSize: { xs: 56, md: 72 },
                            color: "secondary.main",
                            opacity: 0.9,
                          }}
                        />
                        <Box
                          sx={{
                            fontFamily: monoStack,
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            letterSpacing: "0.2em",
                            color: "secondary.main",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,
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
                        <Typography
                          sx={{
                            fontFamily: monoStack,
                            textAlign: "center",
                            color: "text.disabled",
                            fontSize: "0.72rem",
                            lineHeight: 1.6,
                            maxWidth: 240,
                          }}
                        >
                          // certificate to be awarded upon completion
                        </Typography>
                      </Box>
                    )}
                  </Grid>
                </Grid>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      <Dialog
        open={!!selectedImage}
        onClose={handleCloseImage}
        maxWidth="lg"
        slotProps={{
          paper: {
            sx: {
              bgcolor: "transparent",
              boxShadow: "none",
              overflow: "hidden",
              m: { xs: 1, md: 4 },
              border: "none",
            },
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconButton
            onClick={handleCloseImage}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              bgcolor: "rgba(0,0,0,0.6)",
              color: "primary.main",
              "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
              zIndex: 10,
            }}
          >
            <Close />
          </IconButton>
          <Box
            component="img"
            src={selectedImage || ""}
            sx={{
              maxWidth: "100%",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: 1,
              boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
            }}
          />
        </Box>
      </Dialog>
    </Box>
  );
};

export default Education;
