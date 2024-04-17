import type { TypeBaseBlockSkeleton, TypeButtonSkeleton, TypeLandingPageSkeleton } from '@/contentful/types'
import type { Entry } from 'contentful'

export type BaseBlockEntry = Entry<TypeBaseBlockSkeleton, undefined, string>
export type ButtonEntry = Entry<TypeButtonSkeleton, undefined, string>
export type LandingPageEntry = Entry<TypeLandingPageSkeleton, undefined, string>
