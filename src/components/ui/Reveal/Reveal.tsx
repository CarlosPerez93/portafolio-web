import type { CSSProperties } from 'react'

import { cx } from '../../../utils'
import type { RevealProps } from './Reveal.types'
import { useInView, usePrefersReducedMotion } from '../../../hooks'

import styles from './Reveal.module.css'

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
