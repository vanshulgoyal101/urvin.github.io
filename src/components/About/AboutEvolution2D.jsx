// src/components/About/AboutEvolution2D.jsx
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Styled Components ────────────────────────────────────────────────────────

const PanelWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1.15 / 1;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 45px rgba(0, 34, 68, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-lg);

  @media (max-width: 768px) {
    aspect-ratio: 1.25 / 1;
  }
`;

const CanvasContainer = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EvolvingCanvas = styled.canvas`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`;

const LabelArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  z-index: 3;
`;

const StageTitle = styled(motion.h4)`
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-text-primary);
  text-align: center;
  min-height: 28px;
  margin: 0;
`;

const NavigationDots = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const Dot = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ $active }) => $active ? 'var(--color-accent-primary)' : 'var(--color-border)'};
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-accent-primary);
    transform: scale(1.3);
  }
`;

// ─── Mathematical Particle Path Generators ────────────────────────────────────

const PARTICLE_COUNT = 85;

const generatePointsForStage = (stage, count, radius) => {
  const points = [];
  const half = Math.floor(count / 2);

  switch (stage) {
    case 0: // 1. Nest Egg
      for (let i = 0; i < count; i++) {
        const theta = (i / count) * Math.PI * 2;
        // Egg shape formula: wider at bottom, narrower at top
        const r = radius * (1 - 0.22 * Math.sin(theta));
        const x = Math.cos(theta) * r;
        const y = Math.sin(theta) * r * 1.25 + 10;
        points.push({ x, y });
      }
      break;

    case 1: // 2. Hatchling peeking
      const splitIndex = Math.floor(count * 0.6);
      // Lower egg shell
      for (let i = 0; i < splitIndex; i++) {
        const theta = (i / splitIndex) * Math.PI + Math.PI * 0.15;
        const x = Math.cos(theta) * radius * 0.9;
        const y = Math.sin(theta) * radius * 0.95 + 25;
        points.push({ x, y });
      }
      // Head peeking out
      const headIndex = count - splitIndex;
      for (let i = 0; i < headIndex; i++) {
        const theta = (i / headIndex) * Math.PI * 2;
        const x = Math.cos(theta) * (radius * 0.32);
        const y = Math.sin(theta) * (radius * 0.32) - 15;
        points.push({ x, y });
      }
      break;

    case 2: // 3. Flying Bird
      // Left and Right Wing segments
      for (let i = 0; i < half; i++) {
        const t = i / (half - 1);
        const x = -t * radius * 1.15;
        const y = -Math.sin(t * Math.PI) * radius * 0.45;
        points.push({ x, y });
      }
      for (let i = 0; i < (count - half); i++) {
        const t = i / (count - half - 1);
        const x = t * radius * 1.15;
        const y = -Math.sin(t * Math.PI) * radius * 0.45;
        points.push({ x, y });
      }
      break;

    case 3: // 4. Paper Glider
      const edge = Math.floor(count / 4);
      // Wing fold outline triangles
      for (let i = 0; i < edge; i++) {
        const t = i / edge;
        points.push({ x: -t * radius * 0.9, y: -radius * 0.7 + t * 1.6 * radius });
      }
      for (let i = 0; i < edge; i++) {
        const t = i / edge;
        points.push({ x: -radius * 0.9 + t * radius * 0.9, y: radius * 0.9 - t * radius * 0.5 });
      }
      for (let i = 0; i < edge; i++) {
        const t = i / edge;
        points.push({ x: t * radius * 0.9, y: radius * 0.4 + t * radius * 0.5 });
      }
      for (let i = 0; i < (count - 3 * edge); i++) {
        const t = i / (count - 3 * edge);
        points.push({ x: radius * 0.9 - t * radius * 0.9, y: radius * 0.9 - t * 1.6 * radius });
      }
      break;

    case 4: // 5. Wright Flyer
      // Upper wing
      for (let i = 0; i < half; i++) {
        const t = (i / (half - 1)) * 2 - 1;
        points.push({ x: t * radius * 1.25, y: -radius * 0.35 });
      }
      // Lower wing
      for (let i = 0; i < (count - half); i++) {
        const t = (i / (count - half - 1)) * 2 - 1;
        points.push({ x: t * radius * 1.25, y: radius * 0.35 });
      }
      break;

    case 5: // 6. Propeller Fighter
      const wingPts = Math.floor(count * 0.5);
      // Wing line
      for (let i = 0; i < wingPts; i++) {
        const t = (i / (wingPts - 1)) * 2 - 1;
        points.push({ x: t * radius * 1.25, y: 15 });
      }
      // Fuselage cross
      const fusPts = count - wingPts;
      for (let i = 0; i < fusPts; i++) {
        const t = (i / (fusPts - 1)) * 2 - 1;
        points.push({ x: 0, y: t * radius * 0.95 });
      }
      break;

    case 6: // 7. Commercial Jet
      // Swept wing profiles
      for (let i = 0; i < half; i++) {
        const t = i / (half - 1);
        points.push({ x: -t * radius * 1.2, y: -radius * 0.45 + t * radius * 1.2 });
      }
      for (let i = 0; i < (count - half); i++) {
        const t = i / (count - half - 1);
        points.push({ x: t * radius * 1.2, y: -radius * 0.45 + t * radius * 1.2 });
      }
      break;

    case 7: // 8. Supersonic Concorde
      const deltaEdge = Math.floor(count / 3);
      // Left delta
      for (let i = 0; i < deltaEdge; i++) {
        const t = i / deltaEdge;
        points.push({ x: -t * radius * 0.85, y: radius * 0.65 - t * radius * 0.35 });
      }
      // Center needle nose
      for (let i = 0; i < deltaEdge; i++) {
        const t = i / deltaEdge;
        points.push({ x: 0, y: -radius * 0.95 + t * radius * 1.9 });
      }
      // Right delta
      for (let i = 0; i < (count - 2 * deltaEdge); i++) {
        const t = i / (count - 2 * deltaEdge);
        points.push({ x: t * radius * 0.85, y: radius * 0.65 - t * radius * 0.35 });
      }
      break;

    default:
      break;
  }

  return points;
};

// ─── Main Evolution Panel Component ──────────────────────────────────────────

const AboutEvolution2D = () => {
  const [stage, setStage] = useState(0);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const requestRef = useRef();

  const stageLabels = [
    "Origin: The Hatching Egg",
    "Curiosity: The Hatchling Peeks",
    "Nature: Soaring Wings",
    "Origami: Origami Glider",
    "Pioneering: The Wright Flyer (1903)",
    "Propulsion: The Propeller Fighter",
    "Commercial: The Modern Jetliner",
    "Future: Supersonic Concorde"
  ];

  // Auto evolution loops every 4.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % 8);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Initialize particle coordinate pools once
  useEffect(() => {
    const particles = [];
    const initialTargets = generatePointsForStage(0, PARTICLE_COUNT, 80);
    
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: initialTargets[i].x,
        y: initialTargets[i].y,
        tx: initialTargets[i].x,
        ty: initialTargets[i].y,
        vx: 0,
        vy: 0
      });
    }
    particlesRef.current = particles;
  }, []);

  // Update target coordinates on stage changes
  useEffect(() => {
    if (particlesRef.current.length === 0) return;
    const targets = generatePointsForStage(stage, PARTICLE_COUNT, 80);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particlesRef.current[i].tx = targets[i].x;
      particlesRef.current[i].ty = targets[i].y;
    }
  }, [stage]);

  // Main Canvas Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    const resizeHandler = () => {
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', resizeHandler);

    const drawLoop = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Draw Evolving Background Line Art Scenery based on the stage
      ctx.save();
      ctx.strokeStyle = 'rgba(0, 93, 166, 0.08)';
      ctx.lineWidth = 1.5;
      
      const groundY = height - 50;
      
      // Draw horizon reference line
      ctx.beginPath();
      ctx.moveTo(30, groundY);
      ctx.lineTo(width - 30, groundY);
      ctx.stroke();

      if (stage < 3) {
        // Natural Forest silhouette lines
        ctx.beginPath();
        // Left tree
        ctx.moveTo(60, groundY);
        ctx.lineTo(60, groundY - 45);
        ctx.lineTo(45, groundY - 30);
        ctx.moveTo(60, groundY - 45);
        ctx.lineTo(75, groundY - 30);
        // Right tree
        ctx.moveTo(width - 80, groundY);
        ctx.lineTo(width - 80, groundY - 55);
        ctx.lineTo(width - 95, groundY - 40);
        ctx.moveTo(width - 80, groundY - 55);
        ctx.lineTo(width - 65, groundY - 40);
        ctx.stroke();
      } else if (stage >= 3 && stage < 6) {
        // Early Industrial / Farm hills
        ctx.beginPath();
        ctx.arc(100, groundY + 120, 150, Math.PI * 1.2, Math.PI * 1.8);
        ctx.arc(width - 100, groundY + 120, 140, Math.PI * 1.2, Math.PI * 1.8);
        ctx.stroke();
      } else {
        // Modern Sky Scrapers
        ctx.beginPath();
        ctx.rect(50, groundY - 70, 30, 70);
        ctx.rect(100, groundY - 110, 40, 110);
        ctx.rect(width - 130, groundY - 95, 35, 95);
        ctx.rect(width - 75, groundY - 60, 25, 60);
        ctx.stroke();
      }
      ctx.restore();

      // Render Morphing Particle Constellation
      ctx.save();
      ctx.translate(centerX, centerY - 15);
      
      // Update particle physics (lerping towards targets)
      const p = particlesRef.current;
      for (let i = 0; i < p.length; i++) {
        // Spring physics lerp
        const dx = p[i].tx - p[i].x;
        const dy = p[i].ty - p[i].y;
        
        p[i].vx += dx * 0.08;
        p[i].vy += dy * 0.08;
        
        p[i].vx *= 0.72; // damping friction
        p[i].vy *= 0.72;
        
        p[i].x += p[i].vx;
        p[i].y += p[i].vy;
      }

      // Draw Constellation Lines (connecting adjacent particles for structured wireframe)
      ctx.strokeStyle = 'rgba(0, 93, 166, 0.45)';
      ctx.lineWidth = 1.3;
      ctx.shadowBlur = 6;
      ctx.shadowColor = '#00b2ff';
      
      ctx.beginPath();
      if (p.length > 0) {
        ctx.moveTo(p[0].x, p[0].y);
        for (let i = 1; i < p.length; i++) {
          // If we transition between head and shell on hatchling, do not bridge the gap
          if (stage === 1 && i === Math.floor(p.length * 0.6)) {
            ctx.moveTo(p[i].x, p[i].y);
          } else {
            ctx.lineTo(p[i].x, p[i].y);
          }
        }
      }
      ctx.stroke();

      // Draw Glow Dots (Vertex points)
      ctx.fillStyle = '#00b2ff';
      for (let i = 0; i < p.length; i++) {
        ctx.beginPath();
        ctx.arc(p[i].x, p[i].y, 2.2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      requestRef.current = requestAnimationFrame(drawLoop);
    };

    requestRef.current = requestAnimationFrame(drawLoop);
    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener('resize', resizeHandler);
    };
  }, [stage]);

  return (
    <PanelWrapper>
      <CanvasContainer>
        <EvolvingCanvas ref={canvasRef} />
      </CanvasContainer>

      <LabelArea>
        <AnimatePresence mode="wait">
          <StageTitle
            key={`title-${stage}`}
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -5, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {stageLabels[stage]}
          </StageTitle>
        </AnimatePresence>

        <NavigationDots>
          {stageLabels.map((_, idx) => (
            <Dot
              key={idx}
              $active={stage === idx}
              onClick={() => setStage(idx)}
              aria-label={`Go to stage ${idx + 1}`}
            />
          ))}
        </NavigationDots>
      </LabelArea>
    </PanelWrapper>
  );
};

export default AboutEvolution2D;
