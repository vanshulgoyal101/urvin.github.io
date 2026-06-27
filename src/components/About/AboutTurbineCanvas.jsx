// src/components/About/AboutTurbineCanvas.jsx
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

const TurbineFan = () => {
  const fanRef = useRef();
  const statorRef = useRef();

  // Create 18 turbine fan blades representing Urvin's 18 years at United Airlines
  const bladeCount = 18;
  const blades = useMemo(() => {
    return Array.from({ length: bladeCount }, (_, i) => {
      const angle = (i * Math.PI * 2) / bladeCount;
      return {
        id: i,
        rotationZ: angle,
      };
    });
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Fast, smooth rotation of the turbine blades
    if (fanRef.current) {
      fanRef.current.rotation.z = -t * 2.5;
    }
    // Stator/guide vanes rotate extremely slowly in the background
    if (statorRef.current) {
      statorRef.current.rotation.z = t * 0.1;
    }
  });

  return (
    <group>
      {/* Outer Engine Cowl / Casing */}
      <mesh rotation={[0, 0, 0]}>
        <torusGeometry args={[1.2, 0.08, 16, 100]} />
        <meshStandardMaterial
          color="#002244" // United Navy casing
          roughness={0.12}
          metalness={0.95}
        />
      </mesh>

      {/* Inner Engine Ring Accent */}
      <mesh rotation={[0, 0, 0]} position={[0, 0, 0.05]}>
        <torusGeometry args={[1.18, 0.015, 8, 100]} />
        <meshStandardMaterial
          color="#00b2ff" // Electric Sky Blue rim accent
          emissive="#005da6"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Rotating Fan Assembly */}
      <group ref={fanRef}>
        {/* Central Spinner Nose Cone */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <coneGeometry args={[0.26, 0.6, 32]} />
          <meshStandardMaterial
            color="#ffffff"
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>

        {/* Decorative Spiral on Nose Cone (standard on commercial jet turbines) */}
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.31]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#002244" roughness={0.5} />
        </mesh>

        {/* The 18 Blades */}
        {blades.map((blade) => (
          <group key={blade.id} rotation={[0, 0, blade.rotationZ]}>
            {/* Tilt the blade to simulate aerodynamic pitch */}
            <mesh position={[0, 0.6, 0.02]} rotation={[0, 0.35, 0]}>
              <boxGeometry args={[0.06, 0.95, 0.025]} />
              <meshStandardMaterial
                color="#e2e8f0" // Silver metallic blades
                roughness={0.15}
                metalness={0.92}
              />
            </mesh>
          </group>
        ))}
      </group>

      {/* Stationary Guide Vanes (Stator) behind the fan */}
      <group ref={statorRef} position={[0, 0, -0.2]}>
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * Math.PI * 2) / 12;
          return (
            <group key={i} rotation={[0, 0, angle]}>
              <mesh position={[0, 0.6, 0]}>
                <boxGeometry args={[0.04, 1.0, 0.015]} />
                <meshStandardMaterial
                  color="#1e293b"
                  roughness={0.4}
                  metalness={0.7}
                  transparent
                  opacity={0.7}
                />
              </mesh>
            </group>
          );
        })}
      </group>
    </group>
  );
};

const AboutTurbineCanvas = () => {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '380px', position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        
        {/* Shiny key lights for metallic reflection */}
        <directionalLight position={[5, 5, 5]} intensity={1.8} color="#ffffff" />
        <pointLight position={[-4, -4, 2]} intensity={1.5} color="#00b2ff" />
        <pointLight position={[3, -3, -2]} intensity={1.0} color="#005da6" />

        <OrbitControls enableZoom={false} autoRotate={false} />
        
        <Float speed={2} rotationIntensity={0.15} floatIntensity={0.6}>
          <TurbineFan />
        </Float>
      </Canvas>
    </div>
  );
};

export default AboutTurbineCanvas;
