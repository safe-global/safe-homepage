import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'
import type { TypeButtonSkeleton } from './TypeButton'
import type { TypeExternalUrlSkeleton } from './TypeExternalUrl'

export interface TypeBaseBlockFields {
  component?: EntryFieldTypes.Symbol
  caption?: EntryFieldTypes.Symbol
  title: EntryFieldTypes.RichText
  text?: EntryFieldTypes.Symbol
  buttons?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeButtonSkeleton>>
  link?: EntryFieldTypes.EntryLink<TypeExternalUrlSkeleton>
  image?: EntryFieldTypes.AssetLink
  items?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeBaseBlockSkeleton>>
}

export type TypeBaseBlockSkeleton = EntrySkeletonType<TypeBaseBlockFields, 'baseBlock'>
export type TypeBaseBlock<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeBaseBlockSkeleton,
  Modifiers,
  Locales
>
