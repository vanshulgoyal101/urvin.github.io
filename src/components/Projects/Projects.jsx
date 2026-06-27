// src/components/Projects/Projects.jsx
import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaRocket, FaExternalLinkAlt } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import { BiMoney } from 'react-icons/bi';

// ─── Styled Components ────────────────────────────────────────────────────────

const ProjectsSection = styled.section`
  position: relative;
  background: transparent;
  padding: var(--spacing-2xl) 0;

  @media (max-width: 768px) {
    padding: var(--spacing-xl) 0;
  }
`;

const Container = styled.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--container-padding);
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: var(--spacing-lg);

  @media (max-width: 768px) {
    margin-bottom: var(--spacing-md);
  }
`;

const SectionTitle = styled.h2`
  font-size: var(--text-5xl);
  margin-bottom: var(--spacing-md);
  padding-top: var(--spacing-md);
  background: var(--color-gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: var(--text-2xl);
  }
`;

const SectionSubtitle = styled.p`
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: var(--text-base);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-sm);
  }
`;

const ProjectCard = styled(motion.div)`
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  transition: border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
              box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
              transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    border-color: rgba(29, 78, 216, 0.4);
    box-shadow: 0 20px 40px rgba(29, 78, 216, 0.08), 
                0 0 0 1px rgba(29, 78, 216, 0.05);
    transform: translateY(-6px);
  }
`;

const ProjectImageWrapper = styled.div`
  height: 200px;
  overflow: hidden;
  background: var(--color-bg-secondary);
  position: relative;

  @media (max-width: 768px) {
    height: 160px;
  }
`;

const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.4s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.04);
  }
`;

/* Fallback gradient shown when image is missing */
const ProjectImageFallback = styled.div`
  width: 100%;
  height: 100%;
  background: var(--color-gradient-1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
  opacity: 0.7;
`;

const ProjectContent = styled.div`
  padding: var(--spacing-lg);

  @media (max-width: 768px) {
    padding: var(--spacing-md);
  }
`;

const ProjectTitle = styled.h3`
  font-size: var(--text-xl);
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-primary);

  @media (max-width: 768px) {
    font-size: var(--text-lg);
  }
`;

const ProjectRole = styled.p`
  font-size: var(--text-sm);
  color: var(--color-accent-primary);
  margin-bottom: var(--spacing-md);
  font-weight: 500;
`;

const ProjectDescription = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--spacing-md);
  font-size: var(--text-base);

  @media (max-width: 768px) {
    font-size: var(--text-sm);
    margin-bottom: var(--spacing-sm);
  }
`;

const ProjectStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);

  @media (max-width: 768px) {
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-sm);
  }
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--color-text-secondary);
  font-size: var(--text-sm);

  svg {
    color: var(--color-accent-primary);
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    font-size: var(--text-xs);
  }
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--color-accent-primary);
  font-size: var(--text-sm);
  font-weight: 500;
  padding: var(--spacing-xs) 0;
  min-height: 44px;
  transition: gap 0.2s ease;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover {
    text-decoration: underline;
    
    svg {
      transform: translateX(4px);
    }
  }

  @media (max-width: 768px) {
    min-height: 48px;
  }
`;

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    title: 'Predictive Decision-Support Models',
    role: 'Product Lead',
    description: 'Designed multiple predictive models serving as essential decision-support tools for airport stations, the Network Operations Center (NOC), and stakeholders. Led to significant improvements in on-time performance and service reliability.',
    image: '/images/projects/predictive.webp',
    fallbackIcon: '📊',
    stats: [
      { icon: <MdGroups />, text: 'NOC & stations alignment' },
      { icon: <FaRocket />,  text: 'Real-time predictive forecasting' },
    ],
    link: 'https://www.united.com',
  },
  {
    id: 2,
    title: 'Enterprise API & Messaging Platform Integration',
    role: 'Operations Platform Manager',
    description: 'Formulated and managed multi-year strategic roadmaps for enterprise API management and messaging platforms. Ensured tech capabilities scale dynamically with evolving airline operations and high-volume data streams.',
    image: '/images/projects/api-platform.webp',
    fallbackIcon: '🌐',
    stats: [
      { icon: <MdGroups />, text: 'Cross-functional engineering alignment' },
      { icon: <FaRocket />, text: 'Enterprise scale API scaling' },
    ],
    link: 'https://www.united.com',
  },
  {
    id: 3,
    title: 'Spotfire Analytics Platform Governance',
    role: 'Analytics Governance Lead',
    description: 'Provided governance for Spotfire analytics platforms across airports. Expanded utilization to enhance operational transparency, providing dashboards for executive decision support.',
    image: '/images/projects/spotfire.webp',
    fallbackIcon: '📈',
    stats: [
      { icon: <MdGroups />, text: 'Used by MD, VP, and SVP-level leaders' },
      { icon: <BiMoney />, text: 'Substantial resource & cost optimization' },
    ],
    link: 'https://www.united.com',
  }
];

// ─── Animation variants ───────────────────────────────────────────────────────

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: 'easeOut' },
  }),
};

// ─── Sub-component: project image with fallback ───────────────────────────────

const ProjectImage = ({ src, alt, fallback }) => {
  const [errored, setErrored] = useState(false);
  return (
    <ProjectImageWrapper>
      {!errored ? (
        <ProjectImg
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setErrored(true)}
        />
      ) : (
        <ProjectImageFallback>{fallback}</ProjectImageFallback>
      )}
    </ProjectImageWrapper>
  );
};

// ─── Component ────────────────────────────────────────────────────────────────



const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionHeader
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <SectionTitle>Featured Projects</SectionTitle>
          <SectionSubtitle>
            Key initiatives in airport automation, operational analytics, and system scaling
          </SectionSubtitle>
        </SectionHeader>

        <ProjectsGrid>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -5 }}
            >
              <ProjectImage
                src={project.image}
                alt={project.title}
                fallback={project.fallbackIcon}
              />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectRole>{project.role}</ProjectRole>
                <ProjectDescription>{project.description}</ProjectDescription>

                <ProjectStats>
                  {project.stats.map((stat, idx) => (
                    <StatItem key={idx}>
                      {stat.icon}
                      <span>{stat.text}</span>
                    </StatItem>
                  ))}
                </ProjectStats>

                {project.link && project.link !== '#' && (
                  <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                    Visit Website
                    <FaExternalLinkAlt size={12} />
                  </ProjectLink>
                )}
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;