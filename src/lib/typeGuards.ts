import type {
  TypeAuthorSkeleton,
  TypeButtonSkeleton,
  TypeCardGridItemSkeleton,
  TypeFaqEntrySkeleton,
  TypePostSkeleton,
  TypeTagSkeleton,
} from '@/contentful/types'
import type { Asset, Entry } from 'contentful'
import type { Text } from '@contentful/rich-text-types'

export const isEntryTypeButton = (obj: any): obj is Entry<TypeButtonSkeleton, undefined, string> => {
  return obj.sys.contentType.sys.id === 'button'
}

export const isEntryTypeCardGridItem = (obj: any): obj is Entry<TypeCardGridItemSkeleton, undefined, string> => {
  return obj.sys.contentType.sys.id === 'cardGridItem'
}

export const isEntryTypeFaqEntry = (obj: any): obj is Entry<TypeFaqEntrySkeleton, undefined, string> => {
  return obj.sys.contentType.sys.id === 'faqEntry'
}

export const isEntryTypeTag = (obj: any): obj is Entry<TypeTagSkeleton, undefined, string> => {
  return obj.sys.contentType.sys.id === 'tag'
}

export const isEntryTypeAuthor = (obj: any): obj is Entry<TypeAuthorSkeleton, undefined, string> => {
  return obj.sys.contentType.sys.id === 'author'
}

export const isEntryTypePost = (obj: any): obj is Entry<TypePostSkeleton, undefined, string> => {
  return obj.sys.contentType.sys.id === 'post'
}

export const isEntryType = (obj: any): obj is Entry => {
  return obj.sys.type === 'Entry'
}

// TODO: rename to isAssetType
export const isAsset = (obj: any): obj is Asset<undefined, string> => {
  return obj && obj.sys.type === 'Asset'
}

export const isText = (obj: any): obj is Text => {
  return obj.nodeType === 'text'
}
