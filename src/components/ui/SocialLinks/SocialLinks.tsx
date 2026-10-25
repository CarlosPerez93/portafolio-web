import { cx } from '../../../utils'
import { SocialIcon } from '../SocialIcon'
import styles from './SocialLinks.module.css'
import type { SocialLinksProps } from './SocialLinks.types'

/** Lista de perfiles y correo. Toda la fila es el objetivo del enlace. */
export function SocialLinks({ socials, layout = 'stack', className }: SocialLinksProps) {
  return (
    <ul role="list" className={cx(styles.list, styles[layout], className)}>
      {socials.map((social) => (
        <li key={social.id}>
          <a
            href={social.href}
            className={styles.link}
            {...(social.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
          >
            <SocialIcon icon={social.icon} className={styles.icon} />
            <span className={styles.label}>{social.label}</span>
            <span className={styles.handle}>{social.handle}</span>
            {social.external ? (
              <span className="visually-hidden"> (se abre en una pestaña nueva)</span>
            ) : null}
          </a>
        </li>
      ))}
    </ul>
  )
}
