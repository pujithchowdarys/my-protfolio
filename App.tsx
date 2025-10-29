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
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="pt-[var(--header-height)]"> {/* Adjust padding for fixed header */}
        {renderSection()}
      </main>

      <Footer />
    </div>
  );
};

export default App;