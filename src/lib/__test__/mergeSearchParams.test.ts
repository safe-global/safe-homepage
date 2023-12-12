import { mergeSearchParams } from '../mergeSearchParams'

describe('mergeSearchParams', () => {
  it('should merge href and router search parameters correctly', () => {
    const hrefSearchParams = 'param1=value1&param2=value2'
    const routerSearchParams = { param3: 'value3', param4: 'value4' }

    const result = mergeSearchParams(hrefSearchParams, routerSearchParams)

    expect(result).toBe('?param1=value1&param2=value2&param3=value3&param4=value4')
  })

  it('should return null if no search parameters exist', () => {
    const hrefSearchParams = ''
    const routerSearchParams = {}

    const result = mergeSearchParams(hrefSearchParams, routerSearchParams)

    expect(result).toBe('')
  })
})
