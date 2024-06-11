import React, { useState } from "react";
import Modal from "../../components/Modal";
import aboutBackground from "../../../assets/images/ai_4.jpg";
import profileImage from "../../../assets/images/Ny selv-bilde 2021.jpg";
import '../../Styles/Fonts/Ubuntu.css';

const About: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="about" className="relative w-full min-h-screen bg-cover bg-center flex flex-col" style={{ backgroundImage: `url(${aboutBackground})` }}>
      <div className="flex flex-col ml-5 md:ml-16 mb-6">
        <h2 className='ubuntu-bold text-white text-left text-2xl font-semibold mt-10 mb-1'>About Me</h2>
        <div className='h-1 w-20 bg-[#75D6FF] rounded-r-full mb-1'></div>
        <div className='h-0.5 w-10 bg-[#75D6FF] rounded-r-full'></div>
      </div>
      <div className="container mx-auto p-4">
        <div className="bg-gradient-to-b from-[#051120] to-[#152B44] border-2 border-[#75D6FF] rounded-lg shadow-lg p-3 sm:p-6 xl:ml-12 max-w-md w-full text-white">
          <img src={profileImage} alt="Profile" className="w-28 h-36 rounded-full mx-auto shadow-lg mb-4"/>
          <h1 className="text-[#75D6FF] text-3xl ubuntu-bold text-center mb-2">Aksel</h1>
          <p className="text-left my-6">A passionate front-end developer and artist with a focus on creating visually appealing and user-friendly interfaces. I strive to deliver the best possible user experience through modern technologies.</p>
          <div className="text-left mb-4">
            <div className="flex flex-col sm:flex-row">
              <p className="text-[#75D6FF] font-semibold sm:mb-2 mr-3">Email: </p>
              <p className="mb-2 sm:mb-0"> aksel.boutrouefaret@yahoo.com</p>
            </div>
            <div className="flex flex-row">
              <p className="text-[#75D6FF] font-semibold mr-3">Phone: </p>
              <p> +47 472 32 199</p>
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={openModal}
              className="bg-[#1260BC] text-white px-12 py-2 my-6 rounded hover:bg-blue-600"
            >
              View CV
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <iframe
          src="/pdf/CV-finished version 2024.pdf"
          title="CV"
          className="w-full h-full"
        />
        <div className="text-center mt-4">
          <a
            href="/pdf/CV-finished version 2024.pdf"
            download="Aksel_CV.pdf"
            className="bg-[#1260BC] text-white px-12 py-2 rounded hover:bg-blue-600"
          >
            Download CV
          </a>
        </div>
      </Modal>
    </section>
  );
};

export default About;