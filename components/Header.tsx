import React from 'react';
import { PROFILE_NAME } from '../constants';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const handleNavigationClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setActiveSection(targetId);
    // Smooth scroll to the target section, taking into account the fixed header
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 64; // Fallback to 64px if variable not found
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerOffset - 24, // 24px for additional spacing
        behavior: 'smooth'
      });
    }
  };

  const getLinkClassName = (sectionId: string) =>
    `relative block py-2 px-3 transition-colors duration-300 ${
      activeSection === sectionId
        ? 'text-yellow-300 font-semibold'
        : 'text-white hover:text-blue-200'
    } md:before:absolute md:before:bottom-0 md:before:left-1/2 md:before:-translate-x-1/2 md:before:w-0 md:before:h-0.5 md:before:bg-yellow-300 md:before:transition-all md:before:duration-300 ${
      activeSection === sectionId ? 'md:before:w-full' : 'md:hover:before:w-3/4'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-700 to-indigo-800 shadow-lg h-16 flex items-center">
      <nav className="container mx-auto px-4 flex justify-between items-center w-full">
        <div className="text-2xl font-extrabold text-white tracking-tight">
          <a href="#about" onClick={(e) => handleNavigationClick(e, 'about')} className="hover:text-yellow-300 transition-colors duration-300">
            {PROFILE_NAME}
          </a>
        </div>
        <ul className="flex flex-wrap justify-center md:justify-end space-x-2 md:space-x-6 text-base font-medium">
          <li><a href="#about" onClick={(e) => handleNavigationClick(e, 'about')} className={getLinkClassName('about')}>About</a></li>
          <li><a href="#experience" onClick={(e) => handleNavigationClick(e, 'experience')} className={getLinkClassName('experience')}>Experience</a></li>
          <li><a href="#projects" onClick={(e) => handleNavigationClick(e, 'projects')} className={getLinkClassName('projects')}>Projects</a></li>
          <li><a href="#social-media" onClick={(e) => handleNavigationClick(e, 'social-media')} className={getLinkClassName('social-media')}>Social</a></li>
          <li><a href="#ai-assistant" onClick={(e) => handleNavigationClick(e, 'ai-assistant')} className={getLinkClassName('ai-assistant')}>AI Assistant</a></li>
          <li><a href="#contact-details" onClick={(e) => handleNavigationClick(e, 'contact-details')} className={getLinkClassName('contact-details')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;