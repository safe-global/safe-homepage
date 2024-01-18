import { formatBlogDate } from '@/components/Blog/utils/formatBlogDate'

describe('formatBlogDate', () => {
  it('formats a valid date with a st day suffix', () => {
    const inputDate = '2023-12-01T00:00+00:00'
    const formattedDate = formatBlogDate(inputDate)

    expect(formattedDate).toBe('1st December, 2023')
  })

  it('formats a valid date with a nd day suffix', () => {
    const inputDate = '2023-12-02T00:00+00:00'
    const formattedDate = formatBlogDate(inputDate)

    expect(formattedDate).toBe('2nd December, 2023')
  })

  it('formats a valid date with a rd day suffix', () => {
    const inputDate = '2023-12-03T00:00+00:00'
    const formattedDate = formatBlogDate(inputDate)

    expect(formattedDate).toBe('3rd December, 2023')
  })

  it('formats a valid date with a th day suffix', () => {
    const inputDate = '2023-12-08T00:00+00:00'
    const formattedDate = formatBlogDate(inputDate)

    expect(formattedDate).toBe('8th December, 2023')
  })
})
