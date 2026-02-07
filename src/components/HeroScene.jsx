import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Float } from '@react-three/drei';

const Sculpture = () => {
  const mainRef = useRef();
  const wireRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mainRef.current) {
      mainRef.current.rotation.y = time * 0.2;
      mainRef.current.rotation.x = time * 0.1;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = time * 0.2;
      wireRef.current.rotation.x = time * 0.1;
    }
  });

  return (
    <group>
      {/* The "Deep Mesh" - Black Liquid Metal */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Icosahedron ref={mainRef} args={[1, 15]} scale={1.5}>
          <MeshDistortMaterial
            color="#080808"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={1}
            emissive="#111"
            emissiveIntensity={0.5}
          />
        </Icosahedron>
      </Float>

      {/* The "Wireframe Layer" - Technical Aspect */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Icosahedron ref={wireRef} args={[1, 15]} scale={1.51}>
          <meshBasicMaterial
            color="#ffffff"
            wireframe
            transparent
            opacity={0.05}
          />
        </Icosahedron>
      </Float>

      {/* Subtle Outer Glow / Atmosphere */}
      <Icosahedron args={[1, 4]} scale={2.5}>
        <meshBasicMaterial color="#ffffff" transparent opacity={0.02} wireframe />
      </Icosahedron>
    </group>
  );
}

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#333" />
      <spotLight position={[0, 5, 10]} angle={0.4} penumbra={1} intensity={2} />

      <Sculpture />

      <fog attach="fog" args={['#080808', 5, 15]} />
    </>
  );
};

export default function HeroScene() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 65 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
