import { useState } from "react";
import {
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Box,
  Dialog,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Close, Star } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import miqImage from "../assets/miq.png";
import stockPriceMaximizerImage from "../assets/stock-price-maximizer.png";
import budgeteerImage from "../assets/budgeteer.png";
import { monoStack } from "../theme";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const TagChip = ({ label }: { label: string }) => (
  <Box
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
    {label}
    <Box component="span" sx={{ color: "text.disabled" }}>
      ]
    </Box>
  </Box>
);

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

  const featuredTags = [
    "Next.js",
    "TypeScript",
    "Prisma",
    "OpenAI",
    "Sentry",
    "Material UI",
    "PostgreSQL",
  ];

  return (
    <Box
      id="projects"
      sx={{
        pt: { xs: 10, md: 14 },
        pb: { xs: 10, md: 14 },
        display: "flex",
        flexDirection: "column",
        position: "relative",
        bgcolor: "#12161f",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(94, 234, 212, 0.06) 0%, transparent 60%)",
          filter: "blur(80px)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}>
          <Typography
            sx={{
              fontFamily: monoStack,
              fontSize: { xs: "0.8rem", md: "0.9rem" },
              color: "text.secondary",
              mb: 2,
            }}
          >
            <Box component="span" sx={{ color: "text.disabled" }}>
              ~/projects ${" "}
            </Box>
            <Box component="span" sx={{ color: "primary.main" }}>
              ls ./featured
            </Box>
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "text.primary",
              letterSpacing: "-0.03em",
            }}
          >
            Featured{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Work
            </Box>
          </Typography>
        </Box>

        <Paper
          elevation={0}
          sx={{
            mb: { xs: 8, md: 12 },
            maxWidth: { md: "1100px" },
            mx: "auto",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "stretch",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(94, 234, 212, 0.5), transparent)",
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: { xs: 12, md: 20 },
              left: { xs: 12, md: 20 },
              display: "inline-flex",
              alignItems: "center",
              gap: 0.75,
              fontFamily: monoStack,
              fontSize: { xs: "0.65rem", md: "0.7rem" },
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "primary.main",
              px: 1.25,
              py: 0.5,
              borderRadius: 0.75,
              background: "rgba(94, 234, 212, 0.08)",
              border: "1px solid rgba(94, 234, 212, 0.25)",
              zIndex: 2,
            }}
          >
            <Star sx={{ fontSize: 12 }} />
            FEATURED
          </Box>

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
              borderRight: {
                sm: "1px solid rgba(255,255,255,0.06)",
              },
              borderBottom: {
                xs: "1px solid rgba(255,255,255,0.06)",
                sm: "none",
              },
              position: "relative",
              background: "rgba(0,0,0,0.3)",
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
                transition: "transform 0.5s ease",
                filter: "brightness(0.9)",
                "&:hover": {
                  transform: "scale(1.03)",
                  filter: "brightness(1)",
                },
              }}
            />
          </Box>

          <Box
            sx={{
              p: { xs: 3, md: 5 },
              pt: { xs: 6, md: 6 },
              width: { xs: "100%", sm: "55%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 900,
                color: "text.primary",
                letterSpacing: "-0.02em",
                fontSize: { xs: "1.6rem", md: "2rem" },
                mb: 1.5,
              }}
            >
              Stock Price Maximizer
            </Typography>
            <Typography
              sx={{
                mb: 3,
                color: "text.secondary",
                lineHeight: 1.6,
                fontSize: { xs: "0.95rem", md: "1.05rem" },
              }}
            >
              AI-powered platform that analyzes SEC filings and generates
              simplified financial insights.
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography
                sx={{
                  fontFamily: monoStack,
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "primary.main",
                  mb: 1.5,
                  textTransform: "uppercase",
                }}
              >
                # key contributions
              </Typography>
              <List disablePadding>
                {[
                  "Designed full-stack architecture using Next.js, Prisma, and PostgreSQL",
                  "Integrated OpenAI to automate data extraction and summarization",
                  "Implemented efficient server-side data processing pipelines",
                  "Optimized backend performance to handle large financial datasets efficiently",
                ].map((text, i) => (
                  <ListItem key={i} sx={{ px: 0, py: 0.4 }}>
                    <ListItemIcon sx={{ minWidth: 22 }}>
                      <Box
                        component="span"
                        sx={{
                          fontFamily: monoStack,
                          color: "primary.main",
                          fontWeight: 700,
                        }}
                      >
                        &gt;
                      </Box>
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      slotProps={{
                        primary: {
                          variant: "body2",
                          sx: {
                            color: "text.secondary",
                            fontSize: "0.9rem",
                            lineHeight: 1.6,
                          },
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
              {featuredTags.map((tag) => (
                <TagChip key={tag} label={tag} />
              ))}
            </Box>
          </Box>
        </Paper>

        <Typography
          variant="h4"
          textAlign="center"
          sx={{
            mb: { xs: 4, md: 6 },
            fontWeight: 900,
            fontSize: { xs: "1.75rem", md: "2.25rem" },
            letterSpacing: "-0.02em",
            color: "text.primary",
          }}
        >
          More{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            Projects
          </Box>
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
          {otherProjects.map((project) => (
            <SwiperSlide key={project.title}>
              <Card
                onMouseEnter={() => swiperInstance?.autoplay.stop()}
                onMouseLeave={() => swiperInstance?.autoplay.start()}
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "#12131a",
                  borderRadius: 1.5,
                  mx: { xs: 0, sm: 2, md: 6 },
                  height: { xs: "auto", md: 620 },
                  transition: "border-color 0.3s ease",
                  "&:hover": {
                    borderColor: "rgba(94, 234, 212, 0.25)",
                  },
                }}
              >
                <Box
                  onClick={() => handleOpenImage(project.image)}
                  sx={{
                    width: "100%",
                    height: { xs: 240, sm: 320, md: 380 },
                    overflow: "hidden",
                    display: "flex",
                    cursor: "pointer",
                    background: "rgba(0,0,0,0.3)",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
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
                      transition: "transform 0.5s ease",
                      filter: "brightness(0.9)",
                      "&:hover": {
                        transform: "scale(1.03)",
                        filter: "brightness(1)",
                      },
                    }}
                  />
                </Box>
                <CardContent
                  sx={{
                    flexGrow: 1,
                    p: { xs: 3, md: 4 },
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 900,
                      fontSize: { xs: "1.4rem", md: "1.65rem" },
                      color: "text.primary",
                      letterSpacing: "-0.02em",
                      mb: 1,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    sx={{
                      mb: 2,
                      color: "text.secondary",
                      fontSize: "0.95rem",
                      lineHeight: 1.55,
                    }}
                  >
                    {project.summary}
                  </Typography>

                  <List dense disablePadding sx={{ mb: 2 }}>
                    {project.points.map((point, i) => (
                      <ListItem key={i} sx={{ px: 0, py: 0.25 }}>
                        <ListItemIcon sx={{ minWidth: 18 }}>
                          <Box
                            component="span"
                            sx={{
                              fontFamily: monoStack,
                              color: "primary.main",
                              fontSize: "0.85rem",
                              fontWeight: 700,
                            }}
                          >
                            &gt;
                          </Box>
                        </ListItemIcon>
                        <ListItemText
                          primary={point}
                          slotProps={{
                            primary: {
                              variant: "body2",
                              sx: {
                                color: "text.secondary",
                                fontSize: "0.82rem",
                                lineHeight: 1.55,
                              },
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  <Box
                    sx={{
                      mt: "auto",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.75,
                    }}
                  >
                    {project.tags.map((tag) => (
                      <TagChip key={tag} label={tag} />
                    ))}
                  </Box>
                </CardContent>
              </Card>
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

export default Projects;
