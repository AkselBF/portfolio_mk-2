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
    imageUrl: holidaze, 
    description: 'Holidaze is an app featuring a holiday-themed booking system'
  },
  {
    id: 4,
    title: 'JS frameworks',
    appUrl: 'https://leafy-macaron-b29a6e.netlify.app/',
    githubUrl: 'https://github.com/AkselBF/js_frameworks_ca',
    imageUrl: ecom, 
    description: 'This is a testing of javascript frameworks like react'
  },
  {
    id: 3,
    title: 'Day-Night Auction',
    appUrl: 'https://akselbf.github.io/Semester_Project_2/',
    githubUrl: 'https://github.com/AkselBF/Semester_Project_2',
    imageUrl: dna, 
    description: 'This is an auction-based app with heavy use of api'
  },
  {
    id: 2,
    title: 'Drop by drop',
    appUrl: 'https://hilarious-madeleine-1abb00.netlify.app/',
    githubUrl: 'https://github.com/AkselBF/project-exam-1-AkselBF',
    imageUrl: dropByDrop, 
    description: 'This is an app about water. Mostly using html, css and js'
  },
  {
    id: 1,
    title: 'Community Science Museum',
    appUrl: 'https://super-sherbet-88e920.netlify.app/',
    githubUrl: 'https://github.com/AkselBF/Community_Science_Museum',
    imageUrl: science, 
    description: 'An app featuring a science museum and one of my first works. Uses only html and css'
  },
];

const Projects: React.FC = () => {
  return (
    <div className="projects-list flex flex-row overflow-x-auto mr-3 ml-16 mb-5 md:grid md:grid-cols-1 md:overflow-x-hidden md:mr-0 md:ml-[28%] lg:mx-auto lg:gap-4 md:flex-col lg:grid-cols-2 xl:grid-cols-3">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Projects;