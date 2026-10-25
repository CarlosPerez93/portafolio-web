import type { ExperienceEntry } from '../../../types'

export interface ExperienciaProps {
  readonly entries: readonly ExperienceEntry[]
  /** Procedencia y solapamientos de fechas que se muestran al pie. */
  readonly note: string
}
