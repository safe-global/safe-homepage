import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'
import type { TypeAuthorSkeleton } from './TypeAuthor'
import type { TypeMetaTagsSkeleton } from './TypeMetaTags'
import type { TypeTagSkeleton } from './TypeTag'

export interface TypePostFields {
  metaTags: EntryFieldTypes.EntryLink<TypeMetaTagsSkeleton>
  title: EntryFieldTypes.Symbol
  slug: EntryFieldTypes.Symbol
  authors: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeAuthorSkeleton>>
  excerpt: EntryFieldTypes.Text
  coverImage: EntryFieldTypes.AssetLink
  content: EntryFieldTypes.RichText
  date: EntryFieldTypes.Date
  category: EntryFieldTypes.Symbol<'Announcements' | 'Build' | 'Community' | 'Ecosystem' | 'Insights'>
  tags: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTagSkeleton>>
  relatedPosts?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePostSkeleton>>
}

export type TypePostSkeleton = EntrySkeletonType<TypePostFields, 'post'>
export type TypePost<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypePostSkeleton,
  Modifiers,
  Locales
>
