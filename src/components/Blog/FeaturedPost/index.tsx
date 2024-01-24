import Tags from '@/components/Blog/Tags'
import { Grid, Link, Typography } from '@mui/material'
import css from './styles.module.css'
import { formatBlogDate } from '@/components/Blog/utils/formatBlogDate'
import { calculateReadingTime } from '@/components/Blog/utils/calculateReadingTime'
import { type BlogPostEntry } from '@/components/Blog/Post'

const FeaturedPost = (props: BlogPostEntry) => {
  const { slug, coverImage, category, date, title, excerpt, tags, content } = props.fields

  return (
    <Grid container columnSpacing="60px" rowGap={3} mt="60px">
      <Grid item md={7}>
        <Link href={`/blog/${slug}`}>
          <img src={image.src} alt={image.alt} className={css.image} />
        </Link>
      </Grid>
      <Grid item md={5} className={css.body}>
        <div className={css.meta}>
          <Typography variant="h4">#{category}</Typography>
          <Typography variant="caption">{calculateReadingTime(content)}min</Typography>
          <Typography variant="caption">{formatBlogDate(date)}</Typography>
        </div>
        <Typography variant="h3" className={css.title}>
          {title}
        </Typography>
        <Typography className={css.excerpt}>{excerpt}</Typography>
        <Tags tags={tags} />
      </Grid>
    </Grid>
  )
}

export default FeaturedPost
