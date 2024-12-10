import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeButtonFields {
  text: EntryFieldTypes.Symbol
  href: EntryFieldTypes.Symbol
  variant: EntryFieldTypes.Symbol<'button' | 'link'>
  isDisabled?: EntryFieldTypes.Boolean
}

export type TypeButtonSkeleton = EntrySkeletonType<TypeButtonFields, 'button'>
export type TypeButton<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeButtonSkeleton,
  Modifiers,
  Locales
>
