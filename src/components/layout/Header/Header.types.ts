import type { NavItem, SectionId } from '../../../types'

export type HeaderProps = {
  readonly activeId: SectionId
  readonly items: readonly NavItem[]
}
