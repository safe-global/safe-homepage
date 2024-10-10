import React, { useRef, useEffect } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import type { Group, Mesh } from 'three'
import type { MotionValue } from 'framer-motion'

type SafeLogoProps = {
  yPosition: MotionValue<number>
  offset: number
}

const DEFAULT_ROTATION = 0.005

export function SafeLogo({ offset, yPosition }: SafeLogoProps) {
  const groupRef = useRef<Group>(null)
  const meshRef = useRef<Mesh>(null)
  const gltf = useLoader(GLTFLoader, '/Safe_Logo.glb')

  // Center the mesh along the z-axis based on its bounding box
  useEffect(() => {
    if (!meshRef.current) {
      return
    }
    meshRef.current.geometry.computeBoundingBox()
    const boundingBox = meshRef.current.geometry.boundingBox
    if (boundingBox) {
      const zSize = boundingBox.max.z - boundingBox.min.z
      meshRef.current.position.z = zSize / 2
    }
  }, [gltf])

  // useFrame is a hook that runs on every frame render outside react's update cycle.
  // Update the logo's vertical position and rotate it continuously
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.y = yPosition.get()
      groupRef.current.rotation.y += DEFAULT_ROTATION
      groupRef.current.rotation.x += DEFAULT_ROTATION
    }
  })

  return (
    <group ref={groupRef} rotation={[offset, 0, 0]} scale={[30, 30, 60]}>
      <mesh ref={meshRef} castShadow receiveShadow geometry={(gltf.scene.children[0] as Mesh).geometry}>
        <meshStandardMaterial color="#12FF80" roughness={1} metalness={0.5} />
      </mesh>
    </group>
  )
}
