import Image from 'next/image'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import css from './styles.module.css'
import { calculateReadingTimeInMin } from '@/components/Blog/utils/calculateReadingTime'
import Tags from '@/components/Blog/Tags'
import CategoryIcon from '@/public/images/Blog/category-icon.svg'
import { isAsset } from '@/lib/typeGuards'
import type { BlogPostEntry } from '@/config/types'
import { AppRoutes } from '@/config/routes'

const Card = (props: BlogPostEntry) => {
  const { slug, title, content, coverImage, tags, category } = props.fields

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
        <div className={css.meta}>
          <CategoryIcon />
          <Typography variant="caption" color="text.primary">
            {category}
          </Typography>
          <Typography variant="caption">{calculateReadingTimeInMin(content)}</Typography>
        </div>

        <div className={css.title}>
          <Typography variant="h5">{title}</Typography>
        </div>

        <span style={{ flexGrow: 1 }} />

        <Box mt={2}>
          <Tags tags={tags} />
        </Box>
      </div>
    </div>
  )
}

export default Card
