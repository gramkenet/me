import { Heading, Text } from "@/components/ui";

export function PageHeader({
  title,
  intro,
  eyebrow,
  children,
}: {
  title: string;
  intro?: React.ReactNode;
  /** Small line above the title, e.g. a category or date. */
  eyebrow?: React.ReactNode;
  /** Extra content under the intro, e.g. actions or metadata. */
  children?: React.ReactNode;
}) {
  return (
    <header className="mb-12">
      {eyebrow && <div className="mb-3 flex flex-wrap items-center gap-2 text-sm text-muted">{eyebrow}</div>}
      <Heading level={1} size="xl">
        {title}
      </Heading>
      {intro && (
        <Text size="lg" tone="muted" className="mt-4 max-w-2xl">
          {intro}
        </Text>
      )}
      {children && <div className="mt-6">{children}</div>}
    </header>
  );
}
