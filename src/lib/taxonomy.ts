// Single source of truth for content categories. Used by Zod schemas,
// index-page grouping, and (eventually) the Sanity Studio option lists.

export const workCategories = [
  { slug: "architecture", label: "Architecture" },
  { slug: "engineering-leadership", label: "Engineering Leadership" },
  { slug: "sitecore-dxp", label: "Sitecore / DXP" },
  { slug: "ai-enabled-engineering", label: "AI-enabled Engineering" },
] as const;

export const writingCategories = [
  { slug: "engineering", label: "Engineering" },
  { slug: "architecture", label: "Architecture" },
  { slug: "ai", label: "AI" },
  { slug: "leadership", label: "Leadership" },
  { slug: "product-strategy", label: "Product / Strategy" },
] as const;

export type WorkCategory = (typeof workCategories)[number]["slug"];
export type WritingCategory = (typeof writingCategories)[number]["slug"];

type Slugs<T extends readonly { slug: string }[]> = [T[number]["slug"], ...T[number]["slug"][]];

export const workCategorySlugs = workCategories.map((c) => c.slug) as Slugs<typeof workCategories>;
export const writingCategorySlugs = writingCategories.map((c) => c.slug) as Slugs<
  typeof writingCategories
>;
