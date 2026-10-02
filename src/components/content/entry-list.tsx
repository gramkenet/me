import Link from "next/link";
import { formatDate } from "@/lib/dates";

type Entry = { slug: string; title: string; excerpt: string | null; publishedAt: string };

export function EntryList({ entries, basePath }: { entries: Entry[]; basePath: string }) {
  return (
    <ul className="divide-y divide-border">
      {entries.map((entry) => (
        <li key={entry.slug} className="py-5">
          <Link href={`${basePath}/${entry.slug}`} className="group block">
            <h3 className="font-medium group-hover:underline underline-offset-4">{entry.title}</h3>
            {entry.excerpt && <p className="mt-1 text-muted">{entry.excerpt}</p>}
            <time dateTime={entry.publishedAt} className="mt-2 block text-sm text-muted">
              {formatDate(entry.publishedAt)}
            </time>
          </Link>
        </li>
      ))}
    </ul>
  );
}
