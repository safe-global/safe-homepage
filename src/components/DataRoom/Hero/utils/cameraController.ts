import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { MotionValue } from 'framer-motion'
import { damp } from './easing'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'

export const CameraController = ({ zoomLevel }: { zoomLevel: MotionValue<number> }) => {
  const mouse = useRef({ x: 0, y: 0 })
  const isMobile = useIsMediumScreen()

  // This useEffect sets up a mouse movement listener
  // It updates the mouse position relative to the window size
  useEffect(() => {
    const updateMouse = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }
    globalThis?.addEventListener('mousemove', updateMouse)
    return () => globalThis?.removeEventListener('mousemove', updateMouse)
  }, [])

  // useFrame is a hook that runs on every frame render outside react's update cycle.
  // It updates the camera zoom based on the current zoomLevel value.
  // For non-mobile devices, it applies a damping effect to the camera position based on mouse movement,
  // creating a subtle parallax effect.
  // Finally, it sets the camera position and makes it look at the center of the scene.
  useFrame((state, delta) => {
    state.camera.zoom = zoomLevel.get()
    state.camera.updateProjectionMatrix()

    // Apply damping to camera position based on mouse movement on desktop
    if (!isMobile) {
      damp(
        state.camera.position,
        [1 - mouse.current.x * 2, 1 - mouse.current.y * 2, 20 + Math.atan(mouse.current.y * 4)],
        0.3,
        delta,
      )
    }

    state.camera.position.set(state.camera.position.x, state.camera.position.y, 5)
    state.camera.lookAt(0, 0, 0)
  })

  return null
}
