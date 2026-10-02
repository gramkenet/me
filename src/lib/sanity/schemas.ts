import { z } from "zod";
import { workCategorySlugs, writingCategorySlugs } from "@/lib/taxonomy";

// Portable Text is validated loosely: structure is enforced by the Studio
// schema, and the renderer tolerates unknown block types.
const portableText = z.array(z.looseObject({ _type: z.string(), _key: z.string() }));

/** An image with asset metadata joined in by the query (see imageProjection). */
export const sanityImageSchema = z.looseObject({
  asset: z.object({ _ref: z.string() }),
  alt: z.string().nullish(),
  caption: z.string().nullish(),
  dimensions: z.object({ width: z.number(), height: z.number() }),
  lqip: z.string().nullish(),
});

const summaryFields = {
  title: z.string(),
  slug: z.string(),
  excerpt: z.string().nullable(),
  publishedAt: z.iso.datetime({ offset: true }),
  coverImage: sanityImageSchema.nullable(),
};

export const postSummarySchema = z.object({
  ...summaryFields,
  category: z.enum(writingCategorySlugs),
});

export const postSchema = postSummarySchema.extend({ body: portableText });

export const caseStudySummarySchema = z.object({
  ...summaryFields,
  category: z.enum(workCategorySlugs),
  client: z.string().nullable(),
  role: z.string().nullable(),
  technologies: z.array(z.string()).nullable(),
});

export const caseStudySchema = caseStudySummarySchema.extend({ body: portableText });

export type SanityImage = z.infer<typeof sanityImageSchema>;
export type PostSummary = z.infer<typeof postSummarySchema>;
export type Post = z.infer<typeof postSchema>;
export type CaseStudySummary = z.infer<typeof caseStudySummarySchema>;
export type CaseStudy = z.infer<typeof caseStudySchema>;
