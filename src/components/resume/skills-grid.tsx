import type { SkillGroup } from "@/content/resume";

export function SkillsGrid({ groups }: { groups: SkillGroup[] }) {
  return (
    <dl className="grid gap-6 sm:grid-cols-2">
      {groups.map((g) => (
        <div key={g.name}>
          <dt className="font-medium">{g.name}</dt>
          <dd className="mt-2 text-muted">{g.skills.join(" · ")}</dd>
        </div>
      ))}
    </dl>
  );
}
