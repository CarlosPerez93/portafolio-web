import { useEffect, useRef, useState } from 'react'

import type { UseInViewOptions, UseInViewResult } from './hook.type'

export function useInView<T extends Element = HTMLDivElement>(
  options: UseInViewOptions = {},
): UseInViewResult<T> {
  const { threshold = 0.15, rootMargin = '0px 0px -8% 0px', once = true } = options
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node || typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return

        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
          return
        }

        if (!once) setInView(false)
      },
      { threshold, rootMargin },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, inView }
}
