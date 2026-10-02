import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RichText } from "@/components/content/rich-text";
import { formatDate } from "@/lib/dates";
import { getPost, getPosts } from "@/lib/sanity/queries";
import { writingCategories } from "@/lib/taxonomy";

export const revalidate = 3600;

export async function generateStaticParams() {
  return (await getPosts()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/writing/[slug]">): Promise<Metadata> {
  const post = await getPost((await params).slug);
  return post ? { title: post.title, description: post.excerpt ?? undefined } : {};
}

export default async function PostPage({ params }: PageProps<"/writing/[slug]">) {
  const post = await getPost((await params).slug);
  if (!post) notFound();

  const category = writingCategories.find((c) => c.slug === post.category);

  return (
    <article>
      <header className="mb-10">
        <p className="text-sm text-muted">
          {category?.label} · <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{post.title}</h1>
        {post.excerpt && <p className="mt-4 text-lg text-muted">{post.excerpt}</p>}
      </header>
      <RichText value={post.body} />
    </article>
  );
}
