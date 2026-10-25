import avatarUrl from '../assets/images/avatar.jpg'
import type { Profile } from '../types'

/**
 * Perfil público.
 *
 * Procedencia: nombre, avatar, handle, fecha de alta y número de repositorios
 * provienen de la API pública de GitHub; correo y perfil profesional, de la
 * identidad verificada de LinkedIn. No hay datos estimados en este objeto.
 */
export const profile: Profile = {
  name: 'Carlos Pérez',
  role: 'Desarrollador front-end',
  discipline: 'Ingeniero de sistemas',
  headline:
    'Construyo interfaces web con criterio de ingeniería: tipografía que se lee, estados que se entienden y código que se puede mantener.',
  bio: [
    'Trabajo en el punto donde el diseño se encuentra con el código. Me interesan las interfaces que se leen con claridad, se recorren con el teclado y siguen siendo comprensibles cuando el proyecto crece.',
    'En GitHub desde 2019, con 17 repositorios públicos: desde un carrito de la compra con Context y localStorage hasta un asistente de escritorio en Python que conversa con Gemini y ejecuta herramientas del sistema.',
  ],
  focus: [
    'Interfaces en React y TypeScript',
    'CSS escrito a mano: módulos, SCSS y Tailwind',
    'Estado y datos: Context, Redux Toolkit, React Query, GraphQL',
    'Exploración: Python, voz y modelos de lenguaje',
  ],
  avatar: avatarUrl,
  email: 'cpapcp23@gmail.com',
  location: null,
  githubHandle: 'CarlosPerez93',
  githubUrl: 'https://github.com/CarlosPerez93',
  memberSince: '2019',
  publicRepos: 17,
  linkedinHandle: 'carlos-perez93',
  linkedinUrl: 'https://www.linkedin.com/in/carlos-perez93',
  facts: [
    { label: 'En GitHub desde', value: '2019' },
    { label: 'Repositorios públicos', value: '17' },
    { label: 'Especialidad', value: 'Front-end' },
  ],
  sources: [
    { platform: 'GitHub', label: '@CarlosPerez93', href: 'https://github.com/CarlosPerez93' },
    {
      platform: 'LinkedIn',
      label: '/in/carlos-perez93',
      href: 'https://www.linkedin.com/in/carlos-perez93',
    },
  ],
  collectedAt: 'octubre de 2026',
}
