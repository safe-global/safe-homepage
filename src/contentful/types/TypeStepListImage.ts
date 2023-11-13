import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeStepListImageFields {
  steps: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
  image?: EntryFieldTypes.AssetLink
  title?: EntryFieldTypes.Symbol
}

export type TypeStepListImageSkeleton = EntrySkeletonType<TypeStepListImageFields, 'stepListImage'>
export type TypeStepListImage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeStepListImageSkeleton,
  Modifiers,
  Locales
>
