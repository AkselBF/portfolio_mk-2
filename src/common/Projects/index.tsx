import React from 'react';
import ProjectCard from '../components/ProjectCards';
import holidaze from '../../assets/images/holidaze.png';
import dropByDrop from '../../assets/images/dropByDrop.png';
import dna from '../../assets/images/dna.png';
import ecom from '../../assets/images/ecom.png';
import science from '../../assets/images/museum_2.jpg';

const projects = [
  {
    id: 1,
    title: 'Community Science Museum',
    appUrl: 'https://super-sherbet-88e920.netlify.app/',
    githubUrl: 'https://github.com/AkselBF/Community_Science_Museum',
    imageUrl: science
  },
  {
    id: 2,
    title: 'Drop by drop',
    appUrl: 'https://hilarious-madeleine-1abb00.netlify.app/',
    githubUrl: 'https://github.com/AkselBF/project-exam-1-AkselBF',
    imageUrl: dropByDrop
  },
  {
    id: 3,
    title: 'Day-Night Auction',
    appUrl: 'https://akselbf.github.io/Semester_Project_2/',
    githubUrl: 'https://github.com/AkselBF/Semester_Project_2',
    imageUrl: dna
  },
  {
    id: 4,
    title: 'JS frameworks',
    appUrl: 'https://leafy-macaron-b29a6e.netlify.app/',
    githubUrl: 'https://github.com/AkselBF/js_frameworks_ca',
    imageUrl: ecom
  },
  {
    id: 5,
    title: 'Holidaze',
    appUrl: 'https://heroic-capybara-f5b72b.netlify.app/',
    githubUrl: 'https://github.com/AkselBF/holidaze',
    imageUrl: holidaze
  },
];

const Projects: React.FC = () => {
  return (
    <div className="projects-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Projects;