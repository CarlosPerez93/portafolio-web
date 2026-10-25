import type { ReactNode } from 'react'

export interface RevealProps {
  readonly children: ReactNode
  /** Retardo en milisegundos para escalonar elementos hermanos. */
  readonly delay?: number
  readonly className?: string
}
