import React, { useState, useEffect } from "react";
import '../../Styles/Skills/Honeycomb.css';
import '../../Styles/Skills/Skills.css';

interface SkillsGridProps {
  skills: { name: string, iconWhite: string, iconColor: string, color: string, link: string, description: string }[];
  onHover: (name: string, description: string, color: string) => void;
  resetTitle?: () => void;  // Optional resetTitle prop for resetting the title when hiding skills
}

const SkillsSet: React.FC<SkillsGridProps> = ({ skills, onHover, resetTitle }) => {
  const [screenSize, setScreenSize] = useState({
    isSmallScreen: false,
    isMediumScreen: false,
    isLargeScreen: false,
  });
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  // Combined resize listener for small, medium, and large screen detection
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        isSmallScreen: window.innerWidth < 768,
        isMediumScreen: window.innerWidth >= 768 && window.innerWidth < 1280,
        isLargeScreen: window.innerWidth >= 1280, // For large screens 1280px and above
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Automatically reset the title when resetTitle is triggered
  useEffect(() => {
    if (resetTitle) {
      setActiveSkill(null);  // Reset the active skill to null
      resetTitle();          // Also reset the title to "All field types"
    }
  }, [resetTitle]);

  const handleMouseEnter = (name: string, description: string, color: string) => {
    if (screenSize.isLargeScreen) {
      onHover(name, description, color); // Hover effect for large screens (above 1280px)
    }
  };

  const handleMouseLeave = () => {
    if (screenSize.isLargeScreen) {
      onHover("All field types", "", "white"); // Reset hover effect for large screens
    }
  };

  // Handles click for medium and small screens
  const handleClick = (name: string, description: string, color: string) => {
    if (screenSize.isSmallScreen || screenSize.isMediumScreen) {
      // Toggle active skill on click for small/medium screens
      if (activeSkill === name) {
        // Reset to default title and state when clicking the same skill again
        setActiveSkill(null);
        onHover("All field types", "", "white"); // Set title to default and color to white
      } else {
        // Show clicked skill details
        setActiveSkill(name);
        onHover(name, description, color);
      }
    }
  };

  // Renders the hexagons (for medium and large screens)
  const renderHexagons = () => {
    const skillGroups = skills.reduce((acc, skill, index) => {
      const groupIndex = Math.floor(index / 3);
      if (!acc[groupIndex]) {
        acc[groupIndex] = [];
      }
      acc[groupIndex].push(skill);
      return acc;
    }, [] as { name: string, iconWhite: string, iconColor: string, color: string, link: string, description: string }[][]);

    return (
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <div key={index} className="skills-group">
            {group.map((skill, idx) => (
              skill.link ? (
                <a
                  key={idx}
                  href={screenSize.isMediumScreen || screenSize.isSmallScreen ? undefined : skill.link} // Only show links on larger screens
                  target={screenSize.isMediumScreen || screenSize.isSmallScreen ? undefined : "_blank"}
                  rel={screenSize.isMediumScreen || screenSize.isSmallScreen ? undefined : "noopener noreferrer"}
                  className={`hexagon-wrapper ${idx === 2 ? 'hexagon-third' : ''}`}
                  onMouseEnter={() => handleMouseEnter(skill.name, skill.description, skill.color)} // Trigger hover effect
                  onMouseLeave={handleMouseLeave} // Reset hover effect
                  onClick={() => handleClick(skill.name, skill.description, skill.color)} // Handle click on small/medium screens
                >
                  <div className={`hexagon ${activeSkill === skill.name && (screenSize.isSmallScreen || screenSize.isMediumScreen) ? 'hexagon-active' : ''}`}>
                    <img 
                      src={activeSkill === skill.name ? skill.iconColor : skill.iconWhite}
                      alt={`${skill.name} white icon`} 
                      className="hexagon-icon white-icon" 
                    />
                    <img 
                      src={skill.iconColor} 
                      alt={`${skill.name} color icon`} 
                      className="hexagon-icon colored-icon" 
                    />
                    <p className="hexagon-text">{skill.name}</p>
                  </div>
                </a>
              ) : (
                <div
                  key={idx}
                  className={`hexagon-wrapper ${idx === 2 ? 'hexagon-third' : ''}`}
                  onMouseEnter={() => handleMouseEnter(skill.name, skill.description, skill.color)} // Hover effect for large screens
                  onMouseLeave={handleMouseLeave} // Reset hover effect for large screens
                  onClick={() => handleClick(skill.name, skill.description, skill.color)} // Handle click for small/medium screens
                >
                  <div className={`hexagon ${activeSkill === skill.name && (screenSize.isSmallScreen || screenSize.isMediumScreen) ? 'hexagon-active' : ''}`}>
                    <img 
                      src={screenSize.isLargeScreen ? skill.iconWhite : (activeSkill === skill.name ? skill.iconColor : skill.iconWhite)}  // Handle hover for large screens (switch on hexagon hover, not icon hover)
                      alt={`${skill.name} icon`} 
                      className="hexagon-icon" 
                    />
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

  // Renders the square grid (for small screens only)
  const renderSquareGrid = () => (
    <div className="skills-grid-square">
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`square-skill ${activeSkill === skill.name ? 'active' : ''}`} // Add active class if clicked
          onClick={() => handleClick(skill.name, skill.description, skill.color)} // Handle click for small/medium screens
        >
          <img 
            src={activeSkill === skill.name ? skill.iconColor : skill.iconWhite} // Toggle between color and white icon
            alt={`${skill.name} icon`} 
            className="square-icon" 
          />
          <p className="square-text">{skill.name}</p>
        </div>
      ))}
    </div>
  );

  // Determine which layout to render based on screen size
  if (screenSize.isSmallScreen) {
    return renderSquareGrid(); // Render square grid for small screens
  }

  return renderHexagons(); // Render hexagon grid for medium and large screens
};

export default SkillsSet;