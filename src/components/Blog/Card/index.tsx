import Image from 'next/image'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import Tags from '@/components/Blog/Tags'
import { isAsset } from '@/lib/typeGuards'
import type { BlogPostEntry } from '@/config/types'
import Meta from '@/components/Blog/Meta'
import { AppRoutes } from '@/config/routes'
import css from './styles.module.css'

const Card = (props: BlogPostEntry) => {
  const { slug, title, coverImage, tags } = props.fields

  return (
    <div className={css.postCard}>
      <Link key={slug} href={`${AppRoutes.blog.index}/${slug}`} className={css.link} />

      {isAsset(coverImage) && coverImage.fields.file?.url ? (
        <Image
          src={coverImage.fields.file.url}
          alt={coverImage.fields.title ?? ''}
          width={coverImage.fields.file.details.image?.width}
          height={coverImage.fields.file.details.image?.height}
          className={css.cardImage}
        />
      ) : undefined}

      <div className={css.cardBody}>
        <Meta post={props} />

        <div className={css.title}>
          <Typography variant="h5">{title}</Typography>
        </div>

        <span style={{ flexGrow: 1 }} />

        <Box component="div" mt={2}>
          <Tags tags={tags} />
        </Box>
      </div>
    </div>
  )
}

export default Card
