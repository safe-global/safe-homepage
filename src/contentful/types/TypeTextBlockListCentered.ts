import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeTextBlockListCenteredFields {
  title: EntryFieldTypes.Symbol
  description?: EntryFieldTypes.Text
  listItems: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
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
