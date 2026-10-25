import { profile } from './profile'
import type { SocialLink } from '../types'

export const socials: readonly SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    handle: `@${profile.githubHandle}`,
    href: profile.githubUrl,
    icon: 'github',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: `in/${profile.linkedinHandle}`,
    href: profile.linkedinUrl,
    icon: 'linkedin',
    external: true,
  },
  {
    id: 'email',
    label: 'Correo',
    handle: profile.email,
    href: `mailto:${profile.email}`,
    icon: 'mail',
    external: false,
  },
]
