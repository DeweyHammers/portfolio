import { useState } from "react";
import {
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Box,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import miqImage from "../assets/miq.png";
import stockPriceMaximizerImage from "../assets/stock-price-maximizer.png";
import budgeteerImage from "../assets/budgeteer.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Projects = () => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const projects = [
    {
      title: "MIQ Methane Registry",
      description:
        "An enterprise-grade methane emissions registry featuring a complex certificate issuance system, multi-tenant facility management, and independent audit tracking.",
      tags: [
        "Next.js",
        "TypeScript",
        "Refine",
        "Supabase",
        "Prisma",
        "Material UI",
        "Sentry",
      ],
      image: miqImage,
    },
    {
      title: "Stock Price Maximizer (SPM)",
      description:
        "A high-performance stock analysis platform that leverages OpenAI to analyze and summarize complex financial filings from SEC EDGAR. Features a subscription-based (SPM+) portal with secure payment processing, real-time data insights, and automated price forecasting.",
      tags: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "Material UI",
        "Sentry",
        "OpenAI",
      ],
      image: stockPriceMaximizerImage,
    },
    {
      title: "Budgeteer",
      description:
        "A comprehensive personal finance application designed for flatiron school as a final project. Features a modern dashboard, budget categorization, and real-time transaction tracking. Built with a Rails API backend and a React/Redux frontend.",
      tags: ["React", "Redux", "Material UI", "Rails API", "Ruby on Rails"],
      image: budgeteerImage,
    },
  ];

  return (
    <Box
      id="projects"
      sx={{
        pt: 4,
        pb: 15,
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
            mb: 4, 
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "3rem" } 
          }}
        >
          Projects and Professional Work
        </Typography>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={projects.length > 1}
          onSwiper={setSwiperInstance}
          style={
            {
              padding: "10px 0 40px 0",
              "--swiper-navigation-color": "#2563eb",
              "--swiper-pagination-color": "#2563eb",
              "--swiper-navigation-size": "24px",
            } as any
          }
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Card
                onMouseEnter={() => swiperInstance?.autoplay.stop()}
                onMouseLeave={() => swiperInstance?.autoplay.start()}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                  border: "1px solid rgba(0,0,0,0.05)",
                  borderRadius: 4,
                  mx: { xs: 0, sm: 2, md: 8 },
                  height: { xs: "auto", md: 680 },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 240, sm: 320, md: 420 },
                    overflow: "hidden",
                    display: "flex",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", // Fill the full area
                      objectPosition: "top", // Ensure the top is never cut off
                    }}
                  />
                </Box>
                <CardContent
                  sx={{
                    flexGrow: 1,
                    p: { xs: 3, md: 4 },
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "white",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="h2"
                    fontWeight="900"
                    color="primary.main"
                    sx={{ fontSize: { xs: "1.25rem", md: "1.85rem" }, textAlign: { xs: "center", md: "left" } }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                      lineHeight: 1.5,
                      display: "-webkit-box",
                      WebkitLineClamp: { xs: 4, md: 3 },
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      fontSize: { xs: "0.875rem", md: "1.1rem" },
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ mt: "auto" }}>
                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      useFlexGap
                      justifyContent={{ xs: "center", md: "flex-start" }}
                    >
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          color="primary"
                          variant="outlined"
                          size="small"
                          sx={{
                            fontWeight: 700,
                            borderRadius: 1.5,
                            px: 1,
                            fontSize: "0.7rem",
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Projects;
