import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'
import type { TypeButtonSkeleton } from './TypeButton'

export interface TypeLogoTextBlockFields {
  logo: EntryFieldTypes.AssetLink
  cta?: EntryFieldTypes.Symbol
  title: EntryFieldTypes.Symbol
  description?: EntryFieldTypes.Text
  button?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>
}

export type TypeLogoTextBlockSkeleton = EntrySkeletonType<TypeLogoTextBlockFields, 'logoTextBlock'>
export type TypeLogoTextBlock<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeLogoTextBlockSkeleton,
  Modifiers,
  Locales
>
