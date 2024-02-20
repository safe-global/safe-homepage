const ordinalSuffixes = {
  one: 'st',
  two: 'nd',
  few: 'rd',
  other: 'th',
  zero: 'th',
  many: undefined,
}

// Formatters
const ordinalPluralRules = new Intl.PluralRules('en', { type: 'ordinal' })
const dateFormat = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'long', year: 'numeric' })

function appendOrdinalSuffix(day: number) {
  const ordinal = ordinalPluralRules.select(day)
  const suffix = ordinalSuffixes[ordinal]

  return `${day}${suffix}`
}

/**
 * Formats a date string.
 *
 * @param {string} inputDate - The input date string to be formatted.
 * @returns {string} - The formatted date in the "8th December, 2023" style.
 */
export function formatBlogDate(inputDate: string) {
  const date = new Date(inputDate)
  const parts = dateFormat.formatToParts(date)

  const dayName = parts.find((p) => p.type === 'day')?.value
  const dayWithSuffix = appendOrdinalSuffix(Number(dayName))
  const month = parts.find((p) => p.type === 'month')?.value
  const year = parts.find((p) => p.type === 'year')?.value

  return `${dayWithSuffix} ${month}, ${year}`
}
