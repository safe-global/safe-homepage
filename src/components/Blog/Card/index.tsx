import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import css from './styles.module.css'
import blogCss from '../styles.module.css'
import { calculateReadingTime } from '@/components/Blog/utils/calculateReadingTime'
import Tags from '@/components/Blog/Tags'
import CategoryIcon from '@/public/images/Blog/category-icon.svg'

const Card = (props: any) => {
  const { slug, title, content, coverImage, tags, category } = props.fields

  const image = {
    src: coverImage.fields.file.url,
    alt: coverImage.fields.title,
  }

  return (
    <div className={css.postCard}>
      <Link key={slug} href={`/blog/${slug}`} className={css.link} />

      <img src={image.src} alt={image.alt} className={css.cardImage} />

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
          <Tags tags={tags} />
        </Box>
      </div>
    </div>
  )
}

export default Card
