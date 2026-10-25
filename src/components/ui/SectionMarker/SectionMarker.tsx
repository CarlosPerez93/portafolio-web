import styles from './SectionMarker.module.css'
import type { SectionMarkerProps } from './SectionMarker.types'

/**
 * Marcador de sección: número, filete y etiqueta.
 *
 * Es el mismo gesto en la portada y en las secciones numeradas; vive aparte
 * para que ambos lo compartan en lugar de repetir el marcado.
 */
export function SectionMarker({ index, label }: SectionMarkerProps) {
  return (
    <p className={styles.marker}>
      <span className={styles.index}>{index}</span>
      <span className={styles.rule} aria-hidden="true" />
      <span className={styles.label}>{label}</span>
    </p>
  )
}
