import React, { useState } from "react";
import SkillsSet from "../../components/Skillset";
import { skillsData } from "../../data/skillsData";
import '../../Styles/Scrollbars/ProjectScrollbar.css';
import '../../Styles/Fonts/Ubuntu.css';
import skillBackground from '../../../assets/images/lake_mountain_view.jpg';

const Skills: React.FC = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof skillsData>("Frontend");

  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };

  return (
    <section id="skills" className="min-h-screen lg:ml-10 mr-auto w-full sm:w-[90%] bg-[#00050C] text-white px-4 lg:p-8 flex flex-col lg:flex-row">
      {/* Description div */}
      <div className="flex flex-col relative text-left my-20 w-[95%] sm:w-[80%] lg:w-[60%] xl:w-[40%] max-h-[500px] flex-1 mb-8 md:mb-0 md:mr-8 z-10"
        style={{
          background: 'linear-gradient(to right, #00050C, transparent)'
        }}
      >
        <div className="flex flex-row">
          <div className="w-8 h-0.5 bg-[#75D6FF] mt-3 rounded-full mr-5"></div>
          <h2 className="text-lg ubuntu-regular text-left text-[#75D6FF] mb-2">Skills</h2>
        </div>
        
        <h1 className="text-4xl ubuntu-bold mb-4">Skills from all fields</h1>
        <div className="projects-list max-h-[300px] overflow-y-auto mb-10 lg:mb-4">
          <p className="mb-4 w-full lg:w-[80%]">
            I may be a frontend developer, but the subjects I'm familiar with branch out to many different yet relevant fields. Being a frontend developer requires coding knowledge, of course, but design as well. That's where something like Digital art comes in. The list goes on, but why write them down when I can just show you.
          </p>
          <p className="w-full lg:w-[80%]">
            Clicking on the button below displays the skills of each field I'm familiar with along with every relevant skill.
          </p>
        </div>
        
        <button
          onClick={toggleSkills}
          className="bg-[#1260BC] text-white font-semibold lg:absolute bottom-0 w-[200px] py-2 rounded-md hover:bg-blue-600 self-start transition duration-300"
        >
          {showSkills ? 'Hide skills' : 'Show skills'}
        </button>
      </div>

      {/* Skills Div */}
      <div className={`flex-1 w-[98%] sm:w-[80%] lg:w-[40%] xl:w-[60%] max-h-[500px] my-6 lg:my-20 transition-all duration-500 relative ${showSkills ? 'block' : 'hidden'} md:block`}>
        <div
          className="absolute w-full lg:w-[140%] lg:-ml-[40%] xl:w-[160%] xl:-ml-[60%] sm:inset-0 bg-cover bg-center lg:border-r-2 lg:border-b-2 lg:border-[#75D6FF] lg:rounded-br-lg"
          style={{
            backgroundImage: `url(${skillBackground})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 lg:bg-gradient-to-r from-[#00050C] to-transparent"></div>
        </div>
        
        {/* Content for skills goes here */}
        <div className="relative flex flex-col items-center justify-center lg:pr-[2px]">
          {/* Skills Toggle Texts */}
          <div className={`projects-list bg-[#152B4480] w-full overflow-x-auto px-8 py-4 font-semibold lg:rounded-bl-md mb-12 flex space-x-12 transition-all duration-500 ${showSkills ? 'block' : 'hidden'}`}>
            {Object.keys(skillsData).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category as keyof typeof skillsData)}
                className={`text-[#75D6FF] transition-colors duration-300 ${selectedCategory === category ? "text-white" : "hover:text-white"}`}
              >
                {category}
              </button>
            ))}
          </div>
          {/* Skills Container */}
          <div className={`relative bg-[#152B44] p-4 lg:rounded-l-lg flex-1 w-full max-w-4xl overflow-hidden transition-all duration-500 ${showSkills ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {/* Triangular cutout on the left side */}
            <div className="absolute left-0 top-0 h-full w-1/3 transform -skew-x-12 bg-[#152B44]"></div>
            <div className={`relative z-10 flex flex-wrap ${showSkills ? 'block' : 'hidden'}`}>
              <SkillsSet skills={skillsData[selectedCategory]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;