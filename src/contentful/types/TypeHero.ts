import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'
import type { TypeButtonSkeleton } from './TypeButton'

export interface TypeHeroFields {
  caption?: EntryFieldTypes.Symbol
  titleSimple?: EntryFieldTypes.Symbol
  description?: EntryFieldTypes.Text
  image: EntryFieldTypes.AssetLink
  button?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>
  title: EntryFieldTypes.RichText
  hasMoreComing?: EntryFieldTypes.Boolean
  trustedBy?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>
  availableOn?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>
}

export type TypeHeroSkeleton = EntrySkeletonType<TypeHeroFields, 'hero'>
export type TypeHero<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeHeroSkeleton,
  Modifiers,
  Locales
>
