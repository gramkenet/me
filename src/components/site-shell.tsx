import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

/** Header, main, footer. Pages decide their own width (see Container). */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
