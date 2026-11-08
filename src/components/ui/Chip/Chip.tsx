import { cx } from '../../../utils'
import styles from './Chip.module.css'
import type { ChipProps } from './Chip.types'

export function Chip({ children, subtle = false }: ChipProps) {
  return <span className={cx(styles.chip, subtle && styles.subtle)}>{children}</span>
}
