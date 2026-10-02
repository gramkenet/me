import { Badge, TextLink } from "@/components/ui";
import type { Certification } from "@/content/resume";
import { formatYearMonth } from "@/lib/dates";

export function CertificationList({ items }: { items: Certification[] }) {
  const thisMonth = new Date().toISOString().slice(0, 7);
  return (
    <ul className="space-y-3">
      {items.map((c) => (
        <li key={c.name} className="flex flex-wrap justify-between gap-x-4">
          <span>
            {c.url ? (
              <TextLink href={c.url}>{c.name}</TextLink>
            ) : (
              c.name
            )}{" "}
            <span className="text-muted">· {c.issuer}</span>
          </span>
          <span className="flex items-center gap-2 text-sm text-muted">
            {c.expires &&
              (c.expires >= thisMonth ? (
                <Badge tone="success">Active</Badge>
              ) : (
                <Badge>Expired</Badge>
              ))}
            {c.date && formatYearMonth(c.date)}
          </span>
        </li>
      ))}
    </ul>
  );
}
