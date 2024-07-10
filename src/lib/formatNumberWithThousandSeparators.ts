/**
 * Formats a number by adding thousand separators.
 *
 * This function takes a number, discards its decimal part, and then formats it
 * according to the 'en-US' locale, which adds thousand separators to the integer part of the number.
 *
 * @param {number} num - The number to format.
 * @returns {string} The formatted number with thousand separators.
 */
export const formatNumberWithThousandSeparators = (num: number): string => {
  const integerPart = Math.floor(num) // Discard the decimal part

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(integerPart)
}
