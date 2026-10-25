import type { ReactNode } from 'react'

export type ArrowLinkVariant = 'text' | 'button'

export interface ArrowLinkProps {
  readonly href: string
  readonly children: ReactNode
  readonly variant?: ArrowLinkVariant
  /** Añade `target` y `rel`, y avisa a los lectores de pantalla. */
  readonly external?: boolean
  readonly className?: string
}
