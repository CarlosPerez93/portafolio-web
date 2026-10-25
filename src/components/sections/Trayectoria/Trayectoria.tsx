import { Section } from '../../layout/Section'
import { Reveal } from '../../ui/Reveal'
import styles from './Trayectoria.module.css'
import type { TrayectoriaProps } from './Trayectoria.types'

/**
 * Trayectoria.
 *
 * Una lista ordenada de hitos fechados. El año se separa del relato en una
 * columna propia con una marca cuadrada: el mismo gesto de registro que usa el
 * retrato, aplicado aquí a la cronología.
 */
export function Trayectoria({ entries, note }: TrayectoriaProps) {
  return (
    <Section
      id="trayectoria"
      index="04"
      eyebrow="Trayectoria"
      title="Del primer empleo al asistente"
      lead="Hitos fechados: los repositorios constan en el historial público de GitHub y las etapas profesionales y de formación, en la copia de datos de LinkedIn."
    >
      <ol role="list" className={styles.timeline}>
        {entries.map((entry, position) => (
          <li key={entry.year} className={styles.entry}>
            <Reveal className={styles.row} delay={position * 60}>
              <div className={styles.yearCell}>
                <span className={styles.node} aria-hidden="true" />
                <span className={styles.year}>{entry.year}</span>
              </div>

              <div className={styles.content}>
                <h3 className={styles.entryTitle}>{entry.title}</h3>
                <p className={styles.entryText}>{entry.description}</p>

                <ul role="list" className={styles.items}>
                  {entry.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <p className={styles.note}>{note}</p>
    </Section>
  )
}
