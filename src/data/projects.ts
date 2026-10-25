import type { Project } from '../types'

/**
 * Proyectos tomados de los repositorios públicos del perfil, más LUMIKO,
 * que el autor indicó destacar y que ahora también publica su código.
 *
 * Cada descripción se apoya en el README, la descripción del repositorio o su
 * árbol de archivos. No se atribuyen funcionalidades no documentadas.
 */
export const projects: readonly Project[] = [
  {
    id: 'jarvis',
    year: 2026,
    title: 'Jarvis 2.0',
    tagline: 'Asistente conversacional de escritorio',
    description:
      'Despierta con dos aplausos, escucha de forma continua y decide qué herramienta del sistema ejecutar a partir de lenguaje natural. Reescrito desde cero con arquitectura limpia: cerebro (modelo de lenguaje), orejas (voz a texto) y boca (texto a voz) como piezas separadas.',
    stack: ['Python', 'Gemini 2.5 Flash', 'Function calling', 'STT / TTS'],
    links: [{ label: 'Código', href: 'https://github.com/CarlosPerez93/jarvis', kind: 'repo' }],
    featured: true,
    signal: 'Windows · 1 estrella',
  },
  {
    id: 'tic-tac-toe',
    year: 2025,
    title: 'Tic Tac Toe',
    tagline: 'Tres en raya contra una máquina que duda',
    description:
      'Un tablero de 3 × 3 con un bot que combina Minimax con un 35 % de jugadas al azar: la mayoría de las partidas juega en serio, algunas se equivoca. Interfaz en React 19, lógica tipada y pruebas con Vitest y Testing Library.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Vitest'],
    links: [
      { label: 'Demo', href: 'https://tic-tac-toe-ai-r.netlify.app/', kind: 'demo' },
      { label: 'Código', href: 'https://github.com/CarlosPerez93/tic-tac-toe', kind: 'repo' },
    ],
    featured: true,
  },
  {
    id: 'pokemon-web',
    year: 2024,
    title: 'Pokémon Web',
    tagline: 'SPA de exploración, componente a componente',
    description:
      'Aplicación de una sola página con React, TypeScript y Vite. Cada componente vive en su propia carpeta con estilos, tipos e índice, una estructura que después repetí en otros proyectos. El despliegue se resuelve con Netlify.',
    stack: ['React', 'TypeScript', 'Vite', 'pnpm'],
    links: [
      { label: 'Demo', href: 'https://pokemon-web-app-v1.netlify.app', kind: 'demo' },
      { label: 'Código', href: 'https://github.com/CarlosPerez93/pokemon-web', kind: 'repo' },
    ],
    featured: true,
    signal: '1 estrella',
  },
  {
    id: 'lumiko-store',
    year: 2026,
    title: 'LUMIKO',
    tagline: 'Tienda de objetos domotizados',
    description:
      'Tienda de juguetes domotizados y lámparas inteligentes de temática anime, con catálogo, fichas de producto y una identidad visual propia. El código está publicado y el sitio se despliega desde el repositorio.',
    stack: ['Angular', 'TypeScript', 'Tailwind CSS'],
    links: [
      { label: 'Demo', href: 'https://lumiko-store.netlify.app', kind: 'demo' },
      { label: 'Código', href: 'https://github.com/CarlosPerez93/lumiko-store', kind: 'repo' },
    ],
    featured: true,
    signal: 'Repositorio público · lumiko.com',
  },
  {
    id: 'rick-and-morty',
    year: 2026,
    title: 'Multiverse Explorer',
    tagline: 'Rick and Morty sobre GraphQL',
    description:
      'Explorador de personajes y episodios con búsqueda por teclado (Ctrl / Cmd + K), filtros por estado, favoritos en localStorage y rutas cargadas bajo demanda. Montado sobre Angular 16, Apollo y renderizado en servidor.',
    stack: ['Angular 16', 'Apollo Angular', 'GraphQL', 'RxJS', 'SSR'],
    links: [
      {
        label: 'Demo',
        href: 'https://rickandmortygraphqla.netlify.app/characters-list',
        kind: 'demo',
      },
      {
        label: 'Código',
        href: 'https://github.com/CarlosPerez93/Rick-and-Morty---Angular-Graphql-',
        kind: 'repo',
      },
    ],
    featured: false,
  },
  {
    id: 'e-commerce',
    year: 2024,
    title: 'Carrito con Context',
    tagline: 'Estado global y persistencia',
    description:
      'Listado de productos desde fakestoreapi.com con filtros por categoría y precio. El carrito permite añadir, editar y eliminar, y sobrevive a la recarga gracias a localStorage.',
    stack: ['React', 'Context API', 'localStorage'],
    links: [{ label: 'Código', href: 'https://github.com/CarlosPerez93/e-commerce', kind: 'repo' }],
    featured: false,
  },
  {
    id: 'events-pros',
    year: 2023,
    title: 'Events Pros',
    tagline: 'Gestión de eventos',
    description:
      'Aplicación web para administrar eventos, con el estado repartido en slices de Redux Toolkit (autenticación, contador, mensajes) y un sistema de estilos SCSS organizado en carpetas.',
    stack: ['TypeScript', 'Redux Toolkit', 'SCSS', 'Ant Design'],
    links: [
      { label: 'Código', href: 'https://github.com/CarlosPerez93/Events-pros', kind: 'repo' },
    ],
    featured: false,
  },
  {
    id: 'api-rest-ts',
    year: 2023,
    title: 'API REST en TypeScript',
    tagline: 'Servicio tipado',
    description:
      'API REST escrita en TypeScript en el mismo periodo que la aplicación de eventos, con los recursos separados por dominio.',
    stack: ['TypeScript', 'REST'],
    links: [
      { label: 'Código', href: 'https://github.com/CarlosPerez93/api-rest-ts', kind: 'repo' },
    ],
    featured: false,
  },
  {
    id: 'guess-number',
    year: 2023,
    title: 'Guess the Number',
    tagline: 'Juego de adivinanza',
    description:
      'Juego de adivinar un número, con la lógica del juego separada de la interfaz y el estado resuelto en React.',
    stack: ['React', 'TypeScript', 'Vite'],
    links: [
      { label: 'Código', href: 'https://github.com/CarlosPerez93/guess-number', kind: 'repo' },
    ],
    featured: false,
  },
  {
    id: 'first-cart-context',
    year: 2022,
    title: 'First Cart',
    tagline: 'El primer carrito',
    description:
      'Ejercicio de carrito que usa Context para evitar pasar props en cadena, React Query para los datos remotos y Sass para los estilos.',
    stack: ['React', 'Context API', 'React Query', 'Sass'],
    links: [
      {
        label: 'Código',
        href: 'https://github.com/CarlosPerez93/First-Cart-Context',
        kind: 'repo',
      },
    ],
    featured: false,
  },
  {
    id: 'login-register-firebase',
    year: 2022,
    title: 'Login & Register',
    tagline: 'Autenticación con Firebase',
    description:
      'Formularios de inicio de sesión y registro conectados a Firebase: el primer proyecto del perfil, todavía en JavaScript.',
    stack: ['React', 'Firebase', 'JavaScript'],
    links: [
      {
        label: 'Código',
        href: 'https://github.com/CarlosPerez93/login-register-firebase-react',
        kind: 'repo',
      },
    ],
    featured: false,
  },
  {
    id: 'counter-react-native',
    year: 2022,
    title: 'Counter',
    tagline: 'Primer experimento móvil',
    description:
      'Un contador con estado en React Native, escrito en el mismo mes que el primer carrito y el primer formulario de autenticación.',
    stack: ['React Native', 'JavaScript'],
    links: [
      {
        label: 'Código',
        href: 'https://github.com/CarlosPerez93/Counter-ReactNative',
        kind: 'repo',
      },
    ],
    featured: false,
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export const secondaryProjects = projects.filter((project) => !project.featured)
