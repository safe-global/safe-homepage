import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'
import type { TypeExternalUrlSkeleton } from './TypeExternalUrl'
import type { TypeMetaTagsSkeleton } from './TypeMetaTags'
import type { TypePostSkeleton } from './TypePost'

export interface TypePressRoomFields {
  metaTags: EntryFieldTypes.EntryLink<TypeMetaTagsSkeleton>
  featured: EntryFieldTypes.EntryLink<TypePostSkeleton>
  investors: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>
  news: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeExternalUrlSkeleton>>
  podcasts: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeExternalUrlSkeleton>>
  videos: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeExternalUrlSkeleton>>
}

export type TypePressRoomSkeleton = EntrySkeletonType<TypePressRoomFields, 'pressRoom'>
export type TypePressRoom<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypePressRoomSkeleton,
  Modifiers,
  Locales
>
