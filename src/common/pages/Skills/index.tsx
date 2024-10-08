import React, { useState } from "react";
import SkillsSet from "../../components/Skillset";
import { skillsData } from "../../data/skillsData";
import '../../Styles/Skills/Skills.css';
import '../../Styles/Scrollbars/SkillScrollbar.css';
import '../../Styles/Fonts/Ubuntu.css';
import skillBackground from '../../../assets/images/lake_mountain_view.jpg';

const Skills: React.FC = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof skillsData>("Frontend");
  const [fade, setFade] = useState(true); // State to control fade-in/out
  const [currentSkills, setCurrentSkills] = useState(selectedCategory); // State to hold the current category

  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };

  const handleCategoryChange = (category: keyof typeof skillsData) => {
    // Trigger fade out, wait for animation, then change the skills
    setFade(false);
    setTimeout(() => {
      setCurrentSkills(category); // Change the actual skills after fade-out
      setSelectedCategory(category); // Update the selected category
      setFade(true); // Fade back in
    }, 500); // Matches the duration of the fade-out animation
  };

  return (
    <section id="skills" className="min-h-screen lg:ml-10 mr-auto w-full sm:w-[90%] bg-[#00050C] text-white px-4 lg:p-8 flex flex-col lg:flex-row relative">
      {/* Description div */}
      <div className="flex flex-col relative text-left my-20 w-[95%] sm:w-[80%] lg:w-[60%] xl:w-[40%] max-h-[420px] flex-1 mb-8 md:mb-0 md:mr-8 z-10"
        style={{
          background: 'linear-gradient(to right, #00050C, transparent)'
        }}
      >
        <div className="flex flex-row">
          <div className="w-8 h-0.5 bg-[#75D6FF] mt-3 rounded-full mr-5"></div>
          <h2 className="text-lg ubuntu-regular text-left text-[#75D6FF] mb-2">Skills</h2>
        </div>
        
        <h1 className="text-4xl ubuntu-bold mb-4">All field types</h1>
        <div className="projects-list max-h-[300px] overflow-y-auto mb-10 lg:mb-4">
          <p className="text-left mb-4 w-full lg:w-[80%]">
            I may be a frontend developer, but the subjects I'm familiar with branch out to many different yet relevant fields. Being a frontend developer requires coding knowledge, of course, but design as well. That's where something like Digital art comes in. The list goes on.
          </p>
          <p className="text-left w-full lg:w-[80%]">
            Clicking on the button below displays the skills of each field I'm familiar with along with every relevant skill.
          </p>
        </div>
        
        <button
          onClick={toggleSkills}
          className={`${showSkills ? 'bg-[#53b7e2] hover:bg-[#75D6FF] text-black' : 'bg-[#1260BC] hover:bg-blue-600 text-white'} font-semibold lg:absolute bottom-0 w-[200px] py-5 rounded-md self-start transition duration-300 relative overflow-hidden`}
        >
          {/* Show Skills */}
          <span className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${showSkills ? 'opacity-0 translate-y-full' : 'opacity-100 translate-y-0'}`}>
            Show skills
          </span>

          {/* Hide Skills */}
          <span className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${showSkills ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
            Hide skills
          </span>
        </button>
      </div>

      {/* Skills Div */}
      <div className={`flex-1 w-[98%] sm:w-full md:w-[98%] lg:w-[40%] xl:w-[60%] min-h-[260px] md:min-h-[400px] max-h-[420px] my-6 lg:my-20 relative overflow-x-hidden lg:overflow-x-visible`}>
        <div
          className="absolute w-full lg:w-[140%] lg:-ml-[40%] xl:w-[160%] xl:-ml-[60%] inset-0 bg-cover bg-center lg:border-r-2 lg:border-b-2 lg:border-[#75D6FF] lg:rounded-br-lg"
          style={{
            backgroundImage: `url(${skillBackground})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 lg:bg-gradient-to-r from-[#00050C] to-transparent"></div>
        </div>
        
        <div className={`fields-container absolute inset-0 flex flex-col items-center justify-center lg:justify-start transition-all duration-500 ${showSkills ? 'slide-in' : 'slide-out'}`}>
          <div className={`skills-content skill-overflow bg-[#152B4480] w-full overflow-x-auto px-8 py-4 font-semibold lg:rounded-bl-md lg:mr-[3px] mb-12 flex space-x-12 transition-all duration-500 ${showSkills ? 'fade-in' : 'fade-out'}`}>
            {Object.keys(skillsData).map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category as keyof typeof skillsData)}
                className={`text-[#75D6FF] transition-colors duration-300 ${selectedCategory === category ? "text-white" : "hover:text-white"}`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className={`skills-content relative bg-[#152b44c6] lg:max-h-[292px] lg:mr-[3px] p-4 lg:rounded-l-lg flex-1 w-full max-w-4xl overflow-hidden transition-all duration-500`}>
            <div className="absolute left-0 top-0 h-full w-1/3 transform -skew-x-12 bg-[#152b4400]"></div>
            
            {/* Add fade effect to the skill set */}
            <div className={`skill-overflow font-semibold relative z-10 overflow-x-auto flex flex-wrap transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
              <SkillsSet skills={skillsData[currentSkills]} />
            </div>
          </div>
        </div>

        <div className="lg:absolute lg:w-[23%] lg:h-full lg:bg-[#00050C] lg:-right-[23%]"></div>
      </div>
    </section>
  );
};

export default Skills;