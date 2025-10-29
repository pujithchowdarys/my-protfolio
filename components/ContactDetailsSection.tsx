import React from 'react';
import Section from './Section';
import { CONTACT_EMAIL, PHONE_NUMBER, LINKEDIN_PROFILE } from '../constants';

interface ContactDetailsSectionProps {
  isActive: boolean;
}

const ContactDetailsSection: React.FC<ContactDetailsSectionProps> = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <Section id="contact-details" title="Get in Touch" className="bg-gray-50">
      <div className="max-w-2xl mx-auto text-center animate-fade-in">
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="space-y-4 text-left inline-block p-6 bg-white rounded-xl shadow-lg border border-gray-200">
          <p className="text-xl font-medium text-gray-800 flex items-center">
            <span className="text-blue-600 text-2xl mr-3">📧</span> Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-500 hover:underline">{CONTACT_EMAIL}</a>
          </p>
          <p className="text-xl font-medium text-gray-800 flex items-center">
            <span className="text-blue-600 text-2xl mr-3">📞</span> Phone: <a href={`tel:${PHONE_NUMBER}`} className="text-blue-500 hover:underline">{PHONE_NUMBER}</a>
          </p>
          <p className="text-xl font-medium text-gray-800 flex items-center">
            <span className="text-blue-600 text-2xl mr-3">🔗</span> LinkedIn: <a href={LINKEDIN_PROFILE} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Pujith Sakhamuri</a>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default ContactDetailsSection;