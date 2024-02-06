import { Chip } from '@mui/material'
import css from '../styles.module.css'
import { type Entry } from 'contentful'
import { type TypeTagSkeleton } from '@/contentful/types'

const Tags = ({ tags }: { tags: Entry<TypeTagSkeleton, undefined, string>[] }) => {
  if (!tags.length) return null

  return (
    <div className={css.tagsWrapper}>
      {tags.map((tag) => {
        const { name } = tag.fields

        return <Chip key={name} label={name} className={css.chip} />
      })}
    </div>
  )
}

export default Tags
