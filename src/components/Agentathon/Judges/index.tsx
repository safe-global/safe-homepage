import type { BaseBlock } from '@/components/Home/types'
import React from 'react'
import { Typography } from '@mui/material'
import css from './style.module.css'

export default function Judges({ caption, title, items }: BaseBlock) {
  return (
    <section className={css.sectionContainer}>
      <Typography variant="caption" className={css.caption} pb={5}>
        {caption}
      </Typography>
      <Typography variant="h3" className={css.title}>
        {title}
      </Typography>
      <div className={css.itemsWrapper}>
        {items &&
          items.map((item, index) => (
            <div className={css.itemWrapper} key={index}>
              <div className={css.foreground}>
                <img src="/images/agentathon/judge-card-shadow.png" className={css.foregroundImage} alt="foreground" />
              </div>
              <img src={item.image?.src} className={css.itemImage} alt={item.image?.alt} />
              <div className={css.itemInfo}>
                <Typography variant="body1" className={css.itemTitle}>
                  {item.title}
                </Typography>
                <Typography variant="body2" className={css.itemDescription}>
                  {item.text}
                </Typography>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}
