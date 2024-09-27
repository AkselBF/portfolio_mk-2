import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../../data/projectsData";
import '../../Styles/Scrollbars/ProjectScrollbar.css';
import '../../Styles/Fonts/Ubuntu.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
//import netlifyIcon from '../../../assets/icons/netlifyIcon.png';
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
    <div className="project-detail text-left relative overflow-hidden">
      {/* Main top image */}
      <div className="relative w-full h-[420px] group">
        <img className="w-full h-full object-cover" src={project.imageUrl} alt={project.title} />
        
        {/* Title overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition duration-500 flex justify-center items-center">
          <h1 className="ubuntu-bold text-5xl font-semibold text-white opacity-0 group-hover:opacity-100 transition duration-500 transform translate-y-8">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Design lines for the entire page */}
      <div className="flex flex-col lg:flex-row justify-center mx-auto px-3 md:px-12 mt-16 w-[80%] relative">
        {/* Side Image */}
        <div className="relative w-full lg:w-[50%] mx-auto justify-center">
          <img className="rounded-md h-[280px] max-h-[280px] max-w-[394px] mx-auto lg:ml-0 lg:mr-auto relative z-10" src={project.sideImage} alt={project.title} />

          {/*
            Lines for bellow sm screen
          */}
          {/* Line (vertical) going down through sideImage */}
          <div className="absolute -top-[64px] left-1/2 xl:left-[37%] w-[3px] h-[380px] bg-[#23E5FF] -translate-x-1/2 z-0"></div>

          {/* Short vertical line */}
          <div className="absolute top-[316px] left-1/2 xl:left-[37%] w-[3px] h-[10px] bg-[#23E5FF] -translate-x-1/2 z-0"></div>

          {/* Corrected curved line (bottom-left corner) */}
          <div className="absolute top-[326px] left-[calc(50%-1.5px)] xl:left-[calc(37%-1.5px)] w-[20px] h-[20px] border-b-[3.5px] border-l-[3.5px] border-[#23E5FF] rounded-bl-full z-0"></div>

          {/* Horizontal line extending to the right */}
          <div className="absolute block sm:hidden top-[343px] left-[calc(50%+18px)] w-[65%] h-[3px] bg-[#23E5FF] z-0"></div>

          {/* Horizontal line extending the entire screen */}
          <div className="absolute block sm:hidden top-[750px] left-[calc(0%-80px)] w-[160%] h-[3px] bg-[#23E5FF] z-0"></div>

          {/* Horizontal line extending the entire screen */}
          <div className="absolute block sm:hidden top-[1030px] left-[calc(0%-80px)] w-[100%] h-[3px] bg-[#23E5FF] z-0"></div>

          {/* Curved line (top-right corner) */}
          <div className="absolute block sm:hidden top-[1030px] -right-[calc(0%-1px)] w-[80px] h-[80px] border-t-[3px] border-r-[3px] border-[#23E5FF] rounded-tr-full z-0"></div>

          {/* Vertical line connecting the big curve */}
          <div className="absolute block sm:hidden top-[1110px] -right-[calc(0%-1px)] w-[2.5px] h-[100px] bg-[#23E5FF] z-0"></div>

          {/* Curved line (bottom-right corner) */}
          <div className="absolute block sm:hidden top-[1210px] -right-[calc(0%-1px)] w-[80px] h-[80px] border-b-[3px] border-r-[3px] border-[#23E5FF] rounded-br-full z-0"></div> 

          {/* Horizontal line extending to the left end*/}
          <div className="absolute block sm:hidden top-[1288px] left-[calc(0%-80px)] w-[100%] h-[2.5px] bg-[#23E5FF] z-0"></div>

          {/*
            For lines between sm and lg screen
          */}
          {/* Horizontal line extending to the right */}
          <div className="absolute hidden sm:block lg:hidden top-[343px] left-[calc(50%+18px)] xl:left-[calc(37%+18px)] w-[50%] lg:w-[45%] h-[3px] bg-[#23E5FF] z-0"></div>

          {/* Curved line (top-right corner) */}
          <div className="absolute hidden sm:block lg:hidden top-[343px] sm:-right-[6.5%] md:-right-[5.6%] w-[20px] h-[20px] border-t-[3.5px] border-r-[3.5px] border-[#23E5FF] rounded-tr-full z-0"></div>

          {/* Vertical line going down towards the logo */}
          <div className="absolute hidden sm:block lg:hidden top-[363px] sm:-right-[calc(6.7%-1px)] md:-right-[calc(5.75%-1px)] w-[3px] h-[407px] bg-[#23E5FF] z-0"></div>

          {/* Curved line (bottom-right corner) */}
          <div className="absolute hidden sm:block lg:hidden top-[769px] sm:-right-[6.6%] md:-right-[5.65%] w-[20px] h-[20px] border-b-[3.5px] border-r-[3.5px] border-[#23E5FF] rounded-br-full z-0"></div>

          {/* Horizontal line going around the details and logo */}
          <div className="absolute hidden sm:block lg:hidden top-[786px] -right-[3%] w-[108%] h-[3px] bg-[#23E5FF] z-0"></div>

          {/* Curved line (top-left corner) */}
          <div className="absolute hidden sm:block lg:hidden top-[786px] sm:-left-[8.5%] md:-left-[7.8%] w-[20px] h-[20px] border-t-[3.5px] border-l-[3.5px] border-[#23E5FF] rounded-tl-full z-0"></div>

          {/* Vertical line going to the icons */}
          <div className="absolute hidden sm:block lg:hidden top-[806px] sm:-left-[calc(8.7%-1px)] md:-left-[calc(8%-1px)] w-[3px] h-[350px] bg-[#23E5FF] z-0"></div>

          {/* Curved line (bottom-left corner) */}
          <div className="absolute hidden sm:block lg:hidden top-[1148px] sm:-left-[calc(8.7%-1px)] md:-left-[calc(8%-1px)] w-[80px] h-[80px] border-b-[3.5px] border-l-[3.5px] border-[#23E5FF] rounded-bl-full z-0"></div>

          {/* Horizontal line going to the end right */}
          <div className="absolute hidden sm:block lg:hidden top-[1225px] sm:left-[5%] md:left-[3.8%] w-[120%] h-[3px] bg-[#23E5FF] z-0"></div>

          {/*
            For lines above lg screen widths
          */}
          {/* Horizontal line extending to the right */}
          <div className="absolute hidden lg:block top-[343px] left-[calc(50%+18px)] xl:left-[calc(37%+18px)] w-[50%] lg:w-[45%] h-[3px] bg-[#23E5FF] z-0"></div>

          {/* Horizontal line extending further to the right */}
          <div className="absolute hidden lg:block top-[343px] -right-[46%] xl:-right-[47%] w-[75%] h-[3px] bg-[#23E5FF] z-0"></div>

          {/* Curved line (top-right corner) */}
          <div className="absolute hidden lg:block top-[343px] -right-[50%] w-[20px] h-[20px] border-t-[3.5px] border-r-[3.5px] border-[#23E5FF] rounded-tr-full z-0"></div>

          {/* Vertical line going down towards the logo */}
          <div className="absolute hidden lg:block top-[363px] -right-[calc(50.2%-1px)] w-[3px] h-[270px] bg-[#23E5FF] z-0"></div>

          {/* Curved line (bottom-right corner) */}
          <div className="absolute hidden lg:block top-[632px] -right-[50%] w-[20px] h-[20px] border-b-[3.5px] border-r-[3.5px] border-[#23E5FF] rounded-br-full z-0"></div>

          {/* Horizontal line going around the icons */}
          <div className="absolute hidden lg:block top-[649px] -right-[46%] xl:-right-[47%] w-[137%] h-[3px] bg-[#23E5FF] z-0"></div>

          {/* Curved line (top-left corner) */}
          <div className="absolute hidden lg:block top-[649px] right-[90%] w-[100px] h-[100px] border-t-[3.5px] border-l-[3.5px] border-[#23E5FF] rounded-tl-full z-0"></div>

          {/* Curved line (bottom-left corner) */}
          <div className="absolute hidden lg:block top-[749px] right-[90%] w-[100px] h-[100px] border-b-[3.5px] border-l-[3.5px] border-[#23E5FF] rounded-bl-full z-0"></div>

          {/* Horizontal line going around the icons */}
          <div className="absolute hidden lg:block top-[845.5px] left-[10%] xl:left-[10%] w-[240%] h-[3px] bg-[#23E5FF] z-0"></div>
        </div>

        {/* Details Section */}
        <div className="relative w-full lg:w-[50%] mx-auto lg:ml-10 xl:mx-auto mt-24 mb-6 lg:my-0">
          <h2 className="ubuntu-bold text-2xl text-center lg:text-left font-semibold text-white px-3 mb-3">Details about {project.title}</h2>
          <p className="projects-list text-white text-left px-3 overflow-y-auto max-h-[168px] md:max-h-[222px]">{project.description}</p>
        </div>
      </div>

      {/* Line Curve and passing through appLogo */}
      <div className="flex flex-col-reverse lg:flex-row mt-[50px] lg:mt-[100px] justify-center mx-auto px-3 md:px-12 w-[80%] relative">
        <div className="lg:w-[50%]">
          <h2 className="ubuntu-bold text-2xl font-semibold text-white px-3 mb-3">Build</h2>
          <p className="projects-list text-white text-left px-3 overflow-y-auto max-h-[72px] lg:max-h-[140px]">{project.details}</p>
        </div>

        <div className="mx-auto w-[40%] lg:w-[50%] text-center justify-center bg-[#00050C] h-[180px] lg:h-[220px] relative z-10">
          <img className="text-center max-h-[140px] mx-auto lg:ml-[28%] xl:mx-auto my-5 lg:my-[40px]" src={project.appLogo} alt={project.title} />
        </div>
      </div>

      {/* Section for buttons */}
      <div className="justify-between text-center flex sm:flex-row w-[65%] lg:w-[70%] mt-[100px] md:mt-[120px] mb-28 md:mb-0 sm:mx-auto relative z-10">
        <button
          onClick={() => navigate('/')}
          className="relative bg-white text-black font-semibold mt-10 md:mt-0 mb-4 md:mb-28 p-2 max-w-[52px] max-h-[52px] rounded-full hover:bg-gray-200 mx-auto sm:mx-0 group"
        >
          {/* Home Icon */}
          <HomeIcon style={{ fontSize: '36px' }} />
          {/* Sliding Text */}
          <span className="absolute text-xl left-[56px] top-1/2 transform -translate-y-1/2 opacity-0 text-white group-hover:opacity-100 group-hover:left-[64px] transition-all duration-300">
            Home
          </span>
        </button>

        <div className="flex flex-col items-center sm:items-end justify-end sm:flex-row space-y-3 sm:space-x-28 sm:space-y-0 mt-10 md:mt-0 mb-4 md:mb-28">
          <a href={project.appUrl} target="_blank" rel="noopener noreferrer">
            <button className="relative bg-[#387AA3] text-white p-2 rounded-full hover:bg-[#15cdb7] group">
              {/* Play Icon */}
              <PlayCircleIcon style={{ fontSize: '36px' }} />

              {/* Replace PlayCircleIcon with PNG */}
              {/*<img src={netlifyIcon} alt="Live" className="w-[36px] h-[36px]" />*/}
              {/* Sliding Text */}
              <span className="absolute text-lg font-semibold left-[56px] top-1/2 transform -translate-y-1/2 opacity-0 text-white group-hover:opacity-100 group-hover:left-[64px] transition-all duration-300">
                Live
              </span>
            </button>
          </a>

          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <button className="relative bg-[#387AA3] text-white p-2 rounded-full hover:bg-[#2688e4] group">
              {/* GitHub Icon */}
              <GitHubIcon style={{ fontSize: '36px' }} />
              {/* Sliding Text */}
              <span className="absolute text-lg font-semibold left-[56px] top-1/2 transform -translate-y-1/2 opacity-0 text-white group-hover:opacity-100 group-hover:left-[64px] transition-all duration-300">
                GitHub
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;