# Blog Authoring Guide (EN + NL)

Updated: 2026-04-09

This project stores blog content in code at `src/lib/blog.ts`.

## Quick workflow

1. Open `src/lib/blog.ts`.
2. Add a new Dutch post object and a matching English post object.
3. Reuse the same `translationKey` for both language versions.
4. Use unique `slug` per locale.
5. Run:

```bash
npm run lint
npm run build
```

6. Commit and push.

If the blog data is invalid, build now fails with clear validation errors.

## Required fields per post

Each post object must include:

- `translationKey`
- `locale` (`"nl"` or `"en"`)
- `slug`
- `title`
- `excerpt`
- `description`
- `coverImage` (site-relative path, starts with `/`)
- `publishedAt` (`YYYY-MM-DD`)
- `updatedAt` (`YYYY-MM-DD`)
- `readingMinutes` (> 0)
- `category`
- `focusKeyword`
- `secondaryKeywords` (at least 1)
- `tags`
- `routeHighlights`
- `logisticsHighlights`
- `sections` (at least 1 section with title + paragraph)
- `faq` (at least 1 item)
- `attractionSchema`

Optional:

- `coverImageAlt` (recommended for image SEO)

## SEO template recommendations

### Dutch post

- `focusKeyword`: primary Dutch search term
- `secondaryKeywords`: 2-4 close variants
- `title`: include main keyword naturally
- `description`: include intent and practical value

### English post

- Keep intent aligned with Dutch audience context
- Ensure `translationKey` matches Dutch version
- Use equivalent structure to help bilingual coverage

## Slug rules

- Lowercase only
- Use hyphens (`-`)
- Allowed chars: `a-z`, `0-9`, `-`
- No spaces or special characters

Example:

- `wandelweekend-luxemburg-praktische-checklist`
- `luxembourg-hiking-weekend-practical-checklist`

## Translation key rules

- Use one shared key for EN and NL variants.
- Keep keys stable over time.

Example:

- `translationKey: "weekend-checklist"` for both posts.

## Minimal post skeleton

```ts
{
  translationKey: "your-topic-key",
  locale: "nl",
  slug: "your-nl-slug",
  title: "...",
  excerpt: "...",
  description: "...",
  coverImage: "/Central-stylish/dinning-room.avif",
  coverImageAlt: "...",
  publishedAt: "2026-04-09",
  updatedAt: "2026-04-09",
  readingMinutes: 7,
  category: "...",
  focusKeyword: "...",
  secondaryKeywords: ["..."],
  tags: ["..."],
  routeHighlights: ["..."],
  logisticsHighlights: ["..."],
  sections: [
    {
      title: "...",
      paragraphs: ["..."],
      bullets: ["..."],
    },
  ],
  faq: [
    {
      question: "...",
      answer: "...",
    },
  ],
  attractionSchema: [
    {
      name: "...",
      description: "...",
      locality: "...",
    },
  ],
}
```

## What gets updated automatically

After adding posts in `src/lib/blog.ts`:

- EN/NL blog index pages include them automatically
- EN/NL detail routes are generated automatically
- `/sitemap.xml` includes them automatically
- `/feed.xml` includes them automatically
- Related-post suggestions update automatically

## Final checklist before push

1. Post appears on `/nl/blog` and `/en/blog`.
2. Detail page metadata renders correctly.
3. `npm run lint` passes.
4. `npm run build` passes.
