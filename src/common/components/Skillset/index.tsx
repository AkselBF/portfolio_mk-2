import React, { useState, useEffect } from "react";
import '../../Styles/Skills/Honeycomb.css';
import '../../Styles/Skills/Skills.css';

interface SkillsGridProps {
  skills: { name: string, icon: string }[];
}

const SkillsSet: React.FC<SkillsGridProps> = ({ skills }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (skills.length === 0) {
    return <p className="text-white text-lg mt-4">To be learned</p>;
  }

  if (isSmallScreen) {
    return (
      <div className="skills-grid-square">
        {skills.map((skill, index) => (
          <div key={index} className="square-skill">
            <img src={skill.icon} alt={`${skill.name} icon`} className="square-icon" />
            <p className="square-text">{skill.name}</p>
          </div>
        ))}
      </div>
    );
  } else {
    const skillGroups = skills.reduce((acc, skill, index) => {
      const groupIndex = Math.floor(index / 3);
      if (!acc[groupIndex]) {
        acc[groupIndex] = [];
      }
      acc[groupIndex].push(skill);
      return acc;
    }, [] as { name: string, icon: string }[][]);

    return (
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <div key={index} className="skills-group">
            <div className="hexagon-wrapper">
              <div className="hexagon">
                <img src={group[0].icon} alt={`${group[0].name} icon`} className="hexagon-icon" />
                <p className="hexagon-text">{group[0].name}</p>
              </div>
            </div>
            {group[1] && (
              <div className="hexagon-wrapper">
                <div className="hexagon">
                  <img src={group[1].icon} alt={`${group[1].name} icon`} className="hexagon-icon" />
                  <p className="hexagon-text">{group[1].name}</p>
                </div>
              </div>
            )}
            {group[2] && (
              <div className="hexagon-wrapper hexagon-third">
                <div className="hexagon">
                  <img src={group[2].icon} alt={`${group[2].name} icon`} className="hexagon-icon" />
                  <p className="hexagon-text">{group[2].name}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
};

export default SkillsSet;