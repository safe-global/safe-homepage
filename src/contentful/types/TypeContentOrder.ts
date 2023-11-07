import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeContentOrderFields {
  componentName: EntryFieldTypes.Array<
    EntryFieldTypes.Symbol<
      | 'faq'
      | 'hero'
      | 'logoTextBlockBanner'
      | 'logoTextBlockCentered'
      | 'roundCardGrid'
      | 'stepListImage'
      | 'textBlockListCentered'
      | 'titleSpaceBetweenGrid'
      | 'titleTweets'
    >
  >
}

export type TypeContentOrderSkeleton = EntrySkeletonType<TypeContentOrderFields, 'contentOrder'>
export type TypeContentOrder<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeContentOrderSkeleton,
  Modifiers,
  Locales
>
