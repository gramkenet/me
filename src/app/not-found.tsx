import { PageHeader } from "@/components/page-header";
import { SiteShell } from "@/components/site-shell";
import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <SiteShell>
      <Container className="py-16">
        <PageHeader title="Not found" intro="That page doesn’t exist.">
          <ButtonLink href="/" variant="secondary">
            Back home
          </ButtonLink>
        </PageHeader>
      </Container>
    </SiteShell>
  );
}
