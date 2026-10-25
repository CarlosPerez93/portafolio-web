import { cx } from '../../../utils'
import { ArrowLink } from '../ArrowLink'
import { Chip } from '../Chip'
import styles from './ProjectCard.module.css'
import type { ProjectCardProps } from './ProjectCard.types'

/**
 * Tarjeta de proyecto.
 *
 * Una sola pieza resuelve el bloque destacado y la ficha compacta: la variante
 * cambia la escala tipográfica, no la estructura ni la información. Si un
 * proyecto no trae enlaces, el bloque se omite y la tarjeta sigue siendo legible.
 */
export function ProjectCard({ project, variant = 'feature', index }: ProjectCardProps) {
  return (
    <article className={cx(styles.card, styles[variant])}>
      <header className={styles.head}>
        <span className={styles.index} aria-hidden="true">
          {index}
        </span>
        <span className={styles.year}>{project.year}</span>
        {project.signal ? <span className={styles.signal}>{project.signal}</span> : null}
      </header>

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.tagline}>{project.tagline}</p>
      <p className={styles.description}>{project.description}</p>

      <ul role="list" className={styles.stack}>
        {project.stack.map((item) => (
          <li key={item}>
            <Chip>{item}</Chip>
          </li>
        ))}
      </ul>

      {project.links.length > 0 ? (
        <div className={styles.links}>
          {project.links.map((link) => (
            <ArrowLink key={link.href} href={link.href} external>
              {link.label}
            </ArrowLink>
          ))}
        </div>
      ) : null}
    </article>
  )
}
