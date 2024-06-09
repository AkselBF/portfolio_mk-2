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

  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {skills.map((skill) => (
        <div key={skill.name} className="hexagon-wrapper">
          <div className="hexagon">
            <skill.icon className="hexagon-icon" />
            <p className="hexagon-text mb-2">{skill.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSet;