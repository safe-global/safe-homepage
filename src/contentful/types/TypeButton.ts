import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeButtonFields {
  btnCopy: EntryFieldTypes.Symbol
  btnHref: EntryFieldTypes.Symbol
}

export type TypeButtonSkeleton = EntrySkeletonType<TypeButtonFields, 'button'>
export type TypeButton<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeButtonSkeleton,
  Modifiers,
  Locales
>
