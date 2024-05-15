import ParallaxDaoStatsElement from '@/components/Governance/ParallaxDaoStats/ParallaxDaoStatsElement'
import ParallaxText, { type ParallaxTextProps } from '@/components/common/ParallaxTextOld'

const ParallaxDaoStats = (props: ParallaxTextProps) => {
  return (
    <ParallaxText {...props}>
      <ParallaxDaoStatsElement items={props.items} />
    </ParallaxText>
  )
}

export default ParallaxDaoStats
