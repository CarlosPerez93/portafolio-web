import type { SocialLink } from '../../../types'

export interface SocialLinksProps {
  readonly socials: readonly SocialLink[]
  readonly layout?: 'stack' | 'row'
  readonly className?: string
}
