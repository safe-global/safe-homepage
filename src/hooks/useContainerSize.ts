import { useState, useEffect, type RefObject } from 'react'

function useContainerSize(ref: RefObject<HTMLElement>): { width: number; height: number } {
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (!ref.current) return

    const updateSize = (entries: ResizeObserverEntry[]) => {
      const { width, height } = entries[0].contentRect
      setSize({ width, height })
    }

    const resizeObserver = new ResizeObserver(updateSize)
    resizeObserver.observe(ref.current)

    return () => resizeObserver.disconnect()
  }, [ref])

  return size
}

export default useContainerSize
