import Link from "next/link";
import { nav, site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="container-page flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-5">
        <Link href="/" className="font-semibold tracking-tight">
          {site.name}
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
