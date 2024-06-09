import React from "react";
import aboutBackground from "../../../assets/images/ai_4.jpg";
import profileImage from "../../../assets/images/Ny selv-bilde 2021.jpg";
import '../../Styles/Fonts/Ubuntu.css';

const About: React.FC = () => {
  return (
    <section id="about" className="relative w-full min-h-screen bg-cover bg-center flex flex-col" style={{ backgroundImage: `url(${aboutBackground})` }}>
      <div className="flex flex-col">
        <h2 className='ubuntu-bold text-white text-left text-2xl font-semibold mt-10 ml-16 mb-1'>About Me</h2>
        <div className='h-1 w-20 bg-[#75D6FF] rounded-r-full ml-16 mb-1'></div>
        <div className='h-0.5 w-10 bg-[#75D6FF] rounded-r-full ml-16 mb-6'></div>
      </div>
      <div className="container mx-auto p-4">
        <div className="bg-gradient-to-b from-[#051120] to-[#152B44] border-2 border-[#75D6FF] rounded-lg shadow-lg p-6 xl:ml-12 max-w-md w-full text-white">
          <img src={profileImage} alt="Profile" className="w-28 h-36 rounded-full mx-auto shadow-lg mb-4"/>
          <h1 className="text-[#75D6FF] text-3xl ubuntu-bold text-center mb-2">Aksel</h1>
          <p className="text-center mb-4">A passionate front-end developer with a focus on creating visually appealing and user-friendly interfaces. I specialize in React, TypeScript, and TailwindCSS, striving to deliver the best possible user experience through modern web technologies.</p>
          <div className="text-center mb-4">
            <p>Email: aksel.boutrouefaret@yahoo.com</p>
            <p>Phone: +47 472 32 199</p>
          </div>
          <div className="text-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View CV</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;