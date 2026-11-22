# Richard Dewey Hammers — Portfolio

**Live site: [richarddhammers.netlify.app](https://richarddhammers.netlify.app/)**

My personal portfolio. I spent 4+ years as a full-stack software engineer and am now moving into IT support and cybersecurity, so the site shows both: the software I've shipped, and the networking, systems and security work I do in my home lab and coursework.

## What's on the page

The site is a single page. A fixed nav bar at the top jumps between sections.

| Section | What it covers |
| --- | --- |
| **Hero** | Who I am, what I'm looking for, and links to GitHub, LinkedIn and email. |
| **Tech Stack** | Networking, systems and security tools from my home lab and coursework, followed by the stack I've shipped production software with. Lab and coursework cards are labeled as such. |
| **Home Lab** | A segmented dual-WAN UniFi home network I designed and run (VLANs, zone-based firewall, IDS/IPS, policy-based routing), with a topology diagram, plus Windows troubleshooting and my virtual security lab. |
| **Professional History** | Work experience, including four years as a full-stack engineer at Ksense Technology Group. |
| **Currently Learning** | The Flatiron School Cybersecurity Professional Certificate and the Boot.dev DevOps path, both in progress. |
| **Featured Work** | Finances OS, a local-first desktop budgeting app, plus Stock Price Maximizer, MIQ Methane Registry and Budgeteer. |
| **Learning & Growth** | Completed education and certificates. |

## Built with

- **React 19** and **TypeScript**, built with **Vite**
- **Material UI (MUI) 7** for layout and components, with a custom dark theme in `src/theme.ts`
- **Framer Motion** for scroll-in animations
- **Swiper** for the certificate slider
- **ESLint** with `typescript-eslint`

## Running it locally

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

Other commands:

```bash
npm run build     # type-check, then build to dist/
npm run preview   # serve the production build locally
npm run lint      # run ESLint
```

## Project structure

```
index.html              Page shell, meta tags and link preview tags
public/
  og-image.png          Link preview image (1200x630)
  Richard-Dewey-Hammers-Resume.pdf
                        Résumé behind the hero's Résumé button (no phone number)
  favicon.svg
src/
  App.tsx               Section order
  theme.ts              Colors, typography and component overrides
  components/
    Navbar.tsx          Fixed section nav with a phone menu
    Hero.tsx
    Skills.tsx          Tech Stack cards
    HomeLab.tsx         Home network, topology diagram and lab cards
    Experience.tsx
    Learning.tsx
    Projects.tsx        Featured project and project grid
    Education.tsx
    Footer.tsx
  assets/               Photos, certificates and project screenshots
```

## Design notes

The look is a dark terminal style: near-black background, a teal accent with amber for in-progress items, JetBrains Mono for labels and Inter for body text. Recurring patterns:

- Section labels written as shell prompts, such as `~/homelab $ cat network.md`
- Tags wrapped in monospace brackets, such as `[TypeScript]`
- Amber "IN PROGRESS" badges for anything not yet finished

The link preview image has the hero tagline baked in, so it needs regenerating if the tagline changes.
