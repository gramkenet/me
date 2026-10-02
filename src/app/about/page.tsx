import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = { title: "About" };

// Bio is stable, long-lived prose, so it lives in the repo rather than the CMS.
export default function AboutPage() {
  return (
    <>
      <PageHeader title="About" />
      <div className="prose">
        <h2>Background</h2>
        <p>TODO: professional bio.</p>
        <h2>How I lead</h2>
        <p>TODO: leadership philosophy.</p>
      </div>
    </>
  );
}
