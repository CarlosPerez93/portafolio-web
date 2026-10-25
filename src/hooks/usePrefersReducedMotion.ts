import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

function getInitialValue(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false
  return window.matchMedia(QUERY).matches
}

/**
 * Indica si la persona usuaria pidió reducir el movimiento.
 * Las animaciones decorativas se desactivan; la información nunca depende de ellas.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(getInitialValue)

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return

    const query = window.matchMedia(QUERY)
    const handleChange = (event: MediaQueryListEvent) => setReduced(event.matches)

    setReduced(query.matches)
    query.addEventListener('change', handleChange)

    return () => query.removeEventListener('change', handleChange)
  }, [])

  return reduced
}
