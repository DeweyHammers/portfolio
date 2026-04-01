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
      description: "Intensive software engineering program focused on full-stack web development, covering modern JavaScript (React), Ruby on Rails, and professional software engineering practices.",
      certTitle: "Certificate of Completion",
      year: "2021",
      image: flatironCert,
    },
    {
      institution: "Calvary Chapel Bible College",
      degree: "Associate of Theology",
      description: "Comprehensive program focused on biblical studies, theology, and practical ministry training.",
      certTitle: "Associate Degree",
      year: "2012",
      image: ccbcDiploma,
    }
  ];

  return (
    <Box
      id="education"
      sx={{
        py: { xs: 4, md: 10 },
        mb: { xs: 4, md: 8 },
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          gutterBottom
          textAlign="center"
          sx={{ 
            mb: { xs: 2, md: 6 }, 
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "3rem" }
          }}
        >
          Education & Certifications
        </Typography>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          style={
            {
              padding: "10px 0 40px 0",
              "--swiper-navigation-color": "#2563eb",
              "--swiper-pagination-color": "#2563eb",
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
                  position: "relative",
                  overflow: "hidden",
                  minHeight: { xs: "0", md: 450 },
                  height: { xs: 650, md: "100%" }, // Increased for safety
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "6px",
                    height: "100%",
                    bgcolor: index === 0 ? "primary.main" : "secondary.main",
                  },
                }}
              >
                <Grid container spacing={{ xs: 2, md: 6 }} alignItems="center">
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1, justifyContent: { xs: "center", md: "flex-start" } }}>
                      <School color="primary" sx={{ fontSize: { xs: 28, md: 40 }, mr: 1.5 }} />
                      <Typography variant="h4" fontWeight="900" color="primary" sx={{ fontSize: { xs: "1.25rem", md: "2.125rem" } }}>
                        {edu.institution}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                      <Typography variant="h5" fontWeight="700" gutterBottom sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}>
                        {edu.degree}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: { xs: "0.85rem", md: "1.1rem" } }}>
                        {edu.description}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.primary"
                        fontWeight="700"
                        sx={{ fontSize: { xs: "0.85rem", md: "1rem" } }}
                      >
                        {edu.certTitle} • {edu.year}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
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
                        border: "1px solid rgba(0,0,0,0.1)",
                        cursor: "pointer",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.05)",
                        }
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
        PaperProps={{
          sx: {
            bgcolor: "transparent",
            boxShadow: "none",
            overflow: "hidden",
            m: { xs: 1, md: 4 },
          },
        }}
      >
        <Box sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
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
