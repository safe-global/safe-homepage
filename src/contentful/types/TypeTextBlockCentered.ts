import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'
import type { TypeButtonSkeleton } from './TypeButton'

export interface TypeTextBlockCenteredFields {
  logo: EntryFieldTypes.AssetLink
  cta?: EntryFieldTypes.Symbol
  title: EntryFieldTypes.Symbol
  description?: EntryFieldTypes.Text
  button?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>
}

export type TypeTextBlockCenteredSkeleton = EntrySkeletonType<TypeTextBlockCenteredFields, 'textBlockCentered'>
export type TypeTextBlockCentered<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeTextBlockCenteredSkeleton,
  Modifiers,
  Locales
>
