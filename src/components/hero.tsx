import { Badge, ButtonLink, Container, Heading, Text } from "@/components/ui";
import { site } from "@/content/site";

/**
 * Full-bleed brand hero. `data-theme="dark"` scopes the dark semantic tokens
 * to this section, so text, badges, and buttons read correctly on navy in
 * both site themes.
 */
export function Hero() {
  return (
    <section data-theme="dark" className="hero relative isolate overflow-hidden bg-primary-500 text-foreground">
      <div aria-hidden className="hero-backdrop absolute inset-0 -z-10" />
      <Container className="py-20 sm:py-28">
        <Badge tone="brand">Open to new opportunities</Badge>
        <Heading level={1} size="display" className="mt-5">
          {site.name}
        </Heading>
        <Text size="xl" className="mt-3">
          {site.headline}
        </Text>
        <Text tone="muted" className="mt-1">
          {site.focus} · {site.location}
        </Text>
        <Text size="lg" className="mt-8 max-w-2xl">
          {site.description}
        </Text>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/resume">View résumé</ButtonLink>
          <ButtonLink href="/contact" variant="secondary" className="bg-transparent">
            Get in touch
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
