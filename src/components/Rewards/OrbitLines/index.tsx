import React from 'react'
import { motion } from 'framer-motion'
import { palette } from '@/styles/palette'

export default function OrbitLines() {
  return (
    <>
      <OrbitLine1 />
      <OrbitLine2 />
    </>
  )
}

const OrbitLine1 = () => {
  return (
    <div
      style={{
        position: 'absolute',
        zIndex: 10,
      }}
    >
      <svg width="430" height="562" viewBox="0 0 430 562" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/*
          The "initial" property sets the starting state of the animation:
            - "pathLength" is set to 0.3, meaning only 30% of the path is visible initially.
            - "pathOffset" is set to -0.3, which offsets the visible portion of the path to start
              30% from the beginning of the path.

          The "animate" property defines the final state of the animation:
            - "pathLength" increases to 0.9, allowing 90% of the path to be visible.
            - "pathOffset" moves to 1, shifting the visible portion to the very end of the path.

          The transition between these states is controlled by the "transition" property:
            - "repeat: Infinity" makes the animation run indefinitely.
            - "repeatType: 'loop'" ensures the animation continuously loops.
            - "duration: 6" sets each animation loop to last 6 seconds.
            - "ease: 'easeOut'" applies an easing function that starts the animation quickly and
              then slows down towards the end of each loop.
        */}
        <motion.path
          initial={{ pathLength: 0.3, pathOffset: -0.3 }}
          animate={{ pathLength: 0.9, pathOffset: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 6,
            ease: 'easeOut',
          }}
          d="M49.1746 244.593C-4.3471 135.05 -16.1166 39.8069 26.7232 10.0477C83.2091 -29.1909 213.245 60.2755 317.167 209.876C421.089 359.477 459.544 512.562 403.058 551.8C384.787 564.492 358.822 563.719 328.534 551.8"
          stroke="url(#paint0_linear_78_19060)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* Definitions for the linear gradient used in the orbit line's stroke */}
        <defs>
          <linearGradient
            id="paint0_linear_78_19060"
            x1="299.521"
            y1="181.89"
            x2="144.877"
            y2="360.602"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={palette.primary.main} />
            <stop offset="0.331457" stopColor={palette.info.main} />
            <stop offset="0.885267" stopColor="#35EFBA" stopOpacity="0" />
            <stop offset="1" stopColor={palette.primary.main} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

const OrbitLine2 = () => {
  return (
    <div
      style={{
        position: 'absolute',
        zIndex: 10,
      }}
    >
      <svg width="488" height="422" viewBox="0 0 488 422" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/*
          The "initial" property sets the starting state of the animation:
            - "pathLength" is set to 0.5, meaning only 50% of the path is visible initially.
            - "pathOffset" is set to -0.5, which offsets the visible portion of the path to start
              50% from the beginning of the path.

          The "animate" property defines the final state of the animation:
            - "pathLength" increases to 1.5, allowing >100% of the path to be visible.
            - "pathOffset" moves to 1, shifting the visible portion to the very end of the path.

          The transition between these states is controlled by the "transition" property:
            - "repeat: Infinity" makes the animation run indefinitely.
            - "repeatType: 'loop'" ensures the animation continuously loops.
            - "duration: 6" sets each animation loop to last 6 seconds.
            - "ease: 'easeOut'" applies an easing function that starts the animation quickly and
              then slows down towards the end of each loop.
            - "delay : 3" applies a delay of 3s before the animation starts
        */}
        <motion.path
          initial={{ pathLength: 0.5, pathOffset: -0.5 }}
          animate={{ pathLength: 1.5, pathOffset: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 6,
            ease: 'easeOut',
            delay: 3,
          }}
          d="M115.514 413.139C67.5571 426.477 29.6607 423.696 11.529 401.557C-28.5277 352.648 43.0479 227.784 171.397 122.665C299.747 17.5456 436.267 -28.0219 476.324 20.8869C490.559 38.2679 490.696 65.2416 479.197 97.5127"
          stroke="url(#paint0_linear_78_19062)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* Definitions for the linear gradient used in the orbit line's stroke */}
        <defs>
          <linearGradient
            id="paint0_linear_78_19062"
            x1="155.012"
            y1="131.27"
            x2="312.172"
            y2="304.387"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={palette.primary.main} />
            <stop offset="0.770581" stopColor="#35EFBA" stopOpacity="0" />
            <stop offset="1" stopColor={palette.primary.main} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
