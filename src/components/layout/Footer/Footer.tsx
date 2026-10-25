import styles from './Footer.module.css'
import type { FooterProps } from './Footer.types'

/** Pie de página: autoría, tecnología y procedencia de los datos. */
export function Footer({ profile }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.primary}>
          © {year} {profile.name}
        </p>
        <p className={styles.meta}>
          Diseñado y programado a mano con React, TypeScript y CSS Modules.
        </p>
        <p className={styles.meta}>
          Datos consultados en{' '}
          <a
            className={styles.link}
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>{' '}
          y{' '}
          <a
            className={styles.link}
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>{' '}
          · {profile.collectedAt}
        </p>
        <a className={styles.top} href="#perfil">
          Volver arriba
          <span className={styles.arrow} aria-hidden="true">
            ↑
          </span>
        </a>
      </div>
    </footer>
  )
}
