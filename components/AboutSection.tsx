import React, { useState } from 'react';
import Section from './Section';
import { PROFILE_NAME, ABOUT_ME_TEXT, PROFILE_IMAGE_SRC, DEFAULT_PROFILE_IMAGE_SVG_BASE64 } from '../constants';

interface AboutSectionProps {
  isActive: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isActive }) => {
  if (!isActive) return null;

  const [imageLoadError, setImageLoadError] = useState(false);

  return (
    <Section id="about" title={`About ${PROFILE_NAME}`} className="bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 animate-fade-in">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={imageLoadError ? DEFAULT_PROFILE_IMAGE_SVG_BASE64 : PROFILE_IMAGE_SRC}
            alt={`${PROFILE_NAME} profile`}
            className="rounded-full w-56 h-56 object-cover shadow-lg border-4 border-blue-500 animate-opacity-in bg-gray-200 p-2" // Added bg-gray-200 and p-2 for the SVG fallback
            onError={() => setImageLoadError(true)}
          />
        </div>
        {/* About Me Text */}
        <div className="md:flex-grow text-center md:text-left">
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
            {ABOUT_ME_TEXT}
          </p>
          {/* Potentially add other intro elements here */}
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;