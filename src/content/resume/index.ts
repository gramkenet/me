import { z } from "zod";
import { certifications } from "./certifications";
import { experience } from "./experience";
import { certificationSchema, experienceSchema, skillGroupSchema } from "./schema";
import { skills } from "./skills";

// Parsed at module load so bad data fails `next build` rather than rendering wrong.
export const resume = z
  .object({
    experience: z.array(experienceSchema),
    skills: z.array(skillGroupSchema),
    certifications: z.array(certificationSchema),
  })
  .parse({ experience, skills, certifications });

export const currentRole = resume.experience.find((e) => e.endDate === null);

export type { Certification, Experience, SkillGroup } from "./schema";
