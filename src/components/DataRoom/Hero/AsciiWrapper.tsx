import { useEffect, useMemo } from 'react'
import { ASCIIEffect } from './utils'

export default function AsciiWrapper() {
  const effect = useMemo(() => new ASCIIEffect(), [])
  useEffect(() => {
    return () => {
      effect.dispose?.()
    }
  }, [effect])
  return <primitive object={effect} dispose={null} />
}
