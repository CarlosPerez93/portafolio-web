import type { SkillReport } from '../../../types'

export interface HabilidadesProps {
  readonly report: SkillReport
  readonly method: string
  readonly caveat: string
  readonly roundingNote: string
}
