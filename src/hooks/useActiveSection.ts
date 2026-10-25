import { useEffect, useState } from 'react'
import type { SectionId } from '../types'

/**
 * Devuelve la sección que ocupa el centro de la pantalla.
 *
 * Se usa una banda de observación estrecha (el tercio central) en lugar del
 * scroll: así el indicador del menú coincide con lo que se está leyendo y no
 * con el último fragmento que rozó el borde superior.
 */
export function useActiveSection(ids: readonly SectionId[]): SectionId {
  const [active, setActive] = useState<SectionId>(ids[0])

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null)

    if (nodes.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!visible) return

        const id = visible.target.id
        if (ids.includes(id as SectionId)) setActive(id as SectionId)
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: [0, 0.2, 0.5, 1] },
    )

    nodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [ids])

  return active
}
