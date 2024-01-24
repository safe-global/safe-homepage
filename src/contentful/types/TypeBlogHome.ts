import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'
import type { TypeMetaTagsSkeleton } from './TypeMetaTags'
import type { TypePostSkeleton } from './TypePost'

export interface TypeBlogHomeFields {
  metaTags: EntryFieldTypes.EntryLink<TypeMetaTagsSkeleton>
  featured: EntryFieldTypes.EntryLink<TypePostSkeleton>
  mostPopular: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePostSkeleton>>
}

export type TypeBlogHomeSkeleton = EntrySkeletonType<TypeBlogHomeFields, 'blogHome'>
export type TypeBlogHome<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeBlogHomeSkeleton,
  Modifiers,
  Locales
>
