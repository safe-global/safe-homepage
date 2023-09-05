/**
 * Formats the given number in thousands order of magnitude and truncates the decimal part to 1 digit.
 *
 * @param {number} value - The number to be formatted.
 * @returns {string} The formatted string representation of the number.
 */
export function formatValue(value: number): string {
  const numberFormat = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 2,
  })

  const parts = numberFormat.formatToParts(value)
  let integer = '0'
  let decimalPart = ''
  let compact = ''

  for (const part of parts) {
    switch (part.type) {
      case 'integer':
        integer = part.value
        break
      case 'decimal':
        if (integer.length === 1) {
          decimalPart = part.value
        }
        break
      case 'fraction':
        if (integer.length === 1) {
          // Truncates the fraction part to 1 decimal place if the value has a single integer digit
          decimalPart = `${decimalPart}${part.value[0]}`
        }
        break
      case 'compact':
        compact = part.value
        break
      default:
        break
    }
  }

  return `${integer}${decimalPart}${compact}`
}
