/**
 * Converts a decimal number to a percentage string.
 *
 * @param {number} num - The decimal number to convert.
 * @param {number} [decimalPlaces=2] - Optional. The number of decimal places for the percentage string.
 * @returns {string} The converted number as a percentage string with the specified number of decimal places.
 */
export const toPercentage = (num: number, decimalPlaces: number = 2): string => {
  return `${(num * 100).toFixed(decimalPlaces)}%`
}
