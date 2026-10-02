import { cn } from "@/lib/cn";

const sizes = { sm: "text-sm", base: "text-base", lg: "text-lg", xl: "text-xl" };
const tones = { default: "text-foreground", muted: "text-muted" };

type TextProps = React.ComponentProps<"p"> & {
  size?: keyof typeof sizes;
  tone?: keyof typeof tones;
};

export function Text({ size = "base", tone = "default", className, ...props }: TextProps) {
  return <p className={cn(sizes[size], tones[tone], className)} {...props} />;
}
