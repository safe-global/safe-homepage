import { isPressReleasePost, isPublishedPressRelease } from '@/lib/contentful/isPressRelease'
import type { BlogPostEntry } from '@/config/types'
import type { TypePostFields } from '@/contentful/types'

describe('isPressReleasePost', () => {
  it('should return true if the post contains the press release tag', () => {
    const post = {
      fields: {
        tags: [
          {
            fields: { name: 'Press' },
            sys: {
              contentType: {
                sys: {
                  id: 'tag',
                },
              },
            },
          },
        ] as unknown as TypePostFields['tags'],
      },
    } as BlogPostEntry

    expect(isPressReleasePost(post)).toBe(true)
  })

  it('should return false if the post does not contain the press release tag', () => {
    const post = {
      fields: {
        tags: [
          {
            fields: { name: 'Dummy' },
            sys: {
              contentType: {
                sys: {
                  id: 'tag',
                },
              },
            },
          },
        ] as unknown as TypePostFields['tags'],
      },
    } as BlogPostEntry

    expect(isPressReleasePost(post)).toBe(false)
  })
})

describe('isPublishedPressRelease', () => {
  it('should return true if the post is a press release and is not a draft', () => {
    const post = {
      fields: {
        isDraft: false,
        tags: [
          {
            fields: { name: 'Press' },
            sys: {
              contentType: {
                sys: {
                  id: 'tag',
                },
              },
            },
          },
        ] as unknown as TypePostFields['tags'],
      },
    } as BlogPostEntry

    expect(isPublishedPressRelease(post)).toBe(true)
  })

  it('should return false if the post is a press release but is a draft', () => {
    const post = {
      fields: {
        isDraft: true,
        tags: [
          {
            fields: { name: 'Press' },
            sys: {
              contentType: {
                sys: {
                  id: 'tag',
                },
              },
            },
          },
        ] as unknown as TypePostFields['tags'],
      },
    } as BlogPostEntry

    expect(isPublishedPressRelease(post)).toBe(false)
  })

  it('should return false if the post is not a press release', () => {
    const post = {
      fields: {
        isDraft: false,
        tags: [
          {
            fields: { name: 'Safe{Wallet}' },
            sys: {
              contentType: {
                sys: {
                  id: 'tag',
                },
              },
            },
          },
        ] as unknown as TypePostFields['tags'],
      },
    } as BlogPostEntry

    expect(isPublishedPressRelease(post)).toBe(false)
  })
})
