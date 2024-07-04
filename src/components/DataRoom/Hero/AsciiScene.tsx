import { Canvas } from '@react-three/fiber'
import { SafeLogo } from './SafeLogo'
import type { MotionValue } from 'framer-motion'
import { CameraController } from './utils'
import { EffectComposer } from '@react-three/postprocessing'
import AsciiWrapper from './AsciiWrapper'

const AsciiScene = ({
  isMobile,
  yPosition,
  zoomLevel,
}: {
  isMobile: boolean
  yPosition: MotionValue<number>
  zoomLevel: MotionValue<number>
}) => {
  return (
    <Canvas orthographic camera={{ position: [0, 0, 10], zoom: isMobile ? 70 : 80 }}>
      <CameraController zoomLevel={zoomLevel} isMobile={isMobile} />
      {!isMobile && (
        <>
          <group position={[-6, 0, 0]}>
            <SafeLogo isMobile={false} offset={Math.PI / 2} yPosition={yPosition} />
          </group>
          <group position={[6, 0, 0]}>
            <SafeLogo isMobile={false} offset={-Math.PI / 2} yPosition={yPosition} />
          </group>
        </>
      )}
      <group position={[0, 0, 0]}>
        <SafeLogo isMobile={isMobile} offset={0} yPosition={yPosition} />
      </group>
      <group>
        <directionalLight color="#aaa" intensity={8} position={[0, 5, -9]} />
        <directionalLight color="#aaa" intensity={12} position={[5, 1, -1]} />
        <directionalLight color="#aaa" intensity={6} position={[-5, 0, 0]} />
        <directionalLight color="#FFF" intensity={2} position={[0, 0, 10]} />
      </group>
      <EffectComposer multisampling={8}>
        <AsciiWrapper />
      </EffectComposer>
    </Canvas>
  )
}

export default AsciiScene
