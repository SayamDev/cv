import { useEffect, useState } from 'react'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from './useTheme'

const SECTIONS = [
  { id: 'summary', label: 'Summary' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
]

const THEME_ICON = { system: Monitor, dark: Moon, light: Sun }
const THEME_LABEL = { system: 'System theme', dark: 'Dark theme', light: 'Light theme' }

/**
 * Highlights whichever section is currently in view.
 *
 * Worked out directly from the sections' positions on every scroll, rather than
 * with an IntersectionObserver. The observer only fires when a section crosses
 * its band, and two bugs came out of that: the final section never lit up,
 * because the page stops scrolling before its top ever reaches the band; and
 * once that was patched by ignoring the observer at the bottom of the page,
 * scrolling back up lit nothing, because no crossing occurred to report.
 *
 * Five sections, one rectangle each, on a frame-throttled scroll. Cheap enough
 * to be worth the certainty.
 */
function useActiveSection() {
  const [active, setActive] = useState(SECTIONS[0].id)

  useEffect(() => {
    let frame = 0

    const measure = () => {
      frame = 0

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom) {
        setActive(SECTIONS[SECTIONS.length - 1].id)
        return
      }

      // The line the reader's eye is on, a quarter of the way down the viewport.
      const line = window.innerHeight * 0.25

      let current = SECTIONS[0].id
      for (const section of SECTIONS) {
        const node = document.getElementById(section.id)
        if (!node) continue
        if (node.getBoundingClientRect().top <= line) current = section.id
      }
      setActive(current)
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(measure)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    measure()

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return active
}

export function SideNav() {
  const active = useActiveSection()
  const { theme, cycle } = useTheme()
  const Icon = THEME_ICON[theme]

  return (
    <div className="no-print sticky top-0 hidden h-dvh flex-col justify-between py-14 lg:flex">
      <nav aria-label="Sections">
        <ul className="space-y-1">
          {SECTIONS.map((section) => {
            const isActive = section.id === active
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className="group flex items-center gap-3 py-1.5 text-[13px] transition-colors"
                >
                  <span
                    aria-hidden
                    className={
                      isActive
                        ? 'h-px w-8 bg-accent transition-all'
                        : 'h-px w-4 bg-rule-strong transition-all group-hover:w-8'
                    }
                  />
                  <span className={isActive ? 'font-medium text-ink' : 'text-ink-3 group-hover:text-ink'}>
                    {section.label}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      <button
        type="button"
        onClick={cycle}
        aria-label={`${THEME_LABEL[theme]}. Change theme.`}
        className="inline-flex w-fit items-center gap-2 rounded-lg border border-rule px-3 py-2 text-[12.5px] text-ink-3 transition-colors hover:border-rule-strong hover:text-ink"
      >
        <Icon aria-hidden className="size-3.5" />
        {THEME_LABEL[theme]}
      </button>
    </div>
  )
}

/** The theme control on its own, for viewports without the side rail. */
export function ThemeToggle() {
  const { theme, cycle } = useTheme()
  const Icon = THEME_ICON[theme]

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`${THEME_LABEL[theme]}. Change theme.`}
      className="no-print fixed top-4 right-4 z-40 inline-flex size-10 items-center justify-center rounded-full border border-rule bg-surface text-ink-2 shadow-[var(--shadow-card)] transition-colors hover:text-accent lg:hidden"
    >
      <Icon aria-hidden className="size-4" />
    </button>
  )
}
