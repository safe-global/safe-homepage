import { type TagsType } from '@/components/Blog/Tags'
import { isEntryTypeTag } from '@/lib/typeGuards'

export const PRESS_RELEASE_TAG = 'Institutional'

export const containsTag = (tags: TagsType, targetTag: string) => {
  return !!tags?.filter(isEntryTypeTag)?.some((item) => item.fields.name === targetTag)
}
