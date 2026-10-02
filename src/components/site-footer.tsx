import { site } from "@/content/site";
import { SocialLinks } from "./social-links";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="container-page flex items-center justify-between py-8 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
