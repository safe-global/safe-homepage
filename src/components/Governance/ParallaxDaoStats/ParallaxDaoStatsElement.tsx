import FrameImage from '@/public/images/Governance/Parallaxes/DaoStats/background.svg'
import ParallaxWrapper from '@/components/common/ParallaxWrapper'
import css from './styles.module.css'
import { Typography } from '@mui/material'
import { useSafeSnapshot } from '@/hooks/useSafeSnapshot'
import { useVotingDelegation } from '@/hooks/useVotingDelegation'
import type { BaseBlock } from '@/components/Home/types'

const ParallaxDaoStatsElement = ({ items }: Partial<BaseBlock>) => {
  const { data: proposals } = useSafeSnapshot()
  const [totalDelegates, totalDelegators] = useVotingDelegation()

  return (
    <div className={css.parallaxWrapper}>
      <FrameImage className={css.baseImage} />
      <ParallaxWrapper translateX={0} translateY={0} depth={2} direction={-1}>
        <div className={`${css.card} ${css.proposals}`}>
          <Typography className={css.value}>{proposals?.length || items?.[0].title}</Typography>
          <Typography variant="caption" className={css.caption}>
            {items?.[0].text}
          </Typography>
        </div>
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={0} depth={1} direction={-1}>
        <div className={`${css.card} ${css.delegates}`}>
          <Typography className={css.value}>{totalDelegates || items?.[1].title}</Typography>
          <Typography variant="caption" className={css.caption}>
            {items?.[1].text}
          </Typography>
        </div>
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={0} depth={0} direction={-1}>
        <div className={`${css.card} ${css.delegators}`}>
          <Typography className={css.value}>{totalDelegators || items?.[2].title}</Typography>
          <Typography variant="caption" className={css.caption}>
            {items?.[2].text}
          </Typography>
        </div>
      </ParallaxWrapper>
    </div>
  )
}

export default ParallaxDaoStatsElement
