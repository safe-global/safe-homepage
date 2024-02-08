import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeAuthorFields {
  name: EntryFieldTypes.Symbol
  picture: EntryFieldTypes.AssetLink
  bio?: EntryFieldTypes.Text
}

export type TypeAuthorSkeleton = EntrySkeletonType<TypeAuthorFields, 'author'>
export type TypeAuthor<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeAuthorSkeleton,
  Modifiers,
  Locales
>
