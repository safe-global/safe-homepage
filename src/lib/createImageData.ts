import { isAsset } from '@/lib/typeGuards'
import type { Asset, UnresolvedLink } from 'contentful'

export const createImageData = (data: (Asset<undefined, string> | UnresolvedLink<'Asset'>)[] | undefined) =>
  Array.isArray(data)
    ? data.filter(isAsset).map((item) => ({
        src: item.fields.file?.url,
        alt: item.fields.description,
      }))
    : undefined
