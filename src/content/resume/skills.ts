import type { SkillGroup } from "./schema";

// Drawn from the LinkedIn summary and top skills.
export const skills: SkillGroup[] = [
  {
    name: "Platforms & CMS",
    skills: ["Sitecore", "SitecoreAI / XM Cloud", "Headless architecture", "Enterprise CMS"],
  },
  {
    name: "Full-stack development",
    skills: ["Next.js", "React", "TypeScript", ".NET Core / MVC", "C#", "SQL", "Webpack", "Front-end framework design"],
  },
  {
    name: "Delivery & infrastructure",
    skills: ["CI/CD pipelines", "Vercel", "Netlify", "Azure", "Cloudflare"],
  },
  {
    name: "Quality",
    skills: ["Unit testing", "Integration testing"],
  },
  {
    name: "AI-enabled engineering",
    skills: ["GitHub Copilot", "Claude Code", "Custom AI solutions"],
  },
  {
    name: "Leadership",
    skills: ["Engineering management", "Solutions architecture", "Client advisory", "Delivery practices"],
  },
];
