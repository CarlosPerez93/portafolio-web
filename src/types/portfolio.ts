/**
 * Modelo de dominio del portafolio.
 *
 * Toda la información que consume la interfaz pasa por estos tipos: las
 * secciones no conocen la forma de los datos, solo reciben entidades.
 */

/** Identificadores de las secciones que participan de la navegación. */
export const SECTION_IDS = [
  'perfil',
  'proyectos',
  'habilidades',
  'experiencia',
  'estudios',
  'trayectoria',
  'contacto',
] as const

export type SectionId = (typeof SECTION_IDS)[number]

export interface NavItem {
  readonly id: SectionId
  readonly label: string
  readonly index: string
}

export type SocialIcon = 'github' | 'linkedin' | 'mail'

export interface SocialLink {
  readonly id: string
  readonly label: string
  readonly handle: string
  readonly href: string
  readonly icon: SocialIcon
  readonly external: boolean
}

export interface ProfileFact {
  readonly label: string
  readonly value: string
}

export interface ProfileSource {
  readonly platform: 'GitHub' | 'LinkedIn'
  readonly label: string
  readonly href: string
}

export interface Profile {
  readonly name: string
  readonly role: string
  readonly discipline: string
  readonly headline: string
  readonly bio: readonly string[]
  readonly focus: readonly string[]
  readonly avatar?: string
  readonly email: string
  readonly location: string | null
  readonly githubHandle: string
  readonly githubUrl: string
  readonly memberSince: string
  readonly publicRepos: number
  readonly linkedinHandle: string
  readonly linkedinUrl: string
  readonly facts: readonly ProfileFact[]
  readonly sources: readonly ProfileSource[]
  readonly collectedAt: string
}

export type ProjectLinkKind = 'repo' | 'demo'

export interface ProjectLink {
  readonly label: string
  readonly href: string
  readonly kind: ProjectLinkKind
}

export interface Project {
  readonly id: string
  readonly year: number
  readonly title: string
  readonly tagline: string
  readonly description: string
  readonly stack: readonly string[]
  readonly links: readonly ProjectLink[]
  readonly featured: boolean
  /** Señal verificable y breve: estrellas, estado del repositorio, etc. */
  readonly signal?: string
}

export interface LanguageStat {
  readonly name: string
  readonly bytes: number
  readonly percent: number
  /** El lenguaje con más código del perfil se destaca en la escala. */
  readonly highlight: boolean
}

export interface SkillGroup {
  readonly id: string
  readonly title: string
  readonly caption: string
  readonly items: readonly string[]
}

export interface SkillReport {
  readonly repositoryCount: number
  readonly analysedBytes: number
  readonly capturedAt: string
  readonly languages: readonly LanguageStat[]
  readonly remainder: { readonly label: string; readonly percent: number }
  readonly groups: readonly SkillGroup[]
}

/** Etapa profesional tal como consta en la copia exportada del perfil. */
export interface ExperienceEntry {
  readonly company: string
  readonly role: string
  readonly period: string
  /** Duración que acompaña al registro; `null` si la copia no la incluye. */
  readonly duration: string | null
  readonly location: string | null
  /** Descripción literal del registro; `null` cuando no hay descripción. */
  readonly summary: string | null
  readonly stack: readonly string[]
}

export type EducationKind = 'Titulación' | 'Curso superior' | 'Formación'

/** Estudio o curso tal como consta en la copia exportada del perfil. */
export interface EducationEntry {
  readonly institution: string
  readonly qualification: string
  /** Segunda línea del registro (campo de estudio); `null` si no la trae. */
  readonly field: string | null
  readonly kind: EducationKind
  readonly period: string
}

export interface TimelineEntry {
  readonly year: string
  readonly title: string
  readonly description: string
  readonly items: readonly string[]
}
