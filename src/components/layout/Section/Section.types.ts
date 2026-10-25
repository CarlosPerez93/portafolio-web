import type { ReactNode } from 'react'

import type { SectionId } from '../../../types'

export type SectionTone = 'paper' | 'ink'

export interface SectionProps {
  readonly id: SectionId
  readonly index: string
  readonly eyebrow: string
  readonly title: string
  readonly lead?: string
  readonly tone?: SectionTone
  readonly children: ReactNode
}
