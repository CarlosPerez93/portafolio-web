const numberFormatter = new Intl.NumberFormat('es-ES')

const percentFormatter = new Intl.NumberFormat('es-ES', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
})

/** 638982 → "638.982" */
export function formatNumber(value: number): string {
  return numberFormatter.format(value)
}

/** 53.34 → "53,3 %" */
export function formatPercent(value: number): string {
  return `${percentFormatter.format(value)} %`
}
