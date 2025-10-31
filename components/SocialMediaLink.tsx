import React from 'react';
import { SocialMedia } from '../types';

interface SocialMediaLinkProps {
  link: SocialMedia;
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ link }) => {
  const getIconColor = (platform: string) => {
    switch (platform) {
      case 'YouTube': return 'text-red-600';
      case 'Facebook': return 'text-blue-600';
      case 'Instagram': return 'text-pink-600';
      case 'LinkedIn': return 'text-blue-700';
      case 'X': return 'text-gray-700'; // Changed from 'text-gray-800' to a slightly lighter gray for better contrast
      default: return 'text-gray-600';
    }
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-200 transform hover:-translate-y-1"
    >
      {link.icon && (
        <svg className={`w-8 h-8 mr-4 ${getIconColor(link.platform)}`} fill="currentColor" viewBox="0 0 24 24">
          <path d={link.icon} />
        </svg>
      )}
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{link.name}</h3>
        <p className="text-gray-600 text-sm">{link.description || link.url}</p>
      </div>
    </a>
  );
};

export default SocialMediaLink;