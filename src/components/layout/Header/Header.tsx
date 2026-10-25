import type { CSSProperties } from 'react'

import { useScrollProgress } from '../../../hooks'
import { cx } from '../../../utils'
import styles from './Header.module.css'
import type { HeaderProps } from './Header.types'

/**
 * Cabecera fija con el índice de secciones.
 *
 * El filete superior mide el avance de lectura; el elemento activo se marca con
 * `aria-current` además del subrayado, así que la posición no depende del color.
 */
export function Header({ items, activeId }: HeaderProps) {
  const progress = useScrollProgress()

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#perfil">
          <span className={styles.mark} aria-hidden="true" />
          <span className={styles.name}>Carlos Pérez</span>
          <span className={styles.role}>Front-end</span>
        </a>

        <nav aria-label="Secciones del portafolio">
          <ul role="list" className={styles.list}>
            {items.map((item) => {
              const isActive = item.id === activeId

              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={cx(styles.link, isActive && styles.active)}
                    aria-current={isActive ? 'true' : undefined}
                    aria-label={item.label}
                  >
                    <span className={styles.index} aria-hidden="true">
                      {item.index}
                    </span>
                    <span className={styles.label} aria-hidden="true">
                      {item.label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <div
        className={styles.progress}
        aria-hidden="true"
        style={{ '--progress': progress } as CSSProperties}
      />
    </header>
  )
}
