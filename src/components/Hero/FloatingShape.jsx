// src/components/Hero/FloatingShape.jsx
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import {
  Float,
  OrbitControls,
  Sparkles,
} from '@react-three/drei';
import * as THREE from 'three';

// ─── Baked gradient texture — deep navy → United blue → sky blue ─────────────
const useGradientTexture = () =>
  useMemo(() => {
    const size = 256;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const g = ctx.createLinearGradient(0, 0, size, size);
    g.addColorStop(0,    '#002244'); // Deep Navy
    g.addColorStop(0.4,  '#005da6'); // United Blue
    g.addColorStop(0.8,  '#00b2ff'); // Sky Blue
    g.addColorStop(1,    '#627d98'); // Muted slate gray
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, []);

// ─── Scene ────────────────────────────────────────────────────────────────────
const FloatingShape = () => {
  const knotRef = useRef();
  const wireframeRef = useRef();
  const innerRingRef = useRef();
  const outerRingRef = useRef();
  const gradientTexture = useGradientTexture();

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    // Slow, elegant rotation for the central sculpture
    if (knotRef.current) {
      knotRef.current.rotation.y = t * 0.15;
      knotRef.current.rotation.x = t * 0.08;
    }

    // Spin the wireframe overlay slightly differently to create depth
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = t * 0.15;
      wireframeRef.current.rotation.x = t * 0.08;
    }

    // Gyroscopic tech rings rotating on different axes
    if (innerRingRef.current) {
      innerRingRef.current.rotation.y = -t * 0.25;
      innerRingRef.current.rotation.x = t * 0.12;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.x = -t * 0.18;
      outerRingRef.current.rotation.z = t * 0.22;
    }
  });

  return (
    <>
      {/* ── Lighting setup ───────────────────────────────────────────────── */}
      <ambientLight intensity={0.4} />

      {/* Main Key light — warm white */}
      <directionalLight
        position={[8, 8, 8]}
        intensity={2.2}
        color="#ffffff"
      />

      {/* Accent Point Light — United Blue */}
      <pointLight
        position={[-6, 4, -4]}
        intensity={3.0}
        color="#005da6"
      />

      {/* Rim Point Light — Sky Blue for depth */}
      <pointLight
        position={[4, -6, -6]}
        intensity={2.0}
        color="#00b2ff"
      />

      {/* ── Interaction controls ────────────────────────────────────────── */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
        rotateSpeed={0.5}
      />

      {/* ── Float group ─────────────────────────────────────────────────── */}
      <Float
        speed={1.5}
        rotationIntensity={0.4}
        floatIntensity={1.3}
        floatingRange={[-0.18, 0.18]}
      >
        <group>
          {/* Central 3D Procedural Airplane Model */}
          <group ref={knotRef} scale={1.3}>
            {/* Fuselage (Main Body) */}
            <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.16, 0.16, 2.0, 18]} />
              <meshStandardMaterial
                color="#ffffff"
                roughness={0.15}
                metalness={0.9}
              />
            </mesh>

            {/* Nose Cone */}
            <mesh position={[0, 0, 1.0]} rotation={[Math.PI / 2, 0, 0]}>
              <coneGeometry args={[0.16, 0.35, 18]} />
              <meshStandardMaterial
                color="#002244" // Deep Navy nose cone accent
                roughness={0.15}
                metalness={0.95}
              />
            </mesh>

            {/* Main Wings */}
            <mesh position={[0, -0.02, 0.1]} rotation={[0, 0, 0]}>
              <boxGeometry args={[3.2, 0.025, 0.48]} />
              <meshStandardMaterial
                color="#ffffff"
                roughness={0.2}
                metalness={0.8}
              />
            </mesh>

            {/* Left Jet Engine (under wing) */}
            <mesh position={[-0.65, -0.12, 0.12]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.08, 0.08, 0.4, 12]} />
              <meshStandardMaterial
                color="#005da6" // United Blue engine cowl
                roughness={0.2}
                metalness={0.9}
              />
            </mesh>

            {/* Right Jet Engine (under wing) */}
            <mesh position={[0.65, -0.12, 0.12]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.08, 0.08, 0.4, 12]} />
              <meshStandardMaterial
                color="#005da6"
                roughness={0.2}
                metalness={0.9}
              />
            </mesh>

            {/* Horizontal Tail Stabilizers */}
            <mesh position={[0, 0.02, -0.85]}>
              <boxGeometry args={[1.0, 0.018, 0.22]} />
              <meshStandardMaterial
                color="#ffffff"
                roughness={0.2}
                metalness={0.8}
              />
            </mesh>

            {/* Vertical Fin / Tail Stabilizer */}
            <mesh position={[0, 0.2, -0.85]} rotation={[0.08, 0, 0]}>
              <boxGeometry args={[0.025, 0.38, 0.22]} />
              <meshStandardMaterial
                color="#002244" // Navy tail section
                roughness={0.15}
                metalness={0.9}
              />
            </mesh>
          </group>

          {/* Gyroscopic Inner Tracker Ring */}
          <mesh ref={innerRingRef} scale={1.85}>
            <torusGeometry args={[1, 0.012, 12, 64]} />
            <meshStandardMaterial
              color="#005da6"
              emissive="#00b2ff"
              emissiveIntensity={0.6}
              transparent
              opacity={0.4}
            />
          </mesh>

          {/* Gyroscopic Outer Tracker Ring */}
          <mesh ref={outerRingRef} scale={2.15}>
            <torusGeometry args={[1, 0.01, 12, 64]} />
            <meshStandardMaterial
              color="#002244"
              emissive="#005da6"
              emissiveIntensity={0.4}
              transparent
              opacity={0.3}
            />
          </mesh>
        </group>
      </Float>

      {/* Subtle atmospheric particles */}
      <Sparkles
        count={20}
        scale={6}
        size={1.0}
        speed={0.12}
        opacity={0.25}
        color="#00b2ff"
      />
    </>
  );
};

export default FloatingShape;