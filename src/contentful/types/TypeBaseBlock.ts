import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'
import type { TypeExternalUrlSkeleton } from './TypeExternalUrl'

export interface TypeBaseBlockFields {
  caption?: EntryFieldTypes.Symbol
  title: EntryFieldTypes.RichText
  text?: EntryFieldTypes.Symbol
  link?: EntryFieldTypes.EntryLink<TypeExternalUrlSkeleton>
  image?: EntryFieldTypes.AssetLink
  items?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeBaseBlockSkeleton>>
  component: EntryFieldTypes.Symbol
}

export type TypeBaseBlockSkeleton = EntrySkeletonType<TypeBaseBlockFields, 'baseBlock'>
export type TypeBaseBlock<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeBaseBlockSkeleton,
  Modifiers,
  Locales
>
