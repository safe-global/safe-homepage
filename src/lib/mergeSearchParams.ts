import type { ParsedUrlQuery } from 'querystring'

/**
 * Merges search parameters from the provided URL search string
 * with additional parameters from the Next.js router.
 *
 * @param {string} hrefSearchParams - The search parameters from the URL.
 * @param {ParsedUrlQuery} routerSearchParams - Additional search parameters from the Next.js router.
 * @returns {string | null} - Merged search parameters as a query string or null if no parameters exist.
 */
export const mergeSearchParams = (hrefSearchParams: string, routerSearchParams: ParsedUrlQuery) => {
  const searchParams = new URLSearchParams(hrefSearchParams)

  for (const [key, value] of Object.entries(routerSearchParams)) {
    searchParams.append(key, value as string)
  }

  return searchParams.toString() && `?${searchParams.toString()}`
}
