import type { TypeButtonSkeleton } from '@/contentful/types'
import type { Asset, Entry } from 'contentful'

export const isEntryTypeButton = (obj: any): obj is Entry<TypeButtonSkeleton, undefined, string> => {
  return obj.sys.contentType.sys.id === 'button'
}

export const isAsset = (obj: any): obj is Asset<undefined, string> => {
  return obj.sys.type === 'Asset'
}
