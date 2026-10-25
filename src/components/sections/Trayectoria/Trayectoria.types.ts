import type { TimelineEntry } from '../../../types'

export interface TrayectoriaProps {
  readonly entries: readonly TimelineEntry[]
  /** Aclaración sobre lo que la línea de tiempo no incluye. */
  readonly note: string
}
