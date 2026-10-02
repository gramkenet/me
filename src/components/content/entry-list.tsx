import { CardLink, Heading, Text } from "@/components/ui";
import { formatDate } from "@/lib/dates";
import type { SanityImage as SanityImageData } from "@/lib/sanity/schemas";
import { SanityImage } from "./sanity-image";

type Entry = {
  slug: string;
  title: string;
  excerpt: string | null;
  publishedAt: string;
  coverImage?: SanityImageData | null;
};

export function EntryList({ entries, basePath }: { entries: Entry[]; basePath: string }) {
  return (
    <ul className="space-y-3">
      {entries.map((entry) => (
        <li key={entry.slug}>
          <CardLink href={`${basePath}/${entry.slug}`} className="flex flex-col gap-5 p-5 sm:flex-row">
            <div className="min-w-0 flex-1">
              <Heading level={3} size="sm" className="group-hover:underline underline-offset-4">
                {entry.title}
              </Heading>
              {entry.excerpt && (
                <Text tone="muted" className="mt-1">
                  {entry.excerpt}
                </Text>
              )}
              <Text size="sm" tone="muted" className="mt-3">
                <time dateTime={entry.publishedAt}>{formatDate(entry.publishedAt)}</time>
              </Text>
            </div>
            {entry.coverImage && (
              <SanityImage
                image={entry.coverImage}
                width={224}
                aspect={16 / 10}
                sizes="(max-width: 640px) 100vw, 224px"
                className="rounded-md sm:order-first sm:w-56 sm:shrink-0 sm:self-start"
              />
            )}
          </CardLink>
        </li>
      ))}
    </ul>
  );
}
