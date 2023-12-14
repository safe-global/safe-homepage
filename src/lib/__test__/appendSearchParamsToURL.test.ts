import { appendSearchParamsToURL } from '../appendSearchParamsToURL'

describe('appendSearchParamsToURL', () => {
  it('should append search params to URL without existing search params', () => {
    const originalURL = 'https://example.com/page'
    const newSearchParams = 'param1=value1&param2=value2'

    const result = appendSearchParamsToURL(originalURL, newSearchParams)

    expect(result).toBe('https://example.com/page?param1=value1&param2=value2')
  })

  it('should merge search params into URL with existing search params', () => {
    const originalURL = 'https://example.com/page?param1=value1'
    const newSearchParams = 'param2=value2&param3=value3'

    const result = appendSearchParamsToURL(originalURL, newSearchParams)

    expect(result).toBe('https://example.com/page?param1=value1&param2=value2&param3=value3')
  })

  it('should merge new search params into URL with existing search params and fragment', () => {
    const originalURL = 'https://example.com/page?param1=value1#section'
    const newSearchParams = 'param2=value2'

    const result = appendSearchParamsToURL(originalURL, newSearchParams)

    expect(result).toBe('https://example.com/page?param1=value1&param2=value2#section')
  })
})
