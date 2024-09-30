import { formatBlogDate } from '@/components/Blog/utils/formatBlogDate'

describe('formatBlogDate', () => {
  it('formats a valid date', () => {
    const inputDate = '2023-12-08T00:00+00:00'
    const formattedDate = formatBlogDate(inputDate)

    expect(formattedDate).toBe('Dec 8, 2023')
  })

  it('returns "Invalid Date" for unexisting date', () => {
    const inputDate = '2023-13-03T00:00+00:00'
    const formattedDate = formatBlogDate(inputDate)

    expect(formattedDate).toBe('Invalid Date')
  })
})
