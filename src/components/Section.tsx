import type { ReactNode } from 'react'
import { useReveal } from './useReveal'

/**
 * One CV section: a small caps label, an optional count, and the content.
 * Each carries an id so the side navigation can link to it.
 */
export function Section({
  id,
  label,
  title,
  children,
}: {
  id: string
  label: string
  title?: string
  children: ReactNode
}) {
  const ref = useReveal<HTMLElement>()

  return (
    <section ref={ref} id={id} aria-labelledby={`${id}-heading`} className="reveal scroll-mt-24 py-10 sm:py-14">
      <div className="mb-6 flex items-baseline gap-3 border-b rule pb-3">
        <h2
          id={`${id}-heading`}
          className="text-[11px] font-semibold tracking-[0.18em] text-accent uppercase"
        >
          {label}
        </h2>
        {title && <p className="text-[13px] text-ink-3">{title}</p>}
      </div>
      {children}
    </section>
  )
}
