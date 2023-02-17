import Image from 'next/image'
import FrameImage from '@/public/images/Wallet/Parallaxes/TxSimulation/background.svg'
import SimulationImage from '@/public/images/Wallet/Parallaxes/TxSimulation/simulation.png'
import ParallaxWrapper from '@/components/common/ParallaxWrapper'
import css from './styles.module.css'

const ParallaxTxSimulationElement = () => {
  return (
    <div className={css.parallaxWrapper}>
      <FrameImage className={css.baseImage} />
      <ParallaxWrapper translateX={0} translateY={0} depth={0} direction={-1}>
        <Image src={SimulationImage} alt="Transaction successfuly simulated on Tenderly" className={css.simulation} />
      </ParallaxWrapper>
    </div>
  )
}

export default ParallaxTxSimulationElement
