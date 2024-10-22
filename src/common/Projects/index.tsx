import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCards';
import { projects } from '../data/projectsData';
import ProjectFilter from '../components/ProjectFilter';
import '../Styles/Scrollbars/ProjectScrollbar.css';

const Projects: React.FC = () => {
  const [currentType, setCurrentType] = useState('frontend');
  const [visibleProjects, setVisibleProjects] = useState(projects);
  const [fadeState, setFadeState] = useState<'fade-out' | 'fade-in'>('fade-in');

  useEffect(() => {
    // Filter projects based on the current selected type
    const filteredProjects = projects.filter(project =>
      currentType === 'frontend' ? project.type === 'frontend' : project.type === 'art'
    );

    // Handle fade-out and fade-in animation
    setFadeState('fade-out');
    const timeout = setTimeout(() => {
      setVisibleProjects(filteredProjects);
      setFadeState('fade-in');
    }, 300);

    return () => clearTimeout(timeout);
  }, [currentType]);

  // Sets current type of projects
  const handleFilterChange = (type: string) => {
    setCurrentType(type);
  };

  return (
    <div className="projects-section">
      {/* Project Filter */}
      <ProjectFilter currentType={currentType} onFilterChange={handleFilterChange} />

      {/* Projects List */}
      <div className={`projects-list flex flex-row overflow-x-auto mr-3 ml-1 mb-5 md:grid md:grid-cols-1 md:overflow-x-hidden md:mr-0 md:ml-[28%] lg:ml-16 lg:mr-auto lg:gap-4 md:flex-col lg:grid-cols-2 xl:grid-cols-3 transition-opacity duration-300 ${fadeState}`}>
        {visibleProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;