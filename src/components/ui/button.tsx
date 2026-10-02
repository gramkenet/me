import { cn } from "@/lib/cn";
import { LinkBase, type LinkBaseProps } from "./link-base";

const variants = {
  primary: "bg-action text-action-foreground hover:bg-action-hover",
  secondary: "border border-border-strong bg-background text-foreground hover:bg-surface-hover",
  ghost: "text-foreground hover:bg-surface-hover",
};

const sizes = {
  sm: "h-8 gap-1.5 px-3 text-sm",
  md: "h-10 gap-2 px-4 text-sm",
  lg: "h-12 gap-2 px-5 text-base",
};

type ButtonStyleProps = { variant?: keyof typeof variants; size?: keyof typeof sizes };

export function buttonClasses({ variant = "primary", size = "md" }: ButtonStyleProps = {}) {
  return cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors",
    "disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
    variants[variant],
    sizes[size],
  );
}

export function Button({
  variant,
  size,
  className,
  type = "button",
  ...props
}: React.ComponentProps<"button"> & ButtonStyleProps) {
  return <button type={type} className={cn(buttonClasses({ variant, size }), className)} {...props} />;
}

/** A link styled as a button. */
export function ButtonLink({ variant, size, className, ...props }: LinkBaseProps & ButtonStyleProps) {
  return <LinkBase className={cn(buttonClasses({ variant, size }), className)} {...props} />;
}
