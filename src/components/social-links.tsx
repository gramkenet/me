import { ArrowUpRight, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { site } from "@/content/site";
import { TextLink } from "@/components/ui";

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
      {socialLinks().map(({ label, href }) => (
        <li key={label}>
          <TextLink href={href} variant="subtle" arrow className="gap-1 [&_svg]:size-3.5">
            {label}
          </TextLink>
        </li>
      ))}
    </ul>
  );
}
