import React, { useCallback, useEffect, useRef, useState } from 'react'
import Matter from 'matter-js'
import { debounce } from 'lodash'

const { Bodies, Engine, Render, Runner, World } = Matter

const WALL_BORDER_WIDTH = 25
const WALL_LENGTH = 500
const COIN_RADIUS = 50

// Scale Determined By Dividing
// Coin Diameter By Texture Size
// 100px/256px = 0.390625
const IMG_SCALE = (COIN_RADIUS * 2) / 256

export default function MatterCanvas({ imgUrl, scrollYProgress }) {
  const canvas = useRef(null)
  const world = useRef(null)
  const engineRef = useRef(null)
  const runnerRef = useRef(null)
  const [spawnCoins, setSpawnCoins] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 })

  const createWorld = useCallback(() => {
    const engine = Engine.create()
    engineRef.current = engine
    world.current = engine.world

    const render = Render.create({
      canvas: canvas.current,
      engine,
      options: {
        width: dimensions.width,
        height: dimensions.height,
        background: '#121312',
        wireframes: false,
      },
    })

    const walls = [
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

    World.add(
      engine.world,
      walls.map((wall) =>
        Bodies.rectangle(wall.x, wall.y, wall.width, wall.height, {
          isStatic: true,
          render: { visible: false },
        }),
      ),
    )

    if (spawnCoins) {
      const spawnInterval = setInterval(() => {
        if (engine?.world.bodies.length >= 20) {
          clearInterval(spawnInterval)
          return
        }
        World.add(engine.world, createCoin())
      }, 250)
    }

    function createCoin() {
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

    Render.run(render)
    runnerRef.current = Runner.run(Runner.create(), engine)

    window.Attr = Matter
    window.engine = engine
    window.runner = runnerRef.current
  }, [dimensions.width, dimensions.height, imgUrl, spawnCoins])

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
      if (runnerRef.current) {
        Runner.stop(runnerRef.current)
        Engine.clear(engineRef.current)
      }
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
