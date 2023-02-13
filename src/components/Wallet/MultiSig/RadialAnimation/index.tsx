import css from 'src/components/Wallet/MultiSig/RadialAnimation/styles.module.css'
import OuterLayer from '@/public/images/IdentPlanets/outer.svg'
import MiddleLayer from '@/public/images/IdentPlanets/middle.svg'
import InnerLayer from '@/public/images/IdentPlanets/inner.svg'
import LabelImage from '@/public/images/IdentPlanets/label.svg'

const RadialAnimation = () => {
  return (
    <div className={css.wrapper}>
      <OuterLayer className={css.outerLayer} />
      <MiddleLayer className={css.middleLayer} />
      <InnerLayer className={css.innerLayer} />
      <LabelImage className={css.labelLayer} />
    </div>
  )
}

export default RadialAnimation
