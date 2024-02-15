import { Chip } from '@mui/material'
import css from '../styles.module.css'
import type { UnresolvedLink, Entry } from 'contentful'
import { type TypeTagSkeleton } from '@/contentful/types'
import { isEntryTypeTag } from '@/lib/typeGuards'

type TagsType = (UnresolvedLink<'Entry'> | Entry<TypeTagSkeleton, undefined, string>)[] | undefined

const Tags = ({ tags }: { tags: TagsType }) => {
  if (!tags || !tags.length) return null

  return (
    <div className={css.tagsWrapper}>
      {tags.filter(isEntryTypeTag).map((tag) => {
        const { name } = tag.fields

        return <Chip key={name} label={name} className={css.chip} />
      })}
    </div>
  )
}

export default Tags
