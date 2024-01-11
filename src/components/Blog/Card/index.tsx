import Link from 'next/link'
import { Typography } from '@mui/material'
import css from '../styles.module.css'
import { calculateReadingTime } from '@/components/Blog/utils/calculateReadingTime'
import Tags from '@/components/Blog/Tags'

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
        <div className={css.metaStart}>
          <Typography>#{category}</Typography>
          <Typography variant="caption">{calculateReadingTime(content)}min</Typography>
        </div>

        <div className={css.cardTitle}>
          <Typography variant="h4">{title}</Typography>
        </div>

        <span style={{ flexGrow: 1 }} />

        <Tags tags={tags} />
      </div>
    </div>
  )
}

export default Card
