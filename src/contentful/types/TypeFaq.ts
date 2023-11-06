import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeFaqFields {
  title: EntryFieldTypes.Symbol
  list: EntryFieldTypes.Object<{ question: 'string'; answer: 'string' }>
}

export type TypeFaqSkeleton = EntrySkeletonType<TypeFaqFields, 'faq'>
export type TypeFaq<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeFaqSkeleton,
  Modifiers,
  Locales
>
