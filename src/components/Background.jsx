import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

function CustomStars() {
    const points = useRef();

    const [positions] = useMemo(() => {
        const pos = new Float32Array(3000);
        for (let i = 0; i < 3000; i++) {
            pos[i] = (Math.random() - 0.5) * 60; // Slightly wider spread
        }
        return [pos];
    }, []);

    useFrame((state) => {
        points.current.rotation.y += 0.0001;
        const time = state.clock.getElapsedTime();
        points.current.material.opacity = 0.4 + Math.sin(time * 0.5) * 0.15;
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.04}
                color="#ffffff"
                transparent
                opacity={0.5}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

export default function Background() {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            pointerEvents: 'none',
            background: '#080808'
        }}>
            <Canvas
                camera={{ position: [0, 0, 10], fov: 65 }}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={0.2} />
                <CustomStars />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <fog attach="fog" args={['#080808', 5, 25]} />
            </Canvas>
        </div>
    );
}
