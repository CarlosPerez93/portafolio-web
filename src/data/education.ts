import type { EducationEntry } from '../types'

/**
 * Formación.
 *
 * Procedencia: copia exportada del perfil de LinkedIn (sección «Educación»).
 * Un registro por institución, en el orden del documento. El nombre del centro,
 * el título y las fechas son los del registro; la etiqueta de tipo se deduce de
 * la propia denominación del título, no de una valoración externa.
 */
export const education: readonly EducationEntry[] = [
  {
    institution: 'Universidad de La Amazonia',
    qualification: 'Ingeniero de Sistemas',
    field: 'Systems Engineering',
    kind: 'Titulación',
    period: 'febrero de 2013 – agosto de 2026',
  },
  {
    institution: 'Deusto Formación',
    qualification: 'Curso Superior FullStack Developer',
    field: 'Desarrollo de aplicaciones web',
    kind: 'Curso superior',
    period: 'junio de 2023 – septiembre de 2024',
  },
  {
    institution: 'midudev',
    qualification: 'Desarrollo de software',
    field: null,
    kind: 'Formación',
    period: 'febrero de 2025',
  },
]
