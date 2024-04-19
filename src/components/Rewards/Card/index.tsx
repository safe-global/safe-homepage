import { useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { type BaseBlockEntry } from '@/config/types'
import { isAsset } from '@/lib/typeGuards'
import css from './styles.module.css'

const Card = (props: BaseBlockEntry) => {
  const { image } = props.fields

  // Initialize motion values for rotation and background position
  const rotateXDeg = useMotionValue(0) //No rotation by default
  const rotateYDeg = useMotionValue(0) //No rotation by default
  const backgroundPosX = useMotionValue(50) // Center by default
  const backgroundPosY = useMotionValue(50) // Center by default

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event
      // Calculate rotation values based on mouse position
      const newRotateX = (clientY / window.innerHeight - 0.5) * 30
      const newRotateY = (clientX / window.innerWidth - 0.5) * -30
      rotateXDeg.set(newRotateX)
      rotateYDeg.set(newRotateY)

      // Calculate background position values based on mouse position
      const newBackgroundPosX = (clientX / window.innerWidth) * 100
      const newBackgroundPosY = (clientY / window.innerHeight) * 100
      backgroundPosX.set(newBackgroundPosX)
      backgroundPosY.set(newBackgroundPosY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [rotateXDeg, rotateYDeg, backgroundPosX, backgroundPosY])

  // The `useTransform` hook is used here to dynamically generate a CSS background style
  // based on the current mouse position. It takes the motion values for the background
  // position (backgroundPosX and backgroundPosY) and transforms them into a CSS gradient
  const backgroundStyle = useTransform([backgroundPosX, backgroundPosY], (latestValues) => {
    const [x, y] = latestValues.map((value) => value as number)
    // Construct the CSS gradient string with updated positions to create the dynamic sheen effect
    return `repeating-linear-gradient(45deg, rgba(255,255,255, 0.15) 0%, rgba(0,0,0,0.1) 20%,  rgba(0,0,0,0.1) 30%, rgba(255,255,255, 0.15) 50%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0.1) 80% ,rgba(255,255,255, 0.15) 100%) 
    ${x * 3}% 
    ${y * 3}% / 350px 350px`
  })

  return (
    <motion.div
      className={css.container}
      style={{
        rotateX: rotateXDeg,
        rotateY: rotateYDeg,
        transformPerspective: 800,
      }}
    >
      {isAsset(image) && image.fields.file?.url ? (
        <img src={image.fields.file.url} alt={image.fields.title ?? ''} width={300} className={css.card} />
      ) : null}
      <motion.div
        className={css.sheen}
        style={{
          background: backgroundStyle,
        }}
      />
    </motion.div>
  )
}

export default Card
