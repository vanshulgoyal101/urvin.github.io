// src/components/About/AboutEvolution2D.jsx
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Styled Components ────────────────────────────────────────────────────────

const GraphicPanel = styled.div`
  width: 100%;
  aspect-ratio: 1.1 / 1;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 34, 68, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-lg);
  
  @media (max-width: 768px) {
    aspect-ratio: 1.2 / 1;
  }
`;

const CanvasArea = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackgroundScenery = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  pointer-events: none;
  z-index: 1;
`;

const ModelWrapper = styled(motion.div)`
  position: relative;
  z-index: 2;
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterControls = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  z-index: 3;
`;

const StageLabel = styled(motion.div)`
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-text-primary);
  text-align: center;
  min-height: 24px;
`;

const NavigationDots = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $active }) => $active ? 'var(--color-accent-primary)' : 'var(--color-border)'};
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--color-accent-primary);
    transform: scale(1.2);
  }
`;

// ─── Stage SVG Components ──────────────────────────────────────────────────────

// 1. Hatching Egg
const EggSvg = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="var(--color-accent-primary)" strokeWidth="2.5" strokeLinecap="round">
    {/* Nest */}
    <path d="M20 75 C 30 85, 70 85, 80 75" stroke="var(--color-text-secondary)" strokeWidth="2" />
    <path d="M15 78 C 35 88, 65 88, 85 78" stroke="var(--color-text-secondary)" strokeWidth="1.5" />
    
    {/* Egg Base */}
    <motion.path 
      d="M30 65 C 30 40, 70 40, 70 65 C 70 78, 30 78, 30 65 Z" 
      animate={{ rotate: [0, -3, 3, -3, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Crack Lines */}
    <path d="M50 42 L 48 50 L 53 55 L 49 63" stroke="var(--color-text-secondary)" />
  </svg>
);

// 2. Hatchling Peeking Out
const HatchlingSvg = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="var(--color-accent-primary)" strokeWidth="2.5" strokeLinecap="round">
    {/* Nest */}
    <path d="M20 75 C 30 85, 70 85, 80 75" stroke="var(--color-text-secondary)" strokeWidth="2" />
    
    {/* Broken Lower Egg Shell */}
    <path d="M30 65 C 30 78, 70 78, 70 65 L 65 58 L 57 62 L 50 56 L 43 62 L 35 57 Z" />
    
    {/* Bird Head Peeking Out */}
    <motion.g 
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Head */}
      <circle cx="50" cy="45" r="14" />
      {/* Beak */}
      <path d="M64 43 L 73 45 L 64 48 Z" fill="var(--color-accent-secondary)" stroke="var(--color-accent-secondary)" />
      {/* Eye */}
      <circle cx="56" cy="41" r="1.5" fill="var(--color-accent-primary)" />
    </motion.g>
  </svg>
);

// 3. Soaring Bird
const SoaringBirdSvg = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="var(--color-accent-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Flying Bird Body */}
    <motion.g
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M35 50 C 45 48, 55 48, 65 50 C 58 53, 42 53, 35 50 Z" />
      {/* Wing Flap Animation */}
      <motion.path 
        d="M50 49 C 45 30, 25 15, 10 25 C 25 35, 45 42, 50 49 Z" 
        animate={{ d: [
          "M50 49 C 45 30, 25 15, 10 25 C 25 35, 45 42, 50 49 Z",
          "M50 49 C 45 45, 25 55, 15 65 C 28 55, 46 51, 50 49 Z",
          "M50 49 C 45 30, 25 15, 10 25 C 25 35, 45 42, 50 49 Z"
        ] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path 
        d="M50 49 C 55 30, 75 15, 90 25 C 75 35, 55 42, 50 49 Z" 
        animate={{ d: [
          "M50 49 C 55 30, 75 15, 90 25 C 75 35, 55 42, 50 49 Z",
          "M50 49 C 55 45, 75 55, 85 65 C 72 55, 54 51, 50 49 Z",
          "M50 49 C 55 30, 75 15, 90 25 C 75 35, 55 42, 50 49 Z"
        ] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Beak */}
      <path d="M65 50 L 71 49 L 64 52" />
    </motion.g>
  </svg>
);

// 4. Origami Paper Plane
const PaperPlaneSvg = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="var(--color-accent-primary)" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round">
    <motion.g
      animate={{ y: [0, -5, 5, 0], rotate: [0, 2, -2, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M15 45 L 85 20 L 50 80 L 42 54 Z" />
      <path d="M85 20 L 42 54 L 15 45 Z" fill="rgba(0, 93, 166, 0.05)" />
      <path d="M42 54 L 50 80 L 58 65" />
    </motion.g>
  </svg>
);

// 5. Wright Flyer (1903 Biplane)
const WrightFlyerSvg = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="var(--color-accent-primary)" strokeWidth="2" strokeLinecap="round">
    <motion.g
      animate={{ y: [0, -3, 3, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Double Wings */}
      <path d="M10 32 L 90 32" />
      <path d="M10 48 L 90 48" />
      
      {/* Struts */}
      {Array.from({ length: 8 }).map((_, idx) => {
        const x = 18 + idx * 9.1;
        return <line key={idx} x1={x} y1="32" x2={x} y2="48" />;
      })}
      
      {/* Early Rudder and Elevator frame */}
      <path d="M42 48 L 50 72 L 58 48" />
      <path d="M46 72 L 54 72" />
      <path d="M35 32 L 50 15 L 65 32" />
      
      {/* Spinning Propeller lines */}
      <motion.g 
        transform="translate(50, 48)"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
      >
        <line x1="-12" y1="0" x2="12" y2="0" stroke="var(--color-text-secondary)" strokeWidth="1" />
      </motion.g>
    </motion.g>
  </svg>
);

// 6. Propeller Fighter Monoplane
const PropellerFighterSvg = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="var(--color-accent-primary)" strokeWidth="2.2" strokeLinecap="round">
    <motion.g
      animate={{ y: [0, -4, 4, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Fuselage */}
      <path d="M15 50 C 15 45, 80 45, 85 50 C 80 55, 15 55, 15 50 Z" />
      {/* Wings */}
      <path d="M50 48 L 52 15 L 42 15 L 46 48" fill="rgba(0, 93, 166, 0.05)" />
      <path d="M50 52 L 52 85 L 42 85 L 46 52" fill="rgba(0, 93, 166, 0.05)" />
      {/* Tail Fin */}
      <path d="M22 50 L 12 35 L 18 35 L 25 50" />
      
      {/* Spinning Nose Propeller */}
      <motion.g 
        transform="translate(85, 50)"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.4, repeat: Infinity, ease: "linear" }}
      >
        <line x1="0" y1="-18" x2="0" y2="18" stroke="var(--color-text-secondary)" strokeWidth="1.5" />
      </motion.g>
    </motion.g>
  </svg>
);

// 7. Commercial Jetliner
const CommercialJetSvg = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="var(--color-accent-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <motion.g
      animate={{ y: [0, -3, 3, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Main Jet Body */}
      <path d="M10 50 C 10 46, 75 44, 90 50 C 75 56, 10 54, 10 50 Z" />
      {/* Swept Wings */}
      <path d="M48 48 L 22 20 L 32 20 L 56 48" fill="rgba(0, 93, 166, 0.05)" />
      <path d="M48 52 L 22 80 L 32 80 L 56 52" fill="rgba(0, 93, 166, 0.05)" />
      
      {/* Underwing Jet Engines */}
      <rect x="36" y="28" width="12" height="6" rx="2" fill="rgba(0, 93, 166, 0.2)" />
      <rect x="36" y="66" width="12" height="6" rx="2" fill="rgba(0, 93, 166, 0.2)" />
      
      {/* Tail Fin */}
      <path d="M20 48 L 10 25 L 18 25 L 26 48" />
    </motion.g>
  </svg>
);

// 8. Supersonic Jet (Concorde)
const SupersonicJetSvg = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="var(--color-accent-primary)" strokeWidth="2.2" strokeLinecap="round">
    <motion.g
      animate={{ y: [0, -5, 5, 0], x: [0, 3, -3, 0] }}
      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Delta Wing Base */}
      <path d="M15 50 L 50 18 L 46 50 L 50 82 Z" fill="rgba(0, 93, 166, 0.08)" />
      
      {/* Long Needle Nose Fuselage */}
      <path d="M5 50 C 15 48, 88 47, 95 50 C 88 53, 15 52, 5 50 Z" />
      
      {/* Delta Fin */}
      <path d="M22 50 L 14 30 L 26 50" />
    </motion.g>
  </svg>
);

// ─── Evolving Scenery Background SVGs ────────────────────────────────────────

const SceneryForestSvg = () => (
  <svg viewBox="0 0 400 150" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M-10 130 C 50 120, 150 140, 250 125 C 320 115, 380 135, 410 130 L 410 160 L -10 160 Z" fill="rgba(0, 93, 166, 0.04)" />
    
    {/* Outline Pine Trees */}
    <g stroke="var(--color-border)" strokeWidth="1.5">
      {/* Tree 1 */}
      <path d="M40 130 L 40 100 M40 105 L 25 115 M40 95 L 28 103 M40 85 L 30 90 M40 105 L 55 115 M40 95 L 52 103 M40 85 L 50 90" />
      {/* Tree 2 */}
      <path d="M110 135 L 110 90 M110 98 L 92 108 M110 88 L 95 96 M110 108 L 128 98" />
      {/* Tree 3 */}
      <path d="M320 128 L 320 95 M320 102 L 305 110 M320 95 L 335 102" />
    </g>
  </svg>
);

const SceneryHillsSvg = () => (
  <svg viewBox="0 0 400 150" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Layered Rolling Hills */}
    <path d="M-20 140 C 60 120, 120 100, 220 130 C 300 150, 350 125, 420 135 L 420 160 L -20 160 Z" fill="rgba(0, 93, 166, 0.05)" />
    <path d="M-20 120 C 80 80, 200 140, 310 110 C 360 95, 390 120, 420 115 L 420 160 L -20 160 Z" stroke="var(--color-border)" strokeWidth="1.2" />
    
    {/* Wind Turbine Line Art */}
    <g stroke="var(--color-border)" strokeWidth="1.2" transform="translate(280, 75)">
      <line x1="0" y1="0" x2="0" y2="40" />
      <motion.g animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}>
        <line x1="0" y1="0" x2="0" y2="-18" />
        <line x1="0" y1="0" x2="15" y2="10" />
        <line x1="0" y1="0" x2="-15" y2="10" />
      </motion.g>
    </g>
  </svg>
);

const SceneryCitySvg = () => (
  <svg viewBox="0 0 400 150" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="var(--color-border)" strokeWidth="1.5">
    {/* Silhouettes of Skyscrapers */}
    <rect x="25" y="60" width="35" height="90" rx="2" fill="rgba(0, 93, 166, 0.02)" />
    <rect x="80" y="30" width="45" height="120" rx="3" fill="rgba(0, 93, 166, 0.04)" />
    <rect x="145" y="75" width="30" height="75" rx="2" fill="rgba(0, 93, 166, 0.02)" />
    <rect x="200" y="45" width="40" height="105" rx="3" fill="rgba(0, 93, 166, 0.03)" />
    <rect x="260" y="85" width="25" height="65" rx="2" fill="rgba(0, 93, 166, 0.01)" />
    <rect x="310" y="20" width="50" height="130" rx="4" fill="rgba(0, 93, 166, 0.05)" />
    
    {/* Antenna masts on buildings */}
    <line x1="102" y1="30" x2="102" y2="10" />
    <line x1="335" y1="20" x2="335" y2="-2" />
  </svg>
);

// ─── Evolution Core Panel Component ──────────────────────────────────────────

const AboutEvolution2D = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % 8);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const stageData = [
    {
      label: "Hatching: Flight Begins",
      svg: <EggSvg />,
      bg: <SceneryForestSvg />
    },
    {
      label: "Hatchling: Early Curiosity",
      svg: <HatchlingSvg />,
      bg: <SceneryForestSvg />
    },
    {
      label: "Origin: Soaring Wings",
      svg: <SoaringBirdSvg />,
      bg: <SceneryForestSvg />
    },
    {
      label: "Origami: Human Imagination",
      svg: <PaperPlaneSvg />,
      bg: <SceneryHillsSvg />
    },
    {
      label: "Pioneering: Wright Flyer (1903)",
      svg: <WrightFlyerSvg />,
      bg: <SceneryHillsSvg />
    },
    {
      label: "Evolution: Propeller Era",
      svg: <PropellerFighterSvg />,
      bg: <SceneryHillsSvg />
    },
    {
      label: "Commercial: The Modern Airliner",
      svg: <CommercialJetSvg />,
      bg: <SceneryCitySvg />
    },
    {
      label: "Supersonic: Entering the Future",
      svg: <SupersonicJetSvg />,
      bg: <SceneryCitySvg />
    }
  ];

  return (
    <GraphicPanel>
      <CanvasArea>
        {/* Progressive Background Scenery */}
        <AnimatePresence mode="wait">
          <BackgroundScenery
            key={`bg-${stage}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.65 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {stageData[stage].bg}
          </BackgroundScenery>
        </AnimatePresence>

        {/* Evolving Flight Vector Model */}
        <AnimatePresence mode="wait">
          <ModelWrapper
            key={`model-${stage}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            {stageData[stage].svg}
          </ModelWrapper>
        </AnimatePresence>
      </CanvasArea>

      <FooterControls>
        <AnimatePresence mode="wait">
          <StageLabel
            key={`label-${stage}`}
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -5, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {stageData[stage].label}
          </StageLabel>
        </AnimatePresence>

        {/* Pagination Dots */}
        <NavigationDots>
          {stageData.map((_, idx) => (
            <Dot
              key={idx}
              $active={stage === idx}
              onClick={() => setStage(idx)}
              aria-label={`Go to stage ${idx + 1}`}
            />
          ))}
        </NavigationDots>
      </FooterControls>
    </GraphicPanel>
  );
};

export default AboutEvolution2D;
