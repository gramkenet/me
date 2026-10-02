import type { Experience } from "@/content/resume";
import { formatRange } from "@/lib/dates";

export function ExperienceList({ items }: { items: Experience[] }) {
  return (
    <ol className="space-y-10">
      {items.map((job) => (
        <li key={`${job.company}-${job.startDate}`} className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-8">
          <p className="text-sm text-muted sm:pt-0.5">{formatRange(job.startDate, job.endDate)}</p>
          <div>
            <h3 className="font-medium">
              {job.title} ·{" "}
              {job.url ? (
                <a href={job.url} className="underline underline-offset-4">
                  {job.company}
                </a>
              ) : (
                job.company
              )}
            </h3>
            {job.location && <p className="text-sm text-muted">{job.location}</p>}
            {job.summary && <p className="mt-2">{job.summary}</p>}
            {job.highlights.length > 0 && (
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
            {job.technologies.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                {job.technologies.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
