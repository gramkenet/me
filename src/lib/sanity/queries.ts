import { defineQuery } from "next-sanity";
import { z } from "zod";
import { sanityClient } from "./client";
import {
  caseStudySchema,
  caseStudySummarySchema,
  postSchema,
  postSummarySchema,
} from "./schemas";

const summaryProjection = `title, "slug": slug.current, excerpt, publishedAt, category`;
const caseStudyProjection = `${summaryProjection}, client, role, technologies`;

const postsQuery = defineQuery(
  `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) { ${summaryProjection} }`,
);
const postQuery = defineQuery(
  `*[_type == "post" && slug.current == $slug][0] { ${summaryProjection}, body }`,
);
const caseStudiesQuery = defineQuery(
  `*[_type == "caseStudy" && defined(slug.current)] | order(publishedAt desc) { ${caseStudyProjection} }`,
);
const caseStudyQuery = defineQuery(
  `*[_type == "caseStudy" && slug.current == $slug][0] { ${caseStudyProjection}, body }`,
);

async function fetchList<T>(query: string, schema: z.ZodType<T>): Promise<T[]> {
  if (!sanityClient) return [];
  return z.array(schema).parse(await sanityClient.fetch(query));
}

async function fetchOne<T>(query: string, slug: string, schema: z.ZodType<T>): Promise<T | null> {
  if (!sanityClient) return null;
  return schema.nullable().parse(await sanityClient.fetch(query, { slug }));
}

export const getPosts = () => fetchList(postsQuery, postSummarySchema);
export const getPost = (slug: string) => fetchOne(postQuery, slug, postSchema);
export const getCaseStudies = () => fetchList(caseStudiesQuery, caseStudySummarySchema);
export const getCaseStudy = (slug: string) => fetchOne(caseStudyQuery, slug, caseStudySchema);
