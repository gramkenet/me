import type { Certification } from "@/content/resume";
import { formatYearMonth } from "@/lib/dates";

export function CertificationList({ items }: { items: Certification[] }) {
  return (
    <ul className="space-y-3">
      {items.map((c) => (
        <li key={`${c.name}-${c.date}`} className="flex flex-wrap justify-between gap-x-4">
          <span>
            {c.url ? (
              <a href={c.url} className="underline underline-offset-4">
                {c.name}
              </a>
            ) : (
              c.name
            )}{" "}
            <span className="text-muted">· {c.issuer}</span>
          </span>
          <span className="text-sm text-muted">{formatYearMonth(c.date)}</span>
        </li>
      ))}
    </ul>
  );
}
