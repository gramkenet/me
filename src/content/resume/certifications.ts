import type { Certification } from "./schema";

// Mirrors LinkedIn. Dates are omitted where the profile doesn't show one.
export const certifications: Certification[] = [
  { name: "XM Cloud Certified Developer", issuer: "Sitecore", date: "2025-09", expires: "2027-09" },
  { name: "Sitecore Professional Developer", issuer: "Sitecore", date: "2017-07" },
  { name: "ASP.NET (Core) MVC, HTML/CSS, JavaScript, C#, and SQL (Hard)", issuer: "TestDome" },
  { name: "Scrum Foundations", issuer: "Scrum Alliance" },
  { name: "Lean Six Sigma Yellow Belt", issuer: "GoLeanSixSigma.com", date: "2014-12" },
];
