import { mergeSearchParams } from '../mergeSearchParams'

describe('mergeSearchParams', () => {
  it('should merge href and router search parameters correctly', () => {
    const hrefSearchParams = 'param1=value1&param2=value2'
    const urlSearchParams = 'param3=value3&param4=value4'

    const result = mergeSearchParams(hrefSearchParams, urlSearchParams)

    expect(result).toBe('?param1=value1&param2=value2&param3=value3&param4=value4')
  })

  it('should return null if no search parameters exist', () => {
    const hrefSearchParams = ''
    const urlSearchParams = ''

    const result = mergeSearchParams(hrefSearchParams, urlSearchParams)

    expect(result).toBe('')
  })
})
