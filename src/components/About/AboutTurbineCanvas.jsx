// src/components/About/AboutTurbineCanvas.jsx
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

// ─── 1. The Flying Bird Mesh (Stage 0) ────────────────────────────────────────
const BirdModel = ({ active }) => {
  const birdRef = useRef();
  const leftWingRef = useRef();
  const rightWingRef = useRef();

  useFrame((state) => {
    if (!active) return;
    const t = state.clock.getElapsedTime();
    // Fast wing flapping
    if (leftWingRef.current) {
      leftWingRef.current.rotation.z = Math.sin(t * 8) * 0.45;
    }
    if (rightWingRef.current) {
      rightWingRef.current.rotation.z = -Math.sin(t * 8) * 0.45;
    }
    // Gentle bobbing up and down
    if (birdRef.current) {
      birdRef.current.position.y = Math.sin(t * 2) * 0.08;
    }
  });

  return (
    <group ref={birdRef}>
      {/* Bird Body */}
      <mesh>
        <cylinderGeometry args={[0.07, 0.04, 0.5, 12]} />
        <meshStandardMaterial color="#64748b" roughness={0.3} metalness={0.2} />
      </mesh>
      {/* Head */}
      <mesh position={[0, 0.28, 0]}>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshStandardMaterial color="#64748b" />
      </mesh>
      {/* Beak */}
      <mesh position={[0, 0.34, 0.03]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.03, 0.1, 8]} />
        <meshStandardMaterial color="#f59e0b" />
      </mesh>
      {/* Left Wing */}
      <group ref={leftWingRef} position={[-0.05, 0.05, 0]}>
        <mesh position={[-0.32, 0, 0]}>
          <boxGeometry args={[0.6, 0.02, 0.22]} />
          <meshStandardMaterial color="#475569" roughness={0.4} />
        </mesh>
      </group>
      {/* Right Wing */}
      <group ref={rightWingRef} position={[0.05, 0.05, 0]}>
        <mesh position={[0.32, 0, 0]}>
          <boxGeometry args={[0.6, 0.02, 0.22]} />
          <meshStandardMaterial color="#475569" roughness={0.4} />
        </mesh>
      </group>
    </group>
  );
};

// ─── 2. The Paper Plane Mesh (Stage 1) ────────────────────────────────────────
const PaperPlaneModel = ({ active }) => {
  const planeRef = useRef();

  useFrame((state) => {
    if (!active) return;
    const t = state.clock.getElapsedTime();
    // Glide tilt animation
    if (planeRef.current) {
      planeRef.current.rotation.y = Math.sin(t * 1.5) * 0.15;
      planeRef.current.rotation.z = Math.cos(t * 1.5) * 0.1;
    }
  });

  return (
    <group ref={planeRef} rotation={[0, 0, 0]}>
      {/* Main Body / Fold */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.015, 0.03, 0.7, 5]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.8} />
      </mesh>
      {/* Left Wing (Folded) */}
      <mesh position={[-0.22, 0.08, -0.05]} rotation={[0.1, 0, -0.2]}>
        <boxGeometry args={[0.4, 0.01, 0.45]} />
        <meshStandardMaterial color="#f1f5f9" roughness={0.9} />
      </mesh>
      {/* Right Wing (Folded) */}
      <mesh position={[0.22, 0.08, -0.05]} rotation={[0.1, 0, 0.2]}>
        <boxGeometry args={[0.4, 0.01, 0.45]} />
        <meshStandardMaterial color="#f1f5f9" roughness={0.9} />
      </mesh>
    </group>
  );
};

// ─── 3. The Wright Flyer Biplane Mesh (Stage 2) ──────────────────────────────
const WrightFlyerModel = ({ active }) => {
  const flyerRef = useRef();
  const propRef = useRef();

  useFrame((state) => {
    if (!active) return;
    const t = state.clock.getElapsedTime();
    // Propeller spinning
    if (propRef.current) {
      propRef.current.rotation.y = t * 12;
    }
    // Gentle sway
    if (flyerRef.current) {
      flyerRef.current.rotation.z = Math.sin(t * 1.5) * 0.05;
    }
  });

  return (
    <group ref={flyerRef}>
      {/* Lower Wing */}
      <mesh position={[0, -0.15, 0]}>
        <boxGeometry args={[1.7, 0.02, 0.35]} />
        <meshStandardMaterial color="#ebdcb9" roughness={0.7} />
      </mesh>
      {/* Upper Wing */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[1.7, 0.02, 0.35]} />
        <meshStandardMaterial color="#ebdcb9" roughness={0.7} />
      </mesh>
      {/* Struts (Cylinders connecting wings) */}
      {[-0.7, -0.3, 0.3, 0.7].map((x, i) => (
        <group key={i}>
          <mesh position={[x, 0.02, -0.1]}>
            <cylinderGeometry args={[0.01, 0.01, 0.35, 6]} />
            <meshStandardMaterial color="#78350f" metalness={0.1} />
          </mesh>
          <mesh position={[x, 0.02, 0.1]}>
            <cylinderGeometry args={[0.01, 0.01, 0.35, 6]} />
            <meshStandardMaterial color="#78350f" metalness={0.1} />
          </mesh>
        </group>
      ))}
      {/* Center Wood Frame */}
      <mesh position={[0, 0.02, 0]}>
        <boxGeometry args={[0.15, 0.05, 0.65]} />
        <meshStandardMaterial color="#78350f" />
      </mesh>
      {/* Rudder / Tail */}
      <mesh position={[0, 0.02, -0.4]}>
        <boxGeometry args={[0.02, 0.25, 0.15]} />
        <meshStandardMaterial color="#ebdcb9" />
      </mesh>
      {/* Spinning Propeller Hub */}
      <group ref={propRef} position={[0, 0.02, -0.31]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.06, 8]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
        {/* Propeller Blades */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.48, 0.02, 0.01]} />
          <meshStandardMaterial color="#78350f" />
        </mesh>
      </group>
    </group>
  );
};

// ─── 4. The Modern Commercial Jet Mesh (Stage 3) ──────────────────────────────
const ModernJetModel = ({ active }) => {
  const jetRef = useRef();

  useFrame((state) => {
    if (!active) return;
    const t = state.clock.getElapsedTime();
    if (jetRef.current) {
      jetRef.current.rotation.y = t * 0.2;
    }
  });

  return (
    <group ref={jetRef}>
      {/* Fuselage */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.11, 0.11, 1.2, 16]} />
        <meshStandardMaterial color="#ffffff" roughness={0.15} metalness={0.8} />
      </mesh>
      {/* Nose Cone */}
      <mesh position={[0, 0.6, 0]}>
        <sphereGeometry args={[0.11, 16, 16]} />
        <meshStandardMaterial color="#002244" roughness={0.1} />
      </mesh>
      {/* Main Wings */}
      <mesh position={[0, -0.05, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[1.9, 0.016, 0.28]} />
        <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.7} />
      </mesh>
      {/* Left Jet Engine */}
      <mesh position={[-0.4, -0.11, -0.05]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.22, 10]} />
        <meshStandardMaterial color="#005da6" metalness={0.9} />
      </mesh>
      {/* Right Jet Engine */}
      <mesh position={[0.4, -0.11, -0.05]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.22, 10]} />
        <meshStandardMaterial color="#005da6" metalness={0.9} />
      </mesh>
      {/* Tail Fin */}
      <mesh position={[0, -0.5, 0.12]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[0.018, 0.25, 0.16]} />
        <meshStandardMaterial color="#002244" roughness={0.15} />
      </mesh>
    </group>
  );
};

// ─── 5. The Evolution Scenery Background ──────────────────────────────────────
const SceneryBackground = ({ stage }) => {
  return (
    <group position={[0, -1.3, -1.5]}>
      {/* Ground plane reference line */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 4]} />
        <meshStandardMaterial color="#0c1d33" roughness={0.9} transparent opacity={0.3} />
      </mesh>

      {/* Stage 0 Scenery: Pine Trees */}
      <group visible={stage === 0}>
        {/* Pine Tree 1 */}
        <group position={[-1.2, 0, 0]}>
          <mesh position={[0, 0.2, 0]}>
            <cylinderGeometry args={[0.03, 0.03, 0.4, 8]} />
            <meshStandardMaterial color="#78350f" />
          </mesh>
          <mesh position={[0, 0.55, 0]}>
            <coneGeometry args={[0.2, 0.5, 8]} />
            <meshStandardMaterial color="#15803d" roughness={0.8} />
          </mesh>
        </group>
        {/* Pine Tree 2 */}
        <group position={[1.4, 0, -0.5]}>
          <mesh position={[0, 0.15, 0]}>
            <cylinderGeometry args={[0.025, 0.025, 0.3, 8]} />
            <meshStandardMaterial color="#78350f" />
          </mesh>
          <mesh position={[0, 0.45, 0]}>
            <coneGeometry args={[0.16, 0.4, 8]} />
            <meshStandardMaterial color="#16a34a" roughness={0.8} />
          </mesh>
        </group>
      </group>

      {/* Stage 1 Scenery: Windy Hills */}
      <group visible={stage === 1}>
        <mesh position={[-1.5, -0.3, -0.5]}>
          <sphereGeometry args={[0.6, 16, 16]} />
          <meshStandardMaterial color="#14b8a6" roughness={0.9} />
        </mesh>
        <mesh position={[1.2, -0.2, -0.8]}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial color="#0d9488" roughness={0.9} />
        </mesh>
      </group>

      {/* Stage 2 Scenery: Wooden Hangar / Kitty Hawk Barn */}
      <group visible={stage === 2}>
        <group position={[-1.1, 0.2, -0.2]} rotation={[0, 0.3, 0]}>
          {/* Barn walls */}
          <mesh>
            <boxGeometry args={[0.5, 0.4, 0.5]} />
            <meshStandardMaterial color="#991b1b" roughness={0.7} />
          </mesh>
          {/* Barn roof */}
          <mesh position={[0, 0.28, 0]} rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[0.38, 0.38, 0.52]} />
            <meshStandardMaterial color="#7f1d1d" />
          </mesh>
        </group>
      </group>

      {/* Stage 3 Scenery: Modern City Skyscrapers */}
      <group visible={stage === 3}>
        {/* Building 1 */}
        <mesh position={[-1.2, 0.6, -0.2]}>
          <boxGeometry args={[0.25, 1.2, 0.25]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Building 2 */}
        <mesh position={[-0.8, 0.8, -0.6]}>
          <boxGeometry args={[0.3, 1.6, 0.3]} />
          <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Building 3 */}
        <mesh position={[1.0, 0.7, -0.4]}>
          <boxGeometry args={[0.28, 1.4, 0.28]} />
          <meshStandardMaterial color="#334155" metalness={0.85} roughness={0.15} />
        </mesh>
        {/* Building 4 */}
        <mesh position={[1.4, 0.5, 0.1]}>
          <boxGeometry args={[0.22, 1.0, 0.22]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </group>
  );
};

// ─── Main Evolution Stage Selector Component ──────────────────────────────────
const EvolutionModelContainer = ({ stage }) => {
  const modelRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Global slow rotation of the active flight model
    if (modelRef.current) {
      modelRef.current.rotation.y = t * 0.45;
      modelRef.current.rotation.x = Math.sin(t * 0.5) * 0.08;
    }
  });

  return (
    <group ref={modelRef} position={[0, 0.1, 0]} scale={1.2}>
      {/* Morph / Fade model scale based on active stage */}
      <group scale={stage === 0 ? 1.0 : 0.001} visible={stage === 0}>
        <BirdModel active={stage === 0} />
      </group>
      <group scale={stage === 1 ? 1.15 : 0.001} visible={stage === 1}>
        <PaperPlaneModel active={stage === 1} />
      </group>
      <group scale={stage === 2 ? 0.95 : 0.001} visible={stage === 2}>
        <WrightFlyerModel active={stage === 2} />
      </group>
      <group scale={stage === 3 ? 1.1 : 0.001} visible={stage === 3}>
        <ModernJetModel active={stage === 3} />
      </group>
    </group>
  );
};

const AboutTurbineCanvas = () => {
  const [stage, setStage] = useState(0);

  // Evolve stage every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const stageLabels = [
    "Origin: The Flight of Birds",
    "Imagination: The Origami Glider",
    "Pioneering: The Wright Flyer (1903)",
    "Modern Era: Commercial Jet Airliner"
  ];

  return (
    <div style={{ width: '100%', height: '100%', minHeight: '380px', position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 0.3, 2.6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.65} />
        
        {/* Scenic Lights */}
        <directionalLight position={[4, 5, 3]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-3, -3, 2]} intensity={1.2} color="#00b2ff" />
        <pointLight position={[3, -2, -2]} intensity={1.0} color="#005da6" />

        <OrbitControls enableZoom={false} autoRotate={false} />
        
        <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.5}>
          <EvolutionModelContainer stage={stage} />
        </Float>

        <SceneryBackground stage={stage} />
      </Canvas>

      {/* Interactive Telemetry Overlay to indicate the flight evolution stage */}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(0, 34, 68, 0.75)',
        color: '#ffffff',
        padding: '6px 16px',
        borderRadius: '20px',
        fontSize: '0.85rem',
        fontWeight: '600',
        whiteSpace: 'nowrap',
        border: '1px solid rgba(0, 93, 166, 0.4)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        transition: 'all 0.3s ease'
      }}>
        <span style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#00b2ff',
          display: 'inline-block',
          boxShadow: '0 0 8px #00b2ff'
        }} />
        {stageLabels[stage]}
      </div>
    </div>
  );
};

export default AboutTurbineCanvas;
