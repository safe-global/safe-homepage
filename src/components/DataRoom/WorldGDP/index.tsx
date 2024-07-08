import { Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import LinksWrapper from '@/components/DataRoom/LinksWrapper'
import css from './styles.module.css'
import MotionContainer from './MotionContainer'

const GDP_VALUE = '$100B+'

const WorldGDP = ({ title, text, link }: BaseBlock) => (
  <div className={css.sectionContainer}>
    <div className={css.stickyContainer}>
      <Typography className={css.text}>{text}</Typography>
      <div className={css.contentContainer}>
        <MotionContainer customDelay={0.2}>
          <div>
            <video className={css.video} src="/videos/DataRoom/SafeGlobe.mp4" autoPlay muted loop />
          </div>
        </MotionContainer>
        <MotionContainer customDelay={0.5}>
          <Typography className={css.title}>{title}</Typography>
        </MotionContainer>
        <MotionContainer customDelay={0.7}>
          <Typography variant="h1">
            <b>{GDP_VALUE}</b>
          </Typography>
        </MotionContainer>
      </div>
      <div className={css.linksContainer}>{link && <LinksWrapper {...link} />}</div>
    </div>
  </div>
)

export default WorldGDP
