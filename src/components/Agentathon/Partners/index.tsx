import React from 'react'
import css from './style.module.css'
import { Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'

export default function Partners({ caption, items }: BaseBlock) {
  return (
    <section className={css.sectionContainer}>
      <Typography variant="caption" className={css.caption} pb={5}>
        {caption}
      </Typography>
      <div className={css.itemsWrapper}>
        {items &&
          items.map((item, index) => (
            <div className={css.itemWrapper} key={index}>
              <img src={item.image?.src} className={css.itemImage} alt={item.image?.alt} />
              <Typography variant="body1" className={css.itemTitle}>
                {item.title}
              </Typography>
            </div>
          ))}
      </div>
    </section>
  )
}
