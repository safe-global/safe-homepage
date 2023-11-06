import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeLogoTextBlockBannerFields {
  logo?: EntryFieldTypes.AssetLink
  title: EntryFieldTypes.Symbol
  description?: EntryFieldTypes.Text
  button?: EntryFieldTypes.EntryLink<EntrySkeletonType>
}

export type TypeLogoTextBlockBannerSkeleton = EntrySkeletonType<TypeLogoTextBlockBannerFields, 'logoTextBlockBanner'>
export type TypeLogoTextBlockBanner<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeLogoTextBlockBannerSkeleton,
  Modifiers,
  Locales
>
