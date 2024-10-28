import type {
  TypeAuthorSkeleton,
  TypeBaseBlockSkeleton,
  TypeBlogHomeSkeleton,
  TypeButtonSkeleton,
  TypeExternalUrlSkeleton,
  TypePostSkeleton,
  TypeSimpleBaseBlockSkeleton,
  TypeTagSkeleton,
} from '@/contentful/types'
import type { Asset, Entry } from 'contentful'
import type { Text } from '@contentful/rich-text-types'

const getContentTypeSysId = (obj: any): string => {
  return obj.sys.contentType && obj.sys.contentType.sys.id
}

export const isEntryTypeButton = (obj: any): obj is Entry<TypeButtonSkeleton, undefined, string> => {
  return getContentTypeSysId(obj) === 'button'
}

export const isEntryTypeTag = (obj: any): obj is Entry<TypeTagSkeleton, undefined, string> => {
  return getContentTypeSysId(obj) === 'tag'
}

export const isEntryTypeAuthor = (obj: any): obj is Entry<TypeAuthorSkeleton, undefined, string> => {
  return getContentTypeSysId(obj) === 'author'
}

export const isEntryTypePost = (obj: any): obj is Entry<TypePostSkeleton, undefined, string> => {
  return getContentTypeSysId(obj) === 'post'
}

export const isEntryTypeExternalURL = (obj: any): obj is Entry<TypeExternalUrlSkeleton, undefined, string> => {
  return getContentTypeSysId(obj) === 'externalUrl'
}

export const isEntryTypeSimpleBaseBlock = (obj: any): obj is Entry<TypeSimpleBaseBlockSkeleton, undefined, string> => {
  return getContentTypeSysId(obj) === 'simpleBaseBlock'
}

export const isEntryTypeBaseBlock = (obj: any): obj is Entry<TypeBaseBlockSkeleton, undefined, string> => {
  return getContentTypeSysId(obj) === 'baseBlock'
}

export const isEntryTypeBlogHome = (obj: any): obj is Entry<TypeBlogHomeSkeleton, undefined, string> => {
  return getContentTypeSysId(obj) === 'blogHome'
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
