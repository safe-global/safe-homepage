import React from 'react'
import type { BaseBlock } from '@/components/Home/types'
import css from './style.module.css'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'
import { Typography } from '@mui/material'

export default function Prizes({ image, title, buttons, items }: BaseBlock) {
  return (
    <section className={css.sectionContainer}>
      {items &&
        items.map((item, index) => (
          <img src={item.image?.src} className={css.item} alt={item.image?.alt} key={index} />
        ))}
      {image && <img src={image.src} alt={image.alt} className={css.image} />}
      <Typography variant="h2" className={css.title}>
        {title}
      </Typography>
      <div className={css.buttonsWrapper}>
        <ButtonsWrapper buttons={buttons} />
      </div>
    </section>
  )
}
