import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

/** Avatar + script wordmark. Links home. */
export function Brand({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-3 rounded-full", className)}>
      <Image
        src="/avatar.jpg"
        alt=""
        width={40}
        height={40}
        priority
        className="size-10 rounded-full object-cover ring-2 ring-border transition-shadow group-hover:ring-link"
      />
      <span className="font-script text-[1.75rem] leading-none text-foreground">{site.name}</span>
    </Link>
  );
}
