# Alysa Milano — Personal Portfolio (V2)

![React](https://img.shields.io/badge/React-19-231C18?style=flat-square&logo=react&logoColor=FAF7F4)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-231C18?style=flat-square&logo=typescript&logoColor=FAF7F4)
![Vite](https://img.shields.io/badge/Vite-6-9B5F46?style=flat-square&logo=vite&logoColor=FAF7F4)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-9B5F46?style=flat-square&logo=tailwindcss&logoColor=FAF7F4)
![Express](https://img.shields.io/badge/Express-Local_Proxy-574C45?style=flat-square&logo=express&logoColor=FAF7F4)

A modern, bilingual (**EN / ID**) personal portfolio built for **Alysa Milano** (Informatics graduate, President University), paired with an integrated local proxy server hosting four interactive full-stack and web demo applications under a single origin.

Designed with a warm editorial identity (**Warm Ivory `#FAF7F4`**, **Soft Sand `#EFE7DF`**, and **Portrait Terracotta `#B97D65`**) to present cross-functional strengths across **Business Operations, Project Coordination, Business Analysis, Administration, Management Trainee programs, and IT/IoT**.

---

## Key Features

- **Bilingual Support (`EN` / `ID`)** — Instant language toggle with `localStorage` persistence and `<html lang>` synchronization across every section, modal, and toast notification.
- **Editorial Personal Branding** — Expressive rotating headline, Polaroid portrait framing with tunable CSS crop variables, handwritten accents (`Nanum Pen Script`), and subtle watercolor hero atmosphere.
- **Flagship Capstone Spotlight** — Dedicated showcase for the **Automated Gate Access Control System Using LPR & RFID** (PT. Nesinak Industries) featuring project photography, UAT highlights, Thesis PDF, and demo video links.
- **Interactive Project Catalog** — Category filtering (`All Projects`, `IoT & Hardware`, `Web Applications`, `Core Programming`), accessible case-study modal (`Escape`, backdrop dismiss, focus management), and smooth `Show more / Show less` pagination (`> 4` items).
- **Multi-Domain Positioning** — Dedicated sections for **How I Work** (5 problem-solving principles), **About & Capabilities** (Cross-Functional & Operations, IoT & Embedded Systems, Programming & Analytical Tools), **Experience Journey**, and **Certificates & Credentials**.
- **Smart Contact & CV Handling** — One-click `Copy email` with live toast feedback, direct social links, and a `HEAD` availability check before downloading `CV_Alysa_Milano.pdf` so missing files gracefully display a notice instead of a 404 page.
- **Unified Live Demo Gateway** — Express reverse proxy (`local-server.js`) and Vite dev proxy (`vite.config.ts`) routing `/gams/`, `/legal/`, `/cashtracking/`, and `/healthcare-web/` seamlessly alongside the portfolio.

---

## Tech Stack

| Layer | Technologies |
| --- | --- |
| **Frontend** | React 19, TypeScript 5.8 (strict mode), Vite 6 |
| **Styling & Motion** | Tailwind CSS v4 (`@tailwindcss/vite`), CSS custom properties, `IntersectionObserver` scroll reveals, `prefers-reduced-motion` support |
| **Typography & Icons** | `Manrope`, `Instrument Sans`, `Nanum Pen Script`, `IBM Plex Mono`, `@phosphor-icons/react` |
| **Local Gateway** | Node.js (ESM), Express 4, `http-proxy-middleware` |
| **Integrated Demos** | Node.js / Express (`gams`, `legal`), Python / Flask + React (`CashTracking`), Static HTML/CSS/JS (`healthcare-web`) |

---

## Project Structure

```text
alysaporto-v2/
├── index.html                  # App entry HTML & Google Fonts
├── package.json                # Dependencies and npm scripts
├── vite.config.ts              # Vite config + dev server proxy rules
├── tsconfig.json               # Strict TypeScript compiler configuration
├── local-server.js             # Production Express server (dist/ + demo proxy)
├── setup-and-run.js            # One-command dependency install, build, and stack startup
├── start-local-demo.js         # Quick startup script when dependencies are already installed
├── vercel.json                 # Vercel build & sub-project rewrite rules
├── netlify.toml                # Netlify build & redirect configuration
├── render.yaml                 # Render service definitions for demo backends
├── scripts/copy-demos.js       # Post-build script bundling demo frontends into dist/
├── public/                     # Static assets served at /
│   ├── Prof.jpg                # Hero portrait
│   ├── capstone.jpg            # Flagship LPR & RFID Capstone photo
│   ├── Capstone.pdf            # Undergraduate thesis documentation
│   ├── images/hero-wash.jpg    # Subtle hero watercolor atmosphere
│   ├── cv/                     # Drop-in folder for CV_Alysa_Milano.pdf
│   └── ...                     # Project images, reports, and certificates
├── src/
│   ├── main.tsx                # React root mount
│   ├── App.tsx                 # State, i18n persistence, observers, modal & toast
│   ├── index.css               # Tailwind v4 @theme tokens & custom animations
│   ├── data/
│   │   └── content.ts          # Strictly typed EN/ID content & PROFILE_CONFIG
│   └── components/
│       ├── Navbar.tsx          # Sticky header, language switch, mobile drawer
│       ├── Hero.tsx            # Rotating headline, CTAs, Polaroid portrait
│       ├── SelectedWork.tsx    # Flagship capstone, filters, stacked story rows
│       ├── HowIWork.tsx        # Winding SVG path & 5 working principles
│       ├── AboutSkills.tsx     # Multi-domain About & 3-row capability ledger
│       ├── JourneySection.tsx  # Wavy SVG timeline & Experience cards
│       ├── CertificatesSection.tsx # Terracotta anchor band & credential cards
│       ├── ContactFooter.tsx   # Closing CTA, social links, copy-email action
│       └── ProjectModal.tsx    # Accessible case-study detail dialog
├── gams/                       # Live demo: AMMS / General Affairs Management System
├── legal/                      # Live demo: Corporate Legal Compliance System
├── CashTracking/               # Live demo: Cash Tracking App (React + Flask)
├── healthcare-web/             # Live demo: Healthcare Web Platform
└── api/                        # Serverless proxy entry points for deployment
```

---

## Integrated Live Demo Applications

When running via `local-server.js`, all four demo projects are mounted under the main portfolio origin (`http://localhost:3000`):

| Route | Project | Stack | Local Backend Port |
| --- | --- | --- | --- |
| `/gams/` | AMMS (General Affairs Management System) | Express + HTML/JS | `3001` |
| `/legal/` | Corporate Legal Compliance System | Express + HTML/JS | `3009` |
| `/cashtracking/` | Cash Tracking App | React + Python Flask | `5000` |
| `/healthcare-web/` | Healthcare Web Platform | Static HTML/CSS/JS | Served statically |

---

## Getting Started

### Prerequisites

- **Node.js** `>= 18` and **npm**
- **Python** `>= 3.9` and `pip` *(only required if running the `CashTracking` Flask backend locally)*

### Installation

```bash
cd alysaporto-v2
npm install
```

### Running Locally

#### 1. Frontend Development Server (Hot Reload)
Recommended when editing portfolio copy, components, or styles:
```bash
npm run dev
```
Available at `http://localhost:5173`.

#### 2. Production Build + Local Express Server
Builds the optimized `dist/` bundle and serves the portfolio alongside static demo routes:
```bash
npm run build
npm start
```
Available at `http://localhost:3000`.

#### 3. Full Demo Stack (Portfolio + All Live Backends)
Automatically installs sub-project dependencies, builds `dist/` if missing, and starts **GAMS (`3001`)**, **Legal (`3009`)**, **CashTracking (`5000`)**, and the main **Proxy (`3000`)**:
```bash
node setup-and-run.js
```
On subsequent runs (once dependencies are installed), you can launch all services directly with:
```bash
node start-local-demo.js
```
Available at `http://localhost:3000`. Press `Ctrl + C` to stop.

---

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts Vite development server on port `5173` with HMR and API proxy |
| `npm run build` | Runs strict TypeScript check (`tsc --noEmit`) and builds `dist/` via Vite |
| `npm run preview` | Previews the compiled `dist/` bundle using Vite |
| `npm start` | Runs `local-server.js` (Express server serving `dist/` + demo routes on port `3000`) |

---

## Customization & Content Maintenance

All portfolio copy and profile links are centralized in **`src/data/content.ts`**:

1. **Profile & Contact Info** — Edit `PROFILE_CONFIG` (`email`, `cvPath`, `linkedin`, `github`, `instagram`) in `src/data/content.ts`.
2. **CV File** — Place the finalized PDF at `public/cv/CV_Alysa_Milano.pdf`. All **Download CV** buttons automatically detect and serve it.
3. **Projects, Experience & Certificates** — Update both `PORTFOLIO_CONTENT.en` and `PORTFOLIO_CONTENT.id` in `src/data/content.ts`. Sections with more than 4 items automatically paginate with `Show more / Show less`.
4. **Hero Portrait Framing** — Adjust `--portrait-zoom`, `--portrait-pos-x`, and `--portrait-pos-y` in `src/index.css`.
5. **Palette & Theme Tokens** — Edit the Tailwind v4 `@theme` block in `src/index.css`.

---

## Deployment

- **Vercel (Frontend + Serverless Rewrites):** Configured via `vercel.json` (`buildCommand: "npm run build"`, `outputDirectory: "dist"`, bundling `/gams`, `/legal`, `/cashtracking`, and `/healthcare-web` into `dist/` automatically).
- **Netlify (Static + Redirects):** Configured via `netlify.toml` (`command = "npm run build"`, `publish = "dist"`).
- **Render (Standalone Backends):** Configured via `render.yaml` for hosting the `gams`, `legal`, and `CashTracking` backend services independently.
