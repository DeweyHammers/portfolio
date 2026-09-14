import { Box, Typography, Container, Stack, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import { monoStack } from "../theme";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        mt: "auto",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "20%",
          right: "20%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(94, 234, 212, 0.35), transparent)",
        },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography
            sx={{
              fontFamily: monoStack,
              color: "text.disabled",
              fontSize: { xs: "0.7rem", sm: "0.75rem" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Box component="span" sx={{ color: "primary.main" }}>
              &gt;
            </Box>{" "}
            © {new Date().getFullYear()} Richard Dewey Hammers &nbsp;
            <Box component="span" sx={{ color: "text.disabled" }}>
              // built with React + MUI
            </Box>
          </Typography>
          <Stack direction="row" spacing={1} justifyContent="center">
            <IconButton
              href="https://github.com/DeweyHammers"
              target="_blank"
              size="small"
              sx={{
                color: "text.secondary",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 1,
                "&:hover": {
                  color: "primary.main",
                  borderColor: "rgba(94, 234, 212, 0.4)",
                  background: "rgba(94, 234, 212, 0.05)",
                },
              }}
            >
              <GitHub fontSize="small" />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/richard-dewey-hammers/"
              target="_blank"
              size="small"
              sx={{
                color: "text.secondary",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 1,
                "&:hover": {
                  color: "primary.main",
                  borderColor: "rgba(94, 234, 212, 0.4)",
                  background: "rgba(94, 234, 212, 0.05)",
                },
              }}
            >
              <LinkedIn fontSize="small" />
            </IconButton>
            <IconButton
              href="mailto:hammersdrichard@gmail.com"
              size="small"
              sx={{
                color: "text.secondary",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 1,
                "&:hover": {
                  color: "primary.main",
                  borderColor: "rgba(94, 234, 212, 0.4)",
                  background: "rgba(94, 234, 212, 0.05)",
                },
              }}
            >
              <Email fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
