import type { Metadata } from "next";
import { Download } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { CertificationList } from "@/components/resume/certification-list";
import { EducationList } from "@/components/resume/education-list";
import { ExperienceList } from "@/components/resume/experience-list";
import { SkillsGrid } from "@/components/resume/skills-grid";
import { ButtonLink, Section, Stack } from "@/components/ui";
import { resume } from "@/content/resume";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Résumé" };

export default function ResumePage() {
  const primary = resume.experience.filter((e) => !e.secondary);
  const other = resume.experience.filter((e) => e.secondary);

  return (
    <>
      <PageHeader title="Résumé" intro={site.headline}>
        {site.resumePdf && (
          <ButtonLink href={site.resumePdf} variant="secondary">
            <Download aria-hidden />
            Download PDF
          </ButtonLink>
        )}
      </PageHeader>

      <Stack gap="lg">
        <Section id="experience" title="Experience">
          <ExperienceList items={primary} />
        </Section>

        {other.length > 0 && (
          <Section id="other-experience" title="Other experience">
            <ExperienceList items={other} />
          </Section>
        )}

        <Section id="skills" title="Skills">
          <SkillsGrid groups={resume.skills} />
        </Section>

        {resume.certifications.length > 0 && (
          <Section id="certifications" title="Certifications">
            <CertificationList items={resume.certifications} />
          </Section>
        )}

        {resume.education.length > 0 && (
          <Section id="education" title="Education">
            <EducationList items={resume.education} />
          </Section>
        )}
      </Stack>
    </>
  );
}
