// src/components/FunElements/InteractiveSpaceBackground.jsx
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CanvasContainer = styled.canvas`
  position: fixed;
  top: -100px;
  left: 0;
  right: 0;
  bottom: 0;
  height: calc(100% + 100px);
  width: 100%;
  pointer-events: none;
  z-index: 0; /* Below all content, above basic body color */
`;

const InteractiveSpaceBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight + 100);

    // Dynamic sizing on window resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight + 100;
    };
    window.addEventListener('resize', handleResize);

    // Generate random flight paths
    const hubCodes = ['ORD', 'SFO', 'EWR', 'IAH', 'DEN', 'LAX', 'IAD', 'LHR', 'NRT'];
    const flightPaths = Array.from({ length: 8 }, () => {
      const fromHub = hubCodes[Math.floor(Math.random() * hubCodes.length)];
      let toHub = hubCodes[Math.floor(Math.random() * hubCodes.length)];
      while (toHub === fromHub) {
        toHub = hubCodes[Math.floor(Math.random() * hubCodes.length)];
      }

      const p1 = { x: Math.random() * width, y: Math.random() * height };
      const p2 = { x: Math.random() * width, y: Math.random() * height };
      // Control points for quadratic curve to create smooth flight arcs
      const cp = {
        x: (p1.x + p2.x) / 2 + (Math.random() - 0.5) * 300,
        y: (p1.y + p2.y) / 2 - Math.random() * 200 - 50,
      };

      return {
        p1,
        p2,
        cp,
        fromHub,
        toHub,
        progress: Math.random(),
        speed: Math.random() * 0.001 + 0.0003,
        flightNo: `UA${Math.floor(Math.random() * 900) + 100}`,
        altitude: `${Math.floor(Math.random() * 8) + 31},000 ft`,
      };
    });

    // Radar click readouts
    let radarRings = [];
    const handleGlobalClick = (e) => {
      const x = e.clientX;
      const y = e.clientY + 100; // Account for the offset
      const fltNo = `UA${Math.floor(Math.random() * 900) + 100}`;
      const alt = `${Math.floor(Math.random() * 8) + 32},000 ft`;

      radarRings.push({
        x,
        y,
        radius: 2,
        maxRadius: 50,
        alpha: 0.6,
        speed: 1.2,
        label: `SIG: ${fltNo} | ALT: ${alt} | HDG: ${Math.floor(Math.random() * 360)}°`
      });
    };
    window.addEventListener('click', handleGlobalClick);

    // Helper to evaluate quadratic bezier points
    const getBezierPoint = (p1, cp, p2, t) => {
      const x = (1 - t) * (1 - t) * p1.x + 2 * (1 - t) * t * cp.x + t * t * p2.x;
      const y = (1 - t) * (1 - t) * p1.y + 2 * (1 - t) * t * cp.y + t * t * p2.y;
      return { x, y };
    };

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw coordinate grid lines (Latitude / Longitude)
      ctx.save();
      ctx.strokeStyle = 'rgba(0, 93, 166, 0.015)';
      ctx.lineWidth = 1;
      const gridSize = 120;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();

      // 2. Draw flight paths and planes
      flightPaths.forEach((path) => {
        // Update flight progress
        path.progress += path.speed;
        if (path.progress > 1) {
          path.progress = 0;
          path.p1 = { x: Math.random() * width, y: Math.random() * height };
          path.p2 = { x: Math.random() * width, y: Math.random() * height };
          path.cp = {
            x: (path.p1.x + path.p2.x) / 2 + (Math.random() - 0.5) * 300,
            y: (path.p1.y + path.p2.y) / 2 - Math.random() * 200 - 50,
          };
          path.flightNo = `UA${Math.floor(Math.random() * 900) + 100}`;
        }

        // Draw flight arc
        ctx.save();
        ctx.strokeStyle = 'rgba(0, 93, 166, 0.05)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);
        ctx.beginPath();
        ctx.moveTo(path.p1.x, path.p1.y);
        ctx.quadraticCurveTo(path.cp.x, path.cp.y, path.p2.x, path.p2.y);
        ctx.stroke();
        ctx.restore();

        // Calculate current plane position
        const planePos = getBezierPoint(path.p1, path.cp, path.p2, path.progress);

        // Draw plane point & label
        ctx.save();
        ctx.fillStyle = 'rgba(0, 93, 166, 0.3)';
        ctx.beginPath();
        ctx.arc(planePos.x, planePos.y, 3, 0, Math.PI * 2);
        ctx.fill();

        // Faint telemetry text
        ctx.fillStyle = 'rgba(98, 125, 152, 0.25)';
        ctx.font = '8px monospace';
        ctx.fillText(
          `${path.flightNo} (${path.fromHub}→${path.toHub})`,
          planePos.x + 8,
          planePos.y + 3
        );
        ctx.restore();
      });

      // 3. Draw radar rings on click
      for (let i = radarRings.length - 1; i >= 0; i--) {
        const ring = radarRings[i];
        ring.radius += ring.speed;
        ring.alpha -= 0.012;

        if (ring.alpha <= 0) {
          radarRings.splice(i, 1);
          continue;
        }

        ctx.save();
        // Radar Sweep Ring
        ctx.strokeStyle = `rgba(0, 93, 166, ${ring.alpha})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Telemetry Label
        ctx.fillStyle = `rgba(0, 34, 68, ${ring.alpha * 0.7})`;
        ctx.font = '8px monospace';
        ctx.fillText(ring.label, ring.x + ring.radius + 8, ring.y + 3);

        // Target Reticle
        ctx.strokeStyle = `rgba(0, 178, 255, ${ring.alpha * 0.4})`;
        ctx.beginPath();
        ctx.moveTo(ring.x - 4, ring.y);
        ctx.lineTo(ring.x + 4, ring.y);
        ctx.moveTo(ring.x, ring.y - 4);
        ctx.lineTo(ring.x, ring.y + 4);
        ctx.stroke();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return <CanvasContainer ref={canvasRef} />;
};

export default InteractiveSpaceBackground;
