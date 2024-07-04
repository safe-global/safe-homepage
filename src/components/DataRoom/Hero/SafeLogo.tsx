import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import type { RefObject } from 'react'
import type { Group, Mesh } from 'three'
import type { MotionValue } from 'framer-motion'

type SafeLogoProps = {
  yPosition: MotionValue<number>
  isMobile: boolean
  offset: number
}

export function SafeLogo({ isMobile, offset, yPosition }: SafeLogoProps) {
  const { nodes } = useGLTF('/Safe_Logo.glb') as any
  const groupRef: RefObject<Group> = useRef(null)
  const meshRef: RefObject<Mesh> = useRef(null)

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.geometry.computeBoundingBox()
      const boundingBox = meshRef.current.geometry.boundingBox
      if (boundingBox) {
        const zSize = boundingBox.max.z - boundingBox.min.z
        meshRef.current.position.z = zSize / 2
      }
    }
  }, [])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.y = yPosition.get()
      groupRef.current.rotation.y += 0.005
      groupRef.current.rotation.x += 0.005
    }
  })

  return (
    <group ref={groupRef} rotation={[offset, 0, 0]} position={[0, 0, 0]} scale={[35, 35, 70]} dispose={null}>
      <mesh ref={meshRef} castShadow receiveShadow geometry={nodes.Safe_Logos_Symbol_Blacksvg.geometry}>
        <meshStandardMaterial color="#12FF80" roughness={1} metalness={0.5} />
      </mesh>
    </group>
  )
}
