import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeTitleSpaceBetweenGridFields {
  title: EntryFieldTypes.Symbol
  stats?: EntryFieldTypes.Object<{ text: 'string'; value: 'string' }>
}

export type TypeTitleSpaceBetweenGridSkeleton = EntrySkeletonType<
  TypeTitleSpaceBetweenGridFields,
  'titleSpaceBetweenGrid'
>
export type TypeTitleSpaceBetweenGrid<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeTitleSpaceBetweenGridSkeleton,
  Modifiers,
  Locales
>
