import type { Project } from '../../../types'

export type ProjectCardVariant = 'feature' | 'compact'

export interface ProjectCardProps {
  readonly index: string
  readonly project: Project
  readonly variant?: ProjectCardVariant
}
