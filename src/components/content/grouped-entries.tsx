import { ButtonLink, Section, Stack, Text } from "@/components/ui";
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

  if (groups.length === 0) return <Text tone="muted">{emptyMessage}</Text>;

  return (
    <Stack gap="lg">
      <nav aria-label="Categories" className="flex flex-wrap gap-2">
        {groups.map((g) => (
          <ButtonLink key={g.slug} href={`#${g.slug}`} variant="secondary" size="sm" className="rounded-full">
            {g.label}
          </ButtonLink>
        ))}
      </nav>
      {groups.map((g) => (
        <Section key={g.slug} id={g.slug} title={g.label}>
          <EntryList entries={g.entries} basePath={basePath} />
        </Section>
      ))}
    </Stack>
  );
}
