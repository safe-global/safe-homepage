import React, { useCallback, useEffect, useRef, useState } from 'react'
import Matter from 'matter-js'
import { debounce } from 'lodash'
import type { MotionValue } from 'framer-motion'
import { addWallsToWorld, createCoin, createWalls, type Dimensions } from './MatterJSUtils'

const { Engine, Render, Runner, World } = Matter

type MatterCanvasProps = {
  imgUrl: string
  scrollYProgress: MotionValue<number>
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
