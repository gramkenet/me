import { SiteShell } from "@/components/site-shell";

/** The home page manages its own width so its hero can span the viewport. */
export default function HomeLayout({ children }: LayoutProps<"/">) {
  return <SiteShell>{children}</SiteShell>;
}
