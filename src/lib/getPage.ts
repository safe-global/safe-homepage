import { type NextRouter } from 'next/router'

export const PAGE_QUERY_PARAM = 'page'

/**
 * Returns the page number from the query object of Next.js router.
 * If the page number is not found or invalid, it returns 1 as default.
 * @param {NextRouter['query']} query - The query object from Next.js router.
 * @returns {number} The page number extracted from the query object.
 */
export const getPage = (query: NextRouter['query']): number => {
  const page = Array.isArray(query[PAGE_QUERY_PARAM]) ? query[PAGE_QUERY_PARAM][0] : query[PAGE_QUERY_PARAM]

  return Number(page) || 1
}
