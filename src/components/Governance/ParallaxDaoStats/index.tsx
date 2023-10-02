import ParallaxDaoStatsElement from '@/components/Governance/ParallaxDaoStats/ParallaxDaoStatsElement'
import ParallaxText, { type ParallaxTextProps } from '@/components/common/ParallaxText'

const ParallaxDaoStats = (props: ParallaxTextProps) => {
  return (
    <ParallaxText {...props}>
      <ParallaxDaoStatsElement />
    </ParallaxText>
  )
}

export default ParallaxDaoStats
