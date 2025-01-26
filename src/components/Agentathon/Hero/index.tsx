import React from 'react'
import css from './style.module.css'
import type { BaseBlock } from '@/components/Home/types'
import { Typography } from '@mui/material'
import ButtonsWrapper from '../ButtonsWrapper'

export default function Hero({ caption, title, text, buttons }: BaseBlock) {
  return (
    <section className={css.sectionContainer}>
      <div className={css.blurredGradient}></div>
      <div className={css.videoWrapper}>
        <video autoPlay muted playsInline loop className={css.video}>
          <source src="/videos/Agentathon/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <Typography className={css.caption}>{caption}</Typography>
      <Typography variant="h1" className={css.title}>
        {title}
      </Typography>
      <Typography variant="body1" className={css.text}>
        {text}
      </Typography>
      <ButtonsWrapper buttons={buttons} mobileDirection="row" />
    </section>
  )
}
