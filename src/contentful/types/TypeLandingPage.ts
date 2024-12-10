import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'
import type { TypeBaseBlockSkeleton } from './TypeBaseBlock'
import type { TypeMetaTagsSkeleton } from './TypeMetaTags'

export interface TypeLandingPageFields {
  metaTags: EntryFieldTypes.EntryLink<TypeMetaTagsSkeleton>
  slug: EntryFieldTypes.Symbol
  content: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeBaseBlockSkeleton>>
}

export type TypeLandingPageSkeleton = EntrySkeletonType<TypeLandingPageFields, 'landingPage'>
export type TypeLandingPage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeLandingPageSkeleton,
  Modifiers,
  Locales
>
