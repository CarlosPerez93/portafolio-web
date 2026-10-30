import { Reveal } from '../../ui/Reveal'
import { SectionMarker } from '../../ui/SectionMarker'
import { SocialLinks } from '../../ui/SocialLinks'
import styles from './Perfil.module.css'
import type { PerfilProps } from './Perfil.types'

/**
 * Portada.
 *
 * Es la única sección con `h1` y no usa el marco numerado: la cabecera de la
 * página ya está ocupada por el índice, así que aquí manda la tipografía. El
 * nombre se parte en el primer espacio (el perfil declara un nombre de dos
 * palabras) para poder tratar el apellido como una decisión tipográfica.
 */
export function Perfil({ profile, socials }: PerfilProps) {
  const [givenName, ...rest] = profile.name.split(' ')
  const familyName = rest.join(' ')

  return (
    <section id="perfil" aria-labelledby="perfil-titulo" className={styles.hero}>
      <div className={styles.inner}>
        <SectionMarker index="01" label="Perfil" />

        <div className={styles.masthead}>
          <div className={styles.intro}>
            <p className={styles.role}>
              {profile.role}
              <span className={styles.dot} aria-hidden="true">
                ·
              </span>
              {profile.discipline}
            </p>

            <h1 id="perfil-titulo" className={styles.name}>
              <span className={styles.given}>{givenName}</span>
              <span className={styles.family}>{familyName}</span>
            </h1>

            <span className={styles.rule} aria-hidden="true" />

            <p className={styles.headline}>{profile.headline}</p>
          </div>
        </div>

        <div className={styles.lower}>
          <Reveal className={styles.bio}>
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className={styles.focus}>
              <p className={styles.label}>Foco de trabajo</p>
              <ul role="list" className={styles.focusList}>
                {profile.focus.map((item, position) => (
                  <li key={item}>
                    <span className={styles.focusIndex} aria-hidden="true">
                      {String(position + 1).padStart(2, '0')}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120} className={styles.aside}>
            <dl className={styles.facts}>
              {profile.facts.map((fact) => (
                <div key={fact.label} className={styles.fact}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>

            <SocialLinks socials={socials} layout="stack" className={styles.socials} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
