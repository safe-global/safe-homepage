import Image from 'next/image'
import BugBountyImage from '@/public/images/bug-bounty.png'
import TotalAuditsImage from '@/public/images/total-audits.png'
import G0GroupImage from '@/public/images/g0-group.png'
import RuntimeVerificationImage from '@/public/images/runtime-verification.png'
import GreenCheckmarkImage from '@/public/images/green-checkmark.png'
import ParallaxWrapper from '@/components/common/ParallaxWrapper'
import css from './styles.module.css'

const ContractParallaxElement = () => {
  return (
    <div className={css.parallaxWrapper}>
      <ParallaxWrapper translateX={0} translateY={0} depth={1} direction={-1}>
        <Image src={BugBountyImage} alt="1M$ Average reward per bug in bug bounty" className={css.bugBountyCard} />
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={0} depth={0} direction={-1}>
        <Image src={TotalAuditsImage} alt="11+ Total audits" className={css.totalAuditsCard} />
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={200} depth={0} direction={-1}>
        <Image src={G0GroupImage} alt="G0 Group" className={css.g0GroupCard} />
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={50} depth={1} direction={-1}>
        <Image src={RuntimeVerificationImage} alt="Runtime verification" className={css.runtimeVerificationCard} />
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={0} depth={0} direction={-1}>
        <Image src={GreenCheckmarkImage} alt="Just a green checkmark" className={css.greenCheckmarkCard} />
      </ParallaxWrapper>
    </div>
  )
}

export default ContractParallaxElement
