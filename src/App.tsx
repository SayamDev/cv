import { Hero } from '@/components/Hero'
import { Section } from '@/components/Section'
import { SideNav, ThemeToggle } from '@/components/SideNav'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { EducationList } from '@/components/EducationList'
import { ExternalLink } from '@/components/ExternalLink'
import { cv } from '@/data/cv'

const BASE_URL = import.meta.env.BASE_URL

export default function App() {
  return (
    <>
      <a
        href="#summary"
        className="no-print sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:border focus:border-rule-strong focus:bg-surface focus:px-3 focus:py-2 focus:text-[13px] focus:font-medium focus:text-ink"
      >
        Skip to content
      </a>

      <ThemeToggle />

      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        <div className="lg:grid lg:grid-cols-[150px_minmax(0,1fr)] lg:gap-12">
          <SideNav />

          <main className="min-w-0 pb-20">
            <Hero cv={cv} baseUrl={BASE_URL} />

            <Section id="summary" label="Summary">
              <p className="max-w-3xl font-display text-[clamp(1.05rem,2.2vw,1.25rem)] leading-relaxed text-ink-2">
                {cv.summary}
              </p>
            </Section>

            <Section id="experience" label="Experience" title={`${cv.roles.length} roles`}>
              <Experience roles={cv.roles} />
            </Section>

            <Section id="projects" label="Selected work" title="Built and shipped independently">
              <Projects projects={cv.projects} />
            </Section>

            <Section id="skills" label="Skills">
              <Skills groups={cv.skills} />
            </Section>

            <Section id="education" label="Education">
              <EducationList education={cv.education} certifications={cv.certifications} />
            </Section>

            <footer className="border-t rule pt-8 text-[12.5px] text-ink-3">
              <p>
                References available on request. This page is the source of truth for my CV — it is generated
                from a single data file and republished automatically whenever that file changes.
              </p>
              <p className="no-print mt-2">
                <ExternalLink
                  href="https://github.com/SayamDev/cv"
                  className="underline decoration-rule-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  Source on GitHub
                </ExternalLink>
              </p>
            </footer>
          </main>
        </div>
      </div>
    </>
  )
}
