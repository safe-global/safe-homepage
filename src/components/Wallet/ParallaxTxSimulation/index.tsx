import ParallaxTxSimulationElement from '@/components/Wallet/ParallaxTxSimulation/ParallaxTxSimulationElement'
import ParallaxText, { type ParallaxTextProps } from '@/components/common/ParallaxText'

const ParallaxTxSimulation = (props: ParallaxTextProps) => {
  return (
    <ParallaxText {...props}>
      <ParallaxTxSimulationElement />
    </ParallaxText>
  )
}

export default ParallaxTxSimulation
