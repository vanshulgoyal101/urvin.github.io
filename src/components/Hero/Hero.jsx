// src/components/Hero/Hero.jsx
import { Suspense, lazy } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { Canvas } from '@react-three/fiber';
// import FloatingShape from './FloatingShape';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiChevronDown } from 'react-icons/hi';
import Magnetic from '../FunElements/Magnetic';

const FloatingRocket = lazy(() => import('../FunElements/FloatingRocket'));

// Styled Components
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: var(--spacing-2xl) var(--container-padding);
  
  @media (max-width: 768px) {
    min-height: 100svh;
    padding: 40px var(--container-padding) 40px var(--container-padding);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const HeroContainer = styled.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 600px;

  @media (max-width: 1024px) {
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

const Greeting = styled(motion.span)`
  display: inline-block;
  font-size: var(--text-lg);
  color: var(--color-accent-primary);
  font-weight: 500;
  margin-bottom: var(--spacing-sm);
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: var(--spacing-md);
  background: linear-gradient(135deg, var(--color-text-primary) 0%, var(--color-accent-primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    margin-bottom: var(--spacing-xs);
  }
`;

const Subtitle = styled(motion.p)`
  font-size: var(--text-xl);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: var(--text-base);
    margin-bottom: var(--spacing-xs);
  }
`;

const Description = styled(motion.p)`
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-lg);
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: var(--text-sm);
    margin-bottom: var(--spacing-md);
  }
`;

const CTAContainer = styled(motion.div)`
  display: flex;
  gap: var(--spacing-md);
  align-items: center;
  margin-bottom: var(--spacing-lg);
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 0.75rem;
    margin-bottom: var(--spacing-md);
    
    a {
      width: 280px;
      max-width: 100%;
    }
  }
`;

const CTAButton = styled(motion.a)`
  padding: clamp(0.875rem, 2vw, 1rem) clamp(1.75rem, 4vw, 2.5rem);
  background: var(--color-gradient-1);
  color: var(--color-bg-primary);
  font-weight: 600;
  border-radius: 50px;
  font-size: var(--text-base);
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
  
  &:hover::before {
    transform: translateX(0);
  }
  
  &:focus-visible {
    outline: 3px solid #fff;
    outline-offset: 4px;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: var(--text-sm);
  }
`;

const SecondaryButton = styled(motion.a)`
  padding: clamp(0.875rem, 2vw, 1rem) clamp(1.75rem, 4vw, 2.5rem);
  border: 2px solid var(--color-border);
  color: var(--color-text-primary);
  font-weight: 600;
  border-radius: 50px;
  font-size: var(--text-base);
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: var(--text-sm);
  }
  
  &:hover {
    border-color: var(--color-accent-primary);
    color: var(--color-accent-primary);
  }
  
  &:focus-visible {
    outline: 3px solid var(--color-accent-primary);
    outline-offset: 4px;
    border-color: var(--color-accent-primary);
    color: var(--color-accent-primary);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: var(--spacing-md);

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  width: 48px;
  height: 48px;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  font-size: 1.25rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--color-accent-primary);
    border-color: var(--color-accent-primary);
    transform: translateY(-3px);
  }
  
  &:focus-visible {
    outline: 3px solid var(--color-accent-primary);
    outline-offset: 4px;
    color: var(--color-accent-primary);
    border-color: var(--color-accent-primary);
  }
`;

const CanvasContainer = styled.div`
  width: 100%;
  height: 600px;
  position: relative;

  @media (max-width: 1024px) {
    height: 400px;
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.3;
    z-index: -1;
  }
`;

const HeroImageWrapper = styled(motion.div)`
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid var(--color-bg-card);
  box-shadow: 0 20px 45px rgba(0, 34, 68, 0.15);
  background: var(--color-gradient-1);
  padding: 3px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--color-gradient-1);
    opacity: 0.35;
    filter: blur(15px);
    transform: scale(1.05);
    z-index: -1;
  }

  @media (max-width: 1024px) {
    max-width: 280px;
    margin-top: var(--spacing-md);
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
`;

const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

const ScrollIndicator = styled(motion.button)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  color: var(--color-text-muted);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0.5rem;
  z-index: 3;

  &:hover {
    color: var(--color-accent-primary);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const ScrollText = styled.span`
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-family: var(--font-mono);
`;

// Hero Component
const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <HeroSection>
      <HeroContainer>
        <HeroContent
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Greeting variants={itemVariants}>
            Hello, I'm
          </Greeting>

          <Title variants={itemVariants}>
            Urvin Kapadia
          </Title>

          <Subtitle variants={itemVariants}>
            Senior Manager - Airport Operations Performance & Execution at <a href="https://www.united.com" target="_blank" rel="noopener noreferrer">United Airlines</a>
          </Subtitle>

          <Description variants={itemVariants}>
            Over 18 years of dedicated leadership in aviation operations, deploying advanced analytics, 
            predictive decision-support models, and strategic backlogs to optimize airport execution and customer recovery.
          </Description>

          <CTAContainer variants={itemVariants}>
            <Magnetic range={80}>
              <CTAButton
                href="#work"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Experience Timeline
              </CTAButton>
            </Magnetic>
            <Magnetic range={80}>
              <SecondaryButton
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </SecondaryButton>
            </Magnetic>
          </CTAContainer>

          <SocialLinks variants={itemVariants}>
            <Magnetic range={35}>
              <SocialLink
                href="https://www.linkedin.com/in/kapadia-urvin-848a97a1/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialLink>
            </Magnetic>
          </SocialLinks>
          <Suspense fallback={null}>
            <FloatingRocket isMobileOnly />
          </Suspense>
        </HeroContent>

        {/* Commeting out the 3D plane as requested by user
        <CanvasContainer>
          <Suspense fallback={
            <LoadingContainer>
              <svg width="80" height="80" viewBox="0 0 80 80" style={{ opacity: 0.25 }}>
                <circle cx="40" cy="40" r="30" fill="none" stroke="#1d4ed8" strokeWidth="1" strokeDasharray="6 4" />
                <circle cx="40" cy="40" r="18" fill="none" stroke="#3b82f6" strokeWidth="0.8" />
                <polygon points="40,20 55,50 25,50" fill="none" stroke="#1d4ed8" strokeWidth="0.8" />
              </svg>
            </LoadingContainer>
          }>
            <Canvas
              camera={{ position: [0, 0, 6], fov: 55 }}
              gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
              dpr={Math.min(window.devicePixelRatio, 1.5)}
            >
              <FloatingShape />
            </Canvas>
          </Suspense>
        </CanvasContainer>
        */}

        {/* Keeping Urvin's profile photo in Hero section */}
        <HeroImageWrapper
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          <HeroImage
            src="/images/urvin_profile.jpeg"
            alt="Urvin Kapadia — Senior Manager, United Airlines"
          />
        </HeroImageWrapper>
      </HeroContainer>

      <ScrollIndicator
        onClick={() => {
          const el = document.getElementById('about');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        aria-label="Scroll to About"
      >
        <ScrollText>Scroll</ScrollText>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <HiChevronDown size={20} />
        </motion.div>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;