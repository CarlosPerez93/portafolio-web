import type { SkillReport } from '../types'
import { formatNumber } from '../utils'

/**
 * Habilidades medidas, no declaradas.
 *
 * Los porcentajes salen del peso en bytes que GitHub atribuye a cada lenguaje
 * en los repositorios públicos con código del perfil. Es una foto del código
 * escrito, no una escala de dominio: por eso el informe declara cuántos bytes
 * se analizaron y qué queda fuera del desglose.
 */
export const skillReport: SkillReport = {
  repositoryCount: 17,
  analysedBytes: 947_296,
  capturedAt: 'octubre de 2026',
  languages: [
    { name: 'TypeScript', bytes: 476_493, percent: 50.3, highlight: true },
    { name: 'HTML', bytes: 134_550, percent: 14.2, highlight: false },
    { name: 'CSS', bytes: 132_886, percent: 14.03, highlight: false },
    { name: 'JavaScript', bytes: 132_263, percent: 13.96, highlight: false },
    { name: 'SCSS', bytes: 17_930, percent: 1.89, highlight: false },
    { name: 'Java', bytes: 15_616, percent: 1.65, highlight: false },
    { name: 'Python', bytes: 13_481, percent: 1.42, highlight: false },
    { name: 'C++', bytes: 7_295, percent: 0.77, highlight: false },
    { name: 'C#', bytes: 6_644, percent: 0.7, highlight: false },
  ],
  remainder: { label: 'Objective-C++, Objective-C, Ruby, Shell, Starlark y CMake', percent: 1.07 },
  groups: [
    {
      id: 'interfaces',
      title: 'Interfaces',
      caption: 'Lo que aparece en pantalla',
      items: ['React', 'TypeScript', 'CSS Modules', 'SCSS', 'Tailwind CSS', 'Angular'],
    },
    {
      id: 'estado',
      title: 'Estado y datos',
      caption: 'Cómo viaja la información',
      items: [
        'Context API',
        'Redux Toolkit',
        'React Query',
        'Apollo GraphQL',
        'RxJS',
        'localStorage',
      ],
    },
    {
      id: 'herramientas',
      title: 'Herramientas',
      caption: 'El taller',
      items: ['Vite', 'pnpm', 'Netlify', 'Vitest', 'Testing Library', 'ESLint', 'Prettier', 'Git'],
    },
    {
      id: 'exploracion',
      title: 'Exploración',
      caption: 'Fuera del navegador',
      items: ['Python', 'Gemini API', 'Voz a texto', 'Texto a voz', 'React Native', 'Firebase'],
    },
  ],
}

/** Frase de método que acompaña al informe en la sección de habilidades. */
export const skillsMethod = `Los porcentajes no son una autoevaluación: son el peso real de cada lenguaje en ${skillReport.repositoryCount} repositorios públicos, sobre ${formatNumber(skillReport.analysedBytes)} bytes de código que GitHub clasifica. De los 19 repositorios públicos quedan fuera este mismo sitio, que se mediría a sí mismo, y el repositorio de perfil, que no contiene código.`

/**
 * Aviso de precisión.
 *
 * La columna se muestra con un decimal y los bytes se redondean de forma
 * independiente, así que la suma de las filas visibles no siempre da 100,0 %.
 * Se declara en lugar de ajustar un valor para que cuadre.
 */
export const skillsRoundingNote =
  'Cifras redondeadas a un decimal de forma independiente: la suma de la columna puede no dar exactamente 100 %.'

/** Salvedad que evita leer la escala como una medición de competencia. */
export const skillsCaveat =
  'Un lenguaje con pocos bytes puede ser un experimento de una tarde; uno con muchos, el lugar donde vivo. La escala mide volumen de código, no profundidad de conocimiento.'
