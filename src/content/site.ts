export const site = {
  name: "Tyler Gramke",
  // TODO: refine headline and description.
  headline: "Solutions Architect",
  description:
    "Software architecture, AI-enabled engineering, technical leadership, and product thinking.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // Set to a path under /public (e.g. "/resume.pdf") once the PDF exists.
  resumePdf: null as string | null,
  links: {
    // TODO: fill in. Empty values are hidden.
    email: "",
    linkedin: "",
    github: "",
  },
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/resume", label: "Résumé" },
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
] as const;
