import Matter from 'matter-js'
const { Bodies } = Matter
import type { Dimensions } from './types'

const IMG_TEXTURE_SIZE = 256 // Size Of The USDC.png Image In Pixels
const COIN_RADIUS_SM = 35
const COIN_RADIUS_MD = 50

export const createCoin = (dimensions: Dimensions, imgUrl: string, isMobile: boolean) => {
  const coinRadius = isMobile ? COIN_RADIUS_SM : COIN_RADIUS_MD
  const IMG_SCALE = (coinRadius * 2) / IMG_TEXTURE_SIZE // Scale Factor To Match Image Texture Size With Coin Radius

  return Bodies.circle(Math.random() * dimensions.width * 0.5 + dimensions.width * 0.25, 0, coinRadius, {
    restitution: 0.4,
    render: {
      sprite: {
        texture: imgUrl,
        xScale: IMG_SCALE,
        yScale: IMG_SCALE,
      },
    },
  })
}
