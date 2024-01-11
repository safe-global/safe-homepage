import Tags from '@/components/Blog/Tags'
import { Grid, Link, Typography } from '@mui/material'
import css from './styles.module.css'
import { formatBlogDate } from '@/components/Blog/utils/formatBlogDate'

const FeaturedPost = (props: any) => {
  const { slug, coverImage, category, date, title, excerpt, tags } = props.fields

  const image = {
    src: coverImage.fields.file.url,
    alt: coverImage.fields.title,
  }

  return (
    <Grid container spacing={3}>
      <Grid item md={6}>
        <Link href={`/blog/${slug}`}>
          <img src={image.src} alt={image.alt} className={css.image} />
        </Link>
      </Grid>
      <Grid item md={6} className={css.body}>
        <div className={css.meta}>
          <Typography variant="h4">#{category}</Typography>
          <Typography variant="caption">{formatBlogDate(date)}</Typography>
        </div>
        <Typography variant="h3" mt={3}>
          {title}
        </Typography>
        <Typography mt={2}>{excerpt}</Typography>
        <Tags tags={tags} />
      </Grid>
    </Grid>
  )
}

export default FeaturedPost
