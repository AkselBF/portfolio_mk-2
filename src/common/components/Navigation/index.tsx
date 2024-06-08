import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import '../../Styles/Navigation/Navigation.css';

const sections = [
  { id: 'home', icon: <HomeIcon />, label: 'Home' },
  { id: 'about', icon: <InfoIcon />, label: 'About Me' },
  { id: 'skills', icon: <BuildIcon />, label: 'Skills' },
  { id: 'projects', icon: <WorkIcon />, label: 'Projects' },
  { id: 'contact', icon: <ContactMailIcon />, label: 'Contact' }
];

const Navigation: React.FC = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-5 top-1/2 transform -translate-y-1/2 flex flex-col items-center bg-opacity-50 bg-gray-800 p-4 rounded-l-lg z-50">
      {sections.map(section => ( 
        <button
          key={section.id}
          onClick={() => handleScroll(section.id)}
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-300"
          aria-label={section.label}
        >
          {section.icon}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;