import FrameImage from '@/public/images/Governance/Parallaxes/DaoStats/background.svg'
import ParallaxWrapper from '@/components/common/ParallaxWrapper'
import css from './styles.module.css'
import { Typography } from '@mui/material'

const ParallaxDaoStatsElement = () => {
  return (
    <div className={css.parallaxWrapper}>
      <FrameImage className={css.baseImage} />
      <ParallaxWrapper translateX={0} translateY={0} depth={2} direction={-1}>
        <div className={`${css.card} ${css.proposals}`}>
          <Typography className={css.value}>8</Typography>
          <Typography variant="caption" className={css.caption}>
            proposals
          </Typography>
        </div>
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={0} depth={1} direction={-1}>
        <div className={`${css.card} ${css.delegates}`}>
          <Typography className={css.value}>2.5K</Typography>
          <Typography variant="caption" className={css.caption}>
            delegates
          </Typography>
        </div>
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={0} depth={0} direction={-1}>
        <div className={`${css.card} ${css.delegators}`}>
          <Typography className={css.value}>11.2K</Typography>
          <Typography variant="caption" className={css.caption}>
            delegators
          </Typography>
        </div>
      </ParallaxWrapper>
    </div>
  )
}

export default ParallaxDaoStatsElement
