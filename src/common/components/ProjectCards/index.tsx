import React from 'react';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    appUrl: string;
    githubUrl: string;
    imageUrl: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card bg-white shadow-md rounded-lg max-w-[300px] overflow-hidden">
      <h2 className="text-xl font-semibold p-4">{project.title}</h2>
      <a href={project.appUrl} target="_blank" rel="noopener noreferrer">
        <img className="w-full h-48 object-cover" src={project.imageUrl} alt={`${project.title}/Netlify`} />
      </a>
      <div className="p-4">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">GitHub Repo</button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;