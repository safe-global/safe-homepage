import { isAsset } from '@/lib/typeGuards'
import type { Asset, UnresolvedLink } from 'contentful'

/**
 * Extracts image properties from a Contentful asset.
 * @param {UnresolvedLink<'Asset'> | Asset<undefined, string> | undefined} image Contentful asset or unresolved link.
 * @returns {{ src: string, alt: string } | undefined} Image properties. Returns undefined if the input is not a valid Contentful asset..
 */
export const extractContentfulImageProps = (image: UnresolvedLink<'Asset'> | Asset<undefined, string> | undefined) =>
  isAsset(image) && image.fields.file?.url
    ? {
        src: image.fields.file.url,
        alt: image.fields.title ?? '',
      }
    : undefined
