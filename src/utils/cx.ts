type ClassValue = string | false | null | undefined

/** Une clases ignorando valores falsy. Evita dependencias para algo trivial. */
export function cx(...values: ClassValue[]): string {
  return values.filter(Boolean).join(' ')
}
