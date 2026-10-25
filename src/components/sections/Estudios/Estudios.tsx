import { Section } from '../../layout/Section'
import { Reveal } from '../../ui/Reveal'
import styles from './Estudios.module.css'
import type { EstudiosProps } from './Estudios.types'

/**
 * Estudios.
 *
 * Misma retícula de registro que la experiencia, con una diferencia: aquí el
 * dato que encabeza cada ficha es la titulación, no el centro. El tipo se
 * muestra como etiqueta para separar el título universitario del curso y de la
 * formación abierta sin jerarquizarlos de más.
 */
export function Estudios({ entries, note }: EstudiosProps) {
  return (
    <Section
      id="estudios"
      index="05"
      eyebrow="Estudios"
      title="Qué he estudiado"
      lead="Una titulación universitaria, un curso superior y formación abierta. Lo que sigue es el registro del perfil, con el centro y las fechas de cada etapa."
    >
      <ol role="list" className={styles.list}>
        {entries.map((entry, position) => (
          <li key={`${entry.institution}-${entry.period}`} className={styles.entry}>
            <Reveal className={styles.row} delay={position * 60}>
              <div className={styles.periodCell}>
                <span className={styles.node} aria-hidden="true" />
                <span className={styles.period}>{entry.period}</span>
              </div>

              <div className={styles.content}>
                <h3 className={styles.qualification}>{entry.qualification}</h3>

                <p className={styles.institution}>
                  {entry.institution}
                  {entry.field ? (
                    <>
                      <span className={styles.separator} aria-hidden="true">
                        ·
                      </span>
                      {entry.field}
                    </>
                  ) : null}
                </p>

                <p className={styles.kind}>{entry.kind}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <p className={styles.note}>{note}</p>
    </Section>
  )
}
