import { ArrowUpRight, Code2 } from 'lucide-react'
import type { Project } from '@/data/cv'
import { ExternalLink } from './ExternalLink'

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {projects.map((project) => (
        <li
          key={project.name}
          className="avoid-break lift flex flex-col rounded-xl border border-rule bg-surface p-5"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-[20px] leading-tight font-medium tracking-[-0.01em] text-ink">
              {project.href ? (
                <ExternalLink
                  href={project.href}
                  className="underline decoration-rule-strong underline-offset-[6px] transition-colors hover:text-accent hover:decoration-accent"
                >
                  {project.name}
                </ExternalLink>
              ) : (
                project.name
              )}
            </h3>
            <div className="no-print flex shrink-0 gap-1">
              {project.repo && (
                <ExternalLink
                  href={project.repo}
                  label={`${project.name} source on GitHub`}
                  className="rounded-md p-1.5 text-ink-3 transition-colors hover:bg-panel hover:text-ink"
                >
                  <Code2 aria-hidden className="size-4" />
                </ExternalLink>
              )}
              {project.href && (
                <ExternalLink
                  href={project.href}
                  label={`Open ${project.name}`}
                  className="rounded-md p-1.5 text-ink-3 transition-colors hover:bg-panel hover:text-accent"
                >
                  <ArrowUpRight aria-hidden className="size-4" />
                </ExternalLink>
              )}
            </div>
          </div>

          <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-ink-2">{project.blurb}</p>

          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-rule bg-panel px-2 py-0.5 text-[11.5px] text-ink-3"
              >
                {tag}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}
