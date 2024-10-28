import css from 'src/components/Wallet/TextRadialAnimation/RadialAnimation/styles.module.css'
import OuterLayer from '@/public/images/IdentPlanets/outer.svg'
import MiddleLayer from '@/public/images/IdentPlanets/middle.svg'
import InnerLayer from '@/public/images/Core/RadialAnimation/center.svg'

const RadialAnimation = () => {
  return (
    <div className={css.wrapper}>
      <OuterLayer className={css.outerLayer} />
      <MiddleLayer className={css.middleLayer} />
      <InnerLayer className={css.innerLayer} />
    </div>
  )
}

export default RadialAnimation
