import { useEffect, useState } from "react";
import { Box, Container, IconButton, Link as MuiLink } from "@mui/material";
import { Menu as MenuIcon, Close } from "@mui/icons-material";
import { monoStack } from "../theme";

const links = [
  { id: "skills", label: "stack" },
  { id: "homelab", label: "home lab" },
  { id: "experience", label: "experience" },
  { id: "learning", label: "learning" },
  { id: "projects", label: "projects" },
  { id: "education", label: "education" },
];

// "home" is watched too so no link stays highlighted while the hero is showing.
const sectionIds = ["home", ...links.map((link) => link.id)];

const NAV_HEIGHT = 56;

const useActiveSection = () => {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // A thin band a third of the way down the viewport: the section crossing
      // it is the current one.
      { rootMargin: "-35% 0px -64% 0px" },
    );
    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);

  return active;
};

const Navbar = () => {
  const active = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkSx = (id: string) => ({
    fontFamily: monoStack,
    fontSize: "0.8rem",
    letterSpacing: "0.02em",
    color: active === id ? "primary.main" : "text.secondary",
    transition: "color 0.2s ease",
    "&:hover": { color: "primary.main" },
  });

  return (
    <Box
      component="nav"
      aria-label="Page sections"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        background: "rgba(13, 17, 23, 0.82)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            height: NAV_HEIGHT,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <MuiLink
            href="#home"
            underline="none"
            onClick={() => setMenuOpen(false)}
            sx={{
              fontFamily: monoStack,
              fontSize: "0.9rem",
              fontWeight: 700,
              color: "primary.main",
            }}
          >
            <Box component="span" sx={{ color: "text.disabled" }}>
              ~/
            </Box>
            dewey
          </MuiLink>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3.5 }}>
            {links.map((link) => (
              <MuiLink
                key={link.id}
                href={`#${link.id}`}
                underline="none"
                aria-current={active === link.id ? "true" : undefined}
                sx={linkSx(link.id)}
              >
                {link.label}
              </MuiLink>
            ))}
          </Box>

          <IconButton
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            size="small"
            sx={{
              display: { xs: "inline-flex", md: "none" },
              color: "text.secondary",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 1,
            }}
          >
            {menuOpen ? <Close fontSize="small" /> : <MenuIcon fontSize="small" />}
          </IconButton>
        </Box>

        {menuOpen && (
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
              pb: 1.5,
            }}
          >
            {links.map((link) => (
              <MuiLink
                key={link.id}
                href={`#${link.id}`}
                underline="none"
                aria-current={active === link.id ? "true" : undefined}
                onClick={() => setMenuOpen(false)}
                sx={{ ...linkSx(link.id), fontSize: "0.9rem", py: 1.25 }}
              >
                <Box component="span" sx={{ color: "text.disabled" }}>
                  &gt;{" "}
                </Box>
                {link.label}
              </MuiLink>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Navbar;
