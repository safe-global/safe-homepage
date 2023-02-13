import { useCallback, useEffect, useRef } from 'react'

export const DEPTH_PARAMS = [
  { factor: -0.08, zIndex: 10 },
  { factor: -0.06, zIndex: 9 },
  { factor: -0.04, zIndex: 8 },
  { factor: -0.02, zIndex: 7 },
  { factor: -0.01, zIndex: 6 },
]

export type ParallaxProps = {
  translateX: number
  translateY: number
  depth: 0 | 1 | 2 | 3 | 4
  direction?: 1 | -1
}

const useScrollParallax = ({ translateX, translateY, depth, direction = 1 }: ParallaxProps) => {
  const boxRef = useRef<HTMLDivElement>()

  const parallax = useCallback(() => {
    window.requestAnimationFrame(() => {
      if (!boxRef.current) {
        return
      }

      const { top } = boxRef.current.getBoundingClientRect()

      const diffY = top * direction * DEPTH_PARAMS[depth].factor

      boxRef.current.style.transform = `translateX(${translateX}px) translateY(${translateY + diffY}px)`
    })
  }, [depth, translateX, translateY])

  useEffect(() => {
    window.addEventListener('scroll', parallax)

    return () => window.removeEventListener('scroll', parallax)
  }, [parallax])

  return boxRef
}

export default useScrollParallax
