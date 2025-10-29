import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';

interface ProjectsSectionProps {
  isActive: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isActive }) => {
  if (!isActive) return null;

  // Categorize projects based on the new list
  const aiPoweredApps = PROJECTS.slice(0, 10); // First 10 projects are AI-powered
  const webAppsAndTools = PROJECTS.slice(10); // Remaining 2 projects are general web apps

  return (
    <Section id="projects" title="My Projects" className="bg-white">
      <div className="mb-12 animate-fade-in">
        <h3 className="text-3xl font-bold text-gray-700 text-center mb-8">AI-Powered Applications</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {aiPoweredApps.map((project, index) => (
            <ProjectCard key={`ai-powered-${index}`} project={project} />
          ))}
        </div>
      </div>

      <div className="animate-fade-in delay-200">
        <h3 className="text-3xl font-bold text-gray-700 text-center mb-8 mt-12">Web Applications & Tools</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {webAppsAndTools.map((project, index) => (
            <ProjectCard key={`web-app-${index}`} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProjectsSection;