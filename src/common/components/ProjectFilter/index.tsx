import React from "react";
import FrontendIcon from "../../../assets/icons/frontend_icon.png";
import ArtIcon from "../../../assets/icons/ArtIcon.png";
import FrontendIconColor from "../../../assets/icons_color/frontend_icon_color.png";
import ArtIconColor from "../../../assets/icons_color/art_icon_color.png";

interface ProjectFilterProps {
  currentType: string;
  onFilterChange: (type: string) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({ currentType, onFilterChange }) => {
  return (
    <div className="flex justify-center space-x-10 mx-auto mb-8">
      {/* Frontend Icon */}
      <div
        className={`cursor-pointer transition-opacity ease-in-out duration-300 ${
          currentType === 'frontend' ? 'opacity-100' : 'opacity-40'
        }`}
        onClick={() => onFilterChange('frontend')}
      >
        {/* Conditionally render the colored or white icon and adjust size */}
        <img
          src={currentType === 'frontend' ? FrontendIconColor : FrontendIcon}
          alt="Frontend Projects"
          className={`transition-all ease-in-out duration-300 transform ${
            currentType === 'frontend' ? 'w-16 h-12' : 'w-14 h-10'
          }`} 
        />
        <p className={`text-center font-semibold mt-2 text-sm transition-all ease-in-out duration-300 transform ${
            currentType === 'frontend' ? 'text-[#FF5C00]' : 'text-white'
          }`}>Frontend</p>
      </div>

      {/* Art Icon */}
      <div
        className={`cursor-pointer transition-opacity ease-in-out duration-300 ${
          currentType === 'art' ? 'opacity-100' : 'opacity-40'
        }`}
        onClick={() => onFilterChange('art')}
      >
        {/* Conditionally render the colored or white icon and adjust size */}
        <img
          src={currentType === 'art' ? ArtIconColor : ArtIcon}
          alt="Art Projects"
          className={`transition-all ease-in-out duration-300 transform ${
            currentType === 'art' ? 'w-12 h-12' : 'w-10 h-10'
          }`} 
        />
        <p className={`text-center font-semibold mt-2 text-sm transition-all ease-in-out duration-300 transform ${
            currentType === 'art' ? 'text-[#00FFCC]' : 'text-white'
          }`}>Art</p>
      </div>
    </div>
  );
};

export default ProjectFilter;