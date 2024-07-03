import Matter from 'matter-js'
const { Bodies, World } = Matter

const WALL_BORDER_WIDTH = 25
const WALL_LENGTH = 500

export type Dimensions = {
  width: number
  height: number
}

export const createWalls = (dimensions: Dimensions) => [
  { x: 0, y: -WALL_BORDER_WIDTH / 2, width: WALL_LENGTH * 8, height: WALL_BORDER_WIDTH },
  {
    x: 0,
    y: dimensions.height + WALL_BORDER_WIDTH / 2 - 15,
    width: dimensions.width * 9,
    height: WALL_BORDER_WIDTH,
  },
  { x: 0, y: dimensions.height / 2, width: WALL_BORDER_WIDTH, height: WALL_LENGTH * 8 },
  { x: dimensions.width, y: dimensions.height / 2, width: WALL_BORDER_WIDTH, height: WALL_LENGTH * 8 },
]

export const addWallsToWorld = (engine: Matter.Engine, walls: any[]) => {
  World.add(
    engine.world,
    walls.map((wall) =>
      Bodies.rectangle(wall.x, wall.y, wall.width, wall.height, {
        isStatic: true,
        render: { visible: false },
      }),
    ),
  )
}

export const createCoin = (dimensions: Dimensions, imgUrl: string, isMobile: boolean) => {
  const COIN_RADIUS = isMobile ? 35 : 50

  const IMG_TEXTURE_SIZE = 256 // Size Of The USDC.png Image In Pixels
  const IMG_SCALE = (COIN_RADIUS * 2) / IMG_TEXTURE_SIZE // Scale Factor To Match Image Texture Size With Coin Radius

  return Bodies.circle(Math.random() * dimensions.width * 0.5 + dimensions.width * 0.25, 0, COIN_RADIUS, {
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
