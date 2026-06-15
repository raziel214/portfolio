# John Fredy Quimbaya Orozco

### Senior Java Developer · Solutions Architect · AI Software Architect

9+ years building **banking** and **healthcare** solutions with **Java / Spring Boot**, **C# / .NET Core**, **Python / FastAPI**, **AWS** and **Generative AI**.
University lecturer of Artificial Intelligence at Universidad Cooperativa de Colombia.
Based in **Cali, Colombia** · Remote-friendly.

🌐 **Live portfolio** → https://raziel214.github.io/portfolio/
💼 LinkedIn → [/in/jfqo](https://www.linkedin.com/in/jfqo/)
💻 GitHub → [@raziel214](https://github.com/raziel214)

---

[![Live](https://img.shields.io/badge/live-portfolio-181717?logo=github&logoColor=white)](https://raziel214.github.io/portfolio/)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x_strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Vitest](https://img.shields.io/badge/Vitest-2-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev)
[![ESLint](https://img.shields.io/badge/ESLint-9_flat-4B32C3?logo=eslint&logoColor=white)](https://eslint.org)
[![CI](https://img.shields.io/badge/CI-GitHub_Actions-2088FF?logo=githubactions&logoColor=white)](.github/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## Why this repo

This is not just a portfolio website — it's a **deliberate code sample**. The site itself is small, but it ships with the same engineering discipline I bring to production banking systems: every component typed end-to-end, every quality gate wired into CI, every architectural choice made on purpose.

If you're reviewing this as a recruiter, the [live site](https://raziel214.github.io/portfolio/) is the artifact. If you're reviewing this as an engineer, the **code here** is the artifact.

---

## Featured engineering work

These are the projects I link from the portfolio and use to demonstrate Senior-level work:

| Project                                                                       | Stack                                                                                                                     | What it shows                                                                                                                                            |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[ProyectoDevsu](https://github.com/raziel214/ProyectoDevsu)** ⭐            | Java 17 · Spring Boot 3.5 · RabbitMQ · PostgreSQL · Flyway · Keycloak (OAuth2/OIDC) · Vault · Testcontainers · Karate E2E | Two banking microservices, async events, **database-per-service** + **CQRS-lite**, hexagonal architecture. Devsu technical challenge — feature complete. |
| **[ProyectoDevsuNet](https://github.com/raziel214/ProyectoDevsuNet)**         | .NET 8 · ASP.NET Core · EF Core · same infra                                                                              | The .NET twin of ProyectoDevsu on the same banking domain — **stack-agnostic polyvalence**, same OpenAPI contracts.                                      |
| **[cachesystem](https://github.com/raziel214/cachesystem)**                   | Java 21 · Spring Boot 3.3 · Redis 7 · Hexagonal · Testcontainers · GitHub Actions                                         | Distributed cache REST API with native TTL, **RFC 7807 Problem Details**, multistage Docker, CI pipeline.                                                |
| **[HotelBookingSolution](https://github.com/raziel214/HotelBookingSolution)** | .NET Core 8 · C# · DDD · SQL Server · EF Core · JWT · xUnit + Playwright E2E                                              | Domain-Driven Design with proper layer separation and end-to-end testing.                                                                                |

---

## How this portfolio is built — and why

Every choice here would survive a Senior code review.

### Stack

| Concern           | Pick                                                            | Why                                                                                                                        |
| ----------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **Language**      | TypeScript 5 with `strict: true`                                | No implicit `any`, every prop typed, `ExperienceId` is a union literal — refactors are compiler-checked, not test-checked. |
| **Framework**     | React 18 (function components only)                             | Modern hooks, `React.lazy` + `Suspense` for route-level code splitting.                                                    |
| **Bundler**       | Vite 8                                                          | ~150 ms production builds (vs ~30 s with the deprecated CRA). 119 prod packages instead of 1500+.                          |
| **Router**        | React Router 6 + SPA-fallback `404.html`                        | Deep routes (`/seti-experience`) are crawlable on GitHub Pages despite being a SPA.                                        |
| **i18n**          | `react-i18next` 13                                              | Bilingual ES/EN, browser detection + `localStorage` persistence, **zero hardcoded strings** in components.                 |
| **Quality gates** | ESLint 9 (flat) + `typescript-eslint`, Prettier 3, EditorConfig | Wired into CI; build is gated behind `tsc --noEmit`.                                                                       |
| **Tests**         | Vitest 2 + React Testing Library + jsdom                        | 15 smoke tests over components, ErrorBoundary, i18n — 500 ms.                                                              |
| **CI**            | GitHub Actions                                                  | Pipeline on every PR: `format:check → lint → typecheck → test → build`.                                                    |
| **Hosting**       | GitHub Pages + `gh-pages`                                       | Free, HTTPS, no server to maintain.                                                                                        |

### Architecture decisions worth explaining

1. **Folder-per-component layout** — `src/components/<Name>/{<Name>.tsx, <Name>.test.tsx, <Name>.css, index.ts}`. Matches the Java intuition of "package per class": everything related lives together; the `index.ts` is the public API. Refactors touch one folder, not five sibling files.

2. **Single source of truth** — `src/experiencesConfig.ts` exposes a typed `Experience[]` with `ExperienceId` as a literal union. It feeds **both** the work-experience grid and the parameterized `<ExperienceDetail experienceId={...} />` page. Adding a new experience is one config entry, not a new component + route + import.

3. **DRY route handling** — Ten experience pages collapsed into a single lazy-loaded `<ExperienceDetail />` parameterized by `experienceId`. Saves ten files and ten chances to drift.

4. **Safe i18n** — All emphasized paragraphs render via `<Trans components={{ strong: <strong /> }} />` instead of `dangerouslySetInnerHTML`. Zero XSS surface even if a translation gets compromised.

5. **Error containment** — Every route runs inside an `ErrorBoundary` so a render failure shows a fallback UI with a reload button instead of a white screen.

6. **Recruiter-grade SEO** — `schema.org` **Person** + **WebSite** JSON-LD in `index.html`, `hreflang` (ES/EN/x-default), `sitemap.xml` registered in `robots.txt`, SPA-redirect via `public/404.html` so deep links are indexable. Registered in **Google Search Console**.

### Embedded CV

`public/cv.html` is a print-optimized HTML CV with `@media print` rules. The "View CV / Save as PDF" button on the hero opens it; inside, `window.print()` exports a clean PDF. `public/CurriculumJohnfredy.pdf` (LaTeX-built) is offered alongside as a direct download.

---

## Quick start

```bash
nvm use                  # Node 20 LTS (committed in .nvmrc)
npm install              # ~20 s clean install — 119 production packages
npm run dev              # Vite dev server on http://localhost:3000 (HMR < 100 ms)
```

### Scripts

```bash
npm run dev              # Dev server (hot reload)
npm run build            # tsc --noEmit && vite build (production)
npm run preview          # serve the built bundle locally
npm run typecheck        # tsc --noEmit
npm run lint             # ESLint
npm run lint:fix         # ESLint --fix
npm run format           # Prettier --write
npm run format:check     # Prettier --check
npm run test             # Vitest watch
npm run test:run         # Vitest single run
npm run test:coverage    # Vitest + v8 coverage report
npm run deploy           # build + publish to gh-pages
```

### Requirements

- **Node 20 LTS** (`.nvmrc` committed)
- npm 10+

---

## Project structure

```
src/
├── main.tsx                          Entry — StrictMode + I18nextProvider + SPA-redirect restore
├── experiencesConfig.ts              Typed source of truth for 10 work experiences
├── test-utils.tsx                    renderWithProviders helper (I18nextProvider + MemoryRouter)
├── setupTests.ts                     jest-dom matchers + cleanup
├── vite-env.d.ts                     Vite + image module type declarations
│
├── components/
│   ├── App/                          Router + Suspense + language toggle (semantic <nav>, aria-pressed)
│   ├── ProfileSection/               Hero summary via <Trans> (no dangerouslySetInnerHTML)
│   ├── WorkExperience/               10-card grid generated from experiencesConfig
│   ├── ExperienceDetail/             Lazy-loaded detail page parameterized by experienceId
│   ├── Projects/                     4 featured open-source projects (Devsu featured)
│   ├── Skills/                       6 grouped tech-stack tag clouds
│   ├── Education/                    Degrees with real graduation dates
│   ├── Cursos/                       AWS · Google Cloud · Certiprof badges + contact
│   └── ErrorBoundary/                Render-error containment with reload UI
│
├── i18n/
│   ├── index.ts                      react-i18next setup with detection + persistence
│   ├── index.test.tsx                Fallback / switch / persistence tests
│   └── {es,en}/translation.json      Source of truth for every visible string
│
├── styles/index.css                  Global stylesheet
└── images/                           Profile photo + 9 credential badges (AWS, Google, Scrum)

public/
├── cv.html                           Printable HTML CV (canonical, print-optimized)
├── CurriculumJohnfredy.pdf           LaTeX-built CV (direct download)
├── 404.html                          SPA redirect catcher for deep links on GitHub Pages
├── sitemap.xml                       12 indexable URLs (home + 10 experiences + cv.html)
├── robots.txt                        Allows all crawlers + advertises sitemap

.github/workflows/ci.yml              Format · Lint · Typecheck · Test · Build on every PR
eslint.config.js                      ESLint 9 flat config with typescript-eslint + React rules
vitest.config.ts                      jsdom env + v8 coverage
tsconfig.json                         strict: true, noUnusedLocals, noUnusedParameters
vite.config.js                        base: '/portfolio/', outDir: 'build'
```

---

## Roadmap

- [ ] `og-image.png` (1200×630) for richer LinkedIn / WhatsApp previews
- [ ] CSS Modules to fully scope component styles
- [ ] Coverage badge in this README
- [ ] Tighten profile copy (`profileParagraph1-4`) — still inherited from the LaTeX CV
- [ ] Lighthouse score badge

---

## About me

I lead end-to-end design of enterprise solutions, currently focused on **Generative AI agents** (Pro-code and Low-code) on top of AWS for the financial sector — most recently as AI Software Architect at **SETI / Bancolombia** (Aug 2025 – Apr 2026). Before that, **Solutions Architect at Koralat** evolving a banking Core to microservices on `.NET Core`, leading the migration from `IBM API Connect` → `Gravitee API Manager`.

In parallel I teach **Artificial Intelligence**, **Algorithms** and **Systems Thinking** at Universidad Cooperativa de Colombia. The combination of industry-grade architecture work and university teaching keeps me close to both ends of the field.

I'm open to **Senior Java / Solutions Architect / AI Architect** roles at companies that value engineering depth and modern practices.

**Contact**: see the [portfolio's contact section](https://raziel214.github.io/portfolio/) or [LinkedIn DM](https://www.linkedin.com/in/jfqo/).

---

## License

[MIT](LICENSE) © John Fredy Quimbaya Orozco
