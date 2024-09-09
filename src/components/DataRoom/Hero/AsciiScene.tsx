import { SafeLogo } from './SafeLogo'
import type { MotionValue } from 'framer-motion'
import { CameraController } from './CameraController'
import { EffectComposer } from '@react-three/postprocessing'
import AsciiShader from './AsciiShader'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import { Canvas } from '@react-three/fiber'

const AsciiScene = ({ yPosition, zoomLevel }: { yPosition: MotionValue<number>; zoomLevel: MotionValue<number> }) => {
  const isMobile = useIsMediumScreen()

  return (
    <Canvas orthographic camera={{ position: [0, 0, 10], zoom: isMobile ? 70 : 80 }}>
      {/* CameraController manages camera position and zoom based on scroll and device type */}
      <CameraController zoomLevel={zoomLevel} />

      {!isMobile && (
        <>
          <group position={[-6, 0, 0]}>
            <SafeLogo offset={Math.PI / 2} yPosition={yPosition} />
          </group>
          <group position={[6, 0, 0]}>
            <SafeLogo offset={-Math.PI / 2} yPosition={yPosition} />
          </group>
        </>
      )}
      <group position={[0, 0, 0]}>
        <SafeLogo offset={0} yPosition={yPosition} />
      </group>
      <group>
        <directionalLight color="#aaa" intensity={8} position={[0, 5, -9]} />
        <directionalLight color="#aaa" intensity={12} position={[5, 1, -1]} />
        <directionalLight color="#aaa" intensity={6} position={[-5, 0, 0]} />
        <directionalLight color="#FFF" intensity={2} position={[0, 0, 10]} />
      </group>

      {/* EffectComposer applies post-processing effects, in this case an ASCII effect via AsciiWrapper */}
      <EffectComposer multisampling={8}>
        <AsciiShader />
      </EffectComposer>
    </Canvas>
  )
}

export default AsciiScene
