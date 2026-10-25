import styles from './SocialIcon.module.css'
import type { SocialIconProps } from './SocialIcon.types'

/**
 * Iconos dibujados a mano en SVG, sin dependencias.
 * Siempre decorativos: el nombre del enlace va en texto junto al icono.
 */
export function SocialIcon({ icon, className }: SocialIconProps) {
  const shared = {
    className: [styles.icon, className].filter(Boolean).join(' '),
    viewBox: '0 0 24 24',
    'aria-hidden': true,
    focusable: 'false' as const,
  }

  if (icon === 'github') {
    return (
      <svg {...shared}>
        <path
          fill="currentColor"
          d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.97 3.22 9.18 7.69 10.67.56.1.77-.24.77-.54v-1.9c-3.13.68-3.79-1.5-3.79-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.33-2.64 5.29-5.15 5.56.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.78.54a11.26 11.26 0 0 0 7.68-10.67C23.25 5.48 18.27.5 12 .5Z"
        />
      </svg>
    )
  }

  if (icon === 'linkedin') {
    return (
      <svg {...shared}>
        <path
          fill="currentColor"
          d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.55V9h3.57v11.45Z"
        />
      </svg>
    )
  }

  return (
    <svg {...shared}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
        d="M3 5.75h18v12.5H3zM3.6 6.3 12 12.6l8.4-6.3"
      />
    </svg>
  )
}
