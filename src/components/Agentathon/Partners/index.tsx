import React from 'react'
import css from './style.module.css'
import { Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'

export default function Partners({ caption, items }: BaseBlock) {
  return (
    <section className={css.sectionContainer}>
      <Typography className={css.caption}>{caption}</Typography>
      <div className={css.itemsWrapper}>
        {items?.map((item, index) => (
          <a
            href={item.buttons?.[0]?.href}
            target="_blank"
            rel="noreferrer noopener"
            className={css.itemWrapper}
            key={index}
          >
            {item.image?.src && <img src={item.image.src} className={css.itemImage} alt={item.image.alt} />}
            <Typography variant="body" className={css.itemTitle}>
              {item.title}
            </Typography>
          </a>
        ))}
      </div>
    </section>
  )
}
