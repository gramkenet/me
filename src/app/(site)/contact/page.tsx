import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { socialLinks } from "@/components/social-links";
import { Card, Text, TextLink } from "@/components/ui";
import { summary } from "@/content/profile";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  const links = socialLinks();
  return (
    <>
      <PageHeader title="Contact" intro={summary.availability} />
      {links.length > 0 ? (
        <ul className="grid gap-3 sm:grid-cols-2">
          {links.map(({ label, value, href, Icon }) => (
            <li key={label}>
              <Card className="flex items-start gap-3">
                <Icon className="mt-0.5 size-5 text-muted" aria-hidden />
                <div>
                  <Text size="sm" tone="muted">
                    {label}
                  </Text>
                  <TextLink href={href}>{value.replace(/^https?:\/\/(www\.)?/, "")}</TextLink>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      ) : (
        <Text tone="muted">Contact details coming soon.</Text>
      )}
    </>
  );
}
