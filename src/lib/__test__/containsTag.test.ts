import { type TagsType } from '@/components/Blog/Tags'
import { containsTag } from '@/lib/containsTag'

// Mocking the tags array for testing
const mockTags = [
  { fields: { name: 'Institutional' }, sys: { contentType: { sys: { id: 'tag' } } } },
  { fields: { name: 'Some Other Tag' }, sys: { contentType: { sys: { id: 'tag' } } } },
] as TagsType

describe('containsTag', () => {
  it('should return true if the provided tag is found in the tags array', () => {
    expect(containsTag(mockTags, 'Institutional')).toBe(true)
  })

  it('should return false if the provided tag is not found in the tags array', () => {
    expect(containsTag(mockTags, 'Foo')).toBe(false)
  })

  it('should return false if the tag name is an empty string', () => {
    expect(containsTag(mockTags, '')).toBe(false)
  })

  it('should return false if the tags array is empty', () => {
    expect(containsTag([], 'Institutional')).toBe(false)
  })

  it('should return false if the tags array is undefined', () => {
    expect(containsTag(undefined, 'Institutional')).toBe(false)
  })
})
