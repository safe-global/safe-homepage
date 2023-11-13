import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeTextBlockListFields {
  titleSimple?: EntryFieldTypes.Symbol
  description?: EntryFieldTypes.Text
  listItems: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
  title: EntryFieldTypes.RichText
  offset: EntryFieldTypes.Integer<0 | 1>
}

export type TypeTextBlockListSkeleton = EntrySkeletonType<TypeTextBlockListFields, 'textBlockList'>
export type TypeTextBlockList<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeTextBlockListSkeleton,
  Modifiers,
  Locales
>
