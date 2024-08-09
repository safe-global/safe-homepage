/**
 * Formats a timestamp into a date string with day and month.
 * @param {number} timestamp - The timestamp to format (in seconds).
 * @returns {string} The formatted date string in 'DD MMM' format.
 */

export function formatDate(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
  })
}
