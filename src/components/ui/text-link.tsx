import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { isExternal, LinkBase, type LinkBaseProps } from "./link-base";

const variants = {
  /** Within running text. */
  inline: "text-link underline underline-offset-4 hover:decoration-2",
  /** Standalone call to action, usually with an arrow. */
  standalone: "font-medium text-foreground underline-offset-4 hover:underline",
  /** Navigation and secondary links. */
  subtle: "text-muted hover:text-foreground",
};

type TextLinkProps = LinkBaseProps & {
  variant?: keyof typeof variants;
  /** Appends → for internal links or ↗ for external ones. */
  arrow?: boolean;
};

export function TextLink({ variant = "inline", arrow, className, children, ...props }: TextLinkProps) {
  const Icon = isExternal(props.href) ? ArrowUpRight : ArrowRight;
  return (
    <LinkBase
      className={cn(arrow && "inline-flex items-center gap-1.5", variants[variant], className)}
      {...props}
    >
      {children}
      {arrow && <Icon className="size-4 shrink-0" aria-hidden />}
    </LinkBase>
  );
}
