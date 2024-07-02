import React, { useCallback, useEffect, useRef, useState } from 'react'
import Matter from 'matter-js'
import { debounce } from 'lodash'

const { Bodies, Engine, Render, Runner, World } = Matter

const WALL_BORDER_WIDTH = 25
const WALL_LENGTH = 500
const COIN_RADIUS = 50

const IMG_TEXTURE_SIZE = 256 // Size Of The USDC.png Image In Pixels
const IMG_SCALE = (COIN_RADIUS * 2) / IMG_TEXTURE_SIZE // Scale Factor To Match Image Texture Size With Coin Radius

type MatterCanvasProps = {
  imgUrl: string
  scrollYProgress: any // Specify the correct type based on your usage
}

type Dimensions = {
  width: number
  height: number
}

export default function MatterCanvas({ imgUrl, scrollYProgress }: MatterCanvasProps) {
  const canvas = useRef<HTMLCanvasElement>(null)
  const worldRef = useRef<Matter.World | null>(null)
  const engineRef = useRef<Matter.Engine | null>(null)
  const runnerRef = useRef<Matter.Runner>(null)
  const [spawnCoins, setSpawnCoins] = useState(false)
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 500, height: 500 })

  const createRenderer = (
    canvas: React.RefObject<HTMLCanvasElement>,
    engine: Matter.Engine,
    dimensions: Dimensions,
  ) => {
    return Render.create({
      canvas: canvas.current!,
      engine,
      options: {
        width: dimensions.width,
        height: dimensions.height,
        background: '#121312',
        wireframes: false,
      },
    })
  }

  const createWalls = (dimensions: Dimensions) => [
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

  const addWallsToWorld = (engine: Matter.Engine, walls: any[]) => {
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

  const createCoin = (dimensions: Dimensions, imgUrl: string) => {
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

  const spawnCoinsInterval = useCallback(
    (engine: Matter.Engine, dimensions: Dimensions, imgUrl: string, spawnCoins: boolean) => {
      if (spawnCoins) {
        const spawnInterval = setInterval(() => {
          if (engine?.world.bodies.length >= 20) {
            clearInterval(spawnInterval)
            return
          }
          World.add(engine.world, createCoin(dimensions, imgUrl))
        }, 250)
      }
    },
    [],
  )

  const createWorld = useCallback(() => {
    const engine = Engine.create()
    engineRef.current = engine
    worldRef.current = engine.world

    const render = createRenderer(canvas, engine, dimensions)
    const walls = createWalls(dimensions)
    addWallsToWorld(engine, walls)
    spawnCoinsInterval(engine, dimensions, imgUrl, spawnCoins)

    Render.run(render)
    const runner = Runner.create()
    Runner.run(runner, engine)
  }, [dimensions, imgUrl, spawnCoins, spawnCoinsInterval])

  //useEffect To Restart Canvas On Resize
  useEffect(() => {
    const handleResize = debounce(() => {
      setDimensions({ width: window.innerWidth / 2, height: window.innerHeight })
    }, 300)

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  //useEffect To Start/Restart Canvas When Scroll Into View
  useEffect(() => {
    if (!scrollYProgress) return
    const handleScrollChange = () => {
      const latest = scrollYProgress.get()
      setSpawnCoins(latest > 0.05)
    }

    const unsubscribe = scrollYProgress.onChange(handleScrollChange)
    return () => unsubscribe()
  }, [scrollYProgress])

  // useEffect To Create And Clean Up The Matter.js World
  useEffect(() => {
    const cleanup = () => {
      if (runnerRef.current) Runner.stop(runnerRef.current)
      if (engineRef.current) Engine.clear(engineRef.current)
    }

    cleanup()
    createWorld()

    return cleanup
  }, [createWorld])

  return (
    <div
      style={{
        pointerEvents: 'none',
      }}
    >
      <canvas className="" ref={canvas} />
    </div>
  )
}
