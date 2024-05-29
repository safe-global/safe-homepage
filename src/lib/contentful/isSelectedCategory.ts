import type { TypePostSkeleton } from '@/contentful/types'
import type { Entry } from 'contentful'

export const isSelectedCategory = (post: Entry<TypePostSkeleton, undefined, string>, selectedCategory: string) =>
  post.fields.category === selectedCategory
