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

## Development

```sh
cp .env.example .env.local   # Sanity vars are optional; Work/Writing render empty without them
npm install
npm run dev
```
