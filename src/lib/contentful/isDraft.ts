import type { BlogPostEntry } from '@/components/Blog/Post'

export const isDraft = (post: BlogPostEntry) => post.fields.isDraft
