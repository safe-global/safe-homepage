import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeStepsImageFields {
  steps: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
  image?: EntryFieldTypes.AssetLink
  title?: EntryFieldTypes.Symbol
}

export type TypeStepsImageSkeleton = EntrySkeletonType<TypeStepsImageFields, 'stepsImage'>
export type TypeStepsImage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeStepsImageSkeleton,
  Modifiers,
  Locales
>
