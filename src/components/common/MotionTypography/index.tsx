import React from 'react'
import { motion } from 'framer-motion'

const MotionTypography = ({
  customDelay,
  children,
  animateYFrom,
}: {
  customDelay: number
  children: React.ReactNode
  animateYFrom: number
}) => {
  // Define Animation Variants For Content
  const variants = {
    initial: {
      opacity: 0,
      y: animateYFrom,
    },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom },
    }),
  }

  return (
    <motion.div variants={variants} initial="initial" custom={customDelay} whileInView="animate">
      {children}
    </motion.div>
  )
}

export default MotionTypography
