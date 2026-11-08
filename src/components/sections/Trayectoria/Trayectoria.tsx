import { Reveal } from '../../ui/Reveal'
import { Section } from '../../layout/Section'

import type { TrayectoriaProps } from './Trayectoria.types'

import styles from './Trayectoria.module.css'

export function Trayectoria({ entries }: TrayectoriaProps) {
  return (
    <Section
      id="trayectoria"
      index="06"
      eyebrow="Trayectoria"
      title="Del primer repositorio al asistente"
      lead="Hitos fechados del código, tomados del historial público de GitHub. Los puestos y la formación tienen sección propia, así que no se repiten aquí."
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
    </Section>
  )
}
