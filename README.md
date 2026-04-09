# Lux Hike Haven

Marketing and SEO-focused Next.js application for a hiking-friendly apartment in Grevenmacher, Luxembourg.

This project combines:
- Conversion-first landing pages
- Dutch and English informational SEO hubs
- A bilingual static blog cluster
- Structured metadata and indexing controls

Updated: 2026-04-09

## Current status

The technical SEO rollout is implemented through Phase 3 in code:
- Home page is positioned as brand and booking gateway
- Dutch hub is positioned as the primary informational ranking page
- Dutch cluster includes family, seasonal, beginner, and rainy-day intent pages
- Canonical/hreflang, redirects, robots, sitemap, and JSON-LD are in place

Operational SEO (indexing, CTR iteration, authority growth) is managed through the documentation listed below.

## Key routes

### Core experience
- `/`
- `/photo-tour`
- `/blog` (redirects to Dutch blog index)

### Dutch SEO cluster
- `/nl/wandelen-in-luxemburg`
- `/nl/wandelroutes-luxemburg`
- `/nl/wandelweekend-luxemburg`
- `/nl/mullerthal-wandeling`
- `/nl/overnachten-bij-wandelroutes-luxemburg`
- `/nl/wandelen-met-kinderen-luxemburg`
- `/nl/seizoenswandelroutes-luxemburg`
- `/nl/beginners-wandelroutes-luxemburg`
- `/nl/regenachtige-dag-luxemburg`
- `/nl/blog`

### English SEO cluster
- `/en/hiking-in-luxembourg`
- `/en/luxembourg-hiking-trails`
- `/en/blog`

### SEO infrastructure endpoints
- `/robots.txt`
- `/sitemap.xml`

## SEO architecture

- Central SEO config and route map: `src/lib/site.ts`
- Dynamic robots with production host guard: `src/app/robots.ts`
- Dynamic sitemap with alternates and content freshness: `src/app/sitemap.ts`
- Metadata and site-level schema: `src/app/layout.tsx`
- Redirect rules (www, slug canonicalization): `next.config.mjs`

## Documentation map

- `README.md` - project overview and setup
- `APP_STRUCTURE.md` - current repository structure snapshot
- `DEPLOY_INDEXING_CHECKLIST.txt` - post-deploy validation and indexing steps
- `SEARCH_CONSOLE_SUBMISSION_PLAN.md` - prioritized URL submission queue and 14-day checks
- `SEO_CTR_TEST_RUNBOOK.md` - monthly metadata testing and internal anchor refresh process
- `SEO_EXECUTION_STATUS.txt` - implementation status and change log
- `SEO_CLIENT_STATUS.txt` - client-facing SEO status summary

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 15.5.9 (App Router) |
| Language | TypeScript |
| UI | React 19, shadcn-ui, Radix UI, lucide-react |
| Styling | Tailwind CSS |
| Forms/validation | react-hook-form, zod |
| Notifications | sonner |
| Contact integration | emailjs-com |

## Environment variables

Create `.env.local` in project root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_public_key_or_user_id

# Optional but recommended for canonical metadata
NEXT_PUBLIC_SITE_URL=https://luxtraveler.eu

# Optional server-side override
SITE_URL=https://luxtraveler.eu
```

EmailJS template variables expected by the contact form:
- `from_name`
- `to_email`
- `reply_to`
- `message`

## Getting started

### pnpm

```bash
pnpm install
pnpm dev
```

### npm

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start local dev server |
| `npm run build` | Build for production |
| `npm run start` | Start production server (requires build) |
| `npm run lint` | Run ESLint |

## Common troubleshooting

### `npm run start` exits with code 1

Most common causes:
1. No production build exists yet. Run `npm run build` first.
2. Port 3000 is already in use.

### EmailJS submit issues

If you see missing recipient errors, verify:
1. Environment variables are loaded.
2. Template field names match the payload (`to_email`, `reply_to`, etc.).

## High-level structure

```text
src/
	app/
		page.tsx
		layout.tsx
		robots.ts
		sitemap.ts
		en/
		nl/
		blog/
		photo-tour/
	components/
		blog/
		ui/
	lib/
		site.ts
		blog.ts
		hiking-routes.ts
		links.ts
```

For a fuller tree snapshot, see `APP_STRUCTURE.md`.

## License

Proprietary. All rights reserved.
