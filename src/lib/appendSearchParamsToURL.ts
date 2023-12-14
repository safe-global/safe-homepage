/**
 * Appends or merges search parameters into a given URL.
 *
 * @param {string} href - The original URL to which search parameters should be appended or merged.
 * @param {string} searchParams - The search parameters to be appended or merged into the URL.
 *   Should be a string in the form 'param1=value1&param2=value2'.
 * @returns {string} - The updated URL with the appended or merged search parameters.
 **/
export const appendSearchParamsToURL = (href: string, searchParams: string) => {
  const url = new URL(href)

  // Existing search params from the href
  const finalSearchParams = new URLSearchParams(url.search)

  // merge search params
  const extraSearchParams = new URLSearchParams(searchParams)
  for (const [key, value] of Array.from(extraSearchParams.entries())) {
    finalSearchParams.set(key, value)
  }

  // Update the search params in the URL
  url.search = finalSearchParams.toString()

  return url.href
}
