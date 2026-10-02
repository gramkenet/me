export const site = {
  name: "Tyler Gramke",
  // Headline, location, and description follow the LinkedIn profile.
  headline: "Engineering leader, Solutions Architect, and full-stack engineer",
  focus: "AI-enabled workflows, software quality, and productivity",
  location: "Columbia, Missouri",
  description:
    "I connect strategy with hands-on delivery, helping organizations modernize digital platforms, improve how teams build software, and deliver solutions that are technically strong and aligned with business goals.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // Set to a path under /public (e.g. "/resume.pdf") once the PDF exists.
  resumePdf: null as string | null,
  links: {
    // Empty values are hidden.
    email: "",
    linkedin: "https://www.linkedin.com/in/tylergramke",
    github: "",
  },
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/resume", label: "Résumé" },
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  // External: opens in a new tab with an ↗ indicator.
  { href: "https://www.tygrcreative.com", label: "Creative" },
  { href: "/contact", label: "Contact" },
] as const;
