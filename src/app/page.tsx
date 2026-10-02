import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EntryList } from "@/components/content/entry-list";
import { currentRole } from "@/content/resume";
import { site } from "@/content/site";
import { getCaseStudies, getPosts } from "@/lib/sanity/queries";

export const revalidate = 3600;

export default async function HomePage() {
  const [caseStudies, posts] = await Promise.all([getCaseStudies(), getPosts()]);

  return (
    <>
      <section className="mb-20">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{site.name}</h1>
        <p className="mt-3 text-xl text-muted">
          {currentRole ? `${currentRole.title} at ${currentRole.company}` : site.headline}
        </p>
        <p className="mt-6 max-w-2xl text-lg">{site.description}</p>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          <SectionLink href="/resume">Résumé</SectionLink>
          <SectionLink href="/about">About</SectionLink>
        </div>
      </section>

      {caseStudies.length > 0 && (
        <section className="mb-16">
          <h2 className="section-title">Selected work</h2>
          <EntryList entries={caseStudies.slice(0, 3)} basePath="/work" />
          <SectionLink href="/work">All work</SectionLink>
        </section>
      )}

      {posts.length > 0 && (
        <section>
          <h2 className="section-title">Recent writing</h2>
          <EntryList entries={posts.slice(0, 5)} basePath="/writing" />
          <SectionLink href="/writing">All writing</SectionLink>
        </section>
      )}
    </>
  );
}

function SectionLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center gap-1.5 font-medium hover:underline underline-offset-4">
      {children}
      <ArrowRight className="size-4" aria-hidden />
    </Link>
  );
}
