import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeTextBlockListCenteredFields {
  titleSimple?: EntryFieldTypes.Symbol
  description?: EntryFieldTypes.Text
  listItems: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
  title: EntryFieldTypes.RichText
}

export type TypeTextBlockListCenteredSkeleton = EntrySkeletonType<
  TypeTextBlockListCenteredFields,
  'textBlockListCentered'
>
export type TypeTextBlockListCentered<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeTextBlockListCenteredSkeleton,
  Modifiers,
  Locales
>
