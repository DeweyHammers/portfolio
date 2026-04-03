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
import { School, Close } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import flatironCert from "../assets/certificate-of-completion.jpg";
import ccbcDiploma from "../assets/ccbc-diploma.jpg";

const Education = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOpenImage = (image: string) => setSelectedImage(image);
  const handleCloseImage = () => setSelectedImage(null);

  const educationData = [
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
        pt: { xs: 12, md: 15 },
        pb: { xs: 20, md: 35 }, // Significant bottom padding to "lower" the background
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        bgcolor: "background.default",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.03) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
              px: 2.5,
              py: 1,
              borderRadius: 50,
              bgcolor: "rgba(124, 58, 237, 0.1)",
              border: "1px solid rgba(124, 58, 237, 0.2)",
              color: "secondary.dark",
              mb: 3,
            }}
          >
            <School sx={{ fontSize: 16 }} />
            <Typography variant="subtitle2" fontWeight="800">
              EDUCATION
            </Typography>
          </Box>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "3rem" },
              color: "text.primary",
            }}
          >
            Learning & Growth
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
              padding: "10px 0 40px 0",
              "--swiper-navigation-color": "#7c3aed",
              "--swiper-pagination-color": "#7c3aed",
              "--swiper-navigation-size": "24px",
            } as any
          }
        >
          {educationData.map((edu, index) => (
            <SwiperSlide key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.5, sm: 4, md: 6 },
                  mx: { xs: 0, sm: 2, md: 8 },
                  border: "1px solid rgba(0,0,0,0.05)",
                  background: "white",
                  position: "relative",
                  overflow: "hidden",
                  minHeight: { xs: "0", md: 450 },
                  height: { xs: 650, md: "100%" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  boxShadow: "0 10px 30px -5px rgba(0,0,0,0.05)",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "6px",
                    height: "100%",
                    bgcolor: index === 0 ? "secondary.main" : "primary.main",
                  },
                }}
              >
                <Grid container spacing={{ xs: 2, md: 6 }} alignItems="center">
                  <Grid size={{ xs: 12, md: 7 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 1,
                        justifyContent: { xs: "center", md: "flex-start" },
                      }}
                    >
                      <School
                        sx={{ fontSize: { xs: 28, md: 32 }, mr: 1.5, color: "secondary.main" }}
                      />
                      <Typography
                        variant="h4"
                        fontWeight="900"
                        sx={{ 
                          fontSize: { xs: "1.25rem", md: "1.85rem" }, 
                          color: "text.primary",
                          whiteSpace: { md: "nowrap" } 
                        }}
                      >
                        {edu.institution}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                      <Typography
                        variant="h5"
                        fontWeight="700"
                        gutterBottom
                        sx={{ fontSize: { xs: "1rem", md: "1.5rem" }, color: "secondary.dark" }}
                      >
                        {edu.degree}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          mb: 2,
                          fontSize: { xs: "0.85rem", md: "1.1rem" },
                          color: "text.secondary",
                        }}
                      >
                        {edu.description}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        fontWeight="700"
                        sx={{ fontSize: { xs: "0.85rem", md: "1rem" }, color: "text.primary" }}
                      >
                        {edu.certTitle} • {edu.year}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, md: 5 }}>
                    <Box
                      component="img"
                      src={edu.image}
                      alt={`${edu.institution} ${edu.certTitle}`}
                      onClick={() => handleOpenImage(edu.image)}
                      sx={{
                        width: "100%",
                        height: "auto",
                        maxHeight: { xs: "250px", md: "none" },
                        objectFit: "contain",
                        borderRadius: 2,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                        border: "1px solid rgba(0,0,0,0.05)",
                        cursor: "pointer",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.02)",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      {/* Image Lightbox */}
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
              bgcolor: "rgba(0,0,0,0.5)",
              color: "white",
              "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
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
              borderRadius: 2,
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          />
        </Box>
      </Dialog>
    </Box>
  );
};

export default Education;
