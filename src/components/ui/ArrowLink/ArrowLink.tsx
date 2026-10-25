import { cx } from '../../../utils'
import styles from './ArrowLink.module.css'
import type { ArrowLinkProps } from './ArrowLink.types'

/**
 * Enlace con flecha. La flecha avanza 3 px al pasar el cursor y al enfocar:
 * el mismo gesto en toda la página, sin mover el texto.
 */
export function ArrowLink({
  href,
  children,
  variant = 'text',
  external = false,
  className,
}: ArrowLinkProps) {
  const externalProps = external ? { target: '_blank', rel: 'noreferrer noopener' } : {}

  return (
    <a href={href} className={cx(styles.link, styles[variant], className)} {...externalProps}>
      <span className={styles.label}>{children}</span>
      <svg className={styles.arrow} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
        <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
      </svg>
      {external ? <span className="visually-hidden"> (se abre en una pestaña nueva)</span> : null}
    </a>
  )
}
