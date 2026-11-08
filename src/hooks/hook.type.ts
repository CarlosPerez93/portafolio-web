import type { RefObject } from 'react'

export type UseInViewOptions = {
  readonly threshold?: number
  readonly rootMargin?: string
  readonly once?: boolean
}

export type UseInViewResult<T extends Element> = {
  readonly ref: RefObject<T | null>
  readonly inView: boolean
}
