import { useEffect, useMemo } from 'react'
import { ASCIIEffect } from './asciiEffect'

// This component wraps and manages the lifecycle of the ASCII effect,
// It creates the effect, handles its disposal, and renders it as a primitive object.
const AsciiShader = () => {
  const effect = useMemo(() => new ASCIIEffect(), [])
  useEffect(() => {
    return () => {
      effect.dispose?.()
    }
  }, [effect])
  return <primitive object={effect} dispose={null} />
}

export default AsciiShader
