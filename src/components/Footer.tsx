import { Box, Typography, Container, Stack, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        mt: "auto",
        backgroundColor: "background.default",
        borderTop: "1px solid rgba(0,0,0,0.05)",
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
            variant="body2"
            color="text.secondary"
            sx={{
              textAlign: { xs: "center", md: "left" },
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
            }}
          >
            © {new Date().getFullYear()} Richard Dewey Hammers. Built with React
            & MUI.
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <IconButton
              href="https://github.com/DeweyHammers"
              target="_blank"
              color="primary"
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/richard-dewey-hammers/"
              target="_blank"
              color="primary"
            >
              <LinkedIn />
            </IconButton>
            <IconButton href="mailto:hammersdrichard@gmail.com" color="primary">
              <Email />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
