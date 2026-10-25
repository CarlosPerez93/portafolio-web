import type { Project } from '../../../types'

export type ProjectCardVariant = 'feature' | 'compact'

export interface ProjectCardProps {
  readonly project: Project
  readonly variant?: ProjectCardVariant
  /** Ordinal visible de la tarjeta dentro de su grupo. */
  readonly index: string
}
