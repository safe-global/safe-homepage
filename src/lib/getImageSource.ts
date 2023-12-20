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
