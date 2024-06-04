import React from 'react';
import ProjectCard from '../components/ProjectCards';
import holidaze from '../../assets/images/holidaze.png';
import dropByDrop from '../../assets/images/dropByDrop.png';
import dna from '../../assets/images/dna.png';
import ecom from '../../assets/images/ecom.png';
import science from '../../assets/images/museum_2.jpg';
import '../Styles/Scrollbars/ProjectScrollbar.css';

const projects = [
  {
    id: 5,
    title: 'Holidaze',
    appUrl: 'https://heroic-capybara-f5b72b.netlify.app/',
    githubUrl: 'https://github.com/AkselBF/holidaze',
    imageUrl: holidaze
  },
  {
    id: 4,
    title: 'JS frameworks',
    appUrl: 'https://leafy-macaron-b29a6e.netlify.app/',
    githubUrl: 'https://github.com/AkselBF/js_frameworks_ca',
    imageUrl: ecom
  },
  {
    id: 3,
    title: 'Day-Night Auction',
    appUrl: 'https://akselbf.github.io/Semester_Project_2/',
    githubUrl: 'https://github.com/AkselBF/Semester_Project_2',
    imageUrl: dna
  },
  {
    id: 2,
    title: 'Drop by drop',
    appUrl: 'https://hilarious-madeleine-1abb00.netlify.app/',
    githubUrl: 'https://github.com/AkselBF/project-exam-1-AkselBF',
    imageUrl: dropByDrop
  },
  {
    id: 1,
    title: 'Community Science Museum',
    appUrl: 'https://super-sherbet-88e920.netlify.app/',
    githubUrl: 'https://github.com/AkselBF/Community_Science_Museum',
    imageUrl: science
  },
];

const Projects: React.FC = () => {
  return (
    <div className="projects-list flex flex-row overflow-x-auto mx-3 mb-5">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Projects;