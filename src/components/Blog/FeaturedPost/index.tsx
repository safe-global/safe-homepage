import Image from 'next/image'
import Tags from '@/components/Blog/Tags'
import { Box, Grid, Link, Typography } from '@mui/material'
import css from './styles.module.css'
import type { BlogPostEntry } from '@/config/types'
import { isAsset } from '@/lib/typeGuards'
import { AppRoutes } from '@/config/routes'
import { containsTag, PRESS_RELEASE_TAG } from '@/lib/containsTag'
import Meta from '@/components/Blog/Meta'

const FeaturedPost = ({ post }: { post: BlogPostEntry }) => {
  const { slug, coverImage, title, excerpt, tags } = post.fields

  const isPressRelease = containsTag(tags, PRESS_RELEASE_TAG)

  return (
    <Box component="div" mt={10}>
      {isPressRelease ? (
        <Typography variant="caption" className={css.tagline}>
          Latest Press Release
        </Typography>
      ) : null}
      <Grid container columnSpacing="60px" rowGap={3}>
        <Grid item lg={7}>
          {isAsset(coverImage) && coverImage.fields.file?.url ? (
            <Link href={`/blog/${slug}`}>
              <Image
                src={coverImage.fields.file.url}
                alt={coverImage.fields.title ?? ''}
                width={coverImage.fields.file.details.image?.width}
                height={coverImage.fields.file.details.image?.height}
                className={css.image}
              />
            </Link>
          ) : undefined}
        </Grid>

        <Grid item lg={5} className={css.body}>
          <Meta post={post} />

          <Typography variant="h3" className={css.title}>
            <Link href={`${AppRoutes.blog.index}/${slug}`}>{title}</Link>
          </Typography>

          <Typography className={css.excerpt}>{excerpt}</Typography>

          <Box component="div" mt="auto">
            <Tags tags={tags} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default FeaturedPost
