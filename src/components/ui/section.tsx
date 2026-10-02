import { cn } from "@/lib/cn";
import { Eyebrow } from "./heading";

type SectionProps = Omit<React.ComponentProps<"section">, "title"> & {
  title?: React.ReactNode;
  /** Rendered after the content, e.g. an "All posts →" link. */
  footer?: React.ReactNode;
};

/** A titled page section. Spacing between sections is handled by Stack/parents. */
export function Section({ title, footer, className, children, ...props }: SectionProps) {
  return (
    <section className={cn("scroll-mt-24", className)} {...props}>
      {title && <Eyebrow className="mb-6">{title}</Eyebrow>}
      {children}
      {footer && <div className="mt-6">{footer}</div>}
    </section>
  );
}
