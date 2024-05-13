import ParallaxGovernanceProcessElement from '@/components/Governance/ParallaxGovernanceProcess/ParallaxGovernanceProcessElement'
import ParallaxText, { type ParallaxTextProps } from '@/components/common/ParallaxTextOld'

const ParallaxGovernanceProcess = (props: ParallaxTextProps) => {
  return (
    <ParallaxText {...props}>
      <ParallaxGovernanceProcessElement />
    </ParallaxText>
  )
}

export default ParallaxGovernanceProcess
