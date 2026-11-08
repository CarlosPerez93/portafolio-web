import type { ReactNode } from 'react'

export interface RevealProps {
  readonly children: ReactNode
  readonly delay?: number
  readonly className?: string
}
