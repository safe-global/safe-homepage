import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeSimpleBaseBlockFields {
  title: EntryFieldTypes.Symbol
  text: EntryFieldTypes.Symbol
}

export type TypeSimpleBaseBlockSkeleton = EntrySkeletonType<TypeSimpleBaseBlockFields, 'simpleBaseBlock'>
export type TypeSimpleBaseBlock<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeSimpleBaseBlockSkeleton,
  Modifiers,
  Locales
>
