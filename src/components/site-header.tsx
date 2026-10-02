import { nav } from "@/content/site";
import { Container, TextLink } from "@/components/ui";
import { Brand } from "./brand";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <Container className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-5">
        <Brand />
        <div className="flex items-center gap-4">
          <nav aria-label="Primary">
            <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <TextLink
                    href={item.href}
                    variant="subtle"
                    arrow={item.href.startsWith("http")}
                    className="gap-0.5 [&_svg]:size-3.5"
                  >
                    {item.label}
                  </TextLink>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
