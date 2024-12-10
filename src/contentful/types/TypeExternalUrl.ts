import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeExternalUrlFields {
  url: EntryFieldTypes.Symbol
  title?: EntryFieldTypes.Symbol
  image?: EntryFieldTypes.AssetLink
}

export type TypeExternalUrlSkeleton = EntrySkeletonType<TypeExternalUrlFields, 'externalUrl'>
export type TypeExternalUrl<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeExternalUrlSkeleton,
  Modifiers,
  Locales
>
