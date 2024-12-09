import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeMetaTagsFields {
  title: EntryFieldTypes.Symbol
  description: EntryFieldTypes.Text
  image?: EntryFieldTypes.AssetLink
}

export type TypeMetaTagsSkeleton = EntrySkeletonType<TypeMetaTagsFields, 'metaTags'>
export type TypeMetaTags<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeMetaTagsSkeleton,
  Modifiers,
  Locales
>
