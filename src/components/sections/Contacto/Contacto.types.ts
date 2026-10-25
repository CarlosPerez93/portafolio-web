import type { Profile, SocialLink } from '../../../types'

export interface ContactoProps {
  readonly profile: Profile
  readonly socials: readonly SocialLink[]
}
