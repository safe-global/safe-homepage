const hasSingleIntegerDigit = (value: number): boolean => value < 10

/**
 * Formats a numeric value into its thousands order of magnitude.
 * If it rounds to a single integer digit, keep one decimal place.
 *
 * @param {number} value - The numeric value to format.
 * @returns {string} The formatted value with the order of magnitude suffix.
 */
export function formatValue(value: number): string {
  if (value >= 1e12) {
    const valueInTrillions = value / 1e12
    const isSingleDigitInteger = hasSingleIntegerDigit(valueInTrillions)
    const formattedValue = isSingleDigitInteger ? valueInTrillions.toFixed(1) : Math.floor(valueInTrillions).toString()
    return formattedValue + 'T'
  } else if (value >= 1e9) {
    const valueInBillions = value / 1e9
    const isSingleDigitInteger = hasSingleIntegerDigit(valueInBillions)
    const formattedValue = isSingleDigitInteger ? valueInBillions.toFixed(1) : Math.floor(valueInBillions).toString()
    return formattedValue + 'B'
  } else if (value >= 1e6) {
    const valueInMillions = value / 1e6
    const isSingleDigitInteger = hasSingleIntegerDigit(valueInMillions)
    const formattedValue = isSingleDigitInteger ? valueInMillions.toFixed(1) : Math.floor(valueInMillions).toString()
    return formattedValue + 'M'
  } else if (value >= 1e3) {
    const valueInThousands = value / 1e3
    const isSingleDigitInteger = hasSingleIntegerDigit(valueInThousands)
    const formattedValue = isSingleDigitInteger ? valueInThousands.toFixed(1) : Math.floor(valueInThousands).toString()
    return formattedValue + 'K'
  } else {
    return `${value}`
  }
}
