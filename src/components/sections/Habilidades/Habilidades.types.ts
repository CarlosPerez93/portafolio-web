import type { SkillReport } from '../../../types'

export interface HabilidadesProps {
  readonly report: SkillReport
  /** Cómo se obtuvieron los porcentajes. */
  readonly method: string
  /** Qué no mide la escala. */
  readonly caveat: string
  /** Aviso de redondeo de la columna de porcentajes. */
  readonly roundingNote: string
}
