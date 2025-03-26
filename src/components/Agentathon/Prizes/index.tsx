import React from 'react'
import type { BaseBlock } from '@/components/Home/types'
import css from './style.module.css'
import { Typography } from '@mui/material'
import ButtonsWrapper from '../ButtonsWrapper'

export default function Prizes({ image, title, buttons, items }: BaseBlock) {
  return (
    <section className={css.sectionContainer}>
      {items?.map(
        (item, index) =>
          item.image?.src && <img src={item.image.src} className={css.dots} alt={item.image.alt} key={index} />,
      )}
      {image && <img src={image.src} alt={image.alt} className={css.prizeAmount} />}
      <Typography variant="h2" className={css.title}>
        {title}
      </Typography>
      <div className={css.buttonsWrapper}>
        <ButtonsWrapper buttons={buttons} />
      </div>
    </section>
  )
}
