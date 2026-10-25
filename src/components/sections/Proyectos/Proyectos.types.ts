import type { Project } from '../../../types'

export interface ProyectosProps {
  /** Proyectos que se muestran a tamaño completo. */
  readonly featured: readonly Project[]
  /** Resto del archivo público, en tarjetas compactas. */
  readonly secondary: readonly Project[]
}
