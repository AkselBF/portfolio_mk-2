import React from 'react';
import Projects from '../../Projects';
import heroOne from '../../../assets/images/Westfjords sunset.jpg';
import '../../Styles/Fonts/Ubuntu.css';
import '../../Styles/General/Styles.css';

const Home: React.FC = () => {
  return (
    <div id="home" className="relative w-full min-h-screen overflow-x-hidden">
      {/* Hero section */}
      <div
        className="relative h-[500px] xl:h-[738px] bg-cover bg-center mb-10"
        style={{ backgroundImage: `url(${heroOne})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative flex flex-col text-left h-full p-5 lg:p-16">
          <h1 className="ubuntu-bold text-white text-6xl font-semibold my-auto">Welcome</h1>
          <h2 className="ubuntu-regular text-white text-xl w-[85%] md:w-[75%] xl:w-[50%] mt-4">This application is about showing what I'm about, and what I do. My projects can be found further down</h2>
          <div className='w-full mt-8 flex flex-row mx-auto'>
            <div className='bg-[#75D6FF] w-[85%] md:w-[75%] xl:w-[50%] h-1 rounded-l-full'></div>
            <div className='bg-white w-0 md:w-[15%] xl:w-[40%] h-1 rounded-r-full'></div>
          </div>
        </div>
      </div>

      <div id='sections'>
        {/* About section */}
        <section id="about" className="text-white mb-10">
          <h2 className='ubuntu-bold text-white text-left text-2xl font-semibold ml-10 mb-1'>About Me</h2>
          <div className='h-1 w-20 bg-[#75D6FF] rounded-r-full ml-10 mb-1'></div>
          <div className='h-0.5 w-10 bg-[#75D6FF] rounded-r-full ml-10 mb-6'></div>
          <p>Information about you...</p>
        </section>

        {/* Skills section */}
        <section id="skills" className="text-white mb-10">
          <h2 className='ubuntu-bold text-white text-2xl font-semibold mb-6'>Skills</h2>
          <p>List of skills...</p>
        </section>

        {/* Projects section */}
        <section id="projects" className="text-white mb-10">
          <h2 className='ubuntu-bold text-white text-2xl font-semibold mb-6'>My projects</h2>
          <div id='side' className="container mx-auto sm:p-4">
            <Projects />
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="text-white mb-10">
          <h2 className='ubuntu-bold text-white text-2xl font-semibold mb-6'>Contact</h2>
          <p>Contact form or details...</p>
        </section>
      </div>
    </div>
  );
}

export default Home;