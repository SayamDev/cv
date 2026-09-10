import { ArrowUpRight, Download, Mail, MapPin, Printer } from 'lucide-react'
import type { CV } from '@/data/cv'
import { ExternalLink } from './ExternalLink'

const CONTACT_CLASS =
  'inline-flex items-center gap-1 text-ink-2 underline decoration-rule-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent'

function ContactLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className={CONTACT_CLASS}>
      {children}
    </a>
  )
}

export function Hero({ cv, baseUrl }: { cv: CV; baseUrl: string }) {
  return (
    <header className="pt-14 pb-2 sm:pt-20">
      <p className="text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">
        Curriculum vitae
      </p>

      <h1 className="mt-4 font-display text-[clamp(2.75rem,9vw,5rem)] leading-[0.95] font-medium tracking-[-0.02em] text-ink">
        {cv.name}
      </h1>

      <p className="mt-4 max-w-2xl font-display text-[clamp(1.15rem,3vw,1.5rem)] leading-snug text-ink-2 italic">
        {cv.headline}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13.5px]">
        <span className="inline-flex items-center gap-1.5 text-ink-3">
          <MapPin aria-hidden className="size-3.5" />
          {cv.location}
        </span>
        <ContactLink href={`mailto:${cv.email}`}>
          <Mail aria-hidden className="size-3.5" />
          {cv.email}
        </ContactLink>
        {cv.phone && <ContactLink href={`tel:${cv.phone.replace(/\s/g, '')}`}>{cv.phone}</ContactLink>}
        {cv.links.map((link) => (
          <ExternalLink key={link.href} href={link.href} className={CONTACT_CLASS}>
            {link.label}
            <ArrowUpRight aria-hidden className="size-3.5" />
          </ExternalLink>
        ))}
      </div>

      <div className="no-print mt-8 flex flex-wrap gap-2.5">
        <a
          href={`${baseUrl}${cv.pdf}`}
          download
          className="inline-flex h-10 items-center gap-2 rounded-lg bg-ink px-4 text-[14px] font-medium text-paper transition-opacity hover:opacity-90"
        >
          <Download aria-hidden className="size-4" />
          Download PDF
        </a>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex h-10 items-center gap-2 rounded-lg border border-rule-strong px-4 text-[14px] font-medium text-ink transition-colors hover:border-accent hover:text-accent"
        >
          <Printer aria-hidden className="size-4" />
          Print this page
        </button>
      </div>

      <dl className="avoid-break mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-rule bg-rule sm:grid-cols-4">
        {cv.proofPoints.map((point) => (
          <div key={point.label} className="bg-surface px-4 py-4">
            <dt className="sr-only">{point.label}</dt>
            <dd>
              <span className="block font-display text-[clamp(1.5rem,4vw,2rem)] leading-none font-medium tracking-[-0.01em] text-ink">
                {point.value}
              </span>
              <span className="mt-2 block text-[12px] leading-snug text-ink-3">{point.label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </header>
  )
}
