import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeCardGridItemFields {
  title: EntryFieldTypes.Symbol
  text: EntryFieldTypes.Text
  image?: EntryFieldTypes.AssetLink
}

export type TypeCardGridItemSkeleton = EntrySkeletonType<TypeCardGridItemFields, 'cardGridItem'>
export type TypeCardGridItem<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeCardGridItemSkeleton,
  Modifiers,
  Locales
>
