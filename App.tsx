import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SocialMediaSection from './components/SocialMediaSection';
import AIAssistantSection from './components/AIAssistantSection';
import ContactDetailsSection from './components/ContactDetailsSection';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');

  // Centralized navigation handler for smooth scrolling and active section management
  const handleSectionNavigation = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setActiveSection(targetId);

    // Defer scrolling to allow React to render the new section
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 64; // Fallback to 64px
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - headerOffset - 24, // 24px for additional spacing
          behavior: 'smooth'
        });
      }
    }, 0); // Small delay to allow re-render
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection isActive={true} />;
      case 'experience':
        return <ExperienceSection isActive={true} />;
      case 'projects':
        return <ProjectsSection isActive={true} />;
      case 'social-media':
        return <SocialMediaSection isActive={true} />;
      case 'ai-assistant':
        return <AIAssistantSection isActive={true} />;
      case 'contact-details':
        return <ContactDetailsSection isActive={true} />;
      default:
        return <AboutSection isActive={true} />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header activeSection={activeSection} onNavigate={handleSectionNavigation} />

      <main className="pt-[var(--header-height)]"> {/* Adjust padding for fixed header */}
        {renderSection()}
      </main>

      <Footer onNavigate={handleSectionNavigation} />
    </div>
  );
};

export default App;