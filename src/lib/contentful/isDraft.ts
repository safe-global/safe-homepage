import type { BlogPostEntry } from '@/config/types'

export const isDraft = (post: BlogPostEntry) => post.fields.isDraft
