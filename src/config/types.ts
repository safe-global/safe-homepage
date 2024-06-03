import type {
  TypeBaseBlockSkeleton,
  TypeButtonSkeleton,
  TypeLandingPageSkeleton,
  TypePostSkeleton,
} from '@/contentful/types'
import type { Entry, EntryCollection } from 'contentful'

export type BaseBlockEntry = Entry<TypeBaseBlockSkeleton, undefined, string>
export type ButtonEntry = Entry<TypeButtonSkeleton, undefined, string>
export type LandingPageEntry = Entry<TypeLandingPageSkeleton, undefined, string>
export type PostEntryCollection = EntryCollection<TypePostSkeleton, undefined, string>
