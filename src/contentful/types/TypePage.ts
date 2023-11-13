import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypePageFields {
  content: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>
  slug: EntryFieldTypes.Symbol
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, 'page'>
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypePageSkeleton,
  Modifiers,
  Locales
>
