import { Section } from '../../layout/Section'
import { Chip } from '../../ui/Chip'
import { Reveal } from '../../ui/Reveal'
import styles from './Experiencia.module.css'
import type { ExperienciaProps } from './Experiencia.types'

/**
 * Experiencia.
 *
 * La misma retícula de registro que usa la trayectoria —fecha a la izquierda,
 * marca cuadrada, relato a la derecha— aplicada a los puestos. La fecha va en
 * columna propia porque es el dato que se compara de un vistazo; el stack se
 * muestra como etiquetas para no convertirlo en prosa.
 */
export function Experiencia({ entries, note }: ExperienciaProps) {
  return (
    <Section
      id="experiencia"
      index="04"
      eyebrow="Experiencia"
      title="Dónde he trabajado"
      lead="Cuatro puestos desde 2020, dos en Colombia y dos en España. Cada ficha recoge lo que consta en el perfil: empleador, cargo, fechas y el stack que se usó allí."
    >
      <ol role="list" className={styles.list}>
        {entries.map((entry, position) => (
          <li key={`${entry.company}-${entry.period}`} className={styles.entry}>
            <Reveal className={styles.row} delay={position * 60}>
              <div className={styles.periodCell}>
                <span className={styles.node} aria-hidden="true" />
                <span className={styles.period}>{entry.period}</span>
                {entry.duration ? <span className={styles.duration}>{entry.duration}</span> : null}
              </div>

              <div className={styles.content}>
                <h3 className={styles.company}>{entry.company}</h3>

                <p className={styles.role}>
                  {entry.role}
                  {entry.location ? (
                    <>
                      <span className={styles.separator} aria-hidden="true">
                        ·
                      </span>
                      {entry.location}
                    </>
                  ) : null}
                </p>

                {entry.summary ? (
                  <p className={styles.summary}>{entry.summary}</p>
                ) : (
                  <p className={styles.gap}>
                    Sin descripción en la copia exportada del perfil: no se añade ninguna.
                  </p>
                )}

                {entry.stack.length > 0 ? (
                  <ul role="list" className={styles.stack}>
                    {entry.stack.map((item) => (
                      <li key={item}>
                        <Chip subtle>{item}</Chip>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <p className={styles.note}>{note}</p>
    </Section>
  )
}
