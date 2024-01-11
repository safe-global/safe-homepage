import { Chip } from '@mui/material'
import css from './styles.module.css'

const Tags = ({ tags }: { tags: Array<any> }) => {
  if (!tags || !tags.length) return null

  return (
    <div className={css.wrapper}>
      {tags.map((tag: any) => {
        const { name } = tag.fields

        return <Chip key={name} label={name} className={css.chip} />
      })}
    </div>
  )
}

export default Tags
