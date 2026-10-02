import NextLink from "next/link";

export type LinkBaseProps = Omit<React.ComponentProps<"a">, "href"> & { href: string };

export function isExternal(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

/** Uses next/link for internal routes and a plain anchor for everything else. */
export function LinkBase({ href, ...props }: LinkBaseProps) {
  if (isExternal(href)) {
    const newTab = href.startsWith("http");
    return <a href={href} {...(newTab && { target: "_blank", rel: "noreferrer" })} {...props} />;
  }
  return <NextLink href={href} {...props} />;
}
