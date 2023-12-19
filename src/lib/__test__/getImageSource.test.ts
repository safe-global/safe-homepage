import { type ImageObj, getImageSource } from '@/lib/getImageSource'

describe('getImageSource', () => {
  it('should return small image URL when image object exists and isSmall is true', () => {
    const imageObj: ImageObj = {
      sm: 'small-image.jpg',
      md: 'medium-image.jpg',
      alt: 'Small Image',
    }
    const isSmall = true

    const result = getImageSource(isSmall, imageObj)

    expect(result).toBe('small-image.jpg')
  })

  it('should return medium image URL when image object exists and isSmall is false', () => {
    const imageObj: ImageObj = {
      sm: 'small-image.jpg',
      md: 'medium-image.jpg',
      alt: 'Medium Image',
    }
    const isSmall = false

    const result = getImageSource(isSmall, imageObj)

    expect(result).toBe('medium-image.jpg')
  })

  it('should return undefined when image object does not exist', () => {
    const imageObj = undefined
    const isSmall = true

    const result = getImageSource(isSmall, imageObj)

    expect(result).toBeUndefined()
  })
})
