import type { Metadata } from "next";
import { GroupedEntries } from "@/components/content/grouped-entries";
import { PageHeader } from "@/components/page-header";
import { getPosts } from "@/lib/sanity/queries";
import { writingCategories } from "@/lib/taxonomy";

export const metadata: Metadata = { title: "Writing" };
export const revalidate = 3600;

export default async function WritingPage() {
  const posts = await getPosts();
  return (
    <>
      <PageHeader
        title="Writing"
        intro="Notes on software engineering, architecture, AI, leadership, and product strategy."
      />
      <GroupedEntries
        entries={posts}
        categories={writingCategories}
        basePath="/writing"
        emptyMessage="No posts yet."
      />
    </>
  );
}
