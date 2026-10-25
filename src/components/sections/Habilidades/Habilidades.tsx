import { formatNumber, formatPercent } from '../../../utils'
import { Section } from '../../layout/Section'
import { Chip } from '../../ui/Chip'
import { LanguageBar } from '../../ui/LanguageBar'
import { Reveal } from '../../ui/Reveal'
import styles from './Habilidades.module.css'
import type { HabilidadesProps } from './Habilidades.types'

/**
 * Habilidades.
 *
 * El informe de lenguajes se presenta como lo que es: una medición sobre los
 * repositorios públicos. A la derecha, los grupos ordenan el trabajo por
 * problema resuelto (interfaz, estado, herramientas, exploración) en lugar de
 * por supuesta destreza, que es lo que no se puede demostrar con bytes.
 */
export function Habilidades({ report, method, caveat, roundingNote }: HabilidadesProps) {
  return (
    <Section
      id="habilidades"
      index="03"
      eyebrow="Habilidades"
      title="Medido, no declarado"
      lead="GitHub clasifica el código de cada repositorio público por lenguaje. Lo que sigue es ese recuento, sin estimaciones ni notas de nivel."
    >
      <div className={styles.layout}>
        <div className={styles.report}>
          <div className={styles.reportHead}>
            <h3 className={styles.reportTitle}>Peso por lenguaje</h3>
            <p className={styles.reportMeta}>
              {formatNumber(report.analysedBytes)} bytes · {report.repositoryCount} repositorios ·{' '}
              {report.capturedAt}
            </p>
          </div>

          <ul role="list" className={styles.bars}>
            {report.languages.map((stat, position) => (
              <LanguageBar key={stat.name} stat={stat} delay={position * 55} />
            ))}
          </ul>

          <p className={styles.remainder}>
            <span className={styles.remainderLabel}>{report.remainder.label}</span>
            <span className={styles.remainderValue}>{formatPercent(report.remainder.percent)}</span>
          </p>

          <p className={styles.note}>{roundingNote}</p>
          <p className={styles.method}>{method}</p>
        </div>

        <div className={styles.groups}>
          {report.groups.map((group, position) => (
            <Reveal key={group.id} delay={position * 70} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <p className={styles.groupCaption}>{group.caption}</p>
              <ul role="list" className={styles.chips}>
                {group.items.map((item) => (
                  <li key={item}>
                    <Chip subtle>{item}</Chip>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      <p className={styles.caveat}>{caveat}</p>
    </Section>
  )
}
