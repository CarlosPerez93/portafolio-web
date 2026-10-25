import type { NavItem } from '../types'

/** Orden de lectura de la página; coincide con el índice que muestra cada sección. */
export const navigation: readonly NavItem[] = [
  { id: 'perfil', label: 'Perfil', index: '01' },
  { id: 'proyectos', label: 'Proyectos', index: '02' },
  { id: 'habilidades', label: 'Habilidades', index: '03' },
  { id: 'trayectoria', label: 'Trayectoria', index: '04' },
  { id: 'contacto', label: 'Contacto', index: '05' },
]
