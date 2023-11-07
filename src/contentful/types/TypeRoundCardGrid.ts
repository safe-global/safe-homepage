import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'
import type { TypeButtonSkeleton } from './TypeButton'

export interface TypeRoundCardGridFields {
  title: EntryFieldTypes.Symbol
  text: EntryFieldTypes.Text
  link?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>
  items?: EntryFieldTypes.Object<{ title: 'string'; text: 'string' }>
  cardImages?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>
}

export type TypeRoundCardGridSkeleton = EntrySkeletonType<TypeRoundCardGridFields, 'roundCardGrid'>
export type TypeRoundCardGrid<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeRoundCardGridSkeleton,
  Modifiers,
  Locales
>
