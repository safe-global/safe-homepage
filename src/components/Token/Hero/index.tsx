import React from 'react'
import css from './styles.module.css'
import { motion } from 'framer-motion'
import { Typography } from '@mui/material'
import HeroLogos from '@/content/token-hero-logos.json'
import HeroLogoContainer from './HeroLogoContainer'

export default function Hero() {
  return (
    <div className={css.heroContainer}>
      {/* Floating Token */}
      <div className={css.tokenContainer}>
        <motion.div
          animate={{ y: ['0%', '-10%', '5%', '0%'], rotateY: [0, -45, 0, 45, 0] }}
          transition={{
            duration: 8,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop',
          }}
          className={css.tokenImage}
        >
          <img width={180} src="/images/Token/token.png" alt="Safe Token" />
        </motion.div>
        <div className={css.tokenCircle1}></div>
        <div className={css.tokenCircle2}></div>
        <div className={css.tokenCircle3}></div>
        <Typography className={css.label} variant="h4">
          SAFE Token
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            textAlign: 'center',
            width: 'max-content',
            position: 'absolute',
            zIndex: 30,
            mt: '60vh',
            '& span': {
              color: '#12FF80',
            },
          }}
        >
          Participate in the <br />
          <span>Ownership Revolution</span>
        </Typography>
      </div>

      {/* Orbiting Rings */}
      <div className={css.orbitRingsContainer}>
        <motion.div
          className={css.orbitRing1}
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <img src="/images/Token/Hero/Orbit-Ring-1.png" />
        </motion.div>
        <motion.div
          className={css.orbitRing2}
          animate={{ rotate: [0, -360] }}
          transition={{
            duration: 30,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <img src="/images/Token/Hero/Orbit-Ring-2.png" />
        </motion.div>
        <motion.div
          className={css.orbitRing3}
          animate={{ rotate: 360 }}
          transition={{
            duration: 50,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <img src="/images/Token/Hero/Orbit-Ring-3.png" />
        </motion.div>
        <motion.div
          className={css.orbitRing4}
          animate={{ rotate: [0, -360] }}
          transition={{
            duration: 70,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <img src="/images/Token/Hero/Orbit-Ring-4.png" />
        </motion.div>
        <motion.div
          className={css.orbitRing5}
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <img src="/images/Token/Hero/Orbit-Ring-5.png" />
        </motion.div>
      </div>

      {/* Pulsing Logos */}
      {HeroLogos.map((logo, index) => (
        <HeroLogoContainer
          key={index}
          radius={logo.radius}
          angle={logo.angle}
          imgUrl={`/images/Token/Hero/Logos/${logo.imgUrl}`}
        />
      ))}
    </div>
  )
}
