import { ArrowUpRight, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { site } from "@/content/site";

type SocialLink = { label: string; value: string; href: string; Icon: LucideIcon };

/** Configured contact links; unset values in `site.links` are omitted. */
export function socialLinks(): SocialLink[] {
  const { email, linkedin, github }: Record<string, string> = site.links;
  const links: SocialLink[] = [
    { label: "Email", value: email, href: `mailto:${email}`, Icon: Mail },
    { label: "LinkedIn", value: linkedin, href: linkedin, Icon: ArrowUpRight },
    { label: "GitHub", value: github, href: github, Icon: ArrowUpRight },
  ];
  return links.filter((l) => l.value);
}

export function SocialLinks() {
  return (
    <ul className="flex gap-5">
      {socialLinks().map(({ label, href, Icon }) => (
        <li key={label}>
          <a href={href} className="inline-flex items-center gap-1 hover:text-foreground">
            {label}
            <Icon className="size-3.5" aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}
