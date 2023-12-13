/**
 * Merges search parameters from the provided link href
 * with additional parameters from the URL.
 *
 * @param {string} hrefSearchParams - The search parameters from the link href.
 * @param {string} urlSearchParams - The search parameters from the URL.
 * @returns {string | null} - Merged search parameters as a query string or null if no parameters exist.
 */
export const mergeSearchParams = (hrefSearchParams: string, urlSearchParams: string) => {
  const searchParams = new URLSearchParams(hrefSearchParams)
  const urlParams = new URLSearchParams(urlSearchParams)

  // merge search params
  for (const [key, value] of Array.from(urlParams.entries())) {
    searchParams.set(key, value)
  }

  return searchParams.toString() && `?${searchParams.toString()}`
}
