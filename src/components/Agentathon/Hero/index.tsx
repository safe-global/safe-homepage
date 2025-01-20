import React from 'react'
import css from './style.module.css'
import type { BaseBlock } from '@/components/Home/types'
import { Typography } from '@mui/material'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'

export default function Hero({ caption, title, text, buttons }: BaseBlock) {
  return (
    <section className={css.sectionContainer}>
      <video autoPlay muted playsInline className={css.video}>
        <source src="/videos/Agentathon/hero.mp4" type="video/mp4" />
      </video>
      <Typography variant="caption" className={css.caption} pb={4}>
        {caption}
      </Typography>
      <Typography variant="h1" className={css.title} pb={5}>
        {title}
      </Typography>
      <Typography variant="body1" className={css.text} pb={4}>
        {text}
      </Typography>
      <ButtonsWrapper buttons={buttons} />
    </section>
  )
}
