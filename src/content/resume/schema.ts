import { z } from "zod";

/** "YYYY-MM" — month precision is the norm for résumés. */
const yearMonth = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/, "Expected YYYY-MM");

export const experienceSchema = z
  .object({
    company: z.string().min(1),
    title: z.string().min(1),
    location: z.string().optional(),
    /** Listed under "Other experience", e.g. side businesses. */
    secondary: z.boolean().optional(),
    startDate: yearMonth,
    /** null = current role */
    endDate: yearMonth.nullable(),
    summary: z.string().optional(),
    highlights: z.array(z.string().min(1)),
    technologies: z.array(z.string().min(1)),
  })
  .refine((e) => e.endDate === null || e.endDate >= e.startDate, {
    message: "endDate must not be before startDate",
    path: ["endDate"],
  });

export const skillGroupSchema = z.object({
  name: z.string().min(1),
  skills: z.array(z.string().min(1)).min(1),
});

export const certificationSchema = z.object({
  name: z.string().min(1),
  issuer: z.string().min(1),
  date: yearMonth.optional(),
  expires: yearMonth.optional(),
  url: z.url().optional(),
});

export const educationSchema = z.object({
  school: z.string().min(1),
  degree: z.string().optional(),
  field: z.string().optional(),
  startYear: z.number().int().optional(),
  endYear: z.number().int().optional(),
});

export type Experience = z.infer<typeof experienceSchema>;
export type SkillGroup = z.infer<typeof skillGroupSchema>;
export type Certification = z.infer<typeof certificationSchema>;
export type Education = z.infer<typeof educationSchema>;
