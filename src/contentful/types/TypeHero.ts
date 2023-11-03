import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'
import type { TypeButtonSkeleton } from './TypeButton'

export interface TypeHeroFields {
  caption?: EntryFieldTypes.Symbol
  title: EntryFieldTypes.Symbol
  description?: EntryFieldTypes.Text
  image: EntryFieldTypes.AssetLink
  button?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>
}

export type TypeHeroSkeleton = EntrySkeletonType<TypeHeroFields, 'hero'>
export type TypeHero<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeHeroSkeleton,
  Modifiers,
  Locales
>
