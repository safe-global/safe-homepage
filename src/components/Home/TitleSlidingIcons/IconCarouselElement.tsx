import css from './styles.module.css'
import clsx from 'clsx'
import { Typography } from '@mui/material'

type Icon = {
  name: string
  src: string
  isNew?: boolean
}

export type Carousel = {
  icons: Icon[]
  reverse?: boolean
}

const IconChip = ({ icon }: { icon: Icon }) => (
  <div className={css.wrapper}>
    <div className={css.icon}>
      <img src={icon.src} alt={icon.name} width={64} height={64} />
    </div>
    <Typography>{icon.name}</Typography>
    {icon.isNew && <div className={css.newBadge}>New</div>}
  </div>
)

const IconRow = ({ icons }: Carousel) => (
  <>
    {icons.map((icon) => (
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
