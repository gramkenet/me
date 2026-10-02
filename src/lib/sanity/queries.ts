import { defineQuery } from "next-sanity";
import { z } from "zod";
import { sanityClient } from "./client";
import {
  caseStudySchema,
  caseStudySummarySchema,
  postSchema,
  postSummarySchema,
} from "./schemas";

// Joins the asset's dimensions and blur placeholder into an image object.
const imageMeta = `"dimensions": asset->metadata.dimensions, "lqip": asset->metadata.lqip`;

const summaryProjection = `title, "slug": slug.current, excerpt, publishedAt, category,
  "coverImage": select(defined(coverImage.asset) => coverImage{ ..., ${imageMeta} }, null)`;
const bodyProjection = `body[]{ ..., _type == "image" => { ${imageMeta} } }`;
const caseStudyProjection = `${summaryProjection}, client, role, technologies`;

const postsQuery = defineQuery(
  `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) { ${summaryProjection} }`,
);
const postQuery = defineQuery(
  `*[_type == "post" && slug.current == $slug][0] { ${summaryProjection}, ${bodyProjection} }`,
);
const caseStudiesQuery = defineQuery(
  `*[_type == "caseStudy" && defined(slug.current)] | order(publishedAt desc) { ${caseStudyProjection} }`,
);
const caseStudyQuery = defineQuery(
  `*[_type == "caseStudy" && slug.current == $slug][0] { ${caseStudyProjection}, ${bodyProjection} }`,
);

async function fetchList<T>(query: string, schema: z.ZodType<T>): Promise<T[]> {
  return z.array(schema).parse(await sanityClient.fetch(query));
}

async function fetchOne<T>(query: string, slug: string, schema: z.ZodType<T>): Promise<T | null> {
  return schema.nullable().parse(await sanityClient.fetch(query, { slug }));
}

export const getPosts = () => fetchList(postsQuery, postSummarySchema);
export const getPost = (slug: string) => fetchOne(postQuery, slug, postSchema);
export const getCaseStudies = () => fetchList(caseStudiesQuery, caseStudySummarySchema);
export const getCaseStudy = (slug: string) => fetchOne(caseStudyQuery, slug, caseStudySchema);
