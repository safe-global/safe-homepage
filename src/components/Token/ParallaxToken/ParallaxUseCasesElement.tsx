import FrameImage from '@/public/images/Governance/Parallaxes/GovernanceProcess/background.svg'
import ParallaxWrapper from '@/components/common/ParallaxWrapper'
import css from './styles.module.css'

const TrailingShadow = () => (
  <>
    <div className={`${css.shadow} ${css.first}`} />
    <div className={`${css.shadow} ${css.second}`} />
  </>
)

const ParallaxGovernanceProcessElement = () => {
  return (
    <div className={css.parallaxWrapper}>
      <FrameImage className={css.baseImage} />
      <ParallaxWrapper translateX={0} translateY={0} depth={2} direction={-1}>
        <div className={`${css.movingBox} ${css.stepZero}`}>
          Payments
          <TrailingShadow />
        </div>
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={0} depth={1} direction={-1}>
        <div className={`${css.movingBox} ${css.stepOne}`}>
          DAOs
          <TrailingShadow />
        </div>
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={0} depth={0} direction={-1}>
        <div className={`${css.movingBox} ${css.stepTwo}`}>
          Restaking
          <TrailingShadow />
        </div>
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={0} depth={2} direction={-1}>
        <div className={`${css.movingBox} ${css.stepFour}`}>
          AI
          <TrailingShadow />
        </div>
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={0} depth={1} direction={-1}>
        <div className={`${css.movingBox} ${css.stepFive}`}>
          Social & ID
          <TrailingShadow />
        </div>
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={0} depth={0} direction={-1}>
        <div className={`${css.movingBox} ${css.stepSix}`}>
          Institution
          <TrailingShadow />
        </div>
      </ParallaxWrapper>
    </div>
  )
}

export default ParallaxGovernanceProcessElement
