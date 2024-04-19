import css from './styles.module.css'
import clsx from 'clsx'
import IconChip from './IconChip'

const IconRow = ({ icons }: Carousel) => (
  <>
    {icons.map((icon, i) => (
      <IconChip icon={icon} key={icon.name} />
    ))}
  </>
)

const IconCarouselElement = ({ icons, reverse }: Carousel) => (
  <div className={css.carouselWrapper}>
    <div className={css.gradientBase} />
    <div className={clsx(css.animation, reverse && css.animationReverse)}>
      <div className={css.slider}>
        <IconRow icons={icons} />
        <IconRow icons={icons} />
      </div>
    </div>
    <div className={clsx(css.gradientBase, css.gradientFlipped)} />
  </div>
)

export default IconCarouselElement
