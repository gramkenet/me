import { EntryList } from "./entry-list";

type Entry = {
  slug: string;
  title: string;
  excerpt: string | null;
  publishedAt: string;
  category: string;
};

/** Renders one anchored section per category, skipping empty ones. */
export function GroupedEntries({
  entries,
  categories,
  basePath,
  emptyMessage,
}: {
  entries: Entry[];
  categories: readonly { slug: string; label: string }[];
  basePath: string;
  emptyMessage: string;
}) {
  const groups = categories
    .map((c) => ({ ...c, entries: entries.filter((e) => e.category === c.slug) }))
    .filter((g) => g.entries.length > 0);

  if (groups.length === 0) return <p className="text-muted">{emptyMessage}</p>;

  return (
    <>
      <nav aria-label="Categories" className="flex flex-wrap gap-2">
        {groups.map((g) => (
          <a key={g.slug} href={`#${g.slug}`} className="chip hover:border-foreground">
            {g.label}
          </a>
        ))}
      </nav>
      {groups.map((g) => (
        <section key={g.slug} id={g.slug} className="mt-12 scroll-mt-24">
          <h2 className="section-title">{g.label}</h2>
          <EntryList entries={g.entries} basePath={basePath} />
        </section>
      ))}
    </>
  );
}
