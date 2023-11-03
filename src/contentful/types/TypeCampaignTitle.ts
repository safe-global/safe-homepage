import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeCampaignTitleFields {
  title?: EntryFieldTypes.Symbol
  subtitle: EntryFieldTypes.Symbol
  description?: EntryFieldTypes.RichText
  slug?: EntryFieldTypes.Symbol
  buttonText?: EntryFieldTypes.Symbol
  buttonUrl?: EntryFieldTypes.RichText
}

export type TypeCampaignTitleSkeleton = EntrySkeletonType<TypeCampaignTitleFields, 'campaignTitle'>
export type TypeCampaignTitle<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeCampaignTitleSkeleton,
  Modifiers,
  Locales
>
