'use client';

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface MeshProps {
  mousePosition: React.MutableRefObject<{ x: number; y: number }>;
}

function InteractiveMesh({ mousePosition }: MeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  const geometry = useMemo(() => {
    return new THREE.IcosahedronGeometry(2, 4);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const targetX = (mousePosition.current.x * viewport.width) / 4;
    const targetY = (mousePosition.current.y * viewport.height) / 4;
    
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetY * 0.3 + state.clock.elapsedTime * 0.1,
      0.05
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetX * 0.3 + state.clock.elapsedTime * 0.15,
      0.05
    );
    meshRef.current.position.x = THREE.MathUtils.lerp(
      meshRef.current.position.x,
      targetX * 0.5,
      0.03
    );
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      targetY * 0.5,
      0.03
    );
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} geometry={geometry} scale={1.2}>
        <MeshDistortMaterial
          color="#6366F1"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.6}
        />
      </mesh>
      <mesh geometry={geometry} scale={1.4}>
        <meshBasicMaterial
          color="#06B6D4"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
}

function MobileGlow() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshBasicMaterial
          color="#6366F1"
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
    </Float>
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
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#6366F1" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06B6D4" />
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
