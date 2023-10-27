import Image from 'next/image'
import FrameImage from '@/public/images/Governance/Parallaxes/DaoStats/background.svg'
import ProposalsImage from '@/public/images/Governance/Parallaxes/DaoStats/proposals.png'
import DelegatesImage from '@/public/images/Governance/Parallaxes/DaoStats/delegates.png'
import DelegatorsImage from '@/public/images/Governance/Parallaxes/DaoStats/delegators.png'
import ParallaxWrapper from '@/components/common/ParallaxWrapper'
import css from './styles.module.css'

const ParallaxDaoStatsElement = () => {
  return (
    <div className={css.parallaxWrapper}>
      <FrameImage className={css.baseImage} />
      <ParallaxWrapper translateX={0} translateY={0} depth={2} direction={-1}>
        <Image src={ProposalsImage} alt="8 proposals" className={css.proposals} />
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={0} depth={1} direction={-1}>
        <Image src={DelegatesImage} alt="2.5K delegates" className={css.delegates} />
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={0} depth={0} direction={-1}>
        <Image src={DelegatorsImage} alt="11.2K delegators" className={css.delegators} />
      </ParallaxWrapper>
    </div>
  )
}

export default ParallaxDaoStatsElement
