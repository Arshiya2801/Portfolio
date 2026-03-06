import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from './ThemeContext';

// 1. Reactive Particle Field (Now Global)
const GlobalParticleSystem = () => {
    const pointsRef = useRef();
    const { pointer } = useThree();
    const { theme } = useTheme();
    const particleCount = 2500; // Increased particle frequency

    // Create stable random positions
    const [positions, initialPositions] = useMemo(() => {
        const pos = new Float32Array(particleCount * 3);
        const init = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            // Spread particles much wider/taller to cover the full width and height
            const x = (Math.random() - 0.5) * 100; // Significantly wider X spread to fill right side
            const y = (Math.random() - 0.5) * 100; // Huge Y spread
            const z = (Math.random() - 0.5) * 30 - 5;
            pos[i * 3] = x;
            pos[i * 3 + 1] = y;
            pos[i * 3 + 2] = z;
            init[i * 3] = x;
            init[i * 3 + 1] = y;
            init[i * 3 + 2] = z;
        }
        return [pos, init];
    }, []);

    useFrame((state) => {
        if (!pointsRef.current) return;
        const positions = pointsRef.current.geometry.attributes.position.array;

        // Convert screen normalized pointer (-1 to 1) to rough world space coordinates
        const mouseX = pointer.x * 20;
        const mouseY = pointer.y * 20;

        for (let i = 0; i < particleCount; i++) {
            const idx = i * 3;
            // Native slow drifting
            positions[idx] += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.005;
            positions[idx + 1] += Math.cos(state.clock.elapsedTime * 0.3 + i) * 0.005;

            // Fluid Repulsion physics
            const dx = positions[idx] - mouseX;
            const dy = positions[idx + 1] - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const repelRadius = 4; // Interaction distance

            if (dist < repelRadius) {
                // Push away based on proximity
                const force = (repelRadius - dist) / repelRadius;
                positions[idx] += (dx / dist) * force * 0.2;
                positions[idx + 1] += (dy / dist) * force * 0.2;
            } else {
                // Extremely slow snap back to initial positions to prevent permanent drifting off-screen
                positions[idx] += (initialPositions[idx] - positions[idx]) * 0.01;
                positions[idx + 1] += (initialPositions[idx + 1] - positions[idx + 1]) * 0.01;
            }
        }
        pointsRef.current.geometry.attributes.position.needsUpdate = true;

        // Very slow global rotation of the entire field
        pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    });

    const particleColor = theme === 'dark' ? '#f97316' : '#2563eb'; // Orange for dark mode, subtle blue for light mode

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.15}
                color={particleColor}
                transparent
                opacity={0.5}
                sizeAttenuation={true}
            />
        </points>
    );
};

const GlobalBackground = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0 }}>
            <Canvas camera={{ position: [0, 0, 15], fov: 75 }} gl={{ alpha: true, antialias: false }}>
                <ambientLight intensity={0.5} />
                <GlobalParticleSystem />
            </Canvas>
        </div>
    );
};

export default GlobalBackground;
