import type { Profile } from '../types'

/**
 * Perfil público.
 *
 * Procedencia: datos de contacto, enlaces y trayectoria técnica verificada.
 * Estilo centrado en ingeniería, arquitectura de interfaz y calidad de producto.
 */
export const profile: Profile = {
  name: 'Carlos Pérez',
  role: 'Frontend Engineer',
  discipline: 'Ingeniero de Sistemas',
  headline:
    'Construyo interfaces web accesibles, pixel-perfect y experiencias digitales fluidas, uniendo diseño y arquitectura de software.',
  bio: [
    'Me especializo en el desarrollo front-end, creando interfaces de usuario intuitivas, accesibles y cuidadas al detalle. Disfruto trabajando en la intersección entre el diseño y la ingeniería de software, donde una experiencia de usuario sólida se apoya en una arquitectura de código limpia, escalable y mantenible.',
    'Mi trabajo principal se centra en el ecosistema de React y TypeScript, diseñando componentes modulares, sistemas de diseño y flujos de estado eficientes. También desarrollo aplicaciones con Angular, GraphQL y APIs REST, priorizando siempre el rendimiento web, la accesibilidad (a11y) y las buenas prácticas de desarrollo.',
    'Más allá de la interfaz, me interesa explorar nuevas posibilidades técnicas, desde la integración de modelos de lenguaje e interfaces de voz en Python hasta la automatización y el despliegue continuo.',
  ],
  focus: [
    'Interfaces accesibles y modulares con React y TypeScript',
    'Arquitectura de estilos: CSS Modules, Tailwind CSS y Sass',
    'Gestión de estado y datos: React Query, Apollo GraphQL, Redux Toolkit',
    'Integración de APIs modernas, rendimiento web y experimentación con IA',
  ],
  email: 'carlos.perez3@outlook.es',
  location: 'España (remoto)',
  githubHandle: 'CarlosPerez93',
  githubUrl: 'https://github.com/CarlosPerez93',
  memberSince: '2019',
  publicRepos: 19,
  linkedinHandle: 'carlos-perez93',
  linkedinUrl: 'https://www.linkedin.com/in/carlos-perez93',
  facts: [
    { label: 'Especialidad', value: 'Frontend Engineering' },
    { label: 'Core Stack', value: 'React · TypeScript · CSS' },
    { label: 'Estado & APIs', value: 'GraphQL · REST · Redux' },
    { label: 'Formación', value: 'Ingeniería de Sistemas' },
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
