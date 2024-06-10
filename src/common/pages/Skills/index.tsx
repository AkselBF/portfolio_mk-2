import React, { useState } from "react";
import '../../Styles/Fonts/Ubuntu.css';
import skillBackground from '../../../assets/images/lake_mountain_view.jpg';
import SkillsSet from "../../components/Skillset";
import { skillsData } from "../../data/skillsData";

const Skills: React.FC = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof skillsData>("Frontend");

  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };

  return (
    <section id="skills" className="min-h-screen ml-10 mr-auto w-[90%] bg-[#00050C] text-white p-8 flex flex-col md:flex-row">
      <div className="flex flex-col relative text-left my-20 w-[40%] max-h-[500px] flex-1 mb-8 md:mb-0 md:mr-8 z-10"
        style={{
          background: 'linear-gradient(to right, #00050C, transparent)'
        }}
      >
        <div className="flex flex-row">
          <div className="w-8 h-0.5 bg-[#75D6FF] mt-3 rounded-full mr-5"></div>
          <h2 className="text-lg ubuntu-regular text-left text-[#75D6FF] mb-2">Skills</h2>
        </div>
        
        <h1 className="text-4xl ubuntu-bold mb-4">Skills from all fields</h1>
        <p className="mb-4 w-[80%]">
          I may be a frontend developer, but the subjects I'm familiar with branch out to many different yet relevant fields. Being a frontend developer requires coding knowledge, of course, but design as well. That's where something like Digital art comes in. The list goes on, but why write them down when I can just show you.
        </p>
        <p className="mb-4 w-[80%]">
          Clicking on the button below displays the skills of each field I'm familiar with along with every relevant skill.
        </p>
        <button
          onClick={toggleSkills}
          className="bg-[#1260BC] text-white font-semibold absolute bottom-0 w-[200px] py-2 rounded-md hover:bg-blue-600 self-start transition duration-300"
        >
          {showSkills ? 'Hide skills' : 'Show skills'}
        </button>
      </div>

      {/* Skills Div */}
      <div className={`flex-1 w-[60%] max-h-[500px] my-20 transition-all duration-500 relative ${showSkills ? 'block' : 'hidden'} md:block`}>
        <div
          className="absolute inset-0 bg-cover bg-center border-r-2 border-b-2 border-[#75D6FF] rounded-br-lg"
          style={{
            backgroundImage: `url(${skillBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '160%',
            marginLeft: '-60%',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00050C] to-transparent"></div>
        </div>
        
        {/* Content for skills goes here */}
        <div className="relative flex flex-col items-center justify-center pr-[2px]">
            {/* Skills Toggle Texts */}
            <div className={`bg-[#152B4480] w-full px-8 py-4 font-semibold rounded-bl-md mb-12 flex space-x-12 transition-all duration-500 ${showSkills ? 'block' : 'hidden'}`}>
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
            <div className={`relative bg-[#152B44] p-4 rounded-l-lg flex-1 w-full max-w-4xl overflow-hidden transition-all duration-500 ${showSkills ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
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