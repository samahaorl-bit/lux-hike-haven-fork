# App Structure

Updated: 2026-04-09

Snapshot command:

```bash
tree -L 4 -I '.git|node_modules|.next' /workspaces/lux-hike-haven
```

```text
/workspaces/lux-hike-haven
|-- APP_STRUCTURE.md
|-- DEPLOY_INDEXING_CHECKLIST.txt
|-- README.md
|-- SEARCH_CONSOLE_SUBMISSION_PLAN.md
|-- SEO_CLIENT_STATUS.txt
|-- SEO_CTR_TEST_RUNBOOK.md
|-- SEO_EXECUTION_STATUS.txt
|-- airbnbgaery.png
|-- bun.lockb
|-- components.json
|-- eslint.config.js
|-- global.d.ts
|-- next-env.d.ts
|-- next.config.mjs
|-- package-lock.json
|-- package.json
|-- page1.png
|-- phototour.png
|-- pnpm-lock.yaml
|-- postcss.config.js
|-- public
|   |-- Central-stylish
|   |-- Photo tour
|   |-- favicon.ico
|   |-- hiking-maps
|   |-- placeholder.svg
|   `-- site.webmanifest
|-- src
|   |-- app
|   |   |-- App.css
|   |   |-- blog
|   |   |   `-- page.tsx
|   |   |-- en
|   |   |   |-- blog
|   |   |   |-- hiking-in-luxembourg
|   |   |   |-- luxembourg-hiking-trails
|   |   |   `-- page.tsx
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   |-- nl
|   |   |   |-- beginners-wandelroutes-luxemburg
|   |   |   |-- blog
|   |   |   |-- mullerthal-wandeling
|   |   |   |-- overnachten-bij-wandelroutes-luxemburg
|   |   |   |-- page.tsx
|   |   |   |-- regenachtige-dag-luxemburg
|   |   |   |-- seizoenswandelroutes-luxemburg
|   |   |   |-- wandelen-in-luxemburg
|   |   |   |-- wandelen-met-kinderen-luxemburg
|   |   |   |-- wandelroutes-luxemburg
|   |   |   `-- wandelweekend-luxemburg
|   |   |-- not-found.tsx
|   |   |-- opengraph-image.png
|   |   |-- page.tsx
|   |   |-- photo-tour
|   |   |   `-- page.tsx
|   |   |-- providers.tsx
|   |   |-- robots.ts
|   |   `-- sitemap.ts
|   |-- assets
|   |-- components
|   |   |-- AboutSection.tsx
|   |   |-- AmenitiesSection.tsx
|   |   |-- ApartmentSection.tsx
|   |   |-- ContactSection.tsx
|   |   |-- CtaReserveSection.tsx
|   |   |-- Footer.tsx
|   |   |-- GrevenmacherSection.tsx
|   |   |-- HeroSection.tsx
|   |   |-- HikingGuide.tsx
|   |   |-- ListingDetailSection.tsx
|   |   |-- RevealOnScroll.tsx
|   |   |-- SleepSection.tsx
|   |   |-- blog
|   |   `-- ui
|   |-- hooks
|   |   |-- use-mobile.tsx
|   |   `-- use-toast.ts
|   `-- lib
|       |-- blog.ts
|       |-- hiking-routes.ts
|       |-- links.ts
|       |-- site.ts
|       `-- utils.ts
|-- tailwind.config.ts
|-- tsconfig.app.json
`-- tsconfig.json
```
