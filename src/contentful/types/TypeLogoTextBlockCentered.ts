import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'
import type { TypeButtonSkeleton } from './TypeButton'

export interface TypeLogoTextBlockCenteredFields {
  logo: EntryFieldTypes.AssetLink
  cta?: EntryFieldTypes.Symbol
  title: EntryFieldTypes.Symbol
  description?: EntryFieldTypes.Text
  button?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>
}

export type TypeLogoTextBlockCenteredSkeleton = EntrySkeletonType<
  TypeLogoTextBlockCenteredFields,
  'logoTextBlockCentered'
>
export type TypeLogoTextBlockCentered<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeLogoTextBlockCenteredSkeleton,
  Modifiers,
  Locales
>
