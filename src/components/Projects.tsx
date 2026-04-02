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
  Dialog,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Close, FiberManualRecord, Star } from "@mui/icons-material";
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOpenImage = (image: string) => setSelectedImage(image);
  const handleCloseImage = () => setSelectedImage(null);

  const otherProjects = [
    {
      title: "MIQ Methane Registry",
      summary:
        "Web platform for tracking methane emissions and issuing compliance certificates across multiple facilities.",
      points: [
        "Developed a multi-tenant system for managing facilities and emissions data",
        "Built certificate issuance workflows with validation layers for regulatory compliance",
        "Designed database schema using Prisma for complex relational data",
        "Implemented audit tracking to ensure data integrity and traceability",
      ],
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
      title: "Budgeteer",
      summary:
        "Personal finance app that tracks transactions in real time and helps users manage budgets and spending.",
      points: [
        "Built a full-stack application with a React/Redux frontend and Rails API backend",
        "Designed a modern dashboard for visualizing financial data and trends",
        "Implemented secure authentication and user-specific data isolation",
        "Optimized state management for real-time updates and smooth UX",
      ],
      tags: ["React", "Redux", "Material UI", "Rails API", "Ruby on Rails"],
      image: budgeteerImage,
    },
  ];

  return (
    <Box
      id="projects"
      sx={{
        pt: { xs: 8, md: 12 },
        pb: { xs: 10, md: 15 },
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          textAlign="center"
          sx={{
            mb: { xs: 4, md: 8 },
            fontWeight: 900,
            fontSize: { xs: "2.25rem", md: "3.5rem" },
            letterSpacing: "-0.02em",
          }}
        >
          Featured Work
        </Typography>

        {/* FEATURED PROJECT: SPM - Upgraded to Glassmorphism */}
        <Paper
          elevation={0}
          sx={{
            mb: { xs: 12, md: 15 },
            maxWidth: { md: "1100px" },
            mx: "auto",
            borderRadius: 6,
            border: "1px solid rgba(255, 255, 255, 0.4)",
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(248, 250, 255, 0.5) 100%)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.05)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "stretch",
          }}
        >
          {/* Badge */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: 12, md: 25 },
              left: { xs: 12, md: 25 },
              display: "flex",
              alignItems: "center",
              gap: { xs: 0.5, md: 1 },
              bgcolor: "primary.main",
              color: "white",
              px: { xs: 1.2, md: 2 },
              py: { xs: 0.4, md: 0.75 },
              borderRadius: { xs: 1.5, md: 2 },
              zIndex: 2,
              boxShadow: "0 4px 12px rgba(37, 99, 235, 0.3)",
            }}
          >
            <Star sx={{ fontSize: { xs: 14, md: 18 } }} />
            <Typography
              variant="subtitle2"
              fontWeight="800"
              sx={{ fontSize: { xs: "0.65rem", md: "0.875rem" } }}
            >
              FEATURED PROJECT
            </Typography>
          </Box>

          {/* Image Container - Darkened for better chart contrast */}
          <Box
            onClick={() => handleOpenImage(stockPriceMaximizerImage)}
            sx={{
              width: { xs: "100%", sm: "45%" },
              height: { xs: 260, sm: "auto" },
              overflow: "hidden",
              cursor: "pointer",
              display: "flex",
              alignItems: "stretch",
              justifyContent: "center",
              bgcolor: "#0f172a",
              borderRight: { sm: "1px solid rgba(255,255,255,0.2)" },
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={stockPriceMaximizerImage}
              alt="Stock Price Maximizer"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "41% center",
                filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.5))", // Adds depth to the image
              }}
            />
          </Box>

          {/* Content Container */}
          <Box
            sx={{
              p: { xs: 3, md: 6 },
              width: { xs: "100%", sm: "55%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              fontWeight="900"
              gutterBottom
              color="primary.main"
            >
              Stock Price Maximizer
            </Typography>
            <Typography
              variant="h6"
              fontWeight="600"
              sx={{
                mb: 3,
                color: "text.primary",
                lineHeight: 1.4,
                fontSize: { xs: "1.1rem", md: "1.3rem" },
              }}
            >
              AI-powered platform that analyzes SEC filings and generates
              simplified financial insights.
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: { md: "1.1rem" } }}
              >
                <strong>Problem:</strong> Complex financial filings are
                difficult to interpret.
                <br />
                <strong>Solution:</strong> Built an AI system that generates
                simplified, actionable insights.
              </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                fontWeight="800"
                color="primary"
                sx={{ mb: 1.5 }}
              >
                Key Contributions
              </Typography>
              <List disablePadding>
                {[
                  "Designed full-stack architecture using Next.js, Prisma, and PostgreSQL",
                  "Integrated OpenAI to automate data extraction and summarization",
                  "Implemented efficient server-side data processing pipelines",
                  "Optimized backend performance to handle large financial datasets efficiently, reducing processing time for key operations.",
                ].map((text, i) => (
                  <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <FiberManualRecord
                        sx={{ fontSize: 10, color: "primary.main" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      slotProps={{
                        primary: {
                          variant: "body1",
                          fontWeight: 500,
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>

            <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
              {[
                "Next.js",
                "TypeScript",
                "Prisma",
                "OpenAI",
                "Sentry",
                "Material UI",
                "PostgreSQL",
              ].map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  sx={{
                    fontWeight: 700,
                    borderRadius: 2,
                    bgcolor: "rgba(37, 99, 235, 0.08)",
                    color: "primary.main",
                    border: "none",
                    px: 1,
                    py: 2,
                    backdropFilter: "blur(4px)", // Subtle blur on chips
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Paper>

        <Typography
          variant="h4"
          textAlign="center"
          sx={{
            mb: { xs: 4, md: 8 },
            fontWeight: 900,
            fontSize: { xs: "1.75rem", md: "2.5rem" },
            letterSpacing: "-0.02em",
          }}
        >
          More Projects
        </Typography>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={otherProjects.length > 1}
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
          {otherProjects.map((project, index) => (
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
                  height: { xs: "auto", md: 650 },
                }}
              >
                <Box
                  onClick={() => handleOpenImage(project.image)}
                  sx={{
                    width: "100%",
                    height: { xs: 240, sm: 320, md: 400 },
                    overflow: "hidden",
                    display: "flex",
                    cursor: "pointer",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
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
                    fontWeight="900"
                    color="primary.main"
                    sx={{ fontSize: { xs: "1.5rem", md: "1.85rem" } }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight="600"
                    sx={{ mb: 1.5, color: "text.primary", fontSize: "1rem" }}
                  >
                    {project.summary}
                  </Typography>

                  <List dense disablePadding sx={{ mb: 2 }}>
                    {project.points.map((point, i) => (
                      <ListItem key={i} sx={{ px: 0, py: 0.25 }}>
                        <ListItemIcon sx={{ minWidth: 20 }}>
                          <FiberManualRecord
                            sx={{ fontSize: 6, color: "primary.main" }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={point}
                          slotProps={{
                            primary: {
                              variant: "body2",
                              color: "text.secondary",
                              fontSize: "0.85rem",
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  <Box sx={{ mt: "auto" }}>
                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      useFlexGap
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
                            fontSize: "0.65rem",
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

export default Projects;
