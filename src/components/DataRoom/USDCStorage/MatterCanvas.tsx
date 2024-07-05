import React, { useCallback, useEffect, useRef, useState } from 'react'
import Matter from 'matter-js'
import { debounce } from 'lodash'
import type { MotionValue } from 'framer-motion'
import type { Dimensions } from './utils/types'
import { addWallsToWorld, createWalls } from './utils/addWallsToWorld'
import { createCoin } from './utils/createCoin'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'

const { Engine, Render, Runner, World } = Matter

type MatterCanvasProps = {
  imgUrl: string
  scrollYProgress: MotionValue<number>
}

export default function MatterCanvas({ imgUrl, scrollYProgress }: MatterCanvasProps) {
  const isMobile = useIsMediumScreen()
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
    isMobile: boolean,
  ) => {
    return Render.create({
      canvas: canvas.current!,
      engine,
      options: {
        width: dimensions.width,
        height: dimensions.height,
        background: isMobile ? '#0000' : '#121312',
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
          World.add(engine.world, createCoin(dimensions, imgUrl, isMobile))
        }, 250)
      }
    },
    [isMobile],
  )

  const createWorld = useCallback(() => {
    const engine = Engine.create()
    engineRef.current = engine
    worldRef.current = engine.world
    engine.gravity.y = isMobile ? 1.5 : 1 // Speeds Up Coins For Mobile

    const render = createRenderer(canvas, engine, dimensions, isMobile)
    const walls = createWalls(dimensions)
    addWallsToWorld(engine, walls)
    spawnCoinsInterval(engine, dimensions, imgUrl, spawnCoins)

    Render.run(render)
    const runner = Runner.create()
    Runner.run(runner, engine)
  }, [dimensions, imgUrl, spawnCoins, isMobile, spawnCoinsInterval])

  //useEffect To Restart Canvas On Resize
  useEffect(() => {
    const handleResize = debounce(() => {
      isMobile
        ? setDimensions({ width: window.innerWidth, height: window.innerHeight })
        : setDimensions({ width: window.innerWidth / 2, height: window.innerHeight })
    }, 300)

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isMobile])

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
