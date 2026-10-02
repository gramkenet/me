import type { Metadata } from "next";
import { Download } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { CertificationList } from "@/components/resume/certification-list";
import { ExperienceList } from "@/components/resume/experience-list";
import { SkillsGrid } from "@/components/resume/skills-grid";
import { resume } from "@/content/resume";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Résumé" };

export default function ResumePage() {
  return (
    <>
      <PageHeader
        title="Résumé"
        intro={
          site.resumePdf && (
            <a
              href={site.resumePdf}
              className="inline-flex items-center gap-2 text-base font-medium text-foreground hover:underline underline-offset-4"
            >
              <Download className="size-4" aria-hidden />
              Download PDF
            </a>
          )
        }
      />

      <section id="experience" className="mb-16 scroll-mt-24">
        <h2 className="section-title">Experience</h2>
        <ExperienceList items={resume.experience} />
      </section>

      <section id="skills" className="mb-16 scroll-mt-24">
        <h2 className="section-title">Skills</h2>
        <SkillsGrid groups={resume.skills} />
      </section>

      {resume.certifications.length > 0 && (
        <section id="certifications" className="scroll-mt-24">
          <h2 className="section-title">Certifications</h2>
          <CertificationList items={resume.certifications} />
        </section>
      )}
    </>
  );
}
