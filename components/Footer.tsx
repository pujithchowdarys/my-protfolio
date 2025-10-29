import React from 'react';
import {
  PROFILE_NAME,
  CONTACT_EMAIL,
  PHONE_NUMBER,
  LINKEDIN_PROFILE,
  CATEGORIZED_SOCIAL_MEDIA_LINKS,
  FOOTER_SOCIAL_ICONS,
} from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Helper to get a social media link by platform name
  const getSocialMediaLink = (platformName: string): string => {
    // Flatten all social media links into a single array
    const allSocialLinks = Object.values(CATEGORIZED_SOCIAL_MEDIA_LINKS).flat();
    const link = allSocialLinks.find(
      (s) => s.platform.toLowerCase() === platformName.toLowerCase()
    );
    return link?.url || '#'; // Return URL or '#' if not found
  };

  const quickLinks = [
    { name: "Home", href: "#about" },
    { name: "YouTube", href: getSocialMediaLink("YouTube") },
    { name: "Instagram", href: getSocialMediaLink("Instagram") },
    { name: "Facebook", href: getSocialMediaLink("Facebook") },
    { name: "Telegram", href: getSocialMediaLink("Telegram") },
    { name: "X", href: getSocialMediaLink("X") },
    { name: "LinkedIn", href: getSocialMediaLink("LinkedIn") },
    { name: "Contact", href: "#contact-details" },
  ];

  const socialFollowLinks = [
    { platform: "YouTube", name: "YouTube", url: getSocialMediaLink("YouTube") },
    { platform: "Instagram", name: "Instagram", url: getSocialMediaLink("Instagram") },
    { platform: "X", name: "X", url: getSocialMediaLink("X") },
    { platform: "LinkedIn", name: "LinkedIn", url: getSocialMediaLink("LinkedIn") },
    { platform: "Facebook", name: "Facebook", url: getSocialMediaLink("Facebook") },
    { platform: "Snapchat", name: "Snapchat", url: getSocialMediaLink("Snapchat") },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 px-4 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">

        {/* Column 1: Copyright, Made With, and Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-gray-300 text-sm mb-2">
            &copy; {currentYear} {PROFILE_NAME}. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mb-6">
            Made with ❤️ using Google AI Studio
          </p>
          <h4 className="text-yellow-300 text-lg font-bold mb-4">Get in Touch:</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              Email: <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors duration-200">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              Phone: <a href={`tel:${PHONE_NUMBER}`} className="hover:text-white transition-colors duration-200">
                {PHONE_NUMBER}
              </a>
            </li>
            <li>
              LinkedIn: <a href={LINKEDIN_PROFILE} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                Pujith Sakhamuri
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-yellow-300 text-lg font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Follow Me with Logos */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-yellow-300 text-lg font-bold mb-4">Follow Me</h4>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {socialFollowLinks.map((social, index) => {
              const iconData = FOOTER_SOCIAL_ICONS[social.platform];
              if (!iconData) return null; // Fallback if icon data is missing

              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow me on ${social.name}`}
                  className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${iconData.color} ${iconData.hoverColor} hover:scale-110`}
                >
                  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                    <path d={iconData.path} />
                  </svg>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;