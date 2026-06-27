// src/components/About/About.jsx
import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaGraduationCap, FaCode, FaRocket, FaTrophy,
  FaTools, FaPlane
} from 'react-icons/fa';

// ─── Styled Components ────────────────────────────────────────────────────────

const AboutSection = styled.section`
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
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`;

const SectionTitle = styled.h2`
  font-size: var(--text-5xl);
  margin-bottom: var(--spacing-md);
  background: var(--color-gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: var(--text-3xl);
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

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: var(--spacing-2xl);
  align-items: center;
  margin-bottom: var(--spacing-2xl);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
`;

const AboutContent = styled.div``;

const Biography = styled.div`
  color: var(--color-text-secondary);
  font-size: var(--text-lg);
  line-height: 1.8;
  margin-bottom: var(--spacing-lg);

  p {
    margin-bottom: var(--spacing-md);
  }

  @media (max-width: 768px) {
    font-size: var(--text-base);
  }
`;

const AboutImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// ─── Stats ────────────────────────────────────────────────────────────────────

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-2xl);

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  padding: var(--spacing-lg);
  border-radius: 16px;
  text-align: center;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: rgba(0, 93, 166, 0.3);
    box-shadow: 0 10px 25px rgba(0, 93, 166, 0.04);
  }
`;

const StatIcon = styled.div`
  font-size: 2rem;
  color: var(--color-accent-primary);
  margin-bottom: var(--spacing-xs);
  display: flex;
  justify-content: center;
`;

const StatNumber = styled.h3`
  font-size: var(--text-2xl);
  font-weight: 700;
  margin-bottom: var(--spacing-xs);
  color: var(--color-text-primary);
`;

const StatLabel = styled.p`
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
`;

// ─── Education ────────────────────────────────────────────────────────────────

const EducationContainer = styled.div`
  margin-top: var(--spacing-2xl);
  margin-bottom: var(--spacing-2xl);
`;

const EducationTitle = styled.h3`
  font-size: var(--text-2xl);
  text-align: center;
  margin-bottom: var(--spacing-lg);
  color: var(--color-text-primary);
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-md);
`;

const EducationCard = styled(motion.div)`
  background: var(--color-bg-card);
  padding: var(--spacing-lg);
  border-radius: 16px;
  border: 1px solid var(--color-border);
  position: relative;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: rgba(0, 93, 166, 0.3);
    box-shadow: 0 10px 25px rgba(0, 93, 166, 0.04);
  }
`;

const EduSchool = styled.h4`
  font-size: var(--text-lg);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
`;

const EduDegree = styled.p`
  font-size: var(--text-sm);
  color: var(--color-accent-primary);
  font-weight: 500;
  margin-bottom: var(--spacing-xs);
`;

const EduMeta = styled.p`
  font-size: var(--text-xs);
  color: var(--color-text-secondary);
  margin-bottom: 2px;
`;

const EduGrade = styled.span`
  display: inline-block;
  background: rgba(0, 93, 166, 0.06);
  color: var(--color-accent-primary);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: var(--text-xs);
  font-weight: 600;
  margin-top: var(--spacing-xs);
`;

// ─── Skills ───────────────────────────────────────────────────────────────────

const SkillsContainer = styled.div`
  margin-top: var(--spacing-2xl);
`;

const SkillsTitle = styled.h3`
  font-size: var(--text-2xl);
  text-align: center;
  margin-bottom: var(--spacing-lg);
  color: var(--color-text-primary);
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled(motion.div)`
  background: var(--color-bg-card);
  padding: var(--spacing-lg);
  border-radius: 16px;
  border: 1px solid var(--color-border);
`;

const SkillCategoryTitle = styled.h4`
  font-size: var(--text-lg);
  margin-bottom: var(--spacing-md);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-accent-primary);
`;

const SkillsList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
`;

const SkillTag = styled.li`
  background: rgba(0, 93, 166, 0.05);
  color: var(--color-text-primary);
  padding: 5px 14px;
  border-radius: 20px;
  font-size: var(--text-sm);
  border: 1px solid rgba(0, 93, 166, 0.1);
  transition: all 0.25s ease;

  &:hover {
    background: rgba(0, 93, 166, 0.12);
    border-color: var(--color-accent-primary);
    transform: translateY(-2px);
  }
`;

// ─── Data ─────────────────────────────────────────────────────────────────────

const statsData = [
  { icon: <FaGraduationCap />, number: 'SJSU', label: 'B.S. in Aviation Management & Operations' },
  { icon: <FaRocket />, number: '18+ Yrs', label: 'Career progression at United Airlines' },
  { icon: <FaTrophy />, number: 'NOC/SOC', label: 'Platform Governance & Network Operations Center Liaison' },
  { icon: <FaCode />, number: 'APIs', label: 'Enterprise API management & predictive tools' },
];

const educationData = [
  {
    school: 'San Jose State University',
    degree: "Bachelor's in Aviation Management, Aviation/Airway Management and Operations",
    years: '2007 – 2009',
    grade: 'Grade: 3.67',
    location: 'San Jose, CA'
  },
  {
    school: 'St. Petersburg Community College',
    degree: "Associate's in Science (Pharmacy)",
    years: '2004 – 2006',
    grade: 'Grade: 3.76',
    location: 'St. Petersburg, FL'
  },
  {
    school: 'South Gujarat University',
    degree: "Bachelor's in Mathematics",
    years: '2001 – 2004',
    grade: 'Grade: 3.79',
    location: 'Surat, Gujarat, India'
  }
];

const skills = [
  { category: 'Strategic Leadership', icon: <FaRocket />, list: ['Product Strategy', 'Roadmapping', 'Operational Analytics', 'NOC Liaison'] },
  { category: 'Airport Operations', icon: <FaPlane />, list: ['Performance & Execution', 'Gate Control', 'Zone Supervision', 'Ramp Operations'] },
  { category: 'Technical & Data', icon: <FaTools />, list: ['Spotfire Analytics', 'Enterprise APIs', 'Predictive Modeling', 'System Scaling'] },
  { category: 'Team & Governance', icon: <FaGraduationCap />, list: ['Cross-functional Leadership', 'Vendor Management', 'Release Reliability', 'Executive Narratives'] },
];

// ─── Animation variants ───────────────────────────────────────────────────────

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

// ─── Component ────────────────────────────────────────────────────────────────

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle>About Me</SectionTitle>
            <SectionSubtitle>
              Over 18 years of airport performance, systems engineering, and technology strategy in airline operations.
            </SectionSubtitle>
          </motion.div>
        </SectionHeader>

        <AboutGrid>
          <AboutContent>
            <Biography>
              <p>
                My professional career spans over 18 years within airport hub operations at United Airlines, moving from front-line execution on the ramp to leading analytical performance product strategy at the corporate level.
              </p>
              <p>
                I specialize in developing predictive decision‑support products, enterprise API backlogs, and real‑time operations data governance. Bridging the gap between frontline operations, data analytics, and digital technology platforms, I ensure every platform release drives network dependability and airport execution reliability.
              </p>
            </Biography>
          </AboutContent>

          <AboutImageContainer>
            <img
              src={`${import.meta.env.BASE_URL}images/urvin IKC team.jpg`}
              alt="URVIN IKC Team"
              style={{ maxWidth: '100%', borderRadius: '50px' }}
            />
          </AboutImageContainer>
        </AboutGrid>

        {/* Stats */}
        <div>
          <StatsGrid>
            {statsData.map((stat, i) => (
              <StatCard
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -4 }}
              >
                <StatIcon>{stat.icon}</StatIcon>
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
        </div>

        {/* Education History */}
        <EducationContainer>
          <EducationTitle>Education</EducationTitle>
          <EducationGrid>
            {educationData.map((edu, i) => (
              <EducationCard
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
              >
                <EduSchool>{edu.school}</EduSchool>
                <EduDegree>{edu.degree}</EduDegree>
                <EduMeta>{edu.years} • {edu.location}</EduMeta>
                <EduGrade>{edu.grade}</EduGrade>
              </EducationCard>
            ))}
          </EducationGrid>
        </EducationContainer>

        {/* Skills */}
        <SkillsContainer>
          <SkillsTitle>Technical Skills</SkillsTitle>
          <SkillsGrid>
            {skills.map(({ category, icon, list }, i) => (
              <SkillCategory
                key={category}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <SkillCategoryTitle>
                  {icon}
                  {category}
                </SkillCategoryTitle>
                <SkillsList>
                  {list.map((skill) => (
                    <SkillTag key={skill}>{skill}</SkillTag>
                  ))}
                </SkillsList>
              </SkillCategory>
            ))}
          </SkillsGrid>
        </SkillsContainer>
      </Container>
    </AboutSection>
  );
};

export default About;