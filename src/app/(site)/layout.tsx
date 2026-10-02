import { SiteShell } from "@/components/site-shell";
import { Container } from "@/components/ui";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <SiteShell>
      <Container className="py-16">{children}</Container>
    </SiteShell>
  );
}
