import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CoverImage } from "@/components/content/cover-image";
import { RichText } from "@/components/content/rich-text";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui";
import { formatDate } from "@/lib/dates";
import { urlFor } from "@/lib/sanity/image";
import { getPost, getPosts } from "@/lib/sanity/queries";
import { writingCategories } from "@/lib/taxonomy";

export const revalidate = 3600;

export async function generateStaticParams() {
  return (await getPosts()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/writing/[slug]">): Promise<Metadata> {
  const post = await getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt ?? undefined,
    openGraph: post.coverImage
      ? { images: [{ url: urlFor(post.coverImage).width(1200).height(630).fit("crop").url(), width: 1200, height: 630 }] }
      : undefined,
  };
}

export default async function PostPage({ params }: PageProps<"/writing/[slug]">) {
  const post = await getPost((await params).slug);
  if (!post) notFound();

  const category = writingCategories.find((c) => c.slug === post.category);

  return (
    <article>
      <PageHeader
        title={post.title}
        intro={post.excerpt}
        eyebrow={
          <>
            {category && <Badge tone="brand">{category.label}</Badge>}
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </>
        }
      />
      <CoverImage image={post.coverImage} />
      <RichText value={post.body} />
    </article>
  );
}
