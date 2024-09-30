import { Typography } from '@mui/material'
import type { BlogPostEntry } from '@/components/Blog/Post'
import css from './styles.module.css'
import { formatBlogDate } from '@/components/Blog/utils/formatBlogDate'
import { calculateReadingTimeInMin } from '@/components/Blog/utils/calculateReadingTime'

const Meta = ({ post }: { post: BlogPostEntry }) => {
  const { category, date, content } = post.fields

  return (
    <div className={css.meta}>
      <Typography variant="caption" className={css.category}>
        {category}
      </Typography>

      <Typography variant="caption">{formatBlogDate(date)}</Typography>

      <Typography variant="caption">{calculateReadingTimeInMin(content)} min read</Typography>
    </div>
  )
}

export default Meta
