// src/components/Work/Work.jsx
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPlane, FaLaptopCode, FaExternalLinkAlt, FaMapMarkerAlt } from 'react-icons/fa';

// ─── Styled Components ────────────────────────────────────────────────────────

const WorkSection = styled.section`
  padding: var(--spacing-2xl) 0;
  position: relative;
  background: transparent;

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
  margin-bottom: var(--spacing-md);
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
`;

const ExperienceGrid = styled.div`
  display: grid;
  gap: var(--spacing-md);
  max-width: 900px;
  margin: 0 auto;
`;

const ExperienceCard = styled(motion.div)`
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-left: 3px solid transparent;
  border-radius: 16px;
  padding: var(--spacing-lg);
  position: relative;
  transition: border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
              border-left-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    border-color: rgba(29, 78, 216, 0.4);
    border-left-color: var(--color-accent-primary);
    box-shadow: 0 20px 40px rgba(29, 78, 216, 0.08);
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    padding: var(--spacing-md);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  flex-wrap: wrap;
`;

const CardIcon = styled.div`
  width: 44px;
  height: 44px;
  min-width: 44px;
  border-radius: 12px;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent-primary);
  font-size: 1.1rem;
  transition: background 0.3s ease;

  ${ExperienceCard}:hover & {
    background: rgba(99, 102, 241, 0.18);
  }
`;

const CardInfo = styled.div`
  flex: 1;
`;

const JobTitle = styled.h3`
  font-size: var(--text-xl);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
`;

const CompanyName = styled.h4`
  font-size: var(--text-lg);
  color: var(--color-accent-primary);
  font-weight: 500;
  margin-bottom: var(--spacing-xs);
`;

const MetaInfo = styled.div`
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  align-items: center;

  svg {
    font-size: 0.75rem;
    opacity: 0.7;
  }
`;

const MetaChip = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Description = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--spacing-md);
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
`;

const TechTag = styled.span`
  background: rgba(99, 102, 241, 0.08);
  color: var(--color-accent-primary);
  padding: 4px 12px;
  border-radius: 16px;
  font-size: var(--text-xs);
  border: 1px solid rgba(99, 102, 241, 0.18);
`;

const CompanyLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--color-accent-primary);
  font-size: var(--text-sm);
  font-weight: 500;
  margin-top: var(--spacing-sm);
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

const experiences = [
  {
    id: 1,
    icon: <FaPlane />,
    title: 'Senior Manager - Airport Operations Performance and Execution',
    company: 'United Airlines',
    department: 'Airport Operations',
    duration: 'May 2023 – Present',
    location: 'Chicago, IL (Hybrid)',
    description: 'Own strategy, roadmap, and requirements for operational analytics products supporting airport and network operations, ensuring every capability delivers measurable operational value. Engaged and influenced MD, VP, and SVP-level leaders by translating complex technical and operational information into accessible narratives.',
    tech: ['Product Strategy', 'Roadmapping', 'Operational Analytics', 'Executive Communication'],
    link: 'https://www.united.com',
  },
  {
    id: 2,
    icon: <FaPlane />,
    title: 'Operations Manager - Performance & Execution',
    company: 'United Airlines',
    department: 'Airport Operations',
    duration: 'Aug 2021 – May 2023',
    location: 'Chicago, IL',
    description: 'Developed and prioritized product backlogs and multi-year roadmaps for integration platforms and predictive tools. Designed multiple predictive models serving as essential decision-support tools for stations, the Network Operations Center (NOC), and cross-functional stakeholders. Oversees enterprise-level deployments, automation strategies, and post-launch support.',
    tech: ['Spotfire Analytics', 'Predictive Modeling', 'API Integration', 'Platform Engineering'],
    link: 'https://www.united.com',
  },
  {
    id: 3,
    icon: <FaPlane />,
    title: 'Airport Operations Manager - Analytical Performance',
    company: 'United Airlines',
    department: 'Analytical Performance',
    duration: 'Dec 2017 – Aug 2021',
    location: 'Chicago, IL',
    description: 'Facilitated station performance reviews and predictive analyses, enhancing operational tools as the SOC IT liaison to drive improvements.',
    tech: ['Data Analysis', 'SOC Liaison', 'Performance Optimization'],
    link: 'https://www.united.com',
  },
  {
    id: 4,
    icon: <FaPlane />,
    title: 'Airport Operations Manager - Gate Control',
    company: 'United Airlines',
    department: 'Gate Control',
    duration: 'Dec 2015 – Dec 2017',
    location: 'San Francisco, CA',
    description: 'Managed station flight schedules, gate allocations, and flight departures, ensuring seamless daily operations and coordinating with SOC teams.',
    tech: ['Gate Management', 'Operations Coordination', 'Flight Scheduling'],
    link: 'https://www.united.com',
  },
  {
    id: 5,
    icon: <FaPlane />,
    title: 'Zone Control Supervisor',
    company: 'United Airlines',
    department: 'Zone Control',
    duration: 'Mar 2013 – Dec 2015',
    location: 'San Francisco, CA',
    description: 'Supervised real-time zone operations, ramp activity, and aircraft turn times to minimize ground delays and optimize turnaround performance.',
    tech: ['Turnaround Optimization', 'Ramp Operations', 'Zone Supervision'],
    link: 'https://www.united.com',
  },
  {
    id: 6,
    icon: <FaPlane />,
    title: 'Customer Service Supervisor',
    company: 'United Airlines',
    department: 'Customer Service',
    duration: 'Feb 2011 – Mar 2013',
    location: 'San Francisco Bay Area',
    description: 'Led passenger service teams, resolved customer recovery challenges, and supervised lobby, gate, and baggage service counters.',
    tech: ['Customer Recovery', 'Lobby Operations', 'Team Leadership'],
    link: 'https://www.united.com',
  },
  {
    id: 7,
    icon: <FaPlane />,
    title: 'Ramp Agent',
    company: 'United Airlines',
    department: 'Ramp Operations',
    duration: 'Nov 2007 – Feb 2011',
    location: 'San Francisco Bay Area',
    description: 'Gained foundational hands-on operational experience executing aircraft loading/unloading, baggage routing, and ground support equipment operations.',
    tech: ['Ramp Management', 'Aircraft Loading', 'Safety Operations'],
    link: 'https://www.united.com',
  }
];

// ─── Animation variants ───────────────────────────────────────────────────────

const cardVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
};

// ─── Component ────────────────────────────────────────────────────────────────

const Work = () => {
  return (
    <WorkSection id="work">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>Work Experience</SectionTitle>
          <SectionSubtitle>
            Building impactful solutions across aviation and healthcare
          </SectionSubtitle>
        </SectionHeader>

        <ExperienceGrid>
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={exp.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ x: 4 }}
            >
              <CardHeader>
                <CardIcon>{exp.icon}</CardIcon>
                <CardInfo>
                  <JobTitle>{exp.title}</JobTitle>
                  <CompanyName>
                    {exp.company}
                    {exp.department && ` • ${exp.department}`}
                  </CompanyName>
                  <MetaInfo>
                    <MetaChip>{exp.duration}</MetaChip>
                    <MetaChip>
                      <FaMapMarkerAlt />
                      {exp.location}
                    </MetaChip>
                  </MetaInfo>
                </CardInfo>
              </CardHeader>

              <Description>{exp.description}</Description>

              <TechStack>
                {exp.tech.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechStack>

              {exp.link && (
                <CompanyLink href={exp.link} target="_blank" rel="noopener noreferrer">
                  Visit Website
                  <FaExternalLinkAlt size={11} />
                </CompanyLink>
              )}
            </ExperienceCard>
          ))}
        </ExperienceGrid>
      </Container>
    </WorkSection>
  );
};

export default Work;