import { Typography } from '@mui/material'
import dynamic from 'next/dynamic'
import LinksWrapper from '@/components/DataRoom/LinksWrapper'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'

const SlidingVideo = dynamic(() => import('./SlidingVideo'))
const SlidingText = dynamic(() => import('./SlidingText'))

const WorldGDP = ({ title, text, link }: BaseBlock) => {
  return (
    <div className={css.sectionContainer}>
      <div className={css.stickyContainer}>
        <Typography className={css.text}>{text}</Typography>

        <div className={css.contentContainer}>
          <SlidingVideo />

          <SlidingText title={title} />
        </div>

        <div className={css.linksContainer}>{link && <LinksWrapper link={link} />}</div>
      </div>
    </div>
  )
}

export default WorldGDP
