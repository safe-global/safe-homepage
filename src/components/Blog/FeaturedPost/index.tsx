import Tags from '@/components/Blog/Tags'
import { Box, Grid, Link, Typography } from '@mui/material'
import css from './styles.module.css'
import { formatBlogDate } from '@/components/Blog/utils/formatBlogDate'
import { calculateReadingTime } from '@/components/Blog/utils/calculateReadingTime'
import { type BlogPostEntry } from '@/components/Blog/Post'
import { isAsset, isEntryTypeTag } from '@/lib/typeGuards'

const FeaturedPost = (props: BlogPostEntry) => {
  const { slug, coverImage, category, date, title, excerpt, tags, content } = props.fields

  return (
    <Grid container columnSpacing="60px" rowGap={3} mt="60px">
      <Grid item md={7}>
        {isAsset(coverImage) && coverImage.fields.file?.url ? (
          <Link href={`/blog/${slug}`}>
            <img src={coverImage.fields.file.url} alt={coverImage.fields.title} className={css.image} />
          </Link>
        ) : undefined}
      </Grid>

      <Grid item md={5} className={css.body}>
        <div className={css.meta}>
          <div className={css.metaStart}>
            <Typography variant="h4">#{category}</Typography>
            <Typography variant="caption">{calculateReadingTime(content)}min</Typography>
          </div>
          <Typography variant="caption">{formatBlogDate(date)}</Typography>
        </div>
        <Typography variant="h3" className={css.title}>
          <Link href={`/blog/${slug}`}>{title}</Link>
        </Typography>
        <Typography className={css.excerpt}>{excerpt}</Typography>

        <span style={{ flexGrow: 1 }} />
        <Box mt={2}>
          <Tags tags={tags.filter(isEntryTypeTag)} />
        </Box>
      </Grid>
    </Grid>
  )
}

export default FeaturedPost
