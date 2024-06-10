import React from 'react';
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    appUrl: string;
    githubUrl: string;
    imageUrl: string;
    description: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

  const handleCardClick = (event: React.MouseEvent) => {
    // Check if the click is on the card but not on the button
    if ((event.target as HTMLElement).tagName !== 'BUTTON' && 
        !(event.target as HTMLElement).closest('button')) {
      navigate(`/project/${project.id}`);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="project-card bg-[#171717] shadow-md rounded-lg w-[300px] sm:w-[320px] md:w-[360px] min-w-[260px] max-w-[360px] overflow-hidden mx-3 mb-6 md:mx-0 cursor-pointer"
    >
      <h2 className="text-xl font-semibold p-4">{project.title}</h2>
      <img className="w-full h-48 object-cover" src={project.imageUrl} alt={`${project.title}/Netlify`} />
      <p className="px-4">{project.description}</p>
      <div className="p-4 flex space-x-4 justify-between">
        <a
          href={project.appUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => event.stopPropagation()} // Prevent card click from triggering
        >
          <button className="bg-red-500 text-white font-semibold px-6 py-2 rounded hover:bg-red-600">
            <PlayCircleIcon /> View App
          </button>
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => event.stopPropagation()} // Prevent card click from triggering
        >
          <button className="bg-[#1260BC] text-white font-semibold px-6 py-2 rounded hover:bg-[#1248bc]">
            <GitHubIcon /> View Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;