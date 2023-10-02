import Image from 'next/image'
import FrameImage from '@/public/images/Governance/Parallaxes/GovernanceProcess/background.svg'
import LeftLineImage from '@/public/images/Governance/Parallaxes/GovernanceProcess/leftLine.svg'
import RightLineImage from '@/public/images/Governance/Parallaxes/GovernanceProcess/rightLine.svg'
import StepZeroImage from '@/public/images/Governance/Parallaxes/GovernanceProcess/0.png'
import StepOneImage from '@/public/images/Governance/Parallaxes/GovernanceProcess/1.png'
import StepTwoImage from '@/public/images/Governance/Parallaxes/GovernanceProcess/2.png'
import ParallaxWrapper from '@/components/common/ParallaxWrapper'
import css from './styles.module.css'

const ParallaxGovernanceProcessElement = () => {
  return (
    <div className={css.parallaxWrapper}>
      <FrameImage className={css.baseImage} />
      <ParallaxWrapper translateX={0} translateY={0} depth={2} direction={-1}>
        <LeftLineImage className={css.leftLine} />
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={0} depth={2} direction={-1}>
        <RightLineImage className={css.rightLine} />
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={0} depth={2} direction={-1}>
        <Image src={StepZeroImage} alt="Step zero" className={css.stepZero} />
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={0} depth={1} direction={-1}>
        <Image src={StepOneImage} alt="Step one" className={css.stepOne} />
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={0} depth={0} direction={-1}>
        <Image src={StepTwoImage} alt="Step two" className={css.stepTwo} />
      </ParallaxWrapper>
    </div>
  )
}

export default ParallaxGovernanceProcessElement
