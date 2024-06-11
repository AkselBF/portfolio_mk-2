import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../../data/projectsData";
import '../../Styles/Scrollbars/ProjectScrollbar.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import HomeIcon from '@mui/icons-material/Home';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = Number(id);
  const project = projects.find(p => p.id === projectId);
  const navigate = useNavigate();

  if (!project) {
    return <div className="text-white text-xl font-semibold">Project not found</div>;
  }

  return (
    <div className="project-detail text-left">
      <img className="w-full h-[320px] object-cover mb-4" src={project.imageUrl} alt={project.title} />
      <div className="relative">
        <h1 className="text-center text-white bg-[#00050C80] -mt-[64px] py-2 px-6 text-2xl font-semibold">{project.title}</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between px-3 md:px-12 mt-6">
        <div className="w-full sm:w-[80%] lg:w-[40%] mx-auto">
          <img className="rounded-md" src={project.imageUrl} alt={project.title} />
        </div>

        <div className="relative w-full sm:w-[80%] lg:w-[50%] mx-auto my-6 lg:my-0">
          <p className="projects-list text-white px-2 overflow-y-auto max-h-[168px] md:max-h-[144px]">{project.detailDescription}</p>
          <div className="flex flex-col items-center sm:items-end justify-end sm:flex-row space-y-3 sm:space-x-4 sm:space-y-0 mt-10 lg:absolute lg:bottom-0 lg:right-0">
            <a href={project.appUrl} target="_blank" rel="noopener noreferrer">
              <button className="bg-red-500 text-white w-[160px] py-2 rounded hover:bg-red-600">
                <PlayCircleIcon /> View App
              </button>
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <button className="bg-[#1260BC] text-white w-[160px] py-2 rounded hover:bg-[#1248bc]">
                <GitHubIcon /> View Code
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="justify-center text-center sm:text-left">
        <button
          onClick={() => navigate('/')}
          className="bg-white text-black font-semibold mt-10 mb-16 mx-auto sm:mx-[70px] px-6 py-2 rounded-md hover:bg-gray-200"
        >
          <HomeIcon /> Back Home
        </button>
      </div>
    </div>
  );
};

export default ProjectDetail;