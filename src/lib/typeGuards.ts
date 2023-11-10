import type { TypeButtonSkeleton, TypeCardGridItemSkeleton, TypeFaqEntrySkeleton } from '@/contentful/types'
import type { Asset, Entry } from 'contentful'

export const isEntryTypeButton = (obj: any): obj is Entry<TypeButtonSkeleton, undefined, string> => {
  return obj.sys.contentType.sys.id === 'button'
}

export const isEntryTypeCardGridItem = (obj: any): obj is Entry<TypeCardGridItemSkeleton, undefined, string> => {
  return obj.sys.contentType.sys.id === 'cardGridItem'
}

export const isEntryTypeFaqEntry = (obj: any): obj is Entry<TypeFaqEntrySkeleton, undefined, string> => {
  return obj.sys.contentType.sys.id === 'faqEntry'
}

export const isAsset = (obj: any): obj is Asset<undefined, string> => {
  return obj.sys.type === 'Asset'
}
