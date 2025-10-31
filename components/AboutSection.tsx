import React, { useState } from 'react';
import Section from './Section';
import { PROFILE_NAME, ABOUT_ME_TEXT, PROFILE_IMAGE_SRC } from '../constants';

interface AboutSectionProps {
  isActive: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isActive }) => {
  if (!isActive) return null;

  // State to handle image loading errors for the profile picture
  const [imageError, setImageError] = useState(false);

  // Fallback image source if the primary image fails to load
  const fallbackImageSrc = "https://via.placeholder.com/256/E0E0E0/757575?text=Profile+Image"; // A generic placeholder image

  return (
    <>
      {/* Hero Banner with Profile Picture and Welcome Message */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 md:py-24 text-center animate-fade-in-up">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center">
          {/* Profile Image */}
          <div className="mb-6 animate-opacity-in">
            <img
              src={imageError ? fallbackImageSrc : PROFILE_IMAGE_SRC}
              alt={`${PROFILE_NAME} profile`}
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl border-4 border-yellow-300 transition-transform duration-500 hover:scale-105 bg-gray-200 p-2"
              onError={() => setImageError(true)}
            />
          </div>

          {/* Welcome Message */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 leading-tight tracking-tight animate-fade-in-up">
            Welcome to <span className="text-yellow-300">{PROFILE_NAME}'s</span> Portfolio
          </h1>
          <p className="text-lg md:text-xl text-blue-100 italic max-w-2xl mx-auto animate-fade-in-up delay-200">
            Crafting delightful user experiences with modern web technologies.
          </p>
        </div>
      </div>

      {/* Original About Me Text - now below the hero */}
      <Section id="about" title="About Me" className="bg-white">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
            {ABOUT_ME_TEXT}
          </p>
          {/* Potentially add other intro elements here */}
        </div>
      </Section>
    </>
  );
};

export default AboutSection;