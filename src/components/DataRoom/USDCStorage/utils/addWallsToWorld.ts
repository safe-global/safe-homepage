import { Bodies, World } from 'matter-js'
import type { Dimensions } from './types'

const WALL_BORDER_WIDTH = 25
const WALL_LENGTH = 500

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
