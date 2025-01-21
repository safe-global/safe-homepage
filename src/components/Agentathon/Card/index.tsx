import { Typography } from '@mui/material'
import css from './style.module.css'
export default function Card({ title, image }: { title: string; image: { src: string; alt: string } }) {
  return (
    <div className={css.cardContainer}>
      {image && <img src={image.src} alt={image.alt} className={css.image} />}
      <Typography variant="h5" className={css.title}>
        {title}
      </Typography>
    </div>
  )
}
