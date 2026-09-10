import type { AnchorHTMLAttributes, ReactNode } from 'react'

/**
 * Opens in a new tab, safely and audibly.
 *
 * `rel="noopener noreferrer"` stops the opened page reaching back through
 * `window.opener`, and the hidden suffix tells a screen-reader user that focus
 * is about to move somewhere else — a new tab is disorienting when it is not
 * announced.
 */
export function ExternalLink({
  href,
  children,
  label,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  children: ReactNode
  /** Use when the link has no readable text of its own, e.g. an icon. */
  label?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...(label ? { 'aria-label': `${label} (opens in a new tab)` } : {})}
      {...props}
    >
      {children}
      {!label && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  )
}
