import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeFaqEntryFields {
  question: EntryFieldTypes.Symbol
  answer: EntryFieldTypes.RichText
  slug?: EntryFieldTypes.Symbol
}

export type TypeFaqEntrySkeleton = EntrySkeletonType<TypeFaqEntryFields, 'faqEntry'>
export type TypeFaqEntry<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeFaqEntrySkeleton,
  Modifiers,
  Locales
>
