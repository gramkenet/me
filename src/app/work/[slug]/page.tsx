import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RichText } from "@/components/content/rich-text";
import { getCaseStudies, getCaseStudy } from "@/lib/sanity/queries";
import { workCategories } from "@/lib/taxonomy";

export const revalidate = 3600;

export async function generateStaticParams() {
  return (await getCaseStudies()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const study = await getCaseStudy((await params).slug);
  return study ? { title: study.title, description: study.excerpt ?? undefined } : {};
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const study = await getCaseStudy((await params).slug);
  if (!study) notFound();

  const category = workCategories.find((c) => c.slug === study.category);
  const facts = [
    ["Client", study.client],
    ["Role", study.role],
    ["Stack", study.technologies?.join(", ")],
  ].filter((f): f is [string, string] => !!f[1]);

  return (
    <article>
      <header className="mb-10">
        <p className="text-sm text-muted">{category?.label}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{study.title}</h1>
        {study.excerpt && <p className="mt-4 text-lg text-muted">{study.excerpt}</p>}
        {facts.length > 0 && (
          <dl className="mt-8 grid gap-4 border-y border-border py-5 text-sm sm:grid-cols-3">
            {facts.map(([label, value]) => (
              <div key={label}>
                <dt className="text-muted">{label}</dt>
                <dd className="mt-1">{value}</dd>
              </div>
            ))}
          </dl>
        )}
      </header>
      <RichText value={study.body} />
    </article>
  );
}
