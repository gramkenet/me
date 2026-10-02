import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { socialLinks } from "@/components/social-links";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  const links = socialLinks();
  return (
    <>
      <PageHeader title="Contact" intro="The best ways to reach me." />
      {links.length > 0 ? (
        <ul className="space-y-4">
          {links.map(({ label, value, href, Icon }) => (
            <li key={label} className="flex items-center gap-3">
              <Icon className="size-4 text-muted" aria-hidden />
              <span className="w-20 text-muted">{label}</span>
              <a href={href} className="underline underline-offset-4">
                {value.replace(/^https?:\/\/(www\.)?/, "")}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted">Contact details coming soon.</p>
      )}
    </>
  );
}
