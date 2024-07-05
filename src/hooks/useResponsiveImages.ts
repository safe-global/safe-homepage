import { useIsMediumScreen } from '@/hooks/useMaxWidth'

export type ImageObj = {
  sm: string
  md: string
  alt?: string
}

/**
 * Get the source URL for an image based on its size and screen condition.
 * @param {ImageObj} imageObj - The object containing URLs for different image sizes.
 * @param {boolean} isSmall - A flag indicating whether the small image shall be used.
 * @returns {string|undefined} - The source URL for the image, or undefined.
 */
export function getImageSource(isSmall: boolean, imageObj?: ImageObj) {
  return imageObj ? (isSmall ? imageObj.sm : imageObj.md) : undefined
}

/**
 * Get the source URLs for images based on their sizes and screen conditions.
 * @param {ImageObj[]} images - The objects containing URLs for different image sizes.
 * @returns {string[]} - The source URLs for the images.
 */
const useResponsiveImages = (...images: Array<ImageObj>) => {
  const isMediumScreen = useIsMediumScreen()

  return images.reduce<Array<string>>((acc: Array<string>, image: ImageObj) => {
    const source = getImageSource(isMediumScreen, image)

    return source ? acc.concat(source) : acc
  }, [])
}

export default useResponsiveImages
