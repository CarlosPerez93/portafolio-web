import type { SectionMarkerProps } from './SectionMarker.types'

import styles from './SectionMarker.module.css'

export function SectionMarker({ index, label }: SectionMarkerProps) {
  return (
    <p className={styles.marker}>
      <span className={styles.index}>{index}</span>
      <span className={styles.rule} aria-hidden="true" />
      <span className={styles.label}>{label}</span>
    </p>
  )
}
