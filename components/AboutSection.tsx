import React from 'react';
import Section from './Section';
import { PROFILE_NAME, ABOUT_ME_TEXT } from '../constants';

interface AboutSectionProps {
  isActive: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <Section id="about" title={`About ${PROFILE_NAME}`} className="bg-white">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
          {ABOUT_ME_TEXT}
        </p>
        {/* Potentially add an image or other intro elements here */}
        <div className="mt-8 flex justify-center">
          <img
            src="https://picsum.photos/300/300?random=profile" // Placeholder image
            alt={`${PROFILE_NAME} profile`}
            className="rounded-full w-40 h-40 object-cover shadow-lg border-4 border-blue-500 animate-opacity-in"
          />
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;