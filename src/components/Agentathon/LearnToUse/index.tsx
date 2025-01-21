import type { BaseBlock } from '@/components/Home/types'
import css from './style.module.css'
import { Typography } from '@mui/material'
import Card from '../Card'

export default function LearnToUse({ title, caption, image, items }: BaseBlock) {
  return (
    <section className={css.sectionContainer}>
      {image && <img src={image.src} alt={image.alt} className={css.image} />}
      <Typography variant="caption" className={css.caption} pb={4}>
        {caption}
      </Typography>
      <Typography variant="h2" className={css.title} pb={5}>
        {title}
      </Typography>
      <div className={css.cardsContainer}>
        {items &&
          items.map((item, index) => (
            <Card key={index} title={item.title as string} image={item.image as { src: string; alt: string }} />
          ))}
      </div>
    </section>
  )
}
