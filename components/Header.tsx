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
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of the page on navigation
  };

  const getLinkClassName = (sectionId: string) =>
    `hover:text-blue-200 transition-colors duration-300 ${
      activeSection === sectionId ? 'text-yellow-300 underline' : ''
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg text-white">
      {/* Main Title Section - Moved to the top */}
      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 py-3 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold animate-fade-in-up">
          Welcome to <span className="text-yellow-300">{PROFILE_NAME}'s</span> Portfolio
        </h1>
        <p className="text-sm md:text-base text-blue-100 italic animate-fade-in-up delay-200">
          Crafting delightful user experiences with modern web technologies.
        </p>
      </div>

      <nav className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-bold mb-4 md:mb-0">
          <a href="#about" onClick={(e) => handleNavigationClick(e, 'about')} className={getLinkClassName('about')}>
            {PROFILE_NAME}
          </a>
        </div>
        <ul className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-8 text-lg font-medium">
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