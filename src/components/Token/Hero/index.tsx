import css from './styles.module.css'
import { Typography } from '@mui/material'
import OrbitRingsList from '@/components/Token/Hero/token-hero-rings.json'
import { type AnimationDirection } from '@/components/Token/Hero/FloaterDot'
import { type BaseBlockEntry } from '@/config/types'
import RichText from '@/components/common/RichText'
import ButtonsWrapper from '@/components/Token/ButtonsWrapper'
import { isAsset, isEntryTypeButton } from '@/lib/typeGuards'
import dynamic from 'next/dynamic'

// Client-side only imports. Framer Motion components are not SSR compatible.
const FloatingToken = dynamic(() => import('../FloatingToken'))
const PulsingLogo = dynamic(() => import('./PulsingLogo'))
const FloaterDot = dynamic(() => import('./FloaterDot'))
const OrbitPath = dynamic(() => import('./OrbitPath'))

const Hero = (props: BaseBlockEntry) => {
  const { caption, title, buttons, image } = props.fields

  const buttonsList = buttons?.filter(isEntryTypeButton) || []

  return (
    <div className={css.heroSpacer}>
      {/* Token Background Gradients */}
      <div className={css.tokenCircle1}></div>
      <div className={css.tokenCircle2}></div>
      <div className={css.tokenCircle3}></div>

      <div className={css.tokenContainer}>
        {/* SAFE Token Logo */}
        {isAsset(image) ? <FloatingToken image={image} /> : null}

        {/* Token Hero Content */}
        <div className={css.container}>
          <Typography variant="h5">{caption}</Typography>
          <div className={css.title}>
            <RichText {...title} />
          </div>

          <ButtonsWrapper buttons={buttonsList} />

          <Typography variant="caption" className={css.scroll}>
            Scroll
          </Typography>
        </div>
      </div>

      {OrbitRingsList.map((orbitRing, orbitIndex) => (
        <div key={orbitRing.id} className={css[orbitRing.id]}>
          {/* Display ecosystem Logos */}
          {orbitRing.logos.map((logo, logoIndex) => (
            <PulsingLogo
              key={`${logo.imgUrl}_${logoIndex}`}
              angle={logo.angle}
              radius={orbitRing.diameter / 2}
              imgUrl={logo.imgUrl}
            />
          ))}

          {/* Display all floater dots*/}
          {orbitRing.floaters.map((floater, floaterIndex) => {
            const radius = orbitRing.diameter / 2
            const angularVelocity = 360 / orbitRing.duration
            const floaterSpeed = floater.speed / 70 // Reduce floaters speed by a factor of 70

            return (
              <FloaterDot
                key={floaterIndex}
                radius={radius}
                angle={floater.angle}
                size={floater.size}
                direction={orbitRing.direction as AnimationDirection}
                duration={orbitRing.duration}
                speed={angularVelocity + floaterSpeed}
              />
            )
          })}

          {/* Display orbit path */}
          <OrbitPath
            duration={orbitRing.duration}
            diameter={orbitRing.diameter}
            direction={orbitRing.direction as AnimationDirection}
          >
            <img src={orbitRing.src} alt={`Orbit Ring ${orbitIndex + 1}`} />
          </OrbitPath>
        </div>
      ))}
    </div>
  )
}

export default Hero
