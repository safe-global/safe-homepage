import React from 'react'
import type { BaseBlock } from '@/components/Home/types'
import dynamic from 'next/dynamic'
import css from './style.module.css'
import { Typography } from '@mui/material'

const LoopingImages = dynamic(() => import('../LoopingImages'), {
  ssr: false,
})

const Possibilities = ({ items, title }: BaseBlock) => {
  return (
    <section className={css.sectionContainer}>
      {items && <LoopingImages items={items} />}
      <Typography variant="h3" className={css.title}>
        {title}
      </Typography>
    </section>
  )
}

export default Possibilities
