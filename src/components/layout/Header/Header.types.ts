import type { NavItem, SectionId } from '../../../types'

export interface HeaderProps {
  readonly items: readonly NavItem[]
  readonly activeId: SectionId
}
