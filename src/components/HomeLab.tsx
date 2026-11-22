import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Router, DesktopWindows, Dns } from "@mui/icons-material";
import type { ReactNode } from "react";
import { monoStack } from "../theme";

const LINE = "rgba(94, 234, 212, 0.35)";

const networkBuilt = [
  "Replaced the ISP-supplied router with a UniFi Dream Router 7 and built dual-WAN: Starlink as primary (dish in bypass mode) with automatic failover to a DSL line.",
  "Segmented the network into four VLANs (management, trusted, IoT and guest), each on its own subnet, with separate SSIDs for IoT and guest.",
  "Migrated to a zone-based firewall with a dedicated IoT zone, so IoT devices can't reach trusted devices or the gateway's admin ports, and turned on IDS/IPS.",
  "Set up policy-based routes that send chosen traffic out the second WAN by source device and destination, and confirmed the path with tracert.",
  "Added a wired PoE access point to cover a three-level house, tuned channel, width and transmit power per radio, and walk-tested coverage and roaming by RSSI.",
];

const networkOps = [
  "Got 2.4 GHz-only IoT devices connected by locking the channel and using Wi-Fi 4 mode.",
  "Took a console backup before renumbering the VLANs and made the change in an off-hours window.",
];

const networkTags = [
  "UniFi Dream Router 7",
  "U7 Lite AP",
  "Dual-WAN",
  "VLANs",
  "Zone-Based Firewall",
  "IDS/IPS",
  "Policy-Based Routing",
  "PoE",
];

const vlans = [
  { name: "Mgmt", id: "vlan 1" },
  { name: "Main", id: "vlan 2" },
  { name: "IoT", id: "vlan 3" },
  { name: "Guest", id: "vlan 4" },
];

const firewallPolicies = [
  { action: "allow", rule: "Internal → IoT" },
  { action: "block", rule: "IoT → Internal" },
  { action: "block", rule: "IoT → gateway admin" },
  { action: "block", rule: "Main → Mgmt" },
];

const sideCards: {
  title: string;
  icon: ReactNode;
  body: string;
  tags: string[];
}[] = [
  {
    title: "Windows Troubleshooting",
    icon: <DesktopWindows sx={{ fontSize: 24 }} />,
    body: "I diagnose Windows problems down to the root cause using Event Viewer and the Sysinternals suite. Recent fixes: a Microsoft Defender app crash and a DLL conflict.",
    tags: [
      "Event Viewer",
      "Sysinternals",
      "Autoruns",
      "Registry Editor",
      "Task Scheduler",
      "PowerShell",
    ],
  },
  {
    title: "Virtual Security Lab",
    icon: <Dns sx={{ fontSize: 24 }} />,
    body: "A VirtualBox multi-VM lab (Kali, Ubuntu Desktop, Ubuntu Server) for Flatiron coursework. Lab work so far includes troubleshooting a pfSense network, with fixes made persistent through netplan, and hardening Ubuntu 22.04 against the CIS benchmark to a Lynis hardening index of 100.",
    tags: [
      "VirtualBox",
      "Kali Linux",
      "Ubuntu Server",
      "pfSense",
      "netplan",
      "Lynis",
      "Docker",
    ],
  },
];

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

const IconTile = ({ children }: { children: ReactNode }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      flexShrink: 0,
      borderRadius: 1,
      bgcolor: "rgba(94, 234, 212, 0.08)",
      color: "primary.main",
      border: "1px solid rgba(94, 234, 212, 0.15)",
    }}
  >
    {children}
  </Box>
);

const SubHeading = ({ children }: { children: ReactNode }) => (
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
    {children}
  </Typography>
);

const BulletList = ({ items }: { items: string[] }) => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
    {items.map((text) => (
      <Box
        key={text}
        sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
      >
        <Box
          component="span"
          sx={{
            fontFamily: monoStack,
            color: "primary.main",
            fontWeight: 700,
            fontSize: { xs: "0.85rem", md: "0.9rem" },
            lineHeight: 1.7,
            flexShrink: 0,
          }}
        >
          &gt;
        </Box>
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: { xs: "0.85rem", md: "0.92rem" },
            lineHeight: 1.65,
          }}
        >
          {text}
        </Typography>
      </Box>
    ))}
  </Box>
);

const Node = ({
  label,
  sub,
  subColor = "text.disabled",
  highlight = false,
}: {
  label: string;
  sub: string;
  subColor?: string;
  highlight?: boolean;
}) => (
  <Box
    sx={{
      fontFamily: monoStack,
      textAlign: "center",
      minWidth: 0,
      px: { xs: 0.5, sm: 1 },
      py: 1,
      borderRadius: 1,
      border: highlight
        ? "1px solid rgba(94, 234, 212, 0.4)"
        : "1px solid rgba(255,255,255,0.1)",
      background: highlight
        ? "rgba(94, 234, 212, 0.06)"
        : "rgba(255,255,255,0.03)",
    }}
  >
    <Box
      sx={{
        fontSize: { xs: "0.7rem", sm: "0.78rem" },
        fontWeight: 700,
        color: "text.primary",
      }}
    >
      {label}
    </Box>
    <Box
      sx={{
        fontSize: { xs: "0.6rem", sm: "0.66rem" },
        color: subColor,
        mt: 0.25,
      }}
    >
      {sub}
    </Box>
  </Box>
);

const Stub = () => (
  <Box sx={{ width: "1px", height: 16, bgcolor: LINE, mx: "auto" }} />
);

const Topology = () => (
  <Box
    role="img"
    aria-label="Network topology: Starlink as primary WAN and DSL as failover WAN feed a UniFi gateway, which serves four VLANs: management, main, IoT and guest."
  >
    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
      <Node label="WAN1 · Starlink" sub="primary" subColor="primary.main" />
      <Node label="WAN2 · DSL" sub="failover" subColor="secondary.main" />
    </Box>
    {/* Joins the two WAN nodes; the offset matches half of the 16px grid gap. */}
    <Box
      sx={{
        mx: "calc(25% - 4px)",
        height: 16,
        borderLeft: `1px solid ${LINE}`,
        borderRight: `1px solid ${LINE}`,
        borderBottom: `1px solid ${LINE}`,
      }}
    />
    <Stub />
    <Node
      label="UniFi Dream Router 7"
      sub="zone firewall · IDS/IPS · policy routing"
      highlight
    />
    <Stub />
    {/* Bus across the VLAN columns; the offset matches the 8px grid gap. */}
    <Box sx={{ mx: "calc(12.5% - 3px)", borderTop: `1px solid ${LINE}` }} />
    <Box
      sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1 }}
    >
      {vlans.map((vlan) => (
        <Box key={vlan.id} sx={{ minWidth: 0 }}>
          <Stub />
          <Node label={vlan.name} sub={vlan.id} />
        </Box>
      ))}
    </Box>

    <Box
      sx={{
        mt: 3,
        pt: 2.5,
        borderTop: "1px solid rgba(255,255,255,0.06)",
        fontFamily: monoStack,
        fontSize: { xs: "0.7rem", sm: "0.75rem" },
      }}
    >
      <Box sx={{ color: "text.disabled", mb: 1 }}># firewall policy</Box>
      {firewallPolicies.map((policy) => (
        <Box key={policy.rule} sx={{ display: "flex", gap: 1.5, py: 0.25 }}>
          <Box
            component="span"
            sx={{
              width: "3.2em",
              flexShrink: 0,
              fontWeight: 700,
              color:
                policy.action === "allow" ? "primary.main" : "secondary.main",
            }}
          >
            {policy.action}
          </Box>
          <Box component="span" sx={{ color: "text.secondary" }}>
            {policy.rule}
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
);

const HomeLab = () => {
  return (
    <Box
      id="homelab"
      sx={{
        pt: { xs: 10, md: 14 },
        pb: { xs: 10, md: 14 },
        display: "flex",
        flexDirection: "column",
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          top: "5%",
          right: "8%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(94, 234, 212, 0.05) 0%, transparent 70%)",
          filter: "blur(70px)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            sx={{
              fontFamily: monoStack,
              fontSize: { xs: "0.8rem", md: "0.9rem" },
              color: "text.secondary",
              mb: 2,
            }}
          >
            <Box component="span" sx={{ color: "text.disabled" }}>
              ~/homelab ${" "}
            </Box>
            <Box component="span" sx={{ color: "primary.main" }}>
              cat network.md
            </Box>
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "text.primary",
              mb: 2,
            }}
          >
            Home{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Lab
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 720,
              mx: "auto",
              lineHeight: 1.7,
              color: "text.secondary",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
            }}
          >
            Where I practice the IT side hands-on: a network I designed, built
            and run at home, plus the machines and lab environments I
            troubleshoot in.
          </Typography>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              mb: 3,
              position: "relative",
              overflow: "hidden",
              transition: "all 0.25s ease",
              "&:hover": {
                borderColor: "rgba(94, 234, 212, 0.4)",
                boxShadow: "0 0 32px rgba(94, 234, 212, 0.06)",
              },
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
            <Grid container spacing={{ xs: 4, md: 6 }}>
              <Grid size={{ xs: 12, md: 7 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 2,
                  }}
                >
                  <IconTile>
                    <Router sx={{ fontSize: 24 }} />
                  </IconTile>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 900,
                        color: "text.primary",
                        letterSpacing: "-0.02em",
                        fontSize: { xs: "1.4rem", md: "1.75rem" },
                        lineHeight: 1.2,
                      }}
                    >
                      Segmented Dual-WAN Home Network
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: monoStack,
                        fontSize: { xs: "0.72rem", md: "0.78rem" },
                        color: "primary.main",
                        letterSpacing: "0.05em",
                        mt: 0.5,
                      }}
                    >
                      Nov 2026
                      <Box
                        component="span"
                        sx={{ color: "text.disabled", mx: 1 }}
                      >
                        ·
                      </Box>
                      <Box component="span" sx={{ color: "text.secondary" }}>
                        UniFi
                      </Box>
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  sx={{
                    mb: 3,
                    color: "text.secondary",
                    lineHeight: 1.6,
                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                  }}
                >
                  I designed and built my home network on UniFi: two internet
                  connections with failover, four isolated VLANs, and firewall
                  policy that keeps IoT devices away from everything else.
                </Typography>

                <Box sx={{ mb: 3 }}>
                  <SubHeading># what I built</SubHeading>
                  <BulletList items={networkBuilt} />
                </Box>

                <Box sx={{ mb: 3 }}>
                  <SubHeading># troubleshooting &amp; change control</SubHeading>
                  <BulletList items={networkOps} />
                </Box>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                  {networkTags.map((tag) => (
                    <TagChip key={tag} label={tag} />
                  ))}
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 5 }}>
                <SubHeading># topology</SubHeading>
                <Topology />
              </Grid>
            </Grid>
          </Paper>
        </motion.div>

        <Grid container spacing={3}>
          {sideCards.map((card, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={card.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ height: "100%" }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "rgba(94, 234, 212, 0.4)",
                      boxShadow: "0 0 32px rgba(94, 234, 212, 0.06)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      mb: 2,
                    }}
                  >
                    <IconTile>{card.icon}</IconTile>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        letterSpacing: "-0.02em",
                        color: "text.primary",
                        fontSize: { xs: "1.15rem", md: "1.3rem" },
                      }}
                    >
                      {card.title}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.7,
                      fontSize: "0.95rem",
                      mb: 3,
                    }}
                  >
                    {card.body}
                  </Typography>
                  <Box
                    sx={{
                      mt: "auto",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.75,
                    }}
                  >
                    {card.tags.map((tag) => (
                      <TagChip key={tag} label={tag} />
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeLab;
