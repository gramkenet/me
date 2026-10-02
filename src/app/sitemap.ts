import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getCaseStudies, getPosts } from "@/lib/sanity/queries";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, caseStudies] = await Promise.all([getPosts(), getCaseStudies()]);
  const staticRoutes = ["", "/about", "/resume", "/work", "/writing", "/contact"];

  return [
    ...staticRoutes.map((path) => ({ url: `${site.url}${path}` })),
    ...caseStudies.map((s) => ({ url: `${site.url}/work/${s.slug}`, lastModified: s.publishedAt })),
    ...posts.map((p) => ({ url: `${site.url}/writing/${p.slug}`, lastModified: p.publishedAt })),
  ];
}
