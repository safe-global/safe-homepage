import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'
import type { TypeFaqEntrySkeleton } from './TypeFaqEntry'

export interface TypeFaqFields {
  title: EntryFieldTypes.Symbol
  items: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeFaqEntrySkeleton>>
}

export type TypeFaqSkeleton = EntrySkeletonType<TypeFaqFields, 'faq'>
export type TypeFaq<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeFaqSkeleton,
  Modifiers,
  Locales
>
