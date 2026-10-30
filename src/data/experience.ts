import type { ExperienceEntry } from '../types'

/**
 * Experiencia profesional.
 *
 * Procedencia: copia exportada del perfil de LinkedIn (sección «Experiencia»).
 * Se conserva el orden del documento y no se reordena por relevancia. El texto
 * de cada descripción es el del registro, con los saltos de línea del PDF
 * unidos; la lista de tecnologías son esos mismos términos, normalizados solo en
 * mayúsculas y guiones para poder mostrarlos como etiquetas.
 *
 * El registro de la Universidad Surcolombiana no trae descripción en la copia:
 * se deja como hueco visible en lugar de rellenarlo.
 */
export const experience: readonly ExperienceEntry[] = [
  {
    company: 'Universidad Surcolombiana',
    role: 'Frontend Developer',
    period: 'marzo de 2024 – agosto de 2026',
    duration: '2 años 6 meses',
    location: 'España',
    summary: null,
    stack: [],
  },
  {
    company: 'Universidad de La Amazonia',
    role: 'Desarrollador de front-end',
    period: 'enero de 2020 – abril de 2023',
    duration: '3 años 4 meses',
    location: 'Caquetá, Colombia',
    summary:
      'Desarrollo front-end con html, css-modules, JS, react, MUI, redux-toolkit, axios, moment',
    stack: ['HTML', 'CSS Modules', 'JS', 'React', 'MUI', 'Redux Toolkit', 'Axios', 'Moment'],
  },
  {
    company: 'OnPlay',
    role: 'Desarrollador de front-end',
    period: 'diciembre de 2022 – enero de 2023',
    duration: '2 meses',
    location: 'Caquetá, Colombia',
    summary:
      'Soporte de modulos con html, sass, JS, react, Ant-Design, Firebase, React-Query, moment',
    stack: ['HTML', 'Sass', 'JS', 'React', 'Ant Design', 'Firebase', 'React Query', 'Moment'],
  },
  {
    company: 'IVO INTERNACIONAL',
    role: 'Desarrollador de front-end',
    period: 'marzo de 2022 – noviembre de 2022',
    duration: '9 meses',
    location: 'Caquetá, Colombia',
    summary: 'Soporte de modulos con html, sass, JS, react, Ant-Design, Firebase, axios, moment.',
    stack: ['HTML', 'Sass', 'JS', 'React', 'Ant Design', 'Firebase', 'Axios', 'Moment'],
  },
]
