import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'
import type { TypeCardGridItemSkeleton } from './TypeCardGridItem'

export interface TypeTitleSpaceBetweenGridFields {
  title: EntryFieldTypes.Symbol
  items: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCardGridItemSkeleton>>
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
