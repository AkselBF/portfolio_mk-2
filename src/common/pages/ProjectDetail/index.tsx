import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../../data/projectsData";
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = Number(id);
  const project = projects.find(p => p.id === projectId);
  const navigate = useNavigate();

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail p-6">
      <h1 className="text-2xl font-semibold">{project.title}</h1>
      <img className="w-full h-64 object-cover my-4" src={project.imageUrl} alt={project.title} />
      <p>{project.description}</p>
      <div className="flex space-x-4 mt-4">
        <a href={project.appUrl} target="_blank" rel="noopener noreferrer">
          <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
            <PlayCircleIcon /> View App
          </button>
        </a>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          <button className="bg-[#1260BC] text-white px-6 py-2 rounded hover:bg-[#1248bc]">
            <GitHubIcon /> View Code
          </button>
        </a>
      </div>
      <button
        onClick={() => navigate('/')}
        className="bg-[#1260BC] text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600 mb-6"
      >
        Back Home
      </button>
    </div>
  );
};

export default ProjectDetail;