import { useEffect, useRef } from 'react'

/**
 * Marks an element visible once it has scrolled into view, so sections can
 * fade up. Falls back to visible immediately where IntersectionObserver is
 * unavailable, and never hides content from a printer or a crawler.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      node.dataset.visible = 'true'
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.dataset.visible = 'true'
            observer.unobserve(node)
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}
