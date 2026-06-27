// src/components/FlightMap/WorldMap.jsx
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { geoEqualEarth, geoPath } from 'd3-geo';
import * as topojson from 'topojson-client';

const MapContainer = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  opacity: 0.08;
  pointer-events: none;
`;

const SVG = styled.svg`
  width: 100%;
  height: 100%;
  display: block;
`;

// Flight path locations (lon, lat)
const AIRPORTS = {
  SFO: [-122.379, 37.619],
  JFK: [-73.778, 40.641],
  LHR: [-0.461, 51.470],
  DXB: [55.364, 25.253],
  HND: [139.780, 35.549],
  SIN: [103.991, 1.364],
  SYD: [151.177, -33.946],
  ORD: [-87.907, 41.974],
  CDG: [2.550, 49.008],
  FRA: [8.562, 50.033],
};

const FLIGHT_ROUTES = [
  { from: AIRPORTS.SFO, to: AIRPORTS.HND, duration: 6000, delay: 0 },
  { from: AIRPORTS.JFK, to: AIRPORTS.LHR, duration: 4000, delay: 1000 },
  { from: AIRPORTS.LHR, to: AIRPORTS.DXB, duration: 5000, delay: 500 },
  { from: AIRPORTS.DXB, to: AIRPORTS.SIN, duration: 5500, delay: 2000 },
  { from: AIRPORTS.SIN, to: AIRPORTS.SYD, duration: 4500, delay: 1500 },
  { from: AIRPORTS.ORD, to: AIRPORTS.CDG, duration: 5000, delay: 1200 },
  { from: AIRPORTS.SFO, to: AIRPORTS.JFK, duration: 3500, delay: 800 },
  { from: AIRPORTS.FRA, to: AIRPORTS.DXB, duration: 4200, delay: 2200 },
];

const FlightPath = ({ pathData, duration, delay }) => {
  const pathRef = useRef(null);
  const [point, setPoint] = useState({ x: 0, y: 0, angle: 0 });
  const [showPlane, setShowPlane] = useState(false);

  useEffect(() => {
    let animationFrameId;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (elapsed >= delay) {
        setShowPlane(true);
        const progress = ((elapsed - delay) % duration) / duration;
        
        if (pathRef.current) {
          const pathLength = pathRef.current.getTotalLength();
          const currentLength = progress * pathLength;
          
          // Current position
          const p = pathRef.current.getPointAtLength(currentLength);
          
          // Look slightly ahead to get angle/rotation
          const aheadLength = Math.min(currentLength + 2, pathLength);
          const pAhead = pathRef.current.getPointAtLength(aheadLength);
          const angle = Math.atan2(pAhead.y - p.y, pAhead.x - p.x) * (180 / Math.PI);

          setPoint({ x: p.x, y: p.y, angle });
        }
      } else {
        setShowPlane(false);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [duration, delay]);

  return (
    <>
      {/* Flight Arc Line */}
      <path
        ref={pathRef}
        d={pathData}
        fill="none"
        stroke="rgba(0, 93, 166, 0.25)"
        strokeWidth="1"
        strokeDasharray="2 3"
      />
      {/* Animated Airplane / Dot */}
      {showPlane && (
        <g transform={`translate(${point.x}, ${point.y}) rotate(${point.angle})`}>
          {/* Subtle Glow */}
          <circle r="4" fill="rgba(0, 93, 166, 0.4)" filter="blur(1px)" />
          {/* Tiny Plane Representation */}
          <polygon
            points="0,-3 -3,3 0,1 3,3"
            fill="var(--color-accent-primary, #005da6)"
            transform="rotate(90)"
          />
        </g>
      )}
    </>
  );
};

const WorldMap = () => {
  const [mapFeatures, setMapFeatures] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 800, height: 450 });
  const containerRef = useRef(null);

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth || 800,
          height: containerRef.current.offsetHeight || 450,
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch topology
  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then((response) => response.json())
      .then((data) => {
        const countries = topojson.feature(data, data.objects.countries);
        setMapFeatures(countries.features);
      })
      .catch((err) => console.error('Error loading world map data:', err));
  }, []);

  // Setup D3 Projection
  const projection = geoEqualEarth()
    .scale(dimensions.width / 5.5)
    .translate([dimensions.width / 2, dimensions.height / 1.8]);

  const pathGenerator = geoPath().projection(projection);

  return (
    <MapContainer ref={containerRef}>
      <SVG viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
        {/* Draw countries */}
        <g fill="rgba(0, 93, 166, 0.03)" stroke="rgba(0, 93, 166, 0.08)" strokeWidth="0.5">
          {mapFeatures.map((feature, i) => (
            <path key={i} d={pathGenerator(feature)} />
          ))}
        </g>

        {/* Draw flight paths */}
        <g>
          {FLIGHT_ROUTES.map((route, idx) => {
            const geojsonLine = {
              type: 'LineString',
              coordinates: [route.from, route.to],
            };
            const pathData = pathGenerator(geojsonLine);
            if (!pathData) return null;

            return (
              <FlightPath
                key={idx}
                pathData={pathData}
                duration={route.duration}
                delay={route.delay}
              />
            );
          })}
        </g>
      </SVG>
    </MapContainer>
  );
};

export default WorldMap;
