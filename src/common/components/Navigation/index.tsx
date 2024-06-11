import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useLocation } from 'react-router-dom';
import '../../Styles/Navigation/Navigation.css';

const sections = [
  { id: 'home', icon: <HomeIcon />, label: 'Home' },
  { id: 'about', icon: <InfoIcon />, label: 'About Me' },
  { id: 'skills', icon: <BuildIcon />, label: 'Skills' },
  { id: 'projects', icon: <WorkIcon />, label: 'Projects' },
  { id: 'contact', icon: <ContactMailIcon />, label: 'Contact' }
];

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Only render navigation if the current path is home
  if (location.pathname !== '/') {
    return null;
  }

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Fixed navigation for larger screens */}
      <nav className="hidden md:flex fixed right-5 top-1/2 transform -translate-y-1/2 flex-col items-center z-50 bg-opacity-50 bg-gray-800 p-4 rounded-l-lg">
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => handleScroll(section.id)}
            className="p-2 rounded-full shadow-md bg-white hover:bg-gray-300 transition duration-300"
            aria-label={section.label}
          >
            {section.icon}
          </button>
        ))}
      </nav>

      {/* Dropdown button for smaller screens */}
      <div className="md:hidden fixed right-5 top-1/4 transform -translate-y-1/2 z-50">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="bg-white p-4 rounded-full shadow-lg"
          aria-label="Open navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Dropdown menu */}
        {isDropdownOpen && (
          <div
            className="dropdown-menu transition-all duration-500 ease-in-out absolute right-0 mt-2 w-14 p-1.5 space-y-3 origin-top-right bg-gray-800 bg-opacity-90 rounded-md shadow-lg z-50"
          >
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => {
                  handleScroll(section.id);
                  setIsDropdownOpen(false);
                }}
                className="flex items-center justify-center w-full p-2 hover:bg-gray-500 transition duration-150"
                aria-label={section.label}
              >
                {section.icon}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;