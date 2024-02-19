import { type AuthorsProps } from '@/components/Blog/Authors'
import { formatAuthorsList } from '@/components/Blog/utils/formatAuthorsList'

describe('formatAuthorsList', () => {
  it('returns a single author properly', () => {
    const authors = [{ fields: { name: 'Single Author' } }] as unknown as AuthorsProps
    expect(formatAuthorsList(authors)).toBe('Single Author')
  })

  it('formats a list of authors with proper punctuation', () => {
    const authors = [
      { fields: { name: 'Author 1' } },
      { fields: { name: 'Author 2' } },
      { fields: { name: 'Author 3' } },
      { fields: { name: 'Author 4' } },
    ] as AuthorsProps
    expect(formatAuthorsList(authors)).toBe('Author 1, Author 2, Author 3 & Author 4')
  })
})
