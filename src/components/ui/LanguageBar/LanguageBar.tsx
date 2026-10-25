import type { CSSProperties } from 'react'

import { useInView } from '../../../hooks'
import { cx, formatNumber, formatPercent } from '../../../utils'
import styles from './LanguageBar.module.css'
import type { LanguageBarProps } from './LanguageBar.types'

/**
 * Una fila del informe de lenguajes.
 *
 * El dato está en texto (bytes y porcentaje); la barra es una repetición visual
 * marcada como decorativa, así que no aporta ni quita información a un lector
 * de pantalla. Se traza al entrar en el viewport.
 */
export function LanguageBar({ stat, delay = 0 }: LanguageBarProps) {
  const { ref, inView } = useInView<HTMLLIElement>({ threshold: 0.4 })

  return (
    <li
      ref={ref}
      className={cx(styles.row, inView && styles.drawn, stat.highlight && styles.highlight)}
    >
      <span className={styles.name}>{stat.name}</span>
      <span className={styles.bytes}>{formatNumber(stat.bytes)} B</span>
      <span className={styles.percent}>{formatPercent(stat.percent)}</span>
      <span
        className={styles.track}
        aria-hidden="true"
        style={{ '--bar-delay': `${delay}ms` } as CSSProperties}
      >
        <span className={styles.fill} style={{ '--value': stat.percent / 100 } as CSSProperties} />
      </span>
    </li>
  )
}
