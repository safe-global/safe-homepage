import type { BaseBlock } from '@/components/Home/types'
import React from 'react'
import { Typography } from '@mui/material'
import css from './style.module.css'
import ArrowIcon from '@/public/images/arrow-out-square-corner.svg'

export default function Judges({ caption, title, items }: BaseBlock) {
  return (
    <section className={css.sectionContainer}>
      <Typography variant="caption" className={css.caption}>
        {caption}
      </Typography>
      <Typography variant="h3" className={css.title}>
        {title}
      </Typography>
      <div className={css.itemsWrapper}>
        {items?.map((item, index) => (
          <a
            href={item.buttons?.[0]?.href}
            target="_blank"
            rel="noreferrer noopener"
            className={css.itemWrapper}
            key={index}
          >
            <ArrowIcon className={css.arrowIcon} />
            <div className={css.foreground}>
              <img src="/images/Agentathon/judge-card-shadow.png" className={css.foregroundImage} alt="foreground" />
            </div>
            {item.image?.src && <img src={item.image.src} className={css.itemImage} alt={item.image.alt} />}
            <div className={css.itemInfo}>
              <Typography className={css.itemTitle}>{item.title}</Typography>
              <Typography className={css.itemDescription}>{item.text}</Typography>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
