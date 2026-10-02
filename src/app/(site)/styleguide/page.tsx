import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Download } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import {
  Badge,
  Button,
  ButtonLink,
  Callout,
  Card,
  CardLink,
  Eyebrow,
  Heading,
  Section,
  Stack,
  Text,
  TextLink,
} from "@/components/ui";

export const metadata: Metadata = { title: "Style guide", robots: { index: false } };

const palette = ["primary", "secondary", "accent", "neutral"] as const;
const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const roles = [
  "background",
  "foreground",
  "muted",
  "border",
  "border-strong",
  "surface",
  "surface-hover",
  "link",
  "ring",
  "action",
  "action-foreground",
  "brand-soft",
  "brand-soft-foreground",
];

/** Development-only reference for the design system. */
export default function StyleguidePage() {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <>
      <PageHeader title="Style guide" intro="Tokens and components. Only available in development." />
      <Stack gap="lg">
        <Section title="Palette">
          <Stack gap="sm">
            {palette.map((name) => (
              <div key={name}>
                <Text size="sm" tone="muted" className="mb-2">
                  {name}
                </Text>
                <div className="grid grid-cols-11 overflow-hidden rounded-md border border-border">
                  {steps.map((step) => (
                    <div
                      key={step}
                      title={`${name}-${step}`}
                      className="h-10"
                      style={{ background: `var(--color-${name}-${step})` }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </Stack>
        </Section>

        <Section title="Semantic roles">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {roles.map((role) => (
              <li key={role} className="flex items-center gap-3 text-sm">
                <span
                  className="size-8 shrink-0 rounded-md border border-border"
                  style={{ background: `var(--${role})` }}
                />
                {role}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Typography">
          <Stack gap="sm">
            <Heading level={3} size="display">Display heading</Heading>
            <Heading level={3} size="xl">XL heading</Heading>
            <Heading level={3} size="lg">Large heading</Heading>
            <Heading level={3} size="md">Medium heading</Heading>
            <Heading level={3} size="sm">Small heading</Heading>
            <Eyebrow>Eyebrow / section title</Eyebrow>
            <Text size="lg">Large body text.</Text>
            <Text>
              Body text with an <TextLink href="/styleguide">inline link</TextLink>.
            </Text>
            <Text tone="muted">Muted text.</Text>
            <div className="flex flex-wrap gap-6">
              <TextLink href="/styleguide" variant="standalone" arrow>
                Standalone link
              </TextLink>
              <TextLink href="https://example.com" variant="standalone" arrow>
                External link
              </TextLink>
              <TextLink href="/styleguide" variant="subtle">
                Subtle link
              </TextLink>
            </div>
          </Stack>
        </Section>

        <Section title="Buttons">
          <Stack gap="sm">
            <div className="flex flex-wrap items-center gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button disabled>Disabled</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">
                Large <ArrowRight aria-hidden />
              </Button>
              <ButtonLink href="/styleguide" variant="secondary">
                <Download aria-hidden /> Link as button
              </ButtonLink>
            </div>
          </Stack>
        </Section>

        <Section title="Badges">
          <div className="flex flex-wrap gap-2">
            <Badge>Neutral</Badge>
            <Badge tone="brand">Brand</Badge>
            <Badge tone="success">Success</Badge>
            <Badge tone="warning">Warning</Badge>
            <Badge tone="error">Error</Badge>
            <Badge tone="info">Info</Badge>
          </div>
        </Section>

        <Section title="Cards">
          <div className="grid gap-4 sm:grid-cols-3">
            <Card>
              <Heading level={3} size="sm">Surface</Heading>
              <Text tone="muted" className="mt-1">Default card.</Text>
            </Card>
            <Card variant="outline">
              <Heading level={3} size="sm">Outline</Heading>
              <Text tone="muted" className="mt-1">Quieter grouping.</Text>
            </Card>
            <CardLink href="/styleguide">
              <Heading level={3} size="sm" className="group-hover:underline underline-offset-4">
                Card link
              </Heading>
              <Text tone="muted" className="mt-1">Whole card is clickable.</Text>
            </CardLink>
          </div>
        </Section>

        <Section title="Callouts">
          <Stack gap="sm">
            <Callout tone="info" title="Info">Neutral, helpful context.</Callout>
            <Callout tone="success" title="Success">Something worked.</Callout>
            <Callout tone="warning" title="Warning">Proceed with care.</Callout>
            <Callout tone="error" title="Error">Something went wrong.</Callout>
          </Stack>
        </Section>
      </Stack>
    </>
  );
}
