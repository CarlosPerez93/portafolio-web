import type { SocialLink } from '../../../types'

export interface SocialLinksProps {
  readonly socials: readonly SocialLink[]
  /** `stack` apila filas; `row` las coloca en línea. */
  readonly layout?: 'stack' | 'row'
  readonly className?: string
}
