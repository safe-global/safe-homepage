import React from 'react'
import { motion } from 'framer-motion'

const MotionTypography = ({ customDelay, children }: { customDelay: number; children: React.ReactNode }) => {
  // Define Animation Variants For Content
  const variants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom },
    }),
  }

  return (
    <motion.div
      variants={variants}
      initial="initial"
      custom={customDelay}
      whileInView="animate"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

export default MotionTypography
