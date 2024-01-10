import Link from 'next/link'
import { Typography, Chip } from '@mui/material'
import css from '../styles.module.css'
import { calculateReadingTime } from '@/components/Blog/utils/calculateReadingTime'

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

        {tags?.length > 0 ? (
          <div className={css.tags}>
            {tags.map((tag: any) => {
              const { name } = tag.fields

              return <Chip key={name} label={name} className={css.chip} />
            })}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Card
