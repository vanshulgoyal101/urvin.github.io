// src/components/Work/Work.jsx
import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlane, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

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
  cursor: pointer;
  transition: border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
              border-left-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    border-color: rgba(0, 93, 166, 0.4);
    border-left-color: var(--color-accent-primary);
    box-shadow: 0 15px 30px rgba(0, 93, 166, 0.06);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: var(--spacing-md);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
  flex-wrap: wrap;
`;

const CardIcon = styled.div`
  width: 44px;
  height: 44px;
  min-width: 44px;
  border-radius: 12px;
  background: rgba(0, 93, 166, 0.08);
  border: 1px solid rgba(0, 93, 166, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent-primary);
  font-size: 1.1rem;
  transition: background 0.3s ease;

  ${ExperienceCard}:hover & {
    background: rgba(0, 93, 166, 0.15);
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
  background: rgba(0, 93, 166, 0.05);
  color: var(--color-accent-primary);
  padding: 4px 12px;
  border-radius: 16px;
  font-size: var(--text-xs);
  border: 1px solid rgba(0, 93, 166, 0.1);
`;

const ExpandToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--color-accent-primary);
  font-size: var(--text-sm);
  font-weight: 600;
  margin-top: var(--spacing-md);
  
  svg {
    font-size: 0.8rem;
  }
`;

const DetailsWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: var(--spacing-md);
`;

const BulletPoints = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--color-text-secondary);
  font-size: var(--text-base);
  line-height: 1.7;
`;

const BulletPoint = styled.li`
  color: var(--color-text-secondary);
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
    description: 'Owns strategy, roadmap, and requirements for operational analytics products supporting airport and network operations at United Airlines.',
    tech: ['Product Strategy', 'Roadmapping', 'Operational Analytics', 'Executive Communication'],
    bullets: [
      'Own strategy, roadmap, and requirements for operational analytics products supporting airport and network operations, ensuring every capability delivers measurable operational value.',
      'Direct product direction for the integrated operational data foundation: set availability, quality, and governance standards; prioritize data integration across airline systems; and drive adoption via embedded tools and interfaces.',
      'Partner with Digital Technology to scope, build, test, and launch capabilities; define performance SLAs, quality gates, and ongoing measurement for continuous improvement.',
      'Lead decision‑support and optimization strategy for NOC/SOC—embedding rules engines, optimization logic, and recommendation frameworks into operational workflows while maintaining ownership of business logic.',
      'Develop and coach a high‑performing analytics team (on‑shore/off‑shore) to be product‑minded, technically fluent, and delivery‑oriented.',
      'Modernized operational visibility by designing intuitive reliability, staffing, and real time tools used by Senior Hub Leadership, SOC, and frontline supervisors.',
      'Led cross functional initiatives with Inflight, AO, SOC, NOC, Crew, and IT to ensure performance insights drive customer reliability and efficient service delivery.',
      'Developed multi year analytics and application development strategy aligned with corporate customer experience and dependability goals.',
      'Established governance for tool deployment, change control, pressure testing, and end user training to ensure consistent experience across hubs.'
    ]
  },
  {
    id: 2,
    icon: <FaPlane />,
    title: 'Operations Manager - Performance & Execution',
    company: 'United Airlines',
    department: 'Airport Operations',
    duration: 'Aug 2021 – May 2023',
    location: 'Chicago, IL',
    description: 'Developed and prioritized product backlogs and multi-year roadmaps for integration platforms and predictive tools that align with operational goals.',
    tech: ['Spotfire Analytics', 'Predictive Modeling', 'API Integration', 'Platform Engineering'],
    bullets: [
      'Developed and prioritized product backlogs and multi-year roadmaps for integration platforms and predictive tools that effectively align with and support operational goals.',
      'Established clear success criteria and validation protocols for models, collaborating with platform engineering, architecture, and security teams to enhance the scalability of data and analytics capabilities.',
      'Created robust deployment and post-deployment support practices, while actively identifying automation opportunities across various environments to enhance release reliability.',
      'Designed multiple predictive models that serve as essential decision-support tools for stations, the Network Operations Center (NOC), and cross-functional stakeholders, leading to significant improvements in on-time performance, customer recovery, and service reliability.',
      'Formulated and managed strategic roadmaps for enterprise API management and messaging platforms, ensuring that technology capabilities meet and respond to the evolving operational business needs.',
      'Facilitated product backlog management and prioritized system enhancements based on feedback from frontline users and executive leadership to enhance usability and overall user experience.',
      'Engaged and influenced MD, VP, and SVP-level leaders by translating complex technical and operational information into accessible narratives that clearly connect to customer impacts.',
      'Oversaw enterprise-level deployments, automation strategies, and post-launch support, ensuring continuity and minimal disruption to frontline operations.',
      'Provided governance for Spotfire analytics platforms, expanding their utilization to enhance operational transparency and insight.'
    ]
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
    bullets: [
      'Facilitated station performance reviews and predictive analyses, enhancing operational tools as the SOC IT liaison to drive improvements.',
      'Spearheaded tactical planning for irregular operations and collaborated across departments (Flight Ops, Inflight, Maintenance, Airport Authorities) to boost reliability and achieve better D0/A14 outcomes.',
      'Managed gate expansion and re-banking initiatives at ORD, focusing on financial optimization and strategic workforce planning within SOC.',
      'Acted as the station operational champion for On-Time performance, MBR, Customer Satisfaction, Dependability, and service consistency, fostering close partnerships with Inflight, AO, and customer-recovery teams.',
      'Developed customer-reliability dashboards to support misconnect recovery, advance booking analysis, and informed real-time customer support decision-making.',
      'Led emergency planning and business continuity initiatives, ensuring full adherence to airport, government, and WHQ requirements.',
      'Promoted cross-divisional collaboration with Flight Ops, Inflight, Maintenance, Government Agencies, Airport Authorities, and UAX partners to enhance customer experience and operational dependability.',
      'Directed Gate Expansion and aligned Future Flight Schedules for ORD, focusing on optimizing customer flow and ensuring minimum connection time protection.',
      'Supervised SOC staffing, annual bids, scheduling, and budget optimization to enhance productivity and service reliability.'
    ]
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
    bullets: [
      'Facilitated station performance reviews and predictive analyses, enhancing operational tools as the SOC IT liaison to drive improvements.',
      'Spearheaded tactical planning for irregular operations and collaborated across departments (Flight Ops, Inflight, Maintenance, Airport Authorities) to boost reliability and achieve better D0/A14 outcomes.',
      'Managed gate expansion and re-banking initiatives at ORD, focusing on financial optimization and strategic workforce planning within SOC.',
      'Acted as the station operational champion for On-Time performance, MBR, Customer Satisfaction, Dependability, and service consistency, fostering close partnerships with Inflight, AO, and customer-recovery teams.',
      'Developed customer-reliability dashboards to support misconnect recovery, advance booking analysis, and informed real-time customer support decision-making.',
      'Led emergency planning and business continuity initiatives, ensuring full adherence to airport, government, and WHQ requirements.',
      'Promoted cross-divisional collaboration with Flight Ops, Inflight, Maintenance, Government Agencies, Airport Authorities, and UAX partners to enhance customer experience and operational dependability.',
      'Directed Gate Expansion and aligned Future Flight Schedules for ORD, focusing on optimizing customer flow and ensuring minimum connection time protection.',
      'Supervised SOC staffing, annual bids, scheduling, and budget optimization to enhance productivity and service reliability.'
    ]
  },
  {
    id: 5,
    icon: <FaPlane />,
    title: 'Zone Control Supervisor',
    company: 'United Airlines',
    department: 'Zone Control',
    duration: 'Mar 2013 – Dec 2015',
    location: 'San Francisco, CA',
    description: 'Supervised real-time zone operations, aircraft ground handling, and turnaround performance to minimize ground delays.',
    tech: ['Turnaround Optimization', 'Ramp Operations', 'Zone Supervision'],
    bullets: [
      'Supervised real-time zone operations, aircraft ground handling, and turnaround performance under tight scheduling constraints.',
      'Coordinated ramp movements, baggage handling flows, and fueling operations to minimize ground delays.',
      'Managed immediate recovery protocols during irregular operations (IROPS) at the hub.'
    ]
  },
  {
    id: 6,
    icon: <FaPlane />,
    title: 'Customer Service Supervisor',
    company: 'United Airlines',
    department: 'Customer Service',
    duration: 'Feb 2011 – Mar 2013',
    location: 'San Francisco Bay Area',
    description: 'Led passenger service teams, resolved customer recovery challenges, and supervised ticketing lobbies and gates.',
    tech: ['Customer Recovery', 'Lobby Operations', 'Team Leadership'],
    bullets: [
      'Led passenger service representatives across ticketing lobbies, gate areas, and baggage service counters.',
      'Resolved passenger disruptions, facilitated flight connections, and implemented customer recovery initiatives.',
      'Ensured compliance with corporate customer experience standards and airport safety regulations.'
    ]
  },
  {
    id: 7,
    icon: <FaPlane />,
    title: 'Ramp Agent',
    company: 'United Airlines',
    department: 'Ramp Operations',
    duration: 'Nov 2007 – Feb 2011',
    location: 'San Francisco Bay Area',
    description: 'Gained foundational hands-on operational experience executing aircraft loading and ground operations.',
    tech: ['Ramp Management', 'Aircraft Loading', 'Safety Operations'],
    bullets: [
      'Executed safe and efficient aircraft loading, unloading, and baggage routing operations on the ramp.',
      'Operated heavy ground support equipment in accordance with safety standards.',
      'Collaborated with flight crews and gate agents to protect on-time departure metrics.'
    ]
  },
  {
    id: 8,
    icon: <FaPlane />,
    title: 'Airport Operations Personnel',
    company: 'Sacramento International Airport',
    department: 'Airport Operations',
    duration: 'Jun 2011 – Jul 2012',
    location: 'Greater Sacramento Area',
    description: 'Assisted in managing airport landside and airside activities, ensuring safety and compliance.',
    tech: ['Airport Operations', 'Security Compliance', 'Passenger Coordination'],
    bullets: [
      'Monitored airside and landside security compliance at Sacramento International Airport.',
      'Facilitated passenger coordination and queue management during peak traffic flows.',
      'Collaborated with airport authorities to maintain regulatory compliance.'
    ]
  }
];

// ─── Animation variants ───────────────────────────────────────────────────────

const cardVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

// ─── Component ────────────────────────────────────────────────────────────────

const Work = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (id, e) => {
    // Prevent event bubbling if clicked directly on buttons
    e.stopPropagation();
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
            Building high-performance airport operations and analytical decision tools at scale
          </SectionSubtitle>
        </SectionHeader>

        <ExperienceGrid>
          {experiences.map((exp, i) => {
            const isExpanded = !!expandedCards[exp.id];
            return (
              <ExperienceCard
                key={exp.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                onClick={(e) => toggleExpand(exp.id, e)}
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

                <ExpandToggle>
                  {isExpanded ? (
                    <>
                      <span>Hide Details</span>
                      <FaChevronUp />
                    </>
                  ) : (
                    <>
                      <span>View Details</span>
                      <FaChevronDown />
                    </>
                  )}
                </ExpandToggle>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <DetailsWrapper
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <BulletPoints>
                        {exp.bullets.map((bullet, idx) => (
                          <BulletPoint key={idx}>{bullet}</BulletPoint>
                        ))}
                      </BulletPoints>
                    </DetailsWrapper>
                  )}
                </AnimatePresence>
              </ExperienceCard>
            );
          })}
        </ExperienceGrid>
      </Container>
    </WorkSection>
  );
};

export default Work;