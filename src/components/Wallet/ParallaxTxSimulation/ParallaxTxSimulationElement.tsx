import FrameImage from '@/public/images/Wallet/Parallaxes/TxSimulation/background.svg'
import SimulationImage from '@/public/images/Wallet/Parallaxes/TxSimulation/simulation.svg'
import ParallaxWrapper from '@/components/common/ParallaxWrapper'
import css from './styles.module.css'

const ParallaxTxSimulationElement = () => {
  return (
    <div className={css.parallaxWrapper}>
      <FrameImage className={css.baseImage} />
      <ParallaxWrapper translateX={0} translateY={0} depth={0} direction={-1}>
        <SimulationImage className={css.simulation} />
      </ParallaxWrapper>
    </div>
  )
}

export default ParallaxTxSimulationElement
