import React, { useEffect, useRef, useState } from 'react'
import Matter from 'matter-js'

const { Bodies, Engine, Events, Mouse, MouseConstraint, Render, Runner, World } = Matter

function getRandom(range = 10, canBeNegative = true) {
  let negativeMulti = 1
  if (canBeNegative) {
    negativeMulti = Math.random() > 0.5 ? -1 : 1
  }
  const finalAdd = range * Math.random() * negativeMulti

  // console.log('--  finalAdd: ', finalAdd)
  return finalAdd
}

export default function MatterCanvas({ spawnCoins, imgUrl }) {
  const canvas = useRef(null)
  const world = useRef(null)
  const engineRef = useRef(null)
  const runnerRef = useRef(null)
  const [objectsCount, objectsCountSet] = useState(0)
  const [fps, fpsSet] = useState(0)
  const [dimensions, setDimensions] = useState({ width: 1000, height: 700 })

  useEffect(() => {
    const debounce = (func, wait) => {
      let timeout
      return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => func.apply(this, args), wait)
      }
    }

    const handleResize = debounce(() => {
      setDimensions({ width: window.innerWidth / 2, height: window.innerHeight })
    }, 300)

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    function createWorld() {
      const engine = Engine.create()
      engineRef.current = engine
      world.current = engine.world

      console.log('createWorld')

      // create a renderer
      const render = Render.create({
        canvas: canvas.current || undefined,
        engine,
        options: {
          width: dimensions.width,
          height: dimensions.height,
          background: '#121312',
          showCollisions: false,
          showVelocity: false,
          showAxes: false,
          wireframes: false,
        },
      })

      const wallBorderWidth = 25
      const wallLength = 500

      // walls
      World.add(engine.world, [
        // celling
        Bodies.rectangle(0, 0 - wallBorderWidth / 2, wallLength * 8, wallBorderWidth, {
          isStatic: true,
          render: { visible: false },
        }),
        // ground
        //   Bodies.rectangle(0, dimensions.height - dimensions.height / 4, wallLength * 0.7, wallBorderWidth, {
        //     isStatic: true,
        //   }),

        // ground 2
        Bodies.rectangle(0, dimensions.height + wallBorderWidth / 2 - 15, dimensions.width * 9, wallBorderWidth, {
          isStatic: true,
          render: { visible: false },
        }),

        Bodies.rectangle(0, dimensions.height - dimensions.height / 2, wallBorderWidth, wallLength * 8, {
          isStatic: true,
          render: { visible: false },
        }),
        Bodies.rectangle(dimensions.width, dimensions.height - dimensions.height / 2, wallBorderWidth, wallLength * 8, {
          isStatic: true,
          render: { visible: false },
        }),
      ])

      // MOUSE
      const mouse = Mouse.create(render.canvas)
      render.mouse = mouse
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: {
          stiffness: 0.5,
          render: {
            visible: true,
          },
        },
      })

      World.add(engine.world, mouseConstraint)

      // Generate 20 coins over 5 seconds if spawnCoins is true
      if (spawnCoins) {
        let ballsCreated = 0
        const intervalId = setInterval(() => {
          if (ballsCreated >= 20) {
            clearInterval(intervalId)
            return
          }
          createBalls({
            x: (Math.random() * dimensions.width) / 2 + dimensions.width / 4,
            y: Math.random() * dimensions.height,
          })
          ballsCreated++
        }, 5000 / 20) // 5 seconds divided by 20 Coins
      }

      //
      //
      // After Update
      //
      //
      Events.on(engine, 'afterUpdate', (ev) => {
        // const time = engine.timing.timestamp
        objectsCountSet(ev.source.world.bodies.length)

        ev.source.world.bodies.forEach((b) => {
          if (b.position.x > dimensions.width || b.position.x < 0 || b.position.y > dimensions.height) {
            World.remove(engine.world, b)
          }
        })
        fpsSet(Math.abs(runnerRef.current.fps))
      })

      function createBalls(positionXY) {
        if (!positionXY) {
          return
        }

        World.add(
          engine.world,
          Bodies.circle(positionXY.x + getRandom(15) || dimensions.width / 2, 0, 50, {
            restitution: 0.4,
            render: {
              sprite: {
                texture: imgUrl, // Path to your image
                xScale: 1, // Scale the image if needed
                yScale: 1,
              },
            },
          }),
        )
      }

      Render.run(render)

      // create runner
      const runner = Runner.create()
      runnerRef.current = runner
      // run the engine
      Runner.run(runner, engine)

      // add To Global
      window.Matter = Matter
      window.engine = engine
      window.runner = runner
    }

    if (runnerRef.current) {
      Runner.stop(runnerRef.current)
      Engine.clear(engineRef.current)
    }

    createWorld()

    return () => {
      console.log('clear')
      Runner.stop(runnerRef.current)
      Engine.clear(engineRef.current)
    }
  }, [canvas, world, dimensions, imgUrl, spawnCoins])

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
