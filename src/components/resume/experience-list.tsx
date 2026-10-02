import { BadgeList, Heading, Text, TextLink } from "@/components/ui";
import { companies, type Experience } from "@/content/resume";
import { formatRange } from "@/lib/dates";
import { CompanyLogo } from "./company-logo";

type Group = { company: string; roles: Experience[] };

/** Merges consecutive roles at the same company, e.g. promotions. */
function groupByCompany(items: Experience[]): Group[] {
  const groups: Group[] = [];
  for (const item of items) {
    const last = groups.at(-1);
    if (last?.company === item.company) last.roles.push(item);
    else groups.push({ company: item.company, roles: [item] });
  }
  return groups;
}

export function ExperienceList({ items }: { items: Experience[] }) {
  return (
    <ol className="space-y-12">
      {groupByCompany(items).map((group) => {
        const first = group.roles[0];
        const last = group.roles.at(-1)!;
        const { logo, url } = companies[group.company] ?? {};
        const multiple = group.roles.length > 1;
        return (
          <li key={`${group.company}-${first.startDate}`} className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <CompanyLogo logo={logo} />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <Heading level={3} size="md">
                  {url ? (
                    <TextLink href={url} variant="standalone">
                      {group.company}
                    </TextLink>
                  ) : (
                    group.company
                  )}
                </Heading>
                {multiple && (
                  <Text size="sm" tone="muted">
                    {formatRange(last.startDate, first.endDate)}
                  </Text>
                )}
              </div>
              <ol className={multiple ? "mt-3 space-y-5 border-l-2 border-border pl-5" : "mt-1"}>
                {group.roles.map((role) => (
                  <Role key={`${role.title}-${role.startDate}`} role={role} />
                ))}
              </ol>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

function Role({ role }: { role: Experience }) {
  return (
    <li>
      <Heading level={4} size="sm">
        {role.title}
      </Heading>
      <Text size="sm" tone="muted">
        {formatRange(role.startDate, role.endDate)}
        {role.location && ` · ${role.location}`}
      </Text>
      {role.summary && <Text className="mt-2">{role.summary}</Text>}
      {role.highlights.length > 0 && (
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          {role.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
      {role.technologies.length > 0 && (
        <BadgeList items={role.technologies} label="Technologies" className="mt-4" />
      )}
    </li>
  );
}
