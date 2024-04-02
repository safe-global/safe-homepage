import { getPage } from '@/lib/getPage'
import { type NextRouter } from 'next/router'

describe('getPage function', () => {
  it('should return the page number from the query object when it is a string', () => {
    const mockQuery: NextRouter['query'] = {
      page: '3',
    }
    const result = getPage(mockQuery)

    expect(result).toEqual(3)
  })

  it('should return the first element the query object when it is an array of strings', () => {
    const queryWithArray: NextRouter['query'] = {
      page: ['5', '10', 'foo'],
    }
    const result = getPage(queryWithArray)

    expect(result).toEqual(5)
  })

  it('should default to 1 when the page number is not found or invalid', () => {
    const queryWithoutPage: NextRouter['query'] = {}
    const result = getPage(queryWithoutPage)

    expect(result).toEqual(1)
  })

  it('should default to 1 when the page number is NaN', () => {
    const queryWithNaN: NextRouter['query'] = {
      page: 'abc', // Invalid page parameter
    }
    const result = getPage(queryWithNaN)

    expect(result).toEqual(1)
  })
})
