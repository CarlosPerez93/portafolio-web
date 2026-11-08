import { Reveal } from '../../ui/Reveal'
import { Section } from '../../layout/Section'
import { ProjectCard } from '../../ui/ProjectCard'

import { ordinal } from '../../../utils/format'
import type { ProyectosProps } from './Proyectos.types'

import styles from './Proyectos.module.css'

export function Proyectos({ featured, secondary }: ProyectosProps) {
  return (
    <Section
      id="proyectos"
      index="02"
      eyebrow="Proyectos"
      title="Cuatro destacados, ocho más"
      lead="Los cuatro primeros son los que se destacan en este portafolio. Los demás completan el archivo público: cada tarjeta enlaza al repositorio y, cuando existe, a la demo."
      tone="ink"
    >
      <div className={styles.featured}>
        {featured.map((project, position) => (
          <Reveal key={project.id} delay={position * 70}>
            <ProjectCard project={project} index={ordinal(position + 1)} />
          </Reveal>
        ))}
      </div>

      <div className={styles.rest}>
        <p className={styles.restLabel}>
          Otros repositorios
          <span className={styles.restCount}>{ordinal(secondary.length)}</span>
        </p>

        <ul role="list" className={styles.compactList}>
          {secondary.map((project, position) => (
            <li key={project.id}>
              <ProjectCard
                project={project}
                variant="compact"
                index={ordinal(featured.length + position + 1)}
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
