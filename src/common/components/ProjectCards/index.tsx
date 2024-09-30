import React from 'react';
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import netlifyIcon from '../../../assets/icons/netlifyIcon.png';
//import PlayCircleIcon from '@mui/icons-material/PlayCircle';
//import LinkIcon from '@mui/icons-material/Link';

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
      className="group project-card relative bg-[#171717] shadow-md rounded-lg w-[300px] sm:w-[320px] md:w-[360px] min-w-[260px] max-w-[360px] overflow-hidden mx-3 mb-6 md:mx-0 cursor-pointer transition duration-300"
    >
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none z-0"></div>

      <h2 className="text-xl font-semibold p-4 h-[88px] md:h-[60px] relative z-10">{project.title}</h2>

      {/* Removed z-index from the image */}
      <img className="w-full h-48 object-cover" src={project.imageUrl} alt={`${project.title}/Netlify`} />

      <p className="px-4 my-3 text-left h-[72px] md:h-[48px] line-clamp-2 relative z-10">{project.introduction}</p>

      <div className="p-4 flex space-x-3 justify-end sxl:opacity-0 sxl:group-hover:opacity-100 transition-opacity duration-300 relative z-20">
        <a
          href={project.appUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => event.stopPropagation()}
        >
          <button className="bg-[#387AA3] text-white font-semibold p-2 rounded-full hover:bg-[#15cdb7] flex flex-row items-center transition duration-300">
            <div>
              <img src={netlifyIcon} alt="Live" className="w-[24px] h-[24px]" />
            </div>
          </button>
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => event.stopPropagation()}
        >
          <button className="bg-[#387AA3] text-white font-semibold p-2 h-[40px] rounded-full hover:bg-[#2688e4] flex flex-row items-center transition duration-300">
            <div>
              <GitHubIcon className='mb-[2px]' />
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;