import React from 'react';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-200">
      <h3 className="text-2xl font-semibold text-blue-700 mb-2">{experience.title}</h3>
      <p className="text-xl text-gray-800 mb-1">{experience.company}</p>
      <p className="text-sm text-gray-500 mb-4">{experience.duration}</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {experience.responsibilities.map((resp, index) => (
          <li key={index} className="leading-relaxed">{resp}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;