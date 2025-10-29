import React from 'react';
import Section from './Section';
import SocialMediaLink from './SocialMediaLink';
import { CATEGORIZED_SOCIAL_MEDIA_LINKS } from '../constants';

interface SocialMediaSectionProps {
  isActive: boolean;
}

const SocialMediaSection: React.FC<SocialMediaSectionProps> = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <Section id="social-media" title="Connect with me" className="bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
        {Object.entries(CATEGORIZED_SOCIAL_MEDIA_LINKS).map(([category, links]) => (
          <div key={category} className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
            <h3 className="text-3xl font-bold text-blue-700 mb-8 text-center">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {links.map((link, index) => (
                <SocialMediaLink key={index} link={link} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SocialMediaSection;