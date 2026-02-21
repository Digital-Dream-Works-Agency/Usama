'use client';

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface MeshProps {
  mousePosition: React.MutableRefObject<{ x: number; y: number }>;
}

function InteractiveMesh({ mousePosition }: MeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (!meshRef.current || !glowRef.current) return;
    
    const targetX = (mousePosition.current.x * viewport.width) / 4;
    const targetY = (mousePosition.current.y * viewport.height) / 4;
    
    // Main sphere rotation
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetY * 0.2 + state.clock.elapsedTime * 0.05,
      0.03
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetX * 0.2 + state.clock.elapsedTime * 0.08,
      0.03
    );
    
    // Glow follows with offset
    glowRef.current.rotation.x = meshRef.current.rotation.x * 0.5;
    glowRef.current.rotation.y = meshRef.current.rotation.y * 0.5;
    
    // Subtle position movement
    meshRef.current.position.x = THREE.MathUtils.lerp(
      meshRef.current.position.x,
      targetX * 0.3,
      0.02
    );
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      targetY * 0.3,
      0.02
    );
  });

  return (
    <group position={[0.5, 0, 0]}>
      {/* Main distorted sphere */}
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.3}>
        <mesh ref={meshRef} scale={2.2}>
          <icosahedronGeometry args={[1, 8]} />
          <MeshDistortMaterial
            color="#A855F7"
            attach="material"
            distort={0.25}
            speed={1.5}
            roughness={0.15}
            metalness={0.9}
            transparent
            opacity={0.85}
          />
        </mesh>
      </Float>
      
      {/* Outer glow sphere */}
      <mesh ref={glowRef} scale={2.8}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#EC4899"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>
      
      {/* Inner energy core */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh scale={1.2}>
          <octahedronGeometry args={[1, 0]} />
          <meshBasicMaterial
            color="#3B82F6"
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>
      </Float>
      
      {/* Particle ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} scale={3}>
        <torusGeometry args={[1, 0.01, 16, 100]} />
        <meshBasicMaterial
          color="#A855F7"
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}

function MobileGlow() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current || !ringRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.05;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    ringRef.current.rotation.z = state.clock.elapsedTime * 0.1;
  });

  return (
    <group position={[0.5, 0, 0]}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={meshRef} scale={1.8}>
          <icosahedronGeometry args={[1, 2]} />
          <meshBasicMaterial
            color="#A855F7"
            wireframe
            transparent
            opacity={0.5}
          />
        </mesh>
      </Float>
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]} scale={2.5}>
        <torusGeometry args={[1, 0.02, 16, 64]} />
        <meshBasicMaterial
          color="#EC4899"
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}

interface Hero3DCanvasProps {
  isMobile: boolean;
  mousePosition: React.MutableRefObject<{ x: number; y: number }>;
}

function Hero3DCanvas({ isMobile, mousePosition }: Hero3DCanvasProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#A855F7" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#EC4899" />
      <pointLight position={[0, -10, 5]} intensity={0.5} color="#3B82F6" />
      <Suspense fallback={null}>
        {isMobile ? (
          <MobileGlow />
        ) : (
          <InteractiveMesh mousePosition={mousePosition} />
        )}
      </Suspense>
    </Canvas>
  );
}

export default function Hero3D() {
  const mousePosition = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mousePosition.current = {
      x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
      y: -((e.clientY - rect.top) / rect.height) * 2 + 1,
    };
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 z-0"
      data-testid="hero-3d-canvas"
    >
      {/* Desktop: Full 3D */}
      <div className="hidden md:block w-full h-full">
        <Hero3DCanvas isMobile={false} mousePosition={mousePosition} />
      </div>
      {/* Mobile: Lighter version */}
      <div className="block md:hidden w-full h-full">
        <Hero3DCanvas isMobile={true} mousePosition={mousePosition} />
      </div>
    </div>
  );
}
