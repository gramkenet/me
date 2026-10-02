import { z } from "zod";
import { certifications } from "./certifications";
import { education } from "./education";
import { experience } from "./experience";
import {
  certificationSchema,
  educationSchema,
  experienceSchema,
  skillGroupSchema,
} from "./schema";
import { skills } from "./skills";

// Parsed at module load so bad data fails `next build` rather than rendering wrong.
export const resume = z
  .object({
    experience: z.array(experienceSchema),
    skills: z.array(skillGroupSchema),
    certifications: z.array(certificationSchema),
    education: z.array(educationSchema),
  })
  .parse({ experience, skills, certifications, education });

export { companies, type Company } from "./companies";
export type { Certification, Education, Experience, SkillGroup } from "./schema";
