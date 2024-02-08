import Image from 'next/image'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import css from './styles.module.css'
import blogCss from '../styles.module.css'
import { calculateReadingTime } from '@/components/Blog/utils/calculateReadingTime'
import Tags from '@/components/Blog/Tags'
import CategoryIcon from '@/public/images/Blog/category-icon.svg'
import { isAsset, isEntryTypeTag } from '@/lib/typeGuards'
import { type BlogPostEntry } from '@/components/Blog/Post'

const Card = (props: BlogPostEntry) => {
  const { slug, title, content, coverImage, tags, category } = props.fields

  const tagsList = tags?.filter(isEntryTypeTag)

  return (
    <div className={css.postCard}>
      <Link key={slug} href={`/blog/${slug}`} className={css.link} />

      {isAsset(coverImage) && coverImage.fields.file?.url ? (
        <Image
          src={coverImage.fields.file.url}
          alt={(coverImage.fields.title = '')}
          width={coverImage.fields.file.details.image?.width}
          height={coverImage.fields.file.details.image?.height}
          className={css.cardImage}
        />
      ) : undefined}

      <div className={css.cardBody}>
        <div className={css.meta}>
          <Typography className={blogCss.category}>
            <CategoryIcon />
            {category}
          </Typography>
          <Typography variant="caption">{calculateReadingTime(content)}min</Typography>
        </div>

        <div className={css.title}>
          <Typography variant="h4">{title}</Typography>
        </div>

        <span style={{ flexGrow: 1 }} />

        <Box mt={2}>
          <Tags tags={tagsList} />
        </Box>
      </div>
    </div>
  )
}

export default Card
