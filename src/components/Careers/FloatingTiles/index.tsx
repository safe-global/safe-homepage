import { useMemo } from 'react'
import { Box } from '@mui/material'
import styled from '@emotion/styled'

import css from './styles.module.css'

const DIMENSIONS = 1250
const RADIUS = 40 // Percentage
const MIN_SIZE = 40
const MAX_SIZE = 100
const VARIANCE_FACTOR = 4

// Uses Box Muller transform to generate a 0,1 gaussian
const randomGaussian = () => {
  const u = 1 - Math.random()
  const v = Math.random()
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
}

const randomPointOnCircle = () => {
  const angle = Math.random() * Math.PI * 2
  const adjustedRadius = RADIUS + VARIANCE_FACTOR * randomGaussian()
  const x = Math.cos(angle) * adjustedRadius + 50
  const y = Math.sin(angle) * adjustedRadius + 50
  return [x, y]
}

const TileBox = styled(Box)<{ duration: string }>`
  position: absolute;
  animation: ${(p) => p.duration} orbit linear infinite;
  animation-direction: reverse;

  /* Tone down the animation to avoid vestibular motion triggers */
  @media (prefers-reduced-motion) {
    animation-name: none;
  }
`

const Orbit = styled(Box)<{ duration: string }>`
  width: ${DIMENSIONS}px;
  height: ${DIMENSIONS}px;
  z-index: -1;
  margin: auto;
  overflow: visible;
  animation: ${(p) => p.duration} orbit linear infinite;

  @keyframes orbit {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  /* Tone down the animation to avoid vestibular motion triggers */
  @media (prefers-reduced-motion) {
    animation-name: none;
  }
`

type TileProps = {
  top: string
  left: string
  size: string
}

const Tile = ({ top, left, size, duration }: TileProps & { duration: string }) => {
  return (
    <TileBox left={left} width={size} height={size} top={top} duration={duration}>
      <div className={css.spacer} />
    </TileBox>
  )
}

const Tiles = ({ tiles, duration }: { tiles: number; duration: string }) => {
  const tilesArr: TileProps[] = useMemo(() => {
    return Array.apply('', Array(tiles)).map(() => {
      const [x, y] = randomPointOnCircle()

      const top = `${x.toFixed(0)}%`
      const left = `${y.toFixed(0)}%`

      const size = `${(Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE).toFixed(0)}px`

      return {
        top,
        left,
        size,
      }
    })
  }, [tiles])

  return (
    <div className={css.orbitWrapper}>
      <Orbit duration={duration}>
        {tilesArr.map((tile, i) => (
          <Tile key={i} duration={duration} {...tile} />
        ))}
      </Orbit>
    </div>
  )
}

export const FloatingTiles = () => (
  <div className={css.orbit}>
    <div className={css.container}>
      <Tiles tiles={6} duration="95s" />
      <Tiles tiles={7} duration="70s" />
      <Tiles tiles={8} duration="55s" />
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  </div>
)
