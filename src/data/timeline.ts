import type { TimelineEntry } from '../types'

/**
 * Trayectoria: una etapa por año.
 *
 * Dos procedencias conviven en la misma línea de tiempo y se distinguen por la
 * forma de la línea. Los hitos de código salen del historial público de GitHub
 * y llevan la fecha del repositorio; las etapas profesionales y de formación
 * salen de la copia de datos del perfil de LinkedIn y llevan el nombre del
 * empleador o de la institución con sus fechas. Ninguna línea está estimada.
 */
export const timeline: readonly TimelineEntry[] = [
  {
    year: '2020',
    title: 'Primer puesto como desarrollador',
    description:
      'En enero entra como desarrollador front-end en la Universidad de La Amazonia, en Caquetá (Colombia), donde trabaja hasta abril de 2023. El código público todavía no existe: aparece dos años después.',
    items: [
      'Universidad de La Amazonia · desarrollador front-end, enero de 2020 – abril de 2023',
      'Caquetá, Colombia',
      'HTML, CSS Modules, JavaScript, React, Material UI y Redux Toolkit',
    ],
  },
  {
    year: '2022',
    title: 'Primeros repositorios y dos etapas cortas',
    description:
      'La cuenta se abre en 2019, pero el código empieza a publicarse en mayo de 2022: tres proyectos pequeños en el mismo tramo del año, todavía en JavaScript. Ese año pasa además por dos empleos breves como front-end.',
    items: [
      'Primer repositorio público, mayo de 2022',
      'Carrito con Context y React Query',
      'Formularios de acceso y registro con Firebase',
      'Contador en React Native',
      'IVO Internacional · front-end, marzo – noviembre de 2022 (Caquetá)',
      'OnPlay · front-end, diciembre de 2022 – enero de 2023 (Caquetá)',
    ],
  },
  {
    year: '2023',
    title: 'TypeScript y estado global',
    description:
      'El lenguaje de trabajo pasa a ser TypeScript. Aparecen la primera aplicación con Redux Toolkit y una API REST tipada, en paralelo. En abril cierra la etapa en la Universidad de La Amazonia y en junio empieza el curso de Deusto Formación.',
    items: [
      'Events Pros: slices de autenticación, contador y mensajes',
      'Sistema de estilos en SCSS y componentes de Ant Design',
      'API REST escrita en TypeScript',
      'Juego de adivinanza con la lógica separada de la interfaz',
      'Deusto Formación · Curso Superior FullStack Developer, junio de 2023 – septiembre de 2024',
    ],
  },
  {
    year: '2024',
    title: 'React, Vite y estructura por componentes',
    description:
      'Se consolida la forma de organizar el código: una carpeta por componente, con estilos, tipos e índice. El carrito con persistencia y la SPA de Pokémon salen de esa idea. En marzo empieza en la Universidad Surcolombiana.',
    items: [
      'Carrito con Context y localStorage sobre fakestoreapi',
      'Pokémon Web, publicado en septiembre de 2024',
      'Convención de carpeta por componente que se repite después',
      'Despliegue continuo en Netlify',
      'Universidad Surcolombiana · front-end developer, desde marzo de 2024 (España)',
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
      'midudev · formación en desarrollo de software, febrero de 2025',
    ],
  },
  {
    year: '2026',
    title: 'Del navegador al escritorio',
    description:
      'El año más ancho: un asistente de voz en Python, un explorador de GraphQL en Angular y una tienda con identidad propia y el código a la vista. En agosto se cierran dos etapas largas, la ingeniería y el puesto en la Universidad Surcolombiana.',
    items: [
      'Jarvis 2.0: asistente de escritorio con Gemini, voz y function calling',
      'Multiverse Explorer: Angular 16, Apollo y renderizado en servidor',
      'LUMIKO: tienda de objetos domotizados, repositorio público',
      'Ingeniero de Sistemas · Universidad de La Amazonia, febrero de 2013 – agosto de 2026',
      'Universidad Surcolombiana · fin de la etapa, agosto de 2026',
    ],
  },
]

/** Procedencia que se muestra al pie de la sección. */
export const timelineNote =
  'Fechas de repositorios tomadas del historial público de GitHub; fechas de empleo y formación, de la copia de datos del perfil de LinkedIn. Cada puesto aparece con lo que consta en esa copia —empleador, cargo y stack—, sin responsabilidades ni logros añadidos.'
