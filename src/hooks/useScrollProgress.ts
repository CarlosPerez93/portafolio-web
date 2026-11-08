import { useEffect, useState } from 'react'

export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0

    const measure = () => {
      frame = 0
      const root = document.documentElement
      const max = root.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0)
    }

    const schedule = () => {
      if (frame === 0) frame = window.requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)

    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (frame !== 0) window.cancelAnimationFrame(frame)
    }
  }, [])

  return progress
}
