import type { EducationEntry } from '../../../types'

export interface EstudiosProps {
  readonly entries: readonly EducationEntry[]
  /** Procedencia y límites de las fechas, al pie de la sección. */
  readonly note: string
}
