import type { CSSProperties } from 'react'

import { useInView, usePrefersReducedMotion } from '../../../hooks'
import { cx } from '../../../utils'
import styles from './Reveal.module.css'
import type { RevealProps } from './Reveal.types'

/**
 * Aparición al entrar en pantalla.
 *
 * La animación es solo opacidad y un desplazamiento de 14 px: no mueve el
 * layout ni retrasa la lectura. Con `prefers-reduced-motion` el contenido se
 * muestra directamente, sin transición.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const { ref, inView } = useInView<HTMLDivElement>()
  const visible = prefersReducedMotion || inView

  return (
    <div
      ref={ref}
      className={cx(styles.root, visible && styles.visible, className)}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}
