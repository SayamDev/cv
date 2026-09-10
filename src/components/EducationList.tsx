import { Award } from 'lucide-react'
import type { Education } from '@/data/cv'

export function EducationList({
  education,
  certifications,
}: {
  education: Education[]
  certifications: string[]
}) {
  return (
    <div className="space-y-8">
      <ul className="space-y-7">
        {education.map((entry) => (
          <li key={entry.qualification} className="avoid-break">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-[19px] leading-tight font-medium tracking-[-0.01em] text-ink">
                {entry.qualification}
                {entry.grade && <span className="text-accent"> · {entry.grade}</span>}
              </h3>
              {entry.period && (
                <p className="tabular-nums text-[12.5px] whitespace-nowrap text-ink-3">{entry.period}</p>
              )}
            </div>
            <p className="mt-0.5 text-[14px] text-ink-2">{entry.institution}</p>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-3">{entry.subjects.join(' · ')}</p>
          </li>
        ))}
      </ul>

      <div className="avoid-break border-t rule pt-6">
        <h3 className="text-[12px] font-semibold tracking-[0.08em] text-ink-3 uppercase">
          Certifications
        </h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {certifications.map((certification) => (
            <li key={certification} className="flex items-center gap-2 text-[13.5px] text-ink-2">
              <Award aria-hidden className="size-3.5 shrink-0 text-accent" />
              {certification}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
