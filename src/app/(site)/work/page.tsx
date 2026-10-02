import type { Metadata } from "next";
import { GroupedEntries } from "@/components/content/grouped-entries";
import { PageHeader } from "@/components/page-header";
import { getCaseStudies } from "@/lib/sanity/queries";
import { workCategories } from "@/lib/taxonomy";

export const metadata: Metadata = { title: "Work" };
export const revalidate = 3600;

export default async function WorkPage() {
  const caseStudies = await getCaseStudies();
  return (
    <>
      <PageHeader
        title="Work"
        intro="Case studies in architecture, engineering leadership, digital experience platforms, and AI-enabled engineering."
      />
      <GroupedEntries
        entries={caseStudies}
        categories={workCategories}
        basePath="/work"
        emptyMessage="Case studies are on the way."
      />
    </>
  );
}
