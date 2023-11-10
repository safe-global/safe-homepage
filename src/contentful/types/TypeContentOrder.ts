import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeContentOrderFields {
  componentName: EntryFieldTypes.Array<
    EntryFieldTypes.Symbol<
      | 'faq'
      | 'hero'
      | 'metaTags'
      | 'roundCardGrid'
      | 'stepsImage'
      | 'textBlockBanner'
      | 'textBlockCentered'
      | 'textBlockList'
      | 'titleSpaceBetweenGrid'
      | 'tweets'
    >
  >
}

export type TypeContentOrderSkeleton = EntrySkeletonType<TypeContentOrderFields, 'contentOrder'>
export type TypeContentOrder<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeContentOrderSkeleton,
  Modifiers,
  Locales
>
