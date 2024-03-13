import { extractContentfulImageProps } from '@/lib/contentful/extractContentfulImageProps'
import type { Asset } from 'contentful'

describe('extractContentfulImageProps', () => {
  it('returns undefined when image is undefined', () => {
    const image = undefined
    const result = extractContentfulImageProps(image)
    expect(result).toBeUndefined()
  })

  it('returns undefined when image URL is unavailable', () => {
    const image: Asset<undefined, string> = {
      sys: {
        id: '123',
        type: 'Asset',
      },
      fields: {
        file: {
          // Missing URL
        },
      },
    } as Asset<undefined, string>

    const result = extractContentfulImageProps(image)
    expect(result).toBeUndefined()
  })

  it('returns image properties when image is a valid asset', () => {
    const image = {
      sys: {
        id: '123',
        type: 'Asset',
      },
      fields: {
        file: {
          url: 'https://example.com/image.jpg',
        },
        title: 'Example Image',
      },
    } as Asset<undefined, string>

    const expectedResult = {
      src: 'https://example.com/image.jpg',
      alt: 'Example Image',
    }
    const result = extractContentfulImageProps(image)
    expect(result).toEqual(expectedResult)
  })
})
