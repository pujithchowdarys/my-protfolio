import React from 'react';
import Section from './Section';
import ExperienceCard from './ExperienceCard';
import { CAREER_EXPERIENCE } from '../constants';

interface ExperienceSectionProps {
  isActive: boolean;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <Section id="experience" title="Work Experience" className="bg-gray-50">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-fade-in">
        {CAREER_EXPERIENCE.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;