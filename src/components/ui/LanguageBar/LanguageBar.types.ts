import type { LanguageStat } from '../../../types'

export interface LanguageBarProps {
  readonly stat: LanguageStat
  /** Retardo de la animación, en milisegundos. */
  readonly delay?: number
}
