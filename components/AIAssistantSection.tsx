import React from 'react';
import Section from './Section';
import Chatbot from './Chatbot';

interface AIAssistantSectionProps {
  isActive: boolean;
}

const AIAssistantSection: React.FC<AIAssistantSectionProps> = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <Section id="ai-assistant" title="Ask My AI Assistant" className="bg-white">
      <div className="max-w-3xl mx-auto animate-fade-in">
        <p className="text-lg text-gray-700 text-center mb-8">
          Have questions about my portfolio, experience, or projects? My AI assistant is here to help!
        </p>
        <Chatbot />
      </div>
    </Section>
  );
};

export default AIAssistantSection;