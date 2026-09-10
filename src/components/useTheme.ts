import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark' | 'system'

const STORAGE_KEY = 'cv-theme'

const read = (): Theme => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === 'light' || saved === 'dark' ? saved : 'system'
  } catch {
    return 'system'
  }
}

/**
 * Theme preference. "system" is the default and stamps nothing, so the page
 * follows `prefers-color-scheme`; an explicit choice stamps `data-theme` and
 * wins in both directions.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(read)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'system') root.removeAttribute('data-theme')
    else root.setAttribute('data-theme', theme)

    try {
      if (theme === 'system') localStorage.removeItem(STORAGE_KEY)
      else localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Storage can be unavailable (private windows, blocked site data). The
      // theme still applies for this visit.
    }
  }, [theme])

  const cycle = useCallback(() => {
    setTheme((current) => (current === 'system' ? 'dark' : current === 'dark' ? 'light' : 'system'))
  }, [])

  return { theme, setTheme, cycle }
}
