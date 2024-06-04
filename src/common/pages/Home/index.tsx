import React from 'react';
import Projects from '../../Projects';
import heroOne from '../../../assets/images/lake_mountain_view.jpg';
import '../../Styles/Fonts/Ubuntu.css';

const Home: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <div
        className="relative h-[500px] bg-cover bg-center mb-10"
        style={{ backgroundImage: `url(${heroOne})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col text-left h-full p-5 lg:p-16">
          <h1 className="ubuntu-bold text-white text-6xl font-semibold my-auto">Welcome</h1>
          <h2 className="ubuntu-regular text-white text-xl w-full md:w-[75%] xl:w-[50%] mt-4">This application is about showing what I'm about, and what I do. My projects can be found further down</h2>
          <div className='w-full mt-8 flex flex-row mx-auto'>
            <div className='bg-[#cbae39] w-full md:w-[75%] xl:w-[50%] h-1 rounded-l-full'></div>
            <div className='bg-white w-0 md:w-[25%] xl:w-[50%] h-1 rounded-r-full'></div>
          </div>
        </div>
      </div>
      <h2 className='ubuntu-bold text-white text-2xl font-semibold mb-6'>My projects</h2>
      <div className="container mx-auto sm:p-4">
        <Projects />
      </div>
    </div>
  );
}

export default Home;