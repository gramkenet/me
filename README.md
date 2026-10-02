# me
Personal site for my resume, projects, writing, and professional thought leadership.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS · Sanity · Vercel — plus Shiki, Zod, Lucide, Framer Motion, Vercel Analytics and Speed Insights.

## Where content lives

| Section | Source | Why |
| --- | --- | --- |
| `/resume` | `src/content/resume/*.ts` | Structured, versioned with the code, validated by Zod at build time |
| `/about`, `/contact` | `src/app/*/page.tsx`, `src/content/site.ts` | Stable, rarely changes |
| `/work` (case studies) | Sanity `caseStudy` documents | Long-form, rich text, edited outside the codebase |
| `/writing` | Sanity `post` documents | Long-form, rich text, published often |

Categories for Work and Writing are defined once in `src/lib/taxonomy.ts`.

Sanity Studio is embedded at `/studio` (config in `sanity.config.ts`, content types in `src/sanity/schemaTypes/`). If you change a content type, update the matching Zod schema in `src/lib/sanity/schemas.ts`.

## Development

```sh
npm install
npm run dev   # site at :3000, Studio at :3000/studio
```

## Design system

- **Tokens** — `src/app/globals.css`: the brand palette (`primary`, `secondary`, `accent`, `neutral`, status colors) and semantic roles on top of it (`background`, `surface`, `action`, `brand-soft`, `success-soft`…). Components use only semantic roles, so dark mode is defined in one place.
- **Components** — `src/components/ui/`: `Button`/`ButtonLink`, `TextLink`, `Badge`/`BadgeList`, `Card`/`CardLink`, `Callout`, `Heading`/`Eyebrow`, `Text`, `Section`, `Stack`, `Container`. Each accepts `className` (merged with `tailwind-merge`).
- **Style guide** — `/styleguide` in development shows every token and component.
