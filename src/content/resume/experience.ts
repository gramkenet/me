import type { Experience } from "./schema";

// Most recent first. Dates are "YYYY-MM"; endDate null = current.
// Consecutive entries at the same company render as one group of roles.
// `secondary` entries are listed separately under "Other experience".
// Logos and URLs live in companies.ts.
export const experience: Experience[] = [
  {
    company: "Perficient",
    title: "Solutions Architect",
    location: "United States",
    startDate: "2023-04",
    endDate: "2026-09",
    highlights: [],
    technologies: [],
  },
  {
    company: "Perficient",
    title: "Lead Technical Consultant",
    location: "United States",
    startDate: "2021-04",
    endDate: "2023-04",
    highlights: [],
    technologies: [],
  },
  {
    company: "Perficient",
    title: "Senior Technical Consultant",
    startDate: "2020-03",
    endDate: "2021-04",
    highlights: [],
    technologies: [],
  },
  {
    company: "Columbia College",
    title: "Senior Web Developer",
    location: "Columbia, Missouri",
    startDate: "2019-08",
    endDate: "2020-02",
    highlights: [],
    technologies: [],
  },
  {
    company: "Perficient",
    title: "Senior Technical Consultant",
    location: "Remote",
    startDate: "2018-10",
    endDate: "2019-08",
    highlights: [],
    technologies: [],
  },
  {
    company: "Columbia College",
    title: "Web Developer",
    location: "Columbia, Missouri",
    startDate: "2015-06",
    endDate: "2018-10",
    highlights: [],
    technologies: [],
  },
  {
    company: "Columbia College",
    title: "Web Systems Analyst",
    location: "Columbia, Missouri",
    startDate: "2014-09",
    endDate: "2015-06",
    highlights: [],
    technologies: [],
  },
  {
    company: "Hillyard",
    title: "Customer Service / Service Coordinator",
    location: "Columbia, Missouri",
    startDate: "2011-07",
    endDate: "2014-09",
    highlights: [],
    technologies: [],
  },
  {
    company: "Prenger Properties",
    title: "Web Developer",
    startDate: "2009-06",
    endDate: "2011-06",
    highlights: [],
    technologies: [],
  },
  {
    company: "Tygr Creative",
    secondary: true,
    title: "Owner & Lead Photographer/Videographer",
    location: "Columbia, Missouri",
    startDate: "2010-02",
    endDate: null,
    summary:
      "A part-time business providing creative services, particularly photography and video production, for the mid-Missouri region. It started with event video production and family portrait photography and now spans wedding videography, documentary filmmaking, family and senior portraits, real estate photography, and small business commercial video production.",
    highlights: [],
    technologies: [],
  },
];
