// Company-level details shared by every role at that company.
// Logos are single-color marks on transparency; the UI tints them to the
// current text color, so any color in the source file is ignored.
export type Company = {
  /** Path under /public. */
  logo?: string;
  url?: string;
};

export const companies: Record<string, Company> = {
  Perficient: { logo: "/logos/perficient.svg", url: "https://www.perficient.com" },
  "Columbia College": { logo: "/logos/columbia-college.png", url: "https://www.ccis.edu" },
  Hillyard: { logo: "/logos/hillyard.png", url: "https://www.hillyard.com" },
  "Tygr Creative": { logo: "/logos/tygr-creative.png", url: "https://tygrcreative.com" },
};
