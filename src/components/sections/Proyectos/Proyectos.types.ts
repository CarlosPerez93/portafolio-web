import type { Project } from '../../../types'

export interface ProyectosProps {
  readonly featured: readonly Project[]
  readonly secondary: readonly Project[]
}
