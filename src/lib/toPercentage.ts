/**
 * Converts a decimal number to a percentage string.
 *
 * @param {number} num - The decimal number to convert.
 * @returns {string} The converted number as a percentage string with two decimal places.
 */
export const toPercentage = (num: number): string => {
  return `${(num * 100).toFixed(2)}%`
}
