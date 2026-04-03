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
import {
  Work,
  Code,
  Storage,
  Speed,
  RocketLaunch,
  AutoAwesome,
  Psychology,
} from "@mui/icons-material";
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
        "Google Gemini & CLI",
        "OpenAI",
      ],
      achievements: [
        {
          icon: <Code color="primary" />,
          text: "Built and maintained scalable full-stack applications using TypeScript, Next.js, and Node.js, optimizing performance for data-heavy interfaces.",
        },
        {
          icon: <Storage color="primary" />,
          text: "Developed and optimized APIs and database queries using Prisma and PostgreSQL, improving API response times by up to 40% and reducing overall backend load.",
        },
        {
          icon: <AutoAwesome color="primary" />,
          text: "Integrated AI-powered features using OpenAI, improving automation, complex data workflows, and user experiences.",
        },
        {
          icon: <Speed color="primary" />,
          text: "Implemented server-side processing for filtering, sorting, and pagination, ensuring scalable handling of large datasets.",
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
          text: "Delivered consistent customer service in a high-volume environment, contributing to customer retention.",
        },
        {
          icon: <Speed color="primary" />,
          text: "Worked across multiple roles in a fast-paced environment, building strong problem-solving and teamwork skills.",
        },
      ],
    },
  ];

  return (
    <Box
      id="experience"
      sx={{
        pt: { xs: 12, md: 15 },
        pb: { xs: 15, md: 25 },
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        bgcolor: "background.paper",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(0,0,0,0.05), transparent)",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
              px: 2.5,
              py: 1,
              borderRadius: 50,
              bgcolor: "rgba(37, 99, 235, 0.1)",
              border: "1px solid rgba(37, 99, 235, 0.2)",
              color: "primary.dark",
              mb: 3,
            }}
          >
            <Work sx={{ fontSize: 16 }} />
            <Typography
              variant="subtitle2"
              fontWeight="800"
              letterSpacing="0.05em"
            >
              EXPERIENCE
            </Typography>
          </Box>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "text.primary",
            }}
          >
            Professional Journey
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
                  p: { xs: 2.5, sm: 4, md: 6 },
                  mx: { xs: 0, sm: 2, md: 8 },
                  border: "1px solid rgba(0,0,0,0.05)",
                  background: "white",
                  position: "relative",
                  overflow: "hidden",
                  minHeight: { xs: "0", md: 450 },
                  height: { xs: 750, sm: 650, md: "100%" },
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
                        fontWeight="900"
                        sx={{
                          fontSize: { xs: "1.25rem", md: "2.25rem" },
                          letterSpacing: "-0.02em",
                          mb: 0.5,
                          color: "text.primary",
                        }}
                      >
                        {exp.company}
                      </Typography>
                      <Typography
                        variant="h6"
                        fontWeight="800"
                        sx={{
                          mb: 1,
                          fontSize: { xs: "0.9rem", md: "1.25rem" },
                          color: "primary.main",
                        }}
                      >
                        {exp.period}
                      </Typography>
                      <Typography
                        variant="h6"
                        fontWeight="700"
                        sx={{
                          fontSize: { xs: "0.85rem", md: "1.1rem" },
                          color: "text.secondary",
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
                                sx={{
                                  fontSize: { xs: "0.85rem", md: "1rem" },
                                  color: "text.primary",
                                }}
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
                        bgcolor: "rgba(0,0,0,0.02)",
                        p: { xs: 2, md: 4 },
                        borderRadius: 4,
                        border: "1px solid rgba(0,0,0,0.05)",
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
                          gap: 1,
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
                              border: "1px solid rgba(0,0,0,0.1)",
                              "&:hover": {
                                bgcolor: "primary.main",
                                color: "white",
                              },
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
