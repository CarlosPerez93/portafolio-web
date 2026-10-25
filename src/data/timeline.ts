import type { TimelineEntry } from '../types'

/**
 * Trayectoria: una etapa por año, solo código.
 *
 * Todas las fechas salen del historial público de GitHub y llevan la fecha del
 * repositorio. Los puestos y la formación no se repiten aquí: tienen sección
 * propia —Experiencia (04) y Estudios (05)— y duplicarlos convertiría la misma
 * página en dos relatos del mismo dato.
 */
export const timeline: readonly TimelineEntry[] = [
  {
    year: '2022',
    title: 'Los primeros repositorios',
    description:
      'La cuenta se abre en 2019, pero el código empieza a publicarse en mayo de 2022: tres proyectos pequeños en el mismo tramo del año, todavía en JavaScript.',
    items: [
      'Primer repositorio público, mayo de 2022',
      'Carrito con Context y React Query',
      'Formularios de acceso y registro con Firebase',
      'Contador en React Native',
    ],
  },
  {
    year: '2023',
    title: 'TypeScript y estado global',
    description:
      'El lenguaje de trabajo pasa a ser TypeScript. Aparecen la primera aplicación con Redux Toolkit y una API REST tipada, en paralelo.',
    items: [
      'Events Pros: slices de autenticación, contador y mensajes',
      'Sistema de estilos en SCSS y componentes de Ant Design',
      'API REST escrita en TypeScript',
      'Juego de adivinanza con la lógica separada de la interfaz',
    ],
  },
  {
    year: '2024',
    title: 'React, Vite y estructura por componentes',
    description:
      'Se consolida la forma de organizar el código: una carpeta por componente, con estilos, tipos e índice. El carrito con persistencia y la SPA de Pokémon salen de esa idea.',
    items: [
      'Carrito con Context y localStorage sobre fakestoreapi',
      'Pokémon Web, publicado en septiembre de 2024',
      'Convención de carpeta por componente que se repite después',
      'Despliegue continuo en Netlify',
    ],
  },
  {
    year: '2025',
    title: 'Lógica tipada y pruebas',
    description:
      'El foco se mueve a la lógica: un oponente de tres en raya que combina Minimax con decisiones aleatorias, cubierto con Vitest y Testing Library.',
    items: [
      'Tic Tac Toe con React 19, TypeScript y Vite',
      'Minimax con un 35 % de jugadas al azar',
      'Pruebas de comportamiento sobre el tablero',
    ],
  },
  {
    year: '2026',
    title: 'Del navegador al escritorio',
    description:
      'El año más ancho: un asistente de voz en Python, un explorador de GraphQL en Angular y una tienda con identidad propia y el código a la vista.',
    items: [
      'Jarvis 2.0: asistente de escritorio con Gemini, voz y function calling',
      'Multiverse Explorer: Angular 16, Apollo y renderizado en servidor',
      'LUMIKO: tienda de objetos domotizados, repositorio público',
    ],
  },
]

/** Procedencia que se muestra al pie de la sección. */
export const timelineNote =
  'Fechas tomadas del historial público de GitHub, una entrada por año con al menos un repositorio. Esta línea de tiempo recoge solo el código: los puestos están en Experiencia (04) y la formación, en Estudios (05).'
