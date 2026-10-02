import { EntryList } from "@/components/content/entry-list";
import { Hero } from "@/components/hero";
import { Badge, ButtonLink, Card, Container, Heading, Section, Stack, Text, TextLink } from "@/components/ui";
import { focusAreas, industries, summary } from "@/content/profile";
import { getCaseStudies, getPosts } from "@/lib/sanity/queries";

export const revalidate = 3600;

export default async function HomePage() {
  const [caseStudies, posts] = await Promise.all([getCaseStudies(), getPosts()]);

  return (
    <>
      <Hero />
      <Container className="py-16">
        <Stack gap="xl">
          <Section title="What I do">
            <ul className="grid gap-4 sm:grid-cols-2">
              {focusAreas.map((area) => (
                <li key={area.title}>
                  <Card className="h-full">
                    <Heading level={3} size="sm">
                      {area.title}
                    </Heading>
                    <Text tone="muted" className="mt-2">
                      {area.body}
                    </Text>
                  </Card>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-muted">
              Industries:
              {industries.map((i) => (
                <Badge key={i}>{i}</Badge>
              ))}
            </div>
          </Section>

          {caseStudies.length > 0 && (
            <Section
              title="Selected work"
              footer={
                <TextLink href="/work" variant="standalone" arrow>
                  All work
                </TextLink>
              }
            >
              <EntryList entries={caseStudies.slice(0, 3)} basePath="/work" />
            </Section>
          )}

          {posts.length > 0 && (
            <Section
              title="Recent writing"
              footer={
                <TextLink href="/writing" variant="standalone" arrow>
                  All writing
                </TextLink>
              }
            >
              <EntryList entries={posts.slice(0, 5)} basePath="/writing" />
            </Section>
          )}

          <Card variant="outline" className="flex flex-wrap items-center justify-between gap-4">
            <Text className="max-w-md">{summary.availability}</Text>
            <ButtonLink href="/contact">Get in touch</ButtonLink>
          </Card>
        </Stack>
      </Container>
    </>
  );
}
