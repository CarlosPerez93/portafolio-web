import { cx } from '../../../utils'
import { SectionMarker } from '../../ui/SectionMarker'
import styles from './Section.module.css'
import type { SectionProps } from './Section.types'

/**
 * Marco común de las secciones numeradas.
 *
 * Resuelve lo que no debería repetirse: el ancla, el `aria-labelledby`, el
 * filete superior, la numeración y la jerarquía de encabezados. El contenido
 * entra como `children` y no conoce nada de este marco.
 */
export function Section({
  id,
  index,
  eyebrow,
  title,
  lead,
  tone = 'paper',
  children,
}: SectionProps) {
  const titleId = `${id}-titulo`

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={cx(styles.section, tone === 'ink' && styles.ink)}
    >
      <div className={styles.inner}>
        <header className={styles.head}>
          <SectionMarker index={index} label={eyebrow} />
          <h2 id={titleId} className={styles.title}>
            {title}
          </h2>
          {lead ? <p className={styles.lead}>{lead}</p> : null}
        </header>
        {children}
      </div>
    </section>
  )
}
