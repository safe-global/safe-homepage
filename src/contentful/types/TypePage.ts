import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'
import type { TypeMetaTagsSkeleton } from './TypeMetaTags'

export interface TypePageFields {
  metaTags: EntryFieldTypes.EntryLink<TypeMetaTagsSkeleton>
  slug: EntryFieldTypes.Symbol
  content: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, 'page'>
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypePageSkeleton,
  Modifiers,
  Locales
>
