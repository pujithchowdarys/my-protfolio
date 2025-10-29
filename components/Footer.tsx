import React from 'react';
import { PROFILE_NAME, CONTACT_EMAIL, PHONE_NUMBER, LINKEDIN_PROFILE } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 mt-12">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <p className="text-sm font-semibold">Get in Touch:</p>
          <p className="text-sm">
            Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-300 hover:underline">{CONTACT_EMAIL}</a>
          </p>
          <p className="text-sm">
            Phone: <a href={`tel:${PHONE_NUMBER}`} className="text-blue-300 hover:underline">{PHONE_NUMBER}</a>
          </p>
          <p className="text-sm">
            LinkedIn: <a href={LINKEDIN_PROFILE} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">Pujith Sakhamuri</a>
          </p>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; {currentYear} {PROFILE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;