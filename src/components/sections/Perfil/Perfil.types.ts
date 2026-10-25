import type { Profile, SocialLink } from '../../../types'

export interface PerfilProps {
  readonly profile: Profile
  readonly socials: readonly SocialLink[]
}
