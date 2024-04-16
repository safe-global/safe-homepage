import css from './styles.module.css'
import { motion } from 'framer-motion'
import { Button, Typography } from '@mui/material'
import OrbitRingsList from '@/components/Token/token-hero-rings.json'
import OrbitPath from '@/components/Token/OrbitPath'
import Floater from '@/components/Token/Floaters'
import PulsingLogo from '@/components/Token/PulsingLogo'
import { WALLET_LINK } from '@/config/constants'

const Hero = () => {
  return (
    <div className={css.heroSpacer}>
      {/* Token Backgroud Gradients */}
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
          className={css.tokenImage}
        >
          <img width={180} src="/images/Token/token.png" alt="Safe Token" />
        </motion.div>

        {/* Token Hero Content */}
        <div className={css.container}>
          <Typography variant="h4">SAFE Token</Typography>
          <Typography variant="h2" className={css.title}>
            Participate in the
            <span> Ownership Revolution</span>
          </Typography>
          <Button className={css.button} variant="contained" size="large" href={WALLET_LINK}>
            Go to acitivity app
          </Button>
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
              direction={orbitRing.direction as 'normal' | 'reverse'}
              duration={orbitRing.duration}
              speed={360 / orbitRing.duration + floater.speed / 70}
            />
          ))}

          {/* Display Orbit Path */}
          <OrbitPath
            duration={orbitRing.duration}
            diameter={orbitRing.diameter}
            direction={orbitRing.direction as 'normal' | 'reverse'}
          >
            <img src={orbitRing.src} alt={`Orbit Ring ${orbitIndex + 1}`} />
          </OrbitPath>
        </div>
      ))}
    </div>
  )
}

export default Hero
