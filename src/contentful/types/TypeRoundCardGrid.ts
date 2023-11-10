import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'
import type { TypeButtonSkeleton } from './TypeButton'
import type { TypeCardGridItemSkeleton } from './TypeCardGridItem'

export interface TypeRoundCardGridFields {
  title: EntryFieldTypes.Symbol
  text: EntryFieldTypes.Text
  link?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>
  gridItems: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCardGridItemSkeleton>>
}

export type TypeRoundCardGridSkeleton = EntrySkeletonType<TypeRoundCardGridFields, 'roundCardGrid'>
export type TypeRoundCardGrid<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeRoundCardGridSkeleton,
  Modifiers,
  Locales
>
