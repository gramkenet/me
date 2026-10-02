import { CircleAlert, CircleCheck, Info, TriangleAlert, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

const tones: Record<string, { classes: string; Icon: LucideIcon }> = {
  info: { classes: "bg-info-soft text-info-strong", Icon: Info },
  success: { classes: "bg-success-soft text-success-strong", Icon: CircleCheck },
  warning: { classes: "bg-warning-soft text-warning-strong", Icon: TriangleAlert },
  error: { classes: "bg-error-soft text-error-strong", Icon: CircleAlert },
};

type CalloutProps = React.ComponentProps<"div"> & {
  tone?: "info" | "success" | "warning" | "error";
  title?: React.ReactNode;
};

export function Callout({ tone = "info", title, className, children, ...props }: CalloutProps) {
  const { classes, Icon } = tones[tone];
  return (
    <div
      role={tone === "error" || tone === "warning" ? "alert" : "note"}
      className={cn("flex gap-3 rounded-lg p-4", classes, className)}
      {...props}
    >
      <Icon className="mt-0.5 size-5 shrink-0" aria-hidden />
      <div className="space-y-1">
        {title && <p className="font-medium">{title}</p>}
        <div className="text-foreground">{children}</div>
      </div>
    </div>
  );
}
