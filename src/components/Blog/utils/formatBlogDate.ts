/**
 * Formats a date string.
 *
 * @param {string} inputDate - The input date string to be formatted.
 * @returns {string} - The formatted date in the "Dec 8, 2023" style.
 */
export function formatBlogDate(inputDate: string) {
  const date = new Date(inputDate)

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
