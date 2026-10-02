import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ButtonLink, Card, Text } from "@/components/ui";
import { summary } from "@/content/profile";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "About", description: summary.intro };

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About" intro={site.headline} />
      <div className="prose">
        <p>{summary.intro}</p>
        <p>{summary.experience}</p>

        <h2>AI-enabled delivery</h2>
        <p>{summary.ai}</p>

        {/* TODO: expand into a leadership philosophy; LinkedIn covers experience only. */}
        <h2>How I lead</h2>
        <p>{summary.leadership}</p>

      </div>

      <Card variant="outline" className="mt-16 flex flex-wrap items-center justify-between gap-4">
        <Text className="max-w-md">{summary.availability}</Text>
        <ButtonLink href="/contact">Get in touch</ButtonLink>
      </Card>
    </>
  );
}
