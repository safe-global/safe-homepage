import dynamic from 'next/dynamic'
import { useRef } from 'react'
import { Container, Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

const Table = dynamic(() => import('./Table'))

const VerticalSlide = ({ title, items = [] }: BaseBlock) => {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <Container className={`${layoutCss.containerShort} ${css.sectionContainer}`} ref={sectionRef}>
      <div className={css.stickyContainer}>
        <Typography variant="h2" className={css.title}>
          {title}
        </Typography>

        <Table items={items} sectionRef={sectionRef} />
      </div>
    </Container>
  )
}

export default VerticalSlide
