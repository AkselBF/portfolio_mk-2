import React from 'react';
import Projects from '../../Projects';
import heroOne from '../../../assets/images/lake_mountain_view.jpg';

const Home: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="relative h-[500px] bg-cover bg-center mb-10"
        style={{ backgroundImage: `url(${heroOne})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col text-left h-full p-16">
          <h1 className="text-white text-6xl font-semibold my-auto">Welcome</h1>
          <h2 className="text-white text-xl w-[50%] mt-4">This application is about showing what I'm about, and what I do. My projects can be found further down</h2>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <h2 className='text-white text-2xl font-semibold'>My projects</h2>
        <Projects />
      </div>
    </div>
  );
}

export default Home;