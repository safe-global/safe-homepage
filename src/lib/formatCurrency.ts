/**
 * Formats a number as currency, adding thousand separators and specifying the number of fraction digits.
 *
 * This function takes a number and formats it according to the 'en-US' locale as a currency,
 * adding thousand separators to the integer part of the number and allowing control over the number of fraction digits displayed.
 *
 * @param {number} value - The number to format.
 * @param {number} fractionDigits - The number of decimal places to display.
 * @returns {string} The formatted number as currency, with thousand separators and specified number of fraction digits.
 */
export const formatCurrency = (value: number, fractionDigits: number): string =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(value)
