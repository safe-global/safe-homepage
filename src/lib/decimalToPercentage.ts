/**
 * Converts a decimal number to a percentage string.
 *
 * @param {number} num - The decimal number to convert.
 * @param {number} [decimalPlaces=2] - Optional. The number of decimal places for the percentage string.
 * @param {boolean} [appendPercentSign=false] - Optional. Whether to append a "%" sign to the string.
 * @returns {string} The converted number as a percentage string with the specified number of decimal places,
 *                   optionally appended with a "%" sign.
 */
export const decimalToPercentage = (
  num: number,
  decimalPlaces: number = 2,
  appendPercentSign: boolean = true,
): string => {
  return `${(num * 100).toFixed(decimalPlaces)}${appendPercentSign ? '%' : ''}`
}
