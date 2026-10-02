import type { Education } from "@/content/resume";

export function EducationList({ items }: { items: Education[] }) {
  return (
    <ul className="space-y-3">
      {items.map((e) => {
        const detail = [e.degree, e.field].filter(Boolean).join(", ");
        const years = [e.startYear, e.endYear].filter(Boolean).join(" – ");
        return (
          <li key={e.school} className="flex flex-wrap justify-between gap-x-4">
            <span>
              {e.school}
              {detail && <span className="text-muted"> · {detail}</span>}
            </span>
            {years && <span className="text-sm text-muted">{years}</span>}
          </li>
        );
      })}
    </ul>
  );
}
