const numberFormatter = new Intl.NumberFormat('es-ES')

const percentFormatter = new Intl.NumberFormat('es-ES', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
})

export function formatNumber(value: number): string {
  return numberFormatter.format(value)
}

export function formatPercent(value: number): string {
  return `${percentFormatter.format(value)} %`
}

export function ordinal(position: number): string {
  return String(position).padStart(2, '0')
}
