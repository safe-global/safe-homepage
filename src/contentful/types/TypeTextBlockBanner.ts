import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeTextBlockBannerFields {
  logo?: EntryFieldTypes.AssetLink
  title: EntryFieldTypes.Symbol
  description?: EntryFieldTypes.Text
  button?: EntryFieldTypes.EntryLink<EntrySkeletonType>
}

export type TypeTextBlockBannerSkeleton = EntrySkeletonType<TypeTextBlockBannerFields, 'textBlockBanner'>
export type TypeTextBlockBanner<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeTextBlockBannerSkeleton,
  Modifiers,
  Locales
>
