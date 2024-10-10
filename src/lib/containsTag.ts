import { isEntryTypeTag } from '@/lib/typeGuards'
import type { TagsType } from '@/components/Blog/Tags'

export const PRESS_RELEASE_TAG = 'Press'

export const containsTag = (tags: TagsType, targetTag: string) => {
  return !!tags?.filter(isEntryTypeTag)?.some((item) => item.fields.name === targetTag)
}
