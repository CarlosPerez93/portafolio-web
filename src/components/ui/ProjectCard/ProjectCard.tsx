import { Chip } from '../Chip'
import { ArrowLink } from '../ArrowLink'

import { cx } from '../../../utils'
import type { ProjectCardProps } from './ProjectCard.types'

import styles from './ProjectCard.module.css'

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
