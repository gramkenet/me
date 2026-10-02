import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CoverImage } from "@/components/content/cover-image";
import { RichText } from "@/components/content/rich-text";
import { PageHeader } from "@/components/page-header";
import { Badge, BadgeList, Card, Text } from "@/components/ui";
import { urlFor } from "@/lib/sanity/image";
import { getCaseStudies, getCaseStudy } from "@/lib/sanity/queries";
import { workCategories } from "@/lib/taxonomy";

export const revalidate = 3600;

export async function generateStaticParams() {
  return (await getCaseStudies()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const study = await getCaseStudy((await params).slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.excerpt ?? undefined,
    openGraph: study.coverImage
      ? { images: [{ url: urlFor(study.coverImage).width(1200).height(630).fit("crop").url(), width: 1200, height: 630 }] }
      : undefined,
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const study = await getCaseStudy((await params).slug);
  if (!study) notFound();

  const category = workCategories.find((c) => c.slug === study.category);
  const facts = [
    ["Client", study.client],
    ["Role", study.role],
  ].filter((f): f is [string, string] => !!f[1]);

  return (
    <article>
      <PageHeader
        title={study.title}
        intro={study.excerpt}
        eyebrow={category && <Badge tone="brand">{category.label}</Badge>}
      >
        {(facts.length > 0 || !!study.technologies?.length) && (
          <Card className="mt-2 grid gap-5 sm:grid-cols-2">
            {facts.map(([label, value]) => (
              <div key={label}>
                <Text size="sm" tone="muted">
                  {label}
                </Text>
                <Text className="mt-1">{value}</Text>
              </div>
            ))}
            {!!study.technologies?.length && (
              <div className="sm:col-span-2">
                <Text size="sm" tone="muted">
                  Stack
                </Text>
                <BadgeList items={study.technologies} label="Technologies" className="mt-2" />
              </div>
            )}
          </Card>
        )}
      </PageHeader>
      <CoverImage image={study.coverImage} />
      <RichText value={study.body} />
    </article>
  );
}
