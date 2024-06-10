import React from "react";
import { SvgIconComponent } from "@mui/icons-material";
import '../../Styles/Skills/Honeycomb.css';

interface SkillsGridProps {
  skills: { name: string, icon: SvgIconComponent }[];
}

const SkillsSet: React.FC<SkillsGridProps> = ({ skills }) => {
  if (skills.length === 0) {
    return <p className="text-white text-lg mt-4">To be learned</p>;
  }

  // Group skills into sets of three for the desired layout
  const skillGroups = skills.reduce((acc, skill, index) => {
    const groupIndex = Math.floor(index / 3);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(skill);
    return acc;
  }, [] as { name: string, icon: SvgIconComponent }[][]);

  return (
    <div className="skills-grid">
      {skillGroups.map((group, index) => (
        <div key={index} className="skills-group">
          {/* even skills */}
          <div className="hexagon-wrapper">
            <div className="hexagon">
              {React.createElement(group[0].icon, { className: "hexagon-icon" })}
              <p className="hexagon-text">{group[0].name}</p>
            </div>
          </div>
          {group[1] && (
            <div className="hexagon-wrapper">
              <div className="hexagon">
                {React.createElement(group[1].icon, { className: "hexagon-icon" })}
                <p className="hexagon-text">{group[1].name}</p>
              </div>
            </div>
          )}
          {/* odd skill */}
          {group[2] && (
            <div className="hexagon-wrapper hexagon-third">
              <div className="hexagon">
                {React.createElement(group[2].icon, { className: "hexagon-icon" })}
                <p className="hexagon-text">{group[2].name}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SkillsSet;