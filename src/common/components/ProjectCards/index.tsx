import React from 'react';
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import LinkIcon from '@mui/icons-material/Link';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    appUrl: string;
    githubUrl: string;
    imageUrl: string;
    introduction: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

  const handleCardClick = (event: React.MouseEvent) => {
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
      <h2 className="text-xl font-semibold p-4 h-[88px] md:h-[60px]">{project.title}</h2>
      <img className="w-full h-48 object-cover" src={project.imageUrl} alt={`${project.title}/Netlify`} />
      <p className="px-4 my-3 text-left h-[72px] md:h-[48px] line-clamp-2">{project.introduction}</p>
      <div className="p-4 flex space-x-3 justify-end">
        <a
          href={project.appUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => event.stopPropagation()}
        >
          <button className="bg-[#FF5C00] text-white font-semibold px-4 py-2 rounded hover:bg-[#ff4400] flex flex-row items-center">
            <LinkIcon style={{ fontSize: '16px' }} className='mr-2' />
            <div>
              <PlayCircleIcon className='ml-2' />
            </div>
          </button>
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => event.stopPropagation()}
        >
          <button className="bg-[#1260BC] text-white font-semibold px-4 py-2 rounded hover:bg-[#1248bc] flex flex-row items-center">
            <LinkIcon style={{ fontSize: '16px' }} className='mr-2' />
            <div>
              <GitHubIcon className='ml-2' />
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;