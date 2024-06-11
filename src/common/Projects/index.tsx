import React from 'react';
import ProjectCard from '../components/ProjectCards';
import { projects } from '../data/projectsData';
import '../Styles/Scrollbars/ProjectScrollbar.css';

const Projects: React.FC = () => {
  return (
    <div className="projects-list flex flex-row overflow-x-auto mr-3 ml-1 mb-5 md:grid md:grid-cols-1 md:overflow-x-hidden md:mr-0 md:ml-[28%] lg:ml-16 lg:mr-auto lg:gap-4 md:flex-col lg:grid-cols-2 xl:grid-cols-3">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Projects;