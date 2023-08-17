export function formatValue(value: number): string {
  const numberFormat = new Intl.NumberFormat(undefined, {
    notation: 'compact',
  })

  return `${numberFormat.format(value)}`
}
