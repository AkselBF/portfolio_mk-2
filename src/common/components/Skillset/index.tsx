import React, { useState, useEffect } from "react";
import '../../Styles/Skills/Honeycomb.css';
import '../../Styles/Skills/Skills.css';

interface SkillsGridProps {
  skills: { name: string, icon: string, link: string, description: string }[]; // Include link and description
  onHover: (description: string) => void; // Callback to pass hovered description
}

const SkillsSet: React.FC<SkillsGridProps> = ({ skills, onHover }) => {
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
    return <p className="text-white text-lg mt-4">In progress</p>;
  }

  const handleMouseEnter = (description: string) => {
    onHover(description);
  };

  const handleMouseLeave = () => {
    onHover("");
  };

  // For small screens (square grid)
  if (isSmallScreen) {
    return (
      <div className="skills-grid-square">
        {skills.map((skill, index) => (
          skill.link ? (
            <a
              key={index}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="square-skill"
              onMouseEnter={() => handleMouseEnter(skill.description)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={skill.icon} alt={`${skill.name} icon`} className="square-icon" />
              <p className="square-text">{skill.name}</p>
            </a>
          ) : (
            <div
              key={index}
              className="square-skill"
              onMouseEnter={() => handleMouseEnter(skill.description)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={skill.icon} alt={`${skill.name} icon`} className="square-icon" />
              <p className="square-text">{skill.name}</p>
            </div>
          )
        ))}
      </div>
    );
  }

  // For larger screens (honeycomb structure)
  const skillGroups = skills.reduce((acc, skill, index) => {
    const groupIndex = Math.floor(index / 3);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(skill);
    return acc;
  }, [] as { name: string, icon: string, link: string, description: string }[][]);

  return (
    <div className="skills-grid">
      {skillGroups.map((group, index) => (
        <div key={index} className="skills-group">
          {group.map((skill, idx) => (
            skill.link ? (
              <a
                key={idx}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`hexagon-wrapper ${idx === 2 ? 'hexagon-third' : ''}`}
                onMouseEnter={() => handleMouseEnter(skill.description)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="hexagon">
                  <img src={skill.icon} alt={`${skill.name} icon`} className="hexagon-icon" />
                  <p className="hexagon-text">{skill.name}</p>
                </div>
              </a>
            ) : (
              <div
                key={idx}
                className={`hexagon-wrapper ${idx === 2 ? 'hexagon-third' : ''}`}
                onMouseEnter={() => handleMouseEnter(skill.description)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="hexagon">
                  <img src={skill.icon} alt={`${skill.name} icon`} className="hexagon-icon" />
                  <p className="hexagon-text">{skill.name}</p>
                </div>
              </div>
            )
          ))}
        </div>
      ))}
    </div>
  );
};

export default SkillsSet;