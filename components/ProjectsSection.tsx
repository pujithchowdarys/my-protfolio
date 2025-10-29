import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
// Fix: Replaced individual project arrays with the combined PROJECTS array.
import { PROJECTS } from '../constants';

interface ProjectsSectionProps {
  isActive: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isActive }) => {
  if (!isActive) return null;

  // Fix: Categorize projects by slicing the main PROJECTS array.
  // Assuming the first 3 projects are AI/ML and the rest are Web Apps based on constants.ts structure.
  const aiMlProjects = PROJECTS.slice(0, 3);
  const webAppProjects = PROJECTS.slice(3);

  return (
    <Section id="projects" title="My Projects" className="bg-white">
      <div className="mb-12 animate-fade-in">
        <h3 className="text-3xl font-bold text-gray-700 text-center mb-8">AI/ML & Experience-Driven Projects</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {aiMlProjects.map((project, index) => (
            <ProjectCard key={`ai-ml-${index}`} project={project} />
          ))}
        </div>
      </div>

      <div className="animate-fade-in delay-200">
        <h3 className="text-3xl font-bold text-gray-700 text-center mb-8 mt-12">Websites & Web Applications</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {webAppProjects.map((project, index) => (
            <ProjectCard key={`web-app-${index}`} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProjectsSection;