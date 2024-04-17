import css from './styles.module.css'
import { motion } from 'framer-motion'
import { Box, Typography } from '@mui/material'
import OrbitRingsList from '@/components/Token/Hero/token-hero-rings.json'
import OrbitPath from '@/components/Token/OrbitPath'
import Floater, { type AnimationDirection } from '@/components/Token/Floaters'
import PulsingLogo from '@/components/Token/PulsingLogo'
import { type BaseBlockEntry } from '@/config/types'
import RichText from '@/components/common/RichText'
import ButtonsWrapper from '@/components/Token/ButtonsWrapper'
import { isAsset, isEntryTypeButton } from '@/lib/typeGuards'

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
        {/*SAFE Token Logo */}
        <motion.div
          animate={{ y: ['0%', '-5%', '0%'], rotateY: [0, -35, 0] }}
          transition={{
            duration: 6,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          {isAsset(image) && image.fields.file?.url ? (
            <img src={image.fields.file.url} alt={image.fields.title ?? ''} />
          ) : null}
        </motion.div>

        {/* Token Hero Content */}
        <div className={css.container}>
          <Typography variant="h5">{caption}</Typography>
          <Box className={css.title}>
            <RichText {...title} />
          </Box>

          <ButtonsWrapper buttons={buttonsList} />

          <Typography variant="caption" className={css.scroll}>
            Scroll
          </Typography>
        </div>
      </div>

      {OrbitRingsList.map((orbitRing, orbitIndex) => (
        <div key={orbitRing.id} className={css[orbitRing.id]}>
          {/* Display All Logos */}
          {orbitRing.logos.map((logo, logoIndex) => (
            <PulsingLogo key={logoIndex} angle={logo.angle} radius={orbitRing.diameter / 2} imgUrl={logo.imgUrl} />
          ))}

          {/* Display All Floaters */}
          {orbitRing.floaters.map((floater, floaterIndex) => (
            <Floater
              key={floaterIndex}
              radius={orbitRing.diameter / 2}
              angle={floater.angle}
              size={floater.size}
              direction={orbitRing.direction as AnimationDirection}
              duration={orbitRing.duration}
              speed={360 / orbitRing.duration + floater.speed / 70}
            />
          ))}

          {/* Display Orbit Path */}
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
