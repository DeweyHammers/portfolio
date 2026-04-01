import {
  Box,
  Typography,
  Container,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Chip,
} from "@mui/material";
import { Work, Code, Storage, Speed, RocketLaunch } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Experience = () => {
  const experiences = [
    {
      company: "Ksense Technology Group",
      role: "Remote Full Stack Software Engineer",
      period: "Dec 2021 – Jan 2026",
      tech: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "GitLab",
        "Sentry",
        "OpenAI",
      ],
      achievements: [
        {
          icon: <Code color="primary" />,
          text: "Architected scalable web apps using Next.js and TypeScript.",
        },
        {
          icon: <Storage color="primary" />,
          text: "Designed optimized database schemas using Prisma ORM with PostgreSQL, managing migrations and heavy-read states.",
        },
        {
          icon: <RocketLaunch color="primary" />,
          text: "Integrated OpenAI API features to create custom user interfaces that significantly increased user engagement.",
        },
        {
          icon: <Speed color="primary" />,
          text: "Sentry integration for real-time error tracking, drastically reducing Mean Time to Resolution (MTTR).",
        },
        {
          icon: <Work color="primary" />,
          text: "Managed GitLab CI/CD pipelines to automate testing and deployment, reducing manual release overhead.",
        },
      ],
    },
    {
      company: "Raley's",
      role: "Courtesy Clerk | Deli Clerk | Night Crew",
      period: "Sept 2013 – Nov 2021",
      tech: ["Customer Service", "Operations", "Teamwork", "Problem Solving"],
      achievements: [
        {
          icon: <Work color="primary" />,
          text: "Demonstrated reliability and strong work ethic over an 8-year tenure in a fast-paced retail environment.",
        },
        {
          icon: <RocketLaunch color="primary" />,
          text: "Brought customers back to the store with excellent customer service.",
        },
        {
          icon: <Speed color="primary" />,
          text: "Built a strong work ethic through years of experience.",
        },
      ],
    },
  ];

  return (
    <Box
      id="experience"
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
            mb: { xs: 2, md: 6 }, // Reduced mb on mobile
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          Professional Journey
        </Typography>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          style={
            {
              padding: "10px 0 40px 0", // Consistent smaller padding
              "--swiper-navigation-color": "#2563eb",
              "--swiper-pagination-color": "#2563eb",
              "--swiper-navigation-size": "24px",
            } as any
          }
        >
          {experiences.map((exp, index) => (
            <SwiperSlide key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.5, sm: 4, md: 6 }, // Slightly less padding on mobile
                  mx: { xs: 0, sm: 2, md: 8 },
                  border: "1px solid rgba(0,0,0,0.05)",
                  position: "relative",
                  overflow: "hidden",
                  minHeight: { xs: "0", md: 450 },
                  height: { xs: 750, sm: 650, md: "100%" }, // Increased height for mobile
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
                  <Grid size={{ xs: 12, md: 8 }}>
                    <Box
                      sx={{
                        mb: { xs: 2, md: 3 },
                        textAlign: { xs: "center", md: "left" },
                      }}
                    >
                      <Typography
                        variant="h4"
                        color="text.primary"
                        fontWeight="900"
                        sx={{
                          fontSize: { xs: "1.25rem", md: "2.25rem" }, // Smaller header on mobile
                          letterSpacing: "-0.02em",
                          mb: 0.5,
                        }}
                      >
                        {exp.company}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="primary.main"
                        fontWeight="800"
                        sx={{
                          mb: 1,
                          fontSize: { xs: "0.9rem", md: "1.25rem" },
                        }}
                      >
                        {exp.period}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="text.secondary"
                        fontWeight="700"
                        sx={{
                          opacity: 0.8,
                          fontSize: { xs: "0.85rem", md: "1.1rem" },
                        }}
                      >
                        {exp.role}
                      </Typography>
                    </Box>
                    <List sx={{ p: 0 }}>
                      {exp.achievements.map((item, i) => (
                        <ListItem
                          key={i}
                          sx={{ px: 0, py: 0.5, alignItems: "flex-start" }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: { xs: 24, md: 32 },
                              mt: 0.5,
                              color: "primary.main",
                            }}
                          >
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography
                                variant="body1"
                                fontWeight={500}
                                lineHeight={1.4}
                                color="text.primary"
                                sx={{ fontSize: { xs: "0.85rem", md: "1rem" } }}
                              >
                                {item.text}
                              </Typography>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>

                  <Grid size={{ xs: 12, md: 4 }}>
                    <Box
                      sx={{
                        bgcolor: "rgba(0,0,0,0.03)",
                        p: { xs: 2, md: 4 }, // Tightened padding
                        borderRadius: 4,
                        border: "1px solid rgba(0,0,0,0.02)",
                      }}
                    >
                      <Typography
                        variant="overline"
                        fontWeight="900"
                        gutterBottom
                        sx={{
                          display: "block",
                          color: "text.secondary",
                          mb: 1.5,
                          letterSpacing: "0.1em",
                          textAlign: { xs: "center", md: "left" },
                          fontSize: "0.7rem",
                        }}
                      >
                        Core Expertise
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1, // Reduced gap
                          justifyContent: { xs: "center", md: "flex-start" },
                        }}
                      >
                        {exp.tech.map((t) => (
                          <Chip
                            key={t}
                            label={t}
                            size="small"
                            sx={{
                              bgcolor: "white",
                              fontWeight: 700,
                              fontSize: "0.7rem",
                              color: "text.primary",
                              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                              border: "1px solid rgba(0,0,0,0.05)",
                              "&:hover": { bgcolor: "rgba(37, 99, 235, 0.05)" },
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Experience;
