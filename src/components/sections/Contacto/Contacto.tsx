import { Section } from '../../layout/Section'
import { SocialLinks } from '../../ui/SocialLinks'
import styles from './Contacto.module.css'
import type { ContactoProps } from './Contacto.types'

/**
 * Contacto.
 *
 * Una sola acción principal —escribir— a escala de titular, y los perfiles al
 * lado. Sin formulario: el sitio es estático y no hay nada que enviar ni
 * guardar. La dirección de correo es el texto del enlace, así que se puede
 * copiar a mano si el cliente de correo no está configurado.
 */
export function Contacto({ profile, socials }: ContactoProps) {
  return (
    <Section
      id="contacto"
      index="05"
      eyebrow="Contacto"
      title="Hablemos"
      lead="Un correo basta para empezar. Los perfiles están ahí para revisar el contexto de cada proyecto antes de escribir."
      tone="ink"
    >
      <div className={styles.layout}>
        <div className={styles.primary}>
          <p className={styles.label}>Correo</p>

          <a className={styles.mail} href={`mailto:${profile.email}`}>
            <span className={styles.mailText}>{profile.email}</span>
            <svg
              className={styles.mailArrow}
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M5 19 19 5M8 5h11v11" />
            </svg>
          </a>

          <p className={styles.note}>
            No hay formulario: el sitio es estático y no envía ni almacena datos. Si el correo no es
            lo tuyo, GitHub y LinkedIn responden igual de rápido.
          </p>
        </div>

        <div className={styles.secondary}>
          <p className={styles.label}>Perfiles</p>
          <SocialLinks socials={socials} layout="stack" className={styles.socials} />
        </div>
      </div>
    </Section>
  )
}
