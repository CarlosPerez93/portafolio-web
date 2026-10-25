import type { SkillReport } from '../types'
import { formatNumber } from '../utils'

/**
 * Habilidades medidas, no declaradas.
 *
 * Los porcentajes salen del peso en bytes que GitHub atribuye a cada lenguaje
 * en los 17 repositorios públicos del perfil. Es una foto del código escrito,
 * no una escala de dominio: por eso el informe declara cuántos bytes se
 * analizaron y qué queda fuera del desglose.
 */
export const skillReport: SkillReport = {
  repositoryCount: 17,
  analysedBytes: 638_982,
  capturedAt: 'octubre de 2026',
  languages: [
    { name: 'TypeScript', bytes: 340_829, percent: 53.34, highlight: true },
    { name: 'CSS', bytes: 123_046, percent: 19.26, highlight: false },
    { name: 'JavaScript', bytes: 70_706, percent: 11.07, highlight: false },
    { name: 'HTML', bytes: 33_297, percent: 5.21, highlight: false },
    { name: 'SCSS', bytes: 17_930, percent: 2.81, highlight: false },
    { name: 'Java', bytes: 15_616, percent: 2.44, highlight: false },
    { name: 'Python', bytes: 13_481, percent: 2.11, highlight: false },
    { name: 'C++', bytes: 7_295, percent: 1.14, highlight: false },
    { name: 'C#', bytes: 6_644, percent: 1.04, highlight: false },
  ],
  remainder: { label: 'Objective-C++, Ruby, Shell, Starlark y otros', percent: 1.59 },
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
export const skillsMethod = `Los porcentajes no son una autoevaluación: son el peso real de cada lenguaje en los ${skillReport.repositoryCount} repositorios públicos, sobre ${formatNumber(skillReport.analysedBytes)} bytes de código que GitHub clasifica.`

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
