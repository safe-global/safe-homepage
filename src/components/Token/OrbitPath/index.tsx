import { motion } from 'framer-motion'

interface OrbitPathProps {
  diameter: number
  duration: number
  direction: 'normal' | 'reverse'
  children?: React.ReactNode
}

const OrbitPath = ({ diameter, duration, direction, children }: OrbitPathProps) => {
  const rotateValue = direction === 'normal' ? 360 : [0, -360]

  return (
    <motion.div
      style={{
        width: `${diameter}px`,
        height: `${diameter}px`,
        position: 'absolute',
        overflow: 'hidden',
        top: '250px',
        left: '50%',
        borderRadius: '100%',
      }}
      initial={{
        rotate: 0,
        translateX: '-50%',
        translateY: '-50%',
        transformOrigin: 'center',
      }}
      animate={{ rotate: rotateValue, translateX: '-50%', translateY: '-50%', transformOrigin: 'center' }}
      transition={{
        duration: duration,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      }}
    >
      {children}
    </motion.div>
  )
}

export default OrbitPath
